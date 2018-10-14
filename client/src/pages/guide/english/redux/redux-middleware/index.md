---
title: Redux Middleware
---
## Redux Middleware

One of the great things about redux is that it provides an interface to plug in different middleware packages to add additional functionality to redux. Redux middleware basically acts like pipes that your actions will flow through after getting dispatched but before being handled by your reducers. There are a large amount of popular redux middleware packages for adding features like logging and handling asynchronous action flows. 

[Redux Thunk](https://github.com/reduxjs/redux-thunk) for example allows you to dispatch functions to delay the dispatching of actions. 

Adding middleware to redux is as simple as adding another argument when calling "createStore". Just pass the result of calling "applyMiddleware" with each middleware package you want to use. In the example below we add redux-thunk and redux-logger to our app. 

```js
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger'

const store = createStore(
  rootReducer,
  applyMiddleware(thunk, logger)
);
```

#### Creating Middleware

Redux middleware are just functions with the signature

```js
const reduxMiddleware = store => next => action => {
  // do some middleware stuff
}
```

Side Note - The fact that this is a function that takes a store and returns a function that takes a next callback and returns a function that takes an action and performs some middlware operations might look a bit odd. why do that instead of three parameters? Well this is actually a very helpful technique from functional programming called currying and it enables a lot of goodness like partial application. The main difference though is how you call the middleware function.

```js
// calling an uncurried version - NOT how you call the function above
reduxMiddleware(store, next, action)

// vs calling the curried version - how you call the function above
reduxMiddleware(store)(next)(action)
```

The parameters here are:

1.) store - your redux store and calling its "getState" method returns the current state of your store.
```js
let currentState = store.getState()
```
2.) next - a callback that you pass an action to continue with the flow of your redux middleware / reducers.
```js
next(action)
```
3.) action - the action dispatched to the store to update state

Let's use the information above to create a simple logging middleware that will log "User Updated!" to the console every time an action with type "UPDATE_USER" is dispatched.

```js
const updateUserLogger = store => next => action => {
  if (action.type === "UPDATE_USER") {
    console.log("User Updated!");
  }
  next(action);
};
```


#### More Information:
<!-- Please add any articles you think might be helpful to read before writing the article -->
[Middleware - Redux docs](https://redux.js.org/advanced/middleware)

[Redux Logger](https://github.com/evgenyrodionov/redux-logger)
[Redux Thunk](https://github.com/reduxjs/redux-thunk)
