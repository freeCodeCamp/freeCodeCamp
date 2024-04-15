---
id: 5a23c84252665b21eecc7eb1
title: Identitätsmatrix
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

Schreibe eine Funktion, die eine Zahl `n` als Parameter nimmt und die Identitätsmatrix der Ordnung \\( n \\times n \\) zurückgibt.

# --hints--

`idMatrix` sollte eine Funktion sein.

```js
assert(typeof idMatrix == 'function');
```

`idMatrix(1)` sollte eine Anordnung zurückgeben.

```js
assert(Array.isArray(idMatrix(1)));
```

`idMatrix(1)` sollte `[ [ 1 ] ]` zurückgeben.

```js
assert.deepEqual(idMatrix(1), results[0]);
```

`idMatrix(2)` sollte `[ [ 1, 0 ], [ 0, 1 ] ]` zurückgeben.

```js
assert.deepEqual(idMatrix(2), results[1]);
```

`idMatrix(3)` sollte `[ [ 1, 0, 0 ], [ 0, 1, 0 ], [ 0, 0, 1 ] ]` zurückgeben.

```js
assert.deepEqual(idMatrix(3), results[2]);
```

`idMatrix(4)` sollte `[ [ 1, 0, 0, 0 ], [ 0, 1, 0, 0 ], [ 0, 0, 1, 0 ], [ 0, 0, 0, 1 ] ]` zurückgeben.

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
