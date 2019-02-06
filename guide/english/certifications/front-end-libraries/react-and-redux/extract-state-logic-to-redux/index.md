---
title: Extract State Logic to Redux
---
## Extract State Logic to Redux

## Hint 1:

Recall that an action creator takes a message, and returns it with a type in an action

```javascript
function addMessage(message) {
  return {
    type: ADD,
    message: message
  };
};
```

## Hint 2:

Recall that a reducer takes the previous state, and adds a new action to it

```javascript
function messageReducer (previousState, action) {
  return [...previousState, action.message];
}
```

## Hint 3:

Recall that a store has a state, a getter, and can dispatch actions

```javascript
let store = {
  state: [],
  getState: () => store.state,
  dispatch: (action) => {
    if (action.type === ADD) {
      store.state = messageReducer(store.state, action);
    }
  }
};
```

## Solution: 

```javascript
const ADD = 'ADD';

function addMessage(message) {
  return {
    type: ADD,
    message: message
  };
};

function messageReducer (previousState, action) {
  return [...previousState, action.message];
}

let store = {
  state: [],
  getState: () => store.state,
  dispatch: (action) => {
    if (action.type === ADD) {
      store.state = messageReducer(store.state, action);
    }
  }
};
```
