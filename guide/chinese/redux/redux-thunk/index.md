---
title: Redux Thunk
localeTitle: Redux Thunk
---
## Redux Thunk

Redux Thunk是一个中间件，允许您在Redux 1中返回函数，而不仅仅是动作。这允许延迟的行动，包括使用承诺。

我们使用这个中间件的原因是因为并非所有我们执行的操作都是同步的，而某些操作必然是非同步的，比如使用axios发送get请求。这将需要一些时间，简单的redux不会考虑到这种行为。因此，Redux-thunk通过允许我们异步调度动作来解决问题，这样我们就可以让这些承诺得到解决。

例1：

```javascript
const INCREMENT_COUNTER = 'INCREMENT_COUNTER'; 
 
 function increment() { 
  return { 
    type: INCREMENT_COUNTER 
  }; 
 } 
 
 function incrementAsync() { 
  return dispatch => { 
    setTimeout(() => { 
      // Yay! Can invoke sync or async actions with `dispatch` 
      dispatch(increment()); 
    }, 1000); 
  }; 
 } 
```

例2：

```javascript
const GET_CURRENT_USER = 'GET_CURRENT_USER'; 
 const GET_CURRENT_USER_SUCCESS = 'GET_CURRENT_USER_SUCCESS'; 
 const GET_CURRENT_USER_FAILURE = 'GET_CURRENT_USER_FAILURE'; 
 
 const getUser = () => { 
  return (dispatch) => {     //nameless functions 
    // Initial action dispatched 
    dispatch({ type: GET_CURRENT_USER }); 
    // Return promise with success and failure actions 
    return axios.get('/api/auth/user').then( 
      user => dispatch({ type: GET_CURRENT_USER_SUCCESS, user }), 
      err => dispatch({ type: GET_CURRENT_USER_FAILURE, err }) 
    ); 
  }; 
 }; 
```

### 安装和设置

可以使用命令行使用`npm install redux-thunk --save`或`yarn add redux-thunk`安装Redux Thunk。因为它是Redux工具，所以您还需要设置Redux。安装后，使用`applyMiddleware()`启用它：

```javascript
import { createStore, applyMiddleware } from 'redux'; 
 import thunk from 'redux-thunk'; 
 import rootReducer from './reducers/index'; 
 
 const store = createStore( 
  rootReducer, 
  applyMiddleware(thunk) 
 ); 
```

### 参考

*   [Redux Thunk Github Repo](https://github.com/reduxjs/redux-thunk)
*   [Redux中间件](https://redux.js.org/advanced/middleware)

### 来源

1.  [增量计数器示例引自Redux Thunk Documentation，10/02/201](#https://github.com/reduxjs/redux-thunk)