---
title: Spinal Tap Case
localeTitle: 脊椎龙头套
---
![:triangular_flag_on_post:](https://forum.freecodecamp.com/images/emoji/emoji_one/triangular_flag_on_post.png?v=3 "：triangular_flag_on_post：")如果卡住，请记得使用**`Read-Search-Ask`** 。尝试配对程序![:busts_in_silhouette:](https://forum.freecodecamp.com/images/emoji/emoji_one/busts_in_silhouette.png?v=3 "：busts_in_silhouette：")并编写自己的代码![:pencil:](https://forum.freecodecamp.com/images/emoji/emoji_one/pencil.png?v=3 "：铅笔：")

### ![:checkered_flag:](https://forum.freecodecamp.com/images/emoji/emoji_one/checkered_flag.png?v=3 "：checkered_flag：")问题说明：

将给定的字符串转换为带有由短划线连接的单词的小写句子。

#### 相关链接

*   [字符串全局对象](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)
*   JS Regex资源
*   [JS字符串原型替换](http://forum.freecodecamp.com/t/javascript-string-prototype-replace/15942)
*   [JS String Prototype ToLowerCase](http://forum.freecodecamp.com/t/javascript-string-prototype-tolowercase/15948)

## ![:speech_balloon:](https://forum.freecodecamp.com/images/emoji/emoji_one/speech_balloon.png?v=3 "：speech_balloon：")提示：1

为所有空格和下划线创建正则表达式。

> _现在尝试解决问题_

## ![:speech_balloon:](https://forum.freecodecamp.com/images/emoji/emoji_one/speech_balloon.png?v=3 "：speech_balloon：")提示：2

您还必须将所有内容都设为小写。

> _现在尝试解决问题_

## ![:speech_balloon:](https://forum.freecodecamp.com/images/emoji/emoji_one/speech_balloon.png?v=3 "：speech_balloon：")提示：3

棘手的部分是让正则表达式部分工作，一旦你这样做，然后只需将大写字母转换为小写，并使用`replace()`用下划线替换空格。

> _现在尝试解决问题_

## 扰流警报！

![警告牌](//discourse-user-assets.s3.amazonaws.com/original/2X/2/2d6c412a50797771301e7ceabd554cef4edcd74d.gif)

**提前解决！**

## ![:beginner:](https://forum.freecodecamp.com/images/emoji/emoji_one/beginner.png?v=3 "：初学者：")基本代码解决方案
```
function spinalCase(str) { 
  // Create a variable for the white space and underscores. 
  var regex = /\s+|_+/g; 
 
  // Replace low-upper case to low-space-uppercase 
  str = str.replace(/([az])([AZ])/g, '$1 $2'); 
 
  // Replace space and underscore with - 
  return str.replace(regex, '-').toLowerCase(); 
 } 
 
 // test here 
 spinalCase('This Is Spinal Tap'); 
```

![:rocket:](https://forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=3 "：火箭：") [运行代码](https://repl.it/CLnS/0)

### 代码说明：

*   **正则表达式**包含正则表达式`/\s+|_+/g` ，它将选择所有空格和下划线。
*   第一个`replace()`在字符串**str中**遇到任何大写字符之前放置一个空格，以便稍后可以用短划线替换空格。
*   返回字符串时，另一个`replace()`使用**正则表达式**用空格替换空格和下划线。

## ![:sunflower:](https://forum.freecodecamp.com/images/emoji/emoji_one/sunflower.png?v=3 "：向日葵：")中级代码解决方案：
```
function spinalCase(str) { 
  // Replace low-upper case to low-space-uppercase 
  str = str.replace(/([az])([AZ])/g, '$1 $2'); 
  // Split on whitespace and underscores and join with dash 
  return str.toLowerCase().split(/(?:_| )+/) .join('-'); 
 } 
 
 // test here 
 spinalCase('This Is Spinal Tap'); 
```

![:rocket:](https://forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=3 "：火箭：") [运行代码](https://repl.it/CLnT/0)

### 代码说明：

*   与第一个解决方案类似，第一个`replace()`在字符串**str中**遇到任何大写字符之前放置一个空格，以便稍后可以用短划线替换空格。
*   这里的字符串是正则表达式`/(?:_| )+/`和`join()` `-` ed on `-`上的`split()` ，而不是使用`replace()`来替换空格和下划线。

#### 相关链接

*   [JS String Prototype Split](http://forum.freecodecamp.com/t/javascript-string-prototype-split/15944)
*   [JS Array Prototype Join](http://forum.freecodecamp.com/t/javascript-array-prototype-join/14292)

## ![:rotating_light:](https://forum.freecodecamp.com/images/emoji/emoji_one/rotating_light.png?v=3 "：rotating_light：")高级代码解决方案
```
function spinalCase(str) { 
  // "It's such a fine line between stupid, and clever." 
  // --David St. Hubbins 
 
  return str.split(/\s|_|(?=[AZ])/).join('-').toLowerCase() 
 } 
```

![:rocket:](https://forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=3 "：火箭：") [运行代码](https://repl.it/EUZV)

### 代码说明：

*   在以下条件之一拆分字符串（ _转换为数组_ ）
    *   遇到空白字符\[ `\s` \]
    *   遇到下划线字符\[ `_` \]
    *   或后跟大写字母\[ `(?=[AZ])` \]
*   使用连字符（ `-` ）加入数组
*   小写整个结果字符串

#### 相关链接

*   [串＃分裂](http://devdocs.io/javascript/global_objects/string/split)
*   [正则表达式](http://devdocs.io/javascript/global_objects/regexp)
*   [Arrray＃加盟](http://devdocs.io/javascript/global_objects/array/join)
*   [串＃toLowerCase](http://devdocs.io/javascript/global_objects/string/tolowercase)

## ![:clipboard:](https://forum.freecodecamp.com/images/emoji/emoji_one/clipboard.png?v=3 "：剪贴板：")捐款说明：

*   ![:warning:](https://forum.freecodecamp.com/images/emoji/emoji_one/warning.png?v=3 "：警告：") **请勿**添加与任何现有解决方案类似的解决方案。如果您认为它**_相似但更好_** ，那么尝试合并（或替换）现有的类似解决方案。
*   添加解决方案的说明。
*   将解决方案分为以下类别之一 - **基本** ， **中级**和**高级** 。 ![:traffic_light:](https://forum.freecodecamp.com/images/emoji/emoji_one/traffic_light.png?v=3 "：红绿灯：")
*   如果您添加了任何**相关的主要内容，**请仅添加您的用户名。 （ ![:warning:](https://forum.freecodecamp.com/images/emoji/emoji_one/warning.png?v=3 "：警告：") **_不要_** _删除任何现有的用户名_ ）

> 看到![:point_right:](https://forum.freecodecamp.com/images/emoji/emoji_one/point_right.png?v=3 "：point_right：") [**`Wiki Challenge Solution Template`**](http://forum.freecodecamp.com/t/algorithm-article-template/14272)供参考。