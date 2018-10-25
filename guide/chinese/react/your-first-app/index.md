---
title: Your first React App
localeTitle: 你的第一个React App
---
## 你的第一个React App

### 安装

如前一个artice（安装）中所述，运行`Create React App`工具。一切都完成后， `cd`到应用程序和运行的文件夹`npm start` 。 这将启动一个开发服务器，你就可以开始开发你的应用了！

```bash
npm install -g react-create-app 
 create-react-app my-first-app 
 
 cd my-first-app 
 npm start 
```

### 编辑代码

启动您选择的编辑器或IDE，然后编辑`src`文件夹中的`App.js`文件。使用`react-create-app`工具`react-create-app` ，此文件中已存在一些代码。

代码将包含以下部分：

#### 进口

```JavaScript
import React, { Component } from 'react'; 
 import logo from './logo.svg'; 
 import './App.css'; 
```

[webpack](https://webpack.js.org/)使用[它](https://webpack.js.org/)来导入所有必需的模块，以便您的代码可以使用它们。此代码导入3个模块： 1） `React`和`Component` ，它允许我们使用React，因为它应该被使用。 （带组件） 2） `logo` ，允许我们在此文件中使用`logo.svg` 。 3） `./App.css` ，导入该文件的样式表。

#### 类/部件

```JavaScript
class App extends Component { 
  render() { 
    return ( 
      <div className="App"> 
        <header className="App-header"> 
          <img src={logo} className="App-logo" alt="logo" /> 
          <h1 className="App-title">Welcome to React</h1> 
        </header> 
        <p className="App-intro"> 
          To get started, edit <code>src/App.js</code> and save to reload. 
        </p> 
      </div> 
    ); 
  } 
 } 
```

React是一个使用Components的库，它允许您将UI拆分为独立的，可重用的部分，并独立思考每个部分。 已经创建了1个组件，即`App`组件。如果您使用`create-react-app`工具，则此组件是项目中的主要组件，您应该围绕此中心类构建。

我们将在下一章中详细介绍组件。

#### 出口

在react中创建类时，应该在声明后导出它们，这允许您使用`import`关键字在另一个文件中使用该组件。您可以在`export`关键字后使用`default`来告诉React这是此文件的主类。

```JavaScript
export default App; 
```

### 查看结果！

通过发出`npm start`命令启动开发服务器后，您可以在浏览器中查看添加到项目中的更改。发出命令后，npm应该打开一个自动显示你的应用程序的浏览器。

### 来源

[1.反应文档](https://reactjs.org/docs/hello-world.html)