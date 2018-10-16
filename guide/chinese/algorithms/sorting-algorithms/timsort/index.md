---
title: Timsort
localeTitle: Timsort
---
## Timsort

Timsort是一种快速排序算法，在稳定的O（N log（N））复杂度下工作

Timsort融合了Insertion Sort和Mergesort。该算法在Java的Arrays.sort（）以及Python的sorted（）和sort（）中实现。 较小的部分使用Insertion Sort进行排序，稍后使用Mergesort合并在一起。

Python中的快速实现：
```
def binary_search(the_array, item, start, end): 
    if start == end: 
        if the_array[start] > item: 
            return start 
        else: 
            return start + 1 
    if start > end: 
        return start 
 
    mid = round((start + end)/ 2) 
 
    if the_array[mid] < item: 
        return binary_search(the_array, item, mid + 1, end) 
 
    elif the_array[mid] > item: 
        return binary_search(the_array, item, start, mid - 1) 
 
    else: 
        return mid 
 
 """ 
 Insertion sort that timsort uses if the array size is small or if 
 the size of the "run" is small 
 """ 
 def insertion_sort(the_array): 
    l = len(the_array) 
    for index in range(1, l): 
        value = the_array[index] 
        pos = binary_search(the_array, value, 0, index - 1) 
        the_array = the_array[:pos] + [value] + the_array[pos:index] + the_array[index+1:] 
    return the_array 
 
 def merge(left, right): 
    """Takes two sorted lists and returns a single sorted list by comparing the 
    elements one at a time. 
    [1, 2, 3, 4, 5, 6] 
    """ 
    if not left: 
        return right 
    if not right: 
        return left 
    if left[0] < right[0]: 
        return [left[0]] + merge(left[1:], right) 
    return [right[0]] + merge(left, right[1:]) 
 
 def timsort(the_array): 
    runs, sorted_runs = [], [] 
    length = len(the_array) 
    new_run = [the_array[0]] 
 
    # for every i in the range of 1 to length of array 
    for i in range(1, length): 
        # if i is at the end of the list 
        if i == length - 1: 
            new_run.append(the_array[i]) 
            runs.append(new_run) 
            break 
        # if the i'th element of the array is less than the one before it 
        if the_array[i] < the_array[i-1]: 
            # if new_run is set to None (NULL) 
            if not new_run: 
                runs.append([the_array[i]]) 
                new_run.append(the_array[i]) 
            else: 
                runs.append(new_run) 
                new_run = [] 
        # else if its equal to or more than 
        else: 
            new_run.append(the_array[i]) 
 
    # for every item in runs, append it using insertion sort 
    for item in runs: 
        sorted_runs.append(insertion_sort(item)) 
 
    # for every run in sorted_runs, merge them 
    sorted_array = [] 
    for run in sorted_runs: 
        sorted_array = merge(sorted_array, run) 
 
    print(sorted_array) 
 
 timsort([2, 3, 1, 5, 6, 7]) 
```

#### 复杂：

Tim sort具有稳定的O复杂度（N log（N）），与Quicksort相比非常好。 在这张[图表](https://cdn-images-1.medium.com/max/1600/1*1CkG3c4mZGswDShAV9eHbQ.png)上可以找到一个复杂的混合体

#### 更多信息：

*   [维基百科](https://en.wikipedia.org/wiki/Timsort)
    
*   [GeeksForGeeks](https://www.geeksforgeeks.org/timsort/)
    
*   [Youtube：Quicksort的视觉解释](https://www.youtube.com/watch?v=jVXsjswWo44)
    

#### 积分：

[Python实现](https://hackernoon.com/timsort-the-fastest-sorting-algorithm-youve-never-heard-of-36b28417f399)