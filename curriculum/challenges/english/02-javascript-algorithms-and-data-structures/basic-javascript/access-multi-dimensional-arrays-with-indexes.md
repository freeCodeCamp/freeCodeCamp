---
id: 56592a60ddddeae28f7aa8e1
title: Access Multi-Dimensional Arrays With Indexes
challengeType: 1
videoUrl: 'https://scrimba.com/c/ckND4Cq'
forumTopicId: 16159
dashedName: access-multi-dimensional-arrays-with-indexes
---

# --description--

One way to think of a <dfn>multi-dimensional</dfn> array, is as an *array of arrays*. When you use brackets to access your array, the first set of brackets refers to the entries in the outer-most (the first level) array, and each additional pair of brackets refers to the next level of entries inside.

**Example**

```js
var arr = [
  [1,2,3],
  [4,5,6],
  [7,8,9],
  [[10,11,12], 13, 14]
];
arr[3];
arr[3][0];
arr[3][0][1];
```

`arr[3]` is `[[10, 11, 12], 13, 14]`, `arr[3][0]` is `[10, 11, 12]`, and `arr[3][0][1]` is `11`.

**Note:** There shouldn't be any spaces between the array name and the square brackets, like `array [0][0]` and even this `array [0] [0]` is not allowed. Although JavaScript is able to process this correctly, this may confuse other programmers reading your code.

# --instructions--

Using bracket notation select an element from `myArray` such that `myData` is equal to `8`.

# --hints--

`myData` should be equal to `8`.

```js
assert(myData === 8);
```

You should be using bracket notation to read the correct value from `myArray`.

```js
assert(/myData=myArray\[2\]\[1\]/.test(__helpers.removeWhiteSpace(code)));
```

# --seed--

## --after-user-code--

```js
if(typeof myArray !== "undefined"){(function(){return "myData: " + myData + " myArray: " + JSON.stringify(myArray);})();}
```

## --seed-contents--

```js
var myArray = [[1,2,3], [4,5,6], [7,8,9], [[10,11,12], 13, 14]];

var myData = myArray[0][0];
```

# --solutions--

```js
var myArray = [[1,2,3],[4,5,6], [7,8,9], [[10,11,12], 13, 14]];
var myData = myArray[2][1];
```
