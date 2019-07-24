---
title: Handle an Action in the Store
---
# Handle an Action in the Store


---
## Solutions

<details><summary>Solution 1 (Click to Show/Hide)</summary>

```javascript
const defaultState = {
  login: false
};

const reducer = (state = defaultState, action) => {
  // change code below this line
  if (action.type === "LOGIN") {
    return {
      login: true
    };
  } else {
    return state;
  }
  // change code above this line
};

const store = Redux.createStore(reducer);

const loginAction = () => {
  return {
    type: "LOGIN"
  };
};
```
</details>
