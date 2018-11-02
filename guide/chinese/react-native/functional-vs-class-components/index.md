---
title: Functional vs Class Components
localeTitle: 功能与类组件
---
## React Native - 功能与类组件

在React Native中，构成应用程序的组件有两种主要类型 - _功能组件_和_类组件_ 。这些结构与用于Web的常规React应用程序中的结构相同。

### 类组件

类组件是JavaScript ES2015类，它们从React扩展一个名为`Component`的基类。

```js
class App extends Component { 
    render () { 
        return ( 
            <Text>Hello World!</Text> 
        ) 
    } 
 } 
```

这使得类`App`可以访问React生命周期方法，例如`render`以及来自父级的状态/道具功能。

### 功能组件

功能组件更简单。它们不管理自己的状态或访问React Native提供的生命周期方法。它们实际上是简单的旧JavaScript函数。它们也被称为无状态组件。

```js
const PageOne = () => { 
    return ( 
        <h1>Page One</h1> 
    ); 
 } 
```

### 概要

类组件用作容器组件来处理状态管理和包装子组件。功能组件通常仅用于显示目的 - 这些组件从父组件调用函数来处理用户交互或状态更新。