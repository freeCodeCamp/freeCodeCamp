---
title: Radix Sort
localeTitle: 基数排序
---
## 基数排序

先决条件：计数排序

QuickSort，MergeSort，HeapSort是基于比较的排序算法。 CountSort不是基于比较的算法。它具有O（n + k）的复杂度，其中k是输入数组的最大元素。 因此，如果k是O（n），则CountSort变为线性排序，这比具有O（nlogn）时间复杂度的基于比较的排序算法更好。 当k变为O（n2）时，想法是扩展CountSort算法以获得更好的时间复杂度。 这是Radix Sort的想法。

算法：

对于每个数字i，其中i从最低有效数字到数字的最高有效数字变化 使用countort算法根据第i位数对输入数组进行排序。 我们使用count sort，因为它是一个稳定的排序。

示例：假设输入数组是：

10,21,17,34,44,11,654,123

基于该算法，我们将根据一个数字（最低有效数字）对输入数组进行排序。

0:10  
1:21 11  
2：  
3：123  
4：34 44 654  
5：  
6：  
7:17  
8：  
9：  

因此，阵列变为10,21,11,123,24,44,654,17 现在，我们将根据十位数进行排序：

0：  
1:10 11 17  
2：21 123  
3:34  
4:44  
5：654  
6：  
7：  
8：  
9：

现在，阵列变为：10,11,17,21,123,34,44,654 最后，我们按照百位数（最高位数）进行排序：

0：010 011 017 021 034 044  
1：123  
2：  
3：  
4：  
5：  
6：654  
7：  
8：  
9：

该数组变为：10,11,17,21,34,44,123,654，它被排序。这就是我们的算法的工作方式。

C中的实现：
```
void countsort(int arr[],int n,int place){ 
 
        int i,freq[range]={0};         //range for integers is 10 as digits range from 0-9 
 
        int output[n]; 
 
        for(i=0;i<n;i++) 
 
                freq[(arr[i]/place)%range]++; 
 
        for(i=1;i<range;i++) 
 
                freq[i]+=freq[i-1]; 
 
        for(i=n-1;i>=0;i--){ 
 
                output[freq[(arr[i]/place)%range]-1]=arr[i]; 
 
                freq[(arr[i]/place)%range]--; 
 
        } 
 
        for(i=0;i<n;i++) 
 
                arr[i]=output[i]; 
 
 } 
 
 void radixsort(ll arr[],int n,int maxx){            //maxx is the maximum element in the array 
 
        int mul=1; 
 
        while(maxx){ 
 
                countsort(arr,n,mul); 
 
                mul*=10; 
 
                maxx/=10; 
 
        } 
 
 } 
```

### 更多信息：

*   [维基百科](https://en.wikipedia.org/wiki/Radix_sort)
    
*   [GeeksForGeeks](http://www.geeksforgeeks.org/radix-sort/)