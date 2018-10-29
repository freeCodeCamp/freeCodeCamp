---
title: Share File Using Python SimpleHTTPserver
localeTitle: 使用Python SimpleHTTPserver共享文件
---
## 发送文件需要遵循的步骤。

1.  确保两台计算机通过LAN或WIFI通过同一网络连接。
2.  在Ubuntu中打开终端并确保在PC中安装了python。
3.  如果没有安装，则通过键入没有引号的终端“sudo apt-get install python”来安装它。
4.  使用cd（更改目录）命令转到要共享其文件的目录。
5.  键入此命令“python -m simpleHTTPserver”，不带引号。
6.  打开新终端并输入ifconfig并找到您的IP地址。

## 现在在第二台电脑

1.  打开浏览器并输入第一个的IP地址。
2.  不要忘记在IP地址末尾添加端口号。默认情况下为：8000

将打开一个页面，显示目录类型结构，它将显示源PC中的所有文件。  
现在您可以访问所有文件。