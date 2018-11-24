---
title: Getting Started with Back End Projects
localeTitle: 后端项目入门
---
第一个后端项目的课程开发不是很全面。以下是其他露营者发现的一些常见资源。

*   Yeoman简介 - Yeoman Angular Fullstack设置的许多有用提示和技巧
*   [角度生成器](https://github.com/DaftMonk/generator-angular-fullstack#generators) - Yeoman使用的[生成](https://github.com/DaftMonk/generator-angular-fullstack#generators)器，您可以找到语法及其创建的文件

## 蜜蜂

*   绘制股票市场的API： [https](https://www.quandl.com/help/api) ： [//www.quandl.com/help/api](https://www.quandl.com/help/api)

## MEAN Stack教程和视频

*   5部分系列关于设置MEAN堆栈  
    [https://www.youtube.com/watch?v=kHV7gOHvNdk](https://www.youtube.com/watch?v=kHV7gOHvNdk)
*   一个MEAN教程，创建一个简单的Twitter克隆  
    [https://channel9.msdn.com/Series/MEAN-Stack-Jump-Start](https://channel9.msdn.com/Series/MEAN-Stack-Jump-Start)
*   Clementine是一个精简的MEAN堆栈，非常适合学习基础知识。  
    [https://johnstonbl01.github.io/clementinejs/tutorials/tutorial-beginner.html](https://johnstonbl01.github.io/clementinejs/tutorials/tutorial-beginner.html)
*   使用Passport进行MEAN堆栈身份验证：  
    [https://vickev.com/#!/article/authentication-in-single-page-applications-node-js-passportjs-angularjs](https://vickev.com/#!/article/authentication-in-single-page-applications-node-js-passportjs-angularjs)
*   用于学习MEAN堆栈的惊人资源列表：  
    [https://github.com/ericdouglas/MEAN-Learning](https://github.com/ericdouglas/MEAN-Learning)

## Scotch IO教程

*   [https://scotch.io/tutorials/setting-up-a-mean-stack-single-page-application](https://scotch.io/tutorials/setting-up-a-mean-stack-single-page-application)
*   [https://scotch.io/tutorials/node-and-angular-to-do-app-application-organization-and-structure](https://scotch.io/tutorials/node-and-angular-to-do-app-application-organization-and-structure)

## 节点/快递

*   [Node.js / Express的在线调试](http://stackoverflow.com/a/16512303/1420506)

## Cloud 9技巧

### 加快浏览器重新加载速度

1.  打开gruntfile.js并编辑livereload的两个实例`livereload: true`到`livereload: false` 。
2.  打开server / config / express.js并注释掉`app.use(require('connect-livereload')());`