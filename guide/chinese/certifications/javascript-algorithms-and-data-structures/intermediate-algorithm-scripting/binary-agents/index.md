---
title: Binary Agents
localeTitle: 二元代理商
---
![](//discourse-user-assets.s3.amazonaws.com/original/2X/7/70cf3cc5462f69c2f770ad42d0f24f240a8d8f13.jpg)

![:triangular_flag_on_post:](https://forum.freecodecamp.com/images/emoji/emoji_one/triangular_flag_on_post.png?v=3 "：triangular_flag_on_post：")如果卡住，请记得使用**`Read-Search-Ask`** 。尝试配对程序![:busts_in_silhouette:](https://forum.freecodecamp.com/images/emoji/emoji_one/busts_in_silhouette.png?v=3 "：busts_in_silhouette：")并编写自己的代码![:pencil:](https://forum.freecodecamp.com/images/emoji/emoji_one/pencil.png?v=3 "：铅笔：")

## 问题说明：

这个问题非常简单，您将获得一个代表二进制代码中的句子的字符串，您需要将其翻译成单词。没有直接的方法，所以你必须翻译两次。

### 相关链接

*   [String.prototype.charCodeAt](http://forum.freecodecamp.com/t/javascript-string-prototype-charcodeat/15933)
*   使用String.fromCharCode

## ![:speech_balloon:](https://forum.freecodecamp.com/images/emoji/emoji_one/speech_balloon.png?v=3 "：speech_balloon：")提示：1

在将这些值转换为字符之前，您应该先将**二进制**转换为**十进制** 。

> _现在尝试解决问题_

## ![:speech_balloon:](https://forum.freecodecamp.com/images/emoji/emoji_one/speech_balloon.png?v=3 "：speech_balloon：")提示：2

当关注较小的部分时，事情会变得更容易，将输入分成当前一个字母的焦点。

> _现在尝试解决问题_

## ![:speech_balloon:](https://forum.freecodecamp.com/images/emoji/emoji_one/speech_balloon.png?v=3 "：speech_balloon：")提示：3

确保每次将字符从二进制转码为十进制时，都会重置用于跟踪那些字符的变量。另外不要忘记把所有东西都变回一个字符串。

> _现在尝试解决问题_

## 扰流警报！

![警告牌](//discourse-user-assets.s3.amazonaws.com/original/2X/2/2d6c412a50797771301e7ceabd554cef4edcd74d.gif)

**提前解决！**

## ![:beginner:](https://forum.freecodecamp.com/images/emoji/emoji_one/beginner.png?v=3 "：初学者：")基本代码解决方案

```javascript
    function binaryAgent(str) { 
      biString = str.split(' '); 
      uniString = []; 
 
    /*using the radix (or base) parameter in parseInt, we can convert the binary 
      number to a decimal number while simultaneously converting to a char*/ 
 
      for(i=0;i < biString.length;i++){ 
        uniString.push(String.fromCharCode(parseInt(biString[i], 2))); 
      } 
 
      // we then simply join the string 
      return uniString.join(''); 
    } 
 
    // test here 
    binaryAgent("01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111"); 
```

![:rocket:](https://forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=3 "：火箭：") [运行代码](https://repl.it/CLnm/0)

# 代码说明：

*   将字符串分隔为由空格分隔的字符串数组。
*   创建一些在整个过程中需要的变量，这些名称在很大程度上是自我解释的。
*   遍历新数组中的每个二进制字符串。
*   使用parseInt（ _binary_ ，2）转换为十进制（我们告诉第二个参数我们的数字当前是哪个基数）
*   最后，我们返回转换后的消息。

## 相关链接

*   [String.prototype.split](http://forum.freecodecamp.com/t/javascript-string-prototype-split/15944)
*   [parseInt函数](http://forum.freecodecamp.com/t/javascript-parseint/14686)

## ![:sunflower:](https://forum.freecodecamp.com/images/emoji/emoji_one/sunflower.png?v=3 "：向日葵：")中级代码解决方案：

```javascript
    function binaryAgent(str) { 
      // Separate the binary code by space. 
      str = str.split(' '); 
      var power; 
      var decValue = 0; 
      var sentence = ''; 
 
      // Check each binary number from the array. 
      for (var s = 0; s < str.length; s++) { 
        // Check each bit from binary number 
        for (var t = 0; t < str[s].length; t++) { 
          // This only takes into consideration the active ones. 
          if (str[s][t] == 1) { 
            // This is quivalent to 2 ** position 
            power = Math.pow(2, +str[s].length - t - 1); 
            decValue += power; 
 
            // Record the decimal value by adding the number to the previous one. 
          } 
        } 
 
        // After the binary number is converted to decimal, convert it to string and store 
        sentence += (String.fromCharCode(decValue)); 
 
        // Reset decimal value for next binary number. 
        decValue = 0; 
      } 
 
      return sentence; 
    } 
 
    // test here 
    binaryAgent("01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111"); 
```

![:rocket:](https://forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=3 "：火箭：") [运行代码](https://repl.it/CLno/0)

# 代码说明

*   对于每个二进制字符串，检查1并忽略零。
*   对于那些是一个或活跃的，然后将它们转换为十进制，这考虑了它需要被提升到的位置和正确的功率。
*   通过将**功率**添加到变量**decValue**上的任何先前变量，将**功率**存储到**功率**变量中。此变量将添加并添加活动的幂，直到循环结束，然后返回十进制数。
*   将内部循环外部的最终小数转换为ASCII，然后将其保存为**句子**以及已转换和存储的任何其他文本字符串。
*   重置变量**decValue**以避免在继续外循环之前得到错误的小数。

## 相关链接

*   [Math.pow](http://forum.freecodecamp.com/t/javascript-math-pow/14685)
*   string.length减
*   [链接标题3](http://example.com)

## ![:rotating_light:](https://forum.freecodecamp.com/images/emoji/emoji_one/rotating_light.png?v=3 "：rotating_light：")高级代码解决方案

```javascript
    function binaryAgent(str) { 
      return String.fromCharCode(...str.split(" ").map(function(char){ return parseInt(char, 2); })); 
    } 
 
    // test here 
    binaryAgent("01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111"); 
```

![:rocket:](https://forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=3 "：火箭：") [运行代码](https://repl.it/CLnp/0)

# 代码说明

*   首先，我们使用`split()`来处理每个字符作为Array元素
*   然后使用`map()`使用`pareseInt()`将每个元素从二进制处理为十进制
*   最后，我们可以使用`String.fromCharCode()`将每个ASCII编号转换为相应的字符
*   但是`fromCharCode()`需要一系列数字而不是数组！我们可以使用ES6 Spread Operator将一组数字作为单独的数字传递。有关详情，请参阅此处; [传播运营商](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_operator)

## 相关链接

*   [Array.prototype.map](http://forum.freecodecamp.com/t/javascript-array-prototype-map/14294)

## ![:clipboard:](https://forum.freecodecamp.com/images/emoji/emoji_one/clipboard.png?v=3 "：剪贴板：")捐款说明：

*   ![:warning:](https://forum.freecodecamp.com/images/emoji/emoji_one/warning.png?v=3 "：警告：") **请勿**添加与任何现有解决方案类似的解决方案。如果您认为它**_相似但更好_** ，那么尝试合并（或替换）现有的类似解决方案。
*   添加解决方案的说明。
*   将解决方案分为以下类别之一 - **基本** ， **中级**和**高级** 。 ![:traffic_light:](https://forum.freecodecamp.com/images/emoji/emoji_one/traffic_light.png?v=3 "：红绿灯：")
*   如果您添加了任何**相关的主要内容，**请仅添加您的用户名。 （ ![:warning:](https://forum.freecodecamp.com/images/emoji/emoji_one/warning.png?v=3 "：警告：") **_不要_** _删除任何现有的用户名_ ）

> 看到![:point_right:](https://forum.freecodecamp.com/images/emoji/emoji_one/point_right.png?v=3 "：point_right：") [**`Wiki Challenge Solution Template`**](http://forum.freecodecamp.com/t/algorithm-article-template/14272)供参考。