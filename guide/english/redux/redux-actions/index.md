---
title: Redux Actions
---
## Redux Actions

Redux action is a simple object that describes what sort of event has happened in your application. They can even contain
data that needs to be send from the application to the Redux store. Action can contain anything but it must have a mandatory
type property which describes the event taking place. A good practice is to use constants while describing the action.

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
An application can have different sorts of events happening at a time and these actions helps describe these events. Without these actions there is no way to change the state of the application. 

You might try [redux-actions](https://github.com/redux-utilities/redux-actions) project that reduces lot of boilerplate making writing your actions way faster.

## Redux Action Creators

Redux action creators work with actions and reducers to update application state. While actions and action creators are closely related, it's important to understand the distinction between the two. As discussed above, an action is a simple *object* that contains information about an event you want to happen. An action creator, on the other hand, is a **function** that *returns* an action that you've defined. The object that the action creator returns is sometimes also referred to as the *payload*.

Here's an example action creator

```javascript
function addItem(text) {
  return {
    type: ADD_ITEM,
    text
  }
}
```


#### More Information:
<!-- Please add any articles you think might be helpful to read before writing the article -->
[Actions-Redux Offical Docs](https://redux.js.org/basics/actions)
[redux-actions](https://github.com/redux-utilities/redux-actions) github project page


