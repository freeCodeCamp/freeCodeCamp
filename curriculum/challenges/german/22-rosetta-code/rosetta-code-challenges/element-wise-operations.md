---
id: 599c333915e0ea32d04d4bec
title: Elementbezogene Operationen
challengeType: 1
forumTopicId: 302252
dashedName: element-wise-operations
---

# --description--

Implement basic element-wise matrix-matrix and scalar-matrix operations.

**Durchführen:**

<ul>
  <li>addition</li>
  <li>Subtraktion</li>
  <li>Multiplikation</li>
  <li>Division</li>
  <li>Potenzierung</li>
</ul>

Der erste Parameter ist die auszuführende Operation, z. B. "m_add" für Matrixaddition und "s_add" für Skalaraddition. Der zweite und dritte Parameter sind die Matrizen, an denen die Operationen durchgeführt werden sollen.

# --hints--

`operation` sollte eine Funktion sein.

```js
assert(typeof operation === 'function');
```

`operation("m_add",[[1,2],[3,4]],[[1,2],[3,4]])` sollte `[[2,4],[6,8]]` zurückgeben.

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

`operation("s_add",[[1,2],[3,4]],2)` sollte `[[3,4],[5,6]]` zurückgeben.

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

`operation("m_sub",[[1,2],[3,4]],[[1,2],[3,4]])` sollte `[[0,0],[0,0]]` zurückgeben.

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

`operation("m_mult",[[1,2],[3,4]],[[1,2],[3,4]])` sollte `[[1,4],[9,16]]` zurückgeben.

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

`operation("m_div",[[1,2],[3,4]],[[1,2],[3,4]])` sollte `[[1,1],[1,1]]` zurückgeben.

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

`operation("m_exp",[[1,2],[3,4]],[[1,2],[3,4]])` sollte `[[1,4],[27,256]]` zurückgeben.

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

`operation("m_add",[[1,2,3,4],[5,6,7,8]],[[9,10,11,12],[13,14,15,16]])` sollte `[[10,12,14,16],[18,20,22,24]]` zurückgeben.

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
