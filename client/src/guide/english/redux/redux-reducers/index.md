---
title: Redux Reducers
---
## Redux Reducers

Redux reducers allow you to make changes to your state in your application. Actions in redux only tell the application what basically happened. Whether it was a click event that took place or some mouse scroll it will just tell that this thing happened. Now how do you go about changing the state of your application which lives inside the store well you do that by using a reducer. 

Now a reducer in redux needs to be a pure function. A pure function is a type of function that does not have additional side-effects. You pass it some arguments and it returns the expected result. For example:

```javascript
function add(a,b) {
 return a + b;
}

const sum = add(5,4);
```

The above function is pure because no matter what happens it will return 9. A function that has ajax calls inside of it or does something like accessing a database is not a pure function. Even if we mutate meaning change a variable value can be considered not a pure function.

Now to make changes to the state you use a reducer. Here is an example code of a reducer:

```javascript
 function todoReducer(state= [],action) {
  case 'ADD_TODO':
      return [...state,action.data]
  case  'DELETE_TODO':
      return state.filter(todo=>todo.id !== action.id)
  default:
      return state;
 }

```
What this todoReducer is doing is that it takes in the current state and the action that was triggered and then returns a new state. Here we used the es6 default parameter syntax to assign a default value to the state array. The action object for the above reducer may look like the following:
```javascript
{
 type: 'ADD_TODO',
 data: {name: 'Learn Redux',completed:false}
}
```
Here the action has a type property of 'ADD_TODO' with a data object. Now when this action is triggered it is received by the reducer and then based on the switch statement it will return a new array with the existing data alongside the new data. 

So to sum up reducers are nothing but pure functions that returns new state for your application. 

#### More Information:
[Redux-Reducers Official Docs](https://redux.js.org/basics/reducers)


