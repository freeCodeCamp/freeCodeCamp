---
title: Semantic UI
localeTitle: 语义UI
---
## 语义UI

#### 介绍

语义UI是一个前端开发框架，类似于为主题设计的bootstrap。它包含预先构建的语义组件，可帮助使用人性化的HTML创建美观且响应迅速的布局。

根据Semantic UI网站，该框架利用简洁的HTML，直观的JavaScript和简化的调试，使前端开发成为一种有趣和愉快的体验。它与React，Angular，Meteor，Ember和许多其他框架集成，以帮助组织UI层和应用程序逻辑。

#### 版本历史

第一个预发布版本于2013年9月在github上出现，由[Jack Lukic](https://github.com/jlukic)创建。

Semantic UI `1.x`于2014年11月首次发布，对以前的预发行版进行了重大更改。

Semantic UI `2.x`于2015年6月首次发布，并引入了新的ui，一些错误修复，增强功能和默认主题改进。

#### 浏览器支持

当前版本`2.2.x`支持以下浏览器

*   最新的2个版本FF，Chrome，Safari Mac
*   IE 11+
*   Android 4.4及更高版本，适用于Android 44+的Chrome
*   iOS Safari 7+
*   Microsoft Edge 12+

#### 安装

有几种方法可以安装Semantic UI，其中一些最简单的方法如下：

1.  **通过内容分发网络（CDN）**

对于初学者来说，它是迄今为止最容易的。创建一个HTML文件，如下所示

```html

<!DOCTYPE html> 
 <html> 
  <head> 
    <title>Semantic UI</title> 
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.2.13/semantic.min.css"> 
    <!-- Add custom stylesheet here --> 
  </head> 
  <body> 
 
    <!-- Write your html code here --> 
 
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script> 
    <script src="https://cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.2.13/semantic.min.js"></script> 
  </body> 
 </html> 
```

`NOTE:`第5行上面的CDN链接将包含Semantic UI中的所有可用组件。如果要安装特定组件， [请单击此处](https://cdnjs.com/libraries/semantic-ui)以查看其各自的CDN链接。

2.  **使用构建工具**

这将假设您正在使用安装了`node`和`npm` Ubuntu Linux操作系统，对于其他操作系统， [请单击此处](https://semantic-ui.com/introduction/getting-started.html)

在项目目录中，使用npm全局安装gulp
```
npm install -g gulp 
```

安装语义UI
```
npm install semantic-ui --save 
 cd semantic/ 
 gulp build 
```

包含在HTML中

```html

<link rel="stylesheet" type="text/css" href="semantic/dist/semantic.min.css"> 
 <script src="https://code.jquery.com/jquery-3.1.1.min.js" integrity="sha256-hVVnYaiADRTO2PzUGmuLJr8BLUSjGIZsDYGmIJLv2b8=" crossorigin="anonymous"></script> 
 <script src="semantic/dist/semantic.min.js"></script> 
```

通过npm更新
```
npm update 
```

3.  **与其他框架集成**

您可以将Semantic UI与其他前端开发框架（如React，Angular，Ember或Meteor）集成。 [单击此处](https://semantic-ui.com/introduction/integrations.html)获取更多信息和集成说明。

#### 更多信息

语义用户界面拥有完整且组织良好的文档，可以立即启动并运行。以下链接将有助于您的语义UI之旅。

*   [语义UI网站](https://semantic-ui.com/)
*   [语义UI入门](https://semantic-ui.com/introduction/getting-started.html)
*   [示例语义UI模板](https://semantic-ui.com/usage/layout.html#pages)
*   [自定义和创建语义UI主题](http://learnsemantic.com/)