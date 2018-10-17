---
title: Go
localeTitle: 走
---
## 走

![去碰碰](https://golang.org/doc/gopher/bumper320x180.png)

**Go** （或**golang** ）是由Robert Griesemer，Rob Pike和Ken Thompson于2007年在Google创建的一种编程语言。它是Algol和C传统中的一种编译的静态类型语言。它具有垃圾收集，有限的结构类型，内存安全性以及添加的CSP风格的并发编程功能。最初由Google开发的编译器和其他语言工具都是免费和开源的。它的受欢迎程度越来越快。它是构建Web应用程序的绝佳选择。

欲了解更多信息，请访问[Go的主页](https://golang.org/)

想要快速[游览吗？](https://tour.golang.org/welcome/1)

## ##预安装：

#### 使用Homebrew安装Golang：

```bash
$ brew update 
 $ brew install golang 
```

#### 安装后，尝试运行go版本以查看已安装的Go版本。

## ###设置工作区：

##### 添加环境变量：

首先，您需要告诉Go您工作区的位置。

我们将一些环境变量添加到shell配置中。其中一个文件位于您的主目录bash\_profile，bashrc或.zshrc（对于Oh My Zsh Army）

```bash
$ vi .bashrc 
```

\`

然后添加这些行以导出所需的变量

#### 这实际上是你的.bashrc文件

```bash
export GOPATH=$HOME/go-workspace # don't forget to change your path correctly! 
 export GOROOT=/usr/local/opt/go/libexec 
 export PATH=$PATH:$GOPATH/bin 
 export PATH=$PATH:$GOROOT/bin 
```

## ####创建工作区：

##### 创建工作区目录树：

```bash
$ mkdir -p $GOPATH $GOPATH/src $GOPATH/pkg $GOPATH/bin 
 $GOPATH/src : Where your Go projects / programs are located 
 $GOPATH/pkg : contains every package objects 
 $GOPATH/bin : The compiled binaries home 
```

### 快速开始

对于快速入门和样板Go项目，请尝试使用[Alloy](https://www.growthmetrics.io/open-source/alloy)

1.  克隆合金存储库
```
git clone https://github.com/olliecoleman/alloy 
 cd alloy 
```

2.  安装依赖项
```
glide install 
 npm install 
```

3.  启动开发服务器
```
go install 
 alloy dev 
```

4.  访问网站`http://localhost:1212`

_Alloy使用Node，NPM和Webpack_

### 去游乐场

[去游乐场](https://play.golang.org/)

学习如何在本地机器上安装go很重要，但是如果想要在浏览器中开始玩游戏，那么Go Playground就是您立即开始使用的完美沙盒！要了解有关Go Playground的更多信息，请参阅他们的文章“ [Inside the Go Playground”](https://blog.golang.org/playground)