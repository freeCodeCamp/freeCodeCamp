---
title: Quick Sort
---
## Quick Sort

Quick sort is an efficient divide and conquer sorting algorithm. Average case time complexity of Quick Sort is O(nlog(n)) with worst case time complexity being O(n^2).

Recurrence equation of quick sort is:
T(N) = T(i) + T(N - i -1) + cN

The time to sort the file is equal to

the time to sort the left partition with i elements, plus
the time to sort the right partition with N-i-1 elements, plus
the time to build the partitions
1. Worst case analysis

The pivot is the smallest element

T(N) = T(N-1) + cN, N > 1

Telescoping:

T(N-1) = T(N-2) + c(N-1)

T(N-2) = T(N-3) + c(N-2)

T(N-3) = T(N-4) + c(N-3)

T(2) = T(1) + c.2

Add all equations:

T(N) + T(N-1) + T(N-2) + … + T(2) =

= T(N-1) + T(N-2) + … + T(2) + T(1) + c(N) + c(N-1) + c(N-2) + … + c.2

T(N) = T(1) + c(2 + 3 + … + N)

T(N) = 1 + c(N(N+1)/2 -1)

Therefore T(N) = O(N2)
2. Best-case analysis:

The pivot is in the middle

T(N) = 2T(N/2) + cN

Divide by N:

T(N) / N = T(N/2) / (N/2) + c

Telescoping:

T(N/2) / (N/2) = T(N/4) / (N/4) + c

T(N/4) / (N/4) = T(N/8) / (N/8) + c

……

T(2) / 2 = T(1) / (1) + c

Add all equations:

T(N) / N + T(N/2) / (N/2) + T(N/4) / (N/4) + …. + T(2) / 2 =

= (N/2) / (N/2) + T(N/4) / (N/4) + … + T(1) / (1) + c.logN

After crossing the equal terms:

T(N)/N = T(1) + cLogN = 1 + cLogN

T(N) = N + NcLogN

Therefore T(N) = O(NlogN)
3. Average case analysis

Similar computations, resulting in T(N) = O(NlogN)

The average value of T(i) is 1/N times the sum of T(0) through T(N-1)

1/N S T(j), j = 0 thru N-1

T(N) = 2/N (S T(j)) + cN

Multiply by N

NT(N) = 2(S T(j)) + cN*N

To remove the summation, we rewrite the equation for N-1:

(N-1)T(N-1) = 2(S T(j)) + c(N-1)2, j = 0 thru N-2

and subtract:

NT(N) - (N-1)T(N-1) = 2T(N-1) + 2cN -c

Prepare for telescoping. Rearrange terms, drop the insignificant c:

NT(N) = (N+1)T(N-1) + 2cN

Divide by N(N+1):

T(N)/(N+1) = T(N-1)/N + 2c/(N+1)

Telescope:

T(N)/(N+1) = T(N-1)/N + 2c/(N+1)

T(N-1)/(N) = T(N-2)/(N-1)+ 2c/(N)

T(N-2)/(N-1) = T(N-3)/(N-2) + 2c/(N-1)

….

T(2)/3 = T(1)/2 + 2c /3

Add the equations and cross equal terms:

T(N)/(N+1) = T(1)/2 +2c S (1/j), j = 3 to N+1

T(N) = (N+1)(1/2 + 2c S(1/j))
The sum S (1/j), j =3 to N-1, is about LogN

Thus T(N) = O(NlogN)


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
The space complexity of quick sort is O(n). This is an improvement over other divide and conquer sorting algorithms, which take O(nlong(n)) space. Quick sort achieves this by changing the order of elements within the given array. Compare this with the <a href='https://guide.freecodecamp.org/algorithms/sorting-algorithms/merge-sort' target='_blank' rel='nofollow'>merge sort</a> algorithm which creates 2 arrays, each length n/2, in each function call.

#### More Information:

- <a href='https://en.wikipedia.org/wiki/Quicksort' target='_blank' rel='nofollow'>Wikipedia</a>

- <a href='http://www.geeksforgeeks.org/quick-sort' target='_blank' rel='nofollow'>GeeksForGeeks</a>

- <a href='https://www.youtube.com/watch?v=MZaf_9IZCrc' target='_blank' rel='nofollow'>Youtube: A Visual Explanation of Quicksort</a>

- <a href='https://www.youtube.com/watch?v=SLauY6PpjW4' target='_blank' rel='nofollow'>Youtube: Gayle Laakmann McDowell (author of Cracking The Coding Interview) explains the basics of quicksort and show some implementations</a>

- <a href='https://www.youtube.com/watch?v=COk73cpQbFQ' target='_blank' rel='nofollow'>Quick Sort - MyCodeSchool</a>


* [QuickSort] - (http://faculty.simpson.edu/lydia.sinapova/www/cmsc250/LN250_Weiss/L16-QuickSort.htm)

