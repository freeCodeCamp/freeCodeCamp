---
title: Implement Merge Sort
localeTitle: Реализация Merge Sort
---
## Реализация Merge Sort

### Метод:

*   Merge Sort - классическая проблема с разделом и покорением.
*   Следующие шаги:
*   Разделить: мы разбиваем массив из середины с помощью recusion, пока мы не останемся с 1 элементом.
*   Conquer: Затем мы сортируем эти небольшие массивы.
*   Комбинат. Наконец, мы объединим эти небольшие массивы в один отсортированный массив и продолжаем делать это, пока мы не объединим все массивы.
*   Сложность времени Сортировка слияния - **O (nlogn)** .
*   Пространственная сложность сортировки Merge - это **O (n)** .
*   Это **стабильный** алгоритм.
*   ![Слияние Сортировка в действии](https://upload.wikimedia.org/wikipedia/commons/c/cc/Merge-sort-example-300px.gif)

### Решение:

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

*   [Код запуска](https://repl.it/@ezioda004/Merge-Sort)

### Рекомендации:

*   [Википедия](https://en.wikipedia.org/wiki/Merge_sort)
*   Видео от [Hackerrank](https://www.youtube.com/watch?v=KF2j-9iSf4Q)