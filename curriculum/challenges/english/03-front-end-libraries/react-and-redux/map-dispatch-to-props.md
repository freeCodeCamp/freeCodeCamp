---
id: 5a24c314108439a4d4036146
title: Map Dispatch to Props
challengeType: 6
forumTopicId: 301432
---

## Description

<section id='description'>

The `mapDispatchToProps()` function is used to provide specific action creators to your React components so they can dispatch actions against the Redux store. It's similar in structure to the `mapStateToProps()` function you wrote in the last challenge. It returns an object that maps dispatch actions to property names, which become component `props`. However, instead of returning a piece of `state`, each property returns a function that calls `dispatch` with an action creator and any relevant action data. You have access to this `dispatch` because it's passed in to `mapDispatchToProps()` as a parameter when you define the function, just like you passed `state` to `mapStateToProps()`. Behind the scenes, React Redux is using Redux's `store.dispatch()` to conduct these dispatches with `mapDispatchToProps()`. This is similar to how it uses `store.subscribe()` for components that are mapped to `state`.

For example, you have a `loginUser()` action creator that takes a `username` as an action payload. The object returned from `mapDispatchToProps()` for this action creator would look something like:

```jsx
{
  submitLoginUser: function(username) {
    dispatch(loginUser(username));
  }
}
```

</section>

## Instructions

<section id='instructions'>

The code editor provides an action creator called `addMessage()`. Write the function `mapDispatchToProps()` that takes `dispatch` as an argument, then returns an object. The object should have a property `submitNewMessage` set to the dispatch function, which takes a parameter for the new message to add when it dispatches `addMessage()`.

</section>

## Tests

<section id='tests'>

```yml
tests:
  - text: <code>addMessage</code> should return an object with keys <code>type</code> and <code>message</code>.
    testString: assert((function() { const addMessageTest = addMessage(); return ( addMessageTest.hasOwnProperty('type') && addMessageTest.hasOwnProperty('message')); })());
  - text: <code>mapDispatchToProps</code> should be a function.
    testString: assert(typeof mapDispatchToProps === 'function');
  - text: <code>mapDispatchToProps</code> should return an object.
    testString: assert(typeof mapDispatchToProps() === 'object');
  - text: Dispatching <code>addMessage</code> with <code>submitNewMessage</code> from <code>mapDispatchToProps</code> should return a message to the dispatch function.
    testString: assert((function() { let testAction; const dispatch = (fn) => { testAction = fn; }; let dispatchFn = mapDispatchToProps(dispatch); dispatchFn.submitNewMessage('__TEST__MESSAGE__'); return (testAction.type === 'ADD' && testAction.message === '__TEST__MESSAGE__'); })());

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

// Change code below this line

```

</div>

</section>

## Solution

<section id='solution'>

```jsx
const addMessage = (message) => {
  return {
    type: 'ADD',
    message: message
  }
};

// Change code below this line

const mapDispatchToProps = (dispatch) => {
  return {
    submitNewMessage: function(message) {
      dispatch(addMessage(message));
    }
  }
};
```

</section>
