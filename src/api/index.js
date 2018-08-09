import fetch from './ajax'
export const DEBUG = false // 是否开发模式
const HTTP_DEV = 'https://yufabu-policy-wx.kcimg.cn' // 测试地址
const HTTPS = 'https://kjt-wx.kcimg.cn' // 正式地址
const URLS = DEBUG ? HTTP_DEV : HTTPS
class XHR {
  getZombieList(json) { // 获取僵尸粉列表
    return fetch({
      url: `${URLS}/getZombieList`,
      body: json,
      type: 'GET'
    })
  }
}

export default new XHR()
