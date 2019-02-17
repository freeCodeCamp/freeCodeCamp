---
title: Copy an Object with Object.assign
---
## Copy an Object with Object.assign

The goal of this challenge is to enforce state immutability when state is an object. 

### Hint 1
Use the method ```Object.assign({}, obj1, obj2)``` in return. Pass ```state``` as obj1. 

### Hint 2
The obj2 should be the updated ```{key: value}``` pair of your state.

### Solution
```
const defaultState = {
  user: 'CamperBot',
  status: 'offline',
  friends: '732,982',
  community: 'freeCodeCamp'
};

const immutableReducer = (state = defaultState, action) => {
  switch(action.type) {
    case 'ONLINE':
      // to enforce state immutability, return a new state object using Object.assign() method
      return Object.assign({}, state, {status: 'online'});
    default:
      return state;
  }
};

const wakeUp = () => {
  return {
    type: 'ONLINE'
  }
};

const store = Redux.createStore(immutableReducer);
```
<!-- The article goes here, in GitHub-flavored Markdown. Feel free to add YouTube videos, images, and CodePen/JSBin embeds  -->
