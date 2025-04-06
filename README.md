# Echo博客

## ⚡ 简介 introduction

一个前后端分离的个人博客项目

已适配移动端、PC端，适合新手用于学习。

[博客前台在线预览地址](https://echoblog.com.cn)

[博客后台在线预览地址](https://echoblog.com.cn/admin)

## 项目介绍

前端主要技术：Vue3、ELement-Plus、Vue-router、Pinia、Tailwind.css、Sass、Animate.css、PureAdmin、Vite

后端主要技术：Node.js、Koa、Koa-router、Seqlize、Mysql、qiniu(七牛云对象存储)、bcryptjs、nodemon等主流技术

## 项目启动

### **博客前台**

```
# pnpm 版本 v7.27.0
# node 版本 v18.17.0
# 文件夹——blog-v3

1、下载项目
git clone https://github.com/FantasyBee/EchoBlog.git
git clone git@github.com:FantasyBee/EchoBlog.git
Tips: 或者下载zip打开，这样不会和我的仓库关联，不过可以自行解除关联

2、打开项目，安装依赖（安装依赖报错可以降低自己的npm版本或者网上百度解决方法，一般情况下不会有问题）
pnpm install

3、运行项目
pnpm run serve
```

### **博客后台**

```
# pnpm 版本 v7.26.3
# node 版本 v16 v18 都可
# 文件夹——blog-v3-admin

1、下载项目
git clone https://github.com/FantasyBee/EchoBlog.git
git clone git@github.com:FantasyBee/EchoBlog.git

2、打开项目，安装依赖
pnpm install

3、运行项目
pnpm run serve
```

### **博客后端**

```
# npm 版本 v6.14.17
# node 版本 v16 v18 都可
# 文件夹——blog-server

1、下载项目
git clone https://github.com/FantasyBee/EchoBlog.git
git clone git@github.com:FantasyBee/EchoBlog.git

2、打开项目，安装依赖
npm install

3、数据库是mysql，需要先连接数据库
(1) 打开项目，在根目录下找到src文件夹下的db文件夹，里面有数据库的sql文件
(2) 使用navicat/datagrip创建一个空的数据库架构，运行这个sql文件，就可以生成表
(3) 打开项目根目录下的.env文件，根据注释修改自己的mysql数据库账号名称、密码进行连接即可

4、运行项目
npm run serve

Tips：.env文件下可以配置项目的图片上传文件方式，local为本地上传，minio为上传到minio对象存储，qiniu为上传到七牛云存储，online为上传到自己的云服务器，我这里是使用了七牛云存储
```

## 使用说明

免费使用
大家随意发挥