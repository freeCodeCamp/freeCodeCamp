---
id: 594810f028c0303b75339acb
title: 100门
challengeType: 5
videoUrl: ''
dashedName: 100-doors
---

# --description--

<p>连续100个门都是最初关闭的。你可以在门口进行100次通行证。第一次通过，访问每扇门并“切换”门（如果门关闭，打开它;如果它打开，关闭它）。第二次，只访问每个第二个门（即门＃2，＃4，＃6，......）并切换它。第三次，访问每个第3门（即3号门，＃6号，＃9号，......）等，直到您只访问第100个门。 </p><p>实现一个功能，以确定最后一次通过后门的状态。将最终结果返回到数组中，如果数组打开，则只包含数字中包含的门号。 </p>

# --hints--

`getFinalOpenedDoors`是一个函数。

```js
assert(typeof getFinalOpenedDoors === 'function');
```

`getFinalOpenedDoors`应该返回一个数组。

```js
assert(Array.isArray(getFinalOpenedDoors(100)));
```

`getFinalOpenedDoors`没有产生正确的结果。

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
