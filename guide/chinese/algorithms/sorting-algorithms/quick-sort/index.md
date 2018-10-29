---
title: Quick Sort
localeTitle: 快速排序
---
## 快速排序

快速排序是一种有效的分而治之的排序算法。 Quick Sort的平均案例时间复杂度为O（nlog（n）），最坏情况时间复杂度为O（n ^ 2）。

快速排序涉及的步骤是：

*   选择一个元素作为数据透视表，在这种情况下，数组的最后一个元素是数据透视表。
*   分区：对阵列进行排序，使得小于枢轴的所有元素都在左侧，并且所有大于枢轴的元素都在右侧。
*   以递归方式调用Quicksort，考虑前一个枢轴以正确细分左右数组。 （更详细的解释可以在下面的评论中找到）

JavaScript中的快速实现：

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

C中的快速排序实现

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

快速排序的空间复杂度是O（n）。这是对其他分治和征服排序算法的改进，它采用O（nlong（n））空间。快速排序通过更改给定数组中元素的顺序来实现此目的。将其与[合并排序](https://guide.freecodecamp.org/algorithms/sorting-algorithms/merge-sort)算法进行比较，该算法在每个函数调用中创建2个数组，每个数组长度为n / 2。

#### 更多信息：

*   [维基百科](https://en.wikipedia.org/wiki/Quicksort)
    
*   [GeeksForGeeks](http://www.geeksforgeeks.org/quick-sort)
    
*   [Youtube：Quicksort的视觉解释](https://www.youtube.com/watch?v=MZaf_9IZCrc)
    
*   [Youtube：Gayle Laakmann McDowell（Cracking The Coding Interview的作者）解释了quicksort的基础知识并展示了一些实现](https://www.youtube.com/watch?v=SLauY6PpjW4)