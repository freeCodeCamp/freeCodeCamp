---
id: 5a24c314108439a4d4036155
title: Send Action Data to the Store
challengeType: 6
forumTopicId: 301448
---

## Description

<section id='description'>

By now you've learned how to dispatch actions to the Redux store, but so far these actions have not contained any information other than a `type`. You can also send specific data along with your actions. In fact, this is very common because actions usually originate from some user interaction and tend to carry some data with them. The Redux store often needs to know about this data.

</section>

## Instructions

<section id='instructions'>

There's a basic `notesReducer()` and an `addNoteText()` action creator defined in the code editor. Finish the body of the `addNoteText()` function so that it returns an `action` object. The object should include a `type` property with a value of `ADD_NOTE`, and also a `text` property set to the `note` data that's passed into the action creator. When you call the action creator, you'll pass in specific note information that you can access for the object.

Next, finish writing the `switch` statement in the `notesReducer()`. You need to add a case that handles the `addNoteText()` actions. This case should be triggered whenever there is an action of type `ADD_NOTE` and it should return the `text` property on the incoming `action` as the new `state`.

The action is dispatched at the bottom of the code. Once you're finished, run the code and watch the console. That's all it takes to send action-specific data to the store and use it when you update store `state`.

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

<div id='js-seed'>

```js
const ADD_NOTE = 'ADD_NOTE';

const notesReducer = (state = 'Initial State', action) => {
  switch(action.type) {
    // Change code below this line

    // Change code above this line
    default:
      return state;
  }
};

const addNoteText = (note) => {
  // Change code below this line

  // Change code above this line
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
const ADD_NOTE = 'ADD_NOTE';

const notesReducer = (state = 'Initial State', action) => {
  switch(action.type) {
    // Change code below this line
    case ADD_NOTE:
      return action.text;
    // Change code above this line
    default:
      return state;
  }
};

const addNoteText = (note) => {
  // Change code below this line
  return {
    type: ADD_NOTE,
    text: note
  }
  // Change code above this line
};

const store = Redux.createStore(notesReducer);

console.log(store.getState());
store.dispatch(addNoteText('Hello Redux!'));
console.log(store.getState());
```

</section>
