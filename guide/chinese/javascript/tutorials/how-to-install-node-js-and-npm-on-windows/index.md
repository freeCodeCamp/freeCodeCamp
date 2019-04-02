---
title: How to Install Node Js and Npm on Windows
localeTitle: 如何在Windows上安装Node Js和Npm
---
## 如何在Windows上安装Node Js和Npm

在Windows上安装Node.js和Npm非常简单。

首先，从[Node.js网站](https://nodejs.org/)下载Windows安装程序。您可以选择**LTS** （长期支持）或**当前**版本。

*   **当前**版本可以更快地接收最新功能和更新
*   **LTS**版本具有更改以提高稳定性，但会收到错误修复和安全更新等补丁

选择满足需求的版本后，请运行安装程序。按照提示选择安装路径，并确保包含**npm包管理器**功能以及**Node.js运行时** 。这应该是默认配置。

安装完成后重新启动计算机。

如果您在默认配置下安装，现在应将Node.js添加到PATH中。运行命令提示符或powershell并输入以下内容进行测试：
```
> node -v 
```

控制台应响应版本字符串。为Npm重复这个过程：
```
> npm -v 
```

如果两个命令都有效，那么您的安装就会成功，您可以开始使用Node.js！

#### 更多信息：

有关更多信息和指南，请访问[Node.js文档页面](https://nodejs.org/en/docs/) 。