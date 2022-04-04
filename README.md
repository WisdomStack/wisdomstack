# wisdomstack
《智慧栈》 智慧管理运维平台

## 技术架构

```

《智慧栈》全栈开发计划大纲

1. WEB端:
    a. 功能模块:  驾驶舱\登录注册\即时通讯
    b. 技术栈: vue3 + Element-plus + SSR(Nuxt)

2. 管理后台:
    a. 功能模块:  基础配置\用户管理\订单管理
    b. 技术栈: vue3 + Element-plus

3. APP+小程序
    a. 功能模块:  驾驶舱\登录注册\即时通讯
    b. 技术栈:  uni-app/RN

4. 服务端(管理端/客户端)
    a. 功能模块:
    b. 技术栈:  NestJs + MongoDB

```



## lerna

```
# 初始化
$ lerna init  # 可加 -i/--independen

# 所有包的依赖安装到根 node_modules
$ lerna bootstrap

# 在每个包里边运行指定的 script 命令
$ lerna run < script > -- [..args]

#在每个包运行任意命令
$ lerna exec -- < command > [..args]
# example
$ lerna exec -- rm -rf ./node_modules
$ lerna exec -- protractor conf.js

```

## NestJs

```
# 创建项目
$ nest new server

# 单体仓库模式
$ cd server
$ nest g app admin (及子应用)

# 启动项目(子项目)
$ nest start -w admin

# 创建公共库
$ nest g lib db  # 建议 @libs

# 数据库模块
$ yarn add nestjs-typegoose @typegoose/typegoose
$ yarn add mongoose @types/mongoose

# 创建子模块
$ nest g mo -p admin users 
$ nest g co -p admin users 
$ nest g mo -p admin courses
$ nest g co -p admin courses


# 数据库操作依赖
$ yarn add nestjs-mongoose-crud

# Swaager
$ yarn add @nestjs/swagger swagger-ui-express
```

## 数据库
```
# 进入MongoDB容器, 进入MongoDB shell
# docker exec -it mongodb /bin/bash
# mongo mongodb://localhost:27017 -u root -p 123456

# 然后查看数据库
# > show dbs;

# 切换到admin的数据库，新建用户
# > use admin

# use wisdomstack
# db.createUser(
#   {
#     user: "root",
#     pwd: "123456",
#     roles: [ { role: "readWrite", db: "wisdomstack" } ]
#   }
# )
```
