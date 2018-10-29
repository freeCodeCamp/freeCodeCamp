---
title: Sum All Numbers in a Range
localeTitle: 求和范围中的所有数字
---
![:triangular_flag_on_post:](https://forum.freecodecamp.com/images/emoji/emoji_one/triangular_flag_on_post.png?v=3 "：triangular_flag_on_post：")如果卡住，请记得使用**`Read-Search-Ask`** 。尝试配对程序![:busts_in_silhouette:](https://forum.freecodecamp.com/images/emoji/emoji_one/busts_in_silhouette.png?v=3 "：busts_in_silhouette：")并编写自己的代码![:pencil:](https://forum.freecodecamp.com/images/emoji/emoji_one/pencil.png?v=3 "：铅笔：")

### ![:checkered_flag:](https://forum.freecodecamp.com/images/emoji/emoji_one/checkered_flag.png?v=3 "：checkered_flag：")问题说明：

您需要创建一个程序，该程序将采用两个不一定排序的数字的数组，然后不仅添加这些数字，而且还添加其间的任何数字。例如，\[3,1\]将与`1+2+3` ，而不仅仅是`3+1`

## ![:speech_balloon:](https://forum.freecodecamp.com/images/emoji/emoji_one/speech_balloon.png?v=3 "：speech_balloon：")提示：1

使用`Math.max()`查找两个数字的最大值。

> _现在尝试解决问题_

## ![:speech_balloon:](https://forum.freecodecamp.com/images/emoji/emoji_one/speech_balloon.png?v=3 "：speech_balloon：")提示：2

使用`Math.min()`查找两个数字的最小值。

> _现在尝试解决问题_

## ![:speech_balloon:](https://forum.freecodecamp.com/images/emoji/emoji_one/speech_balloon.png?v=3 "：speech_balloon：")提示：3

请记住，您必须在中间添加所有数字，这样才能获得这些数字。

> _现在尝试解决问题_

## 扰流警报！

![警告牌](//discourse-user-assets.s3.amazonaws.com/original/2X/2/2d6c412a50797771301e7ceabd554cef4edcd74d.gif)

**提前解决！**

## ![:beginner:](https://forum.freecodecamp.com/images/emoji/emoji_one/beginner.png?v=3 "：初学者：")基本代码解决方案
```
function sumAll(arr) { 
    var max = Math.max(arr[0], arr[1]); 
    var min = Math.min(arr[0], arr[1]); 
    var temp = 0; 
    for (var i=min; i <= max; i++){ 
        temp += i; 
    } 
  return(temp); 
 } 
 
 sumAll([1, 4]); 
```

![:rocket:](https://forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=3 "：火箭：") [运行代码](https://repl.it/CLm6/0)

### 代码说明：

*   首先创建一个变量来存储两个之间的最大数量。
*   与最小数字相同。
*   我们创建一个临时变量来添加数字。

由于数字可能并不总是有序，因此使用`max()`和`min()`将有助于组织。

#### 相关链接

*   [Math.max（）](http://forum.freecodecamp.com/t/javascript-math-max/14682)
*   [Math.min（）](http://forum.freecodecamp.com/t/javascript-math-min/14684)
*   [对于循环](http://forum.freecodecamp.com/t/javascript-for-loop/14666)

## ![:sunflower:](https://forum.freecodecamp.com/images/emoji/emoji_one/sunflower.png?v=3 "：向日葵：")中级代码解决方案：
```
function sumAll(arr) { 
  // Buckle up everything to one! 
 
  // Using ES6 arrow function (one-liner) 
  var sortedArr = arr.sort((a,b) => ab); 
  var firstNum = arr[0]; 
  var lastNum = arr[1]; 
  // Using Arithmetic Progression summing formula 
 
  var sum = (lastNum - firstNum + 1) * (firstNum + lastNum) / 2; 
  return sum; 
 } 
```

![:rocket:](https://forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=3 "：火箭：") [运行代码](https://repl.it/CLm7/0)

### 代码说明：

*   首先，我们创建一个名为`sortedArr`的变量，该变量将其从最低值到最高值进行排序。
*   `firstNum`等于第一个数字， `lastNum`等于第二个数字。
*   接下来，使用Arithmetic Progression求和公式，我们`sum` `(lastNum - firstNum + 1) * (firstNum + lastNum) / 2` 。
*   最后，我们返回`sum` 。

line `var sortedArr = arr.sort((a,b) => ab);`可能会让你更加困惑的是什么。这与创建一个为`sort()`返回`ab`的函数相同， `sort()`是从最小到最大排序数字的标准方法。相反，使用箭头或胖箭头功能，我们能够在一行中完成所有这些操作，从而允许我们减少写入。

#### 相关链接

*   [中的Array.sort（）](http://forum.freecodecamp.com/t/javascript-array-prototype-sort/14306)
*   [算术级数求和公式](https://en.wikipedia.org/wiki/Arithmetic_progression#Sum)
*   [ES6箭头功能](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions)

## ![:rotating_light:](https://forum.freecodecamp.com/images/emoji/emoji_one/rotating_light.png?v=3 "：rotating_light：")高级代码解决方案
```
function sumAll(arr) { 
    var sum = 0; 
    for (var i = Math.min(...arr); i <= Math.max(...arr); i++){ 
        sum += i; 
    } 
  return sum; 
 } 
 
 sumAll([1, 4]); 
```

![:rocket:](https://forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=3 "：火箭：") [运行代码](https://repl.it/CLm8/0)

### 代码说明：

*   创建变量sum以存储元素的总和。
*   从给定数组的min元素开始迭代循环，并在到达max元素时停止。
*   使用扩展运算符（... arr）允许将实际数组传递给函数而不是逐个元素。

#### 相关链接

*   [传播运营商](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_operator)
*   [在Math.max中使用Spread运算符（）](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/max)

## ![:clipboard:](https://forum.freecodecamp.com/images/emoji/emoji_one/clipboard.png?v=3 "：剪贴板：")捐款说明：

*   ![:warning:](https://forum.freecodecamp.com/images/emoji/emoji_one/warning.png?v=3 "：警告：") **请勿**添加与任何现有解决方案类似的解决方案。如果您认为它**_相似但更好_** ，那么尝试合并（或替换）现有的类似解决方案。
*   添加解决方案的说明。
*   将解决方案分为以下类别之一 - **基本** ， **中级**和**高级** 。 ![:traffic_light:](https://forum.freecodecamp.com/images/emoji/emoji_one/traffic_light.png?v=3 "：红绿灯：")
*   如果您添加了任何**相关的主要内容，**请仅添加您的用户名。 （ ![:warning:](https://forum.freecodecamp.com/images/emoji/emoji_one/warning.png?v=3 "：警告：") **_不要_** _删除任何现有的用户名_ ）

> 看到![:point_right:](https://forum.freecodecamp.com/images/emoji/emoji_one/point_right.png?v=3 "：point_right：") [**`Wiki Challenge Solution Template`**](http://forum.freecodecamp.com/t/algorithm-article-template/14272)供参考。