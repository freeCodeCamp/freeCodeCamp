---
title: Selection Sort
localeTitle: 选择排序
---
## 选择排序

Selection Sort是最简单的排序算法之一。它按以下方式工作，

1.  找到最小的元素。用第一个元素交换它。
2.  找到第二个最小的元素。用第二个元素交换它。
3.  找到第三个最小的元素。用第三个元素交换它。
4.  重复查找下一个最小元素并将其交换到相应的正确位置，直到对数组进行排序。

正如您所猜测的，此算法称为选择排序，因为它重复选择下一个最小元素并将其交换到其位置。

但是，您如何编写代码来查找数组中第二个最小值的索引？

*   一种简单的方法是注意到最小值已经被交换到索引0中，因此问题减少到从索引1开始查找数组中的最小元素。

### 在C / C ++中实现

```C
for(int i = 0; i < n; i++) 
 { 
    int min_index = i; 
    int min_element = a[i]; 
 
    for(int j = i +1; j < n; j++) 
    { 
        if(a[j] < min_element) 
        { 
            min_element = a[j]; 
            min_index = j; 
        } 
    } 
 
    swap(&a[i], &a[min_index]); 
 } 
```

### 在Javascript中实现

```
Javascript 功能选择_排序（A）{ var len =数组_长度（A）; for（var i = 0; i <len - 1; i = i + 1）{ var j _min = i; for（var j = i + 1; j <len; j = j + 1）{ if（A \[j\] <A \[j_ min\]）{ j _min = j; } else {} } if（j_ min！== i）{ 交换（A，i，j\_min）; } else {} } }

函数交换（A，x，y）{ var temp = A \[x\]; A \[x\] = A \[y\]; A \[y\] = temp; }
```
### Implementation in Python 
```
蟒蛇 def seletion _sort（arr）： 如果不是arr： 回归 对于范围内的我（len（arr））： min_ i = i 对于范围内的j（i + 1，len（arr））： 如果arr \[j\] <arr \[min _i\]： min_ i = j arr \[i\]，arr \[min _i\] = arr \[min_ i\]，arr \[i\] 
```

### 属性

*   空间复杂度： **O（n）**
*   时间复杂度： **O（n 2 ）**
*   按位排序： **是的**
*   稳定： **没有**

### 可视化

*   [USFCA](https://www.cs.usfca.edu/~galles/visualization/ComparisonSort.html)
*   [HackerEarth](https://www.hackerearth.com/practice/algorithms/sorting/selection-sort/visualize/)

### 参考

*   [维基百科](https://en.wikipedia.org/wiki/Selection_sort)
*   [可汗学院](https://www.khanacademy.org/computing/computer-science/algorithms#sorting-algorithms)
