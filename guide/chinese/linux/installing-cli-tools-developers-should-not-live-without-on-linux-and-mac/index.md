---
title: Installing CLI Tools Developers Should not Live Without on Linux and Mac
localeTitle: 安装CLI工具开发人员不应该在Linux和Mac上不能使用
---
本文是关于如何安装开发人员在Macintosh和Linux环境中每天使用的关键命令行实用程序的简短说明。将显示的主要CLI工具是：Homebrew（Mac），Node和NPM，Bower，Gulp，Grunt和Tmux。

## 安装Homebrew（Macintosh系统）

Homebrew是'OS X缺少的包管理器'。它是直接从命令行下载和安装软件包的绝佳工具。 Linux发行版不需要这样做，因为它们已经默认安装了包管理器，例如`apt-get`或`pacman` 。要安装Homebrew，只需在终端中粘贴以下命令：

*   `/usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"`

如果您遇到“Xcode Command Line Tools Missing”，请使用以下命令进行安装：

*   `xcode-select --install`

## 安装NPM

`NPM`或节点包管理器是另一个有用的包管理器，主要用于下载Web工具。下载`NPM`还将安装Node.js框架。

### 苹果电脑：

*   使用`Homebrew`类型： `brew install node`和`NPM`应该已经安装。

### Linux的：

*   使用`apt-get` first type： `curl -sL https://deb.nodesource.com/setup_6.x | sudo -E bash -` ，然后`sudo apt-get install nodejs`
*   使用`pacman`类型： `pacman -S nodejs npm`
*   使用`yum`类型： `sudo yum install nodejs npm`
*   使用`dnf`类型： `sudo dnf install nodejs`
*   使用`zypper`类型： `sudo zypper install nodejs6`

## 安装Bower

Bower是一个流行的包管理器，允许您安装前端库。您可以使用`npm`使用以下命令在Linux和Macintosh系统上安装它：

*   `npm install -g bower` （Linux和OS X的命令相同）

## 安装Gulp

`Gulp`是一个框架和CLI工具，通过自动化开发人员发现自己正在重复执行的任务，使开发更快，更愉快。此外，您可以通过`npm`安装`Gulp` ：

*   `npm install -g gulp-cli`

在单个项目文件夹中：

*   `npm install --save-dev gulp`

## 安装Grunt

`Grunt`是另一种类似于`Gulp`流行自动化工具。要安装它，请再次使用`npm` ：

*   `npm install -g grunt-cli`

## 安装Tmux

`Tmux`是Linux和Mac的终端多路复用器。它使您能够在同一个Bash窗口中拥有多个会话和窗口，并且还允许您“分离”可以通过SSH连接到的会话，从而使当前正在运行的所有程序保持运行。

要在Linux上安装：

*   `sudo apt install tmux`

就是这样！使用这些工具，您的开发过程和内容将变得愉快和有效。如您所见，安装的主要工具是`npm` ，它允许您安装许多其他面向Web的CLI工具。