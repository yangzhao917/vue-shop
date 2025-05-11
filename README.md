# vue-shop

本项目是参考[黑马程序员-前端开发之Vue项目实战_Element-UI](https://www.bilibili.com/video/BV1x64y1S7S7?spm_id_from=333.788.player.switch&vd_source=2467d52477b91eac005d50efcda2bfbe&p=11)的视频写的练习项目

后端服务参考：[https://gitee.com/ji_pin_hui/vueShop-api-server](https://gitee.com/ji_pin_hui/vueShop-api-server)

后端接口文档：/docs/api接口文档.md

## 系统模块

![](https://cdn.nlark.com/yuque/0/2025/png/26184762/1744903678698-3cbf8392-4d68-412d-a011-713975bf2ec8.png)

## 开发模式

![](https://cdn.nlark.com/yuque/0/2025/png/26184762/1744904055702-e779db35-4048-4f0c-9f4a-f5ccebb8274f.png)

+ 数据库：负责保存数据；
+ 后端项目：负责操作数据库，并给前端项目提供可访问数据的 API 接口；
+ 前端项目：提供可视化的操作界面，方便用户操作和数据维护；
+ 用户：系统使用者；

## 项目技术栈

![](https://cdn.nlark.com/yuque/0/2025/png/26184762/1744904298233-874c37bd-0208-4f26-a8f5-3701a2c3023d.png)

+ Vue：项目脚手架；
+ Vue-router：Vue 路由；
+ Element-UI：前端组件库；
+ Axios：用于发起网络请求；
+ Echarts：用于绘制图形化报表；

## 项目初始化步骤

![](https://cdn.nlark.com/yuque/0/2025/png/26184762/1744904535869-77fd76eb-23b2-44fe-81f4-c70a6dff52a7.png)

### 脚手架创建项目

```plain
# 创建项目 vue-shop
zhao@ZHAOdeMacBook-Pro front-end_project % mkdir vue-shop
zhao@ZHAOdeMacBook-Pro front-end_project % cd vue-shop

# 安装Vue脚手架
zhao@ZHAOdeMacBook-Pro vue-shop % npm i @vue/cli

# vue ui是 Vue3.x 版本以上才支持，vue2 需要通过vue create 来创建项目
```


## 登录/退出功能

![](https://cdn.nlark.com/yuque/0/2025/png/26184762/1744910225149-581ccf84-7c62-4629-88c9-dfcbf36800e4.png)

![](https://cdn.nlark.com/yuque/0/2025/png/26184762/1744910457656-701e0073-c7b8-45d3-9e57-3bb8f963d46a.png)

:::info
如果不存在跨域问题，使用 cookie 和 session；存在跨域问题使用 token。

:::

### 问题
+ <font style="color:rgb(38, 38, 38);background-color:rgb(239, 246, 255);">Client does not support authentication protocol requested by server; consider upgrading MySQL client</font>

<font style="color:rgb(38, 38, 38);background-color:rgb(239, 246, 255);">原因：</font><font style="color:rgb(64, 64, 64);">MySQL 8.0 默认使用 </font>`<font style="color:rgb(64, 64, 64);">caching_sha2_password</font>`<font style="color:rgb(64, 64, 64);"> 认证插件，而旧版客户端可能只支持 </font>`<font style="color:rgb(64, 64, 64);">mysql_native_password</font>`<font style="color:rgb(64, 64, 64);"> 认证方式。</font>

<font style="color:rgb(64, 64, 64);">解决方案：</font>

```plain
-- 连接到 MySQL 服务器
mysql -u root -p

-- 修改用户认证方式
ALTER USER 'your_username'@'%' IDENTIFIED WITH mysql_native_password BY 'your_password';

-- 刷新权限
FLUSH PRIVILEGES;
```