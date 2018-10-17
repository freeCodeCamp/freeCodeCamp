---
title: Mutations
localeTitle: 突变
---
![:triangular_flag_on_post:](https://forum.freecodecamp.com/images/emoji/emoji_one/triangular_flag_on_post.png?v=3 "：triangular_flag_on_post：")如果卡住，请记得使用**`Read-Search-Ask`** 。尝试配对程序![:busts_in_silhouette:](https://forum.freecodecamp.com/images/emoji/emoji_one/busts_in_silhouette.png?v=3 "：busts_in_silhouette：")并编写自己的代码![:pencil:](https://forum.freecodecamp.com/images/emoji/emoji_one/pencil.png?v=3 "：铅笔：")

### ![:checkered_flag:](https://forum.freecodecamp.com/images/emoji/emoji_one/checkered_flag.png?v=3 "：checkered_flag：")问题说明：

*   如果数组的第一个元素中的字符串包含数组的第二个元素中字符串的所有字母，则返回true。

#### 相关链接

*   [String.indexOf（）](http://forum.freecodecamp.com/t/javascript-string-prototype-indexof/15936)

## ![:speech_balloon:](https://forum.freecodecamp.com/images/emoji/emoji_one/speech_balloon.png?v=3 "：speech_balloon：")提示：1

*   如果一切都是小写的，那么比较会更容易。

> _现在尝试解决问题_

## ![:speech_balloon:](https://forum.freecodecamp.com/images/emoji/emoji_one/speech_balloon.png?v=3 "：speech_balloon：")提示：2

*   如果它们是字符数组，我们的字符串可能更容易使用。

> _现在尝试解决问题_

## ![:speech_balloon:](https://forum.freecodecamp.com/images/emoji/emoji_one/speech_balloon.png?v=3 "：speech_balloon：")提示：3

*   循环可能会有所帮助。使用`indexOf()`检查第二个单词的字母是否在第一个单词上。

> _现在尝试解决问题_

## 扰流警报！

![警告牌](//discourse-user-assets.s3.amazonaws.com/original/2X/2/2d6c412a50797771301e7ceabd554cef4edcd74d.gif)

**提前解决！**

## ![:beginner:](https://forum.freecodecamp.com/images/emoji/emoji_one/beginner.png?v=3 "：初学者：")基本代码解决方案

**程序**
```
function mutation(arr) { 
  var test = arr[1].toLowerCase(); 
  var target = arr[0].toLowerCase(); 
  for (var i=0;i<test.length;i++) { 
    if (target.indexOf(test[i]) < 0) 
      return false; 
  } 
  return true; 
 } 
```

![:rocket:](https://forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=3 "：火箭：") [运行代码](https://repl.it/CLjU/30)

### 代码说明：

首先，我们将数组中的两个字符串设为小写。 `test`将保持我们在`target`中寻找的东西。  
然后我们遍历我们的测试字符，如果找不到任何一个，我们`return false` 。

如果_都_发现他们时，循环完成，而无需返回任何东西，我们开始`return true` 。

#### 相关链接

*   [String.toLowerCase（）](http://forum.freecodecamp.com/t/javascript-string-prototype-tolowercase/15948)
*   [对于循环](http://forum.freecodecamp.com/t/javascript-for-loop/14666s-Explained)

## ![:sunflower:](https://forum.freecodecamp.com/images/emoji/emoji_one/sunflower.png?v=3 "：向日葵：")中级代码解决方案：

**陈述**
```
function mutation(arr) { 
  return arr[1].toLowerCase() 
    .split('') 
    .every(function(letter) { 
      return arr[0].toLowerCase() 
        .indexOf(letter) != -1; 
    }); 
 } 
```

![:rocket:](https://forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=3 "：火箭：") [运行代码](https://repl.it/CLjU/31)

### 代码说明：

抓住第二个字符串，小写并将其转换为数组;然后确保它的_每个_ _字母_都是小写的第一个字符串的一部分。

`Every`人基本上都会给你一个字母来比较，我们通过在第一个字符串上使用`indexOf`来做。如果缺少当前`letter` `indexOf`将给出-1。我们检查不是这种情况，因为如果这种情况发生，即使`every`都是假的。

#### 相关链接

*   [Array.split（）](http://forum.freecodecamp.com/t/javascript-string-prototype-split/15944)
*   [Array.every（）](http://forum.freecodecamp.com/t/javascript-array-prototype-every/14287)

## ![:clipboard:](https://forum.freecodecamp.com/images/emoji/emoji_one/clipboard.png?v=3 "：剪贴板：")捐款说明：

*   ![:warning:](https://forum.freecodecamp.com/images/emoji/emoji_one/warning.png?v=3 "：警告：") **请勿**添加与任何现有解决方案类似的解决方案。如果您认为它**_相似但更好_** ，那么尝试合并（或替换）现有的类似解决方案。
*   添加解决方案的说明。
*   将解决方案分为以下类别之一 - **基本** ， **中级**和**高级** 。 ![:traffic_light:](https://forum.freecodecamp.com/images/emoji/emoji_one/traffic_light.png?v=3 "：红绿灯：")
*   如果您添加了任何**相关的主要内容，**请仅添加您的用户名。 （ ![:warning:](https://forum.freecodecamp.com/images/emoji/emoji_one/warning.png?v=3 "：警告：") **_不要_** _删除任何现有的用户名_ ）

> 看到![:point_right:](https://forum.freecodecamp.com/images/emoji/emoji_one/point_right.png?v=3 "：point_right：") [**`Wiki Challenge Solution Template`**](http://forum.freecodecamp.com/t/algorithm-article-template/14272)供参考。