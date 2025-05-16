---
id: 56533eb9ac21ba0edf2244c6
title: Stand in Line
challengeType: 1
forumTopicId: 18307
dashedName: stand-in-line
---

# --description--

In Computer Science a <dfn>queue</dfn> is an abstract <dfn>Data Structure</dfn> where items are kept in order. New items can be added at the back of the queue and old items are taken off from the front of the queue.

# --instructions--

Write a function `nextInLine` which takes an array (`arr`) and a number (`item`) as arguments.

Add the number to the end of the array, then remove the first element of the array.

The `nextInLine` function should then return the element that was removed.

# --hints--

`nextInLine([], 5)` should return a number.

```js
testArr = [1,2,3,4,5];
assert.isNumber(nextInLine([], 5));
```

`nextInLine([], 1)` should return `1`

```js
testArr = [1,2,3,4,5];
assert.strictEqual(nextInLine([], 1), 1);
```

`nextInLine([2], 1)` should return `2`

```js
testArr = [1,2,3,4,5];
assert.strictEqual(nextInLine([2], 1), 2);
```

`nextInLine([5,6,7,8,9], 1)` should return `5`

```js
testArr = [1,2,3,4,5];
assert.strictEqual(nextInLine([5, 6, 7, 8, 9], 1), 5);
```

After `nextInLine(testArr, 10)`, `testArr[4]` should be `10`

```js
testArr = [1,2,3,4,5];
nextInLine(testArr, 10);
assert.strictEqual(testArr[4], 10);
```

# --seed--

## --seed-contents--

```js
function nextInLine(arr, item) {
  // Only change code below this line
  
  return item;
  // Only change code above this line
}

// Setup
let testArr = [1, 2, 3, 4, 5];

// Display code
console.log("Before: " + JSON.stringify(testArr));
console.log(nextInLine(testArr, 6));
console.log("After: " + JSON.stringify(testArr));
```

# --solutions--

```js
let testArr = [1, 2, 3, 4, 5];

function nextInLine(arr, item) {
    arr.push(item);
    return arr.shift();
}
```
