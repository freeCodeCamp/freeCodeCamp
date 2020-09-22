---
id: 5a24c314108439a4d403615b
title: Copy an Object with Object.assign
challengeType: 6
forumTopicId: 301437
---

## Description
<section id='description'>
The last several challenges worked with arrays, but there are ways to help enforce state immutability when state is an <code>object</code>, too. A useful tool for handling objects is the <code>Object.assign()</code> utility. <code>Object.assign()</code> takes a target object and source objects and maps properties from the source objects to the target object. Any matching properties are overwritten by properties in the source objects. This behavior is commonly used to make shallow copies of objects by passing an empty object as the first argument followed by the object(s) you want to copy. Here's an example:
<code>const newObject = Object.assign({}, obj1, obj2);</code>
This creates <code>newObject</code> as a new <code>object</code>, which contains the properties that currently exist in <code>obj1</code> and <code>obj2</code>.
</section>

## Instructions
<section id='instructions'>
The Redux state and actions were modified to handle an <code>object</code> for the <code>state</code>. Edit the code to return a new <code>state</code> object for actions with type <code>ONLINE</code>, which set the <code>status</code> property to the string <code>online</code>. Try to use <code>Object.assign()</code> to complete the challenge.
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: The Redux store should exist and initialize with a state that is equivalent to the <code>defaultState</code> object declared on line 1.
    testString: 'assert((function() { const expectedState = { user: ''CamperBot'', status: ''offline'', friends: ''732,982'', community: ''freeCodeCamp'' }; const initialState = store.getState(); return DeepEqual(expectedState, initialState); })());'
  - text: <code>wakeUp</code> and <code>immutableReducer</code> both should be functions.
    testString: assert(typeof wakeUp === 'function' && typeof immutableReducer === 'function');
  - text: Dispatching an action of type <code>ONLINE</code> should update the property <code>status</code> in state to <code>online</code> and should NOT mutate state.
    testString: 'assert((function() { const initialState = store.getState(); const isFrozen = DeepFreeze(initialState); store.dispatch({type: ''ONLINE''}); const finalState = store.getState(); const expectedState = { user: ''CamperBot'', status: ''online'', friends: ''732,982'', community: ''freeCodeCamp'' }; return isFrozen && DeepEqual(finalState, expectedState); })());'
  - text: <code>Object.assign</code> should be used to return new state.
    testString: getUserInput => assert(getUserInput('index').includes('Object.assign'));

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
const defaultState = {
  user: 'CamperBot',
  status: 'offline',
  friends: '732,982',
  community: 'freeCodeCamp'
};

const immutableReducer = (state = defaultState, action) => {
  switch(action.type) {
    case 'ONLINE':
      // Don't mutate state here or the tests will fail
      return
    default:
      return state;
  }
};

const wakeUp = () => {
  return {
    type: 'ONLINE'
  }
};

const store = Redux.createStore(immutableReducer);
```

</div>



</section>

## Solution
<section id='solution'>


```js
const defaultState = {
  user: 'CamperBot',
  status: 'offline',
  friends: '732,982',
  community: 'freeCodeCamp'
};

const immutableReducer = (state = defaultState, action) => {
  switch(action.type) {
    case 'ONLINE':
      return Object.assign({}, state, {
        status: 'online'
      });
    default:
      return state;
  }
};

const wakeUp = () => {
  return {
    type: 'ONLINE'
  }
};

const store = Redux.createStore(immutableReducer);
```

</section>
