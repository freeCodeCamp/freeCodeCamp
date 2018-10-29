---
title: Create an Npm Module
localeTitle: 创建一个Npm模块
---
NPM模块是捆绑到可分发包中的一组Javascript功能。 [NPM](http://www.npmjs.com)维护所有可用包的注册表，也是用于从其注册表安装包的工具。

NPM的美妙之处在于，您可以组装其他人创建的包以创建新的东西，稍后某人可以使用您创建的包。如果您想要与世界共享某些代码，则可以轻松地将模块发布到NPM。

## 第1步：创建脚本

我创建了这个简单的实用程序作为`index.js` ：
```
var time = new Date().toTimeString(); 
 console.log(time); 
```

## 第2步：创建包信息

下一步是创建要与包一起发布的信息，存储在`package.json` 。 NPM提供了一个向导，可以轻松创建此文件。

只需运行`npm init`并回答问题。

你的`package.json`应该是这样的：
```
{ 
  "name": "whattimeisit", 
  "version": "1.0.0", 
  "description": "accurate time retrieval", 
  "main": "index.js", 
  "author": "HoursAndMinutes", 
  "license": "ISC" 
 } 
```

如果代码在GitHub上，请不要忘记包含GitHub存储库链接！

## 第3步：在NPM上创建用户帐户

要将包发布到NPM，您需要注册一个帐户。为此，请运行`npm adduser` 。您可以使用`npm config ls`验证当前正在使用的帐户。

## 第4步：发布到NPM

在将包发布到NPM之前，请检查该目录是否包含您不希望公开的任何文件（例如密码，私钥等）。您可以将这些文件添加到名为`.npmignore`的文件中，以将其从包发布中排除。 NPM也会尊重`.gitignore`如果你有。

完成包装内容后，运行`npm publish` 。您可以在[https://npmjs.com/package/yourpackagename](https://npmjs.com/package/yourpackagename)确认您的包裹的详细信息。

### 更多信息：

创建Node.js模块[npm](https://docs.npmjs.com/getting-started/creating-node-modules)