import Vue from 'vue';
import Login from '@/components/Login.vue';
import 'element-ui/lib/theme-chalk/index.css';
import Home from '@/components/Home.vue';
import Router from 'vue-router';
import Welcome from '@/components/Welcome.vue';

Vue.use(Router);

const routes = [
  { path: '/', redirect: '/login' },
  { path: '/login', component: Login },
  {
    path: '/home',
    component: Home,
    redirect: '/welcome',
    children: [
      { path: '/welcome', component: Welcome }
    ]
  }
];

const router = new Router({
  routes
});

router.beforeEach((to, from, next) => {
  // 如果用户没有 token，说明没有登陆，则跳转到用户登陆页，否则正常访问
  const token = window.sessionStorage.getItem('token');

  console.log(token);

  // 如果用户未登录且目标路径不是 /login，则重定向到 /login
  if (to.path !== '/login' && token === null) {
    return next('/login');
  }
  // 如果用户已登录且尝试访问 /login，则重定向到 /home
  if (to.path === '/login' && token !== null) {
    return next('/home');
  }
  return next();
});

export default router;
