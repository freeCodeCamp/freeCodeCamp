---
title:  Iterate Through the Keys of an Object with a for...in Statement
---
##  Iterate Through the Keys of an Object with a for...in Statement

Method:
- Note: `dot-notation` will cause errors in this challenge. 
- `[square-bracket]` notation must be used to call a variable property name.
- The following code will not work.

### Example 1:

```javascript

for (let user in obj) {
    if(obj.user.online === true) {
      //code
    }
  }

```

- Example 2 demonstrates how using `[square-bracket]` notation the code will be executed.

### Example 2:

```javascript

for (let user in obj) {
    if(obj[user]online === true) {
      //code
    }
  }

```

### Solution:
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
function countOnline(obj) {
  // change code below this line
  let result = 0;
  for (let user in obj) {
    if(obj[user].online === true) {
      result++;
    }
  }
  return result;
  // change code above this line
}
console.log(countOnline(users));

```
