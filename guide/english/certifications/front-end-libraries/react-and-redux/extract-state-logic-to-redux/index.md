---
title: Extract State Logic to Redux
---
## Extract State Logic to Redux


### Solution
```javascript
// define ADD, addMessage(), messageReducer(), and store here:
const ADD = 'ADD';
const addMessage = (message) => {
  return ({
    type: ADD,
    message
  })
}

// Use ES6 default paramter to give the 'previousState' parameter an initial value.
const messageReducer = (previousState = [], action) => {

  // Use switch statement to lay out the reducer logic in response to different action type
  switch (action.type) {
    case ADD:

      // Use ES6 spread operator to return a new array where the new message is added to previousState
      return [...previousState, action.message]
      break;

    default:
      // A default case to fall back on in case if the update to Redux store is not for this specific state.
      return previousState;
  }
}

const store = Redux.createStore(messageReducer);
```
