---
title: Find the Longest Word in a String
localeTitle: 找到字符串中最长的单词
---
![:triangular_flag_on_post:](https://forum.freecodecamp.com/images/emoji/emoji_one/triangular_flag_on_post.png?v=3 "：triangular_flag_on_post：")如果卡住，请记得使用**`Read-Search-Ask`** 。尝试配对程序![:busts_in_silhouette:](https://forum.freecodecamp.com/images/emoji/emoji_one/busts_in_silhouette.png?v=3 "：busts_in_silhouette：")并编写自己的代码![:pencil:](https://forum.freecodecamp.com/images/emoji/emoji_one/pencil.png?v=3 "：铅笔：")

### ![:checkered_flag:](https://forum.freecodecamp.com/images/emoji/emoji_one/checkered_flag.png?v=3 "：checkered_flag：")问题说明：

你必须仔细检查每个单词并找出哪个单词最长并且不返回单词，而是返回它有多少个字符。

#### 相关链接

*   [JS字符串长度](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/length)

## ![:speech_balloon:](https://forum.freecodecamp.com/images/emoji/emoji_one/speech_balloon.png?v=3 "：speech_balloon：")提示：1

您应该将字符串拆分为单词数组。

> _现在尝试解决问题_

## ![:speech_balloon:](https://forum.freecodecamp.com/images/emoji/emoji_one/speech_balloon.png?v=3 "：speech_balloon：")提示：2

您需要找到一种方法来全局跟踪最大当前长度。

> _现在尝试解决问题_

## ![:speech_balloon:](https://forum.freecodecamp.com/images/emoji/emoji_one/speech_balloon.png?v=3 "：speech_balloon：")提示：3

还记得如何获取数组中元素的长度吗？ `Array[index].length` 。

> _现在尝试解决问题_

## 扰流警报！

![警告牌](//discourse-user-assets.s3.amazonaws.com/original/2X/2/2d6c412a50797771301e7ceabd554cef4edcd74d.gif)

**提前解决！**

## ![:beginner:](https://forum.freecodecamp.com/images/emoji/emoji_one/beginner.png?v=3 "：初学者：")基本代码解决方案
```
function findLongestWordLength(str) { 
  var words = str.split(' '); 
  var maxLength = 0; 
 
  for (var i = 0; i < words.length; i++) { 
    if (words[i].length > maxLength) { 
      maxLength = words[i].length; 
    } 
  } 
 
  return maxLength; 
 } 
```

![:rocket:](https://forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=3 "：火箭：") [运行代码](https://repl.it/CLjU/5)

### 代码说明：

取字符串并将其转换为单词数组。声明一个变量以跟踪最大长度并从0循环到单词数组的长度。

然后通过将当前单词与前一单词进行比较并存储新的最长单词来检查最长的单词。在循环结束时，只返回变量maxLength的数值。

#### 相关链接

*   [JS Array.length](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Array/length)

## ![:sunflower:](https://forum.freecodecamp.com/images/emoji/emoji_one/sunflower.png?v=3 "：向日葵：")中级代码解决方案：

**使用`.reduce()`**
```
function findLongestWordLength(s) { 
  return s.split(' ') 
    .reduce(function(x, y) { 
      return Math.max(x, y.length) 
    }, 0); 
 } 
```

![:rocket:](https://forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=3 "：火箭：") [运行代码](https://repl.it/CLjU/6)

### 代码说明：

有关`reduce`更多信息， [请单击此处。](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce)

如果您在回调函数之后想知道该`0` ，它将用于给`x`的初始值，以便`Math.max`知道从哪里开始。

#### 相关链接

*   [JS Reduce](http://forum.freecodecamp.com/t/javascript-array-prototype-reduce/14299)
*   [JS减少轻松](http://forum.freecodecamp.com/t/using-array-prototype-reduce-to-reduce-conceptual-boilerplate-for-problems-on-arrays/14687)
*   [JS Math Max](http://forum.freecodecamp.com/t/javascript-math-max/14682.md)

## ![:rotating_light:](https://forum.freecodecamp.com/images/emoji/emoji_one/rotating_light.png?v=3 "：rotating_light：")高级代码解决方案

**使用递归**
```
function findLongestWordLength(str) { 
 
  //split the string into individual words 
  //(important!!, you'll see why later) 
  str = str.split(" "); 
 
  //str only has 1 element left that is the longest element, 
  //return the length of that element 
  if(str.length == 1){ 
    return str[0].length; 
  } 
 
  //if the first element's length is greater than the second element's (or equal) 
  //remove the second element and recursively call the function) 
  if(str[0].length >= str[1].length){ 
    str.splice(1,1); 
    return findLongestWordLength(str.join(" ")); 
  } 
 
  //if the second element's length is greater thant the first element's start 
  //call the function past the first element 
  if(str[0].length <= str[1].length){ 
    // from the first element to the last element inclusive. 
    return findLongestWordLength(str.slice(1,str.length).join(" ")); 
  } 
 } 
```

![:rocket:](https://forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=3 "：火箭：") [运行代码](https://repl.it/CLjU/7)

### 代码说明：

第一行将字符串拆分为单个单词。然后我们检查`str`只有1个元素，那么这是最长的元素，我们返回它。如果第一个元素的长度大于第二个元素的长度（或等于），我们删除第二个元素并递归调用函数`findLongestWord` 。但是，如果第二个元素的长度大于第一个元素的开始，那么我们将函数调用到第一个元素之后。

#### 相关链接

*   [JS函数](https://www.youtube.com/watch?v=R8SjM4DKK80)
*   [递归基础](https://www.youtube.com/watch?v=k7-N8R0-KY4)

## ![:clipboard:](https://forum.freecodecamp.com/images/emoji/emoji_one/clipboard.png?v=3 "：剪贴板：")捐款说明：

*   ![:warning:](https://forum.freecodecamp.com/images/emoji/emoji_one/warning.png?v=3 "：警告：") **请勿**添加与任何现有解决方案类似的解决方案。如果您认为它**_相似但更好_** ，那么尝试合并（或替换）现有的类似解决方案。
*   添加解决方案的说明。
*   将解决方案分为以下类别之一 - **基本** ， **中级**和**高级** 。 ![:traffic_light:](https://forum.freecodecamp.com/images/emoji/emoji_one/traffic_light.png?v=3 "：红绿灯：")
*   如果您添加了任何**相关的主要内容，**请仅添加您的用户名。 （ ![:warning:](https://forum.freecodecamp.com/images/emoji/emoji_one/warning.png?v=3 "：警告：") **_不要_** _删除任何现有的用户名_ ）

> 看到![:point_right:](https://forum.freecodecamp.com/images/emoji/emoji_one/point_right.png?v=3 "：point_right：") [**`Wiki Challenge Solution Template`**](http://forum.freecodecamp.com/t/algorithm-article-template/14272)供参考。