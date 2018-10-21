---
title: Sorted Union
localeTitle: 排序联盟
---
![:triangular_flag_on_post:](https://forum.freecodecamp.com/images/emoji/emoji_one/triangular_flag_on_post.png?v=3 "：triangular_flag_on_post：")如果卡住，请记得使用**`Read-Search-Ask`** 。尝试配对程序![:busts_in_silhouette:](https://forum.freecodecamp.com/images/emoji/emoji_one/busts_in_silhouette.png?v=3 "：busts_in_silhouette：")并编写自己的代码![:pencil:](https://forum.freecodecamp.com/images/emoji/emoji_one/pencil.png?v=3 "：铅笔：")

### ![:checkered_flag:](https://forum.freecodecamp.com/images/emoji/emoji_one/checkered_flag.png?v=3 "：checkered_flag：")问题说明：

程序必须按照它们显示的顺序从两个原始数组返回一个新的唯一值数组。因此不需要排序，也不应该有任何重复。

#### 相关链接

*   [JS Arguments](http://forum.freecodecamp.com/t/javascript-arguments/14283)

## ![:speech_balloon:](https://forum.freecodecamp.com/images/emoji/emoji_one/speech_balloon.png?v=3 "：speech_balloon：")提示：1

由于您不知道传递了多少参数，因此最好在循环遍历数组之前循环遍历**参数** 。

> _现在尝试解决问题_

## ![:speech_balloon:](https://forum.freecodecamp.com/images/emoji/emoji_one/speech_balloon.png?v=3 "：speech_balloon：")提示：2

没有必要使用循环。如果需要，可以使用`map()` ， `reduce()`等功能。

> _现在尝试解决问题_

## ![:speech_balloon:](https://forum.freecodecamp.com/images/emoji/emoji_one/speech_balloon.png?v=3 "：speech_balloon：")提示：3

您必须检查要为每个值返回的数组上是否已存在当前值。

> _现在尝试解决问题_

## 扰流警报！

![警告牌](//discourse-user-assets.s3.amazonaws.com/original/2X/2/2d6c412a50797771301e7ceabd554cef4edcd74d.gif)

**提前解决！**

## ![:beginner:](https://forum.freecodecamp.com/images/emoji/emoji_one/beginner.png?v=3 "：初学者：")基本代码解决方案
```
function uniteUnique(arr1, arr2, arr3) { 
  // Creates an empty array to store our final result. 
  var finalArray = []; 
 
  // Loop through the arguments object to truly made the program work with two or more arrays 
  // instead of 3. 
  for (var i = 0; i < arguments.length; i++) { 
    var arrayArguments = arguments[i]; 
 
    // Loops through the array at hand 
    for (var j = 0; j < arrayArguments.length; j++) { 
      var indexValue = arrayArguments[j]; 
 
      // Checks if the value is already on the final array. 
      if (finalArray.indexOf(indexValue) < 0) { 
        finalArray.push(indexValue); 
      } 
    } 
  } 
 
  return finalArray; 
 } 
 
 // test here 
 uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]); 
```

![:rocket:](https://forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=3 "：火箭：") [运行代码](https://repl.it/CLnM/0)

### 代码说明：

*   创建空数组**finalResult**以存储最终结果。
*   循环遍历外部循环中的**arguments**对象并将其存储在**arrayArguments中** 。
*   内循环用于循环遍历各个数组元素。
*   如果**finalArray中**尚不存在该元素，请添加它。
*   返回**finalArray** 。

#### 相关链接

*   [JS for Loops解释](http://forum.freecodecamp.com/t/javascript-for-loop/14666s-Explained)
*   [array.length](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Array/length)
*   [JS String Prototype IndexOf](http://forum.freecodecamp.com/t/javascript-string-prototype-indexof/15936)
*   [JS阵列原型推送](http://forum.freecodecamp.com/t/javascript-array-prototype-push/14298)

## 替代基本代码解决方案

```javascript
function uniteUnique(arr) { 
  var args = [...arguments]; 
  var result = []; 
  for(var i = 0; i < args.length; i++) { 
    for(var j = 0; j < args[i].length; j++) { 
       if(!result.includes(args[i][j])) { 
        result.push(args[i][j]); 
      } 
    } 
  } 
  return result; 
 } 
 
 uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]); 
```

## ![:sunflower:](https://forum.freecodecamp.com/images/emoji/emoji_one/sunflower.png?v=3 "：向日葵：")中级代码解决方案：
```
function uniteUnique(arr1, arr2, arr3) { 
 var newArr; 
 //Convert the arguments object into an array 
  var args = Array.prototype.slice.call(arguments); 
  //Use reduce function to flatten the array 
  newArr = args.reduce(function(arrA,arrB){ 
  //Apply filter to remove the duplicate elements in the array 
    return arrA.concat(arrB.filter(function(i){ 
      return arrA.indexOf(i) === -1; 
    })); 
  }); 
 
   return newArr; 
 } 
 
 // test here 
 uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]); 
```

![:rocket:](https://forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=3 "：火箭：") [运行代码](https://repl.it/CLnO/0)

### 代码说明：

*   **arguments**对象使用`slice()`转换为数组。
*   `reduce()`函数用于展平数组，即，对于数组中的每个元素（或嵌套数组），将其元素提取到一维数组中。
*   展平数组后， `filter()`用于从**newArr中**删除重复的元素。

#### 相关链接

*   [JS阵列原型切片](http://forum.freecodecamp.com/t/javascript-array-prototype-slice/14302)
*   [JS Array Prototype Reduce](http://forum.freecodecamp.com/t/javascript-array-prototype-reduce/14299)
*   [JS Array Prototype Concat](http://forum.freecodecamp.com/t/javascript-array-prototype-concat/14286)
*   [JS数组原型过滤器](http://forum.freecodecamp.com/t/javascript-array-prototype-filter/14289)

## ![:rotating_light:](https://forum.freecodecamp.com/images/emoji/emoji_one/rotating_light.png?v=3 "：rotating_light：")高级代码解决方案
```
function uniteUnique() { 
  var concatArr = []; 
  var i = 0; 
  while (arguments[i]){ 
    concatArr = concatArr.concat(arguments[i]); i++; 
  } 
  uniqueArray = concatArr.filter(function(item, pos) { 
    return concatArr.indexOf(item) == pos; 
  }); 
  return uniqueArray; 
 } 
 
 // test here 
 uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]); 
```

![:rocket:](https://forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=3 "：火箭：") [运行代码](https://repl.it/CLnN/0)

### 代码说明：

*   参数的数量可以动态改变，因此我们不需要为函数`uniteUnique()`提供参数。
*   我们使用`while`循环将所有参数连接到一个名为**concatArr的**数组中。
*   我们使用`filter()`通过检查每个元素的索引并删除具有不同位置的相同元素来删除重复元素。
*   订购将保留在这里。

#### 相关链接

*   JS While Loop

## ![:rotating_light:](https://forum.freecodecamp.com/images/emoji/emoji_one/rotating_light.png?v=3 "：rotating_light：")使用ES2015的替代代码解决方案
```
//jshint esversion:6 
 
 function uniteUnique(...arrays) { 
 
  //make an array out of the given arrays and flatten it (using the spread operator) 
  const flatArray = [].concat(...arrays); 
 
  // create a Set which clears any duplicates since it's a regulat set and not a multiset 
  return [...new Set(flatArray)]; 
 } 
 
 // test here 
 uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]); 
```

![:rocket:](https://forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=3 "：火箭：") [运行代码](https://repl.it/CcWk/0)

### 代码说明：

*   我们首先使用带有空数组的`concat()` `<a href='http://exploringjs.com/es6/ch_maps-sets.html#_set' target='_blank' rel='nofollow'>]`作为起点， spread运算符`...`从Arguments对象中创建一个数组并同时展平它
*   然后我们使用新的ES2015 **Set**对象来存储唯一值
*   （要了解有关集合的更多信息，请阅读\[此处\]

#### 相关链接

*   [Array.prototype.concat](http://forum.freecodecamp.com/t/javascript-array-prototype-concat/14286)
*   [参数](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/arguments)
*   [组](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set)

## ![:clipboard:](https://forum.freecodecamp.com/images/emoji/emoji_one/clipboard.png?v=3 "：剪贴板：")捐款说明：

*   ![:warning:](https://forum.freecodecamp.com/images/emoji/emoji_one/warning.png?v=3 "：警告：") **请勿**添加与任何现有解决方案类似的解决方案。如果您认为它**_相似但更好_** ，那么尝试合并（或替换）现有的类似解决方案。
*   添加解决方案的说明。
*   将解决方案分为以下类别之一 - **基本** ， **中级**和**高级** 。 ![:traffic_light:](https://forum.freecodecamp.com/images/emoji/emoji_one/traffic_light.png?v=3 "：红绿灯：")
*   如果您添加了任何**相关的主要内容，**请仅添加您的用户名。 （ ![:warning:](https://forum.freecodecamp.com/images/emoji/emoji_one/warning.png?v=3 "：警告：") **_不要_** _删除任何现有的用户名_ ）

> 看到![:point_right:](https://forum.freecodecamp.com/images/emoji/emoji_one/point_right.png?v=3 "：point_right：") [**`Wiki Challenge Solution Template`**](http://forum.freecodecamp.com/t/algorithm-article-template/14272)供参考。