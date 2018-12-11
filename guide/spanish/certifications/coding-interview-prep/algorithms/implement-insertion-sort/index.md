---
title: Implement Insertion Sort
localeTitle: Implementar orden de inserción
---
## Implementar orden de inserción

### Método:

*   El orden de inserción supone que la matriz se divide en dos partes:

1.  Ordenado (Inicialmente el primer elemento)
2.  Sin clasificar

*   En cada paso, seleccionamos un elemento y lo comparamos con la matriz ordenada.
*   Si el elemento seleccionado es más pequeño que el último elemento de la matriz ordenada, entonces cambiamos la matriz ordenada en 1 hasta que encontremos el lugar para _insertar_ el elemento seleccionado.
*   ![Tipo de inserción en acción](https://upload.wikimedia.org/wikipedia/commons/0/0f/Insertion-sort-example-300px.gif) - [fuente](https://en.wikipedia.org/wiki/Insertion_sort)
*   La complejidad de tiempo de la ordenación de inserción es de **O (n 2 )** .
*   Es un algoritmo **estable** .

### Solución:

```js
function insertionSort(array) { 
  for (let i = 1; i < array.length; i++){ 
    let curr = array[i]; 
    for (var j = i-1; j >= 0 && array[j] > curr; j--){ 
      array[j+1] = array[j]; 
    } 
    array[j+1] = curr; 
  } 
  return array; 
 } 
```

*   [Ejecutar código](https://repl.it/@ezioda004/Insertion-Sort)

### Referencias:

*   [Wikipedia](https://en.wikipedia.org/wiki/Insertion_sort)
*   [academia Khan](https://www.youtube.com/watch?v=lCzQvQr8Utw)