---
title: Missing Letters
localeTitle: 遗失的信件
---
![:triangular_flag_on_post:](https://forum.freecodecamp.com/images/emoji/emoji_one/triangular_flag_on_post.png?v=3 "：triangular_flag_on_post：")如果卡住，请记得使用**`Read-Search-Ask`** 。尝试配对程序![:busts_in_silhouette:](https://forum.freecodecamp.com/images/emoji/emoji_one/busts_in_silhouette.png?v=3 "：busts_in_silhouette：")并编写自己的代码![:pencil:](https://forum.freecodecamp.com/images/emoji/emoji_one/pencil.png?v=3 "：铅笔：")

### ![:checkered_flag:](https://forum.freecodecamp.com/images/emoji/emoji_one/checkered_flag.png?v=3 "：checkered_flag：")问题说明：

您将创建一个程序，它将从字符串中找到缺少的字母并将其返回。如果没有丢失的字母，程序应返回undefined。目前没有测试用例的字符串缺少多个字母，但如果有一个字母，则会使用递归。此外，字母始终按顺序提供，因此无需对它们进行排序。

#### 相关链接

*   [字符串全局对象](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)
*   [JS String Prototype CharCodeAt](http://forum.freecodecamp.com/t/javascript-string-prototype-charcodeat/15933)
*   使用String.fromCharCode

## ![:speech_balloon:](https://forum.freecodecamp.com/images/emoji/emoji_one/speech_balloon.png?v=3 "：speech_balloon：")提示：1

您需要使用说明中提供的两种方法将字符转换为ASCII代码。

> _现在尝试解决问题_

## ![:speech_balloon:](https://forum.freecodecamp.com/images/emoji/emoji_one/speech_balloon.png?v=3 "：speech_balloon：")提示：2

您必须按顺序检查ASCII代码的差异。使用图表会非常有帮助。

> _现在尝试解决问题_

## ![:speech_balloon:](https://forum.freecodecamp.com/images/emoji/emoji_one/speech_balloon.png?v=3 "：speech_balloon：")提示：3

你需要弄清楚丢失的字母在哪里，以及处理没有丢失字母的情况，因为它需要一个特定的返回值。

> _现在尝试解决问题_

## 扰流警报！

![警告牌](//discourse-user-assets.s3.amazonaws.com/original/2X/2/2d6c412a50797771301e7ceabd554cef4edcd74d.gif)

**提前解决！**

## ![:beginner:](https://forum.freecodecamp.com/images/emoji/emoji_one/beginner.png?v=3 "：初学者：")基本代码解决方案
```
function fearNotLetter(str) { 
 
  for(var i = 0; i < str.length; i++) { 
    /* code of current character */ 
    var code = str.charCodeAt(i); 
 
    /* if code of current character is not equal to first character + no of iteration 
    hence character has been escaped */ 
    if (code !== str.charCodeAt(0) + i) { 
 
      /* if current character has escaped one character find previous char and return */ 
      return String.fromCharCode(code - 1); 
    } 
  } 
  return undefined; 
 } 
 
 // test here 
 fearNotLetter("abce"); 
```

![:rocket:](https://forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=3 "：火箭：") [运行代码](https://repl.it/CLnD/0)

### 代码说明：

*   该解决方案使用`for`循环。
*   遇到的字符**代码**存储在**代码中** 。
*   通过使用逻辑 - `code of current character = code of first character + number of iterations`来检查当前字符的代码是否是预期的代码（不跳过任何字符）。
*   如果缺少某个字符，则会找到缺少的字符并返回最后一个字符串。
*   如果字符串中没有丢失的字符，则返回`undefined` 。

#### 相关链接

*   [JS for Loops解释](http://forum.freecodecamp.com/t/javascript-for-loop/14666s-Explained)
*   string.length减

## ![:sunflower:](https://forum.freecodecamp.com/images/emoji/emoji_one/sunflower.png?v=3 "：向日葵：")中级代码解决方案：
```
// Adding this solution for the sake of avoiding using 'for' and 'while' loops. 
 // See the explanation for reference as to why. It's worth the effort. 
 
 function fearNotLetter(str) { 
  var compare = str.charCodeAt(0), missing; 
 
  str.split('').map(function(letter,index) { 
    if (str.charCodeAt(index) == compare) { 
      ++compare; 
    } else { 
      missing = String.fromCharCode(compare); 
    } 
  }); 
 
  return missing; 
 } 
 
 // test here 
 fearNotLetter("abce"); 
```

![:rocket:](https://forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=3 "：火箭：") [运行代码](https://repl.it/CLnE/0)

### 代码说明：

*   首先，我们定义变量来存储字符串中第一个字母的字符代码，并存储我们可能找到的任何丢失的字母。
*   我们将字符串转换为数组，以便通过它进行映射，而不是使用`for`和`while`循环。
*   当我们通过字母的字符代码进行`map` ，我们将与应该在该位置的字符代码进行比较。
*   如果当前字母匹配，我们将比较变量移动到下一个位置，以便我们可以在下一个周期进行比较。
*   如果没有，丢失的字母将被分配给`missing`变量，该变量将在地图完成后返回。
*   如果没有丢失的字符，则返回`undefined` 。

#### 相关链接

*   [JS String Prototype Split](http://forum.freecodecamp.com/t/javascript-string-prototype-split/15944)
*   [JS阵列原型图](http://forum.freecodecamp.com/t/javascript-array-prototype-map/14294)

## ![:rotating_light:](https://forum.freecodecamp.com/images/emoji/emoji_one/rotating_light.png?v=3 "：rotating_light：")简化的高级代码解决方案：
```
function fearNotLetter(str) { 
  for (let i = 1; i < str.length; ++i) { 
    if (str.charCodeAt(i) - str.charCodeAt(i-1) > 1) { 
      return String.fromCharCode(str.charCodeAt(i - 1) + 1); 
    } 
  } 
 } 
```

### 代码说明：

*   循环遍历字符串
*   检查字符串中相邻字符之间字符代码的差异是否大于1（chack ASCII表）
*   返回丢失的字符（从检测到间隙的位置+1）

## ![:rotating_light:](https://forum.freecodecamp.com/images/emoji/emoji_one/rotating_light.png?v=3 "：rotating_light：")高级代码解决方案
```
function fearNotLetter(str) { 
  var allChars = ''; 
  var notChars = new RegExp('[^'+str+']','g'); 
 
  for (var i = 0; allChars[allChars.length-1] !== str[str.length-1] ; i++) 
    allChars += String.fromCharCode(str[0].charCodeAt(0) + i); 
 
  return allChars.match(notChars) ? allChars.match(notChars).join('') : undefined; 
 } 
 
 // test here 
 fearNotLetter("abce"); 
```

![:rocket:](https://forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=3 "：火箭：") [运行代码](https://repl.it/CLnG/0)

### 代码说明：

*   创建一个新字符串**allChars** 。
*   创建一个正则表达式**notChars** ，它选择除**str**之外的所有内容。
*   `for`循环用于将范围中的所有字母添加到**allChars** 。
*   `match()`用于从新创建的字符串中去除**str**字母并返回。
*   如果没有丢失的字符，则返回`undefined` 。

#### 相关链接

*   JS Regex资源
*   [JS三元](http://forum.freecodecamp.com/t/javascript-ternary-operator/15973)
*   [JS String Prototype Match](http://forum.freecodecamp.com/t/javascript-string-prototype-match/15941)
*   [JS Array Prototype Join](http://forum.freecodecamp.com/t/javascript-array-prototype-join/14292)

## ![:clipboard:](https://forum.freecodecamp.com/images/emoji/emoji_one/clipboard.png?v=3 "：剪贴板：")捐款说明：

*   ![:warning:](https://forum.freecodecamp.com/images/emoji/emoji_one/warning.png?v=3 "：警告：") **请勿**添加与任何现有解决方案类似的解决方案。如果您认为它**_相似但更好_** ，那么尝试合并（或替换）现有的类似解决方案。
*   添加解决方案的说明。
*   将解决方案分为以下类别之一 - **基本** ， **中级**和**高级** 。 ![:traffic_light:](https://forum.freecodecamp.com/images/emoji/emoji_one/traffic_light.png?v=3 "：红绿灯：")
*   如果您添加了任何**相关的主要内容，**请仅添加您的用户名。 （ ![:warning:](https://forum.freecodecamp.com/images/emoji/emoji_one/warning.png?v=3 "：警告：") **_不要_** _删除任何现有的用户名_ ）

> 看到![:point_right:](https://forum.freecodecamp.com/images/emoji/emoji_one/point_right.png?v=3 "：point_right：") [**`Wiki Challenge Solution Template`**](http://forum.freecodecamp.com/t/algorithm-article-template/14272)供参考。