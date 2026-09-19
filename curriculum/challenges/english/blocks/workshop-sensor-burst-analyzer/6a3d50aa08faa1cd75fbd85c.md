---
id: 6a3d50aa08faa1cd75fbd85c
title: Step 4
challengeType: 1
dashedName: step-4
---

# --description--

In prior lessons, you learned about the `includes()` method, which is a simple and efficient way to check if an array contains a specific value. This method returns a `boolean` value: `true` if the array contains the specified element, and `false` otherwise.

Here's an example:

```js
let fruits = ["apple", "banana", "orange", "mango"];
console.log(fruits.includes("banana")); // true
console.log(fruits.includes("grape"));  // false
```

Use the `includes` method to check if `sample` contains the value `0`. If it does, return `true`. Otherwise, return `false`.

# --hints--

`detectSilence` should use the `includes` method.

```js

```

`detectSilence` should return `true` for a burst containing a zero.

```js

```

`detectSilence` should return `false` for a burst with no zeros.

```js

```

# --seed--

## --seed-contents--

```js
const sensorBurst = [
  [52, 77],
  [65, 99],
  [8, 72, 68],
  [25, 6],
  [93, 42, 23],
  [48, 33, 9],
  [0, 0],
  [84, 3, 23],
  [0, 0, 0],
  [0, 0],
  [0, 0, 0],
  [51, 16],
  [7, 71, 47],
  [16],
  [0, 0, 0],
  [99, 53],
  [0, 0],
  [74, 9],
  [22, 11],
  [55, 14, 39],
  [0, 0, 0]
];

function detectSilence(burst) {
  const sample = [...burst];

--fcc-editable-region--
  
--fcc-editable-region--
}

```
