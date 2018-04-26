const request = require('request')
const requestP = require('request-promise')
const fs = require('fs')
const puppetter = require('puppeteer')
let ls = require('./config')
const proxys = JSON.parse(fs.readFileSync('./result.json'))
var proxy = ''
var wrongTimes = 0
async function test() {
  for (let i = 0; i < proxys.length; i++) {
    proxy = proxys[i]
    let isOk = await check(proxy)
    if (isOk) {
      await main()
    } else {
      console.log('代理失效，换下一个')
    }
  }
}
test()

function normal(o) {
  let options = {
    proxy: 'http://' + proxy,
    method: o.method || 'POST',
    url: o.url,
    headers: {
      'Content-Type': 'application/json;charset=UTF-8',
      'User-Agent': 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/65.0.3325.162 Safari/537.36',
    }
  }
  if (o.formData) {
    options.formData = o.params
  } else {
    options.json = true
    if (options.method === 'POST') {
      options.body = o.params
    } else {
      options.qs = o.params
    }
  }
  return new Promise((resolve, reject) => {
    let flag = false
    setTimeout(() => {
      if (!flag) {
        flag = true
        wrongTimes++
        resolve(true)
      }
    }, 10000);
    request(options, (e,r,b) => {
      if (b && !flag) {
        flag = true
        wrongTimes = 0
        console.log(b)
        resolve(true)
      }
    })
  })
}
function check(s) {
  s = 'http://' + s
  let timeout = 5000
  let opt = {
    proxy: s,
    method: 'GET',
    url: 'https://www.baidu.com',
    timeout: timeout
  }
  return new Promise((resolve, reject) => {
   let flag = false
   requestP(opt).then(
    (res) => { 
     flag = true
     resolve(true)
    }
   ).catch(
    (e) => {
      flag = true
      resolve(false)
    }
   )
   setTimeout(() => {
     if (!flag) resolve(false)
   }, timeout)
  })
  
}
function main() {
  console.log(proxy)
  let args = [
    '--no-sandbox',
    '--disable-setuid-sandbox',
    '--proxy-server=' + proxy
  ]
  return new Promise((resolve, reject) => {
    puppetter.launch({
      headless: false,
      args: args
    }).then(async browser => {
      for (let i = 0; i < ls.length; i ++) {
        if (wrongTimes === 3) {
          console.log('连续超时')
          wrongTimes = 0
          break
        }
        let o = ls[i]
        if (o.p) {
          await pupp(o, browser)
        } else {
          await normal(o)
        }
        console.log(`${i+1}/${ls.length}`)
      }
      await browser.close()
      resolve(true)
    })
  })
}
function pupp(o, browser) {
  return new Promise(async (resolve, reject) => {
    let page = await browser.newPage()
    let flag = false
    setTimeout(async () => {
      if (!flag) {
        await page.close()
        flag = true
        wrongTimes++
        resolve(true)
      }
    }, 10000);
    await page.setRequestInterception(true)
    page.on('request', (request) => {
      if (['image', 'stylesheet', 'font'].indexOf(request.resourceType()) !== -1) {
        request.abort()
      } else {
        request.continue()
      }
    })
    await page.goto(o.url)
    await page.waitForSelector(o.numberEl)
    await page.type(o.numberEl, o.number, {delay: 20})
    await sleepTime(500)
    await page.click(o.confirmEl)
    await sleepTime(100)
    await page.click(o.confirmEl)
    sleepTime(200)
    await page.deleteCookie()
    flag = true
    wrongTimes = 0
    await page.close()
    resolve(true)
  })
}
function sleepTime(t) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(true)
    }, t);
  })
}
