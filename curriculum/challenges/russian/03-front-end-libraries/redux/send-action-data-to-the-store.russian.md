---
id: 5a24c314108439a4d4036155
title: Send Action Data to the Store
challengeType: 6
isRequired: false
forumTopicId: 301448
localeTitle: Отправка данных о действиях в магазин
---

## Description
<section id='description'>
By now you've learned how to dispatch actions to the Redux store, but so far these actions have not contained any information other than a <code>type</code>. You can also send specific data along with your actions. In fact, this is very common because actions usually originate from some user interaction and tend to carry some data with them. The Redux store often needs to know about this data.
</section>

## Instructions
<section id='instructions'>
There's a basic <code>notesReducer()</code> and an <code>addNoteText()</code> action creator defined in the code editor. Finish the body of the <code>addNoteText()</code> function so that it returns an <code>action</code> object. The object should include a <code>type</code> property with a value of <code>ADD_NOTE</code>, and also a <code>text</code> property set to the <code>note</code> data that's passed into the action creator. When you call the action creator, you'll pass in specific note information that you can access for the object.
Next, finish writing the <code>switch</code> statement in the <code>notesReducer()</code>. You need to add a case that handles the <code>addNoteText()</code> actions. This case should be triggered whenever there is an action of type <code>ADD_NOTE</code> and it should return the <code>text</code> property on the incoming <code>action</code> as the new <code>state</code>.
The action is dispatched at the bottom of the code. Once you're finished, run the code and watch the console. That's all it takes to send action-specific data to the store and use it when you update store <code>state</code>.
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: The action creator <code>addNoteText</code> should return an object with keys <code>type</code> and <code>text</code>.
    testString: assert((function() { const addNoteFn = addNoteText('__TEST__NOTE'); return addNoteFn.type === ADD_NOTE && addNoteFn.text === '__TEST__NOTE' })());
  - text: Dispatching an action of type <code>ADD_NOTE</code> with the <code>addNoteText</code> action creator should update the <code>state</code> to the string passed to the action creator.
    testString: assert((function() { const initialState = store.getState(); store.dispatch(addNoteText('__TEST__NOTE')); const newState = store.getState(); return initialState !== newState && newState === '__TEST__NOTE' })());

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

```jsx
const ADD_NOTE = 'ADD_NOTE';

const notesReducer = (state = 'Initial State', action) => {
  switch(action.type) {
    // change code below this line
    case ADD_NOTE:
      return action.text;
    // change code above this line
    default:
      return state;
  }
};

const addNoteText = (note) => {
  // change code below this line
  return {
    type: ADD_NOTE,
    text: note
  }
  // change code above this line
};

const store = Redux.createStore(notesReducer);

console.log(store.getState());
store.dispatch(addNoteText('Hello Redux!'));
console.log(store.getState());
```

</section>
