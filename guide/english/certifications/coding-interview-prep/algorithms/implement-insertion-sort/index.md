---
title: Implement Insertion Sort
---
## Implement Insertion Sort

### Method:
- Insertion Sort assumes that array is divided in two parts:
  1. Sorted (Initially the first element)
  2. Unsorted
- Each pass, we select an element, and check it against the sorted array.
- If the selected element is smaller than the last element of the sorted array then we shift the sorted array by 1 until we find the spot to *insert* the selected element.
- ![Insertion sort in action](https://upload.wikimedia.org/wikipedia/commons/0/0f/Insertion-sort-example-300px.gif) - [source](https://en.wikipedia.org/wiki/Insertion_sort)
- Time comlexity of Insertion sort is of **O(n<sup>2</sup>)**.
- It's a **stable** algorithm.

### Solution:
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
- [Run Code](https://repl.it/@ezioda004/Insertion-Sort)

### References:

- [Wikipedia](https://en.wikipedia.org/wiki/Insertion_sort)
- [Khan Academy](https://www.youtube.com/watch?v=lCzQvQr8Utw)
