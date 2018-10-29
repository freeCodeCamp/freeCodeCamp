---
title: Stand in Line
localeTitle: 站在队中
---
![:triangular_flag_on_post:](https://forum.freecodecamp.com/images/emoji/emoji_one/triangular_flag_on_post.png?v=3 "：triangular_flag_on_post：")如果卡住，请记得使用**`Read-Search-Ask`** 。尝试配对程序![:busts_in_silhouette:](https://forum.freecodecamp.com/images/emoji/emoji_one/busts_in_silhouette.png?v=3 "：busts_in_silhouette：")并编写自己的代码![:pencil:](https://forum.freecodecamp.com/images/emoji/emoji_one/pencil.png?v=3 "：铅笔：")

### ![:checkered_flag:](https://forum.freecodecamp.com/images/emoji/emoji_one/checkered_flag.png?v=3 "：checkered_flag：")问题说明：

在计算机科学中， _队列_是一种抽象的**数据结构** ，其中项目按顺序保存。可以在**队列**的后面添加新项目，并从**队列**的前面取出旧项目。

编写一个函数`nextInLine` ，它接受一个数组（ **arr** ）和一个数字（ **item** ）作为参数。将数字添加到数组的末尾，然后删除数组的第一个元素。然后， `nextInLine`函数应返回已删除的元素。

*   更改下面的代码`//Your Code here` ，最多`//Change this line` 。
*   确保您正在编辑`nextInLine`函数的内部。
*   使用您学习的数组函数将**项目**添加到数组**arr**的末尾。
*   使用您学习的数组函数从数组**arr中**删除第一个元素。
*   返回删除的元素。

#### 相关链接

*   [挑战：用push（）操纵数组](http://www.freecodecamp.com/challenges/manipulate-arrays-with-push)
*   [挑战：使用shift（）操纵数组](http://www.freecodecamp.com/challenges/manipulate-arrays-with-shift)
*   [挑战：将值传递给带参数的函数](http://www.freecodecamp.com/challenges/passing-values-to-functions-with-arguments)

## ![:speech_balloon:](https://forum.freecodecamp.com/images/emoji/emoji_one/speech_balloon.png?v=3 "：speech_balloon：")提示：1

`push()`方法将一个项添加到数组的末尾。

> _现在尝试解决问题_

## ![:speech_balloon:](https://forum.freecodecamp.com/images/emoji/emoji_one/speech_balloon.png?v=3 "：speech_balloon：")提示：2

`shift()`方法删除数组的第一个元素。它还返回删除的元素。

> _现在尝试解决问题_

## ![:speech_balloon:](https://forum.freecodecamp.com/images/emoji/emoji_one/speech_balloon.png?v=3 "：speech_balloon：")提示：3

函数`nextInLine`使用**arr**和**item** 。这些是测试将用于传递他们将测试的数组元素的内容。它允许该功能可重复使用。不要硬编码函数内的任何测试。

> _现在尝试解决问题_

## 扰流警报！

![警告牌](//discourse-user-assets.s3.amazonaws.com/original/2X/2/2d6c412a50797771301e7ceabd554cef4edcd74d.gif)

**提前解决！**

## ![:beginner:](https://forum.freecodecamp.com/images/emoji/emoji_one/beginner.png?v=3 "：初学者：")基本代码解决方案
```
function nextInLine(arr, item) { 
  // Your code here 
  arr.push(item); 
  var removed = arr.shift(); 
  return removed;  // Change this line 
 } 
```

### 代码说明：

*   在**arr**的末尾按下**项目** 。
*   在**arr**上调用`shift()`方法以获取第一个项目并将其存储在**已删除的**项目中。
*   返回**删除** 。

**示例运行**

*   测试`nextInLine([2,1]);`运行。
*   调用`nextInLine`函数。 **arr**成为\[2\]。 **项目**变为1。
*   `arr.push(item);`按1到\[2\]。所以**arr**现在是\[2,1\]。
*   `var removed = arr.shift();`删除第一个元素。所以**arr**现在是\[1\]。 2已被删除并存储在**已删除** 。
*   `return removed;`返回2。

**_注意_** ：您实际上并不需要**删除**变量。删除的元素可以使用`return arr.shift();`直接`return arr.shift();` 。