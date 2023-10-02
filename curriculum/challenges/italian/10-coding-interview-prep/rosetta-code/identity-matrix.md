---
id: 5a23c84252665b21eecc7eb1
title: Matrice identità
challengeType: 1
forumTopicId: 302290
dashedName: identity-matrix
---

# --description--

Una *matrice identità* è una matrice quadrata di dimensione \\( n \\times n \\), dove gli elementi sulla diagionale sono tutti `1` (uno), e tutti gli altri elementi sono `0` (zero).

<ul>
  <li style='list-style: none;'>\(\displaystyle I_{n}=\begin{bmatrix} 1 &#x26; 0 &#x26; 0 \cr 0 &#x26; 1 &#x26; 0 \cr 0 &#x26; 0 &#x26; 1 \cr \end{bmatrix}\)</li>
</ul>

# --instructions--

Scrivi una funzione che prende un numero `n` come paramentro e restituisce la matrice identità di ordine \\( n \\times n \\).

# --hints--

`idMatrix` dovrebbe essere una funzione.

```js
assert(typeof idMatrix == 'function');
```

`idMatrix(1)` dovrebbe restituire un array.

```js
assert(Array.isArray(idMatrix(1)));
```

`idMatrix(1)` dovrebbe restituire `[ [ 1 ] ]`.

```js
assert.deepEqual(idMatrix(1), results[0]);
```

`idMatrix(2)` dovrebbe restituire `[ [ 1, 0 ], [ 0, 1 ] ]`.

```js
assert.deepEqual(idMatrix(2), results[1]);
```

`idMatrix(3)` dovrebbe restituire `[ [ 1, 0, 0 ], [ 0, 1, 0 ], [ 0, 0, 1 ] ]`.

```js
assert.deepEqual(idMatrix(3), results[2]);
```

`idMatrix(4)` dovrebbe restituire `[ [ 1, 0, 0, 0 ], [ 0, 1, 0, 0 ], [ 0, 0, 1, 0 ], [ 0, 0, 0, 1 ] ]`.

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
