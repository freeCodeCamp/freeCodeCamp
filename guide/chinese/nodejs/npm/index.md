---
title: NPM
localeTitle: NPM
---
## NPM

Node.js可以在服务器上用JavaScript编写应用程序。它基于V8 JavaScript运行时构建，用C ++编写 - 所以速度很快。最初，它旨在作为应用程序的服务器环境，但开发人员开始使用它来创建模块以帮助他们进行本地任务自动化。从那时起，基于节点的工具的全新生态系统已经发展，以改变前端开发的面貌。

要在Node.js中使用这些模块（或包），我们需要能够以有用的方式安装和管理它们。这就是Node包管理器npm的用武之地。它安装了你想要使用的包，并提供了一个有用的界面来处理它们。

## 安装NPM

要安装`npm`我们必须在您当地的环境中下载Nodejs二进制文件。 Node.js二进制文件包括最新版本的npm。验证：

```shell
npm -v 
 5.6.0 
```

节点包管理器（NPM）提供两个主要功能 -

*   可在`npmjs.com`上搜索的node.js软件包/模块的联机存储库。
    
*   用于安装Node.js包的命令行实用程序，执行Node.js包的版本管理和依赖关系管理。
    

## 使用NPM安装模块

`npm`可以在本地或全局模式下安装软件包。默认情况下，NPM在本地模式下安装任何依赖项。在本地模式下，它将程序包安装在父工作目录的node\_modules文件夹中。此位置由当前用户拥有。全局包安装在{prefix} `/lib/node_modules/` ，由root拥有，其中{prefix}通常是`/usr/ or /usr/local` 。这意味着您必须使用sudo全局安装软件包，这可能会在解决第三方依赖项时导致权限错误，同时也是一个安全问题。

### 以全局模式安装软件包

全局安装的任何软件包都可以从命令行获得。我们使用--global标志或-g来全局安装包。

```shell
$ npm install uglify-js --global 
```

我们可以使用npm list命令列出我们安装的全局软件包。

```shell
$ npm list --global 
 /usr/local/lib 
 ├─┬ npm@5.6.0 
 │ ├── abbrev@1.1.0 
 │ ├── ansi-regex@2.1.1 
 │ ├── ansicolors@0.3.2 
 │ ├── ansistyles@0.1.3 
 .................... 
 └─┬ uglify-js@3.0.15 
  ├─┬ commander@2.9.0 
  │ └── graceful-readlink@1.0.1 
  └── source-map@0.5.6 
```

然而，输出相当冗长。我们可以使用--depth = 0选项更改它。

```js
$ npm list -g --depth=0 
 /usr/local/lib 
 ├── npm@5.6.0 
 └── uglify-js@3.0.15 
```

### 以本地模式安装软件包

在本地安装软件包时，通常使用package.json文件。

```shell
npm install --save express 
```

现在您可以在js文件中使用此模块，如下所示

```js
const express = require('express'); 
```

本地模块进一步分为两种类型的`dependencies`项： `devDepenednecies`和`dependencies` 。这两者之间的区别在于devDependencies是仅在开发期间需要的模块，而依赖关系是在运行时也需要的模块。要将依赖项保存为安装的devDependency，我们需要执行`npm install --save-dev` ，而不仅仅是`npm install --save` 。

安装我喜欢使用的devDependency的一个很好的简写是`npm i -D` 。保存常规依赖关系的简写是`-S`而不是`-D` 。

### 安装特定版本的软件包

为此，我们提到了我们要安装的软件包版本。

```shell
$ npm install underscore@1.8.2 -S 
```

要删除全局依赖项，请使用`-g`标志。

### 卸载本地软件包

npm是一个包管理器，所以它必须能够删除一个包。我们可以删除包裹：

```shell
$ npm uninstall underscore -S 
```

要更新全局依赖关系，请使用`-g`标志。

### 更新包

要更新包，您可以执行以下操作：
```
$ npm update underscore -S 
```

要检查是否有可用于与我们的项目关联的任何包的更新：

```shell
$ npm outdated 
 
 Package     Current  Wanted  Latest  Location 
 underscore    1.8.2   1.8.3   1.8.3  project 
```

Current列显示了本地安装的版本。最新专栏告诉我们最新版本的软件包。而Wanted专栏告诉我们可以在不破坏现有代码的情况下升级到最新版本的软件包。

## 使用package.json管理依赖项

如果没有使用特定标志并安装像`npm install express`这样的模块， `node_modules`将在本地安装模块在`node_modules`文件夹中，但是我们在项目中保存记录我们正在使用的每个依赖项的`package.json`都不会更新。因此，包将是开发特定的，不会安装在runtimme环境中。确保您始终使用正确的标志并更新`package.json`文件。

在本地安装软件包时，需要一个package.json文件。要生成一个，您可以使用`npm init`命令执行此操作。它会提示一些问题，按Enter键可以保留默认值。

```shell
$ npm init 
 package name: (project) 
 version: (1.0.0) 
 description: Demo of package.json 
 entry point: (index.js) 
 test command: 
 git repository: 
 keywords: 
 author: 
 license: (ISC) 
```

将`package.json`视为Node.js项目的所有依赖项或表现形式的守护者。如果您想更快地生成package.json文件，请使用`npm init --y` 。

`package.json`文件中的公共属性列表：

*   name - 包的名称
    
*   version - 包的语义版本
    
*   描述 - 包的描述
    
*   主页 - 包的主页
    
