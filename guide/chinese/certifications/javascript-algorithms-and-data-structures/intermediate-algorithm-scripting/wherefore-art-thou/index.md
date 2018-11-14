---
title: Wherefore Art Thou
localeTitle: 因此，你是艺术家
---
![:triangular_flag_on_post:](https://forum.freecodecamp.com/images/emoji/emoji_one/triangular_flag_on_post.png?v=3 "：triangular_flag_on_post：")如果卡住，请记得使用**`Read-Search-Ask`** 。尝试配对程序![:busts_in_silhouette:](https://forum.freecodecamp.com/images/emoji/emoji_one/busts_in_silhouette.png?v=3 "：busts_in_silhouette：")并编写自己的代码![:pencil:](https://forum.freecodecamp.com/images/emoji/emoji_one/pencil.png?v=3 "：铅笔：")

### ![:checkered_flag:](https://forum.freecodecamp.com/images/emoji/emoji_one/checkered_flag.png?v=3 "：checkered_flag：")问题说明：

写的算法，将采取的`array`用于第一参数和返回的`array`的所有`object`相匹配的所有属性和数值• `Object`作为第二个参数传递。

#### 相关链接

*   [对于循环](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for)
*   [Array.prototype.filter（）](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter)
*   [Object.hasOwnProperty（）](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Object/hasOwnProperty) [Object.keys（）](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/keys)

## ![:speech_balloon:](https://forum.freecodecamp.com/images/emoji/emoji_one/speech_balloon.png?v=3 "：speech_balloon：")提示：1

您可以使用`for`循环或`Array.prototype.filter`方法。

> _现在尝试解决问题_

## ![:speech_balloon:](https://forum.freecodecamp.com/images/emoji/emoji_one/speech_balloon.png?v=3 "：speech_balloon：")提示：2

尝试使用`Object.prototype.hasOwnProperty`方法来了解对象中是否存在属性名称（作为其自己的属性）。

> _现在尝试解决问题_

## ![:speech_balloon:](https://forum.freecodecamp.com/images/emoji/emoji_one/speech_balloon.png?v=3 "：speech_balloon：")提示：3

检查`collection`中`Object`等效性，将`Object`作为第二个参数传递给`whatIsInAName`函数。

> _现在尝试解决问题_

## 扰流警报！

![警告牌](//discourse-user-assets.s3.amazonaws.com/original/2X/2/2d6c412a50797771301e7ceabd554cef4edcd74d.gif)

**提前解决！**

## ![:beginner:](https://forum.freecodecamp.com/images/emoji/emoji_one/beginner.png?v=3 "：初学者：")基本代码解决方案
```
function whatIsInAName(collection, source) { 
  // "What's in a name? that which we call a rose 
  // By any other name would smell as sweet.” 
  // -- by William Shakespeare, Romeo and Juliet 
  var srcKeys = Object.keys(source); 
 
  // filter the collection 
  return collection.filter(function (obj) { 
    for(var i = 0; i < srcKeys.length; i++) { 
      if(!obj.hasOwnProperty(srcKeys[i]) || obj[srcKeys[i]] !== source[srcKeys[i]]) { 
        return false; 
      } 
    } 
    return true; 
  }); 
 } 
 
 // test here 
 whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" }); 
```

![:rocket:](https://forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=3 "：火箭：") [运行代码](https://repl.it/CLmh/0)

### 代码说明：

*   我们使用`.filter()`过滤数组。
*   使用`for loop`我们遍历对象中的每个项目。
*   我们使用`if statement`来检查集合中的对象是否没有密钥，并且属性值与source中的值不匹配。
*   如果上面的`if statement`是正确的，我们返回`false` 。否则，我们返回`true` ;

#### 相关链接

*   对于循环
*   Array.prototype.filter（）
*   [Object.hasOwnProperty（）](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Object/hasOwnProperty)

## ![:sunflower:](https://forum.freecodecamp.com/images/emoji/emoji_one/sunflower.png?v=3 "：向日葵：")中级代码解决方案：
```
function whatIsInAName(collection, source) { 
  // "What's in a name? that which we call a rose 
  // By any other name would smell as sweet.” 
  // -- by William Shakespeare, Romeo and Juliet 
  var srcKeys = Object.keys(source); 
 
  return collection.filter(function (obj) { 
    return srcKeys.every(function (key) { 
      return obj.hasOwnProperty(key) && obj[key] === source[key]; 
    }); 
  }); 
 } 
 
 // test here 
 whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" }); 
```

![:rocket:](https://forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=3 "：火箭：") [运行代码](https://repl.it/CLmi/0)

### 代码说明：

*   我们使用`.filter()`过滤集合。
*   接下来，我们返回`.filter()`方法的`Boolean`值。
*   最后，我们减少为`.every()`方法返回的`Boolean`值。

#### 相关链接

*   Array.prototype.filter（）
*   Array.prototype.every（）
*   [Object.hasOwnProperty（）](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Object/hasOwnProperty)

## ![:rotating_light:](https://forum.freecodecamp.com/images/emoji/emoji_one/rotating_light.png?v=3 "：rotating_light：")高级代码解决方案
```
function whatIsInAName(collection, source) { 
  // "What's in a name? that which we call a rose 
  // By any other name would smell as sweet.” 
  // -- by William Shakespeare, Romeo and Juliet 
  var srcKeys = Object.keys(source); 
 
  // filter the collection 
  return collection.filter(function (obj) { 
    return srcKeys 
      .map(function(key) { 
        return obj.hasOwnProperty(key) && obj[key] === source[key]; 
      }) 
      .reduce(function(a, b) { 
        return a && b; 
      }); 
  }); 
 } 
 
 // test here 
 whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" }); 
```

![:rocket:](https://forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=3 "：火箭：") [运行代码](https://repl.it/CLmj/0)

### 代码说明：

*   我们首先使用`Array.filter()`过滤`collection` 。
*   接下来，我们映射所有键并根据检查条件返回布尔值：键和它的对应值必须存在于我们要过滤的对象中。
*   然后我们将映射的布尔值减少为单个布尔值，该布尔值指示是否所有srcKeys都通过了上面检查的条件。
*   此单个布尔值将用于过滤集合。

#### 相关链接

*   Array.prototype.filter（）
*   Array.prototype.reduce（）
*   [Object.hasOwnProperty（）](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Object/hasOwnProperty)

## ![:clipboard:](https://forum.freecodecamp.com/images/emoji/emoji_one/clipboard.png?v=3 "：剪贴板：")捐款说明：

*   ![:warning:](https://forum.freecodecamp.com/images/emoji/emoji_one/warning.png?v=3 "：警告：") **请勿**添加与任何现有解决方案类似的解决方案。如果您认为它**_相似但更好_** ，那么尝试合并（或替换）现有的类似解决方案。
*   添加解决方案的说明。
*   将解决方案分为以下类别之一 - **基本** ， **中级**和**高级** 。 ![:traffic_light:](https://forum.freecodecamp.com/images/emoji/emoji_one/traffic_light.png?v=3 "：红绿灯：")
*   如果您添加了任何**相关的主要内容，**请仅添加您的用户名。 （ ![:warning:](https://forum.freecodecamp.com/images/emoji/emoji_one/warning.png?v=3 "：警告：") **_不要_** _删除任何现有的用户名_ ）

> 看到![:point_right:](https://forum.freecodecamp.com/images/emoji/emoji_one/point_right.png?v=3 "：point_right：") [**`Wiki Challenge Solution Template`**](http://forum.freecodecamp.com/t/algorithm-article-template/14272)供参考。