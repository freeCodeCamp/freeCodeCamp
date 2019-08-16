---
title: Shell Sort
---
## Shell Sort

Shell sort is mainly a variation of insertion sort. In insertion sort, you move elements only one position ahead. When an element has to be moved far ahead, many movements are involved. The idea of shell sort is to allow exchange of far items. In shell sort, you make the array h-sorted for a large value of h. You keep reducing the value of h until it becomes 1. An array is said to be h-sorted if all sublists of every h’th element is sorted.

#### Java Implementation of Shell Sort (Method Only)

```java
int sort(int arr[]) 
{ 
  int n = arr.length; 
  for (int gap = n/2; gap > 0; gap /= 2) 
  { 
    for (int i = gap; i < n; i += 1) 
    { 
      int temp = arr[i];
      int j; 
      for (j = i; j >= gap && arr[ j - gap ] > temp; j -= gap)
        arr[j] = arr[ j - gap ]; 
      arr[j] = temp; 
    } 
  } 
  return 0;
} 
```
