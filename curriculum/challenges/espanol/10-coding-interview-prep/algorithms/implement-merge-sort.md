---
id: 587d825c367417b2b2512c8f
title: Implementar ordenamiento por mezcla (merge sort)
challengeType: 1
forumTopicId: 301614
dashedName: implement-merge-sort
---

# --description--

El ordenamiento por mezcla (merge sort) es otro algoritmo intermedio de ordenamiento. Así como el ordenamiento rápido (quick sort), el ordenamiento por mezcla (merge sort) usa el enfoque divide y conquistaras con recurisidad para ordenar un arreglo. Este algoritmo aprovecha que es relativamente fácil juntar dos arreglos en uno solo de manera ordenada, siempre y cuando ambos arreglos esten ordenadps desde un inicio. Pero si solo empezamos con único arreglo desordenado ¿Cómo conseguimos dos arreglos ordenados? Bueno podemos dividir recursivamente nuestro arreglo de entrada, hasta alcanzar un caso base de un arreglo con un solo elemento. Un arreglo de un solo elemento naturalmente está ordenado, entoces podemos empezar a combinar. Esta combinación resolverá las llamadas recursivas que separarón el arreglo, finalemente creando un arreglo ordenado con todos los elementos. Los pasos del ordenamiento por mezcla (merge sort) son:

**1)** Separa recursivamente el arreglo de entrada a la mitad hasta que un subarreglo con un solo elemento es producido.

**2)**Mezcla cada subarreglo ordenado para que al final produzcas un solo arreglo ordenado.

El ordenamiento por mezcla (merge sort) es un metodo eficiente para ordenar, con complejidad algoritmica de *O(nlog(n))*. Este algotimo es muy popular, debido a su rendimiento y es relativamente sencillo de implementar.

Por otro lado esté será el último algoritmo de ordenamiento que cubriremos aquí. Aunque posteriormente en la sección sobre estructura de datos de árboles describiremos el ordenamiento por montículos (heap sort) y otros métodos de ordenamiento más eficientes que requieren un montículo binario (binary heap) para su implementación.

**Instrucciones:**Escribe una función `mergeSort`(ordenamiento por mezcla) que toma un arreglo de enterós como entrada y regresa un arreglo de esos enteros de manera ordenada del más pequeño al más grande. Una bunea manera de implementarlo es escrbiendo una función llamada `merge` (mezcla), la cuál es responsable de mezclar dos arreglos ordenados y otra función llamada `mergeSort`(ordenamiento por mezlca), la cuál usando recursividad produciendo arreglos de un solo elemento, con los que alimentaremos a la función merge (mezcla). ¡Buena suerte!

# --hints--

`mergeSort` debe ser una función.

```js
assert(typeof mergeSort == 'function');
```

`mergeSort` Debería retornar un arreglo ordenado (menor a mayor).

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

`mergeSort([1,4,2,8,345,123,43,32,5643,63,123,43,2,55,1,234,92])`debe retornar un arreglo sin cambios excepto por el orden.

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

`mergeSort`no debe de usar el método incorporada (built-in)`.sort()`.

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
