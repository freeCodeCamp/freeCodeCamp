---
title: Search and Replace
localeTitle: 搜索和替换
---
![:triangular_flag_on_post:](https://forum.freecodecamp.com/images/emoji/emoji_one/triangular_flag_on_post.png?v=3 "：triangular_flag_on_post：")如果卡住，请记得使用**`Read-Search-Ask`** 。尝试配对程序![:busts_in_silhouette:](https://forum.freecodecamp.com/images/emoji/emoji_one/busts_in_silhouette.png?v=3 "：busts_in_silhouette：")并编写自己的代码![:pencil:](https://forum.freecodecamp.com/images/emoji/emoji_one/pencil.png?v=3 "：铅笔：")

### ![:checkered_flag:](https://forum.freecodecamp.com/images/emoji/emoji_one/checkered_flag.png?v=3 "：checkered_flag：")问题说明：

您将创建一个程序，它接受一个句子，然后在其中搜索一个单词并将其替换为新单词，同时保留大写（如果有的话）。

#### 相关链接

*   [字符串全局对象](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)
*   [JS字符串原型替换](http://forum.freecodecamp.com/t/javascript-string-prototype-replace/15942)

## ![:speech_balloon:](https://forum.freecodecamp.com/images/emoji/emoji_one/speech_balloon.png?v=3 "：speech_balloon：")提示：1

*   找到字符串中`before`的索引。

> _现在尝试解决问题_

## ![:speech_balloon:](https://forum.freecodecamp.com/images/emoji/emoji_one/speech_balloon.png?v=3 "：speech_balloon：")提示：2

*   检查首字母案例。

> _现在尝试解决问题_

## ![:speech_balloon:](https://forum.freecodecamp.com/images/emoji/emoji_one/speech_balloon.png?v=3 "：speech_balloon：")提示：3

*   字符串是不可变的，您需要将编辑保存在另一个变量上，即使您必须重复使用相同的变量，只是为了使它看起来像只使用那个变量完成的更改。

> _现在尝试解决问题_

## 扰流警报！

![警告牌](//discourse-user-assets.s3.amazonaws.com/original/2X/2/2d6c412a50797771301e7ceabd554cef4edcd74d.gif)

**提前解决！**

## ![:beginner:](https://forum.freecodecamp.com/images/emoji/emoji_one/beginner.png?v=3 "：初学者：")基本代码解决方案
```
function myReplace(str, before, after) { 
  // Find index where before is on string 
  var index = str.indexOf(before); 
  // Check to see if the first letter is uppercase or not 
  if (str[index] === str[index].toUpperCase()) { 
    // Change the after word to be capitalized before we use it. 
    after = after.charAt(0).toUpperCase() + after.slice(1); 
  } 
  // Now replace the original str with the edited one. 
  str = str.replace(before, after); 
 
  return str; 
 } 
 
 // test here 
 myReplace("A quick brown fox jumped over the lazy dog", "jumped", "leaped"); 
```

![:rocket:](https://forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=3 "：火箭：") [运行代码](https://repl.it/CLmo/0)

### 代码说明：

*   使用`indexOf()`在字符串中查找**before的**位置。
*   如果**之前的**第一个字母大写，则将**后面的**第一个字母更改为大写。
*   **之前**在字符串中替换为**after** 。
*   返回新字符串。

#### 相关链接

*   [JS String Prototype IndexOf](http://forum.freecodecamp.com/t/javascript-string-prototype-indexof/15936)
*   [JS String Prototype ToUpperCase](http://forum.freecodecamp.com/t/javascript-string-prototype-touppercase/15950)
*   [JS String Prototype CharAt](http://forum.freecodecamp.com/t/javascript-string-prototype-charat/15932)
*   [JS String Prototype Slice](http://forum.freecodecamp.com/t/javascript-string-prototype-slice/15943)

## ![:sunflower:](https://forum.freecodecamp.com/images/emoji/emoji_one/sunflower.png?v=3 "：向日葵：")中级代码解决方案：
```
function myReplace(str, before, after) { 
 //Create a regular expression object 
  var re = new RegExp(before,"gi"); 
 //Check whether the first letter is uppercase or not 
  if(/[AZ]/.test(before[0])){ 
  //Change the word to be capitalized 
    after = after.charAt(0).toUpperCase()+after.slice(1); 
     } 
     //Replace the original word with new one 
  var  newStr =  str.replace(re,after); 
 
 return newStr; 
 } 
 
 // test here 
 myReplace("A quick brown fox jumped over the lazy dog", "jumped", "leaped"); 
```

![:rocket:](https://forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=3 "：火箭：") [运行代码](https://repl.it/CLmp/0)

### 代码说明：

*   在此解决方案中，正则表达式`[AZ]`用于检查字符是否为大写。
*   创建一个新的正则表达式对象， **re** 。
*   如果**before**的首字母大写，则将**after**的第一个字母更改为大写。
*   在字符串**之前**替换**之后** 。
*   返回新字符串。

#### 相关链接

*   JS Regex资源

## ![:rotating_light:](https://forum.freecodecamp.com/images/emoji/emoji_one/rotating_light.png?v=3 "：rotating_light：")高级代码解决方案
```
function myReplace(str, before, after) { 
 
    // create a function that will change the casing of any number of letter in parameter "target" 
    // matching parameter "source" 
    function applyCasing(source, target) { 
        // split the source and target strings to array of letters 
        var targetArr = target.split(""); 
        var sourceArr = source.split(""); 
        // iterate through all the items of sourceArr and targetArr arrays till loop hits the end of shortest array 
        for (var i = 0; i < Math.min(targetArr.length, sourceArr.length); i++){ 
            // find out the casing of every letter from sourceArr using regular expression 
            // if sourceArr[i] is upper case then convert targetArr[i] to upper case 
            if (/[AZ]/.test(sourceArr[i])) { 
                targetArr[i] = targetArr[i].toUpperCase(); 
            } 
            // if sourceArr[i] is not upper case then convert targetArr[i] to lower case 
            else targetArr[i] = targetArr[i].toLowerCase(); 
        } 
        // join modified targetArr to string and return 
        return (targetArr.join("")); 
    } 
 
    // replace "before" with "after" with "before"-casing 
    return str.replace(before, applyCasing(before, after)); 
 } 
 
 // test here 
 myReplace("A quick brown fox jumped over the lazy dog", "jumped", "leaped"); 
```

![:rocket:](https://forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=3 "：火箭：") [运行代码](https://repl.it/CLmq/0)

### 代码说明：

*   **before**和**after**都作为`applyCasing()`参数传递。
*   功能`applyCasing()`在使用**前**以改变各个字符的情况下，在**targetArr**即，按照在**sourceArr**即字符**之后** 。
*   `replace()`用于替换**之前**和**之后** ，其外壳与**之前**相同。

## ![:rotating_light:](https://forum.freecodecamp.com/images/emoji/emoji_one/rotating_light.png?v=3 "：rotating_light：")高级代码解决方案
```
// Add new method to the String object, not overriding it if one exists already 
 String.prototype.capitalize =  String.prototype.capitalize || 
    function() { 
        return this[0].toUpperCase() + this.slice(1); 
    }; 
 
 const Util = (function () { 
 // Create utility module to hold helper functions 
    function textCase(str, tCase) { 
        // Depending if the tCase argument is passed we either set the case of the 
        // given string or we get it. 
        // Those functions can be expanded for other text cases. 
 
        if(tCase) { 
            return setCase(str, tCase); 
        } else { 
            return getCase(str); 
        } 
 
        function setCase(str, tCase) { 
            switch(tCase) { 
                case "uppercase": return str.toUpperCase(); 
                case "lowercase": return str.toLowerCase(); 
                case "capitalized": return str.capitalize(); 
                default: return str; 
            } 
        } 
 
        function getCase(str) { 
            if (str === str.toUpperCase()) { return "uppercase"; } 
            if (str === str.toLowerCase()) { return "lowercase"; } 
            if (str === str.capitalize()) { return "capitalized"; } 
            return "normal"; 
        } 
    } 
 
    return { 
        textCase 
    }; 
 })(); 
 
 function myReplace(str, before, after) { 
    const { textCase } = Util; 
    const regex = new RegExp(before, 'gi'); 
    const replacingStr = textCase(after, textCase(before)); 
 
    return str.replace(regex, replacingStr); 
 } 
```

![:rocket:](https://forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=3 "：火箭：") [运行代码](https://repl.it/@kr3at0/SearchAndReplace)

## ![:rotating_light:](https://forum.freecodecamp.com/images/emoji/emoji_one/rotating_light.png?v=3 "：rotating_light：")高级代码解决方案备选2：

```javascript
function myReplace(str, before, after) { 
  const myArr = str.split(' '); 
  const [wordToReplace] = myArr.filter(item => item === before); 
  return  wordToReplace[0].toUpperCase() !== wordToReplace[0] 
  ? myArr.map(item => item === before ? after : item).join(' ') 
  : myArr.map(item => item === before? after[0].toUpperCase() + after.slice(1) : item).join(' '); 
 } 
 
 // test: 
 myReplace("A quick brown fox jumped over the lazy dog", "jumped", "leaped"); 
```

#### 相关链接

*   [JS String Prototype Split](http://forum.freecodecamp.com/t/javascript-string-prototype-split/15944)
*   [JS for Loops解释](http://forum.freecodecamp.com/t/javascript-for-loop/14666s-Explained)
*   [JS Math Min](http://forum.freecodecamp.com/t/javascript-math-min/14684)
*   string.length减
*   [JS String Prototype ToLowerCase](http://forum.freecodecamp.com/t/javascript-string-prototype-tolowercase/15948)
*   [JS Array Prototype Join](http://forum.freecodecamp.com/t/javascript-array-prototype-join/14292)

## ![:clipboard:](https://forum.freecodecamp.com/images/emoji/emoji_one/clipboard.png?v=3 "：剪贴板：")捐款说明：

*   ![:warning:](https://forum.freecodecamp.com/images/emoji/emoji_one/warning.png?v=3 "：警告：") **请勿**添加与任何现有解决方案类似的解决方案。如果您认为它**_相似但更好_** ，那么尝试合并（或替换）现有的类似解决方案。
*   添加解决方案的说明。
*   将解决方案分为以下类别之一 - **基本** ， **中级**和**高级** 。 ![:traffic_light:](https://forum.freecodecamp.com/images/emoji/emoji_one/traffic_light.png?v=3 "：红绿灯：")
*   如果您添加了任何**相关的主要内容，**请仅添加您的用户名。 （ ![:warning:](https://forum.freecodecamp.com/images/emoji/emoji_one/warning.png?v=3 "：警告：") **_不要_** _删除任何现有的用户名_ ）

> 看到![:point_right:](https://forum.freecodecamp.com/images/emoji/emoji_one/point_right.png?v=3 "：point_right：") [**`Wiki Challenge Solution Template`**](http://forum.freecodecamp.com/t/algorithm-article-template/14272)供参考。