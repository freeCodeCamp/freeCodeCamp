---
title: Everything Be True
localeTitle: 一切都是真的
---
![](//discourse-user-assets.s3.amazonaws.com/original/2X/d/d69c7f2d86b8902a9bc83653d95932115de47e6a.jpg)

![:triangular_flag_on_post:](https://forum.freecodecamp.com/images/emoji/emoji_one/triangular_flag_on_post.png?v=3 "：triangular_flag_on_post：")如果卡住，请记得使用**`Read-Search-Ask`** 。尝试配对程序![:busts_in_silhouette:](https://forum.freecodecamp.com/images/emoji/emoji_one/busts_in_silhouette.png?v=3 "：busts_in_silhouette：")并编写自己的代码![:pencil:](https://forum.freecodecamp.com/images/emoji/emoji_one/pencil.png?v=3 "：铅笔：")

### ![:checkered_flag:](https://forum.freecodecamp.com/images/emoji/emoji_one/checkered_flag.png?v=3 "：checkered_flag：")问题说明：

程序需要检查第二个参数是否是一个[真正的](http://forum.freecodecamp.com/t/javascript-truthy-value/15975)元素，并且它必须为第一个参数中的每个对象检查这个。

#### 相关链接

*   [JavaScript Truthy](http://forum.freecodecamp.com/t/javascript-truthy-value/15975)
*   [JavaScript参数](http://forum.freecodecamp.com/t/javascript-arguments/14283.md)

## ![:speech_balloon:](https://forum.freecodecamp.com/images/emoji/emoji_one/speech_balloon.png?v=3 "：speech_balloon：")提示：1

记得迭代第一个参数来检查每个对象。

> _现在尝试解决问题_

## ![:speech_balloon:](https://forum.freecodecamp.com/images/emoji/emoji_one/speech_balloon.png?v=3 "：speech_balloon：")提示：2

只有当所有这些都是真理时，我们才会返回真实，所以请确保所有这些都是真的。

> _现在尝试解决问题_

## ![:speech_balloon:](https://forum.freecodecamp.com/images/emoji/emoji_one/speech_balloon.png?v=3 "：speech_balloon：")提示：3

> _现在尝试解决问题_

您可以使用循环或回调函数，有多种方法可以解决此问题。

## 扰流警报！

![警告牌](//discourse-user-assets.s3.amazonaws.com/original/2X/2/2d6c412a50797771301e7ceabd554cef4edcd74d.gif)

**解决方案！**

## ![:beginner:](https://forum.freecodecamp.com/images/emoji/emoji_one/beginner.png?v=3 "：初学者：")基本代码解决方案

**使用for-in循环和hasOwnProperty**
```
function truthCheck(collection, pre) { 
  // Create a counter to check how many are true. 
  var counter = 0; 
  // Check for each object 
  for (var c in collection) { 
    // If it is has property and value is truthy 
    if (collection[c].hasOwnProperty(pre) && Boolean(collection[c][pre])) { 
      counter++; 
    } 
  } 
  // Outside the loop, check to see if we got true for all of them and return true or false 
  return counter == collection.length; 
 } 
 
 // test here 
 truthCheck([{"user": "Tinky-Winky", "sex": "male"}, {"user": "Dipsy", "sex": "male"}, {"user": "Laa-Laa", "sex": "female"}, {"user": "Po", "sex": "female"}], "sex"); 
```

![:rocket:](https://forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=3 "：火箭：") [运行代码](https://repl.it/CLnw/0)

### 代码说明：

*   首先，我创建一个计数器来检查有多少个案实际上是真的。
*   然后检查每个对象的值是否真实
*   在循环之外，我检查计数器变量是否具有与**集合**长度相同的值，如果为true则返回**true** ，否则返回**false**

#### 相关链接

*   [JS循环](http://forum.freecodecamp.com/t/javascript-loops/14681)
*   [Object.prototype.hasOwnProperty（）](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Object/hasOwnProperty)

## ![:sunflower:](https://forum.freecodecamp.com/images/emoji/emoji_one/sunflower.png?v=3 "：向日葵：")中级代码解决方案：

**使用Array.every（）**
```
function truthCheck(collection, pre) { 
  return collection.every(function (element) { 
    return element.hasOwnProperty(pre) && Boolean(element[pre]); 
  }); 
 } 
 
 // test here 
 truthCheck([{"user": "Tinky-Winky", "sex": "male"}, {"user": "Dipsy", "sex": "male"}, {"user": "Laa-Laa", "sex": "female"}, {"user": "Po", "sex": "female"}], "sex"); 
```

![:rocket:](https://forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=3 "：火箭：") [运行代码](https://repl.it/CLny/0)

### 代码说明：

*   使用本机“every”方法来测试数组中的所有元素是否都通过了测试。
*   此链接将帮助[Array.prototype.every（）](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/every)

#### 相关链接

*   [JS Array.prototype.every（）](http://forum.freecodecamp.com/t/javascript-array-prototype-every/14287)
*   [MDN Array.prototype.every（）](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/every)

## ![:rotating_light:](https://forum.freecodecamp.com/images/emoji/emoji_one/rotating_light.png?v=3 "：rotating_light：")高级代码解决方案
```
function truthCheck(collection, pre) { 
  // Is everyone being true? 
  return collection.every(obj => obj[pre]); 
 } 
 
 truthCheck([{"user": "Tinky-Winky", "sex": "male"}, {"user": "Dipsy", "sex": "male"}, {"user": "Laa-Laa", "sex": "female"}, {"user": "Po", "sex": "female"}], "sex"); 
```

![:rocket:](https://forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=3 "：火箭：") [运行代码](https://repl.it/E2u6/0)

### 代码说明：

*   对于`collection`数组中的_每个_对象，检查在`pre`参数中传递的对象属性的真实性
*   `Array#every`方法在内部检查回调返回的值是否真实。
*   如果它为_每个_对象传递，则返回`true` 。否则，返回`false` 。

#### 相关链接

*   [`Array#every`](http://devdocs.io/javascript/global_objects/array/every)

## ![:clipboard:](https://forum.freecodecamp.com/images/emoji/emoji_one/clipboard.png?v=3 "：剪贴板：")捐款说明：

*   ![:warning:](https://forum.freecodecamp.com/images/emoji/emoji_one/warning.png?v=3 "：警告：") **请勿**添加与任何现有解决方案类似的解决方案。如果您认为它**_相似但更好_** ，那么尝试合并（或替换）现有的类似解决方案。
*   添加解决方案的说明。
*   将解决方案分为以下类别之一 - **基本** ， **中级**和**高级** 。 ![:traffic_light:](https://forum.freecodecamp.com/images/emoji/emoji_one/traffic_light.png?v=3 "：红绿灯：")
*   如果您添加了任何**相关的主要内容，**请仅添加您的用户名。 （ ![:warning:](https://forum.freecodecamp.com/images/emoji/emoji_one/warning.png?v=3 "：警告：") **_不要_** _删除任何现有的用户名_ ）

> 看到![:point_right:](https://forum.freecodecamp.com/images/emoji/emoji_one/point_right.png?v=3 "：point_right：") [**`Wiki Challenge Solution Template`**](http://forum.freecodecamp.com/t/algorithm-article-template/14272)供参考。