---
title: React Redux Basic Setup
localeTitle: React Redux Basic Setup
---
## React Redux Basic Setup

在本指南中，将向读者介绍如何设置简单的React和Redux应用程序。

它基于[Node.js](https://nodejs.org/)应用程序已经创建并使用[Express](https://expressjs.com/)和[Webpack](https://webpack.github.io/)运行的[原理](https://webpack.github.io/) 。

## 安装

假设所有设置都正常并且正常工作，则需要添加一些软件包才能使Redux与React一起工作。

在已创建的项目文件夹中打开一个终端并发出以下命令
```shell
npm install --save react react react-dom react-redux react-router redux 
```

上面的命令是在本地安装软件包，并在依赖项下添加对package.json文件的引用。

还可以在您的浏览器中添加以下工具[Redux Dev Tools](https://github.com/zalmoxisus/redux-devtools-extension) 。

这将允许开发人员查看应用程序的状态及其更改以及正在触发的操作。

## 文件夹结构

在安装了所有依赖项之后，强烈建议在应用程序内部创建一个文件夹结构，类似于更好的代码可维护性和组织。
```
project_root 
 │   index.js 
 | 
 └───client 
 |   App.jsx 
 |   NotFound.jsx 
 | 
 └───common 
    │ 
    └───actions 
    |   │  appActions.js 
    | 
    └───constants 
    |   │  Actiontypes.js 
    | 
    └───reducers 
    |   │   appReducer.js 
    └───store 
        │   store.js 
```

## 应用程序组件的描述以及它们与自己和redux的交互方式

## 应用程序入口点实现

*   /project\_root/index.js
    *   应用程序的入口点是否包含商店的入口点，它将呈现App.jsx文件。

Bellow是将在文件上声明的代码示例

```javascript
import React from 'react'; 
 import {render} from 'react-dom'; 
 import {Router,Route,browserHistory} from 'react-router'; 
 import {Provider} from "react-redux"; 
 import store from "../common/store/store"; 
 import App from '../client/App'; 
 import NotFound from '../client/notFound'; 
 
 render( 
    <Provider store={store}> 
        <Router history={browserHistory}> 
            <Route path="/" component={App} /> 
            <Route path="*" component={NotFound}/> 
        </Router> 
    </Provider>, 
    document.getElementById('root') 
 ); 
```

在此示例中，通常的反应导入将添加到文件中，但也会添加一些新的反应，例如Router，Route，browserHistory。

如果需要应用程序，这些负责处理路由。

以及添加应用程序商店并允许其在应用程序中工作的位置。

## 应用程序组件实现

以下文件：

*   /client/App.jsx
*   此文件是基线应用程序文件，react和redux之间将相互通信。

```javascript
import React, { Component } from 'react'; 
 import {connect} from 'react-redux'; 
 import PropTypes from 'prop-types'; 
 import {ActionA,ActionB,ActionC} from '../common/actions/appActions'; 
 class App extends Component{ 
 
    // example of triggering the action inside a component 
    foo=()=>{ 
        this.props.doStringMessage(`Hello World`); 
    } 
    //default render function of the component 
    render(){ 
        return( 
            // the base component 
        ); 
    } 
 } 
 /** 
 * es6 fat arrow function to get information from the application state 
 * @param {*} state current state of the application 
 */ 
 const mapStateToProps=state=>{ 
    return { 
        ArrayValue:state.example.exapleArray, 
        StringMessage:state.example.exampleString, 
        bookApploggedIn:state.example.exampleBool, 
        ObjectValue:state.example.exampleObject 
    }; 
 }; 
 /** 
 * es6 fat arrow function to connect the actions declared in the action file to the the component as if they were common react props 
 * @param {*} dispatch function send to action file to be later processed in the reducer 
 */ 
 const mapDispatchToProps=dispatch=>{ 
    return { 
        doStringMessage:(value)=>{ 
            dispatch(ActionA(value)); 
        }, 
        getArrayItems:()=>{ 
            dispatch(ActionB()); 
        }, 
        doBooleanChange:(value)=>{ 
            dispatch(ActionC(value)); 
        } 
    }; 
 }; 
 /** 
 * this function connects the application component to be possible to interact with the store 
 * @param {*} mapStateToProps allows the retrieval of information from the state of the application 
 * @param {*} mapDispatchToProps allows the state to change via the actions defined inside 
 */ 
 export default connect(mapStateToProps,mapDispatchToProps)(App); 
```

上面的示例演示了如何设置基本App组件以及它如何与redux架构交互。

另外，如何从组件中调度已定义的操作，该操作将传递给存储并在应用程序reducer上进行更改。

## 申请行动声明

以下文件：

*   /common/actions/appActions.js
    
*   此文件是定义的每个操作将与应用程序状态和reducer进行交互的位置。
    
*   此外，应用程序所需的任何外部api调用都应在此处进行，然后通过操作调用传递给reducer。
    
    \`\`\`的JavaScript import { APP _动作_ A， APP _动作_ B， APP _动作_ C. 来自'../constants/Actiontypes'; / \*\*
    
*   es6常量与reducer通信以执行给定的操作
    
*   @param {Object}指定要在reducer中设置的对象或任何其他类型 **/ export const doActionA = value =>（{ 类型：APP _动作_ A， 值 }）; /**
    
*   es6常量与reducer通信以执行给定的操作
    
*   @param {Object}要在reducer中设置的对象或任何其他类型 **/ export const doActionB = value =>（{ 类型：APP _动作_ B， 值 }）; /**
    
*   es6常量与reducer通信以执行给定的操作
    
*   @param {Object}要在reducer中设置的对象或任何其他类型 **/ export const doActionC = value =>（{ 类型：APP _ACTION_ C， 值 }）; /**
    
*   es6常量将被组件知道，以便组件和状态之间可以进行交互
    
*   @param {Object}指定要在reducer中设置的对象或任何其他类型 **/ export const ActionA = value => dispatch => { 调度（doActionB（值））; }; /**
    
*   es6常量将被组件知道，以便组件和状态之间可以进行交互 \*\* / export const ActionB =（）=> dispatch => { 讯（doActionB（真））; }; `In the example code provided above, the item` ActionB\`\`\`将可用于App.jsx组件，当组件通过prop触发它时，它将触发此文件中的相应操作，然后到reducer并更改相应地说。
    

## 动作类型实现

以下文件：

*   /common/constants/Actiontypes.js
*   此文件将包含应用程序可以使用的每种操作类型的声明。
*   这里完成的声明必须提供给actions文件，以便在应用程序中处理它们。

```javascript
export const APP_ACTION_A='MAKE_A'; 
 export const APP_ACTION_B='MAKE_B'; 
 export const APP_ACTION_C='MAKE_C'; 
```

在上面的示例中，声明并导出了三种操作类型，以便可以使用它们。

## 减速机实施

以下文件：

*   /common/reducers/appReducer.js
    *   reducer本质上只不过是一个javascript纯函数，它将检查是否有任何条件满足触发的操作并对状态进行更改，从不改变它。

```javascript
 import { 
    APP_ACTION_A, 
    APP_ACTION_B, 
    APP_ACTION_C 
 } from '../constants/Actiontypes'; 
 
 /** 
 * es6 example of a declaration of the reducer 
 * @param {Object} state contains all the application's state properties needed 
 * @param {action} action the action that will trigger the state's changes 
 **/ 
 const ExampleAppReducer= (state = { 
    exampleBool:false, // boolean value 
    exampleString:'', // string value 
    exampleArray: [], // array value 
    onError:{ 
        A:'', 
        B:'', 
        C:'' 
    } // object with properties inside 
 }, action) => { 
    //switch statement that will test every case and make the necessary changes, never mutating the state as it's being preserved always 
    switch(action.type){ 
        case APP_ACTION_A:{ 
            return { 
                ...state, // es6 epread operator to make a copy of the existing state object 
                exampleBool:action.value // the state property changes accordingly to the value of the action triggered 
            }; 
        } 
        case APP_ACTION_B:{ 
            return { 
                ...state, 
                exampleString:action.value 
            }; 
        }, 
        case APP_ACTION_C:{ 
            return { 
                ...state, 
                exampleArray:action.value 
            }; 
        } 
        default:{ 
            return state; // if any of the actions triggered is not defined here it will return the default state 
        } 
    } 
 }; 
 export default ExampleAppReducer; 
```

上面的代码说明了如何定义基本的reducer并通过测试某个条件来改变状态。

## 商店实施

文件：

*   /common/store/store.js
*   该文件将包含应用程序状态树的定义，为了更改内部状态，需要将actin调度到此处。
*   它只不过是一个内部声明方法的对象，最重要的是创建商店的对象

\`\`\`的JavaScript 从'redux'导入{createStore}; 从'../reducers/ExampleAppReducer'导入示例;

export defaultStoreStore（ 例 ）; \`\`\` 上面的代码演示了如何定义一个简单的应用程序商店。

这是reducer的基本设置，它可以进一步扩展，例如包含多个存储，并且还添加了一些中间件。

## 进一步阅读

因为本指南仅仅是对react和redux如何协同工作以及如何实现架构的介绍。 本指南的读者强烈建议您阅读下面的链接以阅读并克隆回购并尝试使用它们。

[Redux Docs](http://redux.js.org/)

[Redux Api](http://redux.js.org/docs/api/)

[Redux示例](https://github.com/reactjs/redux/tree/master/examples)
