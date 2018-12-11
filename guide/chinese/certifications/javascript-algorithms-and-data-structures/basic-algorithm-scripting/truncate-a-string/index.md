---
title: Truncate a String
localeTitle: 截断字符串
---
![:triangular_flag_on_post:](https://forum.freecodecamp.com/images/emoji/emoji_one/triangular_flag_on_post.png?v=3 "：triangular_flag_on_post：")如果卡住，请记得使用**`Read-Search-Ask`** 。尝试配对程序![:busts_in_silhouette:](https://forum.freecodecamp.com/images/emoji/emoji_one/busts_in_silhouette.png?v=3 "：busts_in_silhouette：")并编写自己的代码![:pencil:](https://forum.freecodecamp.com/images/emoji/emoji_one/pencil.png?v=3 "：铅笔：")

### ![:checkered_flag:](https://forum.freecodecamp.com/images/emoji/emoji_one/checkered_flag.png?v=3 "：checkered_flag：")问题说明：

如果字符串长度超过指定的给定最大长度，我们需要减少字符串的长度或**截断**它，并将`...`添加到结尾。如果不是那么久，那么我们保持原样。

#### 相关链接

*   [String.prototype.slice（）](https://github.com/FreeCodeCamp/FreeCodeCamp/wiki/JS-String-Prototype-Slice)

## ![:speech_balloon:](https://forum.freecodecamp.com/images/emoji/emoji_one/speech_balloon.png?v=3 "：speech_balloon：")提示：1

字符串在JavaScript中是不可变的，因此我们需要一个新变量来存储截断的字符串。

> _现在尝试解决问题_

## ![:speech_balloon:](https://forum.freecodecamp.com/images/emoji/emoji_one/speech_balloon.png?v=3 "：speech_balloon：")提示：2

您将需要使用slice（）方法并指定从哪里开始和停止的位置。

> _现在尝试解决问题_

## ![:speech_balloon:](https://forum.freecodecamp.com/images/emoji/emoji_one/speech_balloon.png?v=3 "：speech_balloon：")提示：3

不要忘记，当我们截断这个词时，我们还必须计算加上的长度`...`

> _现在尝试解决问题_

## 扰流警报！

![警告牌](//discourse-user-assets.s3.amazonaws.com/original/2X/2/2d6c412a50797771301e7ceabd554cef4edcd74d.gif)

**提前解决！**

## ![:beginner:](https://forum.freecodecamp.com/images/emoji/emoji_one/beginner.png?v=3 "：初学者：")基本代码解决方案
```
function truncateString(str, num) { 
  // Clear out that junk in your trunk 
  if (str.length > num && num > 3) { 
    return str.slice(0, (num - 3)) + '...'; 
  } else if (str.length > num && num <= 3) { 
    return str.slice(0, num) + '...'; 
  } else { 
    return str; 
  } 
 
 } 
```

![:rocket:](https://forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=3 "：火箭：") [运行代码](https://repl.it/CLjU/55)

### 代码说明：

*   首先，我们从一个简单的`if`语句开始，以确定三个结果之一......
*   如果我们的字符串长度大于我们想要截断的`num` ，并且我们的截断点至少是字符串中的三个或更多字符，我们返回一个字符串切片，从字符0开始，到`num - 3`结束。然后我们将`'...'`追加到字符串的末尾。
*   但是，如果我们的字符串长度大于`num`但`num`在前三个字符内，我们不必将点数计算为字符。因此，我们返回与上面相同的字符串，但有一点不同：我们切片的端点现在只是`num` 。
*   最后，如果没有上述情况属实，这意味着我们的字符串长度小于我们的截断`num` 。因此，我们可以只返回字符串。

## ![:rotating_light:](https://forum.freecodecamp.com/images/emoji/emoji_one/rotating_light.png?v=3 "：rotating_light：")高级代码解决方案
```
function truncateString(str, num) { 
  if (str.length <= num) { 
    return str; 
  } else { 
    return str.slice(0, num > 3 ? num - 3 : num) + '...'; 
  } 
 } 
```

![:rocket:](https://forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=3 "：火箭：") [运行代码](https://repl.it/CLjU/54)

### 代码说明：

*   首先，我们需要一个if语句来测试作为第一个参数传入的完整字符串的长度是否已经作为第二个参数传入的大小限制。如果是这样，我们可以返回传入的字符串。
    
    if（str.length <= num） 返回str;
    
*   如果上面的`if`语句失败，我们将移动到`else` ，我们将返回字符串的“切片”。 slice方法提取字符串的一部分并返回一个新字符串。这里我们传递0作为切片的起点。要确定端点，我们使用三元运算符： `num > 3 ? num - 3 : num` 。在我们的三元组中，如果`num`大于3，我们必须将三个点分解为我们的总长度，因此我们将切片结束于`num-3` 。如果num小于或等于3，则我们的切片得到一个只有`num`的结束变量。最后， `'...'`被附加到我们新字符串的末尾并被返回。
    
    } else { return str.slice（0，num> 3？num - 3：num）+'...'; }
    
*   **注意**为了理解上述代码，您需要了解三元运算符的工作原理。三元运算符经常用作`if`语句的快捷方式，并遵循以下格式： `condition ? expr1 : expr2` 。如果`condition`计算结果为true，则运算符返回`expr1` 。否则，它返回`expr2`的值。
    

#### 相关链接

*   [条件（三元）运算符](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Conditional_Operator)
*   [String.prototype.slice（）](https://github.com/FreeCodeCamp/FreeCodeCamp/wiki/JS-String-Prototype-Slice)

## ![:clipboard:](https://forum.freecodecamp.com/images/emoji/emoji_one/clipboard.png?v=3 "：剪贴板：")捐款说明：

*   ![:warning:](https://forum.freecodecamp.com/images/emoji/emoji_one/warning.png?v=3 "：警告：") **请勿**添加与任何现有解决方案类似的解决方案。如果您认为它**_相似但更好_** ，那么尝试合并（或替换）现有的类似解决方案。
*   添加解决方案的说明。
*   将解决方案分为以下类别之一 - **基本** ， **中级**和**高级** 。 ![:traffic_light:](https://forum.freecodecamp.com/images/emoji/emoji_one/traffic_light.png?v=3 "：红绿灯：")
*   如果您添加了任何**相关的主要内容，**请仅添加您的用户名。 （ ![:warning:](https://forum.freecodecamp.com/images/emoji/emoji_one/warning.png?v=3 "：警告：") **_不要_** _删除任何现有的用户名_ ）

> 看到![:point_right:](https://forum.freecodecamp.com/images/emoji/emoji_one/point_right.png?v=3 "：point_right：") [**`Wiki Challenge Solution Template`**](http://forum.freecodecamp.com/t/algorithm-article-template/14272)供参考。