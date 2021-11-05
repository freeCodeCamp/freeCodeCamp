---
id: 587d7b8f367417b2b2512b64
title: Implement the filter Method on a Prototype
challengeType: 1
forumTopicId: 301231
dashedName: implement-the-filter-method-on-a-prototype
---

# --description--

You might learn a lot about the `filter` method if you implement your own version of it. It is recommended you use a `for` loop or `Array.prototype.forEach()`.

# --instructions--

Write your own `Array.prototype.myFilter()`, which should behave exactly like `Array.prototype.filter()`. You should not use the built-in `filter` method. The `Array` instance can be accessed in the `myFilter` method using `this`.

# --hints--

`new_s` should equal `[23, 65, 5]`.

```js
assert(JSON.stringify(new_s) === JSON.stringify([23, 65, 5]));
```

Your code should not use the `filter` method.

```js
assert(!code.match(/\.?[\s\S]*?filter/g));
```

# --seed--

## --seed-contents--

```js
// The global variable
const s = [23, 65, 98, 5];

Array.prototype.myFilter = function(callback) {
  // Only change code below this line
  const newArray = [];
  // Only change code above this line
  return newArray;
};

const new_s = s.myFilter(function(item) {
  return item % 2 === 1;
});
```

# --solutions--

```js
const s = [23, 65, 98, 5];

Array.prototype.myFilter = function(callback) {
  const newArray = [];
  for (let i = 0; i < this.length; i++) {
    if (callback(this[i])) newArray.push(this[i]);
  }
  return newArray;
};

const new_s = s.myFilter(function(item) {
  return item % 2 === 1;
});
```
