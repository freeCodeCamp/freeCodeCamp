---
id: 5a24c314108439a4d4036145
title: Map State to Props
challengeType: 6
forumTopicId: 301433
---

## Description

<section id='description'>

The `Provider` component allows you to provide `state` and `dispatch` to your React components, but you must specify exactly what state and actions you want. This way, you make sure that each component only has access to the state it needs. You accomplish this by creating two functions: `mapStateToProps()` and `mapDispatchToProps()`.

In these functions, you declare what pieces of state you want to have access to and which action creators you need to be able to dispatch. Once these functions are in place, you'll see how to use the React Redux `connect` method to connect them to your components in another challenge.

**Note:** Behind the scenes, React Redux uses the `store.subscribe()` method to implement `mapStateToProps()`.

</section>

## Instructions

<section id='instructions'>

Create a function `mapStateToProps()`. This function should take `state` as an argument, then return an object which maps that state to specific property names. These properties will become accessible to your component via `props`. Since this example keeps the entire state of the app in a single array, you can pass that entire state to your component. Create a property `messages` in the object that's being returned, and set it to `state`.

</section>

## Tests

<section id='tests'>

```yml
tests:
  - text: The const <code>state</code> should be an empty array.
    testString: assert(Array.isArray(state) && state.length === 0);
  - text: <code>mapStateToProps</code> should be a function.
    testString: assert(typeof mapStateToProps === 'function');
  - text: <code>mapStateToProps</code> should return an object.
    testString: assert(typeof mapStateToProps() === 'object');
  - text: Passing an array as state to <code>mapStateToProps</code> should return this array assigned to a key of <code>messages</code>.
    testString: assert(mapStateToProps(['messages']).messages.pop() === 'messages');

```

</section>

## Challenge Seed

<section id='challengeSeed'>

<div id='jsx-seed'>

```jsx
const state = [];

// Change code below this line

```

</div>

</section>

## Solution

<section id='solution'>

```jsx
const state = [];

// Change code below this line

const mapStateToProps = (state) => {
  return {
    messages: state
  }
};
```

</section>
