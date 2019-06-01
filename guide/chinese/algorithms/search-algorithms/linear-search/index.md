---
title: Linear Search
localeTitle: 线性搜索
---
## 线性搜索

假设您有一个列表或一组项目。您正在搜索特定项目。你是怎样做的？

找到给定列表中的数字13。

![线性搜索1](https://i.imgur.com/ThkzYEV.jpg)

你只要查看清单就可以了！

![线性搜索2](https://i.imgur.com/K7HfCly.jpg)

现在，您如何告诉计算机找到它。

计算机在给定的时刻不能看到超过该值的值。因此它从数组中获取一个项目并检查它是否与您要查找的内容相同。

![线性搜索3](https://i.imgur.com/ZOSxeZD.jpg)

第一项不匹配。所以转到下一个。

![线性搜索4](https://i.imgur.com/SwKsPxD.jpg)

等等…

这样做直到找到匹配或直到检查完所有项目。

![线性搜索5](https://i.imgur.com/3AaViff.jpg)

在此算法中，您可以在找到项目时停止，然后无需进一步查看。

那么线性搜索操作需要多长时间？ 在最好的情况下，你可以幸运，你正在看的项目可能在阵列的第一个位置！ 但在最坏的情况下，您必须在最后一个位置找到项目之前或在您意识到该项目不在阵列中之前查看每个项目。

因此线性搜索的复杂性是：O（n）。

如果要搜索的元素主持第一个存储块，则复杂度为：O（1）。

JavaScript中的线性搜索功能代码如下所示。此函数返回我们在数组中查找的项的位置。如果该项不在数组中，则该函数将返回null。

### Javascript中的示例

```javascript
function linearSearch(arr, item) { 
  // Go through all the elements of arr to look for item. 
  for (var i = 0; i < arr.length; i++) { 
    if (arr[i] === item) { // Found it! 
      return i; 
    } 
  } 
 
  // Item not found in the array. 
  return null; 
 } 
```

### Ruby中的示例

```ruby
def linear_search(target, array) 
  counter = 0 
 
  while counter < array.length 
    if array[counter] == target 
      return counter 
    else 
      counter += 1 
    end 
  end 
  return nil 
 end 
```

### C ++中的示例

```cpp
int linear_search(int arr[],int n,int num) 
 { 
    for(int i=0;i<n;i++){ 
        if(arr[i]==num) 
            return i; 
   } 
   // Item not found in the array 
   return -1; 
 } 
```

### Python中的示例

```python
def linear_search(array, num): 
    for i in range(len(array)): 
        if (array[i]==num): 
            return i 
    return -1 
```

## 全球线性搜索

如果要搜索多个元素，该怎么办？例如，您想要查看数组中有多少5个。

目标= 5

数组= \[1,2,3,4,5,6,5,7,8,9,5\]

这个数组有3个5s的出现，我们想要返回所有这些数组的索引（它们在数组中的位置）。这称为全局线性搜索，您需要调整代码以返回找到目标元素的索引点数组。当您找到与目标匹配的索引元素时，索引点（计数器）将添加到结果数组中。如果它不匹配，代码将继续通过向计数器添加1继续移动到数组中的下一个元素。

```ruby
def global_linear_search(target, array) 
  counter = 0 
  results = [] 
 
  while counter < array.length 
    if array[counter] == target 
      results << counter 
      counter += 1 
    else 
      counter += 1 
    end 
  end 
 
  if results.empty? 
    return nil 
  else 
    return results 
  end 
 end 
```

## 为什么线性搜索效率不高

毫无疑问，线性搜索很简单，但由于它逐个比较每个元素，因此耗时，因此效率不高。如果我们必须从中找到一个数字，1000000个数字和数字位于最后一个位置，线性搜索技术将变得相当繁琐。所以，还要了解冒泡排序，快速排序等。

#### 相关视频：

#### 其他资源

[线性搜索 - CS50](https://www.youtube.com/watch?v=vZWfKBdSgXI)