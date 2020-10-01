---
id: 5a24c314108439a4d4036151
title: Use a Switch Statement to Handle Multiple Actions
challengeType: 6
forumTopicId: 301449
---

## Description
<section id='description'>
You can tell the Redux store how to handle multiple action types. Say you are managing user authentication in your Redux store. You want to have a state representation for when users are logged in and when they are logged out. You represent this with a single state object with the property <code>authenticated</code>. You also need action creators that create actions corresponding to user login and user logout, along with the action objects themselves.
</section>

## Instructions
<section id='instructions'>
The code editor has a store, actions, and action creators set up for you. Fill in the <code>reducer</code> function to handle multiple authentication actions. Use a JavaScript <code>switch</code> statement in the <code>reducer</code> to respond to different action events. This is a standard pattern in writing Redux reducers. The switch statement should switch over <code>action.type</code> and return the appropriate authentication state.
<strong>Note:</strong>&nbsp;At this point, don't worry about state immutability, since it is small and simple in this example. For each action, you can return a new object &mdash; for example, <code>{authenticated: true}</code>. Also, don't forget to write a <code>default</code> case in your switch statement that returns the current <code>state</code>. This is important because once your app has multiple reducers, they are all run any time an action dispatch is made, even when the action isn't related to that reducer. In such a case, you want to make sure that you return the current <code>state</code>.
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: Calling the function <code>loginUser</code> should return an object with type property set to the string <code>LOGIN</code>.
    testString: assert(loginUser().type === 'LOGIN');
  - text: Calling the function <code>logoutUser</code> should return an object with type property set to the string <code>LOGOUT</code>.
    testString: assert(logoutUser().type === 'LOGOUT');
  - text: The store should be initialized with an object with an <code>authenticated</code> property set to <code>false</code>.
    testString: assert(store.getState().authenticated === false);
  - text: Dispatching <code>loginUser</code> should update the <code>authenticated</code> property in the store state to <code>true</code>.
    testString: assert((function() {  const initialState = store.getState(); store.dispatch(loginUser()); const afterLogin = store.getState(); return initialState.authenticated === false && afterLogin.authenticated === true })());
  - text: Dispatching <code>logoutUser</code> should update the <code>authenticated</code> property in the store state to <code>false</code>.
    testString: assert((function() {  store.dispatch(loginUser()); const loggedIn = store.getState(); store.dispatch(logoutUser()); const afterLogout = store.getState(); return loggedIn.authenticated === true && afterLogout.authenticated === false  })());
  - text: The <code>authReducer</code> function should handle multiple action types with a <code>switch</code> statement.
    testString: getUserInput => assert( getUserInput('index').toString().includes('switch') && getUserInput('index').toString().includes('case') && getUserInput('index').toString().includes('default'));

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
const defaultState = {
  authenticated: false
};

const authReducer = (state = defaultState, action) => {
  // Change code below this line

  // Change code above this line
};

const store = Redux.createStore(authReducer);

const loginUser = () => {
  return {
    type: 'LOGIN'
  }
};

const logoutUser = () => {
  return {
    type: 'LOGOUT'
  }
};
```

</div>



</section>

## Solution
<section id='solution'>


```js
const defaultState = {
  authenticated: false
};

const authReducer = (state = defaultState, action) => {

  switch (action.type) {

    case 'LOGIN':
      return {
        authenticated: true
      }

    case 'LOGOUT':
      return {
        authenticated: false
      }

    default:
      return state;

  }

};

const store = Redux.createStore(authReducer);

const loginUser = () => {
  return {
    type: 'LOGIN'
  }
};

const logoutUser = () => {
  return {
    type: 'LOGOUT'
  }
};
```

</section>
