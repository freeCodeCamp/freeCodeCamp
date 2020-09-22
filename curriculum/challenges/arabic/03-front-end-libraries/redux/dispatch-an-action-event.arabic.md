---
id: 5a24c314108439a4d403614f
title: Dispatch an Action Event
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
    testString: 'assert(loginAction().type === "LOGIN", "Calling the function <code>loginAction</code> should return an object with <code>type</code> property set to the string <code>LOGIN</code>.");'
  - text: ''
    testString: 'assert(store.getState().login === false, "The store should be initialized with an object with property <code>login</code> set to <code>false</code>.");'
  - text: ''
    testString: 'getUserInput => assert((function() {  let noWhiteSpace = getUserInput("index").replace(/\s/g,""); return noWhiteSpace.includes("store.dispatch(loginAction())") || noWhiteSpace.includes("store.dispatch({type: \"LOGIN\"})") === true })(), "The <code>store.dispatch()</code> method should be used to dispatch an action of type <code>LOGIN</code>.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='jsx-seed'>

```jsx
const store = Redux.createStore(
  (state = {login: false}) => state
);

const loginAction = () => {
  return {
    type: 'LOGIN'
  }
};

// Dispatch the action here:

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
