---
title: Arguments Optional
localeTitle: 参数可选
---
![](//discourse-user-assets.s3.amazonaws.com/original/2X/f/ff2fd8ffa014eea28587a8ef4933340d3dcc4b09.jpg)

![:triangular_flag_on_post:](https://forum.freecodecamp.com/images/emoji/emoji_one/triangular_flag_on_post.png?v=3 "：triangular_flag_on_post：")如果卡住，请记得使用**`Read-Search-Ask`** 。尝试配对程序![:busts_in_silhouette:](https://forum.freecodecamp.com/images/emoji/emoji_one/busts_in_silhouette.png?v=3 "：busts_in_silhouette：")并编写自己的代码![:pencil:](https://forum.freecodecamp.com/images/emoji/emoji_one/pencil.png?v=3 "：铅笔：")

## ![:checkered_flag:](https://forum.freecodecamp.com/images/emoji/emoji_one/checkered_flag.png?v=3 "：checkered_flag：")问题说明：

理解需要做什么可能会非常复杂。在编码时总是有很多方法可以做，但无论使用何种算法，我们都必须创建一个执行以下操作的程序：

*   它必须添加两个作为参数传递的数字并返回总和。
*   它必须检查是否有任何数字是实际数字，否则返回**undefined**并在那里停止程序。
*   它必须检查它是否传递了一个或两个参数。更多被忽略。
*   如果它只有一个参数，那么它必须返回一个使用该数字并期望另一个的函数，然后添加它。

### 相关链接

*   [数组](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)
*   [类型](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/typeof)
*   [参数对象](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/arguments)

## ![:speech_balloon:](https://forum.freecodecamp.com/images/emoji/emoji_one/speech_balloon.png?v=3 "：speech_balloon：")提示：1

每次处理参数时，都必须检查它是否为数字。为此，处理此任务的函数将为您保存重复的代码。

> _现在尝试解决问题_

## ![:speech_balloon:](https://forum.freecodecamp.com/images/emoji/emoji_one/speech_balloon.png?v=3 "：speech_balloon：")提示：2

当处理它需要返回函数的情况时，最好再次检查第一个和唯一的参数是否为数字，并将代码作为基础。

> _现在尝试解决问题_

## ![:speech_balloon:](https://forum.freecodecamp.com/images/emoji/emoji_one/speech_balloon.png?v=3 "：speech_balloon：")提示：3

在只传递了一个参数的情况下，不要担心如何提示输入第二个参数，只需正确定义函数定义，事情就会按照应有的方式运行。

> _现在尝试解决问题_

## 扰流警报！

![警告牌](//discourse-user-assets.s3.amazonaws.com/original/2X/2/2d6c412a50797771301e7ceabd554cef4edcd74d.gif)

**提前解决！**

## ![:beginner:](https://forum.freecodecamp.com/images/emoji/emoji_one/beginner.png?v=3 "：初学者：")基本代码解决方案

```javascript
    function addTogether() { 
      // Function to check if a number is actually a number 
      // and return undefined otherwise. 
      var checkNum = function(num) { 
        if (typeof num !== 'number') { 
          return undefined; 
        } else 
          return num; 
      }; 
 
      // Check if we have two parameters, check if they are numbers 
      // handle the case where one is not 
      // returns the addition. 
      if (arguments.length > 1) { 
        var a = checkNum(arguments[0]); 
        var b = checkNum(arguments[1]); 
        if (a === undefined || b === undefined) { 
          return undefined; 
        } else { 
          return a + b; 
        } 
      } else { 
        // If only one parameter was found, returns a new function that expects two 
        // Store first argument before entering the new function scope 
        var c = arguments[0]; 
 
        // Check the number again, must be outside the function to about returning an object 
        // instead of undefined. 
        if (checkNum(c)) { 
          // Return function that expect a second argument. 
          return function(arg2) { 
            // Check for non-numbers 
            if (c === undefined || checkNum(arg2) === undefined) { 
              return undefined; 
            } else { 
              // if numbers then add them. 
              return c + arg2; 
            } 
          }; 
        } 
      } 
    } 
 
    // test here 
    addTogether(2,3); 
```

![:rocket:](https://forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=3 "：火箭：") [运行代码](https://repl.it/CLnz/0)

### 代码说明：

*   首先，我创建一个函数，其唯一目的是检查数字是否实际上是一个数字，如果不是则返回undefined。它使用**typeof**来检查。
*   检查我们是否有两个参数，如果有，然后使用我创建的**checkNum**函数检查它们是否为数字。
*   如果它们**未定义，**则添加它们并返回添加。如果它们中的任何一个未定义，则返回undefined。
*   在我们只有一个参数的情况下，我们返回一个需要两个参数的新函数。为此，我们在进入新范围之前存储第一个参数，以避免我们的参数被覆盖。
*   仍然在大的其他内部，我们需要检查我们保存的参数，如果它是一个数字，那么我们返回期望第二个参数的函数。
*   现在在我们返回的函数内部，我们必须再次检查非数字，就像在开始时使用**checkNum一样，**如果未定义则返回，否则如果数字添加它们并返回添加。

#### 相关链接

*   [类型](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/typeof)
*   [参数对象](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/arguments)

## ![:sunflower:](https://forum.freecodecamp.com/images/emoji/emoji_one/sunflower.png?v=3 "：向日葵：")中级代码解决方案：

```javascript
    function addTogether() { 
      var args = new Array(arguments.length); 
      //Storing the arguments in an array 
      for(var i = 0; i < args.length; ++i) { 
          args[i] = arguments[i]; 
        } 
     //Check for the arguments length 
     if(args.length == 2){ 
        //If there are two arguments,check for the type of both arguments 
        //Use typeof to check the type of the argument(both should be numbers) 
        if(typeof args[0] !== 'number' || typeof args[1] !=='number' ){ 
          return undefined; 
          } 
        return args[0]+args[1]; 
       } 
     //When only one argument is provided 
     if(args.length == 1){ 
         a= args[0]; 
         //Check the  argument using typeof 
        if(typeof a!=='number'){ 
            return undefined; 
          } 
        else{ 
           //Making use of closures 
           return function(b){ 
           //Checking the second argument 
             if(typeof b !=='number'){ 
               return undefined; 
               } 
             else 
               return a+b; 
              }; 
          } 
        } 
    } 
 
    // test here 
    addTogether(2,3); 
```

![:rocket:](https://forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=3 "：火箭：") [运行代码](https://repl.it/CLoA/0)

### 代码说明：

*   首先使用构造函数方法创建数组，将参数存储在数组中。
*   将每个参数添加到新数组。
*   然后检查新阵列的长度，因为我们需要知道是否有足够的数据。
*   使用`typeof`检查参数的类型，因为它们都应该是数字。
*   如果它们中的任何一个不是数字，则返回undefined，如果它们是，则返回它们的总和。
*   如果只有一个参数，我们仍然会在将其存储到新变量并返回新函数或未定义之后检查类型。

#### 相关链接

*   [类型](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/typeof)
*   [参数对象](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/arguments)

## ![:rotating_light:](https://forum.freecodecamp.com/images/emoji/emoji_one/rotating_light.png?v=3 "：rotating_light：")高级代码解决方案

```javascript
    //jshint esversion: 6 
    function addTogether() { 
      var args = Array.from(arguments); 
      return args.some(n => typeof n !== 'number') ? 
        undefined: 
        args.length > 1 ? 
          args.reduce((acc, n) => acc += n, 0): 
          (n) => typeof n === "number" ? 
            n + args[0]: 
            undefined; 
    } 
 
    // test here 
    addTogether(2,3); 
```

![:rocket:](https://forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=3 "：火箭：") [运行代码](https://repl.it/CLoB/0)

### 代码说明：

*   首先，我遍历参数并检查不是数字的参数并返回undefined
*   如果不是我，那么检查参数长度是否大于1，如果是，我使用Array.prototype.reduce对参数求和
*   否则我返回一个函数，检查传入的参数是否是一个数字并加总，如果没有返回undefined

#### 相关链接

*   [Array.prototype.reduce](http://forum.freecodecamp.com/t/javascript-array-prototype-reduce/14299)
*   [Array.prototype.some](http://forum.freecodecamp.com/t/javascript-array-prototype-some/14304)
*   [Array.from](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/from)

> **注意：**如果您已将任何**相关主要内容**添加到Wiki页面，请仅添加您的用户名。 （请不要删除任何现有的用户名。）

## ![:clipboard:](https://forum.freecodecamp.com/images/emoji/emoji_one/clipboard.png?v=3 "：剪贴板：")捐款说明：

*   ![:warning:](https://forum.freecodecamp.com/images/emoji/emoji_one/warning.png?v=3 "：警告：") **请勿**添加与任何现有解决方案类似的解决方案。如果您认为它**_相似但更好_** ，那么尝试合并（或替换）现有的类似解决方案。
*   添加解决方案的说明。
*   将解决方案分为以下类别之一 - **基本** ， **中级**和**高级** 。 ![:traffic_light:](https://forum.freecodecamp.com/images/emoji/emoji_one/traffic_light.png?v=3 "：红绿灯：")
*   如果您添加了任何**相关的主要内容，**请仅添加您的用户名。 （ ![:warning:](https://forum.freecodecamp.com/images/emoji/emoji_one/warning.png?v=3 "：警告：") **_不要_** _删除任何现有的用户名_ ）

> 看到![:point_right:](https://forum.freecodecamp.com/images/emoji/emoji_one/point_right.png?v=3 "：point_right：") [**`Wiki Challenge Solution Template`**](http://forum.freecodecamp.com/t/algorithm-article-template/14272)供参考。