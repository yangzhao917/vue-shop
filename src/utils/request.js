import axios from 'axios';

// 创建 Axios 实例
const service = axios.create({
  baseURL: 'http://127.0.0.1:8888/api/private/v1/', // 配置请求的根路径
  timeout: 3000 // 请求超时时间
});

// 请求拦截器（可添加 Token）
service.interceptors.request.use(
  (config) => {
  // 在发送请求之前做些什么
    const token = localStorage.getItem('token');
    if (token) {
      config.headers.Authorization = `${token}`;
    }
    return config;
  },
  (error) => {
    // 对请求错误做些什么
    return Promise.reject(error);
  }
);

// 响应拦截器
service.interceptors.response.use(
  (response) => {
    // 对响应数据做些什么
    return response.data;
  },
  (error) => {
    // 对响应错误做些什么
    // if (error.meta.status === 401) {
    //   alert('登陆已过期，请重新登陆')
    //   router.push('/login')
    // }
    return Promise.reject(error);
  }
);

export default service;
