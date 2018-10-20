---
title: Redux
---

## Redux

Redux is a predictable state container for JavaScript apps.

It helps you write applications that behave consistently, run in different environments (client, server, and native), and are easy to test. On top of that, it provides a great developer experience, such as live code editing combined with a time traveling debugger.

Basic Principles of Redux:
1. Redux is a state container, it stores all of your state in one place
2. The state is read only, the only way to change state is to dispatch an action.
3. State can only be changed by pure functions or in another term: Reducers. Redux Reducers take in the previous state and an action object and returns the next state.

In practical terms how do we use Redux exactly?
### RULE 1
#### Where is this state stored? Redux supplies you a handy function called

```js
createStore()
```

Where you create the store that will hold all your state.

### RULE 3 (I’m going to show rule 3 first since it will make more sense)
#### State can only be changed by a pure function aka a reducer so to create this connection we will pass in our reducer to createStore() like so

```js
var store = createStore(reducer)
```

It gets more complicated when you have more reducers but at the core, the store now has a reducer attached to it

### RULE 2
#### Once we have a store that is created with store = createStore(reducer). The new store we created has a method called dispatch. Remember in rule 2 the only way we can change the state is to dispatch an action!

You can see where this is going.

```js
store.dispatch(action)
```

Before I get into what a reducer and an a action is I think showing you a very basic and limited implementation of Redux’s createStore() will help greatly.

```js
createStore = (reducer) => {
    let state;
//dispatch method
    dispatch = (action) => {
        state = reducer(state, action)
    }
  return {dispatch}
}
```

See how we passed in a reducer to createStore and it becomes set in our dispatch method; and when we call the dispatch method it takes in an action and it sets a new state based on what reducer will return.

## What is a Reducer? What is an Action?
An Action at the most basic level is an object that has a property called type. It can also have other properties but for simplicity it will only have type.

```js
var someAction = {type:'doSomething'}
```

A reducer is just a function:

```js
var reducer = (state, action) => {
    
    if (action.type === 'doSomething'){
        return changedState;
    } else if ( action.type === 'doSomethingElse'){
        return changedState;
    } else {
        return state
    }
}
```

The action that we pass into a reducer will determine how the state will be changed depending on the type.
Redux does get more complicated but if you understand these principles then you will have an easier time navigating through react-redux projects!

#### More Information:

##### Do you really need Redux?
[Dan Abramov](https://github.com/gaearon), creator of Redux, wrote some time ago great article [You Might Not Need Redux](https://medium.com/@dan_abramov/you-might-not-need-redux-be46360cf367). You should check it first because, well, you might not need it.

For more information head to [http://redux.js.org/](http://redux.js.org/)

### Resources

- [A course from Dan Abramov, the author of Redux.](https://egghead.io/courses/getting-started-with-redux)
