---
title: Telephone Number Validator
localeTitle: 电话号码验证器
---
![:triangular_flag_on_post:](https://forum.freecodecamp.com/images/emoji/emoji_one/triangular_flag_on_post.png?v=3 "：triangular_flag_on_post：")如果卡住，请记得使用**`Read-Search-Ask`** 。尝试配对程序![:busts_in_silhouette:](https://forum.freecodecamp.com/images/emoji/emoji_one/busts_in_silhouette.png?v=3 "：busts_in_silhouette：")并编写自己的代码![:pencil:](https://forum.freecodecamp.com/images/emoji/emoji_one/pencil.png?v=3 "：铅笔：")

### ![:checkered_flag:](https://forum.freecodecamp.com/images/emoji/emoji_one/checkered_flag.png?v=3 "：checkered_flag：")问题说明：

任务并不难理解，实施它是最难的部分。您有一个验证美国电话号码。这意味着需要一定数量的数字，而您不需要输入国家代码，您仍然需要区号并使用允许的少数格式之一。

#### 相关链接

*   [正则表达式](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp)
*   [regexpal.com](http://regexpal.com/)
*   [regex101.com/](https://regex101.com/#javascript)

## ![:speech_balloon:](https://forum.freecodecamp.com/images/emoji/emoji_one/speech_balloon.png?v=3 "：speech_balloon：")提示：1

没有办法绕过它，你需要提高你的正则表达能力。

> _现在尝试解决问题_

## ![:speech_balloon:](https://forum.freecodecamp.com/images/emoji/emoji_one/speech_balloon.png?v=3 "：speech_balloon：")提示：2

尝试使用上一个列表中的站点在创建时测试正则表达式。

> _现在尝试解决问题_

## ![:speech_balloon:](https://forum.freecodecamp.com/images/emoji/emoji_one/speech_balloon.png?v=3 "：speech_balloon：")提示：3

首先尝试让它验证示例中的每个格式，每个格式都应该换一个新行，一旦你全部选择它们，然后添加不应该选择的示例并确保它们没有被选中。

> _现在尝试解决问题_

## 扰流警报！

![警告牌](//discourse-user-assets.s3.amazonaws.com/original/2X/2/2d6c412a50797771301e7ceabd554cef4edcd74d.gif)

**提前解决！**

## ![:beginner:](https://forum.freecodecamp.com/images/emoji/emoji_one/beginner.png?v=3 "：初学者：")基本代码解决方案
```
function telephoneCheck(str) { 
   var regex = /^(1\s?)?(\(\d{3}\)|\d{3})[\s\-]?\d{3}[\s\-]?\d{4}$/; 
   return regex.test(str); 
 } 
 telephoneCheck("555-555-5555"); 
```

![:rocket:](https://forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=3 "：火箭：") [运行代码](https://repl.it/CLo9/0)

### 代码说明：

*   `^`表示字符串的开头。
*   `(1\s?)?`如果有，则允许“1”或“1”。
*   `\d{n}`检查确切的n位数，因此`\d{3}`检查三位数。
*   `x|y`检查x或y，因此`(\(\d{3}\)|\d{3})`检查括号括起的三个数字，或三个数字，没有括号。
*   `[\s\-]?`检查数字组之间的空格或短划线。
*   `$`表示字符串的结尾。在这种情况下，字符串`$`的开头`^`和结尾用于正则表达式，以防止它匹配任何可能包含有效电话号码的字符串（例如“555 555 5555 3”）。
*   最后，我们使用`regex.test(str)`来测试字符串是否遵循正则表达式，它返回`true`或`false` 。

#### 相关链接

*   [Regex.test（）](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp/test)
    
*   [正则表达指南](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions)
    

## ![:sunflower:](https://forum.freecodecamp.com/images/emoji/emoji_one/sunflower.png?v=3 "：向日葵：")中级代码解决方案：
```
function telephoneCheck(str) { 
  var re = /^(?:(?:\+?1\s*(?:[.-]\s*)?)?(?:\(\s*([2-9]1[02-9]|[2-9][02-8]1|[2-9][02-8][02-9])\s*\)|([2-9]1[02-9]|[2-9][02-8]1|[2-9][02-8][02-9]))\s*(?:[.-]\s*)?)?([2-9]1[02-9]|[2-9][02-9]1|[2-9][02-9]{2})\s*(?:[.-]\s*)?([0-9]{4})$/; 
  return re.test(str); 
 } 
 telephoneCheck("555-555-5555"); 
```

![:rocket:](https://forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=3 "：火箭：") [运行代码](https://repl.it/CLoa/0)

### 代码说明：

这是验证美国电话号码客户端的非常全面和强大的解决方案的示例。在这种情况下，实现此库[libphonenumber](https://github.com/googlei18n/libphonenumber)可能会更好，更容易。

#### 相关链接

*   [Regex.test（）](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp/test)
*   [libphonenumber](https://github.com/googlei18n/libphonenumber)

## ![:clipboard:](https://forum.freecodecamp.com/images/emoji/emoji_one/clipboard.png?v=3 "：剪贴板：")捐款说明：

*   ![:warning:](https://forum.freecodecamp.com/images/emoji/emoji_one/warning.png?v=3 "：警告：") **请勿**添加与任何现有解决方案类似的解决方案。如果您认为它**_相似但更好_** ，那么尝试合并（或替换）现有的类似解决方案。
*   添加解决方案的说明。
*   将解决方案分为以下类别之一 - **基本** ， **中级**和**高级** 。 ![:traffic_light:](https://forum.freecodecamp.com/images/emoji/emoji_one/traffic_light.png?v=3 "：红绿灯：")
*   如果您添加了任何**相关的主要内容，**请仅添加您的用户名。 （ ![:warning:](https://forum.freecodecamp.com/images/emoji/emoji_one/warning.png?v=3 "：警告：") **_不要_** _删除任何现有的用户名_ ）

> 看到![:point_right:](https://forum.freecodecamp.com/images/emoji/emoji_one/point_right.png?v=3 "：point_right：") [**`Wiki Challenge Solution Template`**](http://forum.freecodecamp.com/t/algorithm-article-template/14272)供参考。