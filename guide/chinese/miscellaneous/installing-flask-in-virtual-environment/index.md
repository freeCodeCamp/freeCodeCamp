---
title: Installing Flask in Virtual Environment
localeTitle: 在虚拟环境中安装Flask
---
如果您想使用Flask，那么您来对地方了！但安装Flask只是因为你想在Flask中探索Web开发。我们总是会推荐Django而不是Flask，因为在Flask中构建大型Web应用程序变得很困难;如果您不熟悉Python中的Web开发。

Flask是一个微框架;您可以从标准Web框架中选择您希望拥有的基本准系统功能。但如果你不想做所有的麻烦并专注于建立你的想法;或许Django将成为未来发展道路上更好的公司。

我假设您**没有**跳过安装Python 3并在虚拟环境中使用它的部分。

首先确保您不在虚拟环境中。然后创建一个名为`py3-flask`的新虚拟环境
```
$ mkvirtualenv py3-flask --python=/usr/bin/python3 
```

现在，执行`workon`命令以查看计算机中的虚拟环境列表。这应该列出`py3-flask` 。

在此之后，激活此环境：
```
$ workon py3-flask 
```

您的虚拟环境将使用Python解释器的副本激活，具有Python 3属性。你应该跑
```
$ python --version 
```

确保您确实在Python 3环境中。

需要明确的是，如果您已经按照上一节安装了Django - 它**不**应该在这种环境中。我们正在使用虚拟环境;保持我们不同框架的安装分开。

确定，运行
```
pip freeze 
```

确保Django未列在上面命令生成的输出列表中。

现在，让我们安装Flask。对于您的细读，这是[官方安装指南](http://flask.pocoo.org/docs/0.10/installation/) 。但是，很多开发人员更喜欢在Flask上安装一些额外的软件包;了解更多功能。

要安装Flask，请执行
```
$ pip install flask 
```

再次运行`pip freeze`时，它应该在列出的包中显示`Flask` 。

像这样运行长命令很麻烦。幸运的是，Python域中也有类似`package.json`东西 - 依赖项列表，包管理器可以通过从中央存储库下载适当的版本来复制环境。

标准是使用`pip freeze`并将输出记录到本地文件，该文件可以是源控制的。
```
$ pip freeze > requirements.txt 
```

这是我的环境中的`requirements.txt`的内容，在安装了这些Flask软件包之后。随着应用程序的增长，您可以添加或删除更多包;但是现在，只需将以下内容复制粘贴到您所在目录中的文本文件中即可。
```
Babel==2.2.0 
 Flask==0.10.1 
 Flask-Babel==0.9 
 Flask-Login==0.3.2 
 Flask-Mail==0.9.1 
 Flask-OpenID==1.2.5 
 Flask-SQLAlchemy==2.1 
 Flask-WTF==0.12 
 Flask-WhooshAlchemy==0.56 
 Jinja2==2.8 
 MarkupSafe==0.23 
 SQLAlchemy==1.0.12 
 Tempita==0.5.2 
 WTForms==2.1 
 Werkzeug==0.11.4 
 Whoosh==2.7.2 
 blinker==1.4 
 coverage==4.0.3 
 decorator==4.0.9 
 defusedxml==0.4.1 
 flipflop==1.0 
 guess-language==0.2 
 itsdangerous==0.24 
 pbr==1.8.1 
 python3-openid==3.0.9 
 pytz==2015.7 
 six==1.10.0 
 speaklater==1.3 
 sqlalchemy-migrate==0.10.0 
 sqlparse==0.1.18 
```

这个包列表来自[这里](http://blog.miguelgrinberg.com/post/the-flask-mega-tutorial-part-i-hello-world) 。

保存文件后，只需运行即可
```
$ pip install -r requirements.txt 
```

包管理器会为您安装丢失的包！您应该使用源代码管理系统提交此文件。

上面的命令集假设你有一台Linux机器或Mac OSX机器;或者您正在使用cloud9或Nitrous上的云托管盒;或者你正在使用一个Vagrant盒子。

但是，如果必须使用Windows计算机，请考虑使用Windows Powershell而不是Windows CMD。大多数命令都是一样的。如果您需要任何帮助，可能需要查看[此Stack Overflow讨论](http://stackoverflow.com/questions/17917254/how-to-install-flask-on-windows) 。