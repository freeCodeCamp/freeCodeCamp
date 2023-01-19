---
id: 61abc7ebf3029b56226de5b6
title: Implementar la búsqueda binaria
challengeType: 1
forumTopicId: 487618
dashedName: implement-binary-search
---

# --description--

La búsqueda binaria es un algoritmo de eficiencia **O(log(n))** para la busqueda de elementos en un arreglo ordenado. Funciona de la siguiente manera:

1. Encuentra el valor (`value`) intermedio de un arreglo ordenado. If `value == target` return `true` (The value has been found and the search is complete).
1. Si el valor intermedio es menor del valor que estamos buscando (`value < target`), repetiremos el paso uno en la mitad más chica de nuestro arreglo.
1. Si el valor intermedio es menor del valor que estamos buscando (`value > target`), repetiremos el paso uno en la mitad más chica de nuestro arreglo.
1. If after searching the whole array the value is not present, return `false` (The array has been searched and the value is not in the array).

Como lo habrás notado, estamos dividiendo al mitad a un arreglo sucesivamente, por lo que tendremos una eficiencia de log(n). Para este desafío, queremos que muestres tu trabajo: cómo llegaste al valor objetivo... ¡el camino que tomaste!

# --instructions--

Escribe la función `binarySearch` (búsqueda binaria) que implemente el algoritmo de búsqueda binaria en un arreglo, devolviendo el camino tomado (cada valor intermedio comparado) para encontrar el valor en un arreglo.

La función recibe como parametros un arreglo de números enteros y el número que queremos buscar. Devuleve un arreglo (ordenado) que contiene todos los valores intermedios del arreglo original descartados antes de encontrar el valor deseado. El valor que estamos buscando deberá ser el ultima elemento de nuestro arreglo retornado. If the value is not found, return the string `Value Not Found`.

Por ejemplo `binarySearch([1,2,3,4,5,6,7], 5)` deberá retornar `[4,6,5]`.

Para este reto, cuando dividas a la mitad deberás de usar la función `Math.floor()` Ejemplo `Math.floor(x/2)`. Proporcionando un camino consistente y estable.

**Nota:** el siguiente arreglo será usado en las pruebas:

```js
const testArray = [
  0, 1, 2, 3, 4, 5, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22,
  23, 49, 70
];
```

# --hints--

`binarySearch` deberá ser una función.

```js
assert(typeof binarySearch == 'function');
```

`binarySearch(testArray, 0)` deberá retornar `[13, 5, 2, 0]`.

```js
assert.deepEqual(binarySearch(_testArray, 0), [13, 5, 2, 0]);
```

`binarySearch(testArray, 1)` deberá retornar `[13, 5, 2, 0, 1]`.

```js
assert.deepEqual(binarySearch(_testArray, 1), [13, 5, 2, 0, 1]);
```


`binarySearch(testArray, 2)` deberá retornar `[13, 5, 2]`.

```js
assert.deepEqual(binarySearch(_testArray, 2), [13, 5, 2]);
```

`binarySearch(testArray, 6)` deberá retornar `Value Not Found`.

```js
assert.strictEqual(binarySearch(_testArray, 6), 'Value Not Found');
```

`binarySearch(testArray, 11)` deberá retornar `[13, 5, 10, 11]`.

```js
assert.deepEqual(binarySearch(_testArray, 11), [13, 5, 10, 11])
```

`binarySearch(testArray, 13)` deberá retornar `[13]`.

```js
assert.deepEqual(binarySearch(_testArray, 13), [13]);
```

`binarySearch(testArray, 70)` deberá retornar `[13, 19, 22, 49, 70]`.

```js
assert.deepEqual(binarySearch(_testArray, 70), [13, 19, 22, 49, 70]);
```

# --seed--

## --after-user-code--

```js
const _testArray = [
  0, 1, 2, 3, 4, 5, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22,
  23, 49, 70
];
```

## --seed-contents--

```js
function binarySearch(searchList, value) {
  let arrayPath = [];
  return arrayPath;
}
```



# --solutions--

```js
let binarySearch = (searchList, value) => {
  let arrayPath = [];

  // set initial L - M - R
  let left = 0;
  let right = searchList.length - 1;
  let middle = Math.floor(right / 2);

  // if first comparison finds value
  if (searchList[middle] == value) {
    arrayPath.push(searchList[middle]);
    return arrayPath;
  }

  while (searchList[middle] !== value) {
    // add to output array
    arrayPath.push(searchList[middle]);

    // not found
    if (right < left) {
      return 'Value Not Found';
    }
    // value is in left or right portion of array
    // update L - M - R
    if (searchList[middle] > value) {
      right = middle - 1;
      middle = left + Math.floor((right - left) / 2);
    } else {
      left = middle + 1;
      middle = left + Math.floor((right - left) / 2);
    }

    // if found update output array and exit
    if (searchList[middle] == value) {
      arrayPath.push(searchList[middle]);

      break;
    }
  }
  return arrayPath;
};
```
