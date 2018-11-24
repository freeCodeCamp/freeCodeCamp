---
title: Redux
localeTitle: 终极版
---
## 终极版

Redux是JavaScript应用程序的可预测状态容器。

它可以帮助您编写行为一致的应用程序，在不同的环境（客户端，服务器和本机）中运行，并且易于测试。最重要的是，它提供了出色的开发人员体验，例如实时代码编辑与时间旅行调试器相结合。

Redux的基本原理：

1.  Redux是一个状态容器，它将您所有的州存储在一个地方
2.  状态是只读的，改变状态的唯一方法是发送动作。
3.  国家只能通过纯粹的功能或其他术语来改变：减速器。 Redux Reducers接受先前的状态和操作对象并返回下一个状态。

实际上我们如何准确地使用Redux？

### 规则1

#### 这个州存放在哪里？ Redux为您提供了一个方便的功能

```js
createStore() 
```

您在哪里创建将保留您所有州的商店。

### 规则3（我将首先显示规则3，因为它会更有意义）

#### 状态只能通过纯函数（也称为reducer）进行更改，因此要创建此连接，我们将在reducer中传递给createStore（），就像这样

```js
var store = createStore(reducer) 
```

当你有更多的减速器时会变得更复杂但是在核心，商店现在有一个减速器附加它

### 规则2

#### 一旦我们有一个用store = createStore（reducer）创建的商店。我们创建的新商店有一个名为dispatch的方法。请记住，在规则2中，我们改变状态的唯一方法是派遣一个动作！

你可以看到这是怎么回事。

```js
store.dispatch(action) 
```

在我进入减速器和动作之前，我认为向您展示Redux的createStore（）的一个非常基本且有限的实现将有很大帮助。

```js
createStore = (reducer) => { 
    let state; 
 //dispatch method 
    dispatch = (action) => { 
        state = reducer(state, action) 
    } 
  return {dispatch} 
 } 
```

看看我们如何将reducer传递给createStore，它将在我们的调度方法中设置;当我们调用dispatch方法时，它会接受一个动作，并根据reducer将返回的内容设置一个新状态。

## 什么是减速机？什么是行动？

最基本级别的Action是具有名为type的属性的对象。它也可以有其他属性，但为了简单起见，它只有类型。

```js
var someAction = {type:'doSomething'} 
```

减速器只是一个功能：

```js
var reducer = (state, action) => { 
 
    if (action.type === 'doSomething'){ 
        return changedState; 
    } else if ( action.type === 'doSomethingElse'){ 
        return changedState; 
    } else { 
        return state 
    } 
 } 
```

我们传递给reducer的操作将决定状态将如何根据类型进行更改。 Redux确实变得更复杂，但是如果您了解这些原则，那么您将更容易通过react-redux项目进行导航！

#### 更多信息：

##### 你真的需要Redux吗？

Redux的创建者[丹·阿布拉莫夫](https://github.com/gaearon) （ [Dan Abramov](https://github.com/gaearon) ）在不久前写了一篇很棒的文章， [你可能不需要Redux](https://medium.com/@dan_abramov/you-might-not-need-redux-be46360cf367) 。你应该先检查它，因为你可能不需要它。

欲了解更多信息，请访问[http://redux.js.org/](http://redux.js.org/)

### 资源

*   [Redux的作者Dan Abramov的课程。](https://egghead.io/courses/getting-started-with-redux)