---
id: 594810f028c0303b75339acb
title: 100 门
challengeType: 1
forumTopicId: 302217
dashedName: 100-doors
---

# --description--

连续 100 个门都是最初关闭的。 你在门前通行了 100 次。 第一次通行时，访问每扇门，并“切换”门（如果门是关闭的，就打开它；如果门是打开的，就关闭它）。 第二次，只访问每个第二扇门（即门 #2，#4，#6，...）并切换它们。 第三次，每三个门访问一次（即门 #3，#6，#9，...）等，直到你只访问第 100 个门。

# --instructions--

实现一个函数，以确定最后一次通过后门的状态。 以数组形式返回最终结果，数组中只包含打开的门的门号。

# --hints--

`getFinalOpenedDoors` 应该是一个函数。

```js
assert(typeof getFinalOpenedDoors === 'function');
```

`getFinalOpenedDoors` 应该返回一个数组。

```js
assert(Array.isArray(getFinalOpenedDoors(100)));
```

`getFinalOpenedDoors` 应该产生正确的结果。

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
