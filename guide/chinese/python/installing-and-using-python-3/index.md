---
title: Installing and Using Python 3
localeTitle: 安装和使用Python 3
---
## 安装Python 3

您可以从此官方[链接](https://www.python.org/downloads/)下载Python。根据您的操作系统（Windows或Linux或OSX），您可能希望按照[这些说明](http://docs.python-guide.org/en/latest/starting/installation/)安装Python 3。

## 使用虚拟环境

[沙盒](https://en.wikipedia.org/wiki/Sandbox_(computer_security)) Python安装总是一个好主意;并将它与您的_System Python_分开。 _System Python_是Python解释器的路径，它与您的操作系统一起安装的其他模块一起使用。

使用_System Python_直接安装Python Web框架或库是**不安全的** 。相反，您可以在开发Python应用程序时使用[Virtualenv](https://virtualenv.readthedocs.org/en/latest/)创建和生成单独的Python进程。

### Virtualenvwrapper

[Virtualenvwrapper模块](https://virtualenvwrapper.readthedocs.org/en/latest/)使您可以轻松地在一台计算机上管理和沙箱化多个Python沙盒环境;不破坏用Python编写并由您的机器使用的任何模块或服务。

当然，大多数云托管开发环境，如[Nitrous](https://www.nitrous.io/)或[Cloud9](https://c9.io/)也预装了这些，并为您准备好编码！您可以从仪表板中快速选择一个框，并在激活Python 3环境后开始编码。

在[Cloud9中](https://c9.io/) ，您需要在创建新的开发环境时选择Django框。

接下来会有一些shell命令示例。如果你想复制粘贴，请注意`$`符号是终端提示的简写，它不是命令的一部分。我的终端提示符如下所示：
```
alayek:~/workspace (master) $ 
```

并且， `ls`看起来像
```
alayek:~/workspace (master) $ ls 
```

但是，在本文档中编写相同的内容时，我会将其编写为
```
$ ls 
```

回到我们的讨论，您可以通过在云终端上运行在Cloud9上创建包含Python 3解释器的沙箱：
```
$ mkvirtualenv py3 --python=/usr/bin/python3 
```

在为项目创建新框后，您只需运行一次。一旦执行，该命令将创建一个新的沙盒virtualenv，供您使用，名为`py3` 。

要查看可用的虚拟环境，您可以使用
```
$ workon 
```

要激活`py3` ，可以使用带有环境名称的`workon`命令：
```
$ workon py3 
```

上面的所有三个终端命令也适用于本地Linux机器或OSX机器。这些是[virtualenvwrapper](https://virtualenvwrapper.readthedocs.org/en/latest/#introduction)命令;因此，如果您计划使用它们，请确保已安装此模块并将其添加到`PATH`变量中。

如果你在虚拟环境中;您可以通过检查终端提示轻松找到它。环境名称将在终端提示中清晰显示。

例如，当我在`py3`环境中时;我会看到这是我的终端提示：
```
(py3)alayek:~/workspace (master) $ 
```

注意括号中的`(py3)` ！如果由于某种原因，你没有看到这个，即使你在虚拟的环境中;你可以尝试做[一下这里提到](http://stackoverflow.com/questions/1871549/python-determine-if-running-inside-virtualenv)的事情。

走出虚拟环境;或者取消激活 - 使用命令
```
$ deactivate 
```

同样，这仅适用于virtualenvwrapper模块。

### Pipenv

使用virtualenvwrapper的另一种方法是[Pipenv](https://docs.pipenv.org/) 。它会自动为您的项目创建虚拟环境，并维护包含依赖项的`Pipfile`文件。使用Pipenv意味着您不再需要单独使用pip和virtualenv，或管理您自己的`requirements.txt`文件。对于熟悉JavaScript的人来说，Pipenv类似于使用像`npm`这样的打包工具。

要开始使用Pipenv，您可以按照这个非常详细的[指南进行操作](https://docs.pipenv.org/install.html#installing-pipenv) 。 Pipenv可以轻松[指定](https://docs.pipenv.org/basics.html#specifying-versions-of-python)您希望为每个项目使用[哪个版本的Python](https://docs.pipenv.org/basics.html#specifying-versions-of-python) ，从现有的`requirements.txt`文件[导入](https://docs.pipenv.org/basics.html#importing-from-requirements-txt)并[绘制](https://docs.pipenv.org/#pipenv-graph)依赖关系[图](https://docs.pipenv.org/#pipenv-graph) 。