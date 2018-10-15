---
title: Falsy Bouncer
localeTitle: Falsy Bouncer
---
![](//discourse-user-assets.s3.amazonaws.com/original/2X/5/55dedad40d9f3f662c70d1eac4effc00c7d26bd9.jpg)

![:triangular_flag_on_post:](https://forum.freecodecamp.com/images/emoji/emoji_one/triangular_flag_on_post.png?v=3 "：triangular_flag_on_post：")如果卡住，请记得使用**`Read-Search-Ask`** 。尝试配对程序![:busts_in_silhouette:](https://forum.freecodecamp.com/images/emoji/emoji_one/busts_in_silhouette.png?v=3 "：busts_in_silhouette：")并编写自己的代码![:pencil:](https://forum.freecodecamp.com/images/emoji/emoji_one/pencil.png?v=3 "：铅笔：")

### ![:checkered_flag:](https://forum.freecodecamp.com/images/emoji/emoji_one/checkered_flag.png?v=3 "：checkered_flag：")问题说明：

从数组中删除所有[有价值的](https://guide.freecodecamp.org/javascript/falsy-values/)值。

#### 相关链接

*   [虚假的价值观](https://guide.freecodecamp.org/javascript/falsy-values/)

## ![:speech_balloon:](https://forum.freecodecamp.com/images/emoji/emoji_one/speech_balloon.png?v=3 "：speech_balloon：")提示：1

Falsy是评估为FALSE的东西。 JavaScript中只有六个假值：undefined，null，NaN，0，“”（空字符串），当然还有false。

> _现在尝试解决问题_

## ![:speech_balloon:](https://forum.freecodecamp.com/images/emoji/emoji_one/speech_balloon.png?v=3 "：speech_balloon：")提示：2

我们需要确保我们有所有的虚假值来比较，我们可以知道它，也许有一个具有所有虚假值的函数...

> _现在尝试解决问题_

## ![:speech_balloon:](https://forum.freecodecamp.com/images/emoji/emoji_one/speech_balloon.png?v=3 "：speech_balloon：")提示：3

然后我们需要添加一个带有falsy值函数的`filter()` ...

> _现在尝试解决问题_

## 扰流警报！

![警告牌](//discourse-user-assets.s3.amazonaws.com/original/2X/2/2d6c412a50797771301e7ceabd554cef4edcd74d.gif)

**提前解决！**

## ![:rotating_light:](https://forum.freecodecamp.com/images/emoji/emoji_one/rotating_light.png?v=3 "：rotating_light：")高级代码解决方案
```
function bouncer(arr) { 
  return arr.filter(Boolean); 
 } 
```

![:rocket:](https://forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=3 "：火箭：") [运行代码](https://repl.it/CLjU/32)

### 代码说明：

该`Array.prototype.filter`方法需要一个返回的函数`Boolean`值，其采用单个参数，并返回`true`用于[truthy](http://forum.freecodecamp.com/t/javascript-truthy-value/15975)值或`false`用于[falsy](https://guide.freecodecamp.org/javascript/falsy-values/)值。因此，我们传递内置的`Boolean`函数。

#### 相关链接

*   [布尔](http://forum.freecodecamp.com/t/javascript-boolean/14311)
*   [Truthy](http://forum.freecodecamp.com/t/javascript-truthy-value/15975)
*   [Array.prototype.filter（）](http://forum.freecodecamp.com/t/javascript-array-prototype-filter/14289)

## ![:trophy:](https://forum.freecodecamp.com/images/emoji/emoji_one/trophy.png?v=3 "：杯：")积分：

如果您发现此页面有用，可以通过在主聊天上复制并粘贴此页面来表示感谢：

**`Thanks @renelis @abhisekp @Rafase282 for your help with Algorithm: Falsy Bouncer`**

## ![:clipboard:](https://forum.freecodecamp.com/images/emoji/emoji_one/clipboard.png?v=3 "：剪贴板：")捐款说明：

*   ![:warning:](https://forum.freecodecamp.com/images/emoji/emoji_one/warning.png?v=3 "：警告：") **请勿**添加与任何现有解决方案类似的解决方案。如果您认为它**_相似但更好_** ，那么尝试合并（或替换）现有的类似解决方案。
*   添加解决方案的说明。
*   将解决方案分为以下类别之一 - **基本** ， **中级**和**高级** 。 ![:traffic_light:](https://forum.freecodecamp.com/images/emoji/emoji_one/traffic_light.png?v=3 "：红绿灯：")
*   如果您添加了任何**相关的主要内容，**请仅添加您的用户名。 （ ![:warning:](https://forum.freecodecamp.com/images/emoji/emoji_one/warning.png?v=3 "：警告：") **_不要_** _删除任何现有的用户名_ ）

> 看到![:point_right:](https://forum.freecodecamp.com/images/emoji/emoji_one/point_right.png?v=3 "：point_right：") [**`Wiki Challenge Solution Template`**](http://forum.freecodecamp.com/t/algorithm-article-template/14272)供参考。