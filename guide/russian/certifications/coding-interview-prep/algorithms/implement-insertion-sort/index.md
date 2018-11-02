---
title: Implement Insertion Sort
localeTitle: Внедрить сортировку вставки
---
## Внедрить сортировку вставки

### Метод:

*   Вставка Сортировка предполагает, что массив разделен на две части:

1.  Сортировка (Первоначально первый элемент)
2.  несортированный

*   Каждый проход мы выбираем элемент и проверяем его на отсортированный массив.
*   Если выбранный элемент меньше последнего элемента отсортированного массива, мы сдвигаем отсортированный массив на 1, пока мы не найдем пятно для _вставки_ выбранного элемента.
*   ![Вставка сортировки в действии](https://upload.wikimedia.org/wikipedia/commons/0/0f/Insertion-sort-example-300px.gif) - [источник](https://en.wikipedia.org/wiki/Insertion_sort)
*   Временная сложность сортировки Insertion равна **O (n 2 )** .
*   Это **стабильный** алгоритм.

### Решение:

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

*   [Код запуска](https://repl.it/@ezioda004/Insertion-Sort)

### Рекомендации:

*   [Википедия](https://en.wikipedia.org/wiki/Insertion_sort)
*   [Ханская академия](https://www.youtube.com/watch?v=lCzQvQr8Utw)