---
title: npm
localeTitle: ASL
---
## NPM

npm是一个包管理器，用于安装和管理依赖项。

npm是充满活力的JavaScript（特别是Node.js）社区的核心，通过使项目的模块和代码可重用性非常简单。 目前，npm拥有超过500,000个可用包。

npm不仅适用于服务器端项目。最受欢迎的前端库如Bootstrap和Font Awesome也可用。

**注意：**

*   npm是开箱即用的Node.js所以有必要先安装Node.js
*   npm没有完整的表单，因为它超出了Node.js特定的项目。它以前称为节点包管理器。

### npm用法

npm通常在命令行中使用。下面给出的命令可以说是让您入门的最重要的命令：
```
npm init 
```

在项目的根目录中运行此命令会通过创建`package.json`文件将其初始化以与npm一起使用。系统将提示您输入 项目的名称，描述，作者姓名等。然后使用此信息填充`package.json`文件，该文件也将保存 有关项目依赖性和要求的信息。您可以稍后手动更改该信息。
```
npm install [name-of-package] 
```

这会自动安装包及其所有依赖项，并将其保存在`package.json`文件中。如果要安装开发依赖项， 你可能想使用`--save-dev`或`-D`开关。然后，npm将把包保存为开发依赖项。

软件包本地安装在项目根目录的`node_modules`目录中。有时你可能想要一个可用的包 不同的项目。这是通过`--global`或`-g`开关完成的。这通常对开发工具和命令行实用程序很有用。
```
npm install 
```

在没有特定包名的项目根目录中运行npm install，安装该项目所需的所有依赖项。那些是 根据项目的`package.json`文件计算。这展示了npm的强大功能，其中单个命令可以获取数十或数百个 例如，当您`git clone`存储库时，它会自动为您提供依赖关系。

#### 更多信息：

*   Node.js网站： [nodejs](https://nodejs.org)
*   npm的官方网站，您可以阅读有关npm以及搜索不同的可用软件包： [npmjs](https://www.npmjs.com)
*   阅读更多关于npm： [维基百科的信息](https://en.wikipedia.org/wiki/Npm_(software))
*   npm的初学者指南： [sitepoint](https://www.sitepoint.com/beginners-guide-node-package-manager/)
*   如果您想要一个全面的视频系列，请查看： [youtube](https://youtu.be/6fj0cpmMiVg)
*   这是来自npm的官方系列： [youtube](https://youtu.be/pa4dc480Apo)