---
title: Installing Go in Arch Linux using pacman
localeTitle: 使用pacman在Arch Linux中安装Go
---
### 使用pacman在Arch Linux中安装Go

使用Arch Linux Package Manager（pacman）是安装Go的最简单方法。基于Arch Linux非常快速地提供新软件版本的理念，您将获得最新版本的go。 在安装go软件包之前，必须使系统保持最新状态。

```shell
$ sudo pacman -Syu 
 $ sudo pacman -S go 
```

#### 检查go的安装和版本

要检查go是否已成功安装，请使用：

```shell
$ go version 
 > go version go2.11.1 linux/amd64 
```

这将向控制台打印go的版本，同时确保安装顺利进行。