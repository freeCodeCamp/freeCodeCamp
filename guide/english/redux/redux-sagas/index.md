---
title: Redux Sagas
---
## Redux Sagas

Redux Saga is a middleware for Redux that helps perform asynchronous operations and side effects like network requests before updating Redux store in an easier to manage and simpler to test manner compared to other libraries like Redux Thunk. Redux saga uses the ES6 feature [Generators](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/function*). Usage of Generators helps make the asynchronous code flow easier to test and also to keep actions pure.

Redux sagas can be controlled using Redux actions from the application, they have full access to Redux store and can also dispatch Redux actions. 

Redux sagas are divided into two Generators: Watchers and Workers.

A watcher listens to a specific Redux action and calls the watcher. The watcher then performs asynchronous operations and/or dispatches new Redux actions.

#### More Information:
[Redux Saga](https://redux-saga.js.org/)


