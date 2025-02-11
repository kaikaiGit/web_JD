import Vue from 'vue'
import App from './App.vue'
import router from './router'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

import './style/base.css' //清除公共样式
import './style/common.css' //设置基本样式
import './style/iconfont.css' //引入字体图标
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.js' 


Vue.config.productionTip = false;
//使用elementUI
Vue.use(ElementUI);

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
