---
id: 5a23c84252665b21eecc7eb1
title: Одинична матриця
challengeType: 1
forumTopicId: 302290
dashedName: identity-matrix
---

# --description--

*Одинична матриця* – це квадратна матриця розміру \\( n \\times n \\), де всі діагональні елементи – `1`і (одиниці), а всі інші елементи – `0`і (нулі).

<ul>
  <li style='list-style: none;'>\(\displaystyle I_{n}=\begin{bmatrix} 1 &#x26; 0 &#x26; 0 \cr 0 &#x26; 1 &#x26; 0 \cr 0 &#x26; 0 &#x26; 1 \cr \end{bmatrix}\)</li>
</ul>

# --instructions--

Напишіть функцію, яка приймає число `n` як параметр і повертає одиничну матрицю порядку \\( n \\times n \\).

# --hints--

`idMatrix` має бути функцією.

```js
assert(typeof idMatrix == 'function');
```

`idMatrix(1)` має повернути масив.

```js
assert(Array.isArray(idMatrix(1)));
```

`idMatrix(1)` має повернути `[ [ 1 ] ]`.

```js
assert.deepEqual(idMatrix(1), results[0]);
```

`idMatrix(2)` має повернути `[ [ 1, 0 ], [ 0, 1 ] ]`.

```js
assert.deepEqual(idMatrix(2), results[1]);
```

`idMatrix(3)` має повернути `[ [ 1, 0, 0 ], [ 0, 1, 0 ], [ 0, 0, 1 ] ]`.

```js
assert.deepEqual(idMatrix(3), results[2]);
```

`idMatrix(4)` має повернути `[ [ 1, 0, 0, 0 ], [ 0, 1, 0, 0 ], [ 0, 0, 1, 0 ], [ 0, 0, 0, 1 ] ]`.

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
