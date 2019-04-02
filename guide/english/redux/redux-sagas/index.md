---
title: Redux Sagas
---

## Introduction

In this guide it will be presented to the reader the basic concept of Redux Sagas, coupled with a minimal working example.

It's assumed that the reader has already grasped the basic concepts of [Redux](http://redux.js.org/) and [React](https://reactjs.org/).

## Definition

Ranging from fetching content from the browser local storage to fetching data from HTTP call or from GraphQL server, Redux Sagas help any Redux application to achieve this in a more organized and efficient way.

A analogy that can be used to ilustrate what Redux Sagas are, is to think of a Saga like a separate process running side by side with the application and can be controlled via Redux actions.


## Simple Example

Bellow will be presented to the reader a very simple example that covers some of the key features of this library.

Assuming that the [Redux Tutorial](https://guide.freecodecamp.org/redux/tutorial) was followed and a similar project structure is present.

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

## Installation

Start by adding the library to the project.

With npm by issuing the command:

```sh
    npm install --save redux-saga
```
Or with yarn:

```sh
    yarn add redux-saga
```


 Also for the scope of this guide it will be used the [axios](https://github.com/axios/axios) library that handles [Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise) based API calls, but any other is acceptable.


## Redux Changes

It will be necessary to make some changes to the tutorial to accommodate the addition of Sagas.

Start by modifying the `Actiontypes.js` file located in the *constants* folder and add the following code.

```javascript
export const API_REQUEST = "API_REQUEST";
export const API_SUCCESS = "API_SUCCESS";
export const API_FAILURE = "API_FAILURE";
```

Modify the `appReducer.js` file located in the *reducers* folder to contain the code bellow.

```javascript
 import {
    API_REQUEST,
    API_SUCCESS,
    API_FAILURE
} from '../constants/Actiontypes';

// initial state of the reducer
const initialState = {
  fetching: false,
  data: null,
  error: null
};
// the reducer
export const reducer=(state = initialState, action)=>{
  switch (action.type) {
    case API_REQUEST:
      return { ...state, fetching: true, error: null };
    case API_SUCCESS:
      return { ...state, fetching: false, data: action.data };
    case API_FAILURE:
      return { ...state, fetching: false, data: null, error: action.error };
    default:
      return state;
  }
};
```


## Saga Implementation

After the changes made to the Redux part of the application, now time to move onto the Saga implementation.

Inside the *common* folder create a new one named *sagas*, and inside that folder a new file named `sagas.js` with the following code.

```javascript
import { takeLatest, call, put } from "redux-saga/effects"; // helper functions imported from redux-sagas
import axios from "axios"; // promise library used for the guide

// watcher saga: the functon that watches for actions dispatched to the store and starts worker saga
export function* watcherSaga() {
  yield takeLatest("API_REQUEST", workerSaga);
}

// function that makes the api request and returns a Promise for response
function fetchData() {
  return axios({
    method: "get",
    url: "https://your_api_endpoint"
  });
}

// worker saga: makes the api call when watcher saga sees the action
function* workerSaga() {
  try {
    const response = yield call(fetchData);
    const data = response.data.message;

    // dispatch a success action to the store with the new data
    yield put({ type: "API_SUCCESS", data });
  
  } catch (error) {
    // dispatch a failure action to the store with the error
    yield put({ type: "API_FAILURE", error });
  }
}
```

While reading the code above, the reader might notice some things that are different from standard javascript code.

One is the `function*` syntax. Using this creates a special kind of function called a [generator](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/function*).

These functions have a special feature built in, and that is, they can be paused and restarted and also remember the state over time.

Also another diference is the `yield` keyword inside these functions, it represents a asynchronous step in a synchronous/sequencial process.

An analogy that can be applied to the `yield` keyword is to to think of it as the `await` in the await/async pattern.

Breaking the saga code into smaller pieces will result in the following:

 1. The `watcherSaga` generator function is what will *watch* for any action dispatched to the store and will trigger the `workerSaga` function.

 2. [takeLatest](https://github.com/redux-saga/redux-saga/tree/master/docs/api#takelatestpattern-saga-args) is a helper function built in the library
    that will trigger a new `workerSaga` when a `API_REQUEST` action is triggered, while cancelling any previously triggered ones still being processed.

 3. The `fetchData` function will make use of the axios library to make a request to a given API endpoint and returns a [Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise) as a response.

 4. The `workerSaga` generator function will attempt to `fetchData`, using the other imported helper function [call](https://github.com/redux-saga/redux-saga/tree/master/docs/api#callfn-args) and will store the result.

 5. If the `fetchData` function succeed, it's result will be extracted from the response and sent as the payload of the action `API_SUCCESS`, using the `put` helper function that was imported.

 6. If there was an error with the request. The store is notified via the action `API_FAILURE` sending the error as the payload.



 ## Connect React with Redux and Redux-Saga


Now that a simple Redux Saga is implemented, now to proceed in connecting all the parts.

Open the `store.js` file located inside *store*  folder, and modify it by adding the following code:

```javascript
import { createStore, applyMiddleware, compose } from "redux";
import reducer from '../reducers/ExampleAppReducer'; // the reducer created

import createSagaMiddleware from "redux-saga"; // Redux Saga middleware
import { watcherSaga } from "../sagas/sagas"; // imports the watched saga defined earlier

// create the saga middleware
const sagaMiddleware = createSagaMiddleware();

// dev tools middleware
const reduxDevTools =
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();

export default createStore(
    reducer,
    compose(applyMiddleware(sagaMiddleware), reduxDevTools)
);
// run the saga
sagaMiddleware.run(watcherSaga);

```

The `index.js` located at the *project_root* folder should look like this.

```javascript
import React from "react";
import ReactDOM from "react-dom";
import {Router,Route,browserHistory} from 'react-router';
import store from "../common/store/store";
import App from '../client/App';
import NotFound from '../client/NotFound';
import { Provider } from "react-redux";

ReactDOM.render(
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/" component={App}/>
      <Route path="*" component={NotFound}/>
    </Router>
  </Provider>,
  document.getElementById("root")
);

```

The `app.js` file inside the *client* folder needs to be modified in order to reflect the changes made to the application.

Bellow is a simple React Component connected to redux that will make use of what was implemented.

```javascript
import React, { Component } from "react";
import { connect } from "react-redux";

class App extends Component {
  render() {
    const { fetching, item, onRequestData, error } = this.props;
    
    return (
      <div>
        <header>
          <h1>Redux Saga Guide</h1>
        </header>
        <h4>{item}</h4>

        {fetching ? (
          <button disabled>Fetching...</button>
        ) : (
          <button onClick={onRequestData}>Make a async request to your saga</button>
        )}

        {error && <p style={{ color: "red" }}>Uh oh - something went wrong!</p>}

      </div>
    );
  }
}
/**
 * es6 fat arrow function to get information from the application state
 * @param {*} state current state of the application
 */
const mapStateToProps = state => {
  return {
    fetching: state.fetching,
    item: state.data,
    error: state.error
  };
};

/**
 * es6 fat arrow function to connect the actions declared in the saga file to the the component as if they were common react props
 * @param {*} dispatch function send to action file to be later processed in the reducer
 */
const mapDispatchToProps = dispatch => {
  return {
    onRequestData: () => dispatch({ type: "API_REQUEST" })
  };
};

/**
 * this function connects the application component to be possible to interact with the store
 * @param {*} mapStateToProps allows the retrieval of information from the state of the application
 * @param {*} mapDispatchToProps allows the state to change via the actions defined inside
 */
export default connect(mapStateToProps, mapDispatchToProps)(App);
```

# In summary

Now that everything is connected, what will happen every time a user interacts with the application is the following:

1. An event takes place — e.g. user does something (clicks “onRequestData” button) or an update occurs (like componentDidMount).
2. Based on the event, an action is dispatched, likely through a function declared in `mapDispatchToProps` (e.g.onRequestData)
3. A `watcherSaga` sees the action and triggers a `workerSaga`. Use saga helpers to watch for actions differently.
4. While the saga is starting, the action also hits a reducer and updates some piece of state to indicate that the saga has begun and is in process (e.g. fetching).
5. The `workerSaga` performs some side-effect operation (e.g. `fetchData`).
6. Based on the result of the `workerSaga‘s` operation, it dispatches an action to indicate that result. If it's successful then (`API_SUCCESS`), with a payload of the data recieved. If an error (`API_FAILURE`), you might send along an error object for more details on what went wrong.
7. The reducer handles the success or failure action from the `workerSaga` and updates the store accordingly with any new data, as well as sets the “in process” indicator (e.g. fetching) to false.


<!-- The article goes here, in GitHub-flavored Markdown. Feel free to add YouTube videos, images, and CodePen/JSBin embeds  -->

#### More Information:
<!-- Please add any articles you think might be helpful to read before writing the article -->
[Redux Saga Docs](https://redux-saga.js.org/)

[Redux Docs](https://redux.js.org/)

[Redux Saga Examples](https://github.com/redux-saga/redux-saga/tree/master/examples)

[Redux Tutorial](https://guide.freecodecamp.org/redux/tutorial)

