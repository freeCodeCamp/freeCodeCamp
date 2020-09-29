---
id: 5a24c314108439a4d4036146
title: Map Dispatch to Props
challengeType: 6
forumTopicId: 301432
---

## Description
<section id='description'>
The <code>mapDispatchToProps()</code> function is used to provide specific action creators to your React components so they can dispatch actions against the Redux store. It's similar in structure to the <code>mapStateToProps()</code> function you wrote in the last challenge. It returns an object that maps dispatch actions to property names, which become component <code>props</code>. However, instead of returning a piece of <code>state</code>, each property returns a function that calls <code>dispatch</code> with an action creator and any relevant action data. You have access to this <code>dispatch</code> because it's passed in to <code>mapDispatchToProps()</code> as a parameter when you define the function, just like you passed <code>state</code> to <code>mapStateToProps()</code>. Behind the scenes, React Redux is using Redux's <code>store.dispatch()</code> to conduct these dispatches with <code>mapDispatchToProps()</code>. This is similar to how it uses <code>store.subscribe()</code> for components that are mapped to <code>state</code>.
For example, you have a <code>loginUser()</code> action creator that takes a <code>username</code> as an action payload. The object returned from <code>mapDispatchToProps()</code> for this action creator would look something like:

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
The code editor provides an action creator called <code>addMessage()</code>. Write the function <code>mapDispatchToProps()</code> that takes <code>dispatch</code> as an argument, then returns an object. The object should have a property <code>submitNewMessage</code> set to the dispatch function, which takes a parameter for the new message to add when it dispatches <code>addMessage()</code>.
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
