---
id: 6606d1b654829718951900ae
title: Access Multi-Dimensional Arrays with Indexes
challengeType: 1
dashedName: acc-mul-dim-arr
---

# --description--

One way to think of a <dfn>multi-dimensional</dfn> array, is as an *array of arrays*. When you use brackets to access your array, the first set of brackets refers to the entries in the outermost (the first level) array, and each additional pair of brackets refers to the next level of entries inside.

Ek tarika ek <dfn>multi-dimensional</dfn> array ko samajhne ka yeh hai ki ye ek array of arrays hai. Jab aap brackets ka istemal apne array ko access karne ke liye karte hain, to pehla set of brackets bahar se (yaani pehle level se) array ke entries ko refer karta hai, aur har aur pair of brackets agle level ke entries ko refer karta hai andar ke.

**Example**

```js
const arr = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
  [[10, 11, 12], 13, 14]
];

const subarray = arr[3];
const nestedSubarray = arr[3][0];
const element = arr[3][0][1];
```

In this example, `subarray` has the value `[[10, 11, 12], 13, 14]`,
`nestedSubarray` has the value `[10, 11, 12]`,   and `element` has the value `11` .

Is example mein, `subarray` ki value `[[10, 11, 12], 13, 14]` hai, `nestedSubarray` ki value `[10, 11, 12]` hai, aur `element` ki value `11` hai.

**Note:** There shouldn't be any spaces between the array name and the square brackets, like `array [0][0]` and even this `array [0] [0]` is not allowed. Although JavaScript is able to process this correctly, this may confuse other programmers reading your code.

# --instructions--

Using bracket notation select an element from `myArray` such that `myData` is equal to `8`.

Bracket notation ka istemal karke ek element select karein `myArray` se aisa ki `myData` ko `8` ke barabar ho.


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
const myArray = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
  [[10, 11, 12], 13, 14],
];

const myData = myArray[0][0];
```

# --solutions--

```js
const myArray = [[1, 2, 3], [4, 5, 6], [7, 8, 9], [[10, 11, 12], 13, 14]];
const myData = myArray[2][1];
```
