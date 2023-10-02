---
id: 8d5123c8c441eddfaeb5bdef
title: Implementar o Bubble Sort
challengeType: 1
forumTopicId: 301612
dashedName: implement-bubble-sort
---

# --description--

Este é o primeiro de vários desafios sobre algoritmos de ordenação. Dado um array de itens não ordenados, queremos poder retornar um array ordenado. Veremos vários métodos diferentes para fazer isso e aprenderemos algumas escolhas que precisam ser feitas na hora de usar estas abordagens diferentes. Embora as linguagens mais modernas tenham métodos de ordenação incorporados para operações como esta, continua importante entender algumas das abordagens básicas comuns e aprender como podem ser implementadas.

Aqui, veremos o Bubble Sort. O método do Bubble Sort começa no início de um array não classificado e lança valores não classificados para o fim, iterando através do array até que esteja completamente ordenado. Ele faz isso comparando os itens adjacentes e trocando-os de lugar se eles estiverem fora de ordem. O método continua se repetindo por todo o array até que não ocorram mais trocas, momento em que o array estará ordenado.

Este método requer múltiplas iterações através do array e, em média e nos piores casos, tem complexidade de tempo quadrática. Embora seja simples, ele não é muito prático na maioria das situações.

**Instruções:** escreva uma função `bubbleSort` que receba um array de inteiros como entrada e retorne um array de inteiros ordenado do menor para o maior.

# --hints--

`bubbleSort` deve ser uma função.

```js
assert(typeof bubbleSort == 'function');
```

`bubbleSort` deve retornar um array ordenado (do menor para o maior elemento).

```js
assert(
  isSorted(
    bubbleSort([
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

`bubbleSort([1,4,2,8,345,123,43,32,5643,63,123,43,2,55,1,234,92])` deve retornar um array inalterado, exceto por sua ordenação.

```js
assert.sameMembers(
  bubbleSort([
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

`bubbleSort` não deve usar o método `.sort()` integrado.

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
  bubbleSort([0, 1]);
  return !sortUsed;
}
```

## --seed-contents--

```js
function bubbleSort(array) {
  // Only change code below this line
  return array;
  // Only change code above this line
}
```

# --solutions--

```js
function bubbleSort(array) {
  for (let i = 0; i < array.length; i++) {
    let swapped = false;
    for (let j = 1; j < array.length; j++) {
      if (array[j - 1] > array[j]) {
        let temp = array[j-1];
        array[j-1] =  array[j];
        array[j] = temp;
        swapped = true;
      }
    }
    if (swapped === false) {
      break;
    }
  }
  return array;
}
```
