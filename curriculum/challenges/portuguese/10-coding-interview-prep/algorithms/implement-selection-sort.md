---
id: 587d8259367417b2b2512c85
title: Implementar o Selection Sort
challengeType: 1
forumTopicId: 301616
dashedName: implement-selection-sort
---

# --description--

Aqui, implementaremos o Selection Sort. O Selection Sort funciona a partir da seleção do valor mínimo em uma lista e trocando-o de posição com o primeiro valor na lista. Ele, então, começa da segunda posição, seleciona o menor valor da lista restante e troca-o pelo segundo elemento. Ele continua iterando através da lista e trocando elementos até chegar ao final da lista. Agora, a lista estará ordenada. O Selection Sort tem complexidade de tempo quadrática em todos os casos.

**Instruções:** escreva uma função `selectionSort` que receba um array de inteiros como entrada e retorne um array de inteiros ordenado do menor para o maior.

# --hints--

`selectionSort` deve ser uma função.

```js
assert(typeof selectionSort == 'function');
```

`selectionSort` deve retornar um array ordenado (do menor para o maior elemento).

```js
assert(
  isSorted(
    selectionSort([
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

`selectionSort([1,4,2,8,345,123,43,32,5643,63,123,43,2,55,1,234,92])` deve retornar um array inalterado, exceto por sua ordenação.

```js
assert.sameMembers(
  selectionSort([
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

`selectionSort` não deve usar o método `.sort()` integrado.

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
  selectionSort([0, 1]);
  return !sortUsed;
}
```

## --seed-contents--

```js
function selectionSort(array) {
  // Only change code below this line
  return array;
  // Only change code above this line
}
```

# --solutions--

```js
function selectionSort(array) {
  for (let i = 0; i < array.length-1; i++) {
    let minimumIndex = i;
    for (let j = i+1; j < array.length; j++){
      if (array[j] < array[minimumIndex]) {
        minimumIndex = j;
      }
    }
    let value = array[minimumIndex];
    array[minimumIndex] = array[i];
    array[i] = value;
  }
    return array;
}
```
