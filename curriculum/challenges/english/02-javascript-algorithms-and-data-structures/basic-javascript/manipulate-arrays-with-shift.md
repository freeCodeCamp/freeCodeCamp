---
id: 56bbb991ad1ed5201cd392cd
title: Manipulate Arrays With shift Method
challengeType: 1
forumTopicId: 18238
dashedName: manipulate-arrays-with-shift
---

# --description--

`pop()` always removes the last element of an array. What if you want to remove the first?

That's where `.shift()` comes in. It works just like `.pop()`, except it removes the first element instead of the last.

Example:

```js
const ourArray = ["Stimpson", "J", ["cat"]];
const removedFromOurArray = ourArray.shift();
```

`removedFromOurArray` would have a value of the string `Stimpson`, and `ourArray` would have `["J", ["cat"]]`.

# --instructions--

Use the `.shift()` function to remove the first item from `myArray` and assign the "shifted off" value to a new variable, `removedFromMyArray`.

# --hints--

`myArray` should now equal `[["dog", 3]]`.

```js
assert.sameDeepOrderedMembers(myArray, [["dog", 3]]);
```

`removedFromMyArray` should contain `["John", 23]`.

```js
assert.sameDeepOrderedMembers(removedFromMyArray, ["John", 23]);
```

# --seed--

## --seed-contents--

```js
// Setup
const myArray = [["John", 23], ["dog", 3]];

// Only change code below this line

```

# --solutions--

```js
const myArray = [["John", 23], ["dog", 3]];

// Only change code below this line
const removedFromMyArray = myArray.shift();
```
