---
title: Freecodecamp Algorithm Binary Search Guide
localeTitle: Freecodecamp算法二进制搜索指南
---
二进制搜索是一种搜索算法，用于查找已排序数组中目标值的位置。

## 例

![二进制搜索](//discourse-user-assets.s3.amazonaws.com/original/2X/3/3cb9e4cc59081e1b0a19b716dbcfb6df97ac2b52.png)

上图显示了当目标值为**4**时二进制搜索算法在排序数组上的工作情况。

## 算法

二进制搜索适用于已排序的数组。二进制搜索首先将数组的中间元素与目标值进行比较。如果目标值与中间元素匹配，则返回其在数组中的位置。如果目标值小于或大于中间元素，则搜索分别使用新的中间元素继续数组的下半部分或上半部分，从而消除另一半。

二进制搜索算法的伪代码如下：
```
BinarySearch(A<a href='https://repl.it/CWZq/158' target='_blank' rel='nofollow'>0..N-1], value) { 
  low = 0 
  high = N - 1 
  while (low <= high) { 
    // invariants: value > A[i] for all i < low 
                   value < A[i] for all i > high 
    mid = (low + high) / 2 
    if (A[mid] > value) 
      high = mid - 1 
    else if (A[mid] < value) 
      low = mid + 1 
    else 
      return mid 
  } 
  return not_found // value would be inserted at index "low" 
 } 
```

## 复杂

*   最差案例表现： **O（log n）**
*   最佳案例表现： **O（1）**
*   平均案例表现： **O（log n）**
*   最坏的案例空间复杂度： **O（1）**用于迭代; **O（log n）**用于递归。

## C ++实现
```
int binarySearch(int arr[], int value, int left, int right) { 
  int middle; 
  while (left <= right) { 
    middle = (left + right) / 2; 
    if (arr[middle] == value) 
      return middle; 
    else if (arr[middle] > value) 
      right = middle - 1; 
    else 
      left = middle + 1; 
  } 
  return -1; 
 } 
```

：rocket：\[运行代码## Python实现
```
def binary_search(l, value): 
    low = 0 
    high = len(l)-1 
    while low <= high: 
        mid = (low+high)//2 
        if l<a href='https://forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=3 ":rocket:"' target='_blank' rel='nofollow'>mid] > value: high = mid-1 
        elif l[mid] < value: low = mid+1 
        else: return mid 
    return -1 
```

![:rocket:](https://forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=3 "：火箭：") [运行代码](https://repl.it/CWZi/2)