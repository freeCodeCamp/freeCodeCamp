---
title: Never Mutate State
---
## Never Mutate State

The goal of this challenge is to return a new copy of state in reducer function because of state immutability in Redux.

### Hint 1
const means: it cannot change through re-assignment, and it cannot be re-declared.
Since objects and arrays are mutable, you can add to it by index (array[3] = 3), by property (object.name="sam"), by extending (with various array methods)

### Hint 2
.push() and .splice() directly modify the array

### Hint 3
.concat() doesn't modify array but just returns a new array

### Hint 4
.slice() doesn't modify array but just returns a new array

### Hint 5
spread operator [...array] doesn't modify array but just returns a new array

### Solution
```javascript
const ADD_TO_DO = 'ADD_TO_DO';

// A list of strings representing tasks to do:
const todos = [
  'Go to the store',
  'Clean the house',
  'Cook dinner',
  'Learn to code',
];

const immutableReducer = (state = todos, action) => {
  switch(action.type) {
    case ADD_TO_DO:
      // don't mutate state here or the tests will fail
      
      return todos.concat(action.todo)
      // or return [...todos, action.todo]
      
    default:
      return state;
  }
};

// an example todo argument would be 'Learn React',
const addToDo = (todo) => {
  return {
    type: ADD_TO_DO,
    todo
  }
}

const store = Redux.createStore(immutableReducer);
```
