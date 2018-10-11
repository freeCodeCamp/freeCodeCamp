---
title: Redux Thunk
---
## Redux Thunk

Redux Thunk is middleware that allows you to return functions, rather than just actions, within Redux<sup>1</sup>. This allows for delayed actions, including working with promises.

```
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

```
const GET_CURRENT_USER = 'GET_CURRENT_USER';
const GET_CURRENT_USER_SUCCESS = 'GET_CURRENT_USER_SUCCESS';
const GET_CURRENT_USER_FAILURE = 'GET_CURRENT_USER_FAILURE';

const getUser = () => {
  return dispatch => {
    // Initial action dispatched
    dispatch({ type: GET_CURRENT_USER });
    // Return promise with success and failure actions
    return axios.get('/api/auth/user').then(  
      user => dispatch({ type: GET_CURRENT_USER_SUCCESS, user }),
      err => dispatch({ type: GET_CURRENT_USER_FAILURE, err })
    );
  }
}
```

### Installation and Setup
Redux Thunk can be installed using `npm install redux-thunk` or `yarn add redux-thunk` with the command line.  Because it is a Redux tool, you will also need to have Redux set up.  Once installed, it is enabled using `applyMiddleware()`:

```
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers/index';

const store = createStore(
  rootReducer,
  applyMiddleware(thunk)
);
```

### References
* [Redux Thunk Github Repo](https://github.com/reduxjs/redux-thunk)
* [Redux Middleware](https://redux.js.org/advanced/middleware)

### Sources
1. [Increment Counter example cited from Redux Thunk Documentation, 10/02/2018](#https://github.com/reduxjs/redux-thunk)
