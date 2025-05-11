# vue-shop

本项目是参考[黑马程序员-前端开发之Vue项目实战_Element-UI](https://www.bilibili.com/video/BV1x64y1S7S7?spm_id_from=333.788.player.switch&vd_source=2467d52477b91eac005d50efcda2bfbe&p=11)的视频写的练习项目

后端服务参考：[https://gitee.com/ji_pin_hui/vueShop-api-server](https://gitee.com/ji_pin_hui/vueShop-api-server)

后端接口文档：docs/api接口文档.md

## 系统模块

![](https://cdn.nlark.com/yuque/0/2025/png/26184762/1744903678698-3cbf8392-4d68-412d-a011-713975bf2ec8.png)

## 开发模式

![](https://cdn.nlark.com/yuque/0/2025/png/26184762/1744904055702-e779db35-4048-4f0c-9f4a-f5ccebb8274f.png)

+ 数据库：负责保存数据；
+ 后端项目：负责操作数据库，并给前端项目提供可访问数据的 API 接口；
+ 前端项目：提供可视化的操作界面，方便用户操作和数据维护；
+ 用户：系统使用者；

## 项目技术栈

+ Vue：项目脚手架；
+ Vue-router：Vue 路由；
+ Element-UI：前端组件库；
+ Axios：用于发起网络请求；
+ Echarts：用于绘制图形化报表；

### 问题

- Client does not support authentication protocol requested by server; consider upgrading MySQL client

原因：MySQL 8.0 默认使用 caching_sha2_password 认证插件，而旧版客户端可能只支持 mysql_native_password 认证方式。

解决方案：

```
-- 连接到 MySQL 服务器
mysql -u root -p

-- 修改用户认证方式
ALTER USER 'your_username'@'%' IDENTIFIED WITH mysql_native_password BY 'your_password';

-- 刷新权限
FLUSH PRIVILEGES;
```
