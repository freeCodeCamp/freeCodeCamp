---
title: Repeat a String Repeat a String
localeTitle: 重复一个字符串重复字符串
---
![:triangular_flag_on_post:](https://forum.freecodecamp.com/images/emoji/emoji_one/triangular_flag_on_post.png?v=3 "：triangular_flag_on_post：")如果卡住，请记得使用**`Read-Search-Ask`** 。尝试配对程序![:busts_in_silhouette:](https://forum.freecodecamp.com/images/emoji/emoji_one/busts_in_silhouette.png?v=3 "：busts_in_silhouette：")并编写自己的代码![:pencil:](https://forum.freecodecamp.com/images/emoji/emoji_one/pencil.png?v=3 "：铅笔：")

### ![:checkered_flag:](https://forum.freecodecamp.com/images/emoji/emoji_one/checkered_flag.png?v=3 "：checkered_flag：")问题说明：

该程序非常简单，我们必须采用一个变量并返回该变量重复一定次数。无需添加空格或任何内容，只需将其重复一个单独的字符串即可。

#### 相关链接

*   [全局字符串对象](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)

## ![:speech_balloon:](https://forum.freecodecamp.com/images/emoji/emoji_one/speech_balloon.png?v=3 "：speech_balloon：")提示：1

您无法编辑字符串，您需要创建一个变量来存储新字符串。

> _现在尝试解决问题_

## ![:speech_balloon:](https://forum.freecodecamp.com/images/emoji/emoji_one/speech_balloon.png?v=3 "：speech_balloon：")提示：2

创建一个循环，根据需要多次重复代码。

> _现在尝试解决问题_

## ![:speech_balloon:](https://forum.freecodecamp.com/images/emoji/emoji_one/speech_balloon.png?v=3 "：speech_balloon：")提示：3

使创建的变量存储当前值并将单词附加到它。

> _现在尝试解决问题_

## 扰流警报！

![警告牌](//discourse-user-assets.s3.amazonaws.com/original/2X/2/2d6c412a50797771301e7ceabd554cef4edcd74d.gif)

**提前解决！**

## ![:beginner:](https://forum.freecodecamp.com/images/emoji/emoji_one/beginner.png?v=3 "：初学者：")基本代码解决方案
```
function repeatStringNumTimes(str, num) { 
  var accumulatedStr = ''; 
 
  while (num > 0) { 
    accumulatedStr += str; 
    num--; 
  } 
 
  return accumulatedStr; 
 } 
```

![:rocket:](https://forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=3 "：火箭：") [运行代码](https://repl.it/CLjU/19)

### 代码说明：

*   创建一个空字符串变量来存储重复的单词。
*   根据`num`使用while循环或for循环根据需要多次重复代码
*   然后我们只需要将字符串添加到在第一步中创建的变量，并根据设置循环的方式增加或减少`num` 。
*   在循环结束时，返回重复单词的变量。

#### 相关链接

*   JS while Loop
*   [JS for Loops解释](https://forum.freecodecamp.com/t/javascript-for-loop/14666s-Explained)

## ![:sunflower:](https://forum.freecodecamp.com/images/emoji/emoji_one/sunflower.png?v=3 "：向日葵：")中级代码解决方案：
```
function repeatStringNumTimes(str, num) { 
  if(num < 0) 
    return ""; 
  if(num === 1) 
    return str; 
  else 
    return str + repeatStringNumTimes(str, num - 1); 
 } 
```

![:rocket:](https://forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=3 "：火箭：") [运行代码](https://repl.it/CLjU/21)

### 代码说明：

*   此解决方案使用递归。
*   我们检查`num`是否为负数，如果为true则返回空字符串。
*   然后我们检查它是否等于1，在这种情况下我们返回字符串本身。
*   如果没有，我们将字符串添加到我们函数的调用中， `num`减少1，这将添加另一个`str`和另一个..直到最终`num`为1.并返回整个过程。

#### 相关链接

*   [函数 - 递归](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Functions#Recursion)

## ![:rotating_light:](https://forum.freecodecamp.com/images/emoji/emoji_one/rotating_light.png?v=3 "：rotating_light：")高级代码解决方案
```
function repeatStringNumTimes(str, num) { 
  return num > 0 ? str.repeat(num) : ''; 
 } 
 
 repeatStringNumTimes("abc", 3); 
```

![:rocket:](https://forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=3 "：火箭：") [运行代码](https://repl.it/CLjU/85)

### 代码说明：

*   该解决方案采用声明式方法。
*   它类似于第三种解决方案，除了它使用`if`语句的三元运算符形式。

#### 相关链接

*   [JS三元](https://forum.freecodecamp.com/t/javascript-ternary-operator/15973)

## ![:clipboard:](https://forum.freecodecamp.com/images/emoji/emoji_one/clipboard.png?v=3 "：剪贴板：")捐款说明：

*   ![:warning:](https://forum.freecodecamp.com/images/emoji/emoji_one/warning.png?v=3 "：警告：") **请勿**添加与任何现有解决方案类似的解决方案。如果您认为它**_相似但更好_** ，那么尝试合并（或替换）现有的类似解决方案。
*   添加解决方案的说明。
*   将解决方案分为以下类别之一 - **基本** ， **中级**和**高级** 。 ![:traffic_light:](https://forum.freecodecamp.com/images/emoji/emoji_one/traffic_light.png?v=3 "：红绿灯：")
*   如果您添加了任何**相关的主要内容，**请仅添加您的用户名。 （ ![:warning:](https://forum.freecodecamp.com/images/emoji/emoji_one/warning.png?v=3 "：警告：") **_不要_** _删除任何现有的用户名_ ）

> 看到![:point_right:](https://forum.freecodecamp.com/images/emoji/emoji_one/point_right.png?v=3 "：point_right：") [**`Wiki Challenge Solution Template`**](https://forum.freecodecamp.com/t/algorithm-article-template/14272)供参考。