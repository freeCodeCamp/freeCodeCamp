---
id: 5a24c314108439a4d403614b
title: Create a Redux Store
challengeType: 6
forumTopicId: 301439
---

## Description
<section id='description'>
Redux is a state management framework that can be used with a number of different web technologies, including React.
In Redux, there is a single state object that's responsible for the entire state of your application. This means if you had a React app with ten components, and each component had its own local state, the entire state of your app would be defined by a single state object housed in the Redux <code>store</code>. This is the first important principle to understand when learning Redux: the Redux store is the single source of truth when it comes to application state.
This also means that any time any piece of your app wants to update state, it <strong>must</strong> do so through the Redux store. The unidirectional data flow makes it easier to track state management in your app.
</section>

## Instructions
<section id='instructions'>
The Redux <code>store</code> is an object which holds and manages application <code>state</code>. There is a method called <code>createStore()</code> on the Redux object, which you use to create the Redux <code>store</code>. This method takes a <code>reducer</code> function as a required argument. The <code>reducer</code> function is covered in a later challenge, and is already defined for you in the code editor. It simply takes <code>state</code> as an argument and returns <code>state</code>.
Declare a <code>store</code> variable and assign it to the <code>createStore()</code> method, passing in the <code>reducer</code> as an argument.
<strong>Note:</strong>&nbsp;The code in the editor uses ES6 default argument syntax to initialize this state to hold a value of <code>5</code>. If you're not familiar with default arguments, you can refer to the <a target="_blank" href="https://learn.freecodecamp.org/javascript-algorithms-and-data-structures/es6/set-default-parameters-for-your-functions">ES6 section in the Curriculum</a> which covers this topic.
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: The redux store should exist.
    testString: assert(typeof store.getState === 'function');
  - text: The redux store should have a value of 5 for the state.
    testString: assert(store.getState()=== 5);

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
const reducer = (state = 5) => {
  return state;
}

// Redux methods are available from a Redux object
// For example: Redux.createStore()
// Define the store here:

```

</div>



</section>

## Solution
<section id='solution'>


```js
const reducer = (state = 5) => {
  return state;
}

const store = Redux.createStore(reducer);
```

</section>
