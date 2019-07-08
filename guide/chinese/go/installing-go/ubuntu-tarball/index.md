---
title: Installing Go in Ubuntu using a tarball
localeTitle: 使用tarball在Ubuntu中安装Go
---
### 使用tarball在Ubuntu中安装Go

> 如果您希望从golang网站获得最新的稳定版本，这是安装go的推荐方法。

#### 检查您的系统架构

在继续之前，请确保您知道您的系统是32位还是64位。如果您不知道，请运行以下命令以查找：

```shell
$ lscpu | grep Architecture 
```

如果您看到`Architecture: x86_64`您的系统是64位，否则如果您获得`Architecture: i686` ，那么您的系统是32位。既然您已了解系统架构，那就继续吧。

#### 选择正确的tarball

在[golang下载页面中](https://golang.org/dl/) ，您需要获取适用于您系统的正确tarball文件（.tar.gz）的链接。

如果您的系统是64位，请将链接复制到具有x86\_64体系结构的Linux系统的.tar.gz文件。例如，在撰写本文时，最新的64位系统稳定版本是`go1.9.1.linux-amd64.tar.gz`

![screenshot of golang's download page as of this writting, highliting link](https://raw.githubusercontent.com/AlexandroPerez/resources/master/img/ubuntux64.jpg "x64 tarball链接")

如果您的系统是32位，请将链接复制到带有x86体系结构的Linux系统的.tar.gz文件。在撰写本文时，最新文件是`go1.9.1.linux-386.tar.gz`

![screenshot of golang's download page as of this writting, highliting link](https://raw.githubusercontent.com/AlexandroPerez/resources/master/img/ubuntux86.jpg "x86 tarball链接")

复制链接后，只需将下面的安装过程中的链接替换为您从下载页面获得的链接。

#### 安装过程

> 在这个安装过程中，我们将使用go 1.9.1 tarball的链接作为示例。对于较新版本或较旧版本，只需在第一步中替换链接即可。查看[golang下载页面](https://golang.org/dl/) ，了解当前可用的版本。

##### 对于64位系统，请转到1.9.1：
```
$ wget https://storage.googleapis.com/golang/go1.9.1.linux-amd64.tar.gz 
 $ sudo tar -C /usr/local -xzf go1.9.1.linux-amd64.tar.gz 
 $ export PATH=$PATH:/usr/local/go/bin 
```

##### 对于32位系统，请转到1.9.1：
```
$ wget https://storage.googleapis.com/golang/go1.9.1.linux-386.tar.gz 
 $ sudo tar -C /usr/local -xzf go1.9.1.linux-386.tar.gz 
 $ export PATH=$PATH:/usr/local/go/bin 
```

#### 检查go的安装和版本

要检查go是否已成功安装，请使用：

```shell
$ go version 
 > go version go1.9.1 linux/amd64 
```

这将向控制台打印go的版本，同时确保安装顺利进行。