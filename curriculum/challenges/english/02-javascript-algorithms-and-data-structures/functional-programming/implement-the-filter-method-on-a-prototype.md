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

`[23, 65, 98, 5, 13].myFilter(item => item % 2)` should equal `[23, 65, 5, 13]`.

```js
const _test_s = [23, 65, 98, 5, 13];
const _callback = item => item % 2;
assert(JSON.stringify(_test_s.filter(_callback)) === JSON.stringify(_test_s.myFilter(_callback)));
```

`["naomi", "quincy", "camperbot"].myFilter(element => element === "naomi")` should return `["naomi"]`.

```js
const _test_s = ["naomi", "quincy", "camperbot"];
const _callback = element => element === "naomi";
assert(JSON.stringify(_test_s.filter(_callback)) === JSON.stringify(_test_s.myFilter(_callback)));
```

`[1, 1, 2, 5, 2].myFilter((element, index, array) => array.indexOf(element) === index)` should return `[1, 2, 5]`.

```js
const _test_s = [1, 1, 2, 5, 2];
const _callback = (element, index, array) => array.indexOf(element) === index;
assert(JSON.stringify(_test_s.filter(_callback)) === JSON.stringify(_test_s.myFilter(_callback)));
```

Your code should not use the `filter` method.

```js
assert(!code.match(/\.?[\s\S]*?filter/g));
```

# --seed--

## --seed-contents--

```js
Array.prototype.myFilter = function(callback) {
  const newArray = [];
  // Only change code below this line

  // Only change code above this line
  return newArray;
};
```

# --solutions--

```js
Array.prototype.myFilter = function(callback) {
  const newArray = [];
  for (let i = 0; i < this.length; i++) {
    if (callback(this[i], i, this)) newArray.push(this[i]);
  }
  return newArray;
};

// Test case
const s = [23, 65, 98, 5];
const odd_s = s.myFilter(item => item % 2 === 1);
```
