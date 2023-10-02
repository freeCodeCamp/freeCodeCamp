---
id: 587d825a367417b2b2512c89
title: Implementar Ordenación Rápido
challengeType: 1
forumTopicId: 301615
dashedName: implement-quick-sort
---

# --description--

Aquí pasaremos a un algoritmo de ordenación intermedio: la ordenación rápida. La ordenación rápida es un método eficiente y recursivo de dividir y conquistar para ordenar un arreglo. En este método, es elegido un valor pivote en el arreglo original. A continuación, el arreglo se divide en dos submatrices de valores menores y mayores que el valor pivote. A continuación, combinamos el resultado de llamar recursivamente al algoritmo de ordenación rápida en ambos subarreglos. Esto continúa hasta llegar al caso base de un arreglo vacío o de un solo elemento, que devolvemos. El desenvolvimiento de las llamadas recursivas nos devuelve el arreglo ordenado.

La ordenación rápida es un método de ordenación muy eficiente, que proporciona un rendimiento *O(nlog(n))* de media. También es relativamente fácil de implementar. Estos atributos lo convierten en un método de ordenación popular y útil.

**Instrucciones:** Escribe una función `quickSort` que tomará un arreglo de enteros y retornará un arreglo con estos números, ordenados de menor a mayor. Si bien la elección del valor del pivote es importante, cualquier pivote lo será para nuestros propósitos. Por simplicidad, el primero o el último elemento podría ser utilizado.

# --hints--

`quickSort` debería ser una función.

```js
assert(typeof quickSort == 'function');
```

`quickSort` deberia que retornar un arreglo ordenado (menor a mayor).

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

`quickSort([1,4,2,8,345,123,43,32,5643,63,123,43,2,55,1,234,92])` debe retornar un arreglo sin cambios excepto por el orden.

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

`quickSort` no debe que utilizar el método incorporado `.sort()`.

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
