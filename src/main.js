import Vue from 'vue'
import App from './App'
// 导入路由文件
import router from './router'
// 按需引入mint ui的组件
// 引入header组件
import { Header ,Swipe, SwipeItem,Button } from 'mint-ui'
// 注册header组件
Vue.component(Header.name, Header)
// 注册mint_ui的轮播图组件
Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);
// 注册Button组件
Vue.component(Button.name, Button)
// 导入mui组件库样式
import  "./lib/mui/css/mui.css"
// 导入mui的图标组件库
import  "./lib/mui/css/icons-extra.css"
// 引入自己的css文件
import "./css/common.css"
// 导入vue-resource
import vueResource from "vue-resource"
// 注册vue-resource
Vue.use(vueResource)
// 设置vue-resource的根域名
Vue.http.options.root = 'http://www.lovegf.cn:8899/'
// 注册vue的全局过滤器,借助momemt.js(javascript日期处理类库)
// 导入moment.js
import moment from "moment"
Vue.filter('dateFormat', function (dateStr,pattern="YYYY-DD-MM HH:mm:ss") {
  // console.log(dateStr)
  return moment(dateStr).format(pattern)
  
})

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  // 注册路由
  router,
  render: h => h(App)
})
