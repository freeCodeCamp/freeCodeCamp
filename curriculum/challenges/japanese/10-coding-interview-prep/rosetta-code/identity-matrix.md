---
id: 5a23c84252665b21eecc7eb1
title: 単位行列
challengeType: 1
forumTopicId: 302290
dashedName: identity-matrix
---

# --description--

*単位行列* は、サイズ\\( n \\times n \\) の正方行列であり、ここでは、対角線要素はすべて`1`、その他の要素はすべて`0`となります。

<ul>
  <li style='list-style: none;'>\(\displaystyle I_{n}=\begin{bmatrix} 1 &#x26; 0 &#x26; 0 \cr 0 &#x26; 1 &#x26; 0 \cr 0 &#x26; 0 &#x26; 1 \cr \end{bmatrix}\)</li>
</ul>

# --instructions--

数値 `n` をパラメータとして取り、(n \\times n \\) 次の単位行列を返す関数を記述してください。

# --hints--

`idMatrix` は関数とします。

```js
assert(typeof idMatrix == 'function');
```

`idMatrix(1)` は配列を返す必要があります。

```js
assert(Array.isArray(idMatrix(1)));
```

`idMatrix(1)` は`[ [ 1 ] ]`を返す必要があります。

```js
assert.deepEqual(idMatrix(1), results[0]);
```

`idMatrix(2)` は`[ [ 1, 0 ], [ 0, 1 ] ]`を返す必要があります。

```js
assert.deepEqual(idMatrix(2), results[1]);
```

`idMatrix(3)` は`[ [ 1, 0, 0 ], [ 0, 1, 0 ], [ 0, 0, 1 ] ]`を返す必要があります。

```js
assert.deepEqual(idMatrix(3), results[2]);
```

`idMatrix(4)` は`[ [ 1, 0, 0, 0 ], [ 0, 1, 0, 0 ], [ 0, 0, 1, 0 ], [ 0, 0, 0, 1 ] ]`を返す必要があります。

```js
assert.deepEqual(idMatrix(4), results[3]);
```

# --seed--

## --after-user-code--

```js
let results=[[ [ 1 ] ],
[ [ 1, 0 ], [ 0, 1 ] ],
[ [ 1, 0, 0 ], [ 0, 1, 0 ], [ 0, 0, 1 ] ],
[ [ 1, 0, 0, 0 ], [ 0, 1, 0, 0 ], [ 0, 0, 1, 0 ], [ 0, 0, 0, 1 ] ]]
```

## --seed-contents--

```js
function idMatrix(n) {

}
```

# --solutions--

```js
function idMatrix(n) {
    return Array.apply(null, new Array(n)).map(function (x, i, xs) {
        return xs.map(function (_, k) {
            return i === k ? 1 : 0;
        })
    });
}
```
