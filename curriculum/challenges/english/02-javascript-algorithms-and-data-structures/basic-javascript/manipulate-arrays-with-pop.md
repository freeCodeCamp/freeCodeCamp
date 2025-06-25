---
id: 56bbb991ad1ed5201cd392cc
title: Manipulate Arrays With pop Method
challengeType: 1
forumTopicId: 18236
dashedName: manipulate-arrays-with-pop
---

# --description--

Another way to change the data in an array is with the `.pop()` function.

`.pop()` is used to pop a value off of the end of an array. We can store this popped off value by assigning it to a variable. In other words, `.pop()` removes the last element from an array and returns that element.

Any type of entry can be popped off of an array - numbers, strings, even nested arrays.

```js
const threeArr = [1, 4, 6];
const oneDown = threeArr.pop();
console.log(oneDown);
console.log(threeArr);
```

The first `console.log` will display the value `6`, and the second will display the value `[1, 4]`.

# --instructions--

Use the `.pop()` function to remove the last item from `myArray` and assign the popped off value to a new variable, `removedFromMyArray`.

# --hints--

`myArray` should only contain `[["John", 23]]`.

```js
assert.sameDeepOrderedMembers(myArray, [["John", 23]]);
```

You should use `pop()` on `myArray`.

```js
assert.match(__helpers.removeJSComments(code), /removedFromMyArray\s*=\s*myArray\s*.\s*pop\s*(\s*)/);
```

`removedFromMyArray` should only contain `["cat", 2]`.

```js
assert.sameDeepOrderedMembers(removedFromMyArray, ["cat", 2]);
```

# --seed--

## --seed-contents--

```js
// Setup
const myArray = [["John", 23], ["cat", 2]];

// Only change code below this line

```

# --solutions--

```js
const myArray = [["John", 23], ["cat", 2]];
const removedFromMyArray = myArray.pop();
```
