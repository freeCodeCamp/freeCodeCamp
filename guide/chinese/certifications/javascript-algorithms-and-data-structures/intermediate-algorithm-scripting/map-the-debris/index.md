---
title: Map the Debris
localeTitle: 映射碎片
---
![:triangular_flag_on_post:](https://forum.freecodecamp.com/images/emoji/emoji_one/triangular_flag_on_post.png?v=3 "：triangular_flag_on_post：")如果卡住，请记得使用**`Read-Search-Ask`** 。尝试配对程序![:busts_in_silhouette:](https://forum.freecodecamp.com/images/emoji/emoji_one/busts_in_silhouette.png?v=3 "：busts_in_silhouette：")并编写自己的代码![:pencil:](https://forum.freecodecamp.com/images/emoji/emoji_one/pencil.png?v=3 "：铅笔：")

### ![:checkered_flag:](https://forum.freecodecamp.com/images/emoji/emoji_one/checkered_flag.png?v=3 "：checkered_flag：")问题说明：

首先要做的是通过了解轨道周期究竟是什么来熟悉程序的内容。你将返回一个新的数组，将该元素的平均高度转换为它们的轨道周期。通常很难找到的部分是找到公式，实现它，对某些人来说，通过键修改对象。但是，一些不太清楚的事实是你的程序必须能够检查数组中的任意数量的对象;这是在第二部分测试的内容。

#### 相关链接

*   [轨道期](https://en.wikipedia.org/wiki/Orbital_period)
*   [JS对象](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object)
*   [Math.PI](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/PI)
*   [JS Math Pow](http://forum.freecodecamp.com/t/javascript-math-pow/14685)
*   [Math.sqrt（）](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/sqrt)
*   [Math.round（）](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/round)

## ![:speech_balloon:](https://forum.freecodecamp.com/images/emoji/emoji_one/speech_balloon.png?v=3 "：speech_balloon：")提示：1

所需的公式是：

![](//discourse-user-assets.s3.amazonaws.com/original/2X/e/e212370f07c55165ff69f318ee1eed24779c7532.png)

> _现在尝试解决问题_

## ![:speech_balloon:](https://forum.freecodecamp.com/images/emoji/emoji_one/speech_balloon.png?v=3 "：speech_balloon：")提示：2

使用`Math.round()`按要求向上舍入到下一个整数。使用`Math.ceil()`将允许您通过第一个测试但是第二个测试失败。

> _现在尝试解决问题_

## ![:speech_balloon:](https://forum.freecodecamp.com/images/emoji/emoji_one/speech_balloon.png?v=3 "：speech_balloon：")提示：3

了解如何删除和添加JavaScript对象的密钥。

> _现在尝试解决问题_

## 扰流警报！

![警告牌](//discourse-user-assets.s3.amazonaws.com/original/2X/2/2d6c412a50797771301e7ceabd554cef4edcd74d.gif)

**提前解决！**

## ![:beginner:](https://forum.freecodecamp.com/images/emoji/emoji_one/beginner.png?v=3 "：初学者：")基本代码解决方案
```
function orbitalPeriod(arr) { 
  var GM = 398600.4418; 
  var earthRadius = 6367.4447; 
  var a = 2 * Math.PI; 
  var newArr = []; 
  var getOrbPeriod = function(obj) { 
    var c = Math.pow(earthRadius + obj.avgAlt, 3); 
    var b = Math.sqrt(c / GM); 
    var orbPeriod = Math.round(a * b); 
    delete obj.avgAlt; 
    obj.orbitalPeriod = orbPeriod; 
    return obj; 
  }; 
 
  for (var elem in arr) { 
    newArr.push(getOrbPeriod(arr[elem])); 
  } 
 
  return newArr; 
 } 
 
 // test here 
 orbitalPeriod([{name : "sputnik", avgAlt : 35873.5553}]); 
```

![:rocket:](https://forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=3 "：火箭：") [运行代码](https://repl.it/CLow/0)

### 代码说明：

*   **GM**和**earthRadius**都给了我们。
*   为了使代码更易于编辑和阅读，等式的每个部分都是单独编写的。
*   创建**newArr**来存储`orbPeriod`的。
*   **a**是pi的2倍。作为常量的部分在全局范围内，而其余部分是函数的一部分。
*   创建一个函数`gerOrbPeriod()` ，它将为任意数量的对象执行所需的工作。
*   **c**是（ **earthRadius** + **avgAlt** ）到立方体。
*   **b**是**c的**平方根除以**GM** 。
*   创建**orbPeriod**以存储**a**和**b**的乘积，应用`Math.round()`函数以向上舍入到下一个整数。
*   然后我们删除关键**avgAlt** ，并添加新密钥及其值。

#### 相关链接

*   [JS For In Loop](http://forum.freecodecamp.com/t/javascript-for-in-loop/14665)
*   [JS阵列原型推送](http://forum.freecodecamp.com/t/javascript-array-prototype-push/14298)

## ![:sunflower:](https://forum.freecodecamp.com/images/emoji/emoji_one/sunflower.png?v=3 "：向日葵：")中级代码解决方案：
```
function orbitalPeriod(arr) { 
  var GM = 398600.4418; 
  var earthRadius = 6367.4447; 
 
  //Looping through each key in arr object 
  for(var prop in arr) { 
    //Rounding off the orbital period value 
    var orbitalPer = Math.round(2 * Math.PI * Math.sqrt(Math.pow(arr[prop].avgAlt + earthRadius, 3) / GM)); 
    //deleting the avgAlt property 
    delete arr[prop].avgAlt; 
    //adding orbitalPeriod property 
    arr[prop].orbitalPeriod = orbitalPer; 
  } 
 
  return arr; 
 } 
 
 // test here 
 orbitalPeriod([{name : "sputnik", avgAlt : 35873.5553}]); 
```

![:rocket:](https://forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=3 "：火箭：") [运行代码](https://repl.it/CLoy/0)

### 代码说明：

*   **GM**和**earthRadius**都给了我们。
*   `for..in`循环用于迭代给定数组**arr中的**每个值。
*   **orbitalPer**保持使用公式计算的每次迭代的轨道周期值。
*   关键的**avgAlt**被删除，找到的**orbitalPer**在**arr中**分配。

## ![:rotating_light:](https://forum.freecodecamp.com/images/emoji/emoji_one/rotating_light.png?v=3 "：rotating_light：")高级代码解决方案
```
function orbitalPeriod(arr) { 
  var GM = 398600.4418; 
  var earthRadius = 6367.4447; 
 
  // Loop through each item in the array arr 
  arr.forEach(function(item) { 
    // Calculate the Orbital period value 
    var tmp = Math.round(2 * Math.PI * Math.sqrt(Math.pow(earthRadius + item.avgAlt, 3) / GM)); 
    //Delete the avgAlt property 
    delete item.avgAlt; 
    //Add orbitalPeriod property 
    item.orbitalPeriod = tmp; 
  }); 
  return arr; 
 } 
 
 // test here 
 orbitalPeriod([{name : "sputnik", avgAlt : 35873.5553}]); 
```

![:rocket:](https://forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=3 "：火箭：") [运行代码](https://repl.it/CLoz/0)

### 代码说明：

*   **GM**和**earthRadius**都给了我们。
*   `forEach()`方法用于在**arr中为**每个元素（ **item** ）执行一次函数。
*   **tmp**保持使用公式计算的每个元素的轨道周期值。
*   键**avgAlt**被删除，并发现轨道周期**（TMP）**被分配给键**orbitalPeriod。**

#### 相关链接

*   [JS Array Prototype ForEach](http://forum.freecodecamp.com/t/javascript-array-prototype-foreach/14290)

## ![:clipboard:](https://forum.freecodecamp.com/images/emoji/emoji_one/clipboard.png?v=3 "：剪贴板：")捐款说明：

*   ![:warning:](https://forum.freecodecamp.com/images/emoji/emoji_one/warning.png?v=3 "：警告：") **请勿**添加与任何现有解决方案类似的解决方案。如果您认为它**_相似但更好_** ，那么尝试合并（或替换）现有的类似解决方案。
*   添加解决方案的说明。
*   将解决方案分为以下类别之一 - **基本** ， **中级**和**高级** 。 ![:traffic_light:](https://forum.freecodecamp.com/images/emoji/emoji_one/traffic_light.png?v=3 "：红绿灯：")
*   如果您添加了任何**相关的主要内容，**请仅添加您的用户名。 （ ![:warning:](https://forum.freecodecamp.com/images/emoji/emoji_one/warning.png?v=3 "：警告：") **_不要_** _删除任何现有的用户名_ ）

> 看到![:point_right:](https://forum.freecodecamp.com/images/emoji/emoji_one/point_right.png?v=3 "：point_right：") [**`Wiki Challenge Solution Template`**](http://forum.freecodecamp.com/t/algorithm-article-template/14272)供参考。