---
title: Bootstrap
localeTitle: 引导
---
## 引导

Bootstrap是一个流行的Web开发前端框架。它包含用于设置HTML内容样式的预构建组件和设计元素。 Chrome，Firefox，Opera，Safari和Internet Explorer等现代浏览器支持Bootstrap。

Bootstrap包括一个用于不同布局的响应式网格系统。这是建立移动友好网站的一个很好的起点。它还包括可选的JavaScript功能，如可折叠内容，轮播和模态。

#### 版本历史

Twitter最初开发了Bootstrap框架作为内部工具。他们在2011年8月将其作为开源项目发布。

Bootstrap 2于2012年1月发布。其中一个主要功能是引入了12列响应式网格系统。 Bootstrap 3于2013年8月出现，转而采用扁平设计和移动优先方式。 Bootstrap 4自2017年8月开始提供测试版，现在包括Sass和Flexbox。

Bootstrap 4正在开发两年，然后在2017年发布了一些beta版本，而第一个稳定版本在2018年1月发布。一些值得注意的变化包括：

*   从Less移到Sass;
*   移至Flexbox并改进了网格系统;
*   添加卡片（替换孔，缩略图和面板）;
*   以及更多！

在撰写本文时，Bootstrap的最新版本是\[4.1.3\]（http://blog.getbootstrap.com/2018/07/24/bootstrap-4-1-3/ ）。如果您想了解任何公告新闻，请[在此处关注](http://blog.getbootstrap.com/) 。

#### 安装

将Bootstrap添加到Web项目有两个主要选项。您可以链接到公开可用的来源，也可以直接下载框架。

##### 链接到另一个来源

您可以使用引用内容交付网络（CDN）的网页`<head>`内的`<link>`元素添加Bootstrap CSS：

`<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css" integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO" crossorigin="anonymous">`

添加Bootstrap的JavaScript元素与通常放置在'底部'的`<script>`元素类似 ' 标签。您可能需要先包含一些依赖项。特别注意列出的顺序：

```html

<script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script> 
 <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.3/umd/popper.min.js" integrity="sha384-ZMP7rVo3mIykV+2+9J3UJ46jBk0WLaUAdn689aCwoqbBJiSnjAK/l8WvCWPIPm49" crossorigin="anonymous"></script> 
 <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/js/bootstrap.min.js" integrity="sha384-ChfqqxuZUCnJSK3+MXmPNIyE6ZbWh2IMqE241rYiqJxyMiZ6OW/JmZQ5stwEULTy" crossorigin="anonymous"></script> 
```

_注意：这些仅是示例，如有更改，恕不另行通知。请参阅CDN以获取要包含在项目中的当前链接。_

##### 下载/安装

您可以使用Bower，Composer，Meteor或npm下载和安装Bootstrap源文件。这允许更好的控制以及根据需要包括或排除模块的选项。

`npm install bootstrap`

`gem 'bootstrap', '~> 4.1.3'`

\_注意：这些只是示例，如有更改，恕不另行通知。请参阅\_ [Bootstrap网站](https://getbootstrap.com/) \_获取最新链接.\_

#### Bootstrap网格系统

网格系统是一个移动优先的flexbox系统，用于快速构建适用于所有设备的各种形状和大小的布局。它基于12列布局，具有多个层，每个层对应一个媒体查询范围。

Bootstrap带有预定义的网格类，供您在标记中使用。有关详细信息和示例，请访问https://getbootstrap.com/docs/4.1/layout/grid/

### Boostrap功能

*   Bootstrap 3支持最新版本的Google Chrome，Firefox，Internet Explorer，Opera和Safari（Windows除外）。它还支持IE8和最新的Firefox扩展支持版本（ESR）。\[12\]
    
*   从2.0开始，Bootstrap支持响应式网页设计。这意味着网页布局会动态调整，同时考虑到所用设备的特性（台式机，平板电脑，手机）。
    
*   从版本3.0开始，Bootstrap采用了移动优先设计理念，默认强调响应式设计。
    
*   4.0版增加了Sass和flexbox支持
    

#### 更多信息：

Bootstrap包含许多[示例的](https://getbootstrap.com/docs/4.0/examples/)完整文档和[用于入门](https://getbootstrap.com/docs/4.0/getting-started/introduction/)的[HTML模板](https://getbootstrap.com/docs/4.0/getting-started/introduction/) （此模板仅包含脚本;如果您正在寻找，则不包含网格系统的设置）。

此外，您还可以找到[免费](https://bootswatch.com/)和[付费](https://themes.getbootstrap.com/) 基于Bootstrap框架的主题，提供更加个性化和时尚的外观。

#### Bootstrap资源：

[Bootstrap的官方博客](http://blog.getbootstrap.com/) [Bootstrap网站的灵感](http://expo.getbootstrap.com/) [展示使用Bootstrap构建的网站](http://builtwithbootstrap.com/) [使用Bootstrap的项目的HTML linter](https://github.com/twbs/bootlint) [Bootstrap的设计元素和代码片段](https://bootsnipp.com/) [Bootstrap的代码，主题和附加资源](http://expo.getbootstrap.com/resources/)