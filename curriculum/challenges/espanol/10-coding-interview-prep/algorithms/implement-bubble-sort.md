---
id: 8d5123c8c441eddfaeb5bdef
title: Implementar ordenación de burbuja
challengeType: 1
forumTopicId: 301612
dashedName: implement-bubble-sort
---

# --description--

Este es el primero de varios retos en algoritmos de ordenación. Dado un arreglo de elementos desordenados, queremos ser capaces de devolver un arreglo ordenado. Veremos diferentes métodos para hacerlo y aprenderemos algunos pros y contras entre estos diferentes enfoques. Mientras que la mayoría de los lenguajes modernos tienen métodos de ordenamiento incorporados para este tipo de operaciones, sigue siendo importante entender algunos de los enfoques básicos y aprender cómo pueden implementarse.

Aquí veremos el algoritmo de burbuja. El método de ordenación de burbuja comienza al inicio de un arreglo desordenado y 'burbujea hacia arriba' los valores no ordenados, iterando a través del arreglo hasta que esté completamente ordenado. Esto se hace comparando elementos adyacentes e intercambiándolos si no están en orden. El método continúa iterando sobre el arreglo hasta que no hay mas intercambios, lo que significa que el arreglo esta ordenado.

Este método requiere múltiples iteraciones a través del arreglo y para el promedio y el peor de los casos tiene complejidad de tiempo cuadrática. Si bien es simple, suele ser poco práctico en la mayoría de las situaciones.

**Instrucciones:** Escribe una función `bubbleSort` que tomará un arreglo de números enteros y retornará un arreglo con estos números, ordenados de menor a mayor.

# --hints--

`bubbleSort` Debería ser una función.

```js
assert(typeof bubbleSort == 'function');
```

`bubbleSort` Debería retornar un arreglo ordenado (de menor a mayor).

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

`bubbleSort([1,4,2,8,345,123,43,32,5643,63,123,43,2,55,1,234,92])` Debería retornar el mismo arreglo cambiando solo el orden de los números.

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

`bubbleSort` No debería usar el método incorporado `.sort()`.

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
