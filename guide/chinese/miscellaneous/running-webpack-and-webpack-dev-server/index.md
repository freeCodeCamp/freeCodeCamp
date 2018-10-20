---
title: Running Webpack and Webpack Dev Server
localeTitle: 运行Webpack和Webpack Dev Server
---
现在是使用Webpack的时候了。因为Webpack是全局安装的，所以我们可以在终端中运行以下命令：
```
webpack 
```

这将运行我们的`webpack.config.js`文件。它应该成功运行，我们应该看到这样的东西出现在我们的终端：
```
Hash: 2474b15611d8d75c5a39 
 Version: webpack 1.12.14 
 Time: 1721ms 
    Asset    Size  Chunks             Chunk Names 
 bundle.js  679 kB       0  <a href='https://webpack.github.io/docs/webpack-dev-server.html' target='_blank' rel='nofollow'>emitted]  main 
    + 159 hidden modules 
```

请注意，它引用了一个名为`bundle.js`的`Asset` 。 Webpack告诉我们在运行`webpack`命令时已经创建了这个文件。查看你的`dist`文件夹，你应该在`index.html`旁边看到你的`bundle.js` 。

我们的树现在看起来像这样：
```
. 
 ├── dist 
 |   ├── bundle.js 
 │   └── index.html 
 ├── node_modules 
 ├── package.json 
 ├── src 
 │   └── js 
 │       └── client.js 
 └── webpack.config.js 
```

现在我们有了`dist/bundle.js` ，我们的`dist/index.html`文件现在指的是一个存在的文件！如果我们看一下`bundle.js` ，我们会看到它是我们项目中所有JavaScript文件的包。凉！

继续搜索我们的`dist/bundle.js`一些内容，比如`This is one cool app!` 。我们可以在文件中看到它的上下文，它在一个奇怪的方法中：
```
_createClass(Main, [{ 
  key: 'render', 
  value: function render() { 
    return _react2.default.createElement( 
      'div', 
      null, 
      _react2.default.createElement( 
        'h1', 
        null, 
        'This is one cool app!' 
      ) 
    ); 
  } 
 }]); 
```

这就是巴贝尔所做的;它已经将代码转换为ES5并将其与其他JavaScript文件捆绑在一起 - 当然包括我们所有的节点模块。现在我们所有的React文件都可以使用ES6 `import`语句引用这个包。

最后，是时候在浏览器中查看应用程序了。为此，我们将使用Webpack Dev Server，这是一个功能丰富的工具，用于在使用Webpack时设置`localhost`服务器以进行开发。

*   \[帮助：有关Webpack Dev Server的更多信息

继续运行：
```
webpack-dev-server --content-base dist 
```

我们需要包含`--content-base dist`来指定Webpack Dev Server的内容库，以便它知道在哪里获取要提供的文件;在这种情况下，它是`dist`文件夹，因为这是我们用于**生产**的文件夹，而不是我们用于_开发_ \*的`src`文件夹。

在我们的终端中，我们应该看到如下内容：
```
http://localhost:8080/webpack-dev-server/ 
 webpack result is served from / 
 content is served from /Code/react-webpack-example/dist 
 Hash: 2474b15611d8d75c5a39 
 Version: webpack 1.12.14 
 Time: 3738ms 
```

接下来将是`dist/bundle.js`捆绑到`dist/bundle.js`中的所有文件的很长列表。惊人！

现在是时候前往`webpack-dev-server`命令提供的URL， `http://localhost:8080/` 。我们应该看到一个页面的`h1`如下：
```
This is one cool app! 
```

让我们看看我们的开发人员工具的元素窗格。我们应该有以下几点：
```
<!DOCTYPE html> 
 <html lang="en"> 
 <head> 
  <meta charset="UTF-8"> 
  <title>React Webpack Example</title> 
  <style type="text/css"></style> 
 </head> 
 <body> 
  <!-- React app will be injected into the following `div` element: --> 
  <div id="app"> 
    <div data-reactid=".0"> 
      <h1 data-reactid=".0.0">This is one cool app!</h1> 
    </div> 
  </div> 
  <!-- Include bundled JavaScript: --> 
  <script src="bundle.js"></script> 
 </body> 
 </html> 
```

如果我们在`src/js/client.js`编写的内容，我们将看到React如何呈现到`dist/index.html` 。

如果你到目前为止，干得好！现在，您知道如何使用React，Webpack和ES6代码设置工作区，这非常棒，并为您提供了使用尖端技术制作令人印象深刻的Web应用程序的起点。

在下一个教程中，我们将介绍一些更高级的步骤，包括：

*   使用React了解更多细节
*   查看Webpack的其他一些很酷的功能，比如编译Sass文件
*   在我们的`dist/bundle.js`上使用`dist/bundle.js`

#### 更多信息：

[Webpack网站](https://webpack.js.org/)

[Webpack Github](https://github.com/webpack/webpack)

[webpack-dev-server Github](https://github.com/webpack/webpack-dev-server)