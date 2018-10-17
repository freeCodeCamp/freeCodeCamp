---
title: Exponential Search
localeTitle: 指数搜索
---
## 指数搜索

指数搜索也称为手指搜索，通过每次迭代跳过`2^i`元素来搜索排序数组中的元素，其中i表示 循环控制变量的值，然后验证在最后一次跳转和当前跳转之间是否存在搜索元素

# 复杂性最坏的情况

为O（log（N）） 由于名称经常混淆，因此算法的命名不是因为时间复杂性。 该名称是由于算法跳过具有等于2的指数的步骤的元素而产生的

# 作品

1.  一次跳转数组`2^i`元素，搜索条件`Array[2^(i-1)] < valueWanted < Array[2^i]` 。如果`2^i`大于数组的长度，则将上限设置为数组的长度。
2.  在`Array[2^(i-1)]`和`Array[2^i]`之间进行二进制搜索

# 码
```
// C++ program to find an element x in a 
 // sorted array using Exponential search. 
 #include <bits/stdc++.h> 
 using namespace std; 
 
 int binarySearch(int arr[], int, int, int); 
 
 // Returns position of first ocurrence of 
 // x in array 
 int exponentialSearch(int arr[], int n, int x) 
 { 
    // If x is present at firt location itself 
    if (arr[0] == x) 
        return 0; 
 
    // Find range for binary search by 
    // repeated doubling 
    int i = 1; 
    while (i < n && arr[i] <= x) 
        i = i*2; 
 
    //  Call binary search for the found range. 
    return binarySearch(arr, i/2, min(i, n), x); 
 } 
 
 // A recursive binary search function. It returns 
 // location of x in  given array arr[l..r] is 
 // present, otherwise -1 
 int binarySearch(int arr[], int l, int r, int x) 
 { 
    if (r >= l) 
    { 
        int mid = l + (r - l)/2; 
 
        // If the element is present at the middle 
        // itself 
        if (arr[mid] == x) 
            return mid; 
 
        // If element is smaller than mid, then it 
        // can only be present n left subarray 
        if (arr[mid] > x) 
            return binarySearch(arr, l, mid-1, x); 
 
        // Else the element can only be present 
        // in right subarray 
        return binarySearch(arr, mid+1, r, x); 
    } 
 
    // We reach here when element is not present 
    // in array 
    return -1; 
 } 
 
 int main(void) 
 { 
   int arr[] = {2, 3, 4, 10, 40}; 
   int n = sizeof(arr)/ sizeof(arr[0]); 
   int x = 10; 
   int result = exponentialSearch(arr, n, x); 
   (result == -1)? printf("Element is not present in array") 
                 : printf("Element is present at index %d", result); 
   return 0; 
 } 
```

# 更多信息

*   [维基百科](https://en.wikipedia.org/wiki/Exponential_search)
    
*   [GeeksForGeeks](https://www.geeksforgeeks.org/exponential-search/)
    

# 积分

[C ++实现](https://www.wikitechy.com/technology/exponential-search/)