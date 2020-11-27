---
id: 587d7b8f367417b2b2512b64
title: Implement the filter Method on a Prototype
challengeType: 1
forumTopicId: 301231
---

## Description

<section id='description'>

You might learn a lot about the `filter` method if you implement your own version of it. It is recommended you use a `for` loop or `Array.prototype.forEach()`.

</section>

## Instructions

<section id='instructions'>

Write your own `Array.prototype.myFilter()`, which should behave exactly like `Array.prototype.filter()`. You should not use the built-in `filter` method. The `Array` instance can be accessed in the `myFilter` method using `this`.

</section>

## Tests

<section id='tests'>

```yml
tests:
  - text: <code>new_s</code> should equal <code>[23, 65, 5]</code>.
    testString: assert(JSON.stringify(new_s) === JSON.stringify([23, 65, 5]));
  - text: Your code should not use the <code>filter</code> method.
    testString: assert(!code.match(/\.?[\s\S]*?filter/g));
```

</section>

## Challenge Seed

<section id='challengeSeed'>

<div id='js-seed'>

```js
// The global variable
var s = [23, 65, 98, 5];

Array.prototype.myFilter = function(callback) {
  // Only change code below this line
  var newArray = [];
  // Only change code above this line
  return newArray;
};

var new_s = s.myFilter(function(item) {
  return item % 2 === 1;
});
```

</div>

</section>

## Solution

<section id='solution'>

```js
// the global Array
var s = [23, 65, 98, 5];

Array.prototype.myFilter = function(callback) {
  var newArray = [];
  // Only change code below this line
  for (let i = 0; i < this.length; i++) {
    if (callback(this[i])) newArray.push(this[i]);
  }
  // Only change code above this line
  return newArray;
};

var new_s = s.myFilter(function(item) {
  return item % 2 === 1;
});
```

</section>
