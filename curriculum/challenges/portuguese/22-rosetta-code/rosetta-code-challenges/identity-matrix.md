---
id: 5a23c84252665b21eecc7eb1
title: Matriz identidade
challengeType: 1
forumTopicId: 302290
dashedName: identity-matrix
---

# --description--

Uma *matriz identidade* é uma matriz quadrada de tamanho \\( n \\times n \\), onde os elementos diagonais são todos `1` (um) e todos os outros elementos são `0`(zero).

<ul>
  <li style='list-style: none;'>\(\displaystyle I_{n}=\begin{bmatrix} 1 &#x26; 0 &#x26; 0 \cr 0 &#x26; 1 &#x26; 0 \cr 0 &#x26; 0 &#x26; 1 \cr \end{bmatrix}\)</li>
</ul>

# --instructions--

Escreva uma função que recebe um número `n` como um parâmetro e retorna a matriz identidade de ordem \\( n \\times n \\).

# --hints--

`idMatrix` deve ser uma função.

```js
assert(typeof idMatrix == 'function');
```

`idMatrix(1)` deve retornar um array.

```js
assert(Array.isArray(idMatrix(1)));
```

`idMatrix(1)` deve retornar `[ [ 1 ] ]`.

```js
assert.deepEqual(idMatrix(1), results[0]);
```

`idMatrix(2)` deve retornar `[ [ 1, 0 ], [ 0, 1 ] ]`.

```js
assert.deepEqual(idMatrix(2), results[1]);
```

`idMatrix(3)` deve retornar `[ [ 1, 0, 0 ], [ 0, 1, 0 ], [ 0, 0, 1 ] ]`.

```js
assert.deepEqual(idMatrix(3), results[2]);
```

`idMatrix(4)` deve retornar `[ [ 1, 0, 0, 0 ], [ 0, 1, 0, 0 ], [ 0, 0, 1, 0 ], [ 0, 0, 0, 1 ] ]`.

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
