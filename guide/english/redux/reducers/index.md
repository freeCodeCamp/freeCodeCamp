---
title: Reducers
---
### What are the reducers in Redux?

Reducers are the pure functions that take an action and an previous state and return new state. Given the same input, the reducer should always return the same output.<sup>1</sup> 

As per redux fundamentals, the store can be modified by only pure functions, hence reducers which are pure function, as mentioned above, are used to update the store when a dispatch is made.

Example of a reducer function
```javascript
export function test (state, action) {
    switch (action.type) {
        case 'TEST_ACTION_CASE':
            return Object.assign({}, state, action.payload);
        default:
            return state;
    }
}
```
So by default when an action is dispatched all reducers are invoked. Hence we always "return state" in default section of switch case and also specify the Switch case criteria for which we have to update the store.

As best practise we never update the store directly.
We use Object.assign to achieve that. Object.assign consumes the present state and the changes from payload, combines them and returns a new object without mutating the state.

Syntax:-
Object.assign(target, ...sources)

### Sources 

1. http://redux.js.org/docs/basics/Reducers.html
