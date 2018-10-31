---
title: Common Array Methods
localeTitle: 常用数组方法
---
## 常用数组方法

Ruby Arrays构成了Ruby编程的核心基础，实际上是大多数语言。它被广泛使用，以便了解甚至记住一些最常用的数组方法是有益的。如果您想了解有关Ruby Arrays的更多信息，我们有[一篇关于它们的文章](https://guide.freecodecamp.org/ruby/ruby-arrays) 。

出于本指南的目的，我们的数组将如下：

“红宝石 array = \[0,1,2,3,4\]
```
#### .length 
 The .length method tallies the number of elements in your array and returns the count: 
```

红宝石 array.length => 5
```
#### .first 
 The .first method accesses the first element of the array, the element at index 0: 
```

红宝石 array.first => 0
```
#### .last 
 The .last method accesses the last element of the array: 
```

红宝石 array.last => 4
```
#### .take 
 The .take method returns the first n elements of the array: 
```

红宝石 array.take（3） => \[0,1,2\]
```
#### .drop 
 The .drop method returns the elements after n elements of the array: 
```

红宝石 array.drop（3） => \[3,4\]
```
#### array index 
 You can access a specific element in an array by accessing its index. If the index does not exist in the array, nil will be returned: 
```

红宝石 阵列\[2\] => 2

阵列\[5\] =>无
```
#### .pop 
 The .pop method will permantently remove the last element of an array: 
```

红宝石 array.pop => \[0,1,2,3\]
```
#### .shift 
 The .shift method will permantently remove the first element of an array and return this element: 
```

红宝石 array.shift => 0  
排列 => \[1,2,3,4\]
```
#### .push 
 The .push method will allow you to add an element to the end of an array: 
```

红宝石 的Array.push（99） => \[0,1,2,3,4,99\]
```
#### .unshift 
 The .unshift method will allow you to add an element to the beginning of an array: 
```

array = \[2,3\] array.unshift（1） => \[1,2,3\]
```
#### .delete 
 The .delete method removes a specified element from an array permanently: 
```

红宝石 array.delete（1） => \[0,2,3,4\]
```
#### .delete_at 
 The .delete_at method allows you to permanently remove an element of an array at a specified index: 
```

红宝石 array.delete\_at（0） => \[1,2,3,4\]
```
#### .reverse 
 The .reverse method reverses the array but does not mutate it (the original array stays as is): 
```

红宝石 array.reverse => \[4,3,2,1,0\]
```
#### .select 
 The .select method iterates over an array and returns a new array that includes any items that return true to the expression provided. 
```

红宝石 array = \[1,2,3,4,5,6,7,8,9,10\] array.select {| number |数> 4} => \[5,6,7,8,9,10\] 排列 => \[5,6,7,8,9,10\]
```
#### .include? 
 The include? method checks to see if the argument given is included in the array: 
```

红宝石 array = \[1,2,3,4,5\] => \[1,2,3,4,5\] array.include？（3） =>是的

#### .flatten

flatten方法可用于获取包含嵌套数组的数组并创建一维数组：

“红宝石 array = \[1,2，\[3,4,5\]，\[6,7\]\] array.flatten => \[1,2,3,4,5,6,7\]
```
#### .join 
 The .join method returns a string of all the elements of the array separated by a separator parameter. If the separator parameter is nil, the method uses an empty string as a separator between strings. 
```

红宝石 array.join >>“1234” array.join（“ _”） >> 1_ 2 _3_ 4“
```
#### .each 
 The .each method iterates over each element of the array, allowing you to perform actions on them. 
```

红宝石 array.each do | element | 放元素 结束 => 0 1 2 3 4
```
#### .map 
 The .map method is the same as the .collect method. The .map and .collect methods iterate over each element of the array, allowing you to perform actions on them. The .map and .collect methods differ from the .each method in that they return an array containing the transformed elements. 
```

红宝石 array.map {| element |元素\* 2} 放元素 结束 => 0 2 4 6 8
```
#### .uniq 
 The .uniq method takes in an array containing duplicate elements, and returns a copy of the array containing only unique elements--any duplicate elements are removed from the array. 
```

红宝石 array = \[1,1,2,2,3,3,3,4,4,4,4,5,6,7,8\] array.uniq => \[1,2,3,4,5,6,7,8\]
```
#### .concat 
 The .concat method appends the elements from an array to the original array. The .concat method can take in multiple arrays as an argument, which will in turn append multiple arrays to the original array. 
```

红宝石 array = \[0,1,2,3,4\] array.concat（\[5,6,7\]，\[8,9,10\]） => \[0,1,2,3,4,5,6,7,8,9,10\] \`\`\`

## 更多信息

*   [Ruby Array文档](http://ruby-doc.org/core-2.5.1/Array.html)