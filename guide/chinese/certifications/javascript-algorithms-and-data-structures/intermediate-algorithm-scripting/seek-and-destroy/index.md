---
title: Seek and Destroy
localeTitle: 寻找和摧毁
---
![:triangular_flag_on_post:](https://forum.freecodecamp.com/images/emoji/emoji_one/triangular_flag_on_post.png?v=3 "：triangular_flag_on_post：")如果卡住，请记得使用**`Read-Search-Ask`** 。尝试配对程序![:busts_in_silhouette:](https://forum.freecodecamp.com/images/emoji/emoji_one/busts_in_silhouette.png?v=3 "：busts_in_silhouette：")并编写自己的代码![:pencil:](https://forum.freecodecamp.com/images/emoji/emoji_one/pencil.png?v=3 "：铅笔：")

### ![:checkered_flag:](https://forum.freecodecamp.com/images/emoji/emoji_one/checkered_flag.png?v=3 "：checkered_flag：")问题说明：

这个问题有点棘手，因为你必须熟悉Arguments，因为你必须使用两个**或更多，**但在脚本上你只看到两个。很多人用三个参数对这个程序进行硬编码。您将从第一个参数中删除与任何其他参数相同的任何数字。

#### 相关链接

*   [参数对象](http://forum.freecodecamp.com/t/javascript-arguments/14283)
*   [Array.filter（）](http://forum.freecodecamp.com/t/javascript-array-prototype-filter/14289)

## ![:speech_balloon:](https://forum.freecodecamp.com/images/emoji/emoji_one/speech_balloon.png?v=3 "：speech_balloon：")提示：1

您需要使用`arguments` ，就好像它是一个常规数组。最好的方法是将其转换为一个。

> _现在尝试解决问题_

## ![:speech_balloon:](https://forum.freecodecamp.com/images/emoji/emoji_one/speech_balloon.png?v=3 "：speech_balloon：")提示：2

您需要过滤，这也意味着您需要创建一个回调函数。您可以使用各种方法，如： `indexOf()` ， `includes()` 。如果您需要其他方法， `reduce()`也可能有用;继续阅读那些文档！

> _现在尝试解决问题_

## ![:speech_balloon:](https://forum.freecodecamp.com/images/emoji/emoji_one/speech_balloon.png?v=3 "：speech_balloon：")提示：3

要将`arguments`转换为数组，请使用以下代码`var args = Array.prototype.slice.call(arguments);`

> _现在尝试解决问题_

## 扰流警报！

![警告牌](//discourse-user-assets.s3.amazonaws.com/original/2X/2/2d6c412a50797771301e7ceabd554cef4edcd74d.gif)

**提前解决！**

## ![:beginner:](https://forum.freecodecamp.com/images/emoji/emoji_one/beginner.png?v=3 "：初学者：")基本代码解决方案
```
function destroyer(arr) { 
  var args = Array.prototype.slice.call(arguments); 
 
  for (var i = 0; i < arr.length; i++) { 
    for (var j = 0; j < args.length; j++) { 
      if (arr[i] === args[j]) { 
        delete arr[i]; 
      } 
    } 
  } 
  return arr.filter(Boolean); 
 } 
```

![:rocket:](https://forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=3 "：火箭：") [运行代码](https://repl.it/CLjU/95)

### 代码说明：

1.  使用`Array.prototype.slice.call()`创建一个`arguments`数组，并将其存储在变量`args` 。我们将用它来检查`arr` 。
    
2.  启动一个基本的`for`循环来迭代`arr` 。在另一个内部嵌套另一个`for`循环，将整数变量`j`和arr更改为args。第二个循环将遍历`args` 。
    
    *   在第二个循环中创建一个`if`语句，严格检查`===` `arr[i]`的当前val等于`args[j]` 。
        
    *   如果两个数组中当前索引的_值_相等，请使用`delete`将其从`arr` `delete` 。
        
3.  在嵌套循环之外：使用`Boolean`对象返回修改后的数组，作为`delete`运算符创建的任何`null`的过滤器。
    

#### 相关链接

*   \[参数
*   [Array.filter（）](http://forum.freecodecamp.com/t/javascript-array-prototype-filter/14289)
*   [删除](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/delete)
*   [布尔](http://forum.freecodecamp.com/t/javascript-boolean/14311)

## ![:sunflower:](https://forum.freecodecamp.com/images/emoji/emoji_one/sunflower.png?v=3 "：向日葵：")中级代码解决方案：
```
function destroyer(arr) { 
  var args = Array.from(arguments).slice(1); 
  return arr.filter(function(val) { 
    return !args.includes(val); 
  }); 
 } 
```

![:rocket:](https://forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=3 "：火箭：") [运行代码](https://repl.it/Ck2m/0)

### 代码说明：

1.  声明一个名为`args`的变量，并将它设置为等于一个新的`Array`对象`from()`传递给函数的`arguments` 。在相同或下一行，从第二个索引1开始对`args`使用`slice()`方法。这将用于过滤的参数分隔为它们自己的`args`数组。
    
2.  返回已过滤的数组，使用回调函数中的`includes()`来检查`val`是否_不在_ `args` ;返回`true`以保留原始数组中的值，或返回`false`以删除它。
    

#### 相关链接

*   [参数](http://forum.freecodecamp.com/t/javascript-arguments/14283)
*   [Array.slice（）](http://forum.freecodecamp.com/t/javascript-array-prototype-slice/14302)
*   [Array.includes（）](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/includes)

## 高级代码解决方案

```javascript
const destroyer = (arr, ...args) => arr.filter(i => !args.includes(i)); 
```

### 代码说明：

*   使用ES6语法的代码使用箭头函数声明函数。
*   使用spread运算符检索参数。
*   使用`includes()`返回已过滤的数组。

#### 相关链接

*   [传播运营商](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Operators/Spread_operator)

## ![:clipboard:](https://forum.freecodecamp.com/images/emoji/emoji_one/clipboard.png?v=3 "：剪贴板：")捐款说明：

*   ![:warning:](https://forum.freecodecamp.com/images/emoji/emoji_one/warning.png?v=3 "：警告：") **请勿**添加与任何现有解决方案类似的解决方案。如果您认为它**_相似但更好_** ，那么尝试合并（或替换）现有的类似解决方案。
*   添加解决方案的说明。
*   将解决方案分为以下类别之一 - **基本** ， **中级**和**高级** 。 ![:traffic_light:](https://forum.freecodecamp.com/images/emoji/emoji_one/traffic_light.png?v=3 "：红绿灯：")
*   如果您添加了任何**相关的主要内容，**请仅添加您的用户名。 （ ![:warning:](https://forum.freecodecamp.com/images/emoji/emoji_one/warning.png?v=3 "：警告：") **_不要_** _删除任何现有的用户名_ ）

> 看到![:point_right:](https://forum.freecodecamp.com/images/emoji/emoji_one/point_right.png?v=3 "：point_right：") [**`Wiki Challenge Solution Template`**](http://forum.freecodecamp.com/t/algorithm-article-template/14272)供参考。