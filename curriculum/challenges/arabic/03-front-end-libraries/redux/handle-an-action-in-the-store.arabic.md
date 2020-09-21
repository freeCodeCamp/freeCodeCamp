---
id: 5a24c314108439a4d4036150
title: Handle an Action in the Store
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
    testString: 'assert(loginAction().type === "LOGIN", "Calling the function <code>loginAction</code> should return an object with type property set to the string <code>LOGIN</code>.");'
  - text: ''
    testString: 'assert(store.getState().login === false, "The store should be initialized with an object with property <code>login</code> set to <code>false</code>.");'
  - text: ''
    testString: 'assert((function() {  const initialState = store.getState(); store.dispatch(loginAction()); const afterState = store.getState(); return initialState.login === false && afterState.login === true })(), "Dispatching <code>loginAction</code> should update the <code>login</code> property in the store state to <code>true</code>.");'
  - text: ''
    testString: 'assert((function() { store.dispatch({type: "__TEST__ACTION__"}); let afterTest = store.getState(); return typeof afterTest === "object" && afterTest.hasOwnProperty("login") })(), "If the action is not of type <code>LOGIN</code>, the store should return the current state.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='jsx-seed'>

```jsx
const defaultState = {
  login: false
};

const reducer = (state = defaultState, action) => {
  // change code below this line

  // change code above this line
};

const store = Redux.createStore(reducer);

const loginAction = () => {
  return {
    type: 'LOGIN'
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
