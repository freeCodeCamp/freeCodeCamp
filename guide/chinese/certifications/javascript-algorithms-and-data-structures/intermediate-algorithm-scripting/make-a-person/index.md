---
title: Make a Person
localeTitle: 做一个人
---
![:triangular_flag_on_post:](https://forum.freecodecamp.com/images/emoji/emoji_one/triangular_flag_on_post.png?v=3 "：triangular_flag_on_post：")如果卡住，请记得使用**`Read-Search-Ask`** 。尝试配对程序![:busts_in_silhouette:](https://forum.freecodecamp.com/images/emoji/emoji_one/busts_in_silhouette.png?v=3 "：busts_in_silhouette：")并编写自己的代码![:pencil:](https://forum.freecodecamp.com/images/emoji/emoji_one/pencil.png?v=3 "：铅笔：")

### ![:checkered_flag:](https://forum.freecodecamp.com/images/emoji/emoji_one/checkered_flag.png?v=3 "：checkered_flag：")问题说明：

当我启动程序时，我想我只需创建详细信息中提到的六个函数。然而，事情并非那么简单。将它们创建为函数不是正确的方法，我必须以不同的方式创建它们以使它们成为关键。

还有一个棘手的部分，因为你需要六个键不多或少，所以起初我有一个变量，将原始名称存储为键也是错误的。

至于数组的使用，这是可选的，你也可以创建新变量来保存分离的字符串，但是数组更容易处理，因为字符串是不可变的。

仔细阅读说明，运行代码本身总是一个很好的提示，检查测试结果是什么，这样你就知道会发生什么，但不要注意自己。一旦了解了您需要做什么，这个问题就变得非常容易和直接了。

#### 相关链接

*   [关闭](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Closures)
*   [对象模型的细节](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Details_of_the_Object_Model)

## ![:speech_balloon:](https://forum.freecodecamp.com/images/emoji/emoji_one/speech_balloon.png?v=3 "：speech_balloon：")提示：1

使用**这种**表示法来创建键而不是常规函数：这意味着你应该使用`this.varName = function() {/*...*/}`来代替`var varName = function() {/*...*/}` `this.varName = function() {/*...*/}`

> _现在尝试解决问题_

## ![:speech_balloon:](https://forum.freecodecamp.com/images/emoji/emoji_one/speech_balloon.png?v=3 "：speech_balloon：")提示：2

该程序有一个测试，检查你使用了多少键，它们必须是六个，详细信息部分提到的六个。这意味着如果您需要使用变量，请将它们`this.fullName = firstAndLast;`本地而不是键： `this.fullName = firstAndLast;`

> _现在尝试解决问题_

## ![:speech_balloon:](https://forum.freecodecamp.com/images/emoji/emoji_one/speech_balloon.png?v=3 "：speech_balloon：")提示：3

由于错误的变量名称，代码通常不会按预期的方式工作，请务必检查您是否以正确的方式拼写它们。这在某些时候发生在我们所有人身上。

> _现在尝试解决问题_

## ![:speech_balloon:](https://forum.freecodecamp.com/images/emoji/emoji_one/speech_balloon.png?v=3 "：speech_balloon：")提示：4

如果您在编写`setter`方法时遇到问题，下面是`set`方法的模板：

```js
this.setFullName = function(input) { 
  // Insert your code here 
 } 
```

> _现在尝试解决问题_

## 扰流警报！

![警告牌](//discourse-user-assets.s3.amazonaws.com/original/2X/2/2d6c412a50797771301e7ceabd554cef4edcd74d.gif)

**提前解决！**

## ![:beginner:](https://forum.freecodecamp.com/images/emoji/emoji_one/beginner.png?v=3 "：初学者：")基本代码解决方案

```js
var Person = function(firstAndLast) { 
  var fullName = firstAndLast; 
 
  this.getFirstName = function() { 
    return fullName.split(" ")[0]; 
  }; 
 
  this.getLastName = function() { 
    return fullName.split(" ")[1]; 
  }; 
 
  this.getFullName = function() { 
    return fullName; 
  }; 
 
  this.setFirstName = function(name) { 
    fullName = name + " " + fullName.split(" ")[1]; 
  }; 
 
  this.setLastName = function(name) { 
    fullName = fullName.split(" ")[0] + " " + name; 
  }; 
 
  this.setFullName = function(name) { 
    fullName = name; 
  }; 
 }; 
 
 var bob = new Person('Bob Ross'); 
 bob.getFullName(); 
```

![:rocket:](https://forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=3 "：火箭：") [运行代码](https://repl.it/CLov/0)

### 代码说明：

*   创建一个变量，该变量将复制作为参数传递的全名。
*   然后我们可以继续创建所需的六种方法并返回所要求的内容。
*   对于单个setter，我们可以使用split将fullname转换为名字和姓氏的数组，并将名称的未更改部分与作为参数传递的内容连接起来。

#### 相关链接

*   [如何构建对象](https://www.freecodecamp.org/challenges/build-javascript-objects)
*   [用函数构造对象](https://www.freecodecamp.org/challenges/construct-javascript-objects-with-functions)
*   [将对象声明为变量](https://www.freecodecamp.org/challenges/declare-javascript-variables)

## ![:clipboard:](https://forum.freecodecamp.com/images/emoji/emoji_one/clipboard.png?v=3 "：剪贴板：")捐款说明：

*   ![:warning:](https://forum.freecodecamp.com/images/emoji/emoji_one/warning.png?v=3 "：警告：") **请勿**添加与任何现有解决方案类似的解决方案。如果您认为它**_相似但更好_** ，那么尝试合并（或替换）现有的类似解决方案。
*   添加解决方案的说明。
*   将解决方案分为以下类别之一 - **基本** ， **中级**和**高级** 。 ![:traffic_light:](https://forum.freecodecamp.com/images/emoji/emoji_one/traffic_light.png?v=3 "：红绿灯：")
*   如果您添加了任何**相关的主要内容，**请仅添加您的用户名。 （ ![:warning:](https://forum.freecodecamp.com/images/emoji/emoji_one/warning.png?v=3 "：警告：") **_不要_** _删除任何现有的用户名_ ）

> 看到![:point_right:](https://forum.freecodecamp.com/images/emoji/emoji_one/point_right.png?v=3 "：point_right：") [**`Wiki Challenge Solution Template`**](https://forum.freecodecamp.com/t/algorithm-article-template/14272)供参考。