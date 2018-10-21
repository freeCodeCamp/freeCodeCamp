---
title: Timsort
localeTitle: Timsort
---
## Timsort

Timsort هي خوارزمية الفرز السريع تعمل في تعقيد ثابت O (N log (N))

Timsort هو مزيج على الإدراج الإدراج و Mergesort. يتم تنفيذ هذه الخوارزمية في Arrays.sort () في Java بالإضافة إلى تصنيف Python () وفرزها () يتم فرز الجزء الأصغر باستخدام "فرز الإدراج" ويتم دمجها فيما بعد باستخدام "Mergesort".

تنفيذ سريع في بايثون:

 `def binary_search(the_array, item, start, end): 
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
` 

#### تعقيد:

يحتوي تيم تيم على تعقيد ثابت لـ O (N log (N)) ويقارن بشكل جيد مع Quicksort. يمكن العثور على مجموعة من التعقيدات في هذا [المخطط](https://cdn-images-1.medium.com/max/1600/1*1CkG3c4mZGswDShAV9eHbQ.png)

#### معلومات اكثر:

*   [ويكيبيديا](https://en.wikipedia.org/wiki/Timsort)
    
*   [GeeksForGeeks](https://www.geeksforgeeks.org/timsort/)
    
*   [يوتيوب: شرح بصري من Quicksort](https://www.youtube.com/watch?v=jVXsjswWo44)
    

#### ائتمانات:

[بايثون التنفيذ](https://hackernoon.com/timsort-the-fastest-sorting-algorithm-youve-never-heard-of-36b28417f399)