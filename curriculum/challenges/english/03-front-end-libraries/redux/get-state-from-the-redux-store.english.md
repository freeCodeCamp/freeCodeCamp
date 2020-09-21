---
id: 5a24c314108439a4d403614c
title: Get State from the Redux Store
challengeType: 6
forumTopicId: 301443
---

## Description
<section id='description'>
The Redux store object provides several methods that allow you to interact with it. For example, you can retrieve the current <code>state</code> held in the Redux store object with the <code>getState()</code> method.
</section>

## Instructions
<section id='instructions'>
The code from the previous challenge is re-written more concisely in the code editor. Use <code>store.getState()</code> to retrieve the <code>state</code> from the <code>store</code>, and assign this to a new variable <code>currentState</code>.
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: The redux store should have a value of 5 for the initial state.
    testString: assert(store.getState()===5);
  - text: A variable <code>currentState</code> should exist and should be assigned the current state of the Redux store.
    testString: getUserInput => assert(currentState === 5 && getUserInput('index').includes('store.getState()'));

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
const store = Redux.createStore(
  (state = 5) => state
);

// Change code below this line

```

</div>



</section>

## Solution
<section id='solution'>


```js
const store = Redux.createStore(
  (state = 5) => state
);

// Change code below this line
const currentState = store.getState();
```

</section>
