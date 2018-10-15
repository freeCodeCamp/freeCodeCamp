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

#### More Information:
<!-- Please add any articles you think might be helpful to read before writing the article -->
[Middleware - Redux docs](https://redux.js.org/advanced/middleware)

[Redux Logger](https://github.com/evgenyrodionov/redux-logger)
[Redux Thunk](https://github.com/reduxjs/redux-thunk)
