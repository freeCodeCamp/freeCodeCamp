---
title: Writing Code for Your Es6 React with Webpack Project
localeTitle: 使用Webpack项目为Es6 React编写代码
---
## DIST / index.html的

我们现在可以打开我们的`dist/index.html` 。这将是加载整个应用程序的一个HTML页面。对于这个文件，我们根本不需要太多代码，只需要：

*   在`src/js/client.js`为React DOM设置一个元素。
*   链接到我们的捆绑JavaScript文件（尚不存在）。

因此，这就是我们的`dist/index.html`文件的样子：
```
<!DOCTYPE html> 
 <html lang="en"> 
 <head> 
  <meta charset="UTF-8"> 
  <title>React Webpack Example</title> 
 </head> 
 <body> 
  <!-- React app will be injected into the following `div` element: --> 
  <div id="app"></div> 
  <!-- Include bundled JavaScript: --> 
  <script src="bundle.js"></script> 
 </body> 
 </html> 
```

你可能想知道为什么这个页面链接到`bundle.js` ，到目前为止我们所有的都是空的`src/js/client.js` 。稍后我们编写Webpack配置文件时会显示这一点。

## SRC / JS / client.js

现在是时候编写一些React代码了。就像在`dist/index.html`文件中一样，现在我们将编写足够的代码来启动应用程序，因此根本不需要太多代码：
```
import React from 'react'; 
 import ReactDOM from 'react-dom'; 
 
 class Main extends React.Component { 
  render() { 
    return ( 
      <div> 
        <h1>This is one cool app!</h1> 
      </div> 
    ); 
  } 
 } 
 
 const app = document.getElementById('app'); 
 ReactDOM.render(<Main />, app); 
```

看起来像HTML元素的代码实际上是JSX，它是React的一部分。

*   [帮助：有关JSX的更多信息](http://buildwithreact.com/tutorial/jsx)

为了解释这个文件中发生了什么，我们将其分解：

*   首先，我们导入`React`和`ReactDOM` 。这些是用于将代码注入DOM的任何React文件所必需的。 `ReactDOM`是一个虚拟DOM，它与标准文档对象模型不同。
    
*   [帮助：有关React DOM的更多信息](https://facebook.github.io/react/docs/glossary.html)
    
    *   接下来，我们将创建一个React类。在ES6中将类添加到JavaScript中。因此，这是编写React类的ES6方法，但当然[我们也可以在ES5中编写一个](https://toddmotto.com/react-create-class-versus-component/) 。
*   [帮助：有关ES6课程的更多信息](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes)
    

每个React类都有一个`render`方法。在这种情况下， `render`方法`return`一个JSX `div`元素。这是我们将在任何React文件中看到的内容。该类可以包含必须出现在`render`方法之前的其他方法，它始终位于类的底部。

*   最后，我们将React与`index.html`联。我们将`app`设置为我们希望注入React代码的位置。最后，使用ReactDOM，我们将我们编写的组件`<Main />`注入到app中，在这种情况下是`app`的`id`为`div` 。

## webpack.config.js

在我们的项目准备好之前，还有一个文件要写。这是Webpack配置文件。起初， `webpack.config.js`文件可能会令人困惑，但通常情况下，它们并不像看起来那么复杂。

在这种情况下，最基本的是， `webpack.config.js`导出一个具有以下属性的对象：

|财产|角色|  
| --- | --- |  
|进入|内容：应用程序的切入点。在这种情况下，它是`src/js/client.js` 。 |  
|输出|出现了什么：Webpack将为我们捆绑什么。在这种情况下，它是我们在`webpack.config.js`命名的任何`webpack.config.js` 。 |  
|装载机| Webpack将要执行的任务。 |

以下是`webpack.config.js`文件的样子：
```
var path = require('path'); 
 var srcPath = path.join(__dirname, 'src'); 
 var buildPath = path.join(__dirname, 'dist'); 
 
 module.exports = { 
  context: srcPath, 
  entry: path.join(srcPath, 'js', 'client.js'), 
  output: { 
      path: buildPath, 
      filename: "bundle.js" 
  }, 
  module: { 
      loaders: <a href='https://en.wikipedia.org/wiki/Don%27t_repeat_yourself' target='_blank' rel='nofollow'> 
          { 
            test: /\.jsx?$/, 
            exclude: /(node_modules|bower_components)/, 
            loader: 'babel', 
            query: { 
              presets: ['react', 'es2015'] 
            } 
          } 
      ] 
  } 
 }; 
```

再次，让我们分解它，以便清楚这个文件在做什么：

*   首先，我们需要NodeJS的`path`模块，以便我们可以处理文件路径，这是设置对象`context`所必需的。使用此模块非常重要，而不是尝试使用字符串连接目录，因为某些操作系统（如Windows）需要这样做。
    
*   然后，我们使用我们刚才需要的`path`模块指定`srcPath`和`buildPath` 。这样做可以确保我们有\[DRY，可读代码。
    
*   现在是时候写这个对象了。我们将要使用的属性都与Webpack相关。
    
    *   我们首先提供一个上下文，它只是指定我们的应用程序的位置。它指的是我们刚刚创建的`context`变量。
    *   然后我们指定入口点，这当然是我们之前写的React应用程序（ `src/js/client.js` ）。
    *   接下来，我们指定Webpack在运行时创建的捆绑文件的名称。在这种情况下，它是`dist/bundle.js` 。听起来有点熟？它应该这样做，因为这是我们从`dist/index.html`链接到的文件！
    *   最后是`module`属性，它包含一个数组， `loaders` ，当前包含一个对象。此对象的属性告诉Webpack使用ES6和React编写哪些JavaScript文件，以便在运行`webpack.config.js`时，其加载程序`babel`可以相应地运行。这主要是样板代码，我们可以[在Babel Loader的自述页面上](https://github.com/babel/babel-loader)看到。

如果`webpack.config.js`现在令人困惑，请不要担心，只要您了解它的作用。

*   [帮助：有关编写Webpack配置文件的更多信息](https://webpack.github.io/docs/tutorials/getting-started/#config-file)