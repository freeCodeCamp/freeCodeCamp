---
title: Freecodecamp Algorithm Insertion Sort Guide
localeTitle: Freecodecamp算法插入排序指南
---
插入排序是基于[_比较_的排序](https://en.wikipedia.org/wiki/Comparison_sort) 。排序算法是基于比较的，如果它使用比较运算符（例如`less than`和`greated than` ）来查找两个数字之间的顺序。

在这种排序技术中，我们始终在列表的较低位置维护一个已排序的子列表，然后我们从列表的其余部分中取一个元素并将其插入到正确的位置。我们这样做，直到所有元素都插入到子列表中。例如，在玩扑克牌时，我们会将牌分类。从左侧开始向右移动，我们继续将卡插入正确的位置直至结束。

## 例

![插入排序](//discourse-user-assets.s3.amazonaws.com/original/2X/2/289cddf207e54981a05b56d9c267d078ed827c8b.png)

在上面的示例中， `grey shaded`子列表始终排序。请注意，在开始的时候，子列表包含ONY一个元素， _平凡_排序。然后在每一步我们将`white shaded`子列表的最左边元素插入其正确的位置。

因此，我们以这种方式对完整列表进行了排序。

## 算法
```
Loop for i=0 to N-1: 
 * Pick element array<a href='https://repl.it/CWZq' target='_blank' rel='nofollow'>i] and insert it into sorted sublist array[0...i-1] 
```

## 复杂
```
Space complexity: O(1)      // Auxillary/temporary space is used. 
 
 Time complexity: O(n*n)     // Two nested for loops are used. 
```

## C ++实现
```
// Function to sort an array using insertion sort 
 void insertionSort(int arr[], int n) 
 { 
   int i, key, j; 
   for (i = 1; i < n; i++) 
   { 
       key = arr[i]; 
       j = i-1; 
 
       /* Move elements of arr[0..i-1], that are greater than key, 
      to one position ahead of their current position */ 
   while (j >= 0 && arr[j] > key) 
   { 
       arr[j+1] = arr[j]; 
       j = j-1; 
   } 
   arr[j+1] = key; // place element key at it's correct place 
   } 
 } 
 
 int main() 
 { 
    // array to be sorted 
    int arr[5] = {12, 11, 13, 5, 6}; 
 
    // call the insertion sort 
 insertionSort(arr, 5); 
 
 // prints sorted array ie 5 6 11 12 13 
 for(int i=0; i<5; i++) 
    std::cout << arr[i] << " "; 
 return 0; 
 } 
```

：rocket：\[运行代码## Python实现
```
# Function to perform insertion sort 
 def insertionSort(arr): 
    # Traverse through array 
    for i in range(1, len(arr)): 
        key = arr<a href='https://forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=3 ":rocket:"' target='_blank' rel='nofollow'>i] 
        # Move elements of arr[0..i-1], that are greater than key, 
        # to one position ahead of their current position 
        j = i-1 
        while j>=0 and key < arr[j] : 
                arr[j+1] = arr[j] 
                j -= 1 
        arr[j+1] = key # place element key at it's correct place 
 
 # array to be sorted 
 arr = [12, 11, 13, 5, 6] 
 # call the insertion sort 
 insertionSort(arr) 
 # prints sorted array ie 5 6 11 12 13 
 for i in range(len(arr)): 
    print(arr[i],end = ' ') 
```

![:rocket:](https://forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=3 "：火箭：") [运行代码](https://repl.it/CWZi)

## 好处

1.  适用于几乎排序的小型数据和数据集。
2.  简单实施。
3.  通常比冒泡排序和选择排序更好，通常与合并排序一起使用。

## 缺点

1.  与合并排序，堆排序和快速排序相比，它在大型数据集上的效率较低。