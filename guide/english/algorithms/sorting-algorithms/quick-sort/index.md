---
title: Quick Sort
---
## Quick Sort

Quick sort is an efficient divide and conquer sorting algorithm. Average case time complexity of Quick Sort is O(nlog(n)) with worst case time complexity being O(n^2) depending on the selection of the pivot element, which divides the current array into two sub arrays. For instance, the time complexity of Quick Sort is approximately O(nlog(n)) when the selection of pivot divides original array into two nearly equal sized sub arrays. On the other hand, if the algorithm, which selects of pivot element of the input arrays, consistently outputs 2 sub arrays with a large difference in terms of array sizes, quick sort algorithm can achieve the worst case time complexity of O(n^2).

The steps involved in Quick Sort are:
- Choose an element to serve as a pivot, in this case, the last element of the array is the pivot.
- Partitioning: Sort the array in such a manner that all elements less than the pivot are to the left, and all elements greater than the pivot are to the right.
- Call Quicksort recursively, taking into account the previous pivot to properly subdivide the left and right arrays. (A more detailed explanation can be found in the comments below)

A quick implementation in JavaScript:

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
A quick sort implementation in C
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

## Complexity

| Name                  | Best            | Average             | Worst               | Memory    | Stable    | Comments  |
| --------------------- | :-------------: | :-----------------: | :-----------------: | :-------: | :-------: | :-------- |
| **Quick sort**        | n&nbsp;log(n)   | n&nbsp;log(n)       | n<sup>2</sup>       | log(n)    | No        |  Quicksort is usually done in-place with O(log(n)) stack space |

The space complexity of quick sort is O(n). This is an improvement over other divide and conquer sorting algorithms, which take O(n log(n)) space.

#### More Information:

- <a href='https://en.wikipedia.org/wiki/Quicksort' target='_blank' rel='nofollow'>Wikipedia</a>

- <a href='http://www.geeksforgeeks.org/quick-sort' target='_blank' rel='nofollow'>GeeksForGeeks</a>

- <a href='https://www.youtube.com/watch?v=MZaf_9IZCrc' target='_blank' rel='nofollow'>Youtube: A Visual Explanation of Quicksort</a>

- <a href='https://www.youtube.com/watch?v=SLauY6PpjW4' target='_blank' rel='nofollow'>Youtube: Gayle Laakmann McDowell (author of Cracking The Coding Interview) explains the basics of quicksort and show some implementations</a>

- <a href='https://www.youtube.com/watch?v=COk73cpQbFQ' target='_blank' rel='nofollow'>Quick Sort - MyCodeSchool</a>

