---
id: 5a24c314108439a4d4036159
title: Use the Spread Operator on Arrays
challengeType: 6
forumTopicId: 301452
---

## Description
<section id='description'>
One solution from ES6 to help enforce state immutability in Redux is the spread operator: <code>...</code>. The spread operator has a variety of applications, one of which is well-suited to the previous challenge of producing a new array from an existing array. This is relatively new, but commonly used syntax. For example, if you have an array <code>myArray</code> and write:
<code>let newArray = [...myArray];</code>
<code>newArray</code> is now a clone of <code>myArray</code>. Both arrays still exist separately in memory. If you perform a mutation like <code>newArray.push(5)</code>, <code>myArray</code> doesn't change. The <code>...</code> effectively <i>spreads</i> out the values in <code>myArray</code> into a new array. To clone an array but add additional values in the new array, you could write <code>[...myArray, 'new value']</code>. This would return a new array composed of the values in <code>myArray</code> and the string <code>'new value'</code> as the last value. The spread syntax can be used multiple times in array composition like this, but it's important to note that it only makes a shallow copy of the array. That is to say, it only provides immutable array operations for one-dimensional arrays.
</section>

## Instructions
<section id='instructions'>
Use the spread operator to return a new copy of state when a to-do is added.
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: The Redux store should exist and initialize with a state equal to <code>[Do not mutate state!]</code>.
    testString: assert((function() { const initialState = store.getState(); return ( Array.isArray(initialState) === true && initialState[0] === 'Do not mutate state!'); })());
  - text: <code>addToDo</code> and <code>immutableReducer</code> both should be functions.
    testString: assert(typeof addToDo === 'function' && typeof immutableReducer === 'function');
  - text: Dispatching an action of type <code>ADD_TO_DO</code> on the Redux store should add a <code>todo</code> item and should NOT mutate state.
    testString: assert((function() { const initialState = store.getState(); const isFrozen = DeepFreeze(initialState); store.dispatch(addToDo('__TEST__TO__DO__')); const finalState = store.getState(); const expectedState = [ 'Do not mutate state!', '__TEST__TO__DO__' ]; return( isFrozen && DeepEqual(finalState, expectedState)); })());
  - text: The spread operator should be used to return new state.
    testString: getUserInput => assert(getUserInput('index').includes('...state'));

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
const immutableReducer = (state = ['Do not mutate state!'], action) => {
  switch(action.type) {
    case 'ADD_TO_DO':
      // Don't mutate state here or the tests will fail
      return
    default:
      return state;
  }
};

const addToDo = (todo) => {
  return {
    type: 'ADD_TO_DO',
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
const immutableReducer = (state = ['Do not mutate state!'], action) => {
  switch(action.type) {
    case 'ADD_TO_DO':
      return [
        ...state,
        action.todo
      ];
    default:
      return state;
  }
};

const addToDo = (todo) => {
  return {
    type: 'ADD_TO_DO',
    todo
  }
}

const store = Redux.createStore(immutableReducer);
```

</section>
