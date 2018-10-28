---
title: Redux Actions
---
## Redux Actions

Redux action is a simple object that describes what sort of event has happened in your application. They can even contain
data that needs to be sent from the application to the Redux store. An action can contain anything but it must have a mandatory type property which describes the event taking place. A good practice is to use constants while describing the action.

For example

```javascript
const ADD_ITEM = 'ADD_ITEM'
```

```javascript
{
 type: ADD_ITEM,
 text: 'This is the first item'
}
```
We can send these actions to the store by using 
```javascript 
store.dispatch()
```
like so
```javascript 
store.dispatch({
 type: ADD_ITEM,
 text: 'This is the first item'
})
```
In real world apps it is often better to use functions aptly called Action Creators that accept a payload and return the action object, making them reusable.
```javascript
function addItem(text) {
  return {
    type: ADD_ITEM,
    text
  }
}

store.dispatch(addItem('This is the second item'))
```
An application can have different sorts of events happening at a time and these actions help describe these events. Without these actions there is no way to change the state of the application. 

You might try [redux-actions](https://github.com/redux-utilities/redux-actions) project that reduces lot of boilerplate making writing your actions way faster.

#### More Information:
<!-- Please add any articles you think might be helpful to read before writing the article -->
[Actions-Redux Offical Docs](https://redux.js.org/basics/actions)
[redux-actions](https://github.com/redux-utilities/redux-actions) github project page


