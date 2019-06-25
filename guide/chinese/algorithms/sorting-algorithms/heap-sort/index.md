---
title: Heapsort
localeTitle: 堆排序
---
## 堆排序

Heapsort是一种基于最大/最小堆使用的高效排序算法。堆是基于树的数据结构，它满足堆属性 - 即对于最大堆，任何节点的密钥小于或等于其父节点的密钥（如果它具有父节点）。可以使用此属性来使用maxHeapify方法在O（logn）时间内访问堆中的最大元素。我们执行此操作n次，每次将堆中的最大元素移动到堆的顶部并将其从堆中提取到一个已排序的数组中。因此，在n次迭代之后，我们将得到输入数组的排序版本。该算法在O（nlogn）时间和O（1）附加空间\[O（n）中运行，包括存储输入数据所需的空间\]，因为所有操作都是完全就地执行的。

Heapsort的最差和平均案例时间要素是O（nlogn）。尽管heapsort比quicksort具有更好的恶劣情况复杂性，但实施良好的快速排序运行速度更快。这是一种基于比较的算法，因此它可以用于非数值数据集，因为可以在元素上定义某些关系（堆属性）。

Java中的实现如下所示：

```java
import java.util.Arrays; 
 public class Heapsort { 
 
    public static void main(String[] args) { 
        //test array 
        Integer[] arr = {1, 4, 3, 2, 64, 3, 2, 4, 5, 5, 2, 12, 14, 5, 3, 0, -1}; 
        String[] strarr = {"hope you find this helpful!", "wef", "rg", "q2rq2r", "avs", "erhijer0g", "ewofij", "gwe", "q", "random"}; 
        arr = heapsort(arr); 
        strarr = heapsort(strarr); 
        System.out.println(Arrays.toString(arr)); 
        System.out.println(Arrays.toString(strarr)); 
    } 
 
    //O(nlogn) TIME, O(1) SPACE, NOT STABLE 
    public static <E extends Comparable<E>> E[] heapsort(E[] arr){ 
        int heaplength = arr.length; 
        for(int i = arr.length/2; i>0;i--){ 
            arr = maxheapify(arr, i, heaplength); 
        } 
 
        for(int i=arr.length-1;i>=0;i--){ 
            E max = arr[0]; 
            arr[0] = arr[i]; 
            arr[i] = max; 
            heaplength--; 
            arr = maxheapify(arr, 1, heaplength); 
        } 
 
        return arr; 
    } 
 
    //Creates maxheap from array 
    public static <E extends Comparable<E>> E[] maxheapify(E[] arr, Integer node, Integer heaplength){ 
        Integer left = node*2; 
        Integer right = node*2+1; 
        Integer largest = node; 
 
        if(left.compareTo(heaplength) <=0 && arr[left-1].compareTo(arr[node-1]) >= 0){ 
            largest = left; 
        } 
        if(right.compareTo(heaplength) <= 0 && arr[right-1].compareTo(arr[largest-1]) >= 0){ 
            largest = right; 
        } 
        if(largest != node){ 
            E temp = arr[node-1]; 
            arr[node-1] = arr[largest-1]; 
            arr[largest-1] = temp; 
            maxheapify(arr, largest, heaplength); 
        } 
        return arr; 
    } 
 } 
```

在C ++中实现

```cpp
#include <iostream> 
 using namespace std; 
 void heapify(int arr[], int n, int i) 
 { 
    int largest = i; 
    int l = 2*i + 1; 
    int r = 2*i + 2; 
    if (l < n && arr[l] > arr[largest]) 
        largest = l; 
    if (r < n && arr[r] > arr[largest]) 
        largest = r; 
    if (largest != i) 
    { 
        swap(arr[i], arr[largest]); 
 
 
        heapify(arr, n, largest); 
    } 
 } 
 
 
 void heapSort(int arr[], int n) 
 { 
 
    for (int i = n / 2 - 1; i >= 0; i--) 
        heapify(arr, n, i); 
 
 
    for (int i=n-1; i>=0; i--) 
    { 
 
        swap(arr[0], arr[i]); 
 
 
        heapify(arr, i, 0); 
    } 
 } 
 void printArray(int arr[], int n) 
 { 
    for (int i=0; i<n; ++i) 
        cout << arr[i] << " "; 
    cout << "\n"; 
 } 
 int main() 
 { 
    int arr[] = {12, 11, 13, 5, 6, 7}; 
    int n = sizeof(arr)/sizeof(arr[0]); 
 
    heapSort(arr, n); 
 
    cout << "Sorted array is \n"; 
    printArray(arr, n); 
 } 
```

### 可视化

*   [USFCA](https://www.cs.usfca.edu/~galles/visualization/HeapSort.html)
*   [HackerEarth](https://www.hackerearth.com/practice/algorithms/sorting/heap-sort/tutorial/)

#### 更多信息：

*   [维基百科](https://en.wikipedia.org/wiki/Quicksort)