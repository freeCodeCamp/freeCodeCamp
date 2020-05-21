---
id: 5a24c314108439a4d4036143
title: Extract State Logic to Redux
challengeType: 6
isHidden: false
isRequired: false
forumTopicId: 301429
---

## Description
<section id='description'>
Now that you finished the React component, you need to move the logic it's performing locally in its <code>state</code> into Redux. This is the first step to connect the simple React app to Redux. The only functionality your app has is to add new messages from the user to an unordered list. The example is simple in order to demonstrate how React and Redux work together.
</section>

## Instructions
<section id='instructions'>
First, define an action type 'ADD' and set it to a const <code>ADD</code>. Next, define an action creator <code>addMessage()</code> which creates the action to add a message. You'll need to pass a <code>message</code> to this action creator and include the message in the returned <code>action</code>.
Then create a reducer called <code>messageReducer()</code> that handles the state for the messages. The initial state should equal an empty array. This reducer should add a message to the array of messages held in state, or return the current state. Finally, create your Redux store and pass it the reducer.
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: The const <code>ADD</code> should exist and hold a value equal to the string <code>ADD</code>
    testString: assert(ADD === 'ADD');
  - text: The action creator <code>addMessage</code> should return an object with <code>type</code> equal to <code>ADD</code> and <code>message</code> equal to the message that is passed in.
    testString: assert((function() { const addAction = addMessage('__TEST__MESSAGE__'); return addAction.type === ADD && addAction.message === '__TEST__MESSAGE__'; })());
  - text: <code>messageReducer</code> should be a function.
    testString: assert(typeof messageReducer === 'function');
  - text: The store should exist and have an initial state set to an empty array.
    testString: assert((function() { const initialState = store.getState(); return typeof store === 'object' && initialState.length === 0; })());
  - text: Dispatching <code>addMessage</code> against the store should immutably add a new message to the array of messages held in state.
    testString: assert((function() { const initialState = store.getState(); const isFrozen = DeepFreeze(initialState); store.dispatch(addMessage('__A__TEST__MESSAGE')); const addState = store.getState(); return (isFrozen && addState[0] === '__A__TEST__MESSAGE'); })());
  - text: The <code>messageReducer</code> should return the current state if called with any other actions.
    testString: 'assert((function() { const addState = store.getState(); store.dispatch({type: ''FAKE_ACTION''}); const testState = store.getState(); return (addState === testState); })());'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='jsx-seed'>

```jsx
// define ADD, addMessage(), messageReducer(), and store here:

```

</div>



</section>

## Solution
<section id='solution'>


```js
const ADD = 'ADD';

const addMessage = (message) => {
  return {
    type: ADD,
    message
  }
};

const messageReducer = (state = [], action) => {
  switch (action.type) {
    case ADD:
      return [
        ...state,
        action.message
      ];
    default:
      return state;
  }
};

const store = Redux.createStore(messageReducer);
```

</section>
