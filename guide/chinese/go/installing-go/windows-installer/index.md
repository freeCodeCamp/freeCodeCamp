---
title: Installing Go in Windows using the MSI Installer
localeTitle: 使用MSI安装程序在Windows中安装Go
---
### 使用MSI安装程序在Windows中安装Go

从[golang的下载页面](https://golang.org/dl/) ，获取Windows MSI安装程序并运行它。您必须在64位和32位版本之间进行选择。如果您不知道Windows版本运行的架构，只需快速搜索Google即可查找。

> 大多数当前版本的Windows都是64位，因此您可以在特色下载部分获得64位版本，但如果您的计算机已经很老了，32位版本应该是最安全的选择。

##### 64位Windodows安装程序

![screenshot of golang's download page as of this writting, highliting link](https://raw.githubusercontent.com/AlexandroPerez/resources/master/img/win_installerx64.jpg "x64 Windows msi安装程序链接")

##### 32位Windodows安装程序

![screenshot of golang's download page as of this writting, highliting link](https://raw.githubusercontent.com/AlexandroPerez/resources/master/img/win_installerx86.jpg "x86 Windows msi安装程序链接")

#### 检查go的安装和版本

要检查是否已成功安装，请打开命令提示符并使用：
```
> go version 
```

这应该在控制台上打印go的版本，同时确保安装顺利进行。