---
id: 6a3f9b1a49ea2a5f8d9ebead
title: Step 30
challengeType: 1
dashedName: step-30
---

# --description--

Finally, before we move on to our last tool for combining the two sensor datasets into one, let's remove `console.log("Cleaned bursts:", cleanedBursts)`;

# --hints--

You should remove `console.log("Cleaned bursts:", cleanedBursts);` from your code.

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
  const sample = [...burst];

  if (sample.length == 0) {
    return "burst is empty";
  }

  if (sample.length <= windowSize) {
    return "lecture is smaller than the window size";
  }
  
  return sample.slice(start, start + windowSize);
}

function findReading(burst, value) {
  const sample = [...burst];

  if (sample.indexOf(value) === -1) {
    return "value does not exist";
  }

  return sample.indexOf(value);
}

function replaceFaultyReading(burst, index, newValue) {
  const sample = [...burst];

  sample.splice(index, 1, newValue);

  return sample;
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

const windows = [];

for (let i = 0; i < activeBursts.length; i++) {
  const result = getWindow(activeBursts[i], 0, 2);
  if (result !== "burst is smaller than the window size") {
    windows.push(result);
  }
}

const burstsWithFault = [];

for (let i = 0; i < activeBursts.length; i++) {
  if (findReading(activeBursts[i], 99) !== "value does not exist") {
    burstsWithFault.push(activeBursts[i]);
  }
}

const cleanedBursts = [];

for (let i = 0; i < burstsWithFault.length; i++) {
  const faultIndex = findReading(burstsWithFault[i], 99);
  const fixed = replaceFaultyReading(burstsWithFault[i], faultIndex, 75);
  cleanedBursts.push(fixed);
}

--fcc-editable-region--
console.log("Cleaned bursts:", cleanedBursts);
--fcc-editable-region--

```
