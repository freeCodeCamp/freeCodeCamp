---
id: 587d8259367417b2b2512c86
title: Implementar o Insertion Sort
challengeType: 1
forumTopicId: 301613
dashedName: implement-insertion-sort
---

# --description--

O próximo método de ordenação que analisaremos é o Insertion Sort. Este método funciona criando um array classificado no início da lista. Ele inicia o array ordenado com o primeiro elemento. Depois, ele inspeciona o próximo elemento e o lança para trás no array ordenado até ficar em posição ordenada. Ele continua iterando pela lista e trocando novos itens para trás na porção ordenada até chegar ao final. Este algoritmo apresenta complexidade de tempo quadrática em média e nos piores casos.

**Instruções:** escreva uma função `insertionSort` que receba um array de inteiros como entrada e retorne um array de inteiros ordenado do menor para o maior.

# --hints--

`insertionSort` deve ser uma função.

```js
assert(typeof insertionSort == 'function');
```

`insertionSort` deve retornar um array ordenado (do menor para o maior elemento).

```js
assert(
  isSorted(
    insertionSort([
      1,
      4,
      2,
      8,
      345,
      123,
      43,
      32,
      5643,
      63,
      123,
      43,
      2,
      55,
      1,
      234,
      92
    ])
  )
);
```

`insertionSort([1,4,2,8,345,123,43,32,5643,63,123,43,2,55,1,234,92])` deve retornar um array inalterado, exceto por sua ordenação.

```js
assert.sameMembers(
  insertionSort([
    1,
    4,
    2,
    8,
    345,
    123,
    43,
    32,
    5643,
    63,
    123,
    43,
    2,
    55,
    1,
    234,
    92
  ]),
  [1, 4, 2, 8, 345, 123, 43, 32, 5643, 63, 123, 43, 2, 55, 1, 234, 92]
);
```

`insertionSort([5, 4, 33, 2, 8])` deve retornar `[2, 4, 5, 8, 33]`.

```js
assert.deepEqual(insertionSort([5, 4, 33, 2, 8]), [2, 4, 5, 8, 33])
```

`insertionSort` não deve usar o método `.sort()` integrado.

```js
assert(isBuiltInSortUsed());
```

# --seed--

## --after-user-code--

```js
function isSorted(a){
  for(let i = 0; i < a.length - 1; i++)
    if(a[i] > a[i + 1])
      return false;
  return true;
}

function isBuiltInSortUsed(){
  let sortUsed = false;
  Array.prototype.sort = () => sortUsed = true;
  insertionSort([0, 1]);
  return !sortUsed;
}
```

## --seed-contents--

```js
function insertionSort(array) {
  // Only change code below this line
  return array;
  // Only change code above this line
}
```

# --solutions--

```js
function insertionSort (array) {
  for (let currentIndex = 0; currentIndex < array.length; currentIndex++) {
    let current = array[currentIndex];
    let j = currentIndex - 1;
    while (j > -1 && array[j] > current) {
      array[j + 1] = array[j];
      j--;
    }
    array[j + 1] = current;
  }
  return array;
}
```
