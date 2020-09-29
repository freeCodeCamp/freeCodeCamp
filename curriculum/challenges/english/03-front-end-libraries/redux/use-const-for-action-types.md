---
id: 5a24c314108439a4d4036152
title: Use const for Action Types
challengeType: 6
forumTopicId: 301450
---

## Description
<section id='description'>
A common practice when working with Redux is to assign action types as read-only constants, then reference these constants wherever they are used. You can refactor the code you're working with to write the action types as <code>const</code> declarations.
</section>

## Instructions
<section id='instructions'>
Declare <code>LOGIN</code> and <code>LOGOUT</code> as <code>const</code> values and assign them to the strings <code>'LOGIN'</code> and <code>'LOGOUT'</code>, respectively. Then, edit the <code>authReducer()</code> and the action creators to reference these constants instead of string values.
<strong>Note:</strong>&nbsp;It's generally a convention to write constants in all uppercase, and this is standard practice in Redux as well.
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: Calling the function <code>loginUser</code> should return an object with <code>type</code> property set to the string <code>LOGIN</code>.
    testString: assert(loginUser().type === 'LOGIN');
  - text: Calling the function <code>logoutUser</code> should return an object with <code>type</code> property set to the string <code>LOGOUT</code>.
    testString: assert(logoutUser().type === 'LOGOUT');
  - text: The store should be initialized with an object with property <code>login</code> set to <code>false</code>.
    testString: assert(store.getState().authenticated === false);
  - text: Dispatching <code>loginUser</code> should update the <code>login</code> property in the store state to <code>true</code>.
    testString: assert((function() {  const initialState = store.getState(); store.dispatch(loginUser()); const afterLogin = store.getState(); return initialState.authenticated === false && afterLogin.authenticated === true })());
  - text: Dispatching <code>logoutUser</code> should update the <code>login</code> property in the store state to <code>false</code>.
    testString: assert((function() {  store.dispatch(loginUser()); const loggedIn = store.getState(); store.dispatch(logoutUser()); const afterLogout = store.getState(); return loggedIn.authenticated === true && afterLogout.authenticated === false })());
  - text: The <code>authReducer</code> function should handle multiple action types with a switch statement.
    testString: getUserInput => assert((function() { return typeof authReducer === 'function' && getUserInput('index').toString().includes('switch') && getUserInput('index').toString().includes('case') && getUserInput('index').toString().includes('default') })());
  - text: <code>LOGIN</code> and <code>LOGOUT</code> should be declared as <code>const</code> values and should be assigned strings of <code>LOGIN</code>and <code>LOGOUT</code>.
    testString: const noWhiteSpace = __helpers.removeWhiteSpace(code); assert(/constLOGIN=(['"`])LOGIN\1/.test(noWhiteSpace) && /constLOGOUT=(['"`])LOGOUT\1/.test(noWhiteSpace));
  - text: The action creators and the reducer should reference the <code>LOGIN</code> and <code>LOGOUT</code> constants.
    testString: getUserInput => assert((function() { const noWhiteSpace = __helpers.removeWhiteSpace(getUserInput('index').toString()); return noWhiteSpace.includes('caseLOGIN:') && noWhiteSpace.includes('caseLOGOUT:') && noWhiteSpace.includes('type:LOGIN') && noWhiteSpace.includes('type:LOGOUT') })());

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
// Change code below this line

// Change code above this line

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
const LOGIN = 'LOGIN';
const LOGOUT = 'LOGOUT';

const defaultState = {
  authenticated: false
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

const store = Redux.createStore(authReducer);

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
```

</section>
