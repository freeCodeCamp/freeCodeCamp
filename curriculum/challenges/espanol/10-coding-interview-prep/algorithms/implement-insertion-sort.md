---
id: 587d8259367417b2b2512c86
title: Implementar Orden de Inserción
challengeType: 1
forumTopicId: 301613
dashedName: implement-insertion-sort
---

# --description--

El siguiente método de clasificación que veremos es el orden de las inserciones. Este método funciona construyendo un arreglo ordenado al principio de la lista. Comienza el arreglo ordenado con el primer elemento. Luego inspecciona el siguiente elemento, lo intercambia de atrás hacia adelante dentro de el arreglo clasificado hasta que esté en posición ordenada. Continúa iterando a través de la lista y cambiando nuevos elementos hacia atrás en la porción ordenada hasta llegar al final. Este algoritmo tiene una complejidad temporal cuadrática en el caso medio y en el peor.

**Instrucciones:** Escribe una función `insertionSort` que toma un "array" de enteros como entrada y devuelve un array de estos enteros ordenados de menor a mayor.

# --hints--

`insertionSort` debería ser una función.

```js
assert(typeof insertionSort == 'function');
```

`insertionSort` debería devolver un arreglo ordenado (de menor al más grande).

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

`insertionSort([1,4,2,8,345,123,43,32,5643,63,123,43,2,55,1,234,92])` debe devolver un arreglo sin cambios excepto por el orden.

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

`insertionSort([5, 4, 33, 2, 8])` debe devolver `[2, 4, 5, 8, 33]`.

```js
assert.deepEqual(insertionSort([5, 4, 33, 2, 8]), [2, 4, 5, 8, 33])
```

`insertionSort` no debe utilizar el método "buil-in" `.sort()`.

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
