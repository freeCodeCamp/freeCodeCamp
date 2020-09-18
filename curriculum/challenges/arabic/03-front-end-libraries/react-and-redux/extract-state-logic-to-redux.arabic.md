---
id: 5a24c314108439a4d4036143
title: Extract State Logic to Redux
challengeType: 6
videoUrl: ''
localeTitle: استخراج الدولة المنطق إلى Redux
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
    testString: 'assert(ADD === "ADD", "The const <code>ADD</code> should exist and hold a value equal to the string <code>ADD</code>");'
  - text: ''
    testString: 'assert((function() { const addAction = addMessage("__TEST__MESSAGE__"); return addAction.type === ADD && addAction.message === "__TEST__MESSAGE__"; })(), "The action creator <code>addMessage</code> should return an object with <code>type</code> equal to <code>ADD</code> and message equal to the message that is passed in.");'
  - text: <code>messageReducer</code> يجب أن تكون وظيفة.
    testString: 'assert(typeof messageReducer === "function", "<code>messageReducer</code> should be a function.");'
  - text: ''
    testString: 'assert((function() { const initialState = store.getState(); return typeof store === "object" && initialState.length === 0; })(), "The store should exist and have an initial state set to an empty array.");'
  - text: ''
    testString: 'assert((function() { const initialState = store.getState(); const isFrozen = DeepFreeze(initialState); store.dispatch(addMessage("__A__TEST__MESSAGE")); const addState = store.getState(); return (isFrozen && addState[0] === "__A__TEST__MESSAGE"); })(), "Dispatching <code>addMessage</code> against the store should immutably add a new message to the array of messages held in state.");'
  - text: يجب أن تقوم <code>messageReducer</code> بإرجاع الحالة الحالية إذا تمت دعوتها مع أي إجراءات أخرى.
    testString: 'assert((function() { const addState = store.getState(); store.dispatch({type: "FAKE_ACTION"}); const testState = store.getState(); return (addState === testState); })(), "The <code>messageReducer</code> should return the current state if called with any other actions.");'

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
// solution required
```
</section>
