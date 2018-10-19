---
title: Handle an Action in the Store
---
## Handle an Action in the Store

<!-- The article goes here, in GitHub-flavored Markdown. Feel free to add YouTube videos, images, and CodePen/JSBin embeds  -->


### Solution

```javascript
const defaultState = {
  login: false
};

const reducer = (state = defaultState, action) => {
  // change code below this line
  if (action.type === 'LOGIN') {
    return  {
    login: true
    } 
    } else {
      return defaultState
  };
  // change code above this line
};

const store = Redux.createStore(reducer);

const loginAction = () => {
  return {
    type: 'LOGIN'
  }
};
```
