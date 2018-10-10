---
id: 5a24c314108439a4d4036156
title: Use Middleware to Handle Asynchronous Actions
challengeType: 6
isRequired: false
videoUrl: ''
localeTitle: ''
---

## Description
undefined

## Instructions
undefined

## Tests
<section id='tests'>

```yml
tests:
  - text: ''
    testString: 'assert(requestingData().type === REQUESTING_DATA, "The <code>requestingData</code> action creator should return an object of type equal to the value of <code>REQUESTING_DATA</code>.");'
  - text: ''
    testString: 'assert(receivedData("data").type === RECEIVED_DATA, "The <code>receivedData</code> action creator should return an object of type equal to the value of <code>RECEIVED_DATA</code>.");'
  - text: ''
    testString: 'assert(typeof asyncDataReducer === "function", "<code>asyncDataReducer</code> should be a function.");'
  - text: ''
    testString: 'assert((function() { const initialState = store.getState(); store.dispatch(requestingData()); const reqState = store.getState(); return initialState.fetching === false && reqState.fetching === true })(), "Dispatching the requestingData action creator should update the store <code>state</code> property of fetching to <code>true</code>.");'
  - text: ''
    testString: 'assert((function() { const noWhiteSpace = handleAsync.toString().replace(/\s/g,""); return noWhiteSpace.includes("dispatch(requestingData())") === true && noWhiteSpace.includes("dispatch(receivedData(data))") === true })(), "Dispatching <code>handleAsync</code> should dispatch the data request action and then dispatch the received data action after a delay.");'

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
// solution required
```
</section>
