---
title: Freecodecamp Algorithm Bubble Sort Guide
localeTitle: Freecodecamp算法冒泡排序指南
---
冒泡排序是一种简单的排序算法。该排序算法是基于比较的算法，其中每对相邻元素是  
比较和元素交换，如果它们不合适。该算法进行就地排序，即它不会创建新数组  
进行分拣过程。

#### 例

[BubbleSort的动画](http://www.sorting-algorithms.com/bubble-sort)
```
array = <a href='https://repl.it/CXif' target='_blank' rel='nofollow'>5, 1, 4, 2, 8] 
 
 First Pass: 
 ( 5 1 4 2 8 ) –> ( 1 5 4 2 8 ), Here, algorithm compares the first two elements, and swaps since 5 > 1. 
 ( 1 5 4 2 8 ) –>  ( 1 4 5 2 8 ), Swap since 5 > 4 
 ( 1 4 5 2 8 ) –>  ( 1 4 2 5 8 ), Swap since 5 > 2 
 ( 1 4 2 5 8 ) –> ( 1 4 2 5 8 ), Now, since these elements are already in order (8 > 5), algorithm does not swap them. 
 
 Second Pass: 
 ( 1 4 2 5 8 ) –> ( 1 4 2 5 8 ) 
 ( 1 4 2 5 8 ) –> ( 1 2 4 5 8 ), Swap since 4 > 2 
 ( 1 2 4 5 8 ) –> ( 1 2 4 5 8 ) 
 ( 1 2 4 5 8 ) –>  ( 1 2 4 5 8 ) 
 Now, the array is already sorted, but our algorithm does not know if it is completed. The algorithm needs one whole pass without any 
 swap to know it is sorted. 
 
 Third Pass: 
 ( 1 2 4 5 8 ) –> ( 1 2 4 5 8 ) 
 ( 1 2 4 5 8 ) –> ( 1 2 4 5 8 ) 
 ( 1 2 4 5 8 ) –> ( 1 2 4 5 8 ) 
 ( 1 2 4 5 8 ) –> ( 1 2 4 5 8 ) 
```

#### C ++实现
```
// Function to implement bubble sort 
 void bubble_sort(int array[], int n) 
 { 
    // Here n is the number of elements in array 
    int temp; 
 
    for(int i = 0; i < n-1; i++) 
 { 
    // Last i elements are already in place 
    for(int j = 0; j < ni-1; j++) 
    { 
        if (array[j] > array[j+1]) 
        { 
            // swap elements at index j and j+1 
            temp = array[j]; 
            array[j] = array[j+1]; 
            array[j+1] = temp; 
        } 
    } 
 } 
 } 
```

：rocket：\[运行代码#### Python实现
```
def bubble_sort(arr): 
    exchanges = True # A check to see if the array is already sorted so that no further steps gets executed 
    i = len(arr)-1 
    while i > 0 and exchanges: 
       exchanges = False 
       for j in range(i): 
           if arr<a href='https://forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=3 ":rocket:"' target='_blank' rel='nofollow'>j]>arr[j+1]: 
               exchanges = True 
               arr[j], arr[j+1] = arr[j+1], arr[j] 
       i -= 1 
 
 arr = [5,3,23,1,43,2,54] 
 bubble_sort(arr) 
 print(arr) # Prints [1, 2, 3, 5, 23, 43, 54] 
```

![:rocket:](https://forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=3 "：火箭：") [运行代码](https://repl.it/CW0M/1)

#### [算法的复杂性](https://www.freecodecamp.com/videos/big-o-notation-what-it-is-and-why-you-should-care)

**最差和平均案例时间复杂度：** O（n \* n）。当数组被反向排序时，即最坏的情况发生，即元素按递减顺序排列

**最佳案例时间复杂度：** O（n）。当数组已经排序时，会出现最佳情况。