---
title: Freecodecamp Algorithm Selection Sort Guide
localeTitle: Freecodecamp算法选择排序指南
---
选择排序算法通过从未排序部分重复找到最小元素（考虑升序）并将其放在开头来对数组进行排序。该算法在给定数组中维护两个子数组。  
1.已经排序的子阵列。  
2.剩余的未分类的子阵列。

在选择排序的每次迭代中，挑选来自未排序子阵列的最小元素（考虑升序）并将其移动到排序子阵列。

## 例

[SelectionSort的动画](http://www.sorting-algorithms.com/selection-sort)
```
arr<a href='https://repl.it/CZa0' target='_blank' rel='nofollow'>] = 64 25 12 22 11 
 
 # Placing the minimum element in arr[0...4] in the beginning 
 11 25 12 22 64 
 
 # Placing the minimum element in arr[1...4] in the beginning 
 11 12 25 22 64 
 
 # Placing the minimum element in arr[2...4] in the beginning 
 11 12 22 25 64 
 
 # Placing the minimum element in arr[3...4] in the beginning 
 11 12 22 25 64 
```

#### C ++实现
```
void selection_sort(int array[], int n) 
 { 
    // Contains index of minimum element in unsorted subarray 
    int min_index; 
 
    // Move boundary of unsorted subarray 
 for(int i = 0; i < n-1; i++) 
 { 
    // Find the minimum element in unsorted subarray 
    min_index = i; 
    for(int j = i+1; j < n; j++) 
    { 
        // If present element is less than element at min_index 
        // Then change min_index to present index 
        if(array[j] < array[min_index]) 
        { 
            min_index = j; 
        } 
    } 
 
    // Swap the element at min_index with the first element 
    int temp; 
    temp = array[min_index]; 
    array[min_index] = array[i]; 
    array[i] = temp; 
 } 
 } 
```

：rocket：\[运行代码#### Python实现
```
def selection_sort(arr): 
    for i in range(len(arr)): 
        min_x = i 
        for j in range(i+1,len(arr)): 
            if arr<a href='https://forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=3 ":rocket:"' target='_blank' rel='nofollow'>j] < arr[min_x]: 
                min_x = j 
        arr[min_x], arr[i] = arr[i], arr[min_x] 
 
 arr = [64, 25, 12, 22, 11] 
 selection_sort(arr) 
 print(arr) # Prints [11, 12, 22, 25, 64] 
```

![:rocket:](https://forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=3 "：火箭：") [运行代码](https://repl.it/CXwQ)

#### [算法的复杂性](https://www.freecodecamp.com/videos/big-o-notation-what-it-is-and-why-you-should-care)

**时间复杂度：** O（n \* n）由于两个嵌套循环。