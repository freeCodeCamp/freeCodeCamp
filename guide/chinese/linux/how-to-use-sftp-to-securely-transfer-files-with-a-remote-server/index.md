---
title: How to Use SFTP to Securely Transfer Files with a Remote Server
localeTitle: 如何使用SFTP通过远程服务器安全地传输文件
---
## 如何使用SFTP通过远程服务器安全地传输文件

本文是关于如何使用安全文件传输协议（SFTP）与服务器交换文件的快速教程。这对编程很有用，因为它允许您在本地编码和测试，然后在完成后将您的工作发送到服务器。

### 测试SSH

如果您还没有，请测试您是否能够SSH到服务器。 SFTP使用Secure Shell（SSH）协议，因此如果您无法通过SSH，您可能也无法使用SFTP。

```shell
ssh your_username@hostname_or_ip_address 
```

### 启动SFTP会话

它使用与SSH相同的语法，并打开一个可以传输文件的会话。

```shell
sftp your_username@hostname_or_ip_address 
```

要列出有用的命令：

```shell
help 
```

### 传输文件和文件夹

要下载文件：

```shell
get <filename> 
```

要下载文件夹及其内容，请使用“-r”标志（也可用于上载）：

```shell
get -r <foldername> 
```

要上传文件：

```shell
put <filename> 
```

### 更改文件夹

要更改本地文件夹：

```shell
lcd <path/to/folder> 
```

要更改远程文件夹：

```shell
cd <path/to/folder> 

```