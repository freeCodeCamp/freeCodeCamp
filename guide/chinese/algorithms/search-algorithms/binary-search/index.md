---
title: Binary Search
localeTitle: 二进制搜索
---
## 二进制搜索

二进制搜索通过将搜索间隔重复分成两半来定位已排序数组中的项。

如何在电话簿中搜索姓名？

一种方法是从第一页开始，查看电话簿中的每个名称，直到找到我们要查找的内容。但这将是一种极其费力且低效的搜索方式。

因为我们知道电话簿中的名称是按字母顺序排序的，所以我们可能会按照以下步骤进行操作：

1.  打开电话簿的中间页面
2.  如果它有我们想要的名字，我们就完成了！
3.  否则，丢弃不包含名称的电话簿的一半
4.  重复，直到找到名称或电话簿中没有剩余页面

时间复杂度：当我们在二进制搜索的每个步骤中处理搜索案例的一部分，并在另一半上执行搜索操作时，这导致最坏情况时间复杂度为_O_ （ _log 2 N_ ）。

空间复杂度：二进制搜索采用常量或_O_ （ _1_ ）空间意味着我们不进行任何与输入大小相关的变量定义。

对于小集合，线性搜索更好，但在较大的集合中，使用二进制搜索更有效。

详细地说，你有多少次N除以2，直到你有1？这基本上是说，做二元搜索（一半元素）直到找到它。在一个公式中，这将是这样的：
```
1 = N / 2x 
```

乘以2x：
```
2x = N 
```

现在做log2：
```
log2(2x)    = log2 N 
 x * log2(2) = log2 N 
 x * 1       = log2 N 
```

这意味着您可以将日志分为N次，直到您将所有内容分开。这意味着您必须将日志N（“执行二进制搜索步骤”）分开，直到找到您的元素。

_O_ （ _log 2 N_ ）是这样的，因为在每个步骤中数据集中的一半元素都消失了，这是由对数函数的基础证明的。

这是二进制搜索算法。它优雅而高效，但要正常工作，必须对数组进行**排序** 。

* * *

使用二进制搜索在给定的数字数组中找到5。

