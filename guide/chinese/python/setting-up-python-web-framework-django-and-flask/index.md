---
title: Setting Up Python Web Framework Django and Flask
localeTitle: 设置Python Web框架Django和Flask
---
在本文中，我们将讨论如何安装[Django](https://www.djangoproject.com/)和[Flask--](http://flask.pocoo.org/)两个用Python编写的流行Web框架。

也许您已经熟悉Python的广泛使用和社区支持;在网络开发中。您可能也知道Web框架是什么;以及Python可用的选项。

如果这些假设不成立，您可能需要查看此Wiki文章 。如果你们都赶上了，那就让我们开始在本地开发机器上设置Python Web框架吧。

但如果我们完全忽略[Python 2与Python 3的](http://docs.python-guide.org/en/latest/starting/which-python/#the-state-of-python-2-vs-3)争论，那将是不公平的。

如果您还没有安装Python，请查看我们的 <a href='https://github.com/freeCodeCamp/freeCodeCamp/blob/master/guide/english/python/installing-and-using-python-3/index.md'>Python安装指南</a>

## 虚拟环境

在我们安装Django之前，我们将帮助您安装一个非常有用的工具，以保持您编码环境的整洁。您可以选择跳过此步骤，但我们强烈建议您安装。从最好的设置开始将为您节省很多麻烦！

所以，让我们创建一个虚拟环境（也称为virtualenv）。 Virtualenv将基于每个项目隔离您的Python / Django设置。这意味着您对一个网站所做的任何更改都不会影响您正在开发的任何其他网站。干净吧？

有关虚拟环境的更多信息，请参阅[此处](https://guide.freecodecamp.org/python/virtual-environments/)的相关部分。

## 总结

如果您已经安装了`pip`那么只需：
```
$ pip install django 
```

安装完成后我们可以创建一个新项目：
```
$ django-admin startproject myproject 
$ cd myproject 
$ python manage.py runserver 
```

转到`http://localhost:8000` ！ :rocket:

我们已成功安装了我们需要的Web框架。但是，它尚未完成。大多数Web应用程序都是内容和数据驱动的 - 因此我们需要数据存储。或者，数据库，如果你愿意的话。

在下一篇文章中，我们将讨论如何安装PostgreSQL并将其与我们的Python Web应用程序一起使用。

需要思考的一点 - 我们一直在大力使用`pip` ，但我们几乎没有说过任何关于它的信息。好吧，就目前而言，它只是像`npm`这样的包管理器。它与`npm`有一些差异;但是，你现在不需要担心。如果您有兴趣，请查看[官方`pip`文档](http://pip-python3.readthedocs.org/en/latest/index.html) 。

_如果您有任何建议或问题，请加入我们的[gitter](https://gitter.im/FreeCodeCamp/FreeCodeCamp)_ 。
