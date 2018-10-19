---
title: Sum All Odd Fibonacci Numbers
localeTitle: 求所有奇数斐波纳契数
---
![:triangular_flag_on_post:](https://forum.freecodecamp.com/images/emoji/emoji_one/triangular_flag_on_post.png?v=3 "：triangular_flag_on_post：")如果卡住，请记得使用**`Read-Search-Ask`** 。尝试配对程序![:busts_in_silhouette:](https://forum.freecodecamp.com/images/emoji/emoji_one/busts_in_silhouette.png?v=3 "：busts_in_silhouette：")并编写自己的代码![:pencil:](https://forum.freecodecamp.com/images/emoji/emoji_one/pencil.png?v=3 "：铅笔：")

### ![:checkered_flag:](https://forum.freecodecamp.com/images/emoji/emoji_one/checkered_flag.png?v=3 "：checkered_flag：")问题说明：

您将需要收集所有**Fibonacci**数字，然后检查奇数。一旦你得到奇怪的，那么你将把它们全部添加。最后一个数字应该是作为参数给出的数字，如果它实际上恰好是一个偏离的斐波纳契数。

#### 相关链接

*   [斐波纳契数](https://en.wikipedia.org/wiki/Fibonacci_number)

## ![:speech_balloon:](https://forum.freecodecamp.com/images/emoji/emoji_one/speech_balloon.png?v=3 "：speech_balloon：")提示：1

要获得系列的下一个数字，您需要将当前的数字添加到前一个系列，这将为您提供下一个系列。

> _现在尝试解决问题_

## ![:speech_balloon:](https://forum.freecodecamp.com/images/emoji/emoji_one/speech_balloon.png?v=3 "：speech_balloon：")提示：2

要检查数字是否均匀，您需要检查的是`number % 2 == 0` 。

> _现在尝试解决问题_

## ![:speech_balloon:](https://forum.freecodecamp.com/images/emoji/emoji_one/speech_balloon.png?v=3 "：speech_balloon：")提示：3

当你得到下一个奇怪的那个时，不要忘记将它添加到一个可以在最后返回的全局变量。 `result += currNumber;`会做的伎俩。

> _现在尝试解决问题_

## 扰流警报！

![警告牌](//discourse-user-assets.s3.amazonaws.com/original/2X/2/2d6c412a50797771301e7ceabd554cef4edcd74d.gif)

**提前解决！**

## ![:beginner:](https://forum.freecodecamp.com/images/emoji/emoji_one/beginner.png?v=3 "：初学者：")基本代码解决方案
```
function sumFibs(num) { 
    var prevNumber = 0; 
    var currNumber = 1; 
    var result = 0; 
    while (currNumber <= num) { 
        if (currNumber % 2 !== 0) { 
            result += currNumber; 
        } 
 
        currNumber += prevNumber; 
        prevNumber = currNumber - prevNumber; 
    } 
 
    return result; 
 } 
 
 // test here 
 sumFibs(4); 
```

![:rocket:](https://forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=3 "：火箭：") [运行代码](https://repl.it/CLnV/0)

### 代码说明：

*   创建一个变量以记录当前和之前的数字以及将返回的结果。
*   使用while循环确保我们不会超过作为参数给出的数字。
*   我们使用模运算来检查当前数字是奇数还是偶数。如果是偶数，请将其添加到结果中。
*   通过旋转获取下一个数字并在之后交换值来完成斐波纳契圆。
*   返回结果。

#### 相关链接

*   JS while Loop

## ![:sunflower:](https://forum.freecodecamp.com/images/emoji/emoji_one/sunflower.png?v=3 "：向日葵：")中级代码解决方案：
```
function sumFibs(num) { 
    // Perform checks for the validity of the input 
    if (num < 0) return -1; 
    if (num === 0 || num === 1) return 1; 
 
    // Create an array of fib numbers till num 
    const arrFib = [1, 1]; 
    let nextFib = 0; 
 
    // We put the new Fibonacci numbers to the front so we 
    // don't need to calculate the length of the array on each 
    // iteration 
    while((nextFib = arrFib[0] + arrFib[1]) <= num) { 
        arrFib.unshift(nextFib); 
    } 
 
    // Sum only the odd numbers and return the value 
    return arrFib.reduce((acc, curr) => { 
        return acc + curr * (curr % 2); 
    }); 
 } 
 
 // test here 
 sumFibs(4); 
```

![:rocket:](https://forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=3 "：火箭：") [运行代码](https://repl.it/@kr3at0/SumAllOddFibonacciNumbers)

### 代码说明：

*   创建一个斐波纳契数列，直到**num** 。
*   使用`reduce()`方法查找数组奇数成员的总和。
*   归还总和。

#### 相关链接

*   [JS阵列原型推送](http://forum.freecodecamp.com/t/javascript-array-prototype-push/14298)
*   [JS for Loops解释](http://forum.freecodecamp.com/t/javascript-for-loop/14666s-Explained)
*   [JS Array Prototype Reduce](http://forum.freecodecamp.com/t/javascript-array-prototype-reduce/14299)

## ![:clipboard:](https://forum.freecodecamp.com/images/emoji/emoji_one/clipboard.png?v=3 "：剪贴板：")捐款说明：

*   ![:warning:](https://forum.freecodecamp.com/images/emoji/emoji_one/warning.png?v=3 "：警告：") **请勿**添加与任何现有解决方案类似的解决方案。如果您认为它**_相似但更好_** ，那么尝试合并（或替换）现有的类似解决方案。
*   添加解决方案的说明。
*   将解决方案分为以下类别之一 - **基本** ， **中级**和**高级** 。 ![:traffic_light:](https://forum.freecodecamp.com/images/emoji/emoji_one/traffic_light.png?v=3 "：红绿灯：")
*   如果您添加了任何**相关的主要内容，**请仅添加您的用户名。 （ ![:warning:](https://forum.freecodecamp.com/images/emoji/emoji_one/warning.png?v=3 "：警告：") **_不要_** _删除任何现有的用户名_ ）

> 看到![:point_right:](https://forum.freecodecamp.com/images/emoji/emoji_one/point_right.png?v=3 "：point_right：") [**`Wiki Challenge Solution Template`**](http://forum.freecodecamp.com/t/algorithm-article-template/14272)供参考。