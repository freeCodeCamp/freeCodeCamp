---
id: 5a24c314108439a4d4036157
title: Write a Counter with Redux
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
  - text: يجب أن يقوم <code>incAction</code> منشئ الإجراء بإرجاع كائن تصرف <code>type</code> يساوي قيمة <code>INCREMENT</code>
    testString: 'assert(incAction().type ===INCREMENT, "The action creator <code>incAction</code> should return an action object with <code>type</code> equal to the value of <code>INCREMENT</code>");'
  - text: ''
    testString: 'assert(decAction().type === DECREMENT, "The action creator <code>decAction</code> should return an action object with <code>type</code> equal to the value of <code>DECREMENT</code>");'
  - text: ''
    testString: 'assert(store.getState() === 0, "The Redux store should initialize with a <code>state</code> of 0.");'
  - text: ''
    testString: 'assert((function() { const initialState = store.getState(); store.dispatch(incAction()); const incState = store.getState(); return initialState + 1 === incState })(), "Dispatching <code>incAction</code> on the Redux store should increment the <code>state</code> by 1.");'
  - text: ''
    testString: 'assert((function() { const initialState = store.getState(); store.dispatch(decAction()); const decState = store.getState(); return initialState - 1 === decState })(), "Dispatching <code>decAction</code> on the Redux store should decrement the <code>state</code> by 1.");'
  - text: ''
    testString: 'assert(typeof counterReducer === "function", "<code>counterReducer</code> should be a function");'

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
// solution required
```
</section>
