---
title: Reducers
---
### What are the reducers in Redux?

Reducers are the pure functions that take an action and an previous state and return new state. Given the same input, the reducer should always return the same output.<sup>1</sup> 

In a simple sense, reducers are gatekeepers of the redux central store.
- Components subscribe to the central data store which gets passed via props
- In order to make changes to the data store, components dispatch actions (along with optional payload)
- These actions gets passed onto reducers which then update the redux data store
### Sources 

1. http://redux.js.org/docs/basics/Reducers.html
