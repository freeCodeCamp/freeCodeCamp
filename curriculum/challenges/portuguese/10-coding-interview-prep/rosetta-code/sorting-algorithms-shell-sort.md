---
id: 5a23c84252665b21eecc8010
title: Ordenar algoritmos/ordenação de concha
challengeType: 1
forumTopicId: 302317
dashedName: sorting-algorithmsshell-sort
---

# --description--

Escreva uma função para classificar um array de elementos usando o algoritmo de Shell Sort, uma ordenação com incremento decrescente. A função deve retornar o array ordenado.

A ordenação de concha (também conhecida como método de Shell ou shellsort) recebeu o nome em homenagem ao seu inventor, Donald Shell, que publicou o algoritmo em 1959.

A ordenação de concha é uma sequência de ordenações de inserção intercaladas baseadas em sequência de incremento. O tamanho do incremento é reduzido após cada passagem até que seu tamanho seja 1.

Com um tamanho de incremento de 1, a ordenação é de inserção básica, mas, desta vez, com a garantia de que os dados estarão quase classificados, o que é o "melhor caso" da ordenação de inserção.

Qualquer sequência ordenará os dados desde que termine em 1, mas algumas funcionam melhor do que outras.

Estudos empíricos mostraram que uma sequência de incrementos geométricos com uma relação de cerca de 2,2 funcionam bem na prática.

# --hints--

`shellSort` deve ser uma função.

```js
assert(typeof shellSort == 'function');
```

`shellSort([25, 32, 12, 7, 20])` deve retornar um array.

```js
assert(Array.isArray(shellSort([25, 32, 12, 7, 20])));
```

`shellSort([25, 32, 12, 7, 20])` deve retornar `[7, 12, 20, 25, 32]`.

```js
assert.deepEqual(shellSort([25, 32, 12, 7, 20]), [7, 12, 20, 25, 32]);
```

`shellSort([38, 45, 35, 8, 13])` deve retornar `[8, 13, 35, 38, 45]`.

```js
assert.deepEqual(shellSort([38, 45, 35, 8, 13]), [8, 13, 35, 38, 45]);
```

`shellSort([43, 36, 20, 34, 24])` deve retornar `[20, 24, 34, 36, 43]`.

```js
assert.deepEqual(shellSort([43, 36, 20, 34, 24]), [20, 24, 34, 36, 43]);
```

`shellSort([12, 33, 26, 18, 1, 16, 38])` deve retornar `[1, 12, 16, 18, 26, 33, 38]`.

```js
assert.deepEqual(shellSort([12, 33, 26, 18, 1, 16, 38]), [
  1,
  12,
  16,
  18,
  26,
  33,
  38
]);
```

`shellSort([3, 39, 48, 16, 1, 4, 29])` deve retornar `[1, 3, 4, 16, 29, 39, 48]`.

```js
assert.deepEqual(shellSort([3, 39, 48, 16, 1, 4, 29]), [
  1,
  3,
  4,
  16,
  29,
  39,
  48
]);
```

# --seed--

## --seed-contents--

```js
function shellSort(a) {

}
```

# --solutions--

```js
function shellSort(a) {
  for (var h = a.length; h > 0; h = parseInt(h / 2)) {
    for (var i = h; i < a.length; i++) {
      var k = a[i];
      for (var j = i; j >= h && k < a[j - h]; j -= h) a[j] = a[j - h];
      a[j] = k;
    }
  }
  return a;
}
```
