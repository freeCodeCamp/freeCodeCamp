---
title: Pig Latin
localeTitle: 猪拉丁文
---
![:triangular_flag_on_post:](https://forum.freecodecamp.com/images/emoji/emoji_one/triangular_flag_on_post.png?v=3 "：triangular_flag_on_post：")如果卡住，请记得使用**`Read-Search-Ask`** 。尝试配对程序![:busts_in_silhouette:](https://forum.freecodecamp.com/images/emoji/emoji_one/busts_in_silhouette.png?v=3 "：busts_in_silhouette：")并编写自己的代码![:pencil:](https://forum.freecodecamp.com/images/emoji/emoji_one/pencil.png?v=3 "：铅笔：")

### ![:checkered_flag:](https://forum.freecodecamp.com/images/emoji/emoji_one/checkered_flag.png?v=3 "：checkered_flag：")问题说明：

您需要创建一个将从英语翻译为Pig Latin的程序。 Pig Latin使用英语单词的第一个辅音（或辅音簇），将其移到单词的末尾并加上“ay”后缀。如果一个单词以元音开头，你只需添加“way”到最后。它可能不是很明显但是你需要将所有辅音移除到第一个元音，以防这个单词不是以元音开头。

#### 相关链接

*   [猪拉丁文](http://en.wikipedia.org/wiki/Pig_Latin)
*   [JS String Prototype Match](http://forum.freecodecamp.com/t/javascript-string-prototype-match/15941)

## ![:speech_balloon:](https://forum.freecodecamp.com/images/emoji/emoji_one/speech_balloon.png?v=3 "：speech_balloon：")提示：1

您可能希望使用正则表达式。这将允许您轻松转换单词。

> _现在尝试解决问题_

## ![:speech_balloon:](https://forum.freecodecamp.com/images/emoji/emoji_one/speech_balloon.png?v=3 "：speech_balloon：")提示：2

如果第一个字符是元音，则取整个单词并在结尾添加“way”。否则是棘手的部分，在第一个元音之前取辅音并将其移到最后并添加'ay'。这可能令人困惑但是，它不仅仅是第一个辅音，而是在第一个元音之前的所有辅音。

> _现在尝试解决问题_

## ![:speech_balloon:](https://forum.freecodecamp.com/images/emoji/emoji_one/speech_balloon.png?v=3 "：speech_balloon：")提示：3

您需要使用有关字符串操作的所有知识来使最后一部分正确。但是，它可以单独使用`substr`来完成。

> _现在尝试解决问题_

## 扰流警报！

![警告牌](//discourse-user-assets.s3.amazonaws.com/original/2X/2/2d6c412a50797771301e7ceabd554cef4edcd74d.gif)

**提前解决！**

## ![:beginner:](https://forum.freecodecamp.com/images/emoji/emoji_one/beginner.png?v=3 "：初学者：")基本代码解决方案
```
function translatePigLatin(str) { 
  // Create variables to be used 
  var pigLatin = ''; 
  var regex = /[aeiou]/gi; 
 
  // Check if the first character is a vowel 
  if (str[0].match(regex)) { 
    pigLatin = str + 'way'; 
 
  } else if(str.match(regex) === null) { 
    // Check if the string contains only consonants 
    pigLatin = str + 'ay'; 
  } else { 
 
    // Find how many consonants before the first vowel. 
    var vowelIndice = str.indexOf(str.match(regex)[0]); 
 
    // Take the string from the first vowel to the last char 
    // then add the consonants that were previously omitted and add the ending. 
    pigLatin = str.substr(vowelIndice) + str.substr(0, vowelIndice) + 'ay'; 
  } 
 
  return pigLatin; 
 } 
 
 // test here 
 translatePigLatin("consonant"); 
```

![:rocket:](https://forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=3 "：火箭：") [运行代码](https://repl.it/CLmt/0)

### 代码说明：

*   创建一个空字符串来保存您的Pig Latin字。
*   将适当的正则表达式分配给变量。
*   如果第一个字符是元音，只需添加到字符串结尾的**方式**并返回它。
*   如果第一个字符不是元音：
    *   在`indexOf()` ， `match()`和regex的帮助下，在第一个元音之前找到辅音数量。
    *   用第一个元音开始Pig Latin字符串直到结束。
    *   在第一个元音之前添加字母到字符串结尾。
    *   `substr()`用于此处的字符串操作。
    *   将**ay**添加到字符串的末尾并返回它。

#### 相关链接

*   JS Regex资源
*   [JS String Prototype IndexOf](http://forum.freecodecamp.com/t/javascript-string-prototype-indexof/15936)
*   [JS String Prototype Substr](http://forum.freecodecamp.com/t/javascript-string-prototype-substr/15945)

## ![:sunflower:](https://forum.freecodecamp.com/images/emoji/emoji_one/sunflower.png?v=3 "：向日葵：")中级代码解决方案：
```
function translatePigLatin(str) { 
  function check(obj) { 
      return ['a','i','u','e','o'].indexOf(str.charAt(obj)) == -1 ? check(obj + 1) : obj; 
  } 
 
  return str.substr(check(0)).concat((check(0) === 0 ? 'w' : str.substr(0, check(0))) + 'ay'); 
 } 
 
 // test here 
 translatePigLatin("consonant"); 
```

![:rocket:](https://forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=3 "：火箭：") [运行代码](https://repl.it/CLmw/0)

### 代码说明：

*   这是解决此问题的声明式和递归式方法。
*   `check()`是一个函数，它检查字符串的第一个字母是否在元音数组中， `['a','i','u','e','o']` 。
*   在辅音的情况下， `check()`调用自己的下一个字符，直到找到第一个元音。
*   它将返回它发现的最后一个初始辅音的索引，即施密茨维尔将是3。
*   然后，字母，直到该索引是从字符串除去，并相应地用除去字符串或**瓦特**的任一同样的块连接，并且然后**AY**不管。

#### 相关链接

*   [JS String Prototype CharAt](http://forum.freecodecamp.com/t/javascript-string-prototype-charat/15932)
*   [JS String Prototype Concat](http://forum.freecodecamp.com/t/javascript-string-prototype-concat/15935)

## ![:rotating_light:](https://forum.freecodecamp.com/images/emoji/emoji_one/rotating_light.png?v=3 "：rotating_light：")高级代码解决方案
```
function translatePigLatin(str) { 
    var strArr = []; 
    var tmpChar; 
 
    // check if the char is consonant using RegEx 
    function isConsonant(char) { 
        return !/[aeiou]/.test(char); 
    } 
 
    // return initial str + "way" if it starts with vowel 
    // if not - convert str to array 
    if (!isConsonant(str.charAt(0))) 
        return str + "way"; 
    else 
        strArr = str.split(""); 
 
    // push all consonats to the end of the array 
    while (isConsonant(strArr[0])) { 
        tmpChar = strArr.shift(); 
        strArr.push(tmpChar); 
    } 
 // convert array to string and concatenate "ay" at the end 
 return strArr.join("")+"ay"; 
 } 
 
 // test here 
 translatePigLatin("consonant"); 
```

![:rocket:](https://forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=3 "：火箭：") [运行代码](https://repl.it/CLmv/0)

### 代码说明：

*   `isConsonant()`用于检查字符是否为辅音。
*   如果第一个字符是元音，则添加到字符串结尾的**方式**并返回它。
*   如果第一个字符不是元音：
    *   使用`split()`字符串拆分为数组。
    *   在`shift()`和`push()`帮助下`shift()`所有辅音推到数组的末尾。
    *   使用`join()`将数组转换为字符串，并将**ay**添加到字符串的结尾。把它返还。

#### 相关链接

*   [JS String Prototype Split](http://forum.freecodecamp.com/t/javascript-string-prototype-split/15944)
*   [JS数组原型转换](http://forum.freecodecamp.com/t/javascript-array-prototype-shift/14301)
*   [JS阵列原型推送](http://forum.freecodecamp.com/t/javascript-array-prototype-push/14298)
*   [JS Array Prototype Join](http://forum.freecodecamp.com/t/javascript-array-prototype-join/14292)

### ![:trophy:](https://forum.freecodecamp.com/images/emoji/emoji_one/trophy.png?v=3 "：杯：")积分：

如果您发现此页面有用，您可以通过在主聊天中复制并粘贴以下行来感谢贡献者：

**`Thanks @Rafase282 @sabahang @aganita @Hallaathrad for your help with Algorithm: Pig Latin`**

## ![:clipboard:](https://forum.freecodecamp.com/images/emoji/emoji_one/clipboard.png?v=3 "：剪贴板：")捐款说明：

*   ![:warning:](https://forum.freecodecamp.com/images/emoji/emoji_one/warning.png?v=3 "：警告：") **请勿**添加与任何现有解决方案类似的解决方案。如果您认为它**_相似但更好_** ，那么尝试合并（或替换）现有的类似解决方案。
*   添加解决方案的说明。
*   将解决方案分为以下类别之一 - **基本** ， **中级**和**高级** 。 ![:traffic_light:](https://forum.freecodecamp.com/images/emoji/emoji_one/traffic_light.png?v=3 "：红绿灯：")
*   如果您添加了任何**相关的主要内容，**请仅添加您的用户名。 （ ![:warning:](https://forum.freecodecamp.com/images/emoji/emoji_one/warning.png?v=3 "：警告：") **_不要_** _删除任何现有的用户名_ ）

> 看到![:point_right:](https://forum.freecodecamp.com/images/emoji/emoji_one/point_right.png?v=3 "：point_right：") [**`Wiki Challenge Solution Template`**](http://forum.freecodecamp.com/t/algorithm-article-template/14272)供参考。