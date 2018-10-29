---
title: Handle an Action in the Store
localeTitle: Управлять действием в магазине
---
## Управлять действием в магазине

### Решение

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