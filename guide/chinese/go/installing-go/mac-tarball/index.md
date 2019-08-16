---
title: Installing Go in Mac OS X using a tarball
localeTitle: 使用tarball在Mac OS X中安装Go
---
### 使用tarball在Mac OS X中安装Go

#### 链接到tarball

您可以从[golang下载页面](https://golang.org/dl/)的Latest Stable部分获取Mac OS tarball存档的链接。

![screenshot of golang's download page as of this writting, highliting link](https://raw.githubusercontent.com/AlexandroPerez/resources/master/img/mac_tarball.jpg "Mac tarball链接")

#### 安装过程

> 在此安装过程中，我们将在撰写本文时使用最新的稳定版本（转至1.9.1）。对于较新版本或较旧版本，只需在第一步中替换链接即可。查看[golang下载页面](https://golang.org/dl/) ，了解当前可用的版本。

##### 安装Go 1.9.1
```
$ curl -O https://storage.googleapis.com/golang/go1.9.1.darwin-amd64.tar.gz 
 $ sudo tar -C /usr/local -xzf go1.9.1.darwin-amd64.tar.gz 
 $ export PATH=$PATH:/usr/local/go/bin 
```

#### 检查go的安装和版本

要检查go是否已成功安装，请使用：

```shell
$ go version 
```

这应该在控制台上打印go的版本，同时确保安装顺利进行。