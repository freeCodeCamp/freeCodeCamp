---
id: 5987fd532b954e0f21b5d3f6
title: 平衡インデックス
challengeType: 1
forumTopicId: 302255
dashedName: equilibrium-index
---

# --description--

数列の平衡インデックスは、下位インデックスの要素の合計が上位インデックスの要素の合計と等しくなるような数列へのインデックスです。

下記は数列 $A$ の例です。

<ul style='list-style: none;'>
  <li><big>$A_0 = -7$</big></li>
  <li><big>$A_1 =  1$</big></li>
  <li><big>$A_2 =  5$</big></li>
  <li><big>$A_3 =  2$</big></li>
  <li><big>$A_4 = -4$</big></li>
  <li><big>$A_5 =  3$</big></li>
  <li><big>$A_6 =  0$</big></li>
</ul>

`3` は以下の理由で平衡インデックスです。

<ul style='list-style: none;'>
  <li><big>$A_0 + A_1 + A_2 = A_4 + A_5 + A_6$</big></li>
</ul>

`6` も以下の理由で平衡インデックスです。

<ul style='list-style: none;'>
  <li><big>$A_0 + A_1 + A_2 + A_3 + A_4 + A_5 = 0$</big></li>
</ul>

(要素ゼロの合計はゼロです。)

`7` は、数列 $A$ の有効なインデックスではないため、平衡インデックスではありません。

# --instructions--

与えられた数列で、平衡インデックスがあれば返す関数を作成します。

非常に長い数式の可能性もあります。

# --hints--

`equilibrium` という関数です。

```js
assert(typeof equilibrium === 'function');
```

`equilibrium([-7, 1, 5, 2, -4, 3, 0])` は `[3,6]` を返します。

```js
assert.deepEqual(equilibrium(equilibriumTests[0]), ans[0]);
```

`equilibrium([2, 4, 6])` は `[]` を返します。

```js
assert.deepEqual(equilibrium(equilibriumTests[1]), ans[1]);
```

`equilibrium([2, 9, 2])` は `[1]` を返します。

```js
assert.deepEqual(equilibrium(equilibriumTests[2]), ans[2]);
```

`equilibrium([1, -1, 1, -1, 1, -1, 1])` は `[0,1,2,3,4,5,6]` を返します。

```js
assert.deepEqual(equilibrium(equilibriumTests[3]), ans[3]);
```

`equilibrium([1])` は `[0]` を返します。

```js
assert.deepEqual(equilibrium(equilibriumTests[4]), ans[4]);
```

`equilibrium([])` は `[]` を返します。

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
