---
title: Use Middleware to Handle Asynchronous Actions
---
## Use Middleware to Handle Asynchronous Actions

### Hint 1
Treat the ```dispatch``` argument as a function and pass the action events in it. 

### Hint 2
The ```requestingData``` action event will be passed first. 

### Hint 3
The ```receivedData``` action event will be passed after the ```setTimeout``` function. 

This sequence simulates the process of requesting the data, receiving the data and then dispatching the received data. 

### Hint 4
It is important that the ```data``` variable be passed as an argument of ```receivedData```. 

### Solution
```javascript
const REQUESTING_DATA = 'REQUESTING_DATA'
const RECEIVED_DATA = 'RECEIVED_DATA'

const requestingData = () => { return {type: REQUESTING_DATA} }
const receivedData = (data) => { return {type: RECEIVED_DATA, users: data.users} }

const handleAsync = () => {
  return function(dispatch) {
    // dispatch request action here

    dispatch(requestingData());

    setTimeout(function() {
      let data = {
        users: ['Jeff', 'William', 'Alice']
      }
      // dispatch received data action here

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
<!-- The article goes here, in GitHub-flavored Markdown. Feel free to add YouTube videos, images, and CodePen/JSBin embeds  -->
