---
title: Implement Quick Sort
localeTitle: Внедрить Quick Sort
---
## Внедрить Quick Sort

### Метод:

*   Быстрая сортировка - эффективный алгоритм сортировки. Это алгоритм на месте, поэтому он не требует никакого вспомогательного пространства.
*   Сначала выберите случайную точку поворота, вокруг которой перемещаются все меньшие элементы слева от нее и большие элементы справа от нее.
*   Получив pivotIndex, который является по существу фиксированным положением этого элемента, мы находим другое pivotIndex, возвращаясь к вызову этой функции.
*   Худшим случаем быстрой сортировки является **O (n 2 ),** но этого можно избежать, если мы выберем случайную точку поворота, так что это большой O - **O (nlogn)** .
*   Это пространственная сложность **O (logn)** .
*   Это **неустойчивый** алгоритм.
*   ![Быстрая сортировка в действии](https://upload.wikimedia.org/wikipedia/commons/6/6a/Sorting_quicksort_anim.gif)

### Решение:

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

*   [Код запуска](https://repl.it/@ezioda004/Quick-Sort)

### Справка:

*   [Википедия](https://en.wikipedia.org/wiki/Quicksort)
*   [Ханская академия](https://www.khanacademy.org/computing/computer-science/algorithms/quick-sort/a/overview-of-quicksort)