---
title: Return a Sorted Array Without Changing the Original Array
localeTitle: Возвращает отсортированный массив без изменения исходного массива
---
## Возвращает отсортированный массив без изменения исходного массива

### метод

Сначала соедините массив, взятый в качестве параметра, в новый пустой массив. Затем используйте метод `sort()` как показано в последнем вызове, и создайте функцию для сортировки нового массива в порядке возрастания.

### Решение

```javascript
var globalArray = [5, 6, 3, 2, 9]; 
 function nonMutatingSort(arr) { 
  // Add your code below this line 
  return [].concat(arr).sort(function(a, b) { 
    return a - b; 
  }); 
  // Add your code above this line 
 } 
 nonMutatingSort(globalArray); 

```