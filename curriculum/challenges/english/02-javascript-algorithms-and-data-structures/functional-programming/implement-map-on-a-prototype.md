---
id: 587d7b8f367417b2b2512b62
title: Implement map on a Prototype
challengeType: 1
forumTopicId: 301230
---

## Description

<section id='description'>

As you have seen from applying `Array.prototype.map()`, or simply `map()` earlier, the `map` method returns an array of the same length as the one it was called on. It also doesn't alter the original array, as long as its callback function doesn't.

In other words, `map` is a pure function, and its output depends solely on its inputs. Plus, it takes another function as its argument.

You might learn a lot about the `map` method if you implement your own version of it. It is recommended you use a `for` loop or `Array.prototype.forEach()`.

</section>

## Instructions

<section id='instructions'>

Write your own `Array.prototype.myMap()`, which should behave exactly like `Array.prototype.map()`. You should not use the built-in `map` method. The `Array` instance can be accessed in the `myMap` method using `this`.

</section>

## Tests

<section id='tests'>

```yml
tests:
  - text: <code>new_s</code> should equal <code>[46, 130, 196, 10]</code>.
    testString: assert(JSON.stringify(new_s) === JSON.stringify([46, 130, 196, 10]));
  - text: Your code should not use the <code>map</code> method.
    testString: assert(!code.match(/\.?[\s\S]*?map/g));
```

</section>

## Challenge Seed

<section id='challengeSeed'>

<div id='js-seed'>

```js
// The global variable
var s = [23, 65, 98, 5];

Array.prototype.myMap = function(callback) {
  var newArray = [];
  // Only change code below this line

  // Only change code above this line
  return newArray;
};

var new_s = s.myMap(function(item) {
  return item * 2;
});
```

</div>

</section>

## Solution

<section id='solution'>

```js
// the global Array
var s = [23, 65, 98, 5];

Array.prototype.myMap = function(callback) {
  var newArray = [];
  // Only change code below this line
  for (var elem of this) {
    newArray.push(callback(elem));
  }
  // Only change code above this line
  return newArray;
};

var new_s = s.myMap(function(item) {
  return item * 2;
});
```

</section>
