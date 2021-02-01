---
id: 599c333915e0ea32d04d4bec
title: 元素操作
challengeType: 5
videoUrl: ''
dashedName: element-wise-operations
---

# --description--

<p>实现基本的元素矩阵 - 矩阵和标量矩阵运算。 </p><p>实行： </p><p> :: *另外</p><p> :: *减法</p><p> :: *乘法</p><p> :: *分裂</p><p> :: *取幂</p><p>第一个参数是要执行的操作，例如：用于矩阵加法的“m_add”和用于标量加法的“s_add”。第二和第三参数将是要在其上执行操作的矩阵。 </p>

# --hints--

`operation`是一种功能。

```js
assert(typeof operation === 'function');
```

`operation("m_add",[[1,2],[3,4]],[[1,2],[3,4]])`应返回`[[2,4],[6,8]]` 。

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

`operation("s_add",[[1,2],[3,4]],[[1,2],[3,4]])`应返回`[[3,4],[5,6]]` 。

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

`operation("m_sub",[[1,2],[3,4]],[[1,2],[3,4]])`应返回`[[0,0],[0,0]]` 。

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

`operation("m_mult",[[1,2],[3,4]],[[1,2],[3,4]])`应该返回`[[1,4],[9,16]]` 。

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

`operation("m_div",[[1,2],[3,4]],[[1,2],[3,4]])`应返回`[[1,1],[1,1]]` 。

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

`operation("m_exp",[[1,2],[3,4]],[[1,2],[3,4]])`应返回`[[1,4],[27,256]]` 。

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

`operation("m_add",[[1,2,3,4],[5,6,7,8]],[[9,10,11,12],[13,14,15,16]])`应该返回`[[10,12,14,16],[18,20,22,24]]` 。

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
