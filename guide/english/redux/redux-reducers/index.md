---
title: Redux Reducers
---
## Redux Reducers

Redux reducers allow you to make changes to the state in your application. While Redux actions inform the application about events that happened (i.e. click/scroll events), Redux reducers allow you to change the state of the application.

Reducers need to be pure functions. A pure function is a type of function that does not have additional side effects. You pass it some arguments and it returns the expected result. For example:

```javascript
function add(a,b) {
 return a + b;
}

const sum = add(5,4);
```

The above function is pure because no matter what happens it will return 9. A function that has AJAX calls inside of it or does something like accessing a database is not a pure function. Mutating the values of a variable would also not be considered a pure function.

Now to make changes to the state you use a reducer. Here is an example of a reducer:

```javascript
 function todoReducer(state= [], action) {
   switch (action.type) {
    case 'ADD_TODO':
      return [...state, action.data]
    case  'DELETE_TODO':
      return state.filter(todo => todo.id !== action.id)
    default:
      return state;
   }
 }

```
What this `todoReducer` is doing is that it takes in the current state and the action that was triggered and then returns a new state. Here we used the ES6 default parameter syntax to assign a default value to the state array. The action object for the above reducer may look like the following:
```javascript
{
 type: 'ADD_TODO',
 data: {name: 'Learn Redux', completed: false}
}
```
Here the action has a type property of 'ADD_TODO' with a data object. Now when this action is triggered it is received by the reducer and then based on the `switch` statement it will return a new array with the existing data alongside the new data. 

In summary, reducers are nothing but pure functions that return the new state for your application. 

#### More Information:
[Redux-Reducers Official Docs](https://redux.js.org/basics/reducers)


