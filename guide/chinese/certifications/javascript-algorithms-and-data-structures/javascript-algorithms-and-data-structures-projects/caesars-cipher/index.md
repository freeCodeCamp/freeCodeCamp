---
title: Caesars Cipher
localeTitle: 凯撒密码
---
![:triangular_flag_on_post:](https://forum.freecodecamp.com/images/emoji/emoji_one/triangular_flag_on_post.png?v=3 "：triangular_flag_on_post：")如果卡住，请记得使用**`Read-Search-Ask`** 。尝试配对程序![:busts_in_silhouette:](https://forum.freecodecamp.com/images/emoji/emoji_one/busts_in_silhouette.png?v=3 "：busts_in_silhouette：")并编写自己的代码![:pencil:](https://forum.freecodecamp.com/images/emoji/emoji_one/pencil.png?v=3 "：铅笔：")

### ![:checkered_flag:](https://forum.freecodecamp.com/images/emoji/emoji_one/checkered_flag.png?v=3 "：checkered_flag：")问题说明：

*   您需要编写一个函数，该函数将使用_Caesar密码_编码的字符串作为参数并对其进行解码。
*   这里使用的是ROT13，其中字母的值移动了13位。例如'A' ![:left_right_arrow:](https://forum.freecodecamp.com/images/emoji/emoji_one/left_right_arrow.png?v=3 "：left_right_arrow：") 'N'，'T' ![:left_right_arrow:](https://forum.freecodecamp.com/images/emoji/emoji_one/left_right_arrow.png?v=3 "：left_right_arrow：") 'G'。
*   你必须将它移回13个位置，这样'N' ![:left_right_arrow:](https://forum.freecodecamp.com/images/emoji/emoji_one/left_right_arrow.png?v=3 "：left_right_arrow：") '一个'。

#### 相关链接

*   [String.prototype.charCodeAt](http://forum.freecodecamp.com/t/javascript-string-prototype-charcodeat/15933)
*   使用String.fromCharCode

## ![:speech_balloon:](https://forum.freecodecamp.com/images/emoji/emoji_one/speech_balloon.png?v=3 "：speech_balloon：")提示：1

使用_String.charCodeAt（）_将英文字符转换为ASCII。

> _现在尝试解决问题_

## ![:speech_balloon:](https://forum.freecodecamp.com/images/emoji/emoji_one/speech_balloon.png?v=3 "：speech_balloon：")提示：2

使用_String.fromCharCode（）_将ASCII转换为英文字符。

> _现在尝试解决问题_

## ![:speech_balloon:](https://forum.freecodecamp.com/images/emoji/emoji_one/speech_balloon.png?v=3 "：speech_balloon：")提示：3

保留AZ之间不存在的任何东西。

> _现在尝试解决问题_

## 扰流警报！

![警告牌](//discourse-user-assets.s3.amazonaws.com/original/2X/2/2d6c412a50797771301e7ceabd554cef4edcd74d.gif)

**提前解决！**

## ![:beginner:](https://forum.freecodecamp.com/images/emoji/emoji_one/beginner.png?v=3 "：初学者：")基本代码解决方案

```javascript
    function rot13(str) { 
      // Split str into a character array 
      return str.split('') 
      // Iterate over each character in the array 
        .map.call(str, function(char) { 
          // Convert char to a character code 
          x = char.charCodeAt(0); 
          // Checks if character lies between AZ 
          if (x < 65 || x > 90) { 
            return String.fromCharCode(x);  // Return un-converted character 
          } 
          //N = ASCII 78, if the character code is less than 78, shift forward 13 places 
          else if (x < 78) { 
            return String.fromCharCode(x + 13); 
          } 
          // Otherwise shift the character 13 places backward 
          return String.fromCharCode(x - 13); 
        }).join('');  // Rejoin the array into a string 
    } 
```

![:rocket:](https://forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=3 "：火箭：") [运行代码](https://repl.it/CLjU/38)

### 代码说明：

*   声明并初始化字符串变量`nstr`以存储已解码的字符串。
*   for循环用于循环输入字符串的每个字符。
*   如果角色不是大写的英文字母（即它的ascii不在65和91之间），我们将保持原样并[继续](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/continue)下一次迭代。
*   如果它是大写的英文字母，我们将从它的ascii代码中减去13。
*   如果ascii代码小于78，当它减去13时它将超出范围，所以我们将为它添加26（英文字母中的字母数），以便在A之后它将返回Z.例如M （77） ![:left_right_arrow:](https://forum.freecodecamp.com/images/emoji/emoji_one/left_right_arrow.png?v=3 "：left_right_arrow：") 77-13 = 64（不是英文字母）+26 = 90 ![:left_right_arrow:](https://forum.freecodecamp.com/images/emoji/emoji_one/left_right_arrow.png?v=3 "：left_right_arrow：") Z（90）。

#### 相关链接

*   [Array.prototype.map](http://forum.freecodecamp.com/t/javascript-array-prototype-map/14294)
*   [String.prototype.split](http://forum.freecodecamp.com/t/javascript-string-prototype-split/15944)
*   [Array.prototype.join](http://forum.freecodecamp.com/t/javascript-array-prototype-join/14292)

## ![:sunflower:](https://forum.freecodecamp.com/images/emoji/emoji_one/sunflower.png?v=3 "：向日葵：")中级代码解决方案：

```javascript
    // Solution with Regular expression and Array of ASCII character codes 
    function rot13(str) { 
      var rotCharArray = []; 
      var regEx = /[AZ]/ ; 
      str = str.split(""); 
      for (var x in str) { 
        if (regEx.test(str[x])) { 
          // A more general approach 
          // possible because of modular arithmetic 
          // and cyclic nature of rot13 transform 
          rotCharArray.push((str[x].charCodeAt() - 65 + 13) % 26 + 65); 
        } else { 
          rotCharArray.push(str[x].charCodeAt()); 
        } 
      } 
      str = String.fromCharCode.apply(String, rotCharArray); 
      return str; 
    } 
 
    // Change the inputs below to test 
    rot13("LBH QVQ VG!"); 
```

### 代码说明：

*   在名为`rotCharArray`的变量中创建一个空数组来存储字符代码。
*   `regEx`变量存储从A到Z的所有大写字母的正则表达式。
*   我们将`str`拆分为一个字符数组，然后使用for循环遍历数组中的每个字符。
*   使用if语句，我们测试以查看字符串是否仅包含从A到Z的大写字母。
*   如果返回true，我们使用`charCodeAt()`函数和rot13转换返回正确的值，否则返回初始值。
*   然后，我们使用`rotCharArray`变量中的字符代码返回字符串。

### 算法说明：
```
ALPHA    KEY BASE             ROTATED    ROT13 
 ------------------------------------------------------------- 
 [A]     65  <=>   0 + 13  =>  13 % 26  <=>  13 + 65 = 78 [N] 
 [B]     66  <=>   1 + 13  =>  14 % 26  <=>  14 + 65 = 79 [O] 
 [C]     67  <=>   2 + 13  =>  15 % 26  <=>  15 + 65 = 80 [P] 
 [D]     68  <=>   3 + 13  =>  16 % 26  <=>  16 + 65 = 81 [Q] 
 [E]     69  <=>   4 + 13  =>  17 % 26  <=>  17 + 65 = 82 [R] 
 [F]     70  <=>   5 + 13  =>  18 % 26  <=>  18 + 65 = 83 [S] 
 [G]     71  <=>   6 + 13  =>  19 % 26  <=>  19 + 65 = 84 [T] 
 [H]     72  <=>   7 + 13  =>  20 % 26  <=>  20 + 65 = 85 [U] 
 [I]     73  <=>   8 + 13  =>  21 % 26  <=>  21 + 65 = 86 [V] 
 [J]     74  <=>   9 + 13  =>  22 % 26  <=>  22 + 65 = 87 [W] 
 [K]     75  <=>  10 + 13  =>  23 % 26  <=>  23 + 65 = 88 [X] 
 [L]     76  <=>  11 + 13  =>  24 % 26  <=>  24 + 65 = 89 [Y] 
 [M]     77  <=>  12 + 13  =>  25 % 26  <=>  25 + 65 = 90 [Z] 
 [N]     78  <=>  13 + 13  =>  26 % 26  <=>   0 + 65 = 65 [A] 
 [O]     79  <=>  14 + 13  =>  27 % 26  <=>   1 + 65 = 66 [B] 
 [P]     80  <=>  15 + 13  =>  28 % 26  <=>   2 + 65 = 67 [C] 
 [Q]     81  <=>  16 + 13  =>  29 % 26  <=>   3 + 65 = 68 [D] 
 [R]     82  <=>  17 + 13  =>  30 % 26  <=>   4 + 65 = 69 [E] 
 [S]     83  <=>  18 + 13  =>  31 % 26  <=>   5 + 65 = 70 [F] 
 [T]     84  <=>  19 + 13  =>  32 % 26  <=>   6 + 65 = 71 [G] 
 [U]     85  <=>  20 + 13  =>  33 % 26  <=>   7 + 65 = 72 [H] 
 [V]     86  <=>  21 + 13  =>  34 % 26  <=>   8 + 65 = 73 [I] 
 [W]     87  <=>  22 + 13  =>  35 % 26  <=>   9 + 65 = 74 [J] 
 [X]     88  <=>  23 + 13  =>  36 % 26  <=>  10 + 65 = 75 [K] 
 [Y]     89  <=>  24 + 13  =>  37 % 26  <=>  11 + 65 = 76 [L] 
 [Z]     90  <=>  25 + 13  =>  38 % 26  <=>  12 + 65 = 77 [M] 
```

#### 相关链接

*   [Function.apply](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/apply)
*   [正则表达式](https://forum.freecodecamp.com/t/regular-expressions-resources/15931)
*   [Regex.test](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp/test)

![:rocket:](https://forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=3 "：火箭：") [运行代码](https://repl.it/CLjU/39)

## ![:rotating_light:](https://forum.freecodecamp.com/images/emoji/emoji_one/rotating_light.png?v=3 "：rotating_light：")高级代码解决方案
```
function rot13(str) { // LBH QVQ VG! 
  return str.replace(/[AZ]/g, L => String.fromCharCode((L.charCodeAt(0) % 26) + 65)); 
 } 
```

### 算法说明：

理解在JavaScript中象征性地表示为`%`模运算符（ _有时称为模运算符_ ）是理解算法的关键。  
这是一个有趣的运算符，它出现在工程的各个地方，例如密码学。

基本上，对数字进行操作，它将数字除以给定的除数，并给出除法的余数。  
例如，

*   `0 % 5 = 0`因为`0 / 5 = 0`且余数为`0` 。
    
*   `2 % 5 = 2`因为`2 / 5 = 0` ，余数为`2`
    
*   `4 % 5 = 4`因为`4 / 5 = 0` ，余数为`4`
    
*   `5 % 5 = 0`因为`5 / 5 = 1`且余数为`0`
    
*   `7 % 5 = 2`因为`7 / 5 = 1` ，余数为`2`
    
*   `9 % 5 = 4`因为`9 / 5 = 1`而余数为`4`
    
*   `10 % 5 = 0`因为`10 / 5 = 2`且余数为`0`
    

但你必须注意到这里的模式。  
您可能已经注意到，当它刚刚达到RHS值的倍数时，惊人的模运算符会覆盖LHS值。  
例如，在我们的例子中，当`LHS = 5` ，它被包裹到`0`  
要么  
当`LHS = 10` ，它再次`LHS = 10` `0` 。

因此，我们看到出现以下模式
```
 0 ⇔ 0 
 1 ⇔ 1 
 2 ⇔ 2 
 3 ⇔ 3 
 4 ⇔ 4 
 5 ⇔ 0 
 6 ⇔ 1 
 7 ⇔ 2 
 8 ⇔ 3 
 9 ⇔ 4 
 10 ⇔ 0 
```

因此，我们得出结论，使用模运算符，可以将一系列值映射到\[ `0`到`DIVISOR - 1` \]之间的范围。在我们的情况下，我们映射\[ `5 - 9`之间\] \[ `0 - 4` \]或映射\[ `6 - 10` \]之间\[ `0 - 4` \]。

你知道吗？

现在让我们考虑映射`26`数字的范围，即在\[ `65 - 90` \]之间，它表示[Unicode字符集中的](http://unicode-table.com/en/alphabets/)大写\[ **英文字母** \]到\[ `0 - 25` \]之间的数字范围。
```
[A]  65 % 26 ⇔ 13 
 [B]  66 % 26 ⇔ 14 
 [C]  67 % 26 ⇔ 15 
 [D]  68 % 26 ⇔ 16 
 [E]  69 % 26 ⇔ 17 
 [F]  70 % 26 ⇔ 18 
 [G]  71 % 26 ⇔ 19 
 [H]  72 % 26 ⇔ 20 
 [I]  73 % 26 ⇔ 21 
 [J]  74 % 26 ⇔ 22 
 [K]  75 % 26 ⇔ 23 
 [L]  76 % 26 ⇔ 24 
 [M]  77 % 26 ⇔ 25 
 [N]  78 % 26 ⇔  0 
 [O]  79 % 26 ⇔  1 
 [P]  80 % 26 ⇔  2 
 [Q]  81 % 26 ⇔  3 
 [R]  82 % 26 ⇔  4 
 [S]  83 % 26 ⇔  5 
 [T]  84 % 26 ⇔  6 
 [U]  85 % 26 ⇔  7 
 [V]  86 % 26 ⇔  8 
 [W]  87 % 26 ⇔  9 
 [X]  88 % 26 ⇔ 10 
 [Y]  89 % 26 ⇔ 11 
 [Z]  90 % 26 ⇔ 12 
```

您可以注意到，\[ `65 - 90` \]范围内的每个数字都映射到\[ `0 - 25` \]之间的唯一数字。  
您可能还注意到，每个给定数字（例如`65` ）映射到另一个数字（例如`13` ），该数字可用作偏移值（即`65 + OFFSET` ）以获得给定数字的ROT13。

例如`65`映射到`13` ，可以作为偏移值，并添加到`65` ，得到`78` 。
```
[A]  65 % 26 ⇔ 13 + 65 =  78 [N] 
 [B]  66 % 26 ⇔ 14 + 65 =  79 [O] 
 [C]  67 % 26 ⇔ 15 + 65 =  80 [P] 
 [D]  68 % 26 ⇔ 16 + 65 =  81 [Q] 
 [E]  69 % 26 ⇔ 17 + 65 =  82 [R] 
 [F]  70 % 26 ⇔ 18 + 65 =  83 [S] 
 [G]  71 % 26 ⇔ 19 + 65 =  84 [T] 
 [H]  72 % 26 ⇔ 20 + 65 =  85 [U] 
 [I]  73 % 26 ⇔ 21 + 65 =  86 [V] 
 [J]  74 % 26 ⇔ 22 + 65 =  87 [W] 
 [K]  75 % 26 ⇔ 23 + 65 =  88 [X] 
 [L]  76 % 26 ⇔ 24 + 65 =  89 [Y] 
 [M]  77 % 26 ⇔ 25 + 65 =  90 [Z] 
 [N]  78 % 26 ⇔  0 + 65 =  65 [A] 
 [O]  79 % 26 ⇔  1 + 65 =  66 [B] 
 [P]  80 % 26 ⇔  2 + 65 =  67 [C] 
 [Q]  81 % 26 ⇔  3 + 65 =  68 [D] 
 [R]  82 % 26 ⇔  4 + 65 =  69 [E] 
 [S]  83 % 26 ⇔  5 + 65 =  70 [F] 
 [T]  84 % 26 ⇔  6 + 65 =  71 [G] 
 [U]  85 % 26 ⇔  7 + 65 =  72 [H] 
 [V]  86 % 26 ⇔  8 + 65 =  73 [I] 
 [W]  87 % 26 ⇔  9 + 65 =  74 [J] 
 [X]  88 % 26 ⇔ 10 + 65 =  75 [K] 
 [Y]  89 % 26 ⇔ 11 + 65 =  76 [L] 
 [Z]  90 % 26 ⇔ 12 + 65 =  77 [M] 
```

### 代码说明：

*   `String.prototype.replace` [函数](http://forum.freecodecamp.com/t/javascript-string-prototype-replace/15942)允许您基于某些模式匹配（由正则表达式定义）和[转换函数](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/replace#Specifying_a_function_as_a_parameter) （应用于每个模式匹配）来转换`String` 。
*   [箭头函数](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Functions/Arrow_functions)语法用于将函数参数写入`replace()` 。
*   `L`表示单个单位，从每个模式匹配`/[AZ]/g` - 字母表中的每个大写字母，从`A`到`Z` ，存在于字符串中。
*   箭头函数对给定字符串中存在的英文字母的每个大写字母应用`rot13`变换。

#### 相关链接

*   [String.prototype.replace（）](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/replace)

## ![:clipboard:](https://forum.freecodecamp.com/images/emoji/emoji_one/clipboard.png?v=3 "：剪贴板：")对贡献者的说明：

*   ![:warning:](https://forum.freecodecamp.com/images/emoji/emoji_one/warning.png?v=3 "：警告：") **请勿**添加与任何现有解决方案类似的解决方案。如果您认为它**_相似但更好_** ，那么尝试合并（或替换）现有的类似解决方案。
*   添加解决方案的说明。
*   将解决方案分为以下类别之一 - **基本** ， **中级**和**高级** 。 ![:traffic_light:](https://forum.freecodecamp.com/images/emoji/emoji_one/traffic_light.png?v=3 "：红绿灯：")
*   如果您添加了任何**相关的主要内容，**请仅添加您的用户名。 （ ![:warning:](https://forum.freecodecamp.com/images/emoji/emoji_one/warning.png?v=3 "：警告：") **_不要_** _删除任何现有的用户名_ ）

> 看到![:point_right:](https://forum.freecodecamp.com/images/emoji/emoji_one/point_right.png?v=3 "：point_right：") [**`Wiki Challenge Solution Template`**](http://forum.freecodecamp.com/t/algorithm-article-template/14272)供参考。