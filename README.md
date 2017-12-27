# react-ele.me
第五组协作项目
## 项目技术构架
- react
- redux
- react-redux
- react-router
- react-swipe
- less
- express
- request
- webpack
## 安装
项目地址
```
git clone https://github.com/dogXgod/ele.me.git
```
通过npm安装本地服务第三方依赖模块(需要已安装Node.js)
```
npm install
```
启动服务(http://localhost:8080)
```
npm run dev-node
npm run dev-web
```

## 目录结构
```
├─build--------------# 静态目录文件夹   
├─server-------------# node服务文件及mock文件
├─src----------------# 生产目录   
│  ├─api-------------# ajax方法目录
│  ├─components------# 公共组件文件
│  ├─containers------# 页面级组件文件
│  ├─store-----------# redux仓库
│  ├─style-----------# 公共样式文件
│  ├─util------------# 工具方法文件
│  ├─index.js--------# Webpack 预编译入口
│ index.html---------# 项目入口文件
│ package.json-------# npm说明文件
│ webpack.config.js--# webpack配置文件
```

## 完成的功能
- 自动获取地址，天气，热搜词汇
- 主页滚动，banner
- 搜索、筛选功能(暂时只能筛选月销量)
- 店铺详情页点击锚点滑动
- 加入购物车，计算总价，数量
- 获取评价列表

## 正在实现的功能
- 无限加载
- 修改地址
- 加入购物车的动画
- 筛选店铺评论
- 更多精彩内容

## 页面快照
[主页](/snapshot/主页.png)
[发现页](/snapshot/发现页.png)
[订单](/snapshot/订单.png)
[我的](/snapshot/我的.png)
[店铺详情](/snapshot/店铺详情.png)
[店铺信息](/snapshot/店铺信息.png)
[店铺购物车](/snapshot/店铺购物车.png)
[店铺评价](/snapshot/店铺评价.png)
[支付页](/snapshot/支付页.png)
[搜索页](/snapshot/搜索页.png)
[注册](/snapshot/注册.png)
[地址](/snapshot/地址.png)
[修改地址](/snapshot/修改地址.png)

