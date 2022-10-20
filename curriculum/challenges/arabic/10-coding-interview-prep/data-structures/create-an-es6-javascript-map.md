---
id: 587d825b367417b2b2512c8d
title: Create an ES6 JavaScript Map
challengeType: 1
forumTopicId: 301635
dashedName: create-an-es6-javascript-map
---

# --description--

The new version of JavaScript provides us with a built-in Map object which provides much of the functionality we wrote by hand in the last challenge. This Map object, although similar to regular JavaScript objects, provides some useful functionality that normal objects lack. For example, an ES6 Map tracks the insertion order of items that are added to it. Here is a more complete overview of its methods:

- `.has(key)` returns true or false based on the presence of a key
- `.get(key)` returns the value associated with a key
- `.set(key, value)` sets a new key, value pair
- `.delete(key)` removes a key, value pair
- `.clear()` removes all key, value pairs
- `.entries()` returns an array of all the keys in insertion order
- `.values()` returns an array of all the values in insertion order

# --instructions--

Define a JavaScript Map object and assign to it a variable called myMap. Add the key, value pair `freeCodeCamp`, `Awesome!` to it.

# --hints--

The `myMap` object should exist.

```js
assert(typeof myMap === 'object');
```

`myMap` should contain the key value pair `freeCodeCamp`, `Awesome!`.

```js
assert(myMap.get('freeCodeCamp') === 'Awesome!');
```

# --seed--

## --seed-contents--

```js

```

# --solutions--

```js
const myMap = new Map();

myMap.set("freeCodeCamp", "Awesome!");
```
