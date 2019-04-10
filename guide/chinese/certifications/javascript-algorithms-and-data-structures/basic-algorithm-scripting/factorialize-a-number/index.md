---
title: Factorialize a Number
localeTitle: 对一个数字进行推理
---
![递归](//discourse-user-assets.s3.amazonaws.com/original/2X/d/dcf927a2e8c3beb7a9c28770153821982398bd99.jpg)

![:triangular_flag_on_post:](https://forum.freecodecamp.com/images/emoji/emoji_one/triangular_flag_on_post.png?v=3 "：triangular_flag_on_post：")如果卡住，请记得使用**`Read-Search-Ask`** 。尝试配对程序![:busts_in_silhouette:](https://forum.freecodecamp.com/images/emoji/emoji_one/busts_in_silhouette.png?v=3 "：busts_in_silhouette：")并编写自己的代码![:pencil:](https://forum.freecodecamp.com/images/emoji/emoji_one/pencil.png?v=3 "：铅笔：")

## ![:checkered_flag:](https://forum.freecodecamp.com/images/emoji/emoji_one/checkered_flag.png?v=3 "：checkered_flag：")问题说明：

返回提供的整数的阶乘。如果整数用字母n表示，则阶乘是所有小于或等于n的正整数的乘积。

因子通常用简写符号n表示！

例如： `5! = 1 * 2 * 3 * 4 * 5 = 120`

## ![:speech_balloon:](https://forum.freecodecamp.com/images/emoji/emoji_one/speech_balloon.png?v=3 "：speech_balloon：")提示：1

这个从`0! = 1`开始很容易`0! = 1` ，所以你可以继续前进，只需`return 1` 。

我们可以使用它作为`if`来打破我们将使用**递归函数**创建的**循环** 。它将检查你给函数的数字是否为0（这将是你的阶乘链的末尾）。函数在返回任何内容时“结束”。实际上，没有显式`return`语句的**所有**函数都将返回`undefined` 。

这也是为什么**而不是** _“完成”_ ，一个函数总是被称为_“已经返回”_ 。现在这......

> _现在尝试解决问题_

## ![:speech_balloon:](https://forum.freecodecamp.com/images/emoji/emoji_one/speech_balloon.png?v=3 "：speech_balloon：")提示：2

**理解递归**

递归是指重复（调用）自身的函数。在这种情况下，我们基本上返回给定的数字（即5），乘以函数本身，但这次传递给_num_参数的值是`num-1` （最初转换为4）。这个功能**本身**就很有趣，呃？

> _现在尝试解决问题_

## ![:speech_balloon:](https://forum.freecodecamp.com/images/emoji/emoji_one/speech_balloon.png?v=3 "：speech_balloon：")提示：3

**了解流程**

如果您考虑在中学完成的那些括号操作，您可以更好地可视化第一个**返回**值，您可以在内部，括号和方括号内的每个括号内进行数学计算，直到获得最终结果（总计）。这次是同样的事情，看一下程序流程：

### 在第一次执行函数期间：

\[ **num** = 5\]

5 _等于_ 1还是0？ **不** ---> Oki doki，让我们继续......

**返回：**

（ **5** _（_第二次执行\_： **4** \_（ _第三次执行_ ： **3次** _（_第四次执行： **2** _次，第五次执行_ ： **1次** ））））

它返回的内容可以被视为`(5*(4*(3*(2*1))))`或只是`5 * 4 * 3 * 2 * 1` ，该函数将返回该操作的结果： `120` 。现在，让我们检查其余的执行操作：

### 在其余的执行期间：

**第二次执行** ： _num_ = 5-1 = **4** - >是_num_ 0还是1？没有

\- >当_num_现在是4-1时，返回4和下一个结果之间的乘法。

**第三次执行** ： _num_ = 4 - 1 = **3** - >是_num_ 0还是1？没有

\- >当_num_现在为3-1时，返回3和下一个结果之间的乘法。

**第四次执行** ： _num_ = 3-1 = **2** - >是_num_ 0还是1？没有

\- >当_num_现在为2-1时，返回2和下一个结果之间的乘法。

**第五次执行** ： _num_ = 2-1 = **1** - >是_num_ 0还是1？是的

\- >返回**1** 。这是递归停止的地方，因为没有更多的执行。

得到它了？ ![:wink:](https://forum.freecodecamp.com/images/emoji/emoji_one/wink.png?v=3 "：眨眼：")

> _现在尝试解决问题_

#### 相关链接

*   [JS函数](https://www.youtube.com/watch?v=R8SjM4DKK80)
*   [JS中的递归](https://www.youtube.com/watch?v=k7-N8R0-KY4)

## 扰流警报！

![警告牌](//discourse-user-assets.s3.amazonaws.com/original/2X/2/2d6c412a50797771301e7ceabd554cef4edcd74d.gif)

**提前解决！**

## ![:beginner:](https://forum.freecodecamp.com/images/emoji/emoji_one/beginner.png?v=3 "：初学者：")代码解决方案
```
function factorialize(num) { 
  if (num === 0) { return 1; } 
  return num * factorialize(num-1); 
 } 
 
 factorialize(5); 
```

![:rocket:](https://forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=3 "：火箭：") [运行代码](https://repl.it/CLjU/1)

## 代码说明：

请注意，在第一行，我们有终端条件，即检查递归结束的条件。如果`num == 0` ，那么我们返回1，即有效地结束递归并通知堆栈将该值传播到较高级别。如果我们没有这个条件，递归将继续，直到堆栈空间被消耗，从而导致[堆栈溢出](https://en.wikipedia.org/wiki/Stack_overflow) 。

### 相关链接

*   [递归](https://www.codecademy.com/en/courses/javascript-lesson-205/0/1)
*   [Factorialization](https://en.wikipedia.org/wiki/Factorial)
*   [算术运算符](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Arithmetic_Operators)

## ![:clipboard:](https://forum.freecodecamp.com/images/emoji/emoji_one/clipboard.png?v=3 "：剪贴板：")捐款说明：

*   ![:warning:](https://forum.freecodecamp.com/images/emoji/emoji_one/warning.png?v=3 "：警告：") **请勿**添加与任何现有解决方案类似的解决方案。如果您认为它**_相似但更好_** ，那么尝试合并（或替换）现有的类似解决方案。
*   添加解决方案的说明。
*   将解决方案分为以下类别之一 - **基本** ， **中级**和**高级** 。 ![:traffic_light:](https://forum.freecodecamp.com/images/emoji/emoji_one/traffic_light.png?v=3 "：红绿灯：")
*   如果您添加了任何**相关的主要内容，**请仅添加您的用户名。 （ ![:warning:](https://forum.freecodecamp.com/images/emoji/emoji_one/warning.png?v=3 "：警告：") **_不要_** _删除任何现有的用户名_ ）

> 看到![:point_right:](https://forum.freecodecamp.com/images/emoji/emoji_one/point_right.png?v=3 "：point_right：") [**`Wiki Challenge Solution Template`**](http://forum.freecodecamp.com/t/algorithm-article-template/14272)供参考。