let mobile = '13124112361'
let password = 'b123456aA'
let name = 'cureenTa123'
let account = 'currentA222'
let list = [
  {
    url: 'http://art.renmei.com.cn/mobile/register.php?act=send_mobile_code',
    params: {
      mobile_phone: mobile,
      national_code: '86'
    },
    formData: true
  },
  {
    url: 'https://101oc.chinaedu.com/oc/register/getVerifyCode.do',
    params: {
      mobile: mobile,
      rand: '0.7943008405150' + randomNum(2)
    },
    formData: true
  },
  {
    url: 'http://www.ef-school.com/index/index/duanxin',
    params: {
      zhanghaos: account,
      xingming: name,
      shoujihao: mobile
    },
    formData: true
  },
  {
    url: 'https://wcgi.jianke.com/captcha/sms/captchas',
    params: {
      phoneNum: mobile,
      ticket: '313c4e45-2d35-41a4-ab9c-9942fe71b' + randomNum(3)
    }
  },
  {
    url: 'http://www.120v.cn/front/member/sendAuthCode',
    params: {
      tel: mobile
    },
    formData: true
  },
  {
    url: 'http://www.marcopolo.com.cn/accounts/send-captcha',
    method: 'GET',
    params: {
      r: '0.182438136404' + randomNum(4),
      phone: mobile
    }
  },
  {
    p: true,
    url: 'http://www.bacodes.com/register.html',
    numberEl: '#phone',
    confirmEl: `input[value='获取验证码']`,
    number: mobile
  },
  {
    url: 'http://www.hljsdm.com/user.php?act=sms',
    params: {
      tel: mobile
    },
    formData: true
  },
  {
    url: 'https://passport.womai.com/sms/sendSms.do',
    params: {
      mobile: mobile,
      valiCode: '',
      channelFlag: 1,
      sendOrCall: 'send',
      from: 'phone'
    },
    formData: true
  },
  {
    p: true,
    url: 'http://www.taiqischool.com/register',
    numberEl: '#register_mobile',
    confirmEl: '.js-sms-send-btn',
    number: mobile
  },
  // [10]
  {
    p: true,
    url: 'http://edu.hdfyk.com/registerRedirect.do?action=toRegister&fromurl=http%3A%2F%2Fedu.hdfyk.com%2F',
    numberEl: '#J_regMobile',
    confirmEl: '#J_getMessage',
    number: mobile
  },
  {
    p: true,
    url: 'http://class.mison.com.cn/registerRedirect.do?action=toRegister&fromurl=http%3A%2F%2Fclass.mison.com.cn%2F',
    numberEl: '#J_regMobile',
    confirmEl: '#J_getMessage',
    number: mobile
  },
  {
    p: true,
    url: 'http://www.baxsun.cn/uc/login/reg',
    numberEl: '#loginform-mobile',
    confirmEl: '#second',
    number: mobile
  },
  {
    p: true,
    url: 'https://www.lbxcn.com/hepstorefront/lbx/zh/register',
    numberEl: '#phoneNum',
    confirmEl: '.btn-default',
    number: mobile
  },
  {
    p: true,
    url: 'https://stock.tuchong.com/accounts/register',
    numberEl: '.ui-input input',
    confirmEl: '.sms-button',
    number: mobile
  },
  {
    p: true,
    url: 'http://www.laozongyi.com/member.php?mod=register',
    numberEl: '#username',
    confirmEl: '#countdown',
    number: mobile
  },
  {
    p: true,
    url: 'http://my.kinhom.com/passport/register',
    numberEl: `input[name='phone']`,
    confirmEl: '#J_getPhoneCode',
    number: mobile
  },
  {
    url: 'http://gz.howjia.com/index/plugin/execute/_plugin/Sms/_controller/Sms/_action/sendCode.html',
    params: {
      phone: mobile
    },
    formData: true
  },
  {
    url: 'http://www.chinamlmcc.com/LoginValidateCode.aspx',
    method: 'GET',
    params: {
      action: 'GetSMS',
      mobile: mobile,
      id: '0.51606761006736' + randomNum(2)
    }
  },
  {
    p: true,
    url: 'https://passport.ingping.com/reg/index?retUrl=https%3A%2F%2Fwww.ingping.com',
    numberEl: `#phoneNum`,
    confirmEl: '#sendRegMsgA',
    number: mobile
  },
  // [20] http://www.guitarworld.com.cn/member.php?mod=register&formhash=197015c1
  {
    p: true,
    url: 'http://www.guitarworld.com.cn/member.php?mod=register&formhash=197015c1',
    numberEl: `#phone`,
    confirmEl: '#btnGetCode',
    number: mobile
  },
  {
    url: 'http://nq.nianqin.cc/JsDo/SendSMS_Reg.ashx',
    params: {
      moblie: mobile
    },
    formData: true
  },
  {
    url: 'http://www.hqgq.com/user/register/send_verify_code',
    method: 'GET',
    params: {
      phone: mobile
    }
  },
  {
    url: 'https://mapi.feixiaohao.com/tool/GetSms',
    method: 'GET',
    params: {
      telno: mobile
    }
  },
  {
    p: true,
    url: 'https://www.crfchina.com/reg.html',
    numberEl: `#regName`,
    confirmEl: '.btn_verification',
    number: mobile
  },
  {
    p: true,
    url: 'https://www.facebank.cn/login',
    numberEl: `#telPhone`,
    confirmEl: '#a_validcode',
    number: mobile
  },
  {
    p: true,
    url: 'https://www.jujr.com/register/',
    numberEl: `#mobile`,
    confirmEl: '#getSmsCodeBtn',
    number: mobile
  },
  {
    p: true,
    url: 'https://www.xinrong.com/2.0/views/account/register4.0.shtml',
    numberEl: `#mobilephone`,
    confirmEl: '#sendYuyinMsg a',
    number: mobile
  },
  {
    p: true,
    url: 'http://dev.10086.cn/cmph5?from=',
    numberEl: `#inputPhoneNum`,
    confirmEl: '#getVeriBtn',
    number: mobile
  },
  {
    p: true,
    url: 'https://static.ifaclub.com/baidu/pc2/index.html?',
    numberEl: `.modal-phone1`,
    confirmEl: '#getcode1',
    number: mobile
  },
  // [30]
]
function randomNum(l) {
  return Math.random().toString().substring(2, 2 + l)
}
module.exports = list
