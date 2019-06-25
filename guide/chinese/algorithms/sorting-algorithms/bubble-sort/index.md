---
title: Bubble Sort
localeTitle: 冒泡排序
---
## 冒泡排序

冒泡排序是最简单的排序算法，如果它们的顺序错误，可以反复交换相邻的元素。

与诸如快速排序的算法相比，这是一种非常慢的排序算法，具有最坏情况复杂度O（n ^ 2）。然而，权衡的是冒泡排序是从头开始实施的最简单的排序算法之一。

### 例：

#### 第一关：

（5 1 4 2 8） - >（1 5 4 2 8），这里，算法比较前两个元素，并从5> 1开始交换。

（1 5 4 2 8） - >（1 4 5 2 8），从5> 4开始交换

（1 4 5 2 8） - >（1 4 2 5 8），从5> 2开始交换

（1 4 2 5 8） - >（1 4 2 5 8），现在，由于这些元素已经按顺序排列（8> 5），算法不会交换它们。

#### 第二次通过：

（1 4 2 5 8） - >（1 4 2 5 8）

（1 4 2 5 8） - >（1 2 4 5 8），从4> 2开始交换

（1 2 4 5 8） - >（1 2 4 5 8）

（1 2 4 5 8） - >（1 2 4 5 8）

现在，数组已经排序，但我们的算法不知道它是否已完成。该算法需要一个完整的传递，没有任何交换，知道它已经排序。

#### 第三次通过：

（1 2 4 5 8） - >（1 2 4 5 8）

（1 2 4 5 8） - >（1 2 4 5 8）

（1 2 4 5 8） - >（1 2 4 5 8）

（1 2 4 5 8） - >（1 2 4 5 8）

#### 属性

*   空间复杂度：O（1）
*   最佳案例表现：O（n）
*   平均案例表现：O（n \* n）
*   最差案例表现：O（n \* n）
*   稳定：是的

### 视频说明

[冒泡以简单的方式排序](https://www.youtube.com/watch?v=Jdtq5uKz-w4)

此代码将使用冒泡排序对数组进行排序。

```js
let arr = [1, 4, 7, 45, 7,43, 44, 25, 6, 4, 6, 9]; 
 let sorted = false 
 
 while(!sorted) { 
  sorted = true 
  for(var i=0; i < arr.length; i++) { 
    if(arr[i] < arr[i-1]) { 
      let temp = arr[i]; 
      arr[i] = arr[i-1]; 
      arr[i-1] = temp; 
      sorted = false; 
    } 
  } 
 } 
```

### 属性：

*   空间复杂度：O（1）
*   时间复杂度：分别为最佳，平均和最差情况的O（n），O（n \* n），O（n \* n）。
*   到位：是的
*   稳定：是的

\======= 这是用Java编写的算法。

```java
public class bubble-sort { 
    static void sort(int[] arr) { 
        int n = arr.length; 
        int temp = 0; 
         for(int i=0; i < n; i++){ 
                 for(int x=1; x < (ni); x++){ 
                          if(arr[x-1] > arr[x]){ 
                                 temp = arr[x-1]; 
                                 arr[x-1] = arr[x]; 
                                 arr[x] = temp; 
                         } 
 
                 } 
         } 
 
    } 
    public static void main(String[] args) { 
 
        for(int i=0; i < 15; i++){ 
            int arr[i] = (int)(Math.random() * 100 + 1); 
        } 
 
                System.out.println("array before sorting\n"); 
                for(int i=0; i < arr.length; i++){ 
                        System.out.print(arr[i] + " "); 
                } 
                bubbleSort(arr); 
                System.out.println("\n array after sorting\n"); 
                for(int i=0; i < arr.length; i++){ 
                        System.out.print(arr[i] + " "); 
                } 
 
        } 
 } 
```

\=======

### 冒泡排序的递归实现。

```cpp
void bubblesort(int arr[], int n) 
 { 
    if(n==1)    //Initial Case 
        return; 
 
    for(int i=0;i<n-1;i++)  //After this pass the largest element will move to its desired location. 
    { 
        if(arr[i]>arr[i+1]) 
        { 
            temp=arr[i]; 
            arr[i]=arr[i+1]; 
            arr[i+1]=temp; 
        } 
    } 
 
    bubblesort(arr,n-1);    //Recursion for remaining array 
 } 
```

### 更多信息

*   [维基百科](https://en.wikipedia.org/wiki/Bubble_sort)
*   [冒泡排序算法 - CS50](https://youtu.be/Ui97-_n5xjo)
*   [冒泡排序算法 - GeeksForGeeks（文章）](http://www.geeksforgeeks.org/bubble-sort)
*   [冒泡排序算法 - MyCodeSchool（视频）](https://www.youtube.com/watch?v=Jdtq5uKz-w4)
*   [算法：冒泡排序 - HackerRank（视频）](https://www.youtube.com/watch?v=6Gv8vg0kcHc)
*   [冒泡排序算法 - GeeksForGeeks（视频）](https://www.youtube.com/watch?v=nmhjrI-aW5o)
*   [冒泡排序可视化](https://www.hackerearth.com/practice/algorithms/sorting/bubble-sort/visualize/)