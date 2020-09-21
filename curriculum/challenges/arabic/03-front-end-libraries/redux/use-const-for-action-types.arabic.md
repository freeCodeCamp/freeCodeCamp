---
id: 5a24c314108439a4d4036152
title: Use const for Action Types
challengeType: 6
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
    testString: 'assert(loginUser().type === "LOGIN", "Calling the function <code>loginUser</code> should return an object with <code>type</code> property set to the string <code>LOGIN</code>.");'
  - text: ''
    testString: 'assert(logoutUser().type === "LOGOUT", "Calling the function <code>logoutUser</code> should return an object with <code>type</code> property set to the string <code>LOGOUT</code>.");'
  - text: ''
    testString: 'assert(store.getState().authenticated === false, "The store should be initialized with an object with property <code>login</code> set to <code>false</code>.");'
  - text: ''
    testString: 'assert((function() {  const initialState = store.getState(); store.dispatch(loginUser()); const afterLogin = store.getState(); return initialState.authenticated === false && afterLogin.authenticated === true })(), "Dispatching <code>loginUser</code> should update the <code>login</code> property in the store state to <code>true</code>.");'
  - text: ''
    testString: 'assert((function() {  store.dispatch(loginUser()); const loggedIn = store.getState(); store.dispatch(logoutUser()); const afterLogout = store.getState(); return loggedIn.authenticated === true && afterLogout.authenticated === false })(), "Dispatching <code>logoutUser</code> should update the <code>login</code> property in the store state to <code>false</code>.");'
  - text: ''
    testString: 'getUserInput => assert((function() { return typeof authReducer === "function" && getUserInput("index").toString().includes("switch") && getUserInput("index").toString().includes("case") && getUserInput("index").toString().includes("default") })(), "The <code>authReducer</code> function should handle multiple action types with a switch statement.");'
  - text: ''
    testString: 'getUserInput => assert((function() {  const noWhiteSpace = getUserInput("index").toString().replace(/\s/g,""); return (noWhiteSpace.includes("constLOGIN=\"LOGIN\"") || noWhiteSpace.includes("constLOGIN="LOGIN"")) && (noWhiteSpace.includes("constLOGOUT=\"LOGOUT\"") || noWhiteSpace.includes("constLOGOUT="LOGOUT"")) })(), "<code>LOGIN</code> and <code>LOGOUT</code> should be declared as <code>const</code> values and should be assigned strings of <code>LOGIN</code>and <code>LOGOUT</code>.");'
  - text: ''
    testString: 'getUserInput => assert((function() { const noWhiteSpace = getUserInput("index").toString().replace(/\s/g,""); return noWhiteSpace.includes("caseLOGIN:") && noWhiteSpace.includes("caseLOGOUT:") && noWhiteSpace.includes("type:LOGIN") && noWhiteSpace.includes("type:LOGOUT") })(), "The action creators and the reducer should reference the <code>LOGIN</code> and <code>LOGOUT</code> constants.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='jsx-seed'>

```jsx
// change code below this line

// change code above this line

const defaultState = {
  authenticated: false
};

const authReducer = (state = defaultState, action) => {

  switch (action.type) {

    case 'LOGIN':
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

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
