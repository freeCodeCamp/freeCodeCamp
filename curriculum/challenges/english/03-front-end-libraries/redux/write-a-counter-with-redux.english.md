---
id: 5a24c314108439a4d4036157
title: Write a Counter with Redux
challengeType: 6
isHidden: false
isRequired: false
forumTopicId: 301453
---

## Description
<section id='description'>
Now you've learned all the core principles of Redux! You've seen how to create actions and action creators, create a Redux store, dispatch your actions against the store, and design state updates with pure reducers. You've even seen how to manage complex state with reducer composition and handle asynchronous actions. These examples are simplistic, but these concepts are the core principles of Redux. If you understand them well, you're ready to start building your own Redux app. The next challenges cover some of the details regarding <code>state</code> immutability, but first, here's a review of everything you've learned so far.
</section>

## Instructions
<section id='instructions'>
In this lesson, you'll implement a simple counter with Redux from scratch. The basics are provided in the code editor, but you'll have to fill in the details! Use the names that are provided and define <code>incAction</code> and <code>decAction</code> action creators, the <code>counterReducer()</code>, <code>INCREMENT</code> and <code>DECREMENT</code> action types, and finally the Redux <code>store</code>. Once you're finished you should be able to dispatch <code>INCREMENT</code> or <code>DECREMENT</code> actions to increment or decrement the state held in the <code>store</code>. Good luck building your first Redux app!
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: The action creator <code>incAction</code> should return an action object with <code>type</code> equal to the value of <code>INCREMENT</code>
    testString: assert(incAction().type ===INCREMENT);
  - text: The action creator <code>decAction</code> should return an action object with <code>type</code> equal to the value of <code>DECREMENT</code>
    testString: assert(decAction().type === DECREMENT);
  - text: The Redux store should initialize with a <code>state</code> of 0.
    testString: assert(store.getState() === 0);
  - text: Dispatching <code>incAction</code> on the Redux store should increment the <code>state</code> by 1.
    testString: assert((function() { const initialState = store.getState(); store.dispatch(incAction()); const incState = store.getState(); return initialState + 1 === incState })());
  - text: Dispatching <code>decAction</code> on the Redux store should decrement the <code>state</code> by 1.
    testString: assert((function() { const initialState = store.getState(); store.dispatch(decAction()); const decState = store.getState(); return initialState - 1 === decState })());
  - text: <code>counterReducer</code> should be a function
    testString: assert(typeof counterReducer === 'function');

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='jsx-seed'>

```jsx
const INCREMENT = null; // define a constant for increment action types
const DECREMENT = null; // define a constant for decrement action types

const counterReducer = null; // define the counter reducer which will increment or decrement the state based on the action it receives

const incAction = null; // define an action creator for incrementing

const decAction = null; // define an action creator for decrementing

const store = null; // define the Redux store here, passing in your reducers
```

</div>



</section>

## Solution
<section id='solution'>


```js
const INCREMENT = 'INCREMENT';
const DECREMENT = 'DECREMENT';

const counterReducer = (state = 0, action) => {
  switch(action.type) {
    case INCREMENT:
      return state + 1;
    case DECREMENT:
      return state - 1;
    default:
      return state;
  }
};

const incAction = () => {
  return {
    type: INCREMENT
  }
};

const decAction = () => {
  return {
    type: DECREMENT
  }
};

const store = Redux.createStore(counterReducer);
```

</section>
