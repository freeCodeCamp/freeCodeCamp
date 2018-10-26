---
title: Nesting For Loops
localeTitle: 嵌套循环
---
## 嵌套循环

**如果卡住，请记得使用Read-Search-Ask。尝试配对程序：半身像_在_剪影：并编写自己的代码：铅笔：**

：checkered\_flag： **问题说明：**

如果您有一个多维数组，则可以使用与先前路点相同的逻辑来遍历数组和任何子数组。

这是一个例子：
```
var arr = [ 
  [1,2], [3,4], [5,6] 
 ]; 
 for (var i=0; i < arr.length; i++) { 
  for (var j=0; j < arr[i].length; j++) { 
    console.log(arr[i][j]); 
  } 
 } 
```

这个输出在每个子元件`arr`一次一个。注意，对于内部循环，我们检查arr \[i\]的长度，因为arr \[i\]本身就是一个数组。

*   修改函数`multiplyAll` ，使其乘以`product`变量乘以`arr`的子数组中的每个数字。
*   确保第二个for循环嵌套在第一个中。

**相关链接**

*   [在另一个阵列中嵌套一个阵列](https://guide.freecodecamp.org/certifications/javascript-algorithms-and-data-structures/basic-javascript/nest-one-array-within-another-array)
*   [使用For循环遍历数组](https://learn.freecodecamp.org/javascript-algorithms-and-data-structures/basic-javascript/iterate-through-an-array-with-a-for-loop)
*   [访问嵌套数组](https://learn.freecodecamp.org/javascript-algorithms-and-data-structures/basic-javascript/accessing-nested-arrays)

：speech\_balloon：提示：1

确保检查`length`而不是整个阵列。

_现在尝试解决问题_

：speech\_balloon：提示2

在乘以产品时同时使用`i`和`j` 。

_现在尝试解决问题_

：speech\_balloon：提示3

当您将子数组与`product`变量相乘时，请记住使用`arr[i]` 。

_现在尝试解决问题_

_扰流警报！_ ![](https://discourse-user-assets.s3.amazonaws.com/original/2X/2/2d6c412a50797771301e7ceabd554cef4edcd74d.gif)

**提前解决！**

：初学者： **基本代码解决方案：**
```
function multiplyAll(arr) { 
  var product = 1; 
  // Only change code below this line 
  for(var i=0; i < arr.length; i++){ 
    for (var j=0; j < arr[i].length; j++){ 
      product = product * arr[i][j]; 
    } 
  } 
  // Only change code above this line 
  return product; 
 } 
 
 // Modify values below to test your code 
 multiplyAll([[1,2],[3,4],[5,6,7]]); 
```

：rocket： **[运行代码](https://learn.freecodecamp.org/javascript-algorithms-and-data-structures/basic-javascript/nesting-for-loops/)**

**代码说明：**

*   我们检查的长度`arr`在`i`的for循环和`arr[i]`在长度`j` for循环。
*   我们将`product`变量自身乘以因为它等于1，然后将它乘以子数组。
*   要乘的两个子阵列是`arr[i]`和`j` 。

：剪贴板： **供稿说明：**

*   ：警告： **请勿**添加与任何现有解决方案类似的解决方案。如果您认为它相似但更好，那么尝试合并（或替换）现有的类似解决方案。
*   添加解决方案的说明。
*   将解决方案分为以下类别之一 - 基本，中级和高级。 ：红绿灯：
*   如果您添加了任何相关的主要内容，请仅添加您的用户名。 （：警告： _**不要**_删除任何现有的用户名）

请参阅：point\_right： [Wiki挑战解决方案模板](http://forum.freecodecamp.com/t/algorithm-article-template/14272)以供参考。