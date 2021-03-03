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

We've created an object, `users`, with some users in it and a function `isEveryoneHere`, which we pass the `users` object to as an argument. Finish writing this function so that it returns `true` only if the `users` object contains all four names, `Alan`, `Jeff`, `Sarah`, and `Ryan`, as keys, and `false` otherwise.

# --hints--

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

The function `isEveryoneHere` should return `true` if `Alan`, `Jeff`, `Sarah`, and `Ryan` are properties on the `users` object

```js
assert(isEveryoneHere(users) === true);
```

The function `isEveryoneHere` should return `false` if `Alan` is not a property on the `users` object

```js
assert(
  (function () {
    delete users.Alan;
    return isEveryoneHere(users);
  })() === false
);
```

The function `isEveryoneHere` should return `false` if `Jeff` is not a property on the `users` object

```js
assert(
  (function () {
    delete users.Jeff;
    return isEveryoneHere(users);
  })() === false
);
```

The function `isEveryoneHere` should return `false` if `Sarah` is not a property on the `users` object

```js
assert(
  (function () {
    delete users.Sarah;
    return isEveryoneHere(users);
  })() === false
);
```

The function `isEveryoneHere` should return `false` if `Ryan` is not a property on the `users` object

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

function isEveryoneHere(obj) {
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

function isEveryoneHere(obj) {
  return [
    'Alan',
    'Jeff',
    'Sarah',
    'Ryan'
  ].every(i => obj.hasOwnProperty(i));
}

console.log(isEveryoneHere(users));
```
