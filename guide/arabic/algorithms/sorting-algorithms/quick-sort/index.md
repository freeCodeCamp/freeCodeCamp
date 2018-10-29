---
title: Quick Sort
localeTitle: فرز سريع
---
## فرز سريع

الفرز السريع هو خوارزمية الفرز وقسمة فعالة للفرز. متوسط ​​وقت تعقيد وقت فرز سريع هو O (nlog (n)) مع تعقيد وقت الحالة الأسوأ O (n ^ 2).

الخطوات التي يتضمنها التصنيف السريع هي:

*   اختر عنصرًا ليستخدم كمحور ، وفي هذه الحالة ، يكون العنصر الأخير في المصفوفة هو المحور.
*   التقسيم: قم بفرز المصفوفة بطريقة بحيث تكون جميع العناصر الأقل من المحور على الجانب الأيسر ، وتكون جميع العناصر الأكبر من المحور على الجانب الأيمن.
*   استدعاء Quicksort بشكل متكرر ، مع الأخذ بعين الاعتبار المحور السابق للتقسيم الصحيح للصفيفين الأيمن والأيسر. (يمكن العثور على شرح أكثر تفصيلاً في التعليقات أدناه)

تنفيذ سريع في JavaScript:

 `const arr = [6, 2, 5, 3, 8, 7, 1, 4] 
 
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
` 

تنفيذ فرز سريع في C

 `#include<stdio.h> 
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
` 

تعقيد الفضاء من الفرز السريع هو O (n). هذا هو تحسين على غيرها من خوارزميات الفرز الانقسام وقهر ، والتي تأخذ O (nlong (n)) الفضاء. الفرز السريع يحقق ذلك عن طريق تغيير ترتيب العناصر داخل الصفيف المحدد. مقارنة هذا مع خوارزمية [الفرز دمج](https://guide.freecodecamp.org/algorithms/sorting-algorithms/merge-sort) الذي يخلق 2 صفائف ، كل طول n / 2 ، في كل استدعاء وظيفة.

#### معلومات اكثر:

*   [ويكيبيديا](https://en.wikipedia.org/wiki/Quicksort)
    
*   [GeeksForGeeks](http://www.geeksforgeeks.org/quick-sort)
    
*   [يوتيوب: شرح بصري من Quicksort](https://www.youtube.com/watch?v=MZaf_9IZCrc)
    
*   [يوتيوب: Gayle لاكمان ماكدويل (مؤلف كتاب Cracking The Coding Interview) يشرح أساسيات Quicksort وإظهار بعض التطبيقات](https://www.youtube.com/watch?v=SLauY6PpjW4)