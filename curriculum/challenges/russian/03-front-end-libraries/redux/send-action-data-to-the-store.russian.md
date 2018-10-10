---
id: 5a24c314108439a4d4036155
title: Send Action Data to the Store
challengeType: 6
isRequired: false
videoUrl: ''
localeTitle: Отправка данных о действиях в магазин
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
    testString: 'assert((function() { const addNoteFn = addNoteText("__TEST__NOTE"); return addNoteFn.type === ADD_NOTE && addNoteFn.text === "__TEST__NOTE" })(), "The action creator <code>addNoteText</code> should return an object with keys <code>type</code> and <code>text</code>.");'
  - text: ''
    testString: 'assert((function() { const initialState = store.getState(); store.dispatch(addNoteText("__TEST__NOTE")); const newState = store.getState(); return initialState !== newState && newState === "__TEST__NOTE" })(), "Dispatching an action of type <code>ADD_NOTE</code> with the <code>addNoteText</code> action creator should update the <code>state</code> to the string passed to the action creator.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='jsx-seed'>

```jsx
const ADD_NOTE = 'ADD_NOTE';

const notesReducer = (state = 'Initial State', action) => {
  switch(action.type) {
    // change code below this line

    // change code above this line
    default:
      return state;
  }
};

const addNoteText = (note) => {
  // change code below this line

  // change code above this line
};

const store = Redux.createStore(notesReducer);

console.log(store.getState());
store.dispatch(addNoteText('Hello!'));
console.log(store.getState());

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
