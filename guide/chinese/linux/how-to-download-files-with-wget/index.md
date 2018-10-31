---
title: How to download files using the "wget" utility in Linux
localeTitle: 如何使用Linux中的“wget”实用程序下载文件
---
## 如何使用Linux中的“wget”实用程序下载文件

本文是在基于Unix的操作系统上使用`wget`实用程序的快速教程。 GNU Wget是一个免费的实用程序，用于从Web上非交互式下载文件。它支持HTTP，HTTPS和FTP协议，以及通过HTTP代理进行检索。

### 安装`wget`

wget实用程序是免费提供的包，并根据GNU GPL许可证进行许可。该实用程序可以安装在任何类Unix操作系统上，包括Windows和MacOS。

### 基本语法

`wget`的基本语法是......
```
wget [option]... [URL]... 
```

### wget的详细信息
```
wget --version 
```

```
wget --help 
```

### 下载单个文件
```
wget http://ftp.gnu.org/gnu/wget/wget-1.5.3.tar.gz 
```

### 从FTP下载
```
wget ftp://ftp.gnu.org/gnu/wget/wget-1.10.1.tar.gz.sig 
```

### 限制下载速度限制
```
wget --limit-rate=100k http://ftp.gnu.org/gnu/wget/wget-1.5.3.tar.gz 
```

您可以使用`wget`实用程序的其余功能