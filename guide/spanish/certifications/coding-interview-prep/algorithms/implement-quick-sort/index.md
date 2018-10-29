---
title: Implement Quick Sort
localeTitle: Implementar ordenación rápida
---
## Implementar ordenación rápida

### Método:

*   La ordenación rápida es un algoritmo de clasificación eficiente. Es un algoritmo in situ, por lo que no ocupa ningún espacio auxiliar.
*   Primero elija un punto de pivote al azar alrededor del cual mueva todos los elementos más pequeños hacia la izquierda y los elementos más grandes hacia la derecha.
*   Después de obtener el pivotIndex que es esencialmente la posición fija de ese elemento, encontramos otro pivotIndex llamando de forma recusiva a esta función.
*   El peor de los casos de ordenación rápida es **O (n 2 ),** pero eso puede evitarse si seleccionamos un punto de pivote aleatorio, por lo que de esa forma es O grande **(nlogn)** .
*   Su complejidad de espacio es **O (logn)** .
*   Es un algoritmo **inestable** .
*   ![Ordenación rápida en acción](https://upload.wikimedia.org/wikipedia/commons/6/6a/Sorting_quicksort_anim.gif)

### Solución:

```js
//Swapping array elements via ES6 array destructuring 
 function swap(arr, x, y){ 
  [arr[x], arr[y]] = [arr[y], arr[x]]; 
 } 
 
 //Pivot function returns the fixed pivot point 
 function pivot(arr, left = 0, right = arr.length-1){ 
  let shift = left; 
  for (let i = left+1; i <= right; i++){ 
 
    //Move all the small elements on the left side 
    if (arr[i] < arr[left]) swap(arr, i, ++shift); 
  } 
 
  //Finally swapping the last element with the left 
  swap(arr, left, shift); 
  return shift; 
 } 
 
 function quickSort(array, left = 0, right = array.length-1) { 
  if (left < right){ 
    let pivotIndex = pivot(array, left, right); 
 
    //Recusrively calling the function to the left of the pivot and to the right of the pivot 
    quickSort(array, left, pivotIndex-1); 
    quickSort(array, pivotIndex+1, right); 
  } 
  return array; 
 } 
```

*   [Ejecutar código](https://repl.it/@ezioda004/Quick-Sort)

### Referencia:

*   [Wikipedia](https://en.wikipedia.org/wiki/Quicksort)
*   [academia Khan](https://www.khanacademy.org/computing/computer-science/algorithms/quick-sort/a/overview-of-quicksort)