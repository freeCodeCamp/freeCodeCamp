---
title: Insertion Sort
localeTitle: 插入排序
---
## 插入排序

插入排序是针对少量元素的最简单有效的排序算法。

### 例：

在插入排序中，将`key`元素与先前元素进行比较。如果前面的元素大于`key`元素，则将前一个元素移动到下一个位置。

从索引1开始到输入数组的大小。

\[8 3 5 1 4 2\]

步骤1 ：

！ [\[8 3 5 1 4 2\]](https://github.com/blulion/freecodecamp-resource/blob/master/insertion_sort/1.png?raw=true)
```
      key = 3 //starting from 1st index. 
 
      Here `key` will be compared with the previous elements. 
 
      In this case, `key` is compared with 8. since 8 > 3, move the element 8 
      to the next position and insert `key` to the previous position. 
 
      Result: [ 3 8 5 1 4 2 ] 
```

第2步 ：

！ [\[3 8 5 1 4 2\]](https://github.com/blulion/freecodecamp-resource/blob/master/insertion_sort/2.png?raw=true)
```
      key = 5 //2nd index 
 
      8 > 5 //move 8 to 2nd index and insert 5 to the 1st index. 
 
      Result: [ 3 5 8 1 4 2 ] 
```

第3步：

！ [\[3 5 8 1 4 2\]](https://github.com/blulion/freecodecamp-resource/blob/master/insertion_sort/3.png?raw=true)
```
      key = 1 //3rd index 
 
      8 > 1     => [ 3 5 1 8 4 2 ] 
 
      5 > 1     => [ 3 1 5 8 4 2 ] 
 
      3 > 1     => [ 1 3 5 8 4 2 ] 
 
      Result: [ 1 3 5 8 4 2 ] 
```

第4步 ：

！ [\[1 3 5 8 4 2\]](https://github.com/blulion/freecodecamp-resource/blob/master/insertion_sort/4.png?raw=true)
```
      key = 4 //4th index 
 
      8 > 4   => [ 1 3 5 4 8 2 ] 
 
      5 > 4   => [ 1 3 4 5 8 2 ] 
 
      3 > 4   ≠>  stop 
 
      Result: [ 1 3 4 5 8 2 ] 
```

第5步：

！ [\[1 3 4 5 8 2\]](https://github.com/blulion/freecodecamp-resource/blob/master/insertion_sort/5.png?raw=true)
```
      key = 2 //5th index 
 
      8 > 2   => [ 1 3 4 5 2 8 ] 
 
      5 > 2   => [ 1 3 4 2 5 8 ] 
 
      4 > 2   => [ 1 3 2 4 5 8 ] 
 
      3 > 2   => [ 1 2 3 4 5 8 ] 
 
      1 > 2   ≠> stop 
 
      Result: [1 2 3 4 5 8] 
```

！ [\[1 2 3 4 5 8\]](https://github.com/blulion/freecodecamp-resource/blob/master/insertion_sort/6.png?raw=true)

以下算法是略微优化的版本，以避免在每次迭代中交换`key`元素。这里， `key`元素将在迭代结束时交换（步骤）。

```
    InsertionSort(arr[]) 
      for j = 1 to arr.length 
         key = arr[j] 
         i = j - 1 
         while i > 0 and arr[i] > key 
            arr[i+1] = arr[i] 
            i = i - 1 
         arr[i+1] = key 
```

以下是Javascript中的详细实现：
```
function insertion_sort(A) { 
    var len = array_length(A); 
    var i = 1; 
    while (i < len) { 
        var x = A[i]; 
        var j = i - 1; 
        while (j >= 0 && A[j] > x) { 
            A[j + 1] = A[j]; 
            j = j - 1; 
        } 
        A[j+1] = x; 
        i = i + 1; 
    } 
 } 
```

Swift中的快速实现如下所示：

```swift
  var array = [8, 3, 5, 1, 4, 2] 
 
  func insertionSort(array:inout Array<Int>) -> Array<Int>{ 
      for j in 0..<array.count { 
          let key = array[j] 
          var i = j-1 
 
          while (i > 0 && array[i] > key){ 
              array[i+1] = array[i] 
              i = i-1 
          } 
          array[i+1] = key 
      } 
      return array 
  } 
```

Java示例如下所示：
```
public int[] insertionSort(int[] arr) 
      for (j = 1; j < arr.length; j++) { 
         int key = arr[j] 
         int i = j - 1 
         while (i > 0 and arr[i] > key) { 
            arr[i+1] = arr[i] 
            i -= 1 
         } 
         arr[i+1] = key 
      } 
      return arr; 
```

### 在...中插入排序。

```C
void insertionSort(int arr[], int n) 
 { 
   int i, key, j; 
   for (i = 1; i < n; i++) 
   { 
       key = arr[i]; 
       j = i-1; 
       while (j >= 0 && arr[j] > key) 
       { 
           arr[j+1] = arr[j]; 
           j = j-1; 
       } 
       arr[j+1] = key; 
   } 
 } 
```

### 属性：

*   空间复杂度：O（1）
*   时间复杂度：O（n），O（n \* n），O（n \* n）分别为最佳，平均，最差情况
*   排序到位：是的
*   稳定：是的

#### 其他资源：

*   [维基百科](https://en.wikipedia.org/wiki/Insertion_sort)
*   [CS50 - YouTube](https://youtu.be/TwGb6ohsvUU)
*   [SortInsertion - GeeksforGeeks，YouTube](https://www.youtube.com/watch?v=wObxd4Kx8sE)
*   [插入排序可视化](https://www.hackerearth.com/practice/algorithms/sorting/insertion-sort/visualize/)