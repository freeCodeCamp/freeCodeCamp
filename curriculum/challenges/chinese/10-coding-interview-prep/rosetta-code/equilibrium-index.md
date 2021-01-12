---
id: 5987fd532b954e0f21b5d3f6
title: 均衡指数
challengeType: 5
videoUrl: ''
dashedName: equilibrium-index
---

# --description--

<p>序列的平衡指数是序列的索引，使得较低指数处的元素之和等于较高指数处的元素之和。 </p><p>例如，在序列<big>$ A $中</big> ： </p><p> :::: <big>$ A_0 = -7 $</big> </p><p> :::: <big>$ A_1 = 1 $</big> </p><p> :::: <big>$ A_2 = 5 $</big> </p><p> :::: <big>$ A_3 = 2 $</big> </p><p> :::: <big>$ A_4 = -4 $</big> </p><p> :::: <big>$ A_5 = 3 $</big> </p><p> :::: <big>$ A_6 = 0 $</big> </p><p> 3是均衡指数，因为： </p><p> :::: <big>$ A_0 + A_1 + A_2 = A_4 + A_5 + A_6 $</big> </p><p> 6也是均衡指数，因为： </p><p> :::: <big>$ A_0 + A_1 + A_2 + A_3 + A_4 + A_5 = 0 $</big> </p><p> （零元素之和为零） </p><p> 7不是均衡指数，因为它不是序列<big>$ A $</big>的有效索引。 </p><p>编写一个函数，给定一个序列，返回其平衡指数（如果有的话）。 </p><p>假设序列可能很长。 </p>

# --hints--

`equilibrium`是一种功能。

```js
assert(typeof equilibrium === 'function');
```

`equilibrium([-7, 1, 5, 2, -4, 3, 0])` `[3,6]` `equilibrium([-7, 1, 5, 2, -4, 3, 0])`应该返回`[3,6]` 。

```js
assert.deepEqual(equilibrium(equilibriumTests[0]), ans[0]);
```

`equilibrium([2, 4, 6])`应该返回`[]` 。

```js
assert.deepEqual(equilibrium(equilibriumTests[1]), ans[1]);
```

`equilibrium([2, 9, 2])`应该返回`[1]` 。

```js
assert.deepEqual(equilibrium(equilibriumTests[2]), ans[2]);
```

`equilibrium([1, -1, 1, -1, 1, -1, 1])`应该返回`[0,1,2,3,4,5,6]` 。

```js
assert.deepEqual(equilibrium(equilibriumTests[3]), ans[3]);
```

`equilibrium([1])`应该返回`[0]` 。

```js
assert.deepEqual(equilibrium(equilibriumTests[4]), ans[4]);
```

`equilibrium([])`应该返回`[]` 。

```js
assert.deepEqual(equilibrium(equilibriumTests[5]), ans[5]);
```

# --seed--

## --after-user-code--

```js
const equilibriumTests =
  [[-7, 1, 5, 2, -4, 3, 0], // 3, 6
  [2, 4, 6], // empty
  [2, 9, 2], // 1
  [1, -1, 1, -1, 1, -1, 1], // 0,1,2,3,4,5,6
  [1], // 0
  [] // empty
  ];
const ans = [[3, 6], [], [1], [0, 1, 2, 3, 4, 5, 6], [0], []];
```

## --seed-contents--

```js
function equilibrium(a) {

}
```

# --solutions--

```js
function equilibrium(a) {
  let N = a.length,
    i,
    l = [],
    r = [],
    e = [];
  for (l[0] = a[0], r[N - 1] = a[N - 1], i = 1; i < N; i++)
    { l[i] = l[i - 1] + a[i], r[N - i - 1] = r[N - i] + a[N - i - 1]; }
  for (i = 0; i < N; i++)
    { if (l[i] === r[i]) e.push(i); }
  return e;
}
```
