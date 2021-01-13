---
id: 594d8d0ab97724821379b1e6
title: 平均值模式
challengeType: 5
videoUrl: ''
dashedName: averagesmode
---

# --description--

<p>编写程序以查找集合的<a href='https://en.wikipedia.org/wiki/Mode (statistics)' title='wp：模式（统计）'>模式</a>值。 </p><p>可以忽略集合为空的情况。必须小心处理模式不唯一的情况。 </p><p>如果不适合或不可能支持常规集合，请尽可能使用向量（数组）。如果不适合或不可能支持未指定的值类型，请使用整数。 </p>

# --hints--

`mode`是一种功能。

```js
assert(typeof mode === 'function');
```

`mode([1, 3, 6, 6, 6, 6, 7, 7, 12, 12, 17])`应该相等`[6]`

```js
assert.deepEqual(mode(arr1), [6]);
```

`mode([1, 2, 4, 4, 1])`应该等于`[1, 4]` 。

```js
assert.deepEqual(mode(arr2).sort(), [1, 4]);
```

# --seed--

## --after-user-code--

```js
const arr1 = [1, 3, 6, 6, 6, 6, 7, 7, 12, 12, 17];
const arr2 = [1, 2, 4, 4, 1];
```

## --seed-contents--

```js
function mode(arr) {

  return true;
}
```

# --solutions--

```js
function mode(arr) {
  const counter = {};
  let result = [];
  let max = 0;
  // for (const i in arr) {
  arr.forEach(el => {
    if (!(el in counter)) {
      counter[el] = 0;
    }
    counter[el]++;

    if (counter[el] === max) {
      result.push(el);
    }
    else if (counter[el] > max) {
      max = counter[el];
      result = [el];
    }
  });
  return result;
}
```
