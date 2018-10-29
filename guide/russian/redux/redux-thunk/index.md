---
title: Redux Thunk
localeTitle: Redux Thunk
---
## Redux Thunk

Redux Thunk - это промежуточное программное обеспечение, которое позволяет вам возвращать функции, а не только действия, в Redux 1 . Это позволяет откладывать действия, в том числе работать с обещаниями.

Причина, по которой мы используем это промежуточное программное обеспечение, заключается в том, что не все действия, которые мы выполняем, будут синхронными, а некоторые связаны несинхронными, например, с помощью axios для отправки запроса на получение. Это займет немного времени, и простое сокращение не принимает во внимание это поведение. Итак, Redux-thunk приходит на помощь, позволяя нам асинхронно отправлять действия, чтобы мы могли разрешить эти обещания.

Пример 1:

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

Пример 2:

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

### Установка и настройка

Redux Thunk может быть установлен с использованием `npm install redux-thunk --save` или `yarn add redux-thunk` с командной строкой. Поскольку это инструмент Redux, вам также необходимо настроить Redux. После установки он активируется с помощью `applyMiddleware()` :

```javascript
import { createStore, applyMiddleware } from 'redux'; 
 import thunk from 'redux-thunk'; 
 import rootReducer from './reducers/index'; 
 
 const store = createStore( 
  rootReducer, 
  applyMiddleware(thunk) 
 ); 
```

### Рекомендации

*   [Redux Thunk Github Repo](https://github.com/reduxjs/redux-thunk)
*   [Redux Middleware](https://redux.js.org/advanced/middleware)

### источники

1.  [Пример счетчика приращений, приведенный в документации Redux Thunk, 10/02/2018](#https://github.com/reduxjs/redux-thunk)