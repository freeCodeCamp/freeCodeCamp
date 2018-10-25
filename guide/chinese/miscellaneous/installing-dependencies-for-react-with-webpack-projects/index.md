---
title: Installing Dependencies for React with Webpack Projects
localeTitle: 使用Webpack项目安装React的依赖项
---
现在我们有一个空的Webpack配置文件（ `webpack.config.js` ）和一个新制作的Package文件（ `package.json` ），我们需要安装一些依赖项。安装依赖项会自动将一些数据添加到`package.json` 。

该项目将依赖于React，ReactDOM，Webpack和Webpack Dev Server。它还将取决于许多Babel包，因为我们将使用ES6编写代码，而[Babel是ES6转换器](https://babeljs.io/) 。

我们需要详细依赖：

|套餐|原因|  
| [反应](https://www.npmjs.com/package/react) | '一个npm包可以让你立即访问React，而不需要JSX转换器。 |  
| [反应DOM](https://www.npmjs.com/package/react-dom) | '这个包作为DOM相关渲染路径的入口点。它旨在与同构React配对，它将作为对npm的反应发送。 |  
| [Webpack](https://www.npmjs.com/package/webpack) | “允许将您的代码库分成多个捆绑包，可以按需加载。” |  
| [Webpack Dev Server](https://www.npmjs.com/package/webpack-dev-server) | '提供w​​ebpack应用程序。在更改时更新浏览器。 |  
| [Babel装载机](https://www.npmjs.com/package/babel-loader) | '用于Webpack的Babel模块加载器'。 |  
|巴别核心| Babel Loader必需。 |  
| Babel Preset：ES2015 | Babel Loader必需。 |  
| Babel Preset：React | Babel Loader必需。 |

我们可以使用一个命令继续安装所有这些模块：
```
npm install --save-dev react react-dom webpack webpack-dev-server babel-loader babel-core babel-preset-es2015 babel-preset-react 
```

如果我们现在查看我们的`package.json`文件，我们会注意到我们的`devDependencies`已经成为我们刚刚安装的Node包的列表。这很重要，因为这意味着如果我们需要使用`npm install`我们可以再次安装它们。

*   [帮助：有关`dependencies`和`devDependencies`更多信息](http://stackoverflow.com/a/22004559/4637110)