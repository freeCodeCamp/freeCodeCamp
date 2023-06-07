---
id: 594810f028c0303b75339acb
title: 100 門
challengeType: 1
forumTopicId: 302217
dashedName: 100-doors
---

# --description--

連續 100 個門都是最初關閉的。 你在門前通行了 100 次。 第一次通行時，訪問每扇門，並“切換”門（如果門是關閉的，就打開它；如果門是打開的，就關閉它）。 第二次，只訪問每個第二扇門（即門 #2，#4，#6，...）並切換它們。 第三次，每三個門訪問一次（即門 #3，#6，#9，...）等，直到你只訪問第 100 個門。

# --instructions--

實現一個函數，以確定最後一次通過後門的狀態。 以數組形式返回最終結果，數組中只包含打開的門的門號。

# --hints--

`getFinalOpenedDoors` 應該是一個函數。

```js
assert(typeof getFinalOpenedDoors === 'function');
```

`getFinalOpenedDoors` 應該返回一個數組。

```js
assert(Array.isArray(getFinalOpenedDoors(100)));
```

`getFinalOpenedDoors` 應該產生正確的結果。

```js
assert.deepEqual(getFinalOpenedDoors(100), solution);
```

# --seed--

## --after-user-code--

```js
const solution = [1, 4, 9, 16, 25, 36, 49, 64, 81, 100];
```

## --seed-contents--

```js
function getFinalOpenedDoors(numDoors) {

}
```

# --solutions--

```js
function getFinalOpenedDoors(numDoors) {
  // this is the final pattern (always squares).
  // thus, the most efficient solution simply returns an array of squares up to numDoors).
  const finalState = [];
  let i = 1;
  while (Math.pow(i, 2) <= numDoors) {
    finalState.push(Math.pow(i, 2));
    i++;
  }
  return finalState;
}
```
