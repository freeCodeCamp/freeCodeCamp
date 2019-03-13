---
title: Remove an Item from an Array
---
## Remove an Item from an Array

### Solution
```javascript
const immutableReducer = (state = [0,1,2,3,4,5], action) => {
  switch(action.type) {
    case 'REMOVE_ITEM':
      // don't mutate state here or the tests will fail
      return [...state.slice(0, action.index), ...state.slice(action.index + 1, state.length)];
      // or return state.slice(0, action.index).concat(state.slice(action.index + 1, state.length));
    default:
      return state;
  }
};

const removeItem = (index) => {
  return {
    type: 'REMOVE_ITEM',
    index
  }
}

const store = Redux.createStore(immutableReducer);
```

### Notes
* array.slice(fromIndex, untilIndex) returns a new array
* 1st slice from the first item's index (0 inclusive) until indexToRemove(action.index exclusive)
* 2nd slice from item right after indexToRemove (action.index + 1 inclusive) until length (last item's index + 1 exclusive)
* since slice returns a new array, combine both parts with [...array1, ...array2] spread operator
* or combine them with .concat()
