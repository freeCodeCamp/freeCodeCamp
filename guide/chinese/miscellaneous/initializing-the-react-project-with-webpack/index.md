---
title: Initializing the React Project with Webpack
localeTitle: 使用Webpack初始化React项目
---
首先要做的是打开我们的终端/命令行。我们需要在全球范围内安装Webpack和Webpack Dev Server。

*   [帮助：有关全局安装节点模块的更多信息](https://docs.npmjs.com/getting-started/installing-npm-packages-globally)
    
    npm install webpack webpack-dev-server -g
    

全局安装这些模块意味着我们可以参考终端中使用各自的命令行界面。安装Webpack允许我们从终端运行`webpack`来执行Webpack脚本。安装Webpack Dev Server允许我们使用Webpack配置运行localhost服务器。这一切都会在稍后变得清晰。

在您选择的目录中，创建一个新目录，例如`react-webpack-example` ，并将目录更改为：
```
mkdir react-webpack-example && cd $_ 
```

现在我们在新目录中，我们需要创建我们的Webpack文件，它将存在于根目录中。这是一个配置文件，因此我们将其命名为`webpack.config.js` 。
```
touch webpack.config.js 
```

现在，我们可以使用以下命令继续[初始化npm项目](https://docs.npmjs.com/cli/init) ：
```
npm init 
```

我们可以继续按Enter键循环显示终端中提供给我们的选项。

`npm init`命令将创建一个`package.json`文件，该文件将包含有关我们项目的重要数据。

到目前为止，这是我们的树应该是这样的：
```
. 
 ├── package.json 
 └── webpack.config.js 
```

如果你打开你的`package.json`文件，你应该看到这样的东西：
```
{ 
  "name": "react-webpack-example", 
  "version": "1.0.0", 
  "description": "", 
  "main": "webpack.config.js", 
  "scripts": { 
    "test": "echo \"Error: no test specified\" && exit 1" 
  }, 
  "author": "", 
  "license": "ISC" 
 } 

```