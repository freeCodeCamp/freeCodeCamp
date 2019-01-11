---
title: Check if an Object has a Property
---
## Check if an Object has a Property

Method:
- The simplest way to complete this challenge is to create an `ìf-statement` to check whether or not the object contains all users, then to return a true or false statement. The first solution does just this. 
- The second solution works in exactly the same way, only it uses 1 line of code, because the built-in JS function 'hasOwnProperty()' already returns a true or false statement

[developer.mozilla.org](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/hasOwnProperty) provides a more in depth analysis of the hasOwnProperty function.

### Solution-1:
```javascript

let users = {
  Alan: {
    age: 27,
    online: true
  },
  Jeff: {
    age: 32,
    online: true
  },
  Sarah: {
    age: 48,
    online: true
  },
  Ryan: {
    age: 19,
    online: true
  }
};

function isEveryoneHere(obj) {
  // change code below this line
  if(users.hasOwnProperty('Alan','Jeff','Sarah','Ryan')) {
    return true;
  }
  return false;
  // change code above this line
}

console.log(isEveryoneHere(users));

```

### Solution-2:
```javascript

function isEveryoneHere(obj) {
  return users.hasOwnProperty('Alan','Jeff','Sarah','Ryan');
}

```
