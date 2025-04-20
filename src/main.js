import Vue from 'vue'; // 导入组件
import App from './App.vue';
import router from './router';
import ElementUI from 'element-ui';

import axios from 'axios';

// 导入全局样式表
import './assets/css/global.css';
import 'font-awesome/css/font-awesome.css';

// 配置请求的根路径
axios.defaults.baseURL = 'http://127.0.0.1:8888/api/private/v1/';

Vue.config.productionTip = false;
Vue.prototype.$http = axios;
Vue.use(ElementUI);

// 挂载组件
new Vue({
  router,
  axios,
  render: h => h(App)
}).$mount('#app');
