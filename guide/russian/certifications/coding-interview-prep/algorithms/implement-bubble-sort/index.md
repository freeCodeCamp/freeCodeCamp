---
title: Implement Bubble Sort
localeTitle: Реализация Bubble Sort
---
## Реализация Bubble Sort

### Метод:

*   Bubble Sort - это алгоритм сортировки, который сортирует или _пузыривает_ наибольшее число как последний элемент в конце каждого прохода.
*   Мы сравниваем каждый элемент с тем, который впереди, если элемент раньше меньше, мы меняем места.
*   Сложность времени Bubble Sort - **O (n 2 )** .
*   Это **стабильный** алгоритм.
*   ![Пузырь в действии](https://upload.wikimedia.org/wikipedia/commons/c/c8/Bubble-sort-example-300px.gif)

### Решение:

#### Решение 1. Основные

```js
function swap(a, b, arr){ 
  let tmp = arr[a]; 
  arr[a] = arr[b]; 
  arr[b] = tmp; 
 } 
 function bubbleSort(array) { 
  for (let i = 0; i < array.length; i++){ 
    for (let j = 0; j < array.length-1-i; j++){ // -i because the largest element will be bubbled at the end so we don't have to compare. 
      if (array[j] > array[j+1]){ 
        swap(j, j+1, array); 
      } 
    } 
  } 
  return array; 
 } 
```

#### Решение 2: Расширенный

`js function bubbleSort(array) { for (let i = 0; i < array.length; i++){ for (let j = 0; j < array.length-1-i; j++){ if (array[j] > array[j+1]) [array[j], array[j+1]] = [array[j+1], array[j]]; // Using ES6 array destructuring to swap } } return array; }`

*   [Код запуска](https://repl.it/@ezioda004/Bubble-Sort)
    
    ### Рекомендации:
    
*   [GeeksForGeeks](https://www.geeksforgeeks.org/bubble-sort/)
    
*   [Википедия](https://en.wikipedia.org/wiki/Bubble_sort)
    
*   Видео от [HackerRank](https://www.youtube.com/watch?v=6Gv8vg0kcHc)