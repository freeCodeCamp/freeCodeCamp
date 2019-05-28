---
title: Check if an Object has a Property
---
## Check if an Object has a Property

### Basic Solution:
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
  if (
    obj.hasOwnProperty('Alan') && obj.hasOwnProperty('Jeff') &&
    obj.hasOwnProperty('Sarah') && obj.hasOwnProperty('Ryan')
  ) {
    return true;
  }
  return false;
}
```

#### Code Explanation

* Checks whether object contains all users by using the `hasOwnProperty` method for each name with the `&&` operator to return a `true` or `false` value.

### Advanced Solution:
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
  return [
    'Alan',
    'Jeff',
    'Sarah',
    'Ryan'
  ].every(name => obj.hasOwnProperty(name));
}
```

#### Code Explanation

* Uses an array with all of the names which should be present in the object.
* The `every` method is used to validate all of names used in conjunction with the `hasOwnProperty` method result in a value of `true` being returned during each iteration.
* If at least one name is not found using the `hasOwnProperty` method, the `every` method returns `false`.

#### Relevant Links

* [Array.prototype.every](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/every)
