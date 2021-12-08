import { createSSRApp } from 'vue'
import App from './App.vue'

function request(payload) {
  return new Promise<any>((reslove, reject) => {
    const param = {
      header: {
        Authorization: 'st3157f2B7400796b819dd60740bf1',
      },
      ...payload,

      /* #ifdef MP-WEIXIN */
      // url: 'https://s.ismart720.com' + payload.url,
      /* #endif */
      success(res) {
        reslove(res.data)
      },
      fail(err) {
        reject(err)
      },
    }

    uni.request(param)
  })
}
export function createApp() {
  const app = createSSRApp(App)
  app.provide('UseRequestConfigContext', {
    requestMethod: (param: any) => request(param),
  })
  return {
    app,
  }
}
