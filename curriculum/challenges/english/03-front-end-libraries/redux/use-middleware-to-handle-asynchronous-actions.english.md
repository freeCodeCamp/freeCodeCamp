---
id: 5a24c314108439a4d4036156
title: Use Middleware to Handle Asynchronous Actions
challengeType: 6
isHidden: false
isRequired: false
forumTopicId: 301451
---

## Description
<section id='description'>
So far these challenges have avoided discussing asynchronous actions, but they are an unavoidable part of web development. At some point you'll need to call asynchronous endpoints in your Redux app, so how do you handle these types of requests? Redux provides middleware designed specifically for this purpose, called Redux Thunk middleware. Here's a brief description how to use this with Redux.
To include Redux Thunk middleware, you pass it as an argument to <code>Redux.applyMiddleware()</code>. This statement is then provided as a second optional parameter to the <code>createStore()</code> function. Take a look at the code at the bottom of the editor to see this. Then, to create an asynchronous action, you return a function in the action creator that takes <code>dispatch</code> as an argument. Within this function, you can dispatch actions and perform asynchronous requests.
In this example, an asynchronous request is simulated with a <code>setTimeout()</code> call. It's common to dispatch an action before initiating any asynchronous behavior so that your application state knows that some data is being requested (this state could display a loading icon, for instance). Then, once you receive the data, you dispatch another action which carries the data as a payload along with information that the action is completed.
Remember that you're passing <code>dispatch</code> as a parameter to this special action creator. This is what you'll use to dispatch your actions, you simply pass the action directly to dispatch and the middleware takes care of the rest.
</section>

## Instructions
<section id='instructions'>
Write both dispatches in the <code>handleAsync()</code> action creator. Dispatch <code>requestingData()</code> before the <code>setTimeout()</code> (the simulated API call). Then, after you receive the (pretend) data, dispatch the <code>receivedData()</code> action, passing in this data. Now you know how to handle asynchronous actions in Redux. Everything else continues to behave as before.
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: The <code>requestingData</code> action creator should return an object of type equal to the value of <code>REQUESTING_DATA</code>.
    testString: assert(requestingData().type === REQUESTING_DATA);
  - text: The <code>receivedData</code> action creator should return an object of type equal to the value of <code>RECEIVED_DATA</code>.
    testString: assert(receivedData('data').type === RECEIVED_DATA);
  - text: <code>asyncDataReducer</code> should be a function.
    testString: assert(typeof asyncDataReducer === 'function');
  - text: Dispatching the requestingData action creator should update the store <code>state</code> property of fetching to <code>true</code>.
    testString: assert((function() { const initialState = store.getState(); store.dispatch(requestingData()); const reqState = store.getState(); return initialState.fetching === false && reqState.fetching === true })());
  - text: Dispatching <code>handleAsync</code> should dispatch the data request action and then dispatch the received data action after a delay.
    testString: assert((function() { const noWhiteSpace = handleAsync.toString().replace(/\s/g,''); return noWhiteSpace.includes('dispatch(requestingData())') === true && noWhiteSpace.includes('dispatch(receivedData(data))') === true })());

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='jsx-seed'>

```jsx
const REQUESTING_DATA = 'REQUESTING_DATA'
const RECEIVED_DATA = 'RECEIVED_DATA'

const requestingData = () => { return {type: REQUESTING_DATA} }
const receivedData = (data) => { return {type: RECEIVED_DATA, users: data.users} }

const handleAsync = () => {
  return function(dispatch) {
    // dispatch request action here

    setTimeout(function() {
      let data = {
        users: ['Jeff', 'William', 'Alice']
      }
      // dispatch received data action here

    }, 2500);
  }
};

const defaultState = {
  fetching: false,
  users: []
};

const asyncDataReducer = (state = defaultState, action) => {
  switch(action.type) {
    case REQUESTING_DATA:
      return {
        fetching: true,
        users: []
      }
    case RECEIVED_DATA:
      return {
        fetching: false,
        users: action.users
      }
    default:
      return state;
  }
};

const store = Redux.createStore(
  asyncDataReducer,
  Redux.applyMiddleware(ReduxThunk.default)
);
```

</div>



</section>

## Solution
<section id='solution'>


```js
const REQUESTING_DATA = 'REQUESTING_DATA'
const RECEIVED_DATA = 'RECEIVED_DATA'

const requestingData = () => { return {type: REQUESTING_DATA} }
const receivedData = (data) => { return {type: RECEIVED_DATA, users: data.users} }

const handleAsync = () => {
  return function(dispatch) {
    dispatch(requestingData());
    setTimeout(function() {
      let data = {
        users: ['Jeff', 'William', 'Alice']
      }
      dispatch(receivedData(data));
    }, 2500);
  }
};

const defaultState = {
  fetching: false,
  users: []
};

const asyncDataReducer = (state = defaultState, action) => {
  switch(action.type) {
    case REQUESTING_DATA:
      return {
        fetching: true,
        users: []
      }
    case RECEIVED_DATA:
      return {
        fetching: false,
        users: action.users
      }
    default:
      return state;
  }
};

const store = Redux.createStore(
  asyncDataReducer,
  Redux.applyMiddleware(ReduxThunk.default)
);
```

</section>
