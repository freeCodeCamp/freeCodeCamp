---
title: Quick Sort
localeTitle: Быстрая сортировка
---
## Быстрая сортировка

Быстрая сортировка - эффективный алгоритм сортировки и разделения. Средняя временная сложность Quick Sort - O (nlog (n)) с наихудшей временной сложностью - O (n ^ 2).

Шаги, связанные с Quick Sort:

*   Выберите элемент, который будет служить точкой опоры, в этом случае последним элементом массива является опорная точка.
*   Разделение: сортировка массива таким образом, чтобы все элементы, меньшие, чем точка поворота, находились влево, а все элементы, большие, чем точка поворота, находились вправо.
*   Вызовите Quicksort рекурсивно, учитывая предыдущий шарнир, чтобы правильно разделить левый и правый массивы. (Более подробное объяснение можно найти в комментариях ниже)

Быстрая реализация в JavaScript:

```javascript
const arr = [6, 2, 5, 3, 8, 7, 1, 4] 
 
 const quickSort = (arr, start, end) => { 
 
  if(start < end) { 
 
    // You can learn about how the pivot value is derived in the comments below 
    let pivot = partition(arr, start, end) 
 
    // Make sure to read the below comments to understand why pivot - 1 and pivot + 1 are used 
    // These are the recursive calls to quickSort 
    quickSort(arr, start, pivot - 1) 
    quickSort(arr, pivot + 1, end) 
  } 
 
 } 
 
 const partition = (arr, start, end) => { 
  let pivot = end 
  // Set i to start - 1 so that it can access the first index in the event that the value at arr[0] is greater than arr[pivot] 
  // Succeeding comments will expound upon the above comment 
  let i = start - 1 
  let j = start 
 
  // Increment j up to the index preceding the pivot 
  while (j < pivot) { 
 
    // If the value is greater than the pivot increment j 
    if (arr[j] > arr[pivot]) { 
      j++ 
    } 
 
    // When the value at arr[j] is less than the pivot: 
    // increment i (arr[i] will be a value greater than arr[pivot]) and swap the value at arr[i] and arr[j] 
    else { 
      i++ 
      swap(arr, j, i) 
      j++ 
    } 
 
  } 
 
  //The value at arr[i + 1] will be greater than the value of arr[pivot] 
  swap(arr, i + 1, pivot) 
 
  //You return i + 1, as the values to the left of it are less than arr[i+1], and values to the right are greater than arr[i + 1] 
  // As such, when the recursive quicksorts are called, the new sub arrays will not include this the previously used pivot value 
  return i + 1 
 } 
 
 const swap = (arr, firstIndex, secondIndex) => { 
  let temp = arr[firstIndex] 
  arr[firstIndex] = arr[secondIndex] 
  arr[secondIndex] = temp 
 } 
 
 quickSort(arr, 0, arr.length - 1) 
 console.log(arr) 
```

Быстрая сортировка в C

```C
#include<stdio.h> 
 void swap(int* a, int* b) 
 { 
    int t = *a; 
    *a = *b; 
    *b = t; 
 } 
 int partition (int arr[], int low, int high) 
 { 
    int pivot = arr[high]; 
    int i = (low - 1); 
 
    for (int j = low; j <= high- 1; j++) 
    { 
        if (arr[j] <= pivot) 
        { 
            i++; 
            swap(&arr[i], &arr[j]); 
        } 
    } 
    swap(&arr[i + 1], &arr[high]); 
    return (i + 1); 
 } 
 void quickSort(int arr[], int low, int high) 
 { 
    if (low < high) 
    { 
        int pi = partition(arr, low, high); 
 
        quickSort(arr, low, pi - 1); 
        quickSort(arr, pi + 1, high); 
    } 
 } 
 
 
 void printArray(int arr[], int size) 
 { 
    int i; 
    for (i=0; i < size; i++) 
        printf("%d ", arr[i]); 
    printf("n"); 
 } 
 
 
 int main() 
 { 
    int arr[] = {10, 7, 8, 9, 1, 5}; 
    int n = sizeof(arr)/sizeof(arr[0]); 
    quickSort(arr, 0, n-1); 
    printf("Sorted array: n"); 
    printArray(arr, n); 
    return 0; 
 } 
```

Сложность пространства быстрой сортировки - O (n). Это улучшение по сравнению с другими алгоритмами сортировки и разделения, которые занимают пространство O (nlong (n)). Быстрая сортировка достигает этого, изменяя порядок элементов в заданном массиве. Сравните это с алгоритмом [сортировки слиянием](https://guide.freecodecamp.org/algorithms/sorting-algorithms/merge-sort) , который создает в каждом вызове функции 2 массива, каждая длина n / 2.

#### Дополнительная информация:

*   [Википедия](https://en.wikipedia.org/wiki/Quicksort)
    
*   [GeeksForGeeks](http://www.geeksforgeeks.org/quick-sort)
    
*   [Youtube: визуальное объяснение Quicksort](https://www.youtube.com/watch?v=MZaf_9IZCrc)
    
*   [Youtube: Gayle Laakmann McDowell (автор Cracking the Coding Interview) объясняет основы быстрой сортировки и демонстрирует некоторые реализации](https://www.youtube.com/watch?v=SLauY6PpjW4)