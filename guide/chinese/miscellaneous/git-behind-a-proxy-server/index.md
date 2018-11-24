---
title: Git Behind a Proxy Server
localeTitle: 代理服务器背后的Git
---
**用例**

如果您的Internet访问是通过[代理服务器，](https://en.wikipedia.org/wiki/Proxy_server)则可能需要修改访问（更新和读取）远程存储库的`git`命令。

代理服务器在大学和商业类型环境中很常见。

您可以从浏览器的设置面板中[找到代理设置](http://www.wikihow.com/Change-Proxy-Settings) 。

## 使用Git代理

获得代理设置（服务器URL，端口，用户名和密码）后;你需要配置你的git如下：
```
$ git config --global http.proxy http://<username>:<password>@<proxy-server-url>:<port> 
```

您需要将`<username>` ， `<password>` ， `<proxy-server-url>` ， `<port>`替换为特定于代理服务器凭据的值。这些字段是可选的。例如，您的代理服务器可能甚至不需要`<username>`和`<password>` ，或者它可能在端口80上运行（在这种情况下，不需要`<port>` ）。

一旦你设置了这些，你的`git pull` ， `git push`甚至`git fetch`都可以正常工作。

## 何时不使用

如果发生以下任何一种情况，您不必将`git`命令与代理设置一起使用

*   您的系统管理员或公司策略不允许您从GitHub，BitBucket等访问远程`git`存储库。
*   有问题的远程存储库不在您的计算机中，但它位于内部网络中。在贵公司内部部署的GitLab实例就是一个很好的例子。

## 取消设置代理设置

使用[此](http://stackoverflow.com/questions/11499805/git-http-proxy-setting) Stack Overflow讨论取消设置代理设置。

## 资源

您可以使用以下内容进一步阅读：

*   [我可以在代理服务器后面登录吗？](https://help.github.com/desktop/faq/articles/can-i-log-in-behind-a-proxy-server/#platform-windows)
*   [Git Config](https://git-scm.com/docs/git-config)