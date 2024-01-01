---
id: 5a23c84252665b21eecc7eb1
title: Identity matrix
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

Write a function that takes a number `n` as a parameter and returns the identity matrix of order \\( n \\times n \\).

# --hints--

`idMatrix` should be a function.

```js
assert(typeof idMatrix == 'function');
```

`idMatrix(1)` should return an array.

```js
assert(Array.isArray(idMatrix(1)));
```

`idMatrix(1)` should return `[ [ 1 ] ]`.

```js
assert.deepEqual(idMatrix(1), results[0]);
```

`idMatrix(2)` should return `[ [ 1, 0 ], [ 0, 1 ] ]`.

```js
assert.deepEqual(idMatrix(2), results[1]);
```

`idMatrix(3)` should return `[ [ 1, 0, 0 ], [ 0, 1, 0 ], [ 0, 0, 1 ] ]`.

```js
assert.deepEqual(idMatrix(3), results[2]);
```

`idMatrix(4)` should return `[ [ 1, 0, 0, 0 ], [ 0, 1, 0, 0 ], [ 0, 0, 1, 0 ], [ 0, 0, 0, 1 ] ]`.

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
