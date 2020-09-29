---
id: 5a24c314108439a4d4036153
title: Register a Store Listener
challengeType: 6
forumTopicId: 301446
---

## Description
<section id='description'>
Another method you have access to on the Redux <code>store</code> object is <code>store.subscribe()</code>. This allows you to subscribe listener functions to the store, which are called whenever an action is dispatched against the store. One simple use for this method is to subscribe a function to your store that simply logs a message every time an action is received and the store is updated.
</section>

## Instructions
<section id='instructions'>
Write a callback function that increments the global variable <code>count</code> every time the store receives an action, and pass this function in to the <code>store.subscribe()</code> method. You'll see that <code>store.dispatch()</code> is called three times in a row, each time directly passing in an action object. Watch the console output between the action dispatches to see the updates take place.
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: Dispatching the <code>ADD</code> action on the store should increment the state by <code>1</code>.
    testString: 'assert((function() { const initialState = store.getState(); store.dispatch({ type: ''ADD'' }); const newState = store.getState(); return newState === (initialState + 1); })());'
  - text: There should be a listener function subscribed to the store using <code>store.subscribe</code>.
    testString: getUserInput => assert(getUserInput('index').includes('store.subscribe('));
  - text: The callback to <code>store.subscribe</code> should also increment the global <code>count</code> variable as the store is updated.
    testString: assert(store.getState() === count);

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
const ADD = 'ADD';

const reducer = (state = 0, action) => {
  switch(action.type) {
    case ADD:
      return state + 1;
    default:
      return state;
  }
};

const store = Redux.createStore(reducer);

// Global count variable:
let count = 0;

// Change code below this line

// Change code above this line

store.dispatch({type: ADD});
console.log(count);
store.dispatch({type: ADD});
console.log(count);
store.dispatch({type: ADD});
console.log(count);
```

</div>

### Before Test
<div id='js-setup'>

```js
count = 0;
```

</div>


</section>

## Solution
<section id='solution'>


```js
const ADD = 'ADD';

const reducer = (state = 0, action) => {
  switch(action.type) {
    case ADD:
      return state + 1;
    default:
      return state;
  }
};

const store = Redux.createStore(reducer);
 let count = 0;
// Change code below this line

store.subscribe( () =>
 {
 count++;
 }
);

// Change code above this line

store.dispatch({type: ADD});
store.dispatch({type: ADD});
store.dispatch({type: ADD});
```

</section>
