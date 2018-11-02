---
title: Use const for Action Types
---
## Use const for Action Types

### Using a const for Action Types has a big advantage over using strings.

__Accidental mispellings of strings can lead to errors.__

You may spell `type: 'LOGIN'` correctly in your action creator but mispell `type: 'LOGN'` in your reducer as shown below.


```
const loginUser = () => {
  return {
    type: 'LOGIN'
  }
};

const authReducer = (state = defaultState, action) => {

  switch (action.type) {

    case 'LOGN':
      return {
        authenticated: true
      }

    case 'LOGOUT':
      return {
        authenticated: false
      }

    default:
      return state;

  }

};
```

By using a const for the Action Type, it won't matter if your string is mispelled because both the reducer's switch statment and the Action Type are referencing the same `const`. Using a `const` may also lead your code editor to suggesting the `const` as you are typing it, thus reducing the chance of mispelling the `const`. 

The code shown below will work. 

```
const LOGIN = 'blahblahblah';
const LOGOUT = 'wahwahwahwah';

const loginUser = () => {
  return {
    type: LOGIN
  }
};

const logoutUser = () => {
  return {
    type: LOGOUT
  }
};

const authReducer = (state = defaultState, action) => {

  switch (action.type) {

    case LOGIN:
      return {
        authenticated: true
      }

    case LOGOUT:
      return {
        authenticated: false
      }

    default:
      return state;

  }

};
```
