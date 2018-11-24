---
title: PHP
localeTitle: PHP
---
![logo](https://upload.wikimedia.org/wikipedia/commons/thumb/2/27/PHP-logo.svg/150px-PHP-logo.svg.png "PHP徽标")

## 什么是PHP？

PHP是Rasmus Lerdorf于1995年创建的服务器端脚本语言。

PHP是一种广泛使用的开源通用脚本语言，特别适用于Web开发，可以嵌入到HTML中。

## PHP的缩写代表什么？

最初PHP代表“个人主页”，因为Rasmus Lerdorf创建它可以在他自己的网站上使用。然后在1997年，更多的开发人员扩展了语言和 首字母缩略词也改为今天的代表：'PHP：Hypertext Preprocessor'。由于PHP中的第一个“P”也代表“PHP”，因此它被称为“递归缩写”。

## 什么是PHP用于？

截至2017年10月，在[82％的服务器端语言已知的网站](https://w3techs.com/technologies/overview/programming_language/all)上使用PHP。它是 通常在网站上用于动态生成网页内容。用例包括：

*   网站和Web应用程序（服务器端脚本）
*   命令行脚本
*   桌面（GUI）应用程序

通常，它以第一种形式用于动态生成网页内容。例如，如果您有博客网站，则可以编写一些PHP脚本进行检索 您的博客文章来自数据库并显示它们。 PHP脚本的其他用途包括：

*   处理和保存表单数据中的用户输入
*   设置和使用网站cookie
*   限制访问您网站的某些页面

## PHP如何工作？

所有PHP代码仅在Web服务器上执行，而不是在本地计算机上执行。例如，如果您在网站上填写表单并提交表单，或者单击指向用PHP编写的网页的链接，则计算机上不会运行任何实际的PHP代码。相反，表单数据或网页请求被发送到Web服务器以由PHP脚本处理。然后，Web服务器将处理过的HTML发送给您（名称中的“超文本预处理器”来自），并且Web浏览器显示结果。因此，您无法看到网站的PHP代码，只能看到PHP脚本生成的HTML。

如下图所示：

![PHP服务器模型](https://github.com/xeroxism/myImages/blob/master/FCC_guides/PHP-server-model.png?raw=true)

PHP是一种解释型语言。这意味着当您对源代码进行更改时，您可以立即测试这些更改，而无需首先将源代码编译为二进制形式。跳过编译步骤可以使开发过程更快。

PHP代码包含在`<?php`和`?>`标记之间，然后可以嵌入到HTML中。

## 安装

PHP可以安装或不安装Web服务器。

### GNU / Linux的

在基于Debian的GNU / Linux发行版上，您可以通过以下方式安装：

```bash
sudo apt install php 
```

安装完成后，只需在终端中执行此操作即可运行任何PHP文件：
```
php file.php 
```

您还可以安装localhost服务器来运行PHP网站。要安装Apache Web Server：
```
sudo apt install apache2 libapache2-mod-php 
```

## PHP可以做什么？

*   PHP可以生成动态页面内容
*   PHP可以在服务器上创建，打开，读取，写入，删除和关闭文件
*   PHP可以收集表单数据
*   PHP可以发送和接收cookie
*   PHP可以添加，删除，修改数据库中的数据
*   PHP可用于控制用户访问
*   PHP可以加密数据

## 为何选择PHP？

*   PHP在各种平台上运行（Windows，Linux，Unix，Mac OS X等）
*   PHP与当今使用的几乎所有服务器兼容（Apache，IIS等）
*   PHP支持广泛的数据库
*   PHP是免费的。从官方PHP资源下载它： [secure.php.net](https://secure.php.net/)
*   PHP易于学习并在服务器端高效运行

## PHP框架

由于为大多数项目编写网站的整个代码并不实际/可行，因此大多数开发人员倾向于使用框架进行Web开发。使用框架的优点是

*   每次创建项目时都不需要重新发明轮子，很多细微差别已经得到了照顾
*   它们通常结构良好，因此有助于分离关注点
*   大多数框架都倾向于遵循该语言的最佳实践
*   它们中的很多都遵循MVC（模型 - 视图 - 控制器）模式，因此它将表示层与逻辑层分开

## 流行的框架

*   [Laravel](https://laravel.com/)
*   [Symfony的](https://symfony.com/)
*   [Zend公司](http://www.zend.com/)
*   [CakePHP的](https://cakephp.org/)

## 文档

PHP有[很好的文档记录](http://php.net/docs.php) 。 [官方文档](http://php.net/manual/en/)包括几乎所有函数参考指南的示例，以及用户注释。

## 其他资源

*   [Tizag.com PHP教程](http://www.tizag.com/phpT/) ： [关于PHP](http://www.tizag.com/phpT/)入门的相关教程
*   [令人敬畏的PHP](https://github.com/ziadoz/awesome-php) ：PHP库，资源和“闪亮的东西”的精选列表
*   [Laracasts.com](https://laracasts.com/) ：一个会员网站，用PHP学习Web应用程序开发