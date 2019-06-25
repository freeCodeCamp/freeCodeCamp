---
title: Installing Go in Ubuntu using apt-get
localeTitle: 使用apt-get在Ubuntu中安装Go
---
### 使用apt-get在Ubuntu中安装Go

使用Ubuntu的Source Package Manager（apt-get）是安装Go的最简单方法。你不会得到最新的稳定版本，但为了学习这个应该就足够了。

> 在撰写本文时，Ubuntu Xenial的版本是1.6.1，而最新版本 稳定版本是1.9.1

```shell
$ sudo apt-get update 
 $ sudo apt-get install golang-go 
```

#### 检查go的安装和版本

要检查go是否已成功安装，请使用：

```shell
$ go version 
 > go version go1.9.1 linux/amd64 
```

这将向控制台打印go的版本，同时确保安装顺利进行。