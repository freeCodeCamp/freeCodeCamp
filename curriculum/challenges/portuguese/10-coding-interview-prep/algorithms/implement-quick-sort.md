---
id: 587d825a367417b2b2512c89
title: Implementar o Quick Sort
challengeType: 1
forumTopicId: 301615
dashedName: implement-quick-sort
---

# --description--

Passaremos agora para um algoritmo de ordenação intermediário: o Quick Sort. O Quick Sort é uma abordagem eficiente e recursiva do tipo dividir e conquistar para ordenar um array. Neste método, é escolhido um valor pivô no array original. O array é então dividido em dois subarrays de valores menores e maiores do que o valor pivô. Em seguida, combinamos o resultado de chamar recursivamente o algoritmo de Quick Sort em ambos os subarrays. Isto continua até que o caso base de um array vazios ou com apenas um item seja alcançado, que é quando retornamos. O desenrolar das chamadas recursivas nos retorna o array ordenado.

O Quick Sort é um método de ordenação muito eficiente, fornecendo uma performance de *O(nlog(n))*, em média. Ele também é relativamente fácil de implementar. Estes atributos fazem dele um método de ordenação popular e útil.

**Instruções:** escreva uma função `quickSort` que receba um array de inteiros como entrada e retorne um array de inteiros ordenado do menor para o maior. Embora a escolha do valor pivô seja importante, qualquer pivô servirá para os nossos propósitos aqui. Para simplificar, podemos usar o primeiro ou o último elemento.

# --hints--

`quickSort` deve ser uma função.

```js
assert(typeof quickSort == 'function');
```

`quickSort` deve retornar um array ordenado (do menor para o maior elemento).

```js
assert(
  isSorted(
    quickSort([
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

`quickSort([1,4,2,8,345,123,43,32,5643,63,123,43,2,55,1,234,92])` deve retornar um array inalterado, exceto por sua ordenação.

```js
assert.sameMembers(
  quickSort([
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

`quickSort` não deve usar o método `.sort()` integrado.

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
  quickSort([0, 1]);
  return !sortUsed;
}
```

## --seed-contents--

```js
function quickSort(array) {
  // Only change code below this line
  return array;
  // Only change code above this line
}
```

# --solutions--

```js
function quickSort(array) {
  if (array.length === 0) {
    return [];
  } else {
    const pivotValue = array[0];

    // Sort elements into three piles
    let lesser = [];
    let equal = [];
    let greater = [];
    for (let e of array) {
      if (e < pivotValue) {
        lesser.push(e);
      } else if (e > pivotValue) {
        greater.push(e);
      } else {
        equal.push(e);
      }
    }

    return [...quickSort(lesser), ...equal, ...quickSort(greater)];
  }
}
```
