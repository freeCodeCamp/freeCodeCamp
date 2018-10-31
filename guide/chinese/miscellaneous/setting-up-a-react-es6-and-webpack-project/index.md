---
title: Setting Up a React Es6 and Webpack Project
localeTitle: 设置React Es6和Webpack项目
---
这个wiki将指导您如何设置一个使用React，Webpack和ES6的简单项目。我们将深入介绍所有设置。

*   [帮助：有关React的更多信息](https://facebook.github.io/react/docs/why-react.html)

对于这个项目，我们将使用Webpack，它是一个模块捆绑器，并且通常用在React项目中。

*   [帮助：有关Webpack的更多信息](https://webpack.github.io/docs/what-is-webpack.html)

[React与ES6配合得很好](https://babeljs.io/blog/2015/06/07/react-on-es6-plus) ，所以我们将在代码中使用ES6。

> ES6是该语言的重要更新，也是自2009年ES5标准化以来该语言的第一次更新。  
> \- [lukehoban](https://github.com/lukehoban/es6features)

ES6在浏览器中不起作用，但我们可以使用Babel手动将其转换为ES5。

我们使用的技术的一个关键特性是我们的`index.html`文件将引用一个捆绑的JavaScript文件，我们可以在其中引用其他JavaScript文件，而不是使用`script`标记从HTML文件中引用它们。

*   [帮助：有关ES6的更多信息](http://dev.venntro.com/2013/09/es6-part-1/)

## 先决条件

本教程旨在为您提供一个可扩展的简单骨骼结构。对于想要学习React和ES6的人来说，它应该是一个很好的起点。如果你还没有使用JavaScript或jQuery构建任何东西，你应该先在[FreeCodeCamp地图中](http://www.freecodecamp.com/map)进行一些练习。

在开始之前，请确保在最新版本中安装了[NodeJS](https://nodejs.org/en/download/)和[Node Package Manager](http://blog.npmjs.org/post/85484771375/how-to-install-npm) 。

# 快速说明

以下是本教程中提到的所有说明的列表。

*   `npm install webpack webpack-dev-server -g`
*   `mkdir react-webpack-example && cd $_`
*   `touch webpack.config.js`
*   `npm init`
*   `npm install --save-dev react react-dom webpack webpack-dev-server babel-loader babel-core babel-preset-es2015 babel-preset-react`
*   `touch .gitignore`
*   写`.gitignore` （使用[https://www.gitignore.io/api/node](https://www.gitignore.io/api/node) ）
*   `mkdir src`
*   `mkdir dist`
*   `mkdir src/js`
*   `touch src/js/client.js`
*   `touch dist/index.html`
*   写`dist/index.html`
*   写`src/js/client.js`
*   写`webpack.config.js`
*   `webpack`
*   `webpack-dev-server --content-base dist`
*   在浏览器中打开Webpack Dev Server路由。完成！