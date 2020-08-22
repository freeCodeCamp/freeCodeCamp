---
id: 5a24c314108439a4d4036154
title: Combine Multiple Reducers
challengeType: 6
isHidden: false
isRequired: false
forumTopicId: 301436
---

## Description
<section id='description'>
When the state of your app begins to grow more complex, it may be tempting to divide state into multiple pieces. Instead, remember the first principle of Redux: all app state is held in a single state object in the store. Therefore, Redux provides reducer composition as a solution for a complex state model. You define multiple reducers to handle different pieces of your application's state, then compose these reducers together into one root reducer. The root reducer is then passed into the Redux <code>createStore()</code> method.
In order to let us combine multiple reducers together, Redux provides the <code>combineReducers()</code> method. This method accepts an object as an argument in which you define properties which associate keys to specific reducer functions. The name you give to the keys will be used by Redux as the name for the associated piece of state.
Typically, it is a good practice to create a reducer for each piece of application state when they are distinct or unique in some way. For example, in a note-taking app with user authentication, one reducer could handle authentication while another handles the text and notes that the user is submitting. For such an application, we might write the <code>combineReducers()</code> method like this:

```js
const rootReducer = Redux.combineReducers({
  auth: authenticationReducer,
  notes: notesReducer
});
```

Now, the key <code>notes</code> will contain all of the state associated with our notes and handled by our <code>notesReducer</code>. This is how multiple reducers can be composed to manage more complex application state. In this example, the state held in the Redux store would then be a single object containing <code>auth</code> and <code>notes</code> properties.
</section>

## Instructions
<section id='instructions'>
There are <code>counterReducer()</code> and <code>authReducer()</code> functions provided in the code editor, along with a Redux store. Finish writing the <code>rootReducer()</code> function using the <code>Redux.combineReducers()</code> method. Assign <code>counterReducer</code> to a key called <code>count</code> and <code>authReducer</code> to a key called <code>auth</code>.
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: The <code>counterReducer</code> should increment and decrement the <code>state</code>.
    testString: 'assert((function() { const initialState = store.getState().count; store.dispatch({type: INCREMENT}); store.dispatch({type: INCREMENT}); const firstState = store.getState().count; store.dispatch({type: DECREMENT}); const secondState = store.getState().count; return firstState === initialState + 2 && secondState === firstState - 1  })());'
  - text: The <code>authReducer</code> should toggle the <code>state</code> of <code>authenticated</code> between <code>true</code> and <code>false</code>.
    testString: 'assert((function() {  store.dispatch({type: LOGIN}); const loggedIn = store.getState().auth.authenticated; store.dispatch({type: LOGOUT}); const loggedOut = store.getState().auth.authenticated; return loggedIn === true && loggedOut === false  })());'
  - text: 'The store <code>state</code> should have two keys: <code>count</code>, which holds a number, and <code>auth</code>, which holds an object. The <code>auth</code> object should have a property of <code>authenticated</code>, which holds a boolean.'
    testString: "assert((function() { const state = store.getState(); return typeof state.auth === 'object' && typeof state.auth.authenticated === 'boolean' && typeof state.count === 'number' })());"
  - text: The <code>rootReducer</code> should be a function that combines the <code>counterReducer</code> and the <code>authReducer</code>.
    testString: getUserInput => assert((function() {  const noWhiteSpace = getUserInput('index').replace(/\s/g,''); return typeof rootReducer === 'function' && noWhiteSpace.includes('Redux.combineReducers')  })());

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='jsx-seed'>

```jsx
const INCREMENT = 'INCREMENT';
const DECREMENT = 'DECREMENT';

const counterReducer = (state = 0, action) => {
  switch(action.type) {
    case INCREMENT:
      return state + 1;
    case DECREMENT:
      return state - 1;
    default:
      return state;
  }
};

const LOGIN = 'LOGIN';
const LOGOUT = 'LOGOUT';

const authReducer = (state = {authenticated: false}, action) => {
  switch(action.type) {
    case LOGIN:
      return {
        authenticated: true
      }
    case LOGOUT:
      return {
        authenticated: false
      }
    default:
      return state;
  }
};

const rootReducer = // define the root reducer here

const store = Redux.createStore(rootReducer);

```

</div>



</section>

## Solution
<section id='solution'>


```js
const INCREMENT = 'INCREMENT';
const DECREMENT = 'DECREMENT';

const counterReducer = (state = 0, action) => {
  switch(action.type) {
    case INCREMENT:
      return state + 1;
    case DECREMENT:
      return state - 1;
    default:
      return state;
  }
};

const LOGIN = 'LOGIN';
const LOGOUT = 'LOGOUT';

const authReducer = (state = {authenticated: false}, action) => {
  switch(action.type) {
    case LOGIN:
      return {
        authenticated: true
      }
    case LOGOUT:
      return {
        authenticated: false
      }
    default:
      return state;
  }
};

const rootReducer = Redux.combineReducers({
  count: counterReducer,
  auth: authReducer
});

const store = Redux.createStore(rootReducer);
```

</section>
