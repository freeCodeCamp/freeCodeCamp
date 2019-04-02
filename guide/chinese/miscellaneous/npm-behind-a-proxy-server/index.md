---
title: Npm Behind a Proxy Server
localeTitle: Npm在代理服务器后面
---
## 用例

您可能需要修改访问远程存储库（例如[npmjs](https://www.npmjs.com/) ）的`npm install`命令以安装Node JS模块;如果您的互联网访问是通过[代理服务器](https://en.wikipedia.org/wiki/Proxy_server) 。

代理服务器在大学和商业类型环境中很常见。

您可以从浏览器的设置面板中[找到代理设置](http://www.wikihow.com/Change-Proxy-Settings) 。

## 使用Proxy与NPM

获得代理设置（服务器URL，端口，用户名和密码）后;您需要按如下方式配置`npm`配置。
```
$ npm config set proxy http://<username>:<password>@<proxy-server-url>:<port> 
 $ npm config set https-proxy http://<username>:<password>@<proxy-server-url>:<port> 
```

您必须使用特定于代理服务器凭据的值替换`<username>` ， `<password>` ， `<proxy-server-url>` ， `<port>` 。

这些字段是可选的。例如，您的代理服务器可能甚至不需要`<username>`和`<password>` ，或者它可能在端口80上运行（在这种情况下，不需要`<port>` ）。

一旦你设置了这些，你的`npm install` ， `npm i -g`等将正常工作。

## 何时不使用

如果发生以下任一情况，则不`npm`命令与代理设置一起使用：

> *   例如，您的系统管理员或公司策略不允许您从NPM-JS访问远程`npm`存储库。
> *   有问题的Node模块的远程存储库不在您的计算机中，但它位于内部网络中。

## 取消设置代理设置

使用[此](http://luxiyalu.com/how-to-remove-all-npm-proxy-settings/)博客文章取消设置代理设置。您还可以从`.npmrc` [文件中](https://docs.npmjs.com/files/npmrc)手动删除指定代理设置的行。

## 资源

您可以使用以下资源进一步阅读： -

> *   [我可以在代理服务器后面登录吗？](https://github.com/npm/npm/issues/9401#issuecomment-134569585)
> *   [企业代理背后的NPM](http://intenseagile.com/2015/09/04/npm-behind-proxy.html)