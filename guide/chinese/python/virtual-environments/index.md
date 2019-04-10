---
title: Virtual Environments
localeTitle: 虚拟环境
---
## 虚拟环境

虚拟环境可以描述为隔离的安装目录。这种隔离允许您本地化项目依赖项的安装，而不必强制您在系统范围内安装它们。

想象一下，你有两个应用程序App1和App2。两者都需要包Pak，但有不同的版本。如果您为App1安装Pak版本2.3，您将无法运行App2，因为它需要3.1版。这是虚拟环境派上用场的时候。

优点：

*   您可以拥有多个环境，包含多组软件包，它们之间没有冲突。这样，可以同时满足不同项目的要求。
*   您可以使用自己的相关模块轻松发布项目。

您可以通过以下两种方式创建Python虚拟环境。

## VIRTUALENV

[`virtualenv`](https://virtualenv.pypa.io/en/stable/)是一个用于创建独立Python环境的工具。它创建了一个文件夹，其中包含使用Python项目所需的所有必需的可执行文件。

你可以用`pip`安装它：
```
pip install virtualenv 
```

使用以下命令验证安装：
```
virtualenv --version 
```

### 创建一个Environemnt

要创建虚拟环境，请使用：
```
virtualenv --no-site-packages my-env 
```

这将在当前目录中创建一个文件夹，其中包含环境名称（ `my-env/` ）。此文件夹包含用于安装模块和Python可执行文件的目录。

您还可以指定要使用的Python版本。只需使用参数`--python=/path/to/python/version` 。例如， `python2.7` ：
```
virtualenv --python=/usr/bin/python2.7 my-env 
```

### 列出环境

您可以列出可用的环境：
```
lsvirtualenv 
```

### 激活环境

在开始使用环境之前，您需要激活它：
```
source my-env/bin/activate 
```

这确保仅使用`my-env/`下的包。

您会注意到环境的名称显示在提示的左侧。这样您就可以看到哪个是活动环境。

### 安装包

您可以逐个安装软件包，也可以为项目设置`requirements.txt`文件。
```
pip install some-package 
 pip install -r requirements.txt 
```

如果要从已安装的软件包创建`requirements.txt`文件，请运行以下命令：
```
pip freeze > requirements.txt 
```

该文件将包含当前环境中安装的所有软件包的列表及其各自的版本。这将帮助您使用自己的相关模块发布项目。

### 停用环境

如果您已完成虚拟环境的使用，则可以使用以下命令停用它：
```
deactivate 
```

这将使您回到系统的默认Python解释器及其所有已安装的库。

### 删除环境

只需删除环境文件夹即可。

## 康达

[`Conda`](https://conda.io/docs/index.html)是许多语言（包括Python）的包，依赖和环境管理。

要安装Conda，请按照以下[说明操作](https://conda.io/docs/user-guide/install/index.html) 。

### 创建一个环境

要创建虚拟环境，请使用：
```
conda create --name my-env 
```

Conda将在Conda安装目录中创建相应的文件夹。

您还可以指定要使用的Python版本：
```
conda create --name my-env python=3.6 
```

### 列出环境

您可以列出所有可用的环境：
```
conda info --envs 
```

### 激活环境

在开始使用环境之前，您需要激活它：
```
source activate my-env 
```

### 安装包

与`virtualenv`相同。

### 停用环境

如果您已完成虚拟环境的使用，则可以使用以下命令停用它：
```
source deactivate 
```

### 删除环境

如果要从Conda中删除环境，请使用：
```
conda remove --name my-env 
```

#### 更多信息：

*   `virtualenv` [官方网站](https://virtualenv.pypa.io/en/stable/)
*   `Conda` [官方网站](https://conda.io/docs/index.html)
*   [Hitchhicker的](http://docs.python-guide.org/en/latest/dev/virtualenvs/) `The Hitchhicker's Guide to Python` - [Pypenv和虚拟环境](http://docs.python-guide.org/en/latest/dev/virtualenvs/)