![二进制搜索1](https://i.imgur.com/QAuugOL.jpg)

标记阵列中的低位，高位和中位。

![二进制搜索2](https://i.imgur.com/1710fEx.jpg)

将您要查找的项目与中间元素进行比较。

![二进制搜索3](https://i.imgur.com/jr4icze.jpg)

丢掉左半边，看看右半边。

![二进制搜索4](https://i.imgur.com/W57lGsk.jpg)

再次与中间元素进行比较。

![二进制搜索5](https://i.imgur.com/5Twm8NE.jpg)

现在，移动到左半边。

![二进制搜索6](https://i.imgur.com/01xetay.jpg)

中间元素是我们正在寻找的项目！

二进制搜索算法采用分而治之的方法，其中数组被连续分割，直到找到项目或者直到没有剩余的元素用于检查。因此，可以递归地定义该算法以生成优雅的解决方案。

递归的两个基本情况是：

*   数组中没有剩余元素
*   找到物品

数据系统中二进制搜索的力量（B +树）： 二进制搜索树由于其O（log n）搜索时间而非常强大，其次是使用哈希键数据结构来搜索O（1）中的数据。了解log n运行时如何来自二叉搜索树的高度非常重要。如果每个节点分成两个节点（二进制），则树的深度为log n（基数2）。为了提高数据系统中的速度，我们使用B +树，因为它们具有更大的分支因子，并且因此更高。我希望这篇简短的文章有助于扩展您对实际系统中二进制搜索的使用方式的看法。

递归二进制搜索的代码如下所示：

### Javascript实现

```javascript
function binarySearch(arr, item, low, high) { 
    if (low > high) { // No more elements in the array. 
        return null; 
    } 
 
    // Find the middle of the array. 
    var mid = Math.ceil((low + high) / 2); 
 
    if (arr[mid] === item) { // Found the item! 
        return mid; 
    } 
 
    if (item < arr[mid]) { // Item is in the half from low to mid-1. 
        return binarySearch(arr, item, low, mid-1); 
    } 
 
    else { // Item is in the half from mid+1 to high. 
        return binarySearch(arr, item, mid+1, high); 
    } 
 } 
 
 var numbers = [1,2,3,4,5,6,7]; 
 print(binarySearch(numbers, 5, 0, numbers.length-1)); 
```

这是Javascript中的另一个实现：

```Javascript
function binary_search(a, v) { 
    function search(low, high) { 
        if (low === high) { 
            return a[low] === v; 
        } else { 
            var mid = math_floor((low + high) / 2); 
            return (v === a[mid]) 
                   || 
                   (v < a[mid]) 
                   ? search(low, mid - 1) 
                   : search(mid + 1, high); 
        } 
    } 
    return search(0, array_length(a) - 1); 
 } 
```

### Ruby实现

```ruby
def binary_search(target, array) 
  sorted_array = array.sort 
  low = 0 
  high = (sorted_array.length) - 1 
 
  while high >= low 
    middle = (low + high) / 2 
 
    if target > sorted_array[middle] 
      low = middle + 1 
    elsif target < sorted_array[middle] 
      high = middle - 1 
    else 
      return middle 
    end 
  end 
  return nil 
 end 
```

### C中的示例

```C
int binarySearch(int a[], int l, int r, int x) { 
   if (r >= l){ 
        int mid = l + (r - l)/2; 
        if (a[mid] == x) 
            return mid; 
        if (arr[mid] > x) 
            return binarySearch(arr, l, mid-1, x); 
        return binarySearch(arr, mid+1, r, x); 
   } 
   return -1; 
 } 
```

### C / C ++实现

```cpp
int binary_search(int arr[], int l, int r, int target) 
 { 
   if (r >= l) 
   { 
        int mid = l + (r - l)/2; 
        if (arr[mid] == target) 
            return mid; 
        if (arr[mid] > target) 
            return binary_search(arr, l, mid-1, target); 
        return binary_search(arr, mid+1, r, target); 
   } 
   return -1; 
 } 
```

### Python实现

```Python
def binary_search(arr, l, r, target): 
    if r >= l: 
        mid = l + (r - l)/2 
        if arr[mid] == target: 
            return mid 
        elif arr[mid] > target: 
            return binary_search(arr, l, mid-1, target) 
        else: 
            return binary_search(arr, mid+1, r, target) 
    else: 
        return -1 
```

### C ++中的示例

```cpp
// Binary Search using iteration 
 int binary_search(int arr[], int beg, int end, int num) 
 { 
    while(beg <= end){ 
        int mid = (beg + end) / 2; 
        if(arr[mid] == num) 
            return mid; 
        else if(arr[mid] < num) 
            beg = mid + 1; 
        else 
            end = mid - 1; 
    } 
    return -1; 
 } 
```

```cpp
// Binary Search using recursion 
 int binary_search(int arr[], int beg, int end, int num) 
 { 
    if(beg <= end){ 
        int mid = (beg + end) / 2; 
        if(arr[mid] == num) 
            return mid; 
        else if(arr[mid] < num) 
            return binary_search(arr, mid + 1, end, num); 
        else 
            return binary_search(arr, beg, mid - 1, num); 
    } 
    return -1; 
 } 
```

### C ++中的示例

递归方法！

\`\`\`C ++ - 递归方法 int binarySearch（int arr \[\]，int start，int end，int x） { if（结束> =开始） { int mid = start +（end - start）/ 2; if（arr \[mid\] == x）  
返回中间;
```
    if (arr[mid] > x) 
        return binarySearch(arr, start, mid-1, x); 
 
    return binarySearch(arr, mid+1, end, x); 
```

} 返回-1; }
```
Iterative approach! 
```

C ++ - 迭代方法 int binarySearch（int arr \[\]，int start，int end，int x） { while（开始<=结束） { int mid = start +（end - start）/ 2; if（arr \[mid\] == x） 返回中间; if（arr \[mid\] <x） start = mid + 1; 其他 结束=中 - 1; } 返回-1; } \`\`\`

### 更多信息

*   [二进制搜索（YouTube视频）](https://youtu.be/P3YID7liBug)
*   [二进制搜索 - CS50](https://www.youtube.com/watch?v=5xlIPT1FRcA)