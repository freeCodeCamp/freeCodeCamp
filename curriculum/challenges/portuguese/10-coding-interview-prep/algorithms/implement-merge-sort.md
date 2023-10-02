---
id: 587d825c367417b2b2512c8f
title: Implementar o Merge Sort
challengeType: 1
forumTopicId: 301614
dashedName: implement-merge-sort
---

# --description--

Outro algoritmo de ordenação intermediária comum é o Merge Sort. Assim como ocorre com o Quick Sort, o Merge Sort também usa uma metodologia de dividir e conquistar e recursiva para ordenar um array. Ele leva vantagem pelo fato de ser relativamente fácil ordenar dois arrays desde que cada um esteja ordenado, para começar. Começaremos com apenas um array como entrada. Então, como podemos obter dois arrays ordenados a partir disso? Bem, podemos dividir recursivamente a entrada original em duas até chegarmos ao caso de base de um array com um único item. Um array de item único está naturalmente ordenado. Então, podemos começar a combinar. Esta combinação revelará as chamadas recursivas que dividem o array original, no fim produzindo um array de todos os elementos. As etapas do Merge Sort são, portanto:

**1)** Dividir recursivamente o array de entrada ao meio até ser produzido um subarray com apenas um elemento.

**2)** Combinar e unir cada subarray ordenado para produzir o array com a ordenação final.

O Merge Sort é um método eficiente de ordenação, com complexidade de tempo de *O(nlog(n))*. Este algoritmo é popular porque tem boa performance e é relativamente fácil de implementar.

Este será o último algoritmo de ordenação do qual trataremos aqui. No entanto, mais tarde, na seção sobre estruturas de dados em árvore, descreveremos o Heap Sort, outro método de classificação eficiente que requer uma pilha binária (binary heap) em sua implementação.

**Instruções:** escreva uma função `mergeSort` que receba um array de inteiros como entrada e retorne um array de inteiros ordenado do menor para o maior. Uma boa maneira de implementá-la é escrever uma função, por exemplo `merge`, que seja responsável por mesclar dois arrays ordenados, e outra função, por exemplo, `mergeSort`, que seja responsável pela recursão que produz arrays de um único item para alimentar a função merge. Boa sorte!

# --hints--

`mergeSort` deve ser uma função.

```js
assert(typeof mergeSort == 'function');
```

`mergeSort` deve retornar um array ordenado (do menor para o maior elemento).

```js
assert(
  isSorted(
    mergeSort([
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

`mergeSort([1,4,2,8,345,123,43,32,5643,63,123,43,2,55,1,234,92])` deve retornar um array inalterado, exceto por sua ordenação.

```js
assert.sameMembers(
  mergeSort([
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

`mergeSort` não deve usar o método `.sort()` integrado.

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
  mergeSort([0, 1]);
  return !sortUsed;
}
```

## --seed-contents--

```js
function mergeSort(array) {
  // Only change code below this line
  return array;
  // Only change code above this line
}
```

# --solutions--

```js
function mergeSort(array) {
  if (array.length === 1) {
    return array;
  } else {
    const splitIndex = Math.floor(array.length / 2);
    return merge(
      mergeSort(array.slice(0, splitIndex)),
      mergeSort(array.slice(splitIndex))
    );
  }

  // Merge two sorted arrays
  function merge(array1, array2) {
    let merged = [];
    while (array1.length && array2.length) {
      if (array1[0] < array2[0]) {
        merged.push(array1.shift());
      } else if (array1[0] > array2[0]) {
        merged.push(array2.shift());
      } else {
        merged.push(array1.shift(), array2.shift());
      }
    }

    // After looping ends, one array is empty, and other array contains only
    // values greater than all values in `merged`
    return [...merged, ...array1, ...array2];
  }
}

mergeSort([1, 4, 2, 8, 345, 123, 43, 32, 5643, 63, 123, 43, 2, 55, 1, 234, 92]);
```
