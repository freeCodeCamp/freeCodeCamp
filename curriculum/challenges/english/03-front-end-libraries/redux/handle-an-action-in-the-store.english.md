---
id: 5a24c314108439a4d4036150
title: Handle an Action in the Store
challengeType: 6
isHidden: false
isRequired: false
forumTopicId: 301444
---

## Description
<section id='description'>
After an action is created and dispatched, the Redux store needs to know how to respond to that action. This is the job of a <code>reducer</code> function. Reducers in Redux are responsible for the state modifications that take place in response to actions. A <code>reducer</code> takes <code>state</code> and <code>action</code> as arguments, and it always returns a new <code>state</code>. It is important to see that this is the <strong>only</strong> role of the reducer. It has no side effects &mdash; it never calls an API endpoint and it never has any hidden surprises. The reducer is simply a pure function that takes state and action, then returns new state.
Another key principle in Redux is that <code>state</code> is read-only. In other words, the <code>reducer</code> function must <strong>always</strong> return a new copy of <code>state</code> and never modify state directly. Redux does not enforce state immutability, however, you are responsible for enforcing it in the code of your reducer functions. You'll practice this in later challenges.
</section>

## Instructions
<section id='instructions'>
The code editor has the previous example as well as the start of a <code>reducer</code> function for you. Fill in the body of the <code>reducer</code> function so that if it receives an action of type <code>'LOGIN'</code> it returns a state object with <code>login</code> set to <code>true</code>. Otherwise, it returns the current <code>state</code>. Note that the current <code>state</code> and the dispatched <code>action</code> are passed to the reducer, so you can access the action's type directly with <code>action.type</code>.
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: Calling the function <code>loginAction</code> should return an object with type property set to the string <code>LOGIN</code>.
    testString: assert(loginAction().type === 'LOGIN');
  - text: The store should be initialized with an object with property <code>login</code> set to <code>false</code>.
    testString: assert(store.getState().login === false);
  - text: Dispatching <code>loginAction</code> should update the <code>login</code> property in the store state to <code>true</code>.
    testString: assert((function() {  const initialState = store.getState(); store.dispatch(loginAction()); const afterState = store.getState(); return initialState.login === false && afterState.login === true })());
  - text: If the action is not of type <code>LOGIN</code>, the store should return the current state.
    testString: 'assert((function() { store.dispatch({type: ''__TEST__ACTION__''}); let afterTest = store.getState(); return typeof afterTest === ''object'' && afterTest.hasOwnProperty(''login'') })());'

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
const defaultState = {
  login: false
};

const reducer = (state = defaultState, action) => {

  if (action.type === 'LOGIN') {
    return {login: true}
  }

  else {
    return state
  }

};

const store = Redux.createStore(reducer);

const loginAction = () => {
  return {
    type: 'LOGIN'
  }
};
```

</section>
