---
title: Title Case a Sentence
localeTitle: 标题案例句子
---
![:triangular_flag_on_post:](https://forum.freecodecamp.com/images/emoji/emoji_one/triangular_flag_on_post.png?v=3 "：triangular_flag_on_post：")如果卡住，请记得使用**`Read-Search-Ask`** 。尝试配对程序![:busts_in_silhouette:](https://forum.freecodecamp.com/images/emoji/emoji_one/busts_in_silhouette.png?v=3 "：busts_in_silhouette：")并编写自己的代码![:pencil:](https://forum.freecodecamp.com/images/emoji/emoji_one/pencil.png?v=3 "：铅笔：")

### ![:checkered_flag:](https://forum.freecodecamp.com/images/emoji/emoji_one/checkered_flag.png?v=3 "：checkered_flag：")问题说明：

我们必须返回一个带有标题案例的句子。这意味着第一个字母将始终为大写，其余字母将为小写。

#### 相关链接

*   [全局字符串对象](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)
*   [JS String Prototype ToLowerCase](http://forum.freecodecamp.com/t/javascript-string-prototype-tolowercase/15948)
*   [JS String Prototype ToUpperCase](http://forum.freecodecamp.com/t/javascript-string-prototype-touppercase/15950)
*   [JS字符串原型替换](http://forum.freecodecamp.com/t/javascript-string-prototype-replace/15942)

## ![:speech_balloon:](https://forum.freecodecamp.com/images/emoji/emoji_one/speech_balloon.png?v=3 "：speech_balloon：")提示：1

*   您应该首先将字符串拆分为单词数组。
*   拆分句子。

> _现在尝试解决问题_

## ![:speech_balloon:](https://forum.freecodecamp.com/images/emoji/emoji_one/speech_balloon.png?v=3 "：speech_balloon：")提示：2

*   在将第一个字母设为大写之前，您应该将单词设为小写。
*   对每个单词使用replace方法来大写每个单词的第一个字母。

> _现在尝试解决问题_

## ![:speech_balloon:](https://forum.freecodecamp.com/images/emoji/emoji_one/speech_balloon.png?v=3 "：speech_balloon：")提示：3

*   您需要创建一个包含前一个片段的新字符串，最后再将所有内容合并为一个字符串。
*   在replace方法中，使用charAt将第一个参数作为第一个字母的位置。对于第二个参数，写一个函数来返回大写字母作为替换。

> _现在尝试解决问题_

## 扰流警报！

![警告牌](//discourse-user-assets.s3.amazonaws.com/original/2X/2/2d6c412a50797771301e7ceabd554cef4edcd74d.gif)

**提前解决！**

## ![:beginner:](https://forum.freecodecamp.com/images/emoji/emoji_one/beginner.png?v=3 "：初学者：")基本代码解决方案
```
String.prototype.replaceAt = function(index, character) { 
    return this.substr(0, index) + character + this.substr(index+character.length); 
 }; 
 
 function titleCase(str) { 
    var newTitle = str.split(' '); 
    var updatedTitle = []; 
    for (var st in newTitle) { 
        updatedTitle[st] = newTitle[st].toLowerCase().replaceAt(0, newTitle[st].charAt(0).toUpperCase()); 
    } 
    return updatedTitle.join(' '); 
 } 
```

![:rocket:](https://forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=3 "：火箭：") [运行代码](https://repl.it/CLjU/8)

### 代码说明：

我们正在使用原型修改`replaceAt`函数以方便程序的使用。

用空格分隔字符串，并创建一个变量来跟踪更新的标题。然后我们使用循环将单词的第一个字符转为大写，其余字符转为小写。通过创建由小写字母组成的连接字符串，第一个字符替换为大写字母。

#### 相关链接

*   [JS for Loops解释](http://forum.freecodecamp.com/t/javascript-for-loop/14666s-Explained)
*   [JS String Prototype Split](http://forum.freecodecamp.com/t/javascript-string-prototype-split/15944)
*   [JS String Prototype Substr](http://forum.freecodecamp.com/t/javascript-string-prototype-substr/15945)
*   [JS Array Prototype Join](http://forum.freecodecamp.com/t/javascript-array-prototype-join/14292)

## ![:sunflower:](https://forum.freecodecamp.com/images/emoji/emoji_one/sunflower.png?v=3 "：向日葵：")中级代码解决方案：
```
function titleCase(str) { 
  var convertToArray = str.toLowerCase().split(" "); 
  var result = convertToArray.map(function(val){ 
      return val.replace(val.charAt(0), val.charAt(0).toUpperCase()); 
  }); 
  return result.join(" "); 
 } 
 
 titleCase("I'm a little tea pot"); 
```

![:rocket:](https://forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=3 "：火箭：") [运行代码](https://repl.it/CLjU/9)

### 代码说明：

我们将整个字符串设为小写，然后将其转换为数组。然后我们使用map函数用大写字母替换小写字符。最后，我们使用`join`方法返回字符串。

#### 相关链接

*   [JS阵列原型图](http://forum.freecodecamp.com/t/javascript-array-prototype-map/14294)

## ![:rotating_light:](https://forum.freecodecamp.com/images/emoji/emoji_one/rotating_light.png?v=3 "：rotating_light：")高级代码解决方案
```
function titleCase(str) { 
  return str.toLowerCase().replace(/(^|\s)\S/g, (L) => L.toUpperCase()); 
 } 
```

![:rocket:](https://forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=3 "：火箭：") [运行代码](https://repl.it/CLjU/14)

### 代码说明：

该解决方案的工作原理是首先小写字符串中的所有字符，然后仅对每个单词的第一个字符进行大写。

*   使用`str.toLowerCase()`小写整个字符串。
    
*   使用`.replace`将每个单词'first first'替换为大写。
    
*   在每个单词的开头搜索字符，即匹配`space`后面的任何字符或匹配整个字符串的第一个字符，使用以下模式。
    
*   正则表达式解释：
    
*   查找所有非空白字符`(\S` ）
    
*   在字符串的开头`(^)`
    
*   或者在任何空白字符之后`(\s)`
    
    *   `g`修饰符在整个字符串中搜索其他此类字模式并替换它们。
        
    *   此解决方案适用于国家符号和重音字母，如以下示例所示  
        `international characters:` 'бабушкакуриттрубку'// - >'БабушкаКуритТрубку'  
        `accented characters:` 'localitààtilacol'// - >'LocalitàÀtilacol'
        

#### 相关链接

*   [JS Regex资源](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions)

## ![:clipboard:](https://forum.freecodecamp.com/images/emoji/emoji_one/clipboard.png?v=3 "：剪贴板：")捐款说明：

*   ![:warning:](https://forum.freecodecamp.com/images/emoji/emoji_one/warning.png?v=3 "：警告：") **请勿**添加与任何现有解决方案类似的解决方案。如果您认为它**_相似但更好_** ，那么尝试合并（或替换）现有的类似解决方案。
*   添加解决方案的说明。
*   将解决方案分为以下类别之一 - **基本** ， **中级**和**高级** 。 ![:traffic_light:](https://forum.freecodecamp.com/images/emoji/emoji_one/traffic_light.png?v=3 "：红绿灯：")
*   如果您添加了任何**相关的主要内容，**请仅添加您的用户名。 （ ![:warning:](https://forum.freecodecamp.com/images/emoji/emoji_one/warning.png?v=3 "：警告：") **_不要_** _删除任何现有的用户名_ ）

> 看到![:point_right:](https://forum.freecodecamp.com/images/emoji/emoji_one/point_right.png?v=3 "：point_right：") [**`Wiki Challenge Solution Template`**](http://forum.freecodecamp.com/t/algorithm-article-template/14272)供参考。