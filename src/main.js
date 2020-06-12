// 框架 - vue
import Vue from 'vue'
import App from './App.vue'
import store from './store/index'

// 框架 - element-ui
import './plugins/element.js'
import Element from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

// 样式 - 通用样式
import "./common/less/index.less";

// 使用动画wow
import './assets/css/animate.min.css'
import {WOW} from 'wowjs';
new WOW({live: false}).init();

// 粒子动效
import VueParticles from 'vue-particles'
Vue.use(VueParticles)

// 功能 - 路由
import router from './router';

Vue.config.productionTip = false
Vue.use(Element);

new Vue({
  store,
  router,
  render: h => h(App),
}).$mount('#app')
