---
id: 5a23c84252665b21eecc7eb1
title: 單位矩陣
challengeType: 1
forumTopicId: 302290
dashedName: identity-matrix
---

# --description--

An *identity matrix* is a square matrix of size \\( n \\times n \\), where the diagonal elements are all `1`s (ones), and all the other elements are all `0`s (zeroes).

<ul>
  <li style='list-style: none;'>\(\displaystyle I_{n}=\begin{bmatrix} 1 &#x26; 0 &#x26; 0 \cr 0 &#x26; 1 &#x26; 0 \cr 0 &#x26; 0 &#x26; 1 \cr \end{bmatrix}\)</li>
</ul>

# --instructions--

編寫一個函數，以數字 `n` 作爲參數並返回 \\( n \\times n \\) 階單位矩陣。

# --hints--

`idMatrix` 應該是一個函數。

```js
assert(typeof idMatrix == 'function');
```

`idMatrix(1)` 應該返回一個數組。

```js
assert(Array.isArray(idMatrix(1)));
```

`idMatrix(1)` 應該返回 `[ [ 1 ] ]`。

```js
assert.deepEqual(idMatrix(1), results[0]);
```

`idMatrix(2)` 應該返回 `[ [ 1, 0 ], [ 0, 1 ] ]`。

```js
assert.deepEqual(idMatrix(2), results[1]);
```

`idMatrix(3)` 應該返回 `[ [ 1, 0, 0 ], [ 0, 1, 0 ], [ 0, 0, 1 ] ]`。

```js
assert.deepEqual(idMatrix(3), results[2]);
```

`idMatrix(4)` 應該返回 `[ [ 1, 0, 0, 0 ], [ 0, 1, 0, 0 ], [ 0, 0, 1, 0 ], [ 0, 0, 0, 1 ] ]`。

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
