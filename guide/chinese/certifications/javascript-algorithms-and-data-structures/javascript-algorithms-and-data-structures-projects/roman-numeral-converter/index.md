---
title: Roman Numeral Converter
localeTitle: 罗马数字转换器
---
![:triangular_flag_on_post:](https://forum.freecodecamp.com/images/emoji/emoji_one/triangular_flag_on_post.png?v=3 "：triangular_flag_on_post：")如果卡住，请记得使用**`Read-Search-Ask`** 。尝试配对程序![:busts_in_silhouette:](https://forum.freecodecamp.com/images/emoji/emoji_one/busts_in_silhouette.png?v=3 "：busts_in_silhouette：")并编写自己的代码![:pencil:](https://forum.freecodecamp.com/images/emoji/emoji_one/pencil.png?v=3 "：铅笔：")

### ![:checkered_flag:](https://forum.freecodecamp.com/images/emoji/emoji_one/checkered_flag.png?v=3 "：checkered_flag：")问题说明：

您将创建一个将整数转换为罗马数字的程序。

#### 相关链接

*   [罗马数字](http://www.mathsisfun.com/roman-numerals.html)
*   [方法Array.splice（）](http://forum.freecodecamp.com/t/javascript-array-prototype-splice/14307)
*   [Array.indexOf（）](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf)
*   [Array.join（）](http://forum.freecodecamp.com/t/javascript-array-prototype-join/14292)

## ![:speech_balloon:](https://forum.freecodecamp.com/images/emoji/emoji_one/speech_balloon.png?v=3 "：speech_balloon：")提示：1

创建两个数组，一个使用罗马数字，一个使用十进制等效的新表单将非常有用。

> _现在尝试解决问题_

## ![:speech_balloon:](https://forum.freecodecamp.com/images/emoji/emoji_one/speech_balloon.png?v=3 "：speech_balloon：")提示：2

如果将数字添加到引入新字母之前的数组中，例如4,9和40的值，它将为您节省大量代码。

> _现在尝试解决问题_

## ![:speech_balloon:](https://forum.freecodecamp.com/images/emoji/emoji_one/speech_balloon.png?v=3 "：speech_balloon：")提示：3

您不能将三个以上的连续罗马数字放在一起。

> _现在尝试解决问题_

## 扰流警报！

![警告牌](//discourse-user-assets.s3.amazonaws.com/original/2X/2/2d6c412a50797771301e7ceabd554cef4edcd74d.gif)

**提前解决！**

## ![:beginner:](https://forum.freecodecamp.com/images/emoji/emoji_one/beginner.png?v=3 "：初学者：")基本代码解决方案
```
var convertToRoman = function(num) { 
 
  var decimalValue = [ 1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1 ]; 
  var romanNumeral = [ 'M', 'CM', 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I' ]; 
 
  var romanized = ''; 
 
  for (var index = 0; index < decimalValue.length; index++) { 
    while (decimalValue[index] <= num) { 
      romanized += romanNumeral[index]; 
      num -= decimalValue[index]; 
    } 
  } 
 
  return romanized; 
 } 
 
 // test here 
 convertToRoman(36); 
```

![:rocket:](https://forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=3 "：火箭：") [运行代码](https://repl.it/CLmf/0)

### 代码说明：

*   我们首先创建两个具有匹配索引的默认转换的数组。这些被称为`decimalValue`和`romanNumeral` 。我们还创建了一个`romanized`的空字符串变量，它将包含最终的罗马数字。
*   使用for循环，我们循环遍历`decimalValue`数组的`decimalValue` 。我们继续循环，直到当前`index`的值适合`num` 。
*   接下来，我们添加罗马数字，并将`num`十进制等值。
*   最后，我们返回`romanized`的值。

#### 相关链接

*   [对于循环](http://forum.freecodecamp.com/t/javascript-for-loop/14666)
*   循环时

## ![:sunflower:](https://forum.freecodecamp.com/images/emoji/emoji_one/sunflower.png?v=3 "：向日葵：")中级代码解决方案：
```
function convertToRoman(num) { 
 var romans = ["I", "V", "X", "L", "C", "D", "M"], 
     ints = [], 
     romanNumber = [], 
     numeral = ""; 
  while (num) { 
    ints.push(num % 10); 
    num = Math.floor(num/10); 
  } 
  for (i=0; i<ints.length; i++){ 
      units(ints[i]); 
  } 
  function units(){ 
    numeral = romans[i*2]; 
    switch(ints[i]) { 
      case 1: 
        romanNumber.push(numeral); 
        break; 
      case 2: 
        romanNumber.push(numeral.concat(numeral)); 
        break; 
      case 3: 
        romanNumber.push(numeral.concat(numeral).concat(numeral)); 
        break; 
      case 4: 
        romanNumber.push(numeral.concat(romans[(i*2)+1])); 
        break; 
      case 5: 
        romanNumber.push(romans[(i*2)+1]); 
        break; 
      case 6: 
        romanNumber.push(romans[(i*2)+1].concat(numeral)); 
        break; 
      case 7: 
        romanNumber.push(romans[(i*2)+1].concat(numeral).concat(numeral)); 
        break; 
      case 8: 
        romanNumber.push(romans[(i*2)+1].concat(numeral).concat(numeral).concat(numeral)); 
        break; 
      case 9: 
        romanNumber.push(romans[i*2].concat(romans[(i*2)+2])); 
      } 
    } 
  return romanNumber.reverse().join("").toString(); 
 } 
 
 // test here 
 convertToRoman(97); 
```

![:rocket:](https://forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=3 "：火箭：") [运行代码](https://repl.it/C1YV)

### 代码说明：

*   创建一个罗马数字（ `romans` ）数组。
*   使用for循环在数字中创建数字（ `ints` ）数组。
*   循环遍历数字数组（基数为10），并且如您所做，将罗马数字（基数5）索引增加2（ `numeral = romans[i*2]`罗曼`numeral = romans[i*2]` ）。
*   在循环内，使用Switch Case将正确的罗马数字（向后）推送到该数组。
*   反转Roman Numerals数组并将其转换为字符串。

#### 相关链接

*   [对于循环](http://forum.freecodecamp.com/t/javascript-for-loop/14666)
*   循环时
*   [数学](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math)

## ![:sunflower:](https://forum.freecodecamp.com/images/emoji/emoji_one/sunflower.png?v=3 "：向日葵：")中级代码解决方案：
```
function convertToRoman(num) { 
  var romans = 
  // 10^i 10^i*5 
    ["I", "V"], // 10^0 
    ["X", "L"], // 10^1 
    ["C", "D"], // 10^2 
    ["M"]       // 10^3 
  ], 
      digits = num.toString() 
        .split('') 
        .reverse() 
        .map(function(item, index) { 
          return parseInt(item); 
        }), 
      numeral = ""; 
 
  // Loop through each digit, starting with the ones place 
  for (var i=0; i<digits.length; i++) { 
    // Make a Roman numeral that ignores 5-multiples and shortening rules 
    numeral = romans[i][0].repeat(digits[i]) + numeral; 
    // Check for a Roman numeral 5-multiple version 
    if (romans[i][1]) { 
      numeral = numeral 
        // Change occurrences of 5 * 10^i to the corresponding 5-multiple Roman numeral 
        .replace(romans[i][0].repeat(5), romans[i][1]) 
        // Shorten occurrences of 9 * 10^i 
        .replace(romans[i][1] + romans[i][0].repeat(4), romans[i][0] + romans[i+1][0]) 
        // Shorten occurrences of 4 * 10^i 
        .replace(romans[i][0].repeat(4), romans[i][0] + romans[i][1]); 
    } 
  } 
 
  return numeral; 
 } 
 
 // test here 
 convertToRoman(36); 
```

![:rocket:](https://forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=3 "：火箭：") [运行代码](https://repl.it/C1YV)

### 代码说明：

*   使用数组（ `romans` ）创建一个矩阵，其中包含给定功率为10的罗马数字，如果可用，则为该功率的罗马数字为10倍5。
*   将输入数字（ `num` ）转换为反转的数字（ `digits` ）数组，以便我们可以循环显示从那些位置开始向上的数字。
*   循环通过每个数字，从个位，以及通过将每个高功率罗马数字到开始创建一个罗马数字串`numeral`串等于多次`digit` 。这个初始字符串忽略了10次幂的罗马数字，也忽略了缩短规则。
*   如果10的相关幂具有5个多重罗马数字，则用`numeral`代替5-in-row次数与相关的5-multiple罗马数字（即V，L或D）并缩短9 \*的出现次数10 ^ i（例如，VIIII至VIX）和4 \* 10 ^ i（例如，XXXX至XL）。订单在这里很重要！
*   最后，返回`numeral` 。

#### 相关链接

*   [对于循环](http://forum.freecodecamp.com/t/javascript-for-loop/14666)
*   [。分裂（）](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/split)
*   [。相反（）](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reverse)
*   [。地图（）](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map)
*   [的ToString（）](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/toString)
*   [parseInt函数（）](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/parseInt)
*   [。更换（）](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/replace)
*   [。重复（）](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/repeat)

## ![:clipboard:](https://forum.freecodecamp.com/images/emoji/emoji_one/clipboard.png?v=3 "：剪贴板：")捐款说明：

*   ![:warning:](https://forum.freecodecamp.com/images/emoji/emoji_one/warning.png?v=3 "：警告：") **请勿**添加与任何现有解决方案类似的解决方案。如果您认为它**_相似但更好_** ，那么尝试合并（或替换）现有的类似解决方案。
*   添加解决方案的说明。
*   将解决方案分为以下类别之一 - **基本** ， **中级**和**高级** 。 ![:traffic_light:](https://forum.freecodecamp.com/images/emoji/emoji_one/traffic_light.png?v=3 "：红绿灯：")
*   如果您添加了任何**相关的主要内容，**请仅添加您的用户名。 （ ![:warning:](https://forum.freecodecamp.com/images/emoji/emoji_one/warning.png?v=3 "：警告：") **_不要_** _删除任何现有的用户名_ ）

> 看到![:point_right:](https://forum.freecodecamp.com/images/emoji/emoji_one/point_right.png?v=3 "：point_right：") [**`Wiki Challenge Solution Template`**](http://forum.freecodecamp.com/t/algorithm-article-template/14272)供参考。