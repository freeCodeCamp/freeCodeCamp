---
title: Installing Django in Virtual Environment
localeTitle: 在虚拟环境中安装Django
---
[Django](https://www.djangoproject.com)是一个固执己见的框架，可以帮助您提高工作效率。例如，创建Django项目时的文件结构。但是，如果您希望详细探索Python中的Web开发领域;也许[Flask](http://flask.pocoo.org/)更像是你的小巷。随意跳过本文的这一部分，并直接跳转到[Flask安装帮助](#installing-flask-in-virtual-environment)

在撰写本文时，目前的Django版本是Django 1.9.2。但是当你正在读这篇文章时，它可能会更高。

官方安装指南可[在此处获得](https://docs.djangoproject.com/en/1.9/intro/install/#install-django) 。你应该安装最新的稳定和正式版本;而**不是**最新的开发版本（除非你知道你在做什么，你喜欢危险地生活！）

但在开始安装之前，请确保您处于**激活的**虚拟环境中;在终端中运行以下命令的位置如下所示：
```
$ python --version 
 Python 3.5.1 
```

它可能不是`3.5.1` 。它很可能是`3.4.3` 。但这没关系，只要它没有显示为`2.7.9`或其他以`2`开头的东西。

一旦确定您处于激活的虚拟环境中，并且`python`命令指向版本3的Python;你准备安装Django了。只需按照官方[安装指南进行操作](https://docs.djangoproject.com/en/1.9/topics/install/#installing-official-release) ，然后使用Python包管理器`pip`安装。

一旦安装;检查所有`pip`安装的内容是个好主意;通过执行以下命令：
```
$ pip freeze 
```

这将输出使用当前Python安装的模块列表;你应该看到Django有正确的版本（类似`Django==1.9.2`在列表中。

如果您希望使用Windows，则上述讨论不适用于您。也许您只能访问Windows计算机，并且出于某些个人原因，您不希望在云上使用基于浏览器的Linux机箱（可能是连接速度慢？）。

您可以按照本[教程](https://docs.djangoproject.com/en/1.9/howto/windows/)在Windows机器中使用Python 3设置Django。

或者，您可以直接在您的计算机上使用[Virtualbox](https://www.virtualbox.org/)和[Vagrant](https://www.vagrantup.com/)框进行Django开发！