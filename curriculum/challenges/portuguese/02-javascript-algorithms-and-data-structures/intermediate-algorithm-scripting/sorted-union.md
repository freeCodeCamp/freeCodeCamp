---
id: a105e963526e7de52b219be9
title: Unir em ordem
challengeType: 1
forumTopicId: 16077
dashedName: sorted-union
---

# --description--

Escreva uma função que recebe dois ou mais arrays e retorne um novo array de calores únicos na ordem do array original fornecido.

Em outras palavras, todos os valores presentes de todos os arrays devem ser incluídos na sua ordem original, mas sem valores duplicados no array final.

Os números únicos devem ser ordenados pela sua ordem original, mas o array final não deve ser ordenado em ordem numérica.

Verifique os testes de asserção para exemplos.

# --hints--

`uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1])` deve retornar `[1, 3, 2, 5, 4]`.

```js
assert.deepEqual(uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]), [1, 3, 2, 5, 4]);
```

`uniteUnique([1, 2, 3], [5, 2, 1])` deve retornar `[1, 2, 3, 5]`.

```js
assert.deepEqual(uniteUnique([1, 2, 3], [5, 2, 1]), [1, 2, 3, 5]);
```

`uniteUnique([1, 2, 3], [5, 2, 1, 4], [2, 1], [6, 7, 8])` deve retornar `[1, 2, 3, 5, 4, 6, 7, 8]`.

```js
assert.deepEqual(uniteUnique([1, 2, 3], [5, 2, 1, 4], [2, 1], [6, 7, 8]), [
  1,
  2,
  3,
  5,
  4,
  6,
  7,
  8
]);
```

`uniteUnique([1, 3, 2], [5, 4], [5, 6])` deve retornar `[1, 3, 2, 5, 4, 6]`.

```js
assert.deepEqual(uniteUnique([1, 3, 2], [5, 4], [5, 6]), [1, 3, 2, 5, 4, 6]);
```

`uniteUnique([1, 3, 2, 3], [5, 2, 1, 4], [2, 1])` deve retornar `[1, 3, 2, 5, 4]`.

```js
assert.deepEqual(uniteUnique([1, 3, 2, 3], [5, 2, 1, 4], [2, 1]), [1, 3, 2, 5, 4]);
```

# --seed--

## --seed-contents--

```js
function uniteUnique(arr) {
  return arr;
}

uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]);
```

# --solutions--

```js
function uniteUnique(arr) {
  return [].slice.call(arguments).reduce(function(a, b) {
    return [].concat(
      a, 
      b.filter(function(e, currentIndex) {
        return b.indexOf(e) === currentIndex && a.indexOf(e) === -1;
      }));
  }, []);
}
```
