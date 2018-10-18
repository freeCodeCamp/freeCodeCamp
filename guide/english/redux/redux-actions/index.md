---
title: Redux Actions
---
## Redux Actions

Redux action is a simple object that describes what sort of event has happened in your application. They can even contain
data that needs to be send from the application to the Redux store. Action can contain anything but it must have a mandatory
type property which describes the event taking place. A good practice is to use constants while describing the action in order to avoid typos.

For example:

```js
const ADD_ITEM = 'ADD_ITEM'

const action = {
 type: ADD_ITEM,
 text: 'This is the first item'
}
```

Using action constants allows us to reuse the `ADD_ITEM` variable in our redux reducer and also allows for easier refactoring.

We can send these actions to the store by using 
```javascript 
store.dispatch(action)
```

An application can have different sorts of events happening at a time and these actions helps describe these events. Without these actions there is no way to change the state of the application. 

## Action Creators

Sometimes it can be a bit verbose to run `store.dispatch({ type: ADD_ITEM, text: 'Text' })` every time you want to dispatch an action. This is why some people choose to make something called "action creators." An action creator is simply a function that returns an action object. 

```js
const addItem = text => ({
  type: ADD_ITEM,
  text,
})
```

Now if you want to dispatch that action to the store, just call that function: `store.dispatch(addItem('Text'))`.

You might try [redux-actions](https://github.com/redux-utilities/redux-actions) project that reduces lot of boilerplate making writing your actions way faster.

#### More Information:
<!-- Please add any articles you think might be helpful to read before writing the article -->
[Actions-Redux Offical Docs](https://redux.js.org/basics/actions)
[redux-actions](https://github.com/redux-utilities/redux-actions) github project page


