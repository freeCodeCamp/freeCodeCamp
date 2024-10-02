---
id: 587d8255367417b2b2512c73
title: Use Spread and Notes for ES5 Set() Integration
challengeType: 1
forumTopicId: 301720
dashedName: use-spread-and-notes-for-es5-set-integration
---

# --description--

Do you remember the ES6 spread operator `...`?

`...` can take iterable objects in ES6 and turn them into arrays.

Let's create a Set, and check out the spread function.

```js
var set = new Set([1,2,3]);
var setToArr = [...set]
console.log(setToArr) // returns [ 1, 2, 3 ]
```

# --instructions--

In this exercise we will pass a set object to the `checkSet` function. It should return an array containing the values of the Set.

Now you've successfully learned how to use the ES6 `Set()` object, good job!

# --hints--

`checkSet(new Set([1,2,3,4,5,6,7])` should return `[1, 2, 3, 4, 5, 6, 7]`.

```js
assert(
  (function () {
    var test = checkSet(new Set([1, 2, 3, 4, 5, 6, 7]));
    return DeepEqual(test, [1, 2, 3, 4, 5, 6, 7]);
  })()
);
```

# --seed--

## --seed-contents--

```js
function checkSet(set){
   // Only change code below this line

   // Only change code above this line
}
```

# --solutions--

```js
function checkSet(set){
return [...set];}
```
