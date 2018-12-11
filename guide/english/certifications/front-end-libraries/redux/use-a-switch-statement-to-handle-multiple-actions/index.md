---
title: Use a Switch Statement to Handle Multiple Actions
---
## Use a Switch Statement to Handle Multiple Actions

Tip: Make sure you don't use "break" commands after return statements within the switch cases.

### Hint 1
Specific actions will be passed into the reducer function. Look at the action creator functions (e.g. loginUser) to see what values you will need to check for in your switch case statements.  

### Hint 2
Each case condition should return an updated authenticated property object. 

### Hint 3
Do not forget to include a default case in your statement which returns the defaultState. 

### Solution
```javascript
const defaultState = {
  authenticated: false
};

const authReducer = (state = defaultState, action) => {
  
  // change code below this line
  switch(action.type){
    
    case 'LOGIN':
      return {
        authenticated: true
      };

    case 'LOGOUT':
      return {
        authenticated: false
      };

    default:
      return defaultState;  
  }
  // change code above this line
};

const store = Redux.createStore(authReducer);

const loginUser = () => {
  return {
    type: 'LOGIN'
  }
};

const logoutUser = () => {
  return {
    type: 'LOGOUT'
  }
};
```
<!-- The article goes here, in GitHub-flavored Markdown. Feel free to add YouTube videos, images, and CodePen/JSBin embeds  -->
