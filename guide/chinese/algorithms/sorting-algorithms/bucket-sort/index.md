---
title: Bucket Sort
localeTitle: 铲斗排序
---
## 什么是Bucket Sort？

Bucket sort是一种比较排序算法，它通过将元素划分为不同的存储区然后对这些存储区进行排序来对元素进行操作 个别。每个存储桶使用单独的排序算法或递归应用存储桶排序算法单独排序。 当输入均匀分布在一个范围内时，存储桶排序主要是有用的。

## 假设一个人面前有以下问题：

已经给出了一个大的浮点整数阵列，它们均匀地位于下界和上界之间。现在需要这个阵列 排序。解决此问题的一种简单方法是使用其他排序算法，例如合并排序，堆排序或快速排序。然而， 这些算法保证了O（NlogN）的最佳案例时间复杂度。 但是，使用桶排序，上述任务可以在O（N）时间内完成。

让我们仔细看看吧。

考虑一个需要创建一个列表数组，即桶。现在需要根据元素的属性将元素插入到这些桶中。 然后可以使用“插入排序”单独对每个存储桶进行排序。

### 铲斗的伪代码排序：
```
void bucketSort(float[] a,int n) 
 
 { 
 
    for(each floating integer 'x' in n) 
 
    { 
 
        insert x into bucket[n*x]; 
 
    } 
 
    for(each bucket) 
 
    { 
 
        sort(bucket); 
 
    } 
 
 } 
```

### 更多信息：

*   [维基百科](https://en.wikipedia.org/wiki/Bucket_sort)
    
*   [GeeksForGeeks](http://www.geeksforgeeks.org/bucket-sort-2/)