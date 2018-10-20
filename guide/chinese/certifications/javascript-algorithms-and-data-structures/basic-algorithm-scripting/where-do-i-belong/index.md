---
title: Where Do I Belong
localeTitle: 我属于哪里？
---
![:triangular_flag_on_post:](https://forum.freecodecamp.com/images/emoji/emoji_one/triangular_flag_on_post.png?v=3 "：triangular_flag_on_post：")如果卡住，请记得使用**`Read-Search-Ask`** 。尝试配对程序![:busts_in_silhouette:](https://forum.freecodecamp.com/images/emoji/emoji_one/busts_in_silhouette.png?v=3 "：busts_in_silhouette：")并编写自己的代码![:pencil:](https://forum.freecodecamp.com/images/emoji/emoji_one/pencil.png?v=3 "：铅笔：")

### ![:checkered_flag:](https://forum.freecodecamp.com/images/emoji/emoji_one/checkered_flag.png?v=3 "：checkered_flag：")问题说明：

这可能是一个难以理解的问题。您需要在数组中找到按顺序插入数字的位置，并返回应该去的索引。

#### 相关链接

*   [JS数组排序](http://forum.freecodecamp.com/t/javascript-array-prototype-sort/14306)

## ![:speech_balloon:](https://forum.freecodecamp.com/images/emoji/emoji_one/speech_balloon.png?v=3 "：speech_balloon：")提示：1

首先要做的是将数组从低到大排序，只是为了使代码更容易。这是排序的地方，它需要一个回调函数，所以你必须创建它。

> _现在尝试解决问题_

## ![:speech_balloon:](https://forum.freecodecamp.com/images/emoji/emoji_one/speech_balloon.png?v=3 "：speech_balloon：")提示：2

对数组进行排序后，只需检查第一个更大的数字并返回索引。

> _现在尝试解决问题_

## ![:speech_balloon:](https://forum.freecodecamp.com/images/emoji/emoji_one/speech_balloon.png?v=3 "：speech_balloon：")提示：3

如果该数字没有索引，那么您也必须处理该案例。

> _现在尝试解决问题_

## 扰流警报！

![警告牌](//discourse-user-assets.s3.amazonaws.com/original/2X/2/2d6c412a50797771301e7ceabd554cef4edcd74d.gif)

**提前解决！**

## ![:beginner:](https://forum.freecodecamp.com/images/emoji/emoji_one/beginner.png?v=3 "：初学者：")基本代码解决方案
```
function getIndexToIns(arr, num) { 
  arr.sort(function(a, b) { 
    return a - b; 
  }); 
 
  for (var a = 0; a < arr.length; a++) { 
    if (arr[a] >= num) 
      return a; 
  } 
 
  return arr.length; 
 } 
```

![:rocket:](https://forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=3 "：火箭：") [运行代码](https://repl.it/CLjU/36)

## 代码说明：

*   首先，我使用`.sort(callbackFuntion)`对数组进行排序，从左到右按最低到最高排序。
*   然后我使用for循环来比较从最小的一个开始的数组中的项目。当数组上的项大于我们要比较的数时，我们将索引作为整数返回。

#### 相关链接

*   [parseInt函数（）](http://forum.freecodecamp.com/t/javascript-parseint/14686)

## ![:beginner:](https://forum.freecodecamp.com/images/emoji/emoji_one/beginner.png?v=3 "：初学者：")基本代码解决方案
```
function getIndexToIns(arr, num) { 
  // Find my place in this sorted array. 
  var times = arr.length; // runs the for loop once for each thing in the array 
  var count = 0; 
  for (var i=0;i<times;i++){ 
    if(num>arr[i]){count++;} } // counts how many array numbers are smaller than num 
    return count; // the above equals num's position in a sorted array 
 } 
 
 getIndexToIns([40, 60], 50); 
```

![:rocket:](https://forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=3 "：火箭：") [运行代码](https://repl.it/CLjU/2547)

## 代码说明：

*   我没有对arr输入数组进行排序
*   每当num输入大于arr输入数时，我都会运行for循环计数。
*   这个数字相当于num在排序数组中的位置。

## ![:beginner:](https://forum.freecodecamp.com/images/emoji/emoji_one/beginner.png?v=3 "：初学者：")基本代码解决方案

[@HarinaPana](/u/harinapana)
```
function getIndexToIns(arr, num) { 
 
  arr.sort(function(a, b) { 
  return a - b; 
  }); 
 
  var i = 0; 
  while (num > arr[i]) { 
  i++; 
  } 
 
  return i; 
 } 
 
 getIndexToIns([40, 60], 50); 
```

![:rocket:](https://forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=3 "：火箭：") [运行代码](https://repl.it/CLjU/4135)

## 代码说明：

*   排序现有数组。
*   在检查_num_是否更大时迭代数组。
*   当_num_不大于_i_并且返回最后检查的元素时，循环将停止。

## ![:sunflower:](https://forum.freecodecamp.com/images/emoji/emoji_one/sunflower.png?v=3 "：向日葵：")中级代码解决方案：

通过[@faustodc](/u/faustodc)
```
function getIndexToIns(arr, num) { 
  arr.push(num); 
  arr.sort(function(a, b){return ab}); 
  return arr.indexOf(num); 
 } 
```

![:rocket:](https://forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=3 "：火箭：") [运行代码](https://repl.it/EB10/1)

## 代码说明：

*   首先，我们使用`push()`将数字`num`添加到数组中， `push()`其添加为数组的最后一个元素。
*   然后我们使用`sort()`和回调函数`function(a, b){return ab}`来按升序对数字进行排序。
*   最后，我们使用`indexOf()`函数`indexOf()`数组中`num`的位置或索引。

#### 相关链接

*   [推（）](http://forum.freecodecamp.com/t/javascript-array-prototype-push/14298)
*   [分类（）](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort)
*   [指数（）](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf)

## ![:sunflower:](https://forum.freecodecamp.com/images/emoji/emoji_one/sunflower.png?v=3 "：向日葵：")中级代码解决方案：

**使用`.findIndex()`**
```
function getIndexToIns(arr, num) { 
  // sort and find right index 
  var index = arr.sort((curr, next) => curr > next) 
    .findIndex((currNum)=> num <= currNum); 
  // Returns proper answer 
  return index === -1 ? arr.length : index; 
 } 
 
 getIndexToIns([40, 60], 500); 
```

![:rocket:](https://forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=3 "：火箭：") [运行代码](https://repl.it/CLjU/63)

## 代码说明：

*   首先按升序对数组进行排序，目前使用数组函数完成此操作以实现最小占用空间。
*   一旦数组被排序，我们直接应用`.findIndex()` ，我们将比较数组中的每个元素，直到我们找到`num <= currNum`这意味着我们要插入的数字小于或等于当前数字迭代中的数字。
*   然后我们使用三元运算来检查我们是否返回了索引或`-1` 。我们只有在找不到索引时才得到`-1` ，这意味着当我们为数组中的所有元素得到一个false时，对于这种情况，这意味着`num`应该插入到列表的末尾，这样我们为什么要使用`arr.length` 。

#### 相关链接

*   [Array.findIndex（）](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/findIndex)
*   [箭头功能](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions)
*   [三元运算符](http://forum.freecodecamp.com/t/javascript-ternary-operator/15973)

## ![:rotating_light:](https://forum.freecodecamp.com/images/emoji/emoji_one/rotating_light.png?v=3 "：rotating_light：")高级代码解决方案

通过[@nivrith](/u/nivrith)
```
function getIndexToIns(arr, num) { 
 
 return arr.concat(num).sort((a,b) => ab).indexOf(num); 
 
 } 
 
 getIndexToIns([1,3,4],2); 
```

![:rocket:](https://forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=3 "：火箭：") [运行代码](https://repl.it/IUJE/0)

## 代码说明：

*   我们使用方法链来一个接一个地调用一个方法来解决单行中的问题。首先，我们通过调用arr.concat（num）方法合并`arr`和`num`
*   然后我们使用带有回调**箭头函数的** `sort()` `(a, b) => return ab`来按升序对数字进行排序
*   最后，我们使用`indexOf()`方法`indexOf()`数组中`num`的位置或索引

#### 相关链接

*   [用JavaScript链接的方法](https://schier.co/blog/2013/11/14/method-chaining-in-javascript.html)
*   [CONCAT（）](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Array/concat?v=example)
*   [箭头功能](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Functions/Arrow_functions)

## ![:clipboard:](https://forum.freecodecamp.com/images/emoji/emoji_one/clipboard.png?v=3 "：剪贴板：")捐款说明：

*   ![:warning:](https://forum.freecodecamp.com/images/emoji/emoji_one/warning.png?v=3 "：警告：") **请勿**添加与任何现有解决方案类似的解决方案。如果您认为它**_相似但更好_** ，那么尝试合并（或替换）现有的类似解决方案。
*   添加解决方案的说明。
*   将解决方案分为以下类别之一 - **基本** ， **中级**和**高级** 。 ![:traffic_light:](https://forum.freecodecamp.com/images/emoji/emoji_one/traffic_light.png?v=3 "：红绿灯：")
*   如果您添加了任何**相关的主要内容，**请仅添加您的用户名。 （ ![:warning:](https://forum.freecodecamp.com/images/emoji/emoji_one/warning.png?v=3 "：警告：") **_不要_** _删除任何现有的用户名_ ）

> 看到![:point_right:](https://forum.freecodecamp.com/images/emoji/emoji_one/point_right.png?v=3 "：point_right：") [**`Wiki Challenge Solution Template`**](http://forum.freecodecamp.com/t/algorithm-article-template/14272)供参考。