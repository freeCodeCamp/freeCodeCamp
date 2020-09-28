---
id: 5a24c314108439a4d403614d
title: Define a Redux Action
challengeType: 6
forumTopicId: 301440
---

## Description
<section id='description'>
Since Redux is a state management framework, updating state is one of its core tasks. In Redux, all state updates are triggered by dispatching actions. An action is simply a JavaScript object that contains information about an action event that has occurred. The Redux store receives these action objects, then updates its state accordingly. Sometimes a Redux action also carries some data. For example, the action carries a username after a user logs in. While the data is optional, actions must carry a <code>type</code> property that specifies the 'type' of action that occurred.
Think of Redux actions as messengers that deliver information about events happening in your app to the Redux store. The store then conducts the business of updating state based on the action that occurred.
</section>

## Instructions
<section id='instructions'>
Writing a Redux action is as simple as declaring an object with a type property. Declare an object <code>action</code> and give it a property <code>type</code> set to the string <code>'LOGIN'</code>.
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: An action object should exist.
    testString: assert((function() { return typeof action === 'object' })());
  - text: The action should have a key property type with value <code>LOGIN</code>.
    testString: assert((function() { return action.type === 'LOGIN' })());

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
// Define an action here:

```

</div>



</section>

## Solution
<section id='solution'>


```js
const action = {
  type: 'LOGIN'
}
```

</section>