*   作者 - 包的作者
    
*   贡献者 - 包的贡献者的名称
    
*   依赖项 - 依赖项列表。 NPM会自动在程序包的node\_module文件夹中安装此处提到的所有依赖项。
    
*   devDependencies - 所有特定于开发的依赖项的列表
    
*   repository - 存储库类型和包的URL
    
*   主要 - 包裹的入口点
    
*   关键字 - 关键字
    
*   许可证 - 包裹的许可证，以便人们知道如何使用它，以及您对其进行的任何限制。
    
*   scripts - “scripts”属性是一个包含脚本命令的字典，这些命令在包的生命周期中的不同时间运行。
    
*   config - 可用于设置在升级过程中持久存在的程序包脚本中使用的配置参数的对象。
    

一个例子：

```json
{ 
   "name": "express", 
      "description": "Fast, unopinionated, minimalist web framework", 
      "version": "4.11.2", 
      "author": { 
 
         "name": "TJ Holowaychuk", 
         "email": "tj@vision-media.ca" 
      }, 
 
   "contributors": [{ 
      "name": "Aaron Heckmann", 
      "email": "aaron.heckmann+github@gmail.com" 
   }, 
 
    ], 
   "license": "MIT", "repository": { 
      "type": "git", 
      "url": "https://github.com/strongloop/express" 
   }, 
   "homepage": "https://expressjs.com/", "keywords": [ 
      "express", 
      "framework", 
      "sinatra", 
      "web", 
      "rest", 
      "restful", 
      "router", 
      "app", 
      "api" 
   ], 
   "dependencies": { 
      "serve-static": "~1.8.1", 
 
   }, 
   "devDependencies": { 
      "jade": "~1.9.1", 
   }, 
   "engines": { 
      "node": ">= 0.10.0" 
   }, 
   "files": [ 
      "LICENSE", 
      "History.md", 
      "Readme.md", 
      "index.js", 
      "lib/" 
   ], 
   "scripts": { 
      "test": "mocha --require test/support/env 
         --reporter spec --bail --check-leaks test/ test/acceptance/", 
      "test-cov": "istanbul cover node_modules/mocha/bin/_mocha 
         -- --require test/support/env --reporter dot --check-leaks test/ test/acceptance/", 
      "test-tap": "mocha --require test/support/env 
         --reporter tap --check-leaks test/ test/acceptance/", 
      "test-travis": "istanbul cover node_modules/mocha/bin/_mocha 
         --report lcovonly -- --require test/support/env 
         --reporter spec --check-leaks test/ test/acceptance/" 
   }, 
 
 } 
```

## npm脚本

`npm`脚本用于自动执行重复性任务。例如，构建项目，缩小层叠样式表（CSS）和JavaScript（JS）文件。脚本也用于删除临时文件和文件夹等。它们可以自定义，可以通过`package.json` `scripts`对象访问。

```json
{ 
  "name": "super-cool-package", 
  "version": "1.0.0", 
  "scripts": {} 
 } 
```

最受欢迎的NPM脚本示例：

```json
"scripts": { 
    "start": "node index.js", 
    ... 
 } 
```

## npm缓存

当npm安装一个软件包时，它会保留一个副本，因此下次要安装该软件包时，它不需要访问网络。副本缓存在主路径的.npm目录中。

```shell
$ ls ~/.npm 
 lodash.zipobject 
 log-driver 
 log-symbols 
 logalot 
 logfmt 
 loglevel 
 long-timeout 
 longest 
 longest-strea 
```

随着时间的推移，这个目录会变得杂乱无章，因此偶尔清理它会很有用。

```shell
$ npm cache clean 
```

## 纱线 - npm的替代品

Yarn也是由Facebook开发和维护的JavaScript包管理器。两者在使用时都有很高的相似性。据推测，安装依赖项比npm更快。要安装它：

```shell
npm install -g yarn 
```

纱线不打算取代npm，更像是改进它。它使用相同的package.json文件，并将依赖项保存到`node_modules/`文件夹。要初始化项目，您将使用：

```shell
yarn init 
```

### 添加，升级和删除依赖项

添加新的依赖项很容易，类似于npm：

```shell
yarn add [package-name] 
```

如果您需要特定的软件包版本或标记，则可以执行此操作。

```shell
yarn add express@4.14.1 
```

对于dev依赖项，对等依赖项和可选依赖项，分别传递--dev --peer --optional。

```shell
yarn add gulp --dev 
```

将在devDependencies下保存gulp。要升级或删除软件包，只需将add命令替换为upgrade或remove后跟软件包名称即可。

```shell
# upgrade a gulp from 3.9.1 to version 4 
 yarn upgrade gulp@4.0 
 
 # remove a gulp 
 yarn remove gulp 
```

每次安装，升级或删除后，yarn都会更新一个yarn.lock文件，该文件会跟踪node\_modules目录中安装的确切软件包版本。类似的功能已在npm中更新。现在有一个`package-lock.json` ，其行为与较新版本的npm中的`yarn.lock`完全相同。

### 包版本号及其含义

npm包的第一个版本始终是1.0.0

错误修复，或微小的更改增加第三个数字，亨利1.0.0将成为1.0.1

不破坏包的先前版本的新功能增加了第二个数字，而1.0.0将变为1.1.0

所有破坏包的先前版本的更改都会增加第一个数字，而1.0.0将变为2.0.0

在更新软件包以保持项目稳定时，务必记住这一点！