---
title: Smallest Common Multiple
localeTitle: 最小的共同多重
---
![:triangular_flag_on_post:](https://forum.freecodecamp.com/images/emoji/emoji_one/triangular_flag_on_post.png?v=3 "：triangular_flag_on_post：")如果卡住，请记得使用**`Read-Search-Ask`** 。尝试配对程序![:busts_in_silhouette:](https://forum.freecodecamp.com/images/emoji/emoji_one/busts_in_silhouette.png?v=3 "：busts_in_silhouette：")并编写自己的代码![:pencil:](https://forum.freecodecamp.com/images/emoji/emoji_one/pencil.png?v=3 "：铅笔：")

### ![:checkered_flag:](https://forum.freecodecamp.com/images/emoji/emoji_one/checkered_flag.png?v=3 "：checkered_flag：")问题说明：

两个数字之间的最小公倍数是两个数字可以分成的最小数字。这个概念也可以扩展到两个以上的数字。

我们首先可以从找到两个数字之间的最小公倍数开始。天真地，你可以开始写出每个数字的多个，直到你写出两个数字都存在的倍数。

一个例子是数字`3`和`4` 。 `3`的倍数是`3, 6, 9, 12, 15, 18, ...` ， `4`的倍数是`4` `4, 8, 12, 16, 20, ...`我们在两个列表中遇到的第一个最小数字是`12`所以这是`3`到`4`之间的最小公倍数。

这个问题可能会令人困惑，因为大多数人只会查找两个数字的最小公倍数，但会忘记关键字**范围** 。但是，这意味着如果给出`[1,5]` ，那么你必须检查所有数字`[1,2,3,4,5]`最小公倍数，它们可以被所有数字整除。

#### 相关链接

*   [最小（最小）普通多重](https://en.wikipedia.org/wiki/Least_common_multiple)

## ![:speech_balloon:](https://forum.freecodecamp.com/images/emoji/emoji_one/speech_balloon.png?v=3 "：speech_balloon：")提示：1

创建一个数组，其中包含原始数组中缺少的所有数字，以便更容易检查何时必须检查偶数除法。

> _现在尝试解决问题_

## ![:speech_balloon:](https://forum.freecodecamp.com/images/emoji/emoji_one/speech_balloon.png?v=3 "：speech_balloon：")提示：2

您可以使用余数运算符（ `%` ）来检查除法的提示是否为0，这意味着它可以被整除。

> _现在尝试解决问题_

## ![:speech_balloon:](https://forum.freecodecamp.com/images/emoji/emoji_one/speech_balloon.png?v=3 "：speech_balloon：")提示：3

如果您将数组从最大到最小排序，那么您可以使用前两个数字作为最小公共倍数的第一个检查。这是因为它们更可能是最小的普通倍数而不是较低的数字。

> _现在尝试解决问题_

## 扰流警报！

![警告牌](//discourse-user-assets.s3.amazonaws.com/original/2X/2/2d6c412a50797771301e7ceabd554cef4edcd74d.gif)

**提前解决！**

## ![:beginner:](https://forum.freecodecamp.com/images/emoji/emoji_one/beginner.png?v=3 "：初学者：")基本代码解决方案
```
function smallestCommons(arr) { 
  // Sort array from greater to lowest 
  // This line of code was from Adam Doyle (http://github.com/Adoyle2014) 
  arr.sort(function(a, b) { 
    return b - a; 
  }); 
 
  // Create new array and add all values from greater to smaller from the 
  // original array. 
  var newArr = []; 
  for (var i = arr[0]; i >= arr[1]; i--) { 
    newArr.push(i); 
  } 
 
  // Variables needed declared outside the loops. 
  var quot = 0; 
  var loop = 1; 
  var n; 
 
  // Run code while n is not the same as the array length. 
  do { 
    quot = newArr[0] * loop * newArr[1]; 
    for (n = 2; n < newArr.length; n++) { 
      if (quot % newArr[n] !== 0) { 
        break; 
      } 
    } 
 
    loop++; 
  } while (n !== newArr.length); 
 
  return quot; 
 } 
 
 // test here 
 smallestCommons([1,5]); 
```

![:rocket:](https://forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=3 "：火箭：") [运行代码](https://repl.it/CLn2/0)

### 代码说明：

*   由于最小公分母可能是两个最大数字之一，因此首先检查它们是有意义的，因此对数组进行排序。
*   创建一个新数组以对所有数字`newArr`进行排序。
*   使用降序`for`循环（ `var i = arr[0]; i >= arr[1]; i--` ）在新数组中添加从最大到最小的数字。
*   声明商的变量，以便我们可以在循环外访问它们：
    *   那将是我们最小的共同倍数（ `quot` ）的商
    *   我们正在检查的循环数（ `loop` ）
    *   数组的索引（ `n` ）
*   使用`do` `while`循环来检查我们需要什么，而`n`与新数组的长度不同。
*   在`do`部分中，我们将乘以第一个数字，乘以循环次数乘以第二个数字（ `quot = newArr[0] * loop * newArr[1];` ）。
*   `loop`部分将允许我们增加我们检查的数量超出我们所拥有的最大数量，而无需更改算法。
*   我们输入一个`for`循环，它将从`n` `n < newArr.length` 1（ `loop++` ），同时它小于具有所有数字的数组（ `n < newArr.length` ）。
*   如果商不均匀分配（ `quot % newArr[n] !== 0` ），则停止循环（ `break;` ）。如果它是偶数，那么检查数组中的下一个元素（ `n++` ），直到它不均匀或我们找到答案。
*   在循环之外，增加循环的值（ `loop++` ）。
*   在循环结束时返回商（ `return quot;` ）。

注意：如果数组只有两个元素，则`for`循环永远不会被使用，返回值是所述数字的乘积。

#### 相关链接

*   [JS数组原型排序](http://forum.freecodecamp.com/t/javascript-array-prototype-sort/14306)
*   [JS for Loops解释](http://forum.freecodecamp.com/t/javascript-for-loop/14666s-Explained)
*   [JS阵列原型推送](http://forum.freecodecamp.com/t/javascript-array-prototype-push/14298)
*   [JS Do While Loop](http://forum.freecodecamp.com/t/javascript-do-while-loop/14662)
*   string.length减

## ![:sunflower:](https://forum.freecodecamp.com/images/emoji/emoji_one/sunflower.png?v=3 "：向日葵：")中级代码解决方案：
```
function smallestCommons(arr) { 
    var range = []; 
    for (var i = Math.max(arr[0], arr[1]); i >= Math.min(arr[0], arr[1]); i--) { 
    range.push(i); 
    } 
 
    // can use reduce() in place of this block 
    var lcm = range[0]; 
    for (i = 1; i < range.length; i++) { 
    var GCD = gcd(lcm, range[i]); 
    lcm = (lcm * range[i]) / GCD; 
    } 
    return lcm; 
 
    function gcd(x, y) {    // Implements the Euclidean Algorithm 
    if (y === 0) 
        return x; 
    else 
        return gcd(y, x%y); 
    } 
 } 
 
 // test here 
 smallestCommons([1,5]); 
```

![:rocket:](https://forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=3 "：火箭：") [运行代码](https://repl.it/CLn4/0)

### 代码说明：

*   第一个基本解决方案需要超过2,000个循环来计算测试用例`smallestCommons([1,13])` ，以及超过400万个循环来计算`smallestCommons([1,25])` 。该解决方案通过使用更有效的算法评估40个循环中的`smallestCommons([1,13])`和40中的`smallestCommons([1,25])` 。
*   创建一个空数组**范围** 。
*   使用`for`循环将给定范围之间的所有数字推到**范围** 。
*   下一个代码块实现了Euclidean算法，该算法用于查找最小的公共倍数。

#### 相关链接

*   [欧几里德算法](https://en.wikipedia.org/wiki/Euclidean_algorithm)
*   [JS Math Max](http://forum.freecodecamp.com/t/javascript-math-max/14682)
*   [JS Math Min](http://forum.freecodecamp.com/t/javascript-math-min/14684)

## ![:rotating_light:](https://forum.freecodecamp.com/images/emoji/emoji_one/rotating_light.png?v=3 "：rotating_light：")高级代码解决方案
```
function smallestCommons(arr) { 
 
  // range 
  let min = Math.min.apply(null, arr); 
  let max = Math.max.apply(null, arr); 
 
  let smallestCommon = lcm(min, min + 1); 
 
  while(min < max) { 
    min++; 
    smallestCommon = lcm(smallestCommon, min); 
  } 
 
  return smallestCommon; 
 } 
 
 /** 
 * Calculates Greatest Common Divisor 
 * of two nubers using Euclidean algorithm 
 * https://en.wikipedia.org/wiki/Euclidean_algorithm 
 */ 
 function gcd(a, b) { 
  while (b > 0) { 
    let tmp = a; 
    a = b; 
    b = tmp % b; 
  } 
  return a; 
 } 
 
 /** 
 * Calculates Least Common Multiple 
 * for two numbers utilising GCD 
 */ 
 function lcm(a, b) { 
  return (a * b / gcd(a, b)); 
 } 
 
 
 // test here 
 smallestCommons([1,5]); 
```

![:rocket:](https://forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=3 "：火箭：") [运行代码](https://repl.it/MR9P/latest)

### 代码说明：

*   从提供的**arr中**提取最小值和最大值。
*   使用前两个数字的最小公倍数初始化**最小**公共。
*   循环通过当前LCM的范围计算LCM和范围**lcm（a，b，c）= lcm（lcm（a，b），c）的下一个数字** 。

#### 相关链接

*   [JS Function.prototype.apply（）](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/apply)

## ![:clipboard:](https://forum.freecodecamp.com/images/emoji/emoji_one/clipboard.png?v=3 "：剪贴板：")捐款说明：

*   ![:warning:](https://forum.freecodecamp.com/images/emoji/emoji_one/warning.png?v=3 "：警告：") **请勿**添加与任何现有解决方案类似的解决方案。如果您认为它**_相似但更好_** ，那么尝试合并（或替换）现有的类似解决方案。
*   添加解决方案的说明。
*   将解决方案分为以下类别之一 - **基本** ， **中级**和**高级** 。 ![:traffic_light:](https://forum.freecodecamp.com/images/emoji/emoji_one/traffic_light.png?v=3 "：红绿灯：")
*   如果您添加了任何**相关的主要内容，**请仅添加您的用户名。 （ ![:warning:](https://forum.freecodecamp.com/images/emoji/emoji_one/warning.png?v=3 "：警告：") **_不要_** _删除任何现有的用户名_ ）

> 看到![:point_right:](https://forum.freecodecamp.com/images/emoji/emoji_one/point_right.png?v=3 "：point_right：") [**`Wiki Challenge Solution Template`**](http://forum.freecodecamp.com/t/algorithm-article-template/14272)供参考。