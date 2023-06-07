---
id: 599c333915e0ea32d04d4bec
title: 要素ごとの演算
challengeType: 1
forumTopicId: 302252
dashedName: element-wise-operations
---

# --description--

基本的な要素ごとの matrix-matrix と scalar-matrix 演算を実装します。

**実装:**

<ul>
  <li>加法</li>
  <li>減法</li>
  <li>乗法</li>
  <li>除法</li>
  <li>累乗法</li>
</ul>

最初のパラメータは、実行される演算を表します。例えば、行列の加法では"m_add"、スカラーの加法では"s_add"です。 2番目と3番目のパラメータは、演算の対象となる行列を表します。

# --hints--

`operation` という関数です。

```js
assert(typeof operation === 'function');
```

`operation("m_add",[[1,2],[3,4]],[[1,2],[3,4]])` は `[[2,4],[6,8]]` を返します。

```js
assert.deepEqual(
  operation(
    'm_add',
    [
      [1, 2],
      [3, 4]
    ],
    [
      [1, 2],
      [3, 4]
    ]
  ),
  [
    [2, 4],
    [6, 8]
  ]
);
```

`operation("s_add",[[1,2],[3,4]],2)` は `[[3,4],[5,6]]` を返します。

```js
assert.deepEqual(
  operation(
    's_add',
    [
      [1, 2],
      [3, 4]
    ],
    2
  ),
  [
    [3, 4],
    [5, 6]
  ]
);
```

`operation("m_sub",[[1,2],[3,4]],[[1,2],[3,4]])` は `[[0,0],[0,0]]` を返します。

```js
assert.deepEqual(
  operation(
    'm_sub',
    [
      [1, 2],
      [3, 4]
    ],
    [
      [1, 2],
      [3, 4]
    ]
  ),
  [
    [0, 0],
    [0, 0]
  ]
);
```

`operation("m_mult",[[1,2],[3,4]],[[1,2],[3,4]])` は `[[1,4],[9,16]]` を返します。

```js
assert.deepEqual(
  operation(
    'm_mult',
    [
      [1, 2],
      [3, 4]
    ],
    [
      [1, 2],
      [3, 4]
    ]
  ),
  [
    [1, 4],
    [9, 16]
  ]
);
```

`operation("m_div",[[1,2],[3,4]],[[1,2],[3,4]])` は `[[1,1],[1,1]]` を返します。

```js
assert.deepEqual(
  operation(
    'm_div',
    [
      [1, 2],
      [3, 4]
    ],
    [
      [1, 2],
      [3, 4]
    ]
  ),
  [
    [1, 1],
    [1, 1]
  ]
);
```

`operation("m_exp",[[1,2],[3,4]],[[1,2],[3,4]])` は `[[1,4],[27,256]]` を返します。

```js
assert.deepEqual(
  operation(
    'm_exp',
    [
      [1, 2],
      [3, 4]
    ],
    [
      [1, 2],
      [3, 4]
    ]
  ),
  [
    [1, 4],
    [27, 256]
  ]
);
```

`operation("m_add",[[1,2,3,4],[5,6,7,8]],[[9,10,11,12],[13,14,15,16]])` は `[[10,12,14,16],[18,20,22,24]]` を返します。

```js
assert.deepEqual(
  operation(
    'm_add',
    [
      [1, 2, 3, 4],
      [5, 6, 7, 8]
    ],
    [
      [9, 10, 11, 12],
      [13, 14, 15, 16]
    ]
  ),
  [
    [10, 12, 14, 16],
    [18, 20, 22, 24]
  ]
);
```

# --seed--

## --seed-contents--

```js
function operation(op, arr1, arr2) {

}
```

# --solutions--

```js
function operation(op, arr1, arr2) {
  const ops = {
    add: ((a, b) => a + b),
    sub: ((a, b) => a - b),
    mult: ((a, b) => a * b),
    div: ((a, b) => a / b),
    exp: ((a, b) => Math.pow(a, b))
  };
  const ifm = op.startsWith('m');
  const doOp = ops[op.substring(2)];
  for (let i = 0; i < arr1.length; i++) {
    for (let j = 0; j < arr1[0].length; j++) {
      arr1[i][j] = doOp(arr1[i][j], (ifm) ? (arr2[i][j]) : (arr2));
    }
  }
  return arr1;
}
```
