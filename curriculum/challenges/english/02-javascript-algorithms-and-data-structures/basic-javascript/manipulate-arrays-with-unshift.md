---
id: 56bbb991ad1ed5201cd392ce
title: Manipulate Arrays With unshift Method
challengeType: 1
forumTopicId: 18239
dashedName: manipulate-arrays-with-unshift
---

# --description--

Not only can you `shift` elements off of the beginning of an array, you can also `unshift` elements to the beginning of an array i.e. add elements in front of the array.

`.unshift()` works exactly like `.push()`, but instead of adding the element at the end of the array, `unshift()` adds the element at the beginning of the array.

Example:

```js
const ourArray = ["Stimpson", "J", "cat"];
ourArray.shift();
ourArray.unshift("Happy");
```

After the `shift`, `ourArray` would have the value `["J", "cat"]`. After the `unshift`, `ourArray` would have the value `["Happy", "J", "cat"]`.

# --instructions--

Add `["Paul", 35]` to the beginning of the `myArray` variable using `unshift()`.

# --hints--

`myArray` should now have `[["Paul", 35], ["dog", 3]]`.

```js
assert.sameDeepOrderedMembers(myArray, [["Paul", 35], ["dog", 3]]);
```

# --seed--

## --seed-contents--

```js
// Setup
const myArray = [["John", 23], ["dog", 3]];
myArray.shift();

// Only change code below this line

```

# --solutions--

```js
const myArray = [["John", 23], ["dog", 3]];
myArray.shift();
myArray.unshift(["Paul", 35]);
```
