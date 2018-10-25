---
title: Find the Symmetric Difference
localeTitle: 找到对称差异
---
![:triangular_flag_on_post:](https://forum.freecodecamp.com/images/emoji/emoji_one/triangular_flag_on_post.png?v=3 "：triangular_flag_on_post：")如果卡住，请记得使用[**`Read-Search-Ask`**](https://forum.freecodecamp.org/t/how-to-get-help-when-you-are-stuck/) 。尝试配对程序![:busts_in_silhouette:](https://forum.freecodecamp.com/images/emoji/emoji_one/busts_in_silhouette.png?v=3 "：busts_in_silhouette：")并编写自己的代码![:pencil:](https://forum.freecodecamp.com/images/emoji/emoji_one/pencil.png?v=3 "：铅笔：")

### ![:checkered_flag:](https://forum.freecodecamp.com/images/emoji/emoji_one/checkered_flag.png?v=3 "：checkered_flag：")问题说明：

两组的对称差异（通常用Δ表示）是在两组中的任一组中的元素集，但在两者中都不是。

例如， `sym([1, 2, 3], [5, 2, 1, 4])`应该产生`[3, 4, 5]` 。

根据上述定义，三组_A_ ， _B_和_C的_对称差异可表示为`(A &Delta; B) &Delta; C`

#### 相关链接

*   [对称差异 - 维基百科](https://en.wikipedia.org/wiki/Symmetric_difference)
*   [对称差异 - YouTube](https://www.youtube.com/watch?v=PxffSUQRkG4)

[](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce)

[## ![:speech_balloon:](https://forum.freecodecamp.com/images/emoji/emoji_one/speech_balloon.png?v=3 "：speech_balloon：")提示：1

_arguments_对象是类似_Array_的对象，只继承`Array.length`属性。因此，请考虑将其转换为实际的_数组_ 。

> _现在尝试解决问题_

## ![:speech_balloon:](https://forum.freecodecamp.com/images/emoji/emoji_one/speech_balloon.png?v=3 "：speech_balloon：")提示：2

Deem编写一个辅助函数，在每次调用时返回两个数组的对称差异，而不是试图同时区分所有集合。

> _现在尝试解决问题_

## ![:speech_balloon:](https://forum.freecodecamp.com/images/emoji/emoji_one/speech_balloon.png?v=3 "：speech_balloon：")提示：3

对创建的arguments数组应用辅助函数，递归地逐对减少元素，以形成预期的输出。

**注意** 在_奇数个集合_的情况下，对称差异将包括在所有给定集合中存在的相同元素。例如;
```
A = {1, 2, 3} 
 B = {2, 3, 4} 
 C = {3, 4, 5} 
 
 (A &Intersection; B) &Intersection; C = {1, 4} &Intersection {3, 4, 5} 
 A &Intersection; B = {1, 3, 5} 
```

> _现在尝试解决问题_

## 扰流警报！

![:warning:](//discourse-user-assets.s3.amazonaws.com/original/2X/2/2d6c412a50797771301e7ceabd554cef4edcd74d.gif "：警告：")

**提前解决！**

## ![:beginner:](https://forum.freecodecamp.com/images/emoji/emoji_one/beginner.png?v=3 "：初学者：")基本代码解决方案

```javascript
    function sym() { 
      var args = []; 
      for (var i = 0; i < arguments.length; i++) { 
        args.push(arguments[i]); 
      } 
 
      function symDiff(arrayOne, arrayTwo) { 
        var result = []; 
 
        arrayOne.forEach(function(item) { 
          if (arrayTwo.indexOf(item) < 0 && result.indexOf(item) < 0) { 
            result.push(item); 
          } 
        }); 
 
        arrayTwo.forEach(function(item) { 
          if (arrayOne.indexOf(item) < 0 && result.indexOf(item) < 0) { 
            result.push(item); 
          } 
        }); 
 
        return result; 
      } 
 
      // Apply reduce method to args array, using the symDiff function 
      return args.reduce(symDiff); 
    } 

```](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce) 

 [![:rocket:](https://forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=3 "：火箭：")](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce) [运行代码](https://repl.it/C4II/0)

### 代码说明：

*   `push()`用于将_arguments_对象分解为数组_args_ 。
*   `symDiff`函数查找两个集合之间的对称差异。它用作_args上_调用的`reduce()`方法的回调函数。
*   `arrayOne.forEach()`将元素推送到_结果_ ，这些元素仅存在于_arrayOne中_ ，并且还不是_结果_的一部分。
*   `arrayTwo.forEach()`将元素推送到_结果中_ ，这些元素仅存在于_arrayTwo中_ ，并且还不是_结果_的一部分。
*   返回_结果_ ，即对称差异。此解决方案适用于任意数量的集合。

#### 相关链接

*   [JavaScript for](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/statements/for)
*   [JavaScript Array.length](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Array/length)
*   [JavaScript Array.prototype.push（）](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/push)
*   [JavaScript Array.prototype.forEach（）](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach)
*   [JavaScript Array.prototype.indexOf（）](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf)

## ![:sunflower:](https://forum.freecodecamp.com/images/emoji/emoji_one/sunflower.png?v=3 "：向日葵：")中级代码解决方案：

```javascript
    function sym() { 
 
      // Convert the argument object into a proper array 
      var args = Array.prototype.slice.call(arguments); 
 
      // Return the symmetric difference of 2 arrays 
      var getDiff = function(arr1, arr2) { 
 
        // Returns items in arr1 that don't exist in arr2 
        function filterFunction(arr1, arr2) { 
          return arr1.filter(function(item) { 
            return arr2.indexOf(item) === -1; 
          }); 
        } 
 
        // Run filter function on each array against the other 
        return filterFunction(arr1, arr2) 
          .concat(filterFunction(arr2, arr1)); 
      }; 
 
      // Reduce all arguments getting the difference of them 
      var summary = args.reduce(getDiff, []); 
 
      // Run filter function to get the unique values 
      var unique = summary.filter(function(elem, index, self) { 
        return index === self.indexOf(elem); 
        }); 
      return unique; 
    } 
 
    // test here 
    sym([1, 2, 3], [5, 2, 1, 4]); 
```

![:rocket:](https://forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=3 "：火箭：") [运行代码](https://repl.it/CLoc/0)

### 代码说明：

*   `slice()`方法用于将_arguments_对象分解为数组_args_ 。
*   `getDiff`函数查找两个集合_arr1_和_arr2_之间的对称差异。它用作_args上_调用的`reduce()`方法的回调函数。
*   第一个`filterFunction()`返回_arr1_中_arr2中_不存在的元素。
*   下一个`filterFunction()`在每个数组`filterFunction()`对于另一个运行，以检查第一次检查唯一性的反转并连接它。
*   _摘要_包含减少的参数。
*   `filter()`用在_总结_只保留唯一值，并返回_唯一的_ 。

#### 相关链接

*   [JavaScript Array.prototype.slice（）](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice)
*   [JavaScript Array.prototype.filter（）](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter)
*   [JavaScript Array.prototype.concat（）](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/concat)

## ![:rotating_light:](https://forum.freecodecamp.com/images/emoji/emoji_one/rotating_light.png?v=3 "：rotating_light：")高级代码解决方案

```javascript
    function sym() { 
      let argv = Array.from(arguments).reduce(diffArray); 
      return argv.filter((element, index, array) => index === array.indexOf(element));//remove duplicates 
    } 
 
    function diffArray(arr1, arr2) { 
      return arr1 
        .filter(element => !arr2.includes(element)) 
        .concat(arr2.filter(element => !arr1.includes(element))); 
    } 
 
    // test here 
    sym([1, 2, 3], [5, 2, 1, 4]); 
```

![:rocket:](https://forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=3 "：火箭：") [运行代码](https://repl.it/@ashenm/Symmetric-Difference)

### 代码说明：

*   主函数_sym（）_从_参数_创建一个数组，并使用辅助函数_diffArray（）_将其元素_简化_为单个数组。
    
*   函数_diffArray（）_通过挑选参数化数组中的唯一元素来返回两个数组的对称差异; _arr1_和_arr2_ 。
    

#### 相关链接

*   [JavaScript Array.from（）](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/from)
*   [JavaScript Array.prototype.filter（）](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter)

## ![:clipboard:](https://forum.freecodecamp.com/images/emoji/emoji_one/clipboard.png?v=3 "：剪贴板：")捐款说明：

*   ![:warning:](https://forum.freecodecamp.com/images/emoji/emoji_one/warning.png?v=3 "：警告：") **请勿**添加与任何现有解决方案类似的解决方案。如果您认为它**_相似但更好_** ，那么尝试合并（或替换）现有的类似解决方案。
*   添加解决方案的说明。
*   将解决方案分为以下类别之一 - **基本** ， **中级**和**高级** 。 ![:traffic_light:](https://forum.freecodecamp.com/images/emoji/emoji_one/traffic_light.png?v=3 "：红绿灯：")
*   如果您添加了任何**相关的主要内容，**请仅添加您的用户名。 （ ![:warning:](https://forum.freecodecamp.com/images/emoji/emoji_one/warning.png?v=3 "：警告：") **_不要_** _删除任何现有的用户名_ ）

> 看到![:point_right:](https://forum.freecodecamp.com/images/emoji/emoji_one/point_right.png?v=3 "：point_right：") [**`Wiki Challenge Solution Template`**](http://forum.freecodecamp.com/t/algorithm-article-template/14272)供参考。