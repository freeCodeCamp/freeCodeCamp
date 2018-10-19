---
title: Yarn
localeTitle: 纱
---
## 纱

Yarn是代码的包管理器。它允许您与来自世界各地的其他开发人员一起使用和共享代码。 Yarn可以快速，安全，可靠地完成这项工作，因此您无需担心项目的依赖性。

Yarn允许您使用其他开发人员的解决方案来解决不同的问题，使您可以更轻松地开发软件。如果您遇到问题，可以报告问题或回馈问题，并且在问题得到解决后，您可以使用Yarn将其保持最新状态。

代码通过称为包（有时称为模块）的东西共享。包中包含所有共享的代码以及描述包的package.json文件。

要使用纱线，您必须先将其安装在您的系统上。本文末尾有链接可帮助您在任何操作系统中执行此操作。

安装Yarn后，即可开始使用它。以下是您需要的一些最常用的命令。

### 纱线用法

**开始一个新项目**
```
yarn init 
```

`yarn init`命令将打开一个用于创建纱线项目的交互式表单。 `yarn init`创建一个`package.json`文件，用于存储有关项目的信息。此交互式表单将打开以下问题：
```
name (your-project): 
 version (1.0.0): 
 description: 
 entry point (index.js): 
 git repository: 
 author: 
 license (MIT): 
```

您可以键入每个选项的答案，也可以直接按Enter键而不键入任何内容以使用默认值或留空。如果需要，您可以随时进入您喜欢的文本编辑器来更改`package.json`文件。

您的`package.json`文件应该类似于：
```
{ 
  "name": "your-new-project", 
  "version": "1.0.0", 
  "description": "A description of your new project.", 
  "main": "index.js", 
  "repository": { 
    "url": "https://github.com/your-username/your-new-project", 
    "type": "git" 
  }, 
  "author": "Your Name <your_name@example.com>", 
  "license": "MIT" 
 } 
```

**添加依赖项**
```
yarn add [package] 
```

**升级依赖项**
```
yarn upgrade [package] 
```

**删除依赖项**
```
yarn remove [package] 
```

**安装项目的所有依赖项**
```
yarn install 
```

#### 更多信息：

*   [纱线网站](https://yarnpkg.com)
*   [纱线文件](https://yarnpkg.com/en/docs)
*   [安装纱线](https://yarnpkg.com/en/docs/install)
*   [纱线vs npm](https://www.pluralsight.com/guides/node-js/yarn-a-package-manager-for-node-js)