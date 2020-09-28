---
id: 5a24c314108439a4d4036158
title: Never Mutate State
challengeType: 6
forumTopicId: 301445
---

## Description
<section id='description'>
These final challenges describe several methods of enforcing the key principle of state immutability in Redux. Immutable state means that you never modify state directly, instead, you return a new copy of state.
If you took a snapshot of the state of a Redux app over time, you would see something like <code>state 1</code>, <code>state 2</code>, <code>state 3</code>,<code>state 4</code>, <code>...</code> and so on where each state may be similar to the last, but each is a distinct piece of data. This immutability, in fact, is what provides such features as time-travel debugging that you may have heard about.
Redux does not actively enforce state immutability in its store or reducers, that responsibility falls on the programmer. Fortunately, JavaScript (especially ES6) provides several useful tools you can use to enforce the immutability of your state, whether it is a <code>string</code>, <code>number</code>, <code>array</code>, or <code>object</code>. Note that strings and numbers are primitive values and are immutable by nature. In other words, 3 is always 3. You cannot change the value of the number 3. An <code>array</code> or <code>object</code>, however, is mutable. In practice, your state will probably consist of an <code>array</code> or <code>object</code>, as these are useful data structures for representing many types of information.
</section>

## Instructions
<section id='instructions'>
There is a <code>store</code> and <code>reducer</code> in the code editor for managing to-do items. Finish writing the <code>ADD_TO_DO</code> case in the reducer to append a new to-do to the state. There are a few ways to accomplish this with standard JavaScript or ES6. See if you can find a way to return a new array with the item from <code>action.todo</code> appended to the end.
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: The Redux store should exist and initialize with a state equal to the <code>todos</code> array in the code editor.
    testString: assert((function() { const todos = [ 'Go to the store', 'Clean the house', 'Cook dinner', 'Learn to code' ]; const initialState = store.getState(); return Array.isArray(initialState) && initialState.join(',') === todos.join(','); })());
  - text: <code>addToDo</code> and <code>immutableReducer</code> both should be functions.
    testString: assert(typeof addToDo === 'function' && typeof immutableReducer === 'function');
  - text: Dispatching an action of type <code>ADD_TO_DO</code> on the Redux store should add a <code>todo</code> item and should NOT mutate state.
    testString: assert((function() { const initialState = store.getState(); const isFrozen = DeepFreeze(initialState); store.dispatch(addToDo('__TEST__TO__DO__')); const finalState = store.getState(); const expectedState = [ 'Go to the store', 'Clean the house', 'Cook dinner', 'Learn to code', '__TEST__TO__DO__' ]; return( isFrozen && DeepEqual(finalState, expectedState)); })());

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
const ADD_TO_DO = 'ADD_TO_DO';

// A list of strings representing tasks to do:
const todos = [
  'Go to the store',
  'Clean the house',
  'Cook dinner',
  'Learn to code',
];

const immutableReducer = (state = todos, action) => {
  switch(action.type) {
    case ADD_TO_DO:
      // Don't mutate state here or the tests will fail
      return
    default:
      return state;
  }
};

const addToDo = (todo) => {
  return {
    type: ADD_TO_DO,
    todo
  }
}

const store = Redux.createStore(immutableReducer);
```

</div>



</section>

## Solution
<section id='solution'>


```js
const ADD_TO_DO = 'ADD_TO_DO';

const todos = [
  'Go to the store',
  'Clean the house',
  'Cook dinner',
  'Learn to code',
];

const immutableReducer = (state = todos, action) => {
  switch(action.type) {
    case ADD_TO_DO:
      return state.concat(action.todo);
    default:
      return state;
  }
};

const addToDo = (todo) => {
  return {
    type: ADD_TO_DO,
    todo
  }
}

const store = Redux.createStore(immutableReducer);
```

</section>
