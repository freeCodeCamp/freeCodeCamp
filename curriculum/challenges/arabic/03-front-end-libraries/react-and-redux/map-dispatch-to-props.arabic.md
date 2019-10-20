---
id: 5a24c314108439a4d4036146
title: Map Dispatch to Props
challengeType: 6
isRequired: false
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
  - text: ''
    testString: 'assert((function() { const addMessageTest = addMessage(); return ( addMessageTest.hasOwnProperty("type") && addMessageTest.hasOwnProperty("message")); })(), "<code>addMessage</code> should return an object with keys <code>type</code> and <code>message</code>.");'
  - text: ''
    testString: 'assert(typeof mapDispatchToProps === "function", "<code>mapDispatchToProps</code> should be a function.");'
  - text: يجب أن ترجع <code>mapDispatchToProps</code> كائن.
    testString: 'assert(typeof mapDispatchToProps() === "object", "<code>mapDispatchToProps</code> should return an object.");'
  - text: ''
    testString: 'assert((function() { let testAction; const dispatch = (fn) => { testAction = fn; }; let dispatchFn = mapDispatchToProps(dispatch); dispatchFn.submitNewMessage("__TEST__MESSAGE__"); return (testAction.type === "ADD" && testAction.message === "__TEST__MESSAGE__"); })(), "Dispatching <code>addMessage</code> with <code>submitNewMessage</code> from <code>mapDispatchToProps</code> should return a message to the dispatch function.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='jsx-seed'>

```jsx
const addMessage = (message) => {
  return {
    type: 'ADD',
    message: message
  }
};

// change code below this line

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
