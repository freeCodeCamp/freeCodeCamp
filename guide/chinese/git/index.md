---
title: Git
localeTitle: 去
---
## 混帐

Git是一个开源的分布式版本控制系统，由Linus Torvalds和Linux开发社区的其他人在2005年创建。 Git可以与许多类型的项目一起使用，但它最常用于软件源代码。

版本控制是一种随时间跟踪文件或文件组更改的系统。如果您有这些更改的历史记录，它可以让您以后查找特定版本，比较版本之间的更改，恢复您可能已删除的文件或将文件还原到以前的版本。

_分布式_版本控制系统意味着不同的用户维护自己的项目存储库，而不是从一个中央存储库工作。用户自动拥有完整的文件跟踪功能和项目的完整版本历史记录，无需访问中央服务器或网络。

当Git在项目目录中初始化时，它开始跟踪文件更改并将它们存储为“更改集”或“修补程序”。在项目上一起工作的用户提交他们的变更集，然后在项目中包含（或拒绝）。

**目录**

*   [了解Git项目的三个部分](#understand-the-three-sections-of-a-git-project)
*   [安装Git](#install-git)
*   [配置Git环境](#configure-the-git-environment)
*   [在项目中初始化Git](#initialize-git-in-a-project)
*   [在Git中获得帮助](#get-help-in-git)
*   [来源](#sources)
*   [更多信息](#more-information)

### 了解Git项目的三个部分

Git项目将包含以下三个主要部分：

1.  Git目录
2.  工作目录（或工作树）
3.  临时区域

**Git目录** （位于`YOUR-PROJECT-PATH/.git/` ）是Git存储准确跟踪项目所需的一切。这包括元数据和包含项目文件的压缩版本的对象数据库。

**工作目录**是用户对项目进行本地更改的位置。工作目录从Git目录的对象数据库中提取项目文件，并将它们放在用户的本地计算机上。

**暂存区域**是一个文件（也称为“索引”，“阶段”或“缓存”），用于存储有关下一次提交的内容的信息。提交就是当你告诉Git保存这些分阶段的更改时。 Git按原样拍摄文件的快照，并将该快照永久存储在Git目录中。

有三个部分，文件可以在任何给定时间处于三种主要状态：已提交，已修改或已暂存。您可以在工作目录中随时_修改_文件。接下来，当你将它移动到临时区域它的_上演_ 。最后，它在_提交_后提交。

### 安装Git

*   Ubuntu： `sudo apt-get install git`
*   Windows： [下载](https://git-scm.com/download/win)
*   Mac： [下载](https://git-scm.com/download/mac)

### 配置Git环境

Git有一个`git config`工具，允许您自定义您的Git环境。您可以通过设置某些配置变量来更改Git的外观和功能。从计算机上的命令行界面（Mac中的终端，Windows中的命令提示符或Powershell）运行这些命令。

这些配置变量存储在三个级别：

1.  系统：位于`/etc/gitconfig` ，将默认设置应用于计算机的每个用户。要对此文件进行更改，请在`git config`命令中使用`--system`选项。
2.  用户：位于`~/.gitconfig`或`~/.config/git/config` ，将设置应用于单个用户。要对此文件进行更改，请在`git config`命令中使用`--global`选项。
3.  项目：位于`YOUR-PROJECT-PATH/.git/config` ，仅将设置应用于项目。要更改此文件，请使用`git config`命令。

如果存在相互冲突的设置，则项目级配置将覆盖用户级配置，用户级配置将覆盖系统级配置。

Windows用户注意事项：Git在`$HOME`目录（ `C:\Users\$USER` ）中查找用户级配置文件（ `.gitconfig` ）。 Git也会查找`/etc/gitconfig` ，尽管它与MSys root相关，无论您何时决定在运行安装程序时在Windows系统上安装Git。如果您使用的是2.x版或更高版本的Git for Windows，则在Windows XP上的`C:\Documents and Settings\All Users\Application Data\Git\config`还有一个系统级配置文件，并且在`C:\ProgramData\Git\config` Windows Vista及更高版本上的`C:\ProgramData\Git\config` 。此配置文件只能由`git config -f FILE`更改为管理员。

#### 添加您的姓名和电子邮件

Git包含用户名和电子邮件作为提交中信息的一部分。您需要使用以下命令在用户级配置文件下进行设置：

```shell
git config --global user.name "My Name" 
 git config --global user.email "myemail@example.com" 
```

#### 更改文本编辑器

Git会自动使用您的默认文本编辑器，但您可以更改它。下面是一个使用Atom编辑器的示例（ `--wait`选项告诉shell等待文本编辑器，以便您可以在程序继续之前在其中完成工作）：

```shell
git config --global core.editor "atom --wait" 
```

#### 将颜色添加到Git输出

您可以使用以下命令配置shell以向Git输出添加颜色：

```shell
git config --global color.ui true 
```

要查看所有配置设置，请使用命令`git config --list` 。

### 在项目中初始化Git

在计算机上安装并配置Git后，您需要在项目中初始化它以开始使用其版本控制权限。在命令行中，使用`cd`命令导航到项目的顶级（或根）文件夹。接下来，运行命令`git init` 。这将安装一个Git目录文件夹，其中包含Git跟踪项目所需的所有文件和对象。

Git目录安装在项目根文件夹中非常重要。 Git可以跟踪子文件夹中的文件，但它不会跟踪位于相对于Git目录的父文件夹中的文件。

### 在Git中获得帮助

如果您忘记了任何命令在Git中的工作方式，您可以通过以下几种方式从命令行访问Git帮助：

```shell
git help COMMAND 
 git COMMAND --help 
 man git-COMMAND 
```

这将在shell窗口中显示该命令的手册页。要导航，请使用向上和向下箭头键滚动或使用以下键盘快捷键：

*   `f`或`spacebar`向前翻页
*   `b`回页
*   `q`退出

### 来源

本文使用[Pro Git](https://github.com/progit/progit2)一书中的信息，该书由Scott Chacon和Ben Straub编写并由Apress出版。本书在[Git文档](https://git-scm.com/book/en/v2)中完整显示。

### 更多信息：

*   有关下载，文档和基于浏览器的教程： [Git官方网站](https://git-scm.com/)
*   当你处于糟糕的GIT状态时最有用的命令： [哦，狗屎，git！](http://ohshitgit.com/)