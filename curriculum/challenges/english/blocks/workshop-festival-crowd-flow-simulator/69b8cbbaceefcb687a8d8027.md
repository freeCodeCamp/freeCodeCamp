---
id: 69b8cbbaceefcb687a8d8027
title: Step 3
challengeType: 1
dashedName: step-3
---

# --description--

As a partial refresher, during each tick:

- A certain number of attendees arrive at the gate (from its `queue`).
- The gate processes attendees based on its `capacity`.
- If more attendees arrive than the gate can handle, some will remain (overflow).

To handle this logic, you will build a function that processes one tick at a time for a single gate.

Create an empty function named `processTick` that accepts two parameters:

- `gate`: The gate object being processed.
- `tickIndex`: The current position in the `queue` array.

# --hints--

You should create a function named `processTick`.

```js

```

Your function `processTick` should have parameters `gate` and `tickIndex`.

```js

```

# --seed--

## --seed-contents--

```js
const morningGates = [
  { id: "North", capacity: 5, queue: [3, 6, 2, 4] },
  { id: "East", capacity: 3, queue: [2, 4, 3, 5] },
  { id: "South", capacity: 4, queue: [1, 2, 3, 1] },
  { id: "West", capacity: 2, queue: [4, 1, 2, 3] },
];

const nightGates = [
  { id: "North", capacity: 4, queue: [6, 2, 5, 1] },
  { id: "East", capacity: 2, queue: [3, 3, 4, 2] },
  { id: "South", capacity: 5, queue: [2, 1, 2, 3] },
  { id: "West", capacity: 3, queue: [5, 2, 1, 4] },
];

function createThroughputSummary(gates) {
  const summary = {};
  for (const gate of gates) {
    summary[gate.id] = 0;
  };
  return summary;
}

--fcc-editable-region--

--fcc-editable-region--
```
