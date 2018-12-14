---
title: QuickSelect
---

## QuickSelect

QuickSelect is a selection algorithm to find the K-th smallest element in an unsorted list.

### Algorithm

After finding pivot (Pivot is a position that partitions the list into two parts. Every element on the left is less than pivot and every element on the right is more than pivot) the algorithm recurs only for the part that contains the k-th smallest element.
If the index of the partitioned element (pivot) is more than k, then the algorithm recurs for the left part. If index (pivot) is same as k,then we have found the k-th smallest element and it is returned. If index is less than k, then the algorithm recurs for the right part.

#### Selection Psudocode
```
Input : List, left is first position of list, right is last position of list and k is k-th smallest element.
Output : A new list is partitioned.

quickSelect(list, left, right, k)

   if left = right
      return list[left]

   // Select a pivotIndex between left and right

   pivotIndex := partition(list, left, right, 
                                  pivotIndex)
   if k = pivotIndex
      return list[k]
   else if k < pivotIndex
      right := pivotIndex - 1
   else
      left := pivotIndex + 1
```

### Partition

Partition is to find the pivot as mentioned above. (Every element on the left is less than pivot and every element on the right is more than pivot)
There are two algorithm for find pivot of partition.
  - Lomuto Partition
  - Hoare Partition
  
#### Lomuto Partition

This partition chooses a pivot that is typically the last element in the array. The algorithm maintains index i as it scans the array using another index j such that the elements lo through i (inclusive) are less than or equal to the pivot, and the elements i+1 through j-1 (inclusive) are greater than the pivot.

This scheme degrades to O(n^2) when the array is already in order.

```
algorithm Lomuto(A, lo, hi) is
    pivot := A[hi]
    i := lo    
    for j := lo to hi - 1 do
        if A[j] < pivot then
            if i != j then
                swap A[i] with A[j]
            i := i + 1
    swap A[i] with A[hi]
    return i
```
#### Hoare Partition

Hoare uses two indices that start at the ends of the array being partitioned, then move toward each other, until they detect an inversion: a pair of elements, one greater than or equal to the pivot, one lesser or equal, that are in the wrong order relative to each other. The inverted elements are then swapped. When the indices meet, the algorithm stops and returns the final index. There are many variants of this algorithm.

```
algorithm Hoare(A, lo, hi) is
    pivot := A[lo]
    i := lo - 1
    j := hi + 1
    loop forever
        do
            i := i + 1
        while A[i] < pivot

        do
            j := j - 1
        while A[j] > pivot

        if i >= j then
            return j

        swap A[i] with A[j]
```

## Time complexity

Like quicksort, the quickselect has good average performance, but is sensitive to the pivot that is chosen. If good pivots are chosen, meaning ones that consistently decrease the search set by a given fraction, then the search set decreases in size exponentially and by induction (or summing the geometric series) one sees that performance is linear, as each step is linear and the overall time is a constant times this (depending on how quickly the search set reduces). However, if bad pivots are consistently chosen, such as decreasing by only a single element each time, then worst-case performance is quadratic: O(n^2). This occurs for example in searching for the maximum element of a set, using the first element as the pivot, and having sorted data.
