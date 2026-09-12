---
id: 6a3f80e6fa9fe8bab864fd8a
title: Step 10
challengeType: 1
dashedName: step-10
---

# --description--

Inside `getWindow`, create a copy of `burst` as `sample` using the spread operator. Then return the string `\"burst is empty\"` if `sample` is empty.

# --hints--

You should create a shallow copy of `burst` as `sample` using spread operator (`...`).

```js

```

`getWindow` should return `\"burst is empty\"` for an empty array.

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

  if (sample.includes(0)) {
    return true;
  }
  return false;
}

function getWindow(burst, start, windowSize) {
--fcc-editable-region--
  
--fcc-editable-region--
}

const activeBursts = [];
const silentBursts = [];

for (let i = 0; i < sensorBurst.length; i++) {
  if (detectSilence(sensorBurst[i])) {
    silentBursts.push(sensorBurst[i]);
  } else {
    activeBursts.push(sensorBurst[i]);
  }
}

```
