---
id: 587d8254367417b2b2512c71
title: Remove items from a set in ES6
challengeType: 1
forumTopicId: 301713
dashedName: remove-items-from-a-set-in-es6
---

# --description--

Let's practice removing items from an ES6 Set using the `delete` method.

First, create an ES6 Set:

```js
var set = new Set([1,2,3]);
```

Now remove an item from your Set with the `delete` method.

```js
set.delete(1);
console.log([...set]) // should return [ 2, 3 ]
```

# --instructions--

Now, create a set with the integers 1, 2, 3, 4, & 5.

Remove the values 2 and 5, and then return the set.

# --hints--

Your Set should contain the values 1, 3, & 4

```js
assert(
  (function () {
    var test = checkSet();
    return test.has(1) && test.has(3) && test.has(4) && test.size === 3;
  })()
);
```

# --seed--

## --seed-contents--

```js
function checkSet(){
   var set = null;
   return set;
}
```

# --solutions--

```js
function checkSet(){
var set = new Set([1,2,3,4,5]);
set.delete(2);
set.delete(5);
return set;}
```
