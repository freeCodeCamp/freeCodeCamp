---
id: 587d8259367417b2b2512c85
title: Implementar la Ordenación de la selección
challengeType: 1
forumTopicId: 301616
dashedName: implement-selection-sort
---

# --description--

Aquí implementaremos la ordenación por selección. La ordenación por selección funciona seleccionando el valor mínimo de una lista e intercambiándolo con el primer valor de la misma. Después pasa a la segunda posición, busca y selecciona el valor más pequeño en los elementos restantes de la lista y lo mueve a la segunda posición. Continua realizando iteraciones en la lista y moviendo los elementos hasta que se llega a la última posición de la lista. Ahora la lista está ordenada. La ordenación por selección tiene una complejidad temporal cuadrática en todos los casos.

**Instrucciones:** Escribe una función `selectionSort` que toma un "arreglo" de enteros como entrada y devuelve un arreglo de estos enteros ordenados de menor a mayor.

# --hints--

`selectionSort` debería ser una función.

```js
assert(typeof selectionSort == 'function');
```

`selectionSort` debería devolver un arreglo ordenado (de menor a mayor).

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

`selectionSort([1,4,2,8,345,123,43,32,5643,63,123,43,2,55,1,234,92])` debe devolver un arreglo sin cambios excepto por el orden.

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

`selectionSort` no debe utilizar el método incorporado `.sort()`.

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
