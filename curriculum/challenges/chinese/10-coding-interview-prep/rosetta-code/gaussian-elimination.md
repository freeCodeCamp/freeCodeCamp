---
id: 5a23c84252665b21eecc7e77
title: 高斯消除
challengeType: 5
videoUrl: ''
---

# --description--

编写一个函数来解决\\（Ax = b \\）使用高斯消除然后向后替换。 \\（A \\）是\\（n \\次n \\）矩阵。此外，\\（x \\）和\\（b \\）是\\（n \\）乘以1个向量。要提高准确性，请使用部分旋转和缩放。

# --hints--

`gaussianElimination`应该是一个函数。

```js
assert(typeof gaussianElimination == 'function');
```

`gaussianElimination("+JSON.stringify(tests[0][0])+","+JSON.stringify(tests[0][1])+")`应该返回一个数组。

```js
assert(
  Array.isArray(
    gaussianElimination(
      [
        [1, 1],
        [1, -1]
      ],
      [5, 1]
    )
  )
);
```

`gaussianElimination("+JSON.stringify(tests[0][0])+","+JSON.stringify(tests[0][1])+")`应返回`"+JSON.stringify(results[0])+"` 。

```js
assert.deepEqual(
  gaussianElimination(
    [
      [1, 1],
      [1, -1]
    ],
    [5, 1]
  ),
  [3, 2]
);
```

`gaussianElimination("+JSON.stringify(tests[1][0])+","+JSON.stringify(tests[1][1])+")`应返回`"+JSON.stringify(results[1])+"` 。

```js
assert.deepEqual(
  gaussianElimination(
    [
      [2, 3],
      [2, 1]
    ],
    [8, 4]
  ),
  [1, 2]
);
```

`gaussianElimination("+JSON.stringify(tests[2][0])+","+JSON.stringify(tests[2][1])+")`应返回`"+JSON.stringify(results[2])+"` 。

```js
assert.deepEqual(
  gaussianElimination(
    [
      [1, 3],
      [5, -2]
    ],
    [14, 19]
  ),
  [5, 3]
);
```

`gaussianElimination("+JSON.stringify(tests[3][0])+","+JSON.stringify(tests[3][1])+")`应返回`"+JSON.stringify(results[3])+"` 。

```js
assert.deepEqual(
  gaussianElimination(
    [
      [1, 1],
      [5, -1]
    ],
    [10, 14]
  ),
  [4, 6]
);
```

`gaussianElimination("+JSON.stringify(tests[4][0])+","+JSON.stringify(tests[4][1])+")`应返回`"+JSON.stringify(results[4])+"` 。

```js
assert.deepEqual(
  gaussianElimination(
    [
      [1, 2, 3],
      [4, 5, 6],
      [7, 8, 8]
    ],
    [6, 15, 23]
  ),
  [1, 1, 1]
);
```

# --solutions--

