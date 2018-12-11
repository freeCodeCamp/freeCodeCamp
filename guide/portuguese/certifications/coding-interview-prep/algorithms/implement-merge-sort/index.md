---
title: Implement Merge Sort
localeTitle: Implementar o Merge Sort
---
## Implementar o Merge Sort

### Método:

*   Merge Sort é um problema clássico de divisão e conquista.
*   Os seguintes passos estão envolvidos:
*   Divide: Nós quebramos o array do meio usando a recusa até ficarmos com 1 elemento.
*   Conquiste: Então, classificamos esses pequenos arrays.
*   Combine: Finalmente, mesclamos esses pequenos arrays em um array ordenado e continuamos fazendo isso até combinarmos todos os arrays.
*   A complexidade de tempo do Merge Sort é **O (nlogn)** .
*   A complexidade do espaço de Merge Sort é **O (n)** .
*   É um algoritmo **estável** .
*   ![Merge Sort in action](https://upload.wikimedia.org/wikipedia/commons/c/cc/Merge-sort-example-300px.gif)

### Solução:

```js
//Merger function, which merges 2 sorted array into 1 sorted array 
 function merger(arr1, arr2){ 
  let i = 0, j = 0, mergedArr = []; 
  while (i < arr1.length && j < arr2.length){ 
    if (arr1[i] > arr2[j]) mergedArr.push(arr2[j++]); 
    else mergedArr.push(arr1[i++]); 
  } 
  while (i < arr1.length){ 
    mergedArr.push(arr1[i++]); 
  } 
  while (j < arr2.length){ 
    mergedArr.push(arr2[j++]); 
  } 
  return mergedArr; 
 } 
 function mergeSort(array) { 
  //Array of length 1 is sorted so we return the same array back 
  if (array.length == 1) return array; 
 
  //Break down the array to half from middle into left and right 
  let middle = Math.floor(array.length/2); 
  let left = mergeSort(array.slice(0, middle)); 
  let right = mergeSort(array.slice(middle)); 
 
  //Return the merged sorted array 
  return merger(left, right); 
 } 
```

*   [Executar código](https://repl.it/@ezioda004/Merge-Sort)

### Referências:

*   [Wikipedia](https://en.wikipedia.org/wiki/Merge_sort)
*   Vídeo de [Hackerrank](https://www.youtube.com/watch?v=KF2j-9iSf4Q)