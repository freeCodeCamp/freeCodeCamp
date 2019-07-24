---
title: Use the Spread Operator on Arrays
---
# Use the Spread Operator on Arrays


---
## Solutions

<details><summary>Solution 1 (Click to Show/Hide)</summary>

```javascript
const immutableReducer = (state = ["Do not mutate state!"], action) => {
  switch (action.type) {
    case "ADD_TO_DO":
      // don't mutate state here or the tests will fail
      let arr = [...state, action.todo];
      return arr;
    default:
      return state;
  }
};

const addToDo = todo => {
  return {
    type: "ADD_TO_DO",
    todo
  };
};

const store = Redux.createStore(immutableReducer);
```
</details>
