---
title: Steamroller
localeTitle: 压路机
---
![:triangular_flag_on_post:](https://forum.freecodecamp.com/images/emoji/emoji_one/triangular_flag_on_post.png?v=3 "：triangular_flag_on_post：")如果卡住，请记得使用**`Read-Search-Ask`** 。尝试配对程序![:busts_in_silhouette:](https://forum.freecodecamp.com/images/emoji/emoji_one/busts_in_silhouette.png?v=3 "：busts_in_silhouette：")并编写自己的代码![:pencil:](https://forum.freecodecamp.com/images/emoji/emoji_one/pencil.png?v=3 "：铅笔：")

### ![:checkered_flag:](https://forum.freecodecamp.com/images/emoji/emoji_one/checkered_flag.png?v=3 "：checkered_flag：")问题说明：

这个问题看起来很简单，但你需要确保扁平化任何数组，无论级别是什么，这会给问题增加一些难度。

#### 相关链接

*   [Array.isArray（）](http://forum.freecodecamp.com/t/javascript-array-isarray/14284)

## ![:speech_balloon:](https://forum.freecodecamp.com/images/emoji/emoji_one/speech_balloon.png?v=3 "：speech_balloon：")提示：1

您需要检查元素是否是数组。

> _现在尝试解决问题_

## ![:speech_balloon:](https://forum.freecodecamp.com/images/emoji/emoji_one/speech_balloon.png?v=3 "：speech_balloon：")提示：2

如果您正在处理数组，那么您需要通过获取数组内的值来展平它。这意味着如果你有[\[4\]然后而不是返回\[4\]你需要返回4.如果你得到\[\[\[4\]\]\]那么相同，你想要4.你可以用arr \[index1\]访问它\[index2\]更深层次。](https://forum.freecodecamp.com/images/emoji/emoji_one/speech_balloon.png?v=3 ":speech_balloon:")

> _现在尝试解决问题_

## ！\[：speech\_balloon：提示：3

您肯定需要递归或其他方式来超越两级数组，以使代码灵活，而不是硬编码到所需的答案。玩的开心！

> _现在尝试解决问题_

## 扰流警报！

![警告牌](//discourse-user-assets.s3.amazonaws.com/original/2X/2/2d6c412a50797771301e7ceabd554cef4edcd74d.gif)

**提前解决！**

## ![:beginner:](https://forum.freecodecamp.com/images/emoji/emoji_one/beginner.png?v=3 "：初学者：")基本代码解决方案
```
function steamrollArray(arr) { 
  var flattenedArray = []; 
 
  // Create function that adds an element if it is not an array. 
  // If it is an array, then loops through it and uses recursion on that array. 
  var flatten = function(arg) { 
    if (!Array.isArray(arg)) { 
      flattenedArray.push(arg); 
    } else { 
      for (var a in arg) { 
        flatten(arg[a]); 
      } 
    } 
  }; 
 
  // Call the function for each element in the array 
  arr.forEach(flatten); 
  return flattenedArray; 
 } 
 
 // test here 
 steamrollArray([1, [2], [3, [[4]]]]); 
```

![:rocket:](https://forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=3 "：火箭：") [运行代码](https://repl.it/CLnh/0)

### 代码说明：

*   创建一个新变量以保持展平的数组。
*   创建一个将非数组元素添加到新变量的函数，对于那些数组，它循环遍历它们以获取元素。
*   它通过使用递归来实现，如果元素是一个数组，那么再次使用一层数组调用该函数来检查它是否是一个数组。如果不是那么将非数组元素推送到返回的变量。否则，继续深入。
*   调用该函数，第一次总是将它传递给一个数组，因此它总是落入isArray分支
*   返回展平的数组。

#### 相关链接

*   [的Array.push（）](http://forum.freecodecamp.com/t/javascript-array-prototype-push/14298)
*   [Array.forEach（）](http://forum.freecodecamp.com/t/javascript-array-prototype-foreach/14290)

## ![:sunflower:](https://forum.freecodecamp.com/images/emoji/emoji_one/sunflower.png?v=3 "：向日葵：")中级代码解决方案：
```
function steamrollArray(arr) { 
  let flat = [].concat(...arr); 
  return flat.some(Array.isArray) ? steamrollArray(flat) : flat; 
 } 
 
 flattenArray([1, [2], [3, [[4]]]]); 
```

![:rocket:](https://forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=3 "：火箭：") [运行代码](https://repl.it/CLni/0)

### 代码说明：

*   使用spread运算符将`arr`每个元素与一个空数组连接起来
*   使用`Array.some()`方法查明新数组是否仍包含数组
*   如果是这样，再次使用递归调用`steamrollArray` ，传入新数组以在深度嵌套的数组上重复该过程
*   如果没有，则返回展平的阵列

#### 相关链接

*   [Array.some](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/some)
*   [Array.concat](http://forum.freecodecamp.com/t/javascript-array-prototype-concat/14286)
*   [传播运营商](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_operator)
*   [三元算子（ `condition ? a : b` ）](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Conditional_Operator)

## ![:rotating_light:](https://forum.freecodecamp.com/images/emoji/emoji_one/rotating_light.png?v=3 "：rotating_light：")高级代码解决方案
```
function steamrollArray(arr) { 
  return arr.toString() 
    .replace(',,', ',')       // "1,2,,3" => "1,2,3" 
    .split(',')               // ['1','2','3'] 
    .map(function(v) { 
      if (v == '[object Object]') { // bring back empty objects 
        return {}; 
      } else if (isNaN(v)) {        // if not a number (string) 
        return v; 
      } else { 
        return parseInt(v);         // if a number in a string, convert it 
      } 
    }); 
 } 
```

![:rocket:](https://forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=3 "：火箭：") [运行代码](https://repl.it/CpDy/4)

### 代码说明：

*   首先，我们将数组转换为一个字符串，它将为我们提供一个由逗号分隔的数字字符串，如果有空数组，则为双逗号;如果有对象，则为文字对象文本，我们稍后可以在if语句中修复它。
*   我们用一个替换双逗号，然后将它分成一个数组。
*   映射数组并修复对象值并将字符串数转换为常规数。

## ![:clipboard:](https://forum.freecodecamp.com/images/emoji/emoji_one/clipboard.png?v=3 "：剪贴板：")捐款说明：

*   ![:warning:](https://forum.freecodecamp.com/images/emoji/emoji_one/warning.png?v=3 "：警告：") **请勿**添加与任何现有解决方案类似的解决方案。如果您认为它**_相似但更好_** ，那么尝试合并（或替换）现有的类似解决方案。
*   添加解决方案的说明。
*   将解决方案分为以下类别之一 - **基本** ， **中级**和**高级** 。 ![:traffic_light:](https://forum.freecodecamp.com/images/emoji/emoji_one/traffic_light.png?v=3 "：红绿灯：")

> 看到![:point_right:](https://forum.freecodecamp.com/images/emoji/emoji_one/point_right.png?v=3 "：point_right：") [**`Wiki Challenge Solution Template`**](http://forum.freecodecamp.com/t/algorithm-article-template/14272)供参考。