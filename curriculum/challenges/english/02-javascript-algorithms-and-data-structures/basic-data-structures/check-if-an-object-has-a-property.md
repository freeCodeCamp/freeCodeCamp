---
id: 587d7b7d367417b2b2512b1c
title: Check if an Object has a Property
challengeType: 1
forumTopicId: 301155
dashedName: check-if-an-object-has-a-property
---

# --description--

Now we can add, modify, and remove keys from objects. But what if we just wanted to know if an object has a specific property? JavaScript provides us with two different ways to do this. One uses the `hasOwnProperty()` method and the other uses the `in` keyword. If we have an object `users` with a property of `Alan`, we could check for its presence in either of the following ways:

```js
users.hasOwnProperty('Alan');
'Alan' in users;
```

Both of these would return `true`.

# --instructions--

Finish writing the function so that it returns `true` if the object passed to it contains all four names, `Alan`, `Jeff`, `Sarah` and `Ryan` and returns `false` otherwise.

# --hints--

The `users` object should not be accessed directly

```js 

assert(code.match(/users/gm).length <= 2)

```

The `users` object should only contain the keys `Alan`, `Jeff`, `Sarah`, and `Ryan`

```js
assert(
  'Alan' in users &&
    'Jeff' in users &&
    'Sarah' in users &&
    'Ryan' in users &&
    Object.keys(users).length === 4
);
```

The function `isEveryoneHere` should return `true` if `Alan`, `Jeff`, `Sarah`, and `Ryan` are properties on the object passed to it. 

```js
assert(isEveryoneHere(users) === true);
```

The function `isEveryoneHere` should return `false` if `Alan` is not a property on the object passed to it.

```js
assert(
  (function () {
    delete users.Alan;
    return isEveryoneHere(users);
  })() === false
);
```

The function `isEveryoneHere` should return `false` if `Jeff` is not a property on the object passed to it.

```js
assert(
  (function () {
    delete users.Jeff;
    return isEveryoneHere(users);
  })() === false
);
```

The function `isEveryoneHere` should return `false` if `Sarah` is not a property on the object passed to it.

```js
assert(
  (function () {
    delete users.Sarah;
    return isEveryoneHere(users);
  })() === false
);
```

The function `isEveryoneHere` should return `false` if `Ryan` is not a property on the object passed to it.

```js
assert(
  (function () {
    delete users.Ryan;
    return isEveryoneHere(users);
  })() === false
);
```

# --seed--

## --seed-contents--

```js
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

function isEveryoneHere(userObj) {
  // Only change code below this line
  
  // Only change code above this line
}

console.log(isEveryoneHere(users));
```

# --solutions--

```js
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

function isEveryoneHere(userObj) {
  return [
    'Alan',
    'Jeff',
    'Sarah',
    'Ryan'
  ].every(user => userObj.hasOwnProperty(user));
}

console.log(isEveryoneHere(users));
```
