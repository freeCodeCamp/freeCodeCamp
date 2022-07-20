---
id: 5a23c84252665b21eecc8004
title: Algoritmos de ordenação/ordenação de coquetel
challengeType: 1
forumTopicId: 302312
dashedName: sorting-algorithmscocktail-sort
---

# --description--

A ordenação <a href="https://rosettacode.org/wiki/Sorting_algorithms/Cocktail_sort" target="_blank" rel="noopener noreferrer nofollow">cocktail sort</a> é uma melhoria da ordenação Bubble Sort. Dado um array de números, a ordenação cocktail fará a travessia do array do início ao fim, movendo o maior número para o final. Em seguida, ela fará a travessia do array de trás para a frente, movendo o menor número para o início. Ela repete essas duas travessias, movendo o próximo maior número e o próximo menor número até suas posições corretas no array until até que este esteja ordenado.

# --instructions--

Escreva uma função que ordene um determinado array usando uma ordenação de coquetel.

# --hints--

`cocktailSort` deve ser uma função.

```js
assert(typeof cocktailSort == 'function');
```

`cocktailSort([25, 32, 12, 7, 20])` deve retornar um array.

```js
assert(Array.isArray(cocktailSort([25, 32, 12, 7, 20])));
```

`cocktailSort([25, 32, 12, 7, 20])` deve retornar `[7, 12, 20, 25, 32]`.

```js
assert.deepEqual(cocktailSort([25, 32, 12, 7, 20]), [7, 12, 20, 25, 32]);
```

`cocktailSort([38, 45, 35, 8, 13])` deve retornar `[8, 13, 35, 38, 45]`.

```js
assert.deepEqual(cocktailSort([38, 45, 35, 8, 13]), [8, 13, 35, 38, 45]);
```

`cocktailSort([43, 36, 20, 34, 24])` deve retornar `[20, 24, 34, 36, 43]`.

```js
assert.deepEqual(cocktailSort([43, 36, 20, 34, 24]), [20, 24, 34, 36, 43]);
```

`cocktailSort([12, 33, 26, 18, 1, 16, 38])` deve retornar `[1, 12, 16, 18, 26, 33, 38]`.

```js
assert.deepEqual(cocktailSort([12, 33, 26, 18, 1, 16, 38]), [
  1,
  12,
  16,
  18,
  26,
  33,
  38
]);
```

`cocktailSort([3, 39, 48, 16, 1, 4, 29])` deve retornar `[1, 3, 4, 16, 29, 39, 48]`.

```js
assert.deepEqual(cocktailSort([3, 39, 48, 16, 1, 4, 29]), [
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
function cocktailSort(arr) {

}
```

# --solutions--

```js
function cocktailSort(arr) {
  let isSorted = true;
  while (isSorted) {
    for (let i = 0; i < arr.length - 1; i++) {
      if (arr[i] > arr[i + 1]) {
        let temp = arr[i];
        arr[i] = arr[i + 1];
        arr[i + 1] = temp;
        isSorted = true;
      }
    }

    if (!isSorted) break;

    isSorted = false;

    for (let j = arr.length - 1; j > 0; j--) {
      if (arr[j - 1] > arr[j]) {
        let temp = arr[j];
        arr[j] = arr[j - 1];
        arr[j - 1] = temp;
        isSorted = true;
      }
    }
  }

  return arr;
}
```
