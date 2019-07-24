---
title: Generate an Array of All Object Keys with Object.keys()
---
# Generate an Array of All Object Keys with Object.keys()

---
## Problem Explanation

- To return the array of users the `Object.keys()` method must take an arguement.
- This challenge can be solved using a single line return statement. 


---
## Solutions

<details><summary>Solution 1 (Click to Show/Hide)</summary>

```javascript
let users = {
  Alan: {
    age: 27,
    online: false
  },
  Jeff: {
    age: 32,
    online: true
  },
  Sarah: {
    age: 48,
    online: false
  },
  Ryan: {
    age: 19,
    online: true
  }
};

function getArrayOfUsers(obj) {
  // change code below this line
  return Object.keys(obj);
  // change code above this line
}

console.log(getArrayOfUsers(users));
```
</details>