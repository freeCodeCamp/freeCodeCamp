---
id: 5a24c314108439a4d403614f
title: Dispatch an Action Event
challengeType: 6
isHidden: false
isRequired: false
forumTopicId: 301442
---

## Description
<section id='description'>
<code>dispatch</code> method is what you use to dispatch actions to the Redux store. Calling <code>store.dispatch()</code> and passing the value returned from an action creator sends an action back to the store.
Recall that action creators return an object with a type property that specifies the action that has occurred. Then the method dispatches an action object to the Redux store. Based on the previous challenge's example, the following lines are equivalent, and both dispatch the action of type <code>LOGIN</code>:

```js
store.dispatch(actionCreator());
store.dispatch({ type: 'LOGIN' });
```

</section>

## Instructions
<section id='instructions'>
The Redux store in the code editor has an initialized state that's an object containing a <code>login</code> property currently set to <code>false</code>. There's also an action creator called <code>loginAction()</code> which returns an action of type <code>LOGIN</code>. Dispatch the <code>LOGIN</code> action to the Redux store by calling the <code>dispatch</code> method, and pass in the action created by <code>loginAction()</code>.
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: Calling the function <code>loginAction</code> should return an object with <code>type</code> property set to the string <code>LOGIN</code>.
    testString: assert(loginAction().type === 'LOGIN');
  - text: The store should be initialized with an object with property <code>login</code> set to <code>false</code>.
    testString: assert(store.getState().login === false);
  - text: The <code>store.dispatch()</code> method should be used to dispatch an action of type <code>LOGIN</code>.
    testString: "getUserInput => assert((function() {  let noWhiteSpace = getUserInput('index').replace(/\\s/g,''); return noWhiteSpace.includes('store.dispatch(loginAction())') || noWhiteSpace.includes('store.dispatch({type: \\'LOGIN\\'})') === true })());"

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
const store = Redux.createStore(
  (state = {login: false}) => state
);

const loginAction = () => {
  return {
    type: 'LOGIN'
  }
};

// Dispatch the action here:
store.dispatch(loginAction());
```

</section>
