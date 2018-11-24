---
title: Drop it
localeTitle: 算了吧
---
![](//discourse-user-assets.s3.amazonaws.com/original/2X/2/236dcca68bf55be37bf7cbb9646f6e0156b4a3c3.png)

![:triangular_flag_on_post:](https://forum.freecodecamp.com/images/emoji/emoji_one/triangular_flag_on_post.png?v=3 "：triangular_flag_on_post：")如果卡住，请记得使用**`Read-Search-Ask`** 。尝试配对程序![:busts_in_silhouette:](https://forum.freecodecamp.com/images/emoji/emoji_one/busts_in_silhouette.png?v=3 "：busts_in_silhouette：")并编写自己的代码![:pencil:](https://forum.freecodecamp.com/images/emoji/emoji_one/pencil.png?v=3 "：铅笔：")

### ![:checkered_flag:](https://forum.freecodecamp.com/images/emoji/emoji_one/checkered_flag.png?v=3 "：checkered_flag：")问题说明：

基本上，虽然第二个参数不正确，但您必须从作为第一个参数传递的数组左侧删除第一个元素。

#### 相关链接

*   [参数对象](http://forum.freecodecamp.com/t/javascript-arguments/14283)
*   [Array.shift（）](http://forum.freecodecamp.com/t/javascript-array-prototype-shift/14301)
*   [Array.slice（）](http://forum.freecodecamp.com/t/javascript-array-prototype-slice/14302)

## ![:speech_balloon:](https://forum.freecodecamp.com/images/emoji/emoji_one/speech_balloon.png?v=3 "：speech_balloon：")提示：1

您可以使用您应该更熟悉的`Array.prototype.shift()`或过滤器来在几行代码中解决此问题。

> _现在尝试解决问题_

## ![:speech_balloon:](https://forum.freecodecamp.com/images/emoji/emoji_one/speech_balloon.png?v=3 "：speech_balloon：")提示：2

Shift返回我们不需要的被删除的元素，我们需要的只是剩下的修改过的数组。

> _现在尝试解决问题_

## ![:speech_balloon:](https://forum.freecodecamp.com/images/emoji/emoji_one/speech_balloon.png?v=3 "：speech_balloon：")提示：3

如果你仍然无法弄清楚如何用shift来解决它，那么尝试使用filter来解决它，并检查过滤器是如何工作的，如果你熟悉它，那么你可以使用shift来制作代码。

> _现在尝试解决问题_

## 扰流警报！

![警告牌](//discourse-user-assets.s3.amazonaws.com/original/2X/2/2d6c412a50797771301e7ceabd554cef4edcd74d.gif)

**提前解决！**

## ![:beginner:](https://forum.freecodecamp.com/images/emoji/emoji_one/beginner.png?v=3 "：初学者：")基本代码解决方案
```
function dropElements(arr, func) { 
  // drop them elements. 
  var times = arr.length; 
  for (var i = 0; i < times; i++) { 
    if (func(arr[0])) { 
      break; 
    } else { 
      arr.shift(); 
    } 
  } 
  return arr; 
 } 
 
 // test here 
 dropElements([1, 2, 3, 4], function(n) {return n >= 3;}) 
```

![:rocket:](https://forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=3 "：火箭：") [运行代码](https://repl.it/CLna/0)

### 代码说明：

*   创建一个for循环来检查每个元素。
*   然后检查给定的函数是否为true然后停止，否则删除该元素。
*   返回数组。

#### 相关链接

*   [对于循环](http://forum.freecodecamp.com/t/javascript-for-loop/14666)
*   [更多关于for循环](http://forum.freecodecamp.com/t/javascript-for-loop/14666s-Explained)

## ![:sunflower:](https://forum.freecodecamp.com/images/emoji/emoji_one/sunflower.png?v=3 "：向日葵：")中级代码解决方案：
```
function dropElements(arr, func) { 
  return arr.slice(arr.findIndex(func) >= 0 ? arr.findIndex(func): arr.length, arr.length); 
 } 
 
 // test here 
 dropElements([1, 2, 3, 4], function(n) {return n >= 3;}); 
```

![:rocket:](https://forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=3 "：火箭：") [运行代码](https://repl.it/CLnc/0)

### 代码说明：

*   使用ES6 `findIndex()`函数查找传递条件的元素的索引
*   从找到的索引切割数组直到结束
*   有一个边缘案例！如果没有满足任何元素的条件'findIndex'将返回`-1` ，这会混淆`slice()`的输入。在这种情况下，使用简单的条件运算符返回`false`而不是`-1` 。和三元运算符（？ ![:slight_smile:](https://forum.freecodecamp.com/images/emoji/emoji_one/slight_smile.png?v=3 "：slight_smile：")当条件为`true`时返回所需元素的索引，否则返回数组的长度，以便返回值为指示的空数组。

#### 相关链接

*   [findIndex（）](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/findIndex)
*   [条件运算符](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Conditional_Operator)

## ![:rotating_light:](https://forum.freecodecamp.com/images/emoji/emoji_one/rotating_light.png?v=3 "：rotating_light：")高级代码解决方案
```
function dropElements(arr, func) { 
  while(arr.length > 0 && !func(arr[0])) { 
    arr.shift(); 
  } 
  return arr; 
 } 
 
 // test here 
 dropElements([1, 2, 3, 4], function(n) {return n >= 3;}); 
```

![:rocket:](https://forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=3 "：火箭：") [运行代码](https://repl.it/CLnf/0)

### 代码说明

*   使用带有`Array.prototype.shift()`的while循环继续检查并删除数组的第一个元素，直到函数返回true。它还确保数组首先不为空以避免无限循环。
*   返回已过滤的数组。

#### 相关链接

*   [循环](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/while)

## ![:clipboard:](https://forum.freecodecamp.com/images/emoji/emoji_one/clipboard.png?v=3 "：剪贴板：")捐款说明：

*   ![:warning:](https://forum.freecodecamp.com/images/emoji/emoji_one/warning.png?v=3 "：警告：") **请勿**添加与任何现有解决方案类似的解决方案。如果您认为它**_相似但更好_** ，那么尝试合并（或替换）现有的类似解决方案。
*   添加解决方案的说明。
*   将解决方案分为以下类别之一 - **基本** ， **中级**和**高级** 。 ![:traffic_light:](https://forum.freecodecamp.com/images/emoji/emoji_one/traffic_light.png?v=3 "：红绿灯：")
*   如果您添加了任何**相关的主要内容，**请仅添加您的用户名。 （ ![:warning:](https://forum.freecodecamp.com/images/emoji/emoji_one/warning.png?v=3 "：警告：") **_不要_** _删除任何现有的用户名_ ）

> 看到![:point_right:](https://forum.freecodecamp.com/images/emoji/emoji_one/point_right.png?v=3 "：point_right：") [**`Wiki Challenge Solution Template`**](http://forum.freecodecamp.com/t/algorithm-article-template/14272)供参考。