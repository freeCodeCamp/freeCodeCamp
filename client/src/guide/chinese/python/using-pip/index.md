---
title: Python Using Pip
localeTitle: Python使用Pip
---
我们已经了解了如何使用`import`语句`import`各种模块并在我们的程序中使用它们。 Python本身带有几个内置模块，但Python社区提供了更多功能。

> 这是使python如此强大的模块！

第三方模块为Python添加了更多功能。现在我们将学习如何安装这些模块，以便我们可以在我们的程序中使用它们。

最简单的方法是使用`pip`
```
pip install <module_name> 
```

如果您使用过`npm` ，那么您可以将其视为Python的_npm_ 。

旁注：区别在于使用npm，默认情况下`npm install`会将软件包本地安装到项目中，而默认情况下`pip install`会全局安装。要在本地安装模块，您需要创建并激活所谓的[虚拟环境](http://docs.python-guide.org/en/latest/dev/virtualenvs/) ，因此`pip install` installs安装到该虚拟环境所在的文件夹，而不是全局（可能需要管理员权限）。

上一次，在`import-statements` wiki中，我们使用`requests`模块作为示例。由于它是第三方模块，我们必须在安装python后单独安装它。

安装它就像`pip install requests`一样简单。你甚至可以传递各种参数。你经常遇到的那个是`--upgrade` 。您可以通过以下方式升级python模块：
```
pip install <module_name> --upgrade 
```

例如，将请求模块升级到其最新版本就像`pip install requests --upgrade`一样简单。

在使用`pip`之前，您需要安装它（它非常简单）。你可以从[这里](https://bootstrap.pypa.io/get-pip.py)安装它

只需点击链接即可。并将文件保存为`get-pip.py` _请不要忘记`.py`扩展名。_然后运行它。

使用pip的另一种方法是尝试[`easy_install`](https://bootstrap.pypa.io/ez_setup.py) 。

使用`easy_install`也很简单。语法是：
```
easy_install <module_name> 
```

但是， `pip`比使用`easy_install`更受欢迎。

**注意：**在某些安装了Python 2和Python 3的系统上， `pip`和`pip3`会做不同的事情。 `pip`安装包的Python 2版本， `pip3`将安装包的Python 3版本。有关Python 2和3之间差异的更多信息，请参阅[本](https://guide.freecodecamp.org/python/python-2-vs-python-3)指南。 您可以通过`pip --version`和/或`pip3 --version`检查`pip`版本：
```
pip3 --version 
 pip 18.0 from /usr/local/lib/python3.5/dist-packages/pip (python 3.5) 
```

我们还可以创建一个txt文件，其中包含应使用pip安装的模块列表。 例如，我们可以创建文件`requirements.txt`及其内容：
```
Kivy-Garden==0.1.4 
 macholib==1.5.1 
 idna==2.6 
 geoip2nation==0.1.2 
 docutils>=0.14 
 Cython 
```

在此文件中，我们还可以为安装设置版本。 在此之后，通过调用pip：
```
 pip install -r <FILE CONTAINING MODULES> 
 
          OR IN OUR CASE 
 
 pip install -r requirements.txt 
```

应该安装文件中列出的所有模块。