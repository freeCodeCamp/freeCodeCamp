---
title: Word Blanks
localeTitle: 字空白
---
![:triangular_flag_on_post:](https://forum.freecodecamp.com/images/emoji/emoji_one/triangular_flag_on_post.png?v=3 "：triangular_flag_on_post：")如果卡住，请记得使用**`Read-Search-Ask`** 。尝试配对程序![:busts_in_silhouette:](https://forum.freecodecamp.com/images/emoji/emoji_one/busts_in_silhouette.png?v=3 "：busts_in_silhouette：")并编写自己的代码![:pencil:](https://forum.freecodecamp.com/images/emoji/emoji_one/pencil.png?v=3 "：铅笔：")

### ![:checkered_flag:](https://forum.freecodecamp.com/images/emoji/emoji_one/checkered_flag.png?v=3 "：checkered_flag：")问题说明：

我们现在将使用我们的字符串知识来构建一个**Mad Libs**风格的文字游戏，我们称之为“Word Blanks”。您将创建一个（可选幽默的）“填空”样式句子。

您将需要使用字符串运算符来使用提供的变量构建新的字符串**result** ： **myNoun** ， **myAdjective** ， **myVerb**和**myAdverb** 。

您还需要使用其他字符串，这些字符串不会更改，并且必须位于所有提供的单词之间。输出应该是一个完整的句子。

我们提供了一个用不同的单词测试结果的框架。测试将使用几个不同的输入运行您的函数，以确保所有提供的单词出现在输出中，以及您的额外字符串。

*   更改下面的代码`//Your Code here` ，最多`//Change this line` 。
*   请注意，您正在编辑`wordBlanks()`函数的内部。
*   您将基本上使用提供的字符串变量创建一个句子。

#### 相关链接

*   [疯狂的自由人](https://en.wikipedia.org/wiki/Mad_Libs)
*   [挑战：用变量构造字符串](http://www.freecodecamp.com/challenges/constructing-strings-with-variables)
*   [挑战：使用Plus运算符连接字符串](http://www.freecodecamp.com/challenges/concatenating-strings-with-plus-operator)
*   [挑战：使用Plus Equals运算符连接字符串](http://www.freecodecamp.com/challenges/concatenating-strings-with-the-plus-equals-operator)

## ![:speech_balloon:](https://forum.freecodecamp.com/images/emoji/emoji_one/speech_balloon.png?v=3 "：speech_balloon：")提示：1

`+`可用于_连接_字符串。

> _现在尝试解决问题_

## ![:speech_balloon:](https://forum.freecodecamp.com/images/emoji/emoji_one/speech_balloon.png?v=3 "：speech_balloon：")提示：2

正如您可以通过连接来链接字符串一样，您可以将它们分配给现有变量而不是新变量。

> _现在尝试解决问题_

## ![:speech_balloon:](https://forum.freecodecamp.com/images/emoji/emoji_one/speech_balloon.png?v=3 "：speech_balloon：")提示：3

`+=`将允许您使用现有变量，在这种情况下为字符串类型。请记住在每个变量之间添加自己的**非字母** 。

> _现在尝试解决问题_

## 扰流警报！

![警告牌](//discourse-user-assets.s3.amazonaws.com/original/2X/2/2d6c412a50797771301e7ceabd554cef4edcd74d.gif)

**提前解决！**

## ![:beginner:](https://forum.freecodecamp.com/images/emoji/emoji_one/beginner.png?v=3 "：初学者：")基本代码解决方案
```
function wordBlanks(myNoun, myAdjective, myVerb, myAdverb) { 
    var result = ""; 
    // Your code below this line 
    result+= "My "+myAdjective+" "+myNoun+" "+myVerb+" very "+myAdverb+"."; 
 
    // Your code above this line 
  return result; 
 } 
 
 // Change the words here to test your function 
 wordBlanks("dog", "big", "ran", "quickly"); 
```

**示例运行**

*   测试`wordBlanks("dog", "big", "ran", "quickly");`运行。
*   使用空字符串`""`声明变量**结果** 。
*   **结果**将通过变量**myNoun** ， **myAdjective** ， **myVerb** ， **myAdverb**分别由连接字符串“dog”，“big”，“ran”，“ **quick** ”组成的新字符串进行更改;订单已更改并添加了空白。
*   返回**结果** 。

### 代码说明：

*   使用**result**连接给定的变量。
*   用空格和适当的单词分隔单词以形成完整的句子。

## ![:clipboard:](https://forum.freecodecamp.com/images/emoji/emoji_one/clipboard.png?v=3 "：剪贴板：")捐款说明：

*   ![:warning:](https://forum.freecodecamp.com/images/emoji/emoji_one/warning.png?v=3 "：警告：") **请勿**添加与任何现有解决方案类似的解决方案。如果您认为它**_相似但更好_** ，那么尝试合并（或替换）现有的类似解决方案。
*   添加解决方案的说明。
*   将解决方案分为以下类别之一 - **基本** ， **中级**和**高级** 。 ![:traffic_light:](https://forum.freecodecamp.com/images/emoji/emoji_one/traffic_light.png?v=3 "：红绿灯：")
*   如果您添加了任何**相关的主要内容，**请仅添加您的用户名。 （ ![:warning:](https://forum.freecodecamp.com/images/emoji/emoji_one/warning.png?v=3 "：警告：") **_不要_** _删除任何现有的用户名_ ）

> 看到![:point_right:](https://forum.freecodecamp.com/images/emoji/emoji_one/point_right.png?v=3 "：point_right：") [**`Wiki Challenge Solution Template`**](http://forum.freecodecamp.com/t/algorithm-article-template/14272)供参考。