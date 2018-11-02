---
title: Redux Reducers
localeTitle: Redux Reducers
---
## Redux Reducers

Redux Reducer允许您在应用程序中更改状态。 redux中的操作只告诉应用程序基本上发生了什么。无论是发生了点击事件还是鼠标滚动，它都会告诉我这件事发生了。现在，您如何通过使用减速器来改变存储在商店内的应用程序的状态。

现在redux中的reducer需要是一个纯函数。纯函数是一种没有额外副作用的函数。你传递一些参数，它返回预期的结果。例如：

```javascript
function add(a,b) { 
 return a + b; 
 } 
 
 const sum = add(5,4); 
```

上面的函数是纯粹的，因为无论发生什么，它都会返回9.一个函数在其中有一个调用jj或执行类似访问数据库的操作不是一个纯函数。即使我们改变意义变化，变量值也可以被认为不是纯函数。

现在要更改状态，使用reducer。这是reducer的示例代码：

```javascript
 function todoReducer(state= [],action) { 
  case 'ADD_TODO': 
      return [...state,action.data] 
  case  'DELETE_TODO': 
      return state.filter(todo=>todo.id !== action.id) 
  default: 
      return state; 
 } 
```

这个todoReducer正在做的是它接受当前状态和触发的动作然后返回一个新状态。这里我们使用es6默认参数语法为状态数组指定一个默认值。上述reducer的action对象可能如下所示：

```javascript
{ 
 type: 'ADD_TODO', 
 data: {name: 'Learn Redux',completed:false} 
 } 
```

这里的动作具有带有数据对象的类型属性“ADD\_TODO”。现在，当触发此操作时，它由reducer接收，然后根据switch语句，它将返回一个新数组，其中包含现有数据和新数据。

总而言之，减速器只不过是为您的应用程序返回新状态的纯函数。

#### 更多信息：

[Redux-Reducers官方文档](https://redux.js.org/basics/reducers)