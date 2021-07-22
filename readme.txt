第3节 NodeJS核心API实战项目-数据模型
   Express handlebars简介
博客分类： 技术型
 
今天我们一块学习下nodejs模板引擎express-handlebars

首先安装

npm install express-handlebars --save

 

下面看看用法

 

1，使用express-handlebars模板引擎创建的项目的目录结构保持如下结构

 

Html代码  收藏代码
.  
├── app.js  
└── views  
    ├── home.handlebars  
    └── layouts  
        └── main.handlebars  
 

 2，下面是使用express-hanlebars模板引擎创建一个超级简单的express应用的实例

app.js

Js代码  收藏代码
var express = require('express');  
var exphbs  = require('express-handlebars');  
   
var app = express();  
   
app.engine('handlebars', exphbs({defaultLayout: 'main'}));  
app.set('view engine', 'handlebars');  
   
app.get('/', function (req, res) {  
    res.render('home');  
});  
   
app.listen(3000);  
 

 3，看看express-handlebars页面结构如何
views/layouts/main.handlebars
Html代码  收藏代码
<!DOCTYPE html>  
<html>  
<head>  
    <meta charset="utf-8">  
    <title>Example App</title>  
</head>  
<body>  
    {{{body}}}  
</body>  
</html>  
 
 main.handlebars作为应用程序的入口文件，其它.handlebars文件相当于{{body}}中的内容。
 4，下面为views/home.handlebars页面添加内容
Html代码  收藏代码
<h1>Example App: Home</h1>  
 
5，express-handlebars公共模板partials

开发中经常用到的页面导航、头部、页脚等公共部分可以放到partials目录中

添加公共导航目录文件views/partials/navbar.handlebars

 

在页面中引用

Html代码  收藏代码
<!DOCTYPE html>  
<html>  
<head>  
    <meta charset="utf-8">  
    <title>Example App</title>  
</head>  
<body>  
    {{>navbar}}  
    {{{body}}}  
</body>  
</html>  
 

5，执行npm start查看页面效果。