---
title: Profile Lookup
localeTitle: 个人资料查询
---
![:triangular_flag_on_post:](https://forum.freecodecamp.com/images/emoji/emoji_one/triangular_flag_on_post.png?v=3 "：triangular_flag_on_post：")如果卡住，请记得使用**`Read-Search-Ask`** 。尝试配对程序![:busts_in_silhouette:](https://forum.freecodecamp.com/images/emoji/emoji_one/busts_in_silhouette.png?v=3 "：busts_in_silhouette：")并编写自己的代码![:pencil:](https://forum.freecodecamp.com/images/emoji/emoji_one/pencil.png?v=3 "：铅笔：")

### ![:checkered_flag:](https://forum.freecodecamp.com/images/emoji/emoji_one/checkered_flag.png?v=3 "：checkered_flag：")问题说明：

我们的联系人列表中有一组代表不同人的对象。

已经为您预先编写了一个`lookUpProfile()`函数，它将**firstName**和一个属性（ **prop** ）作为参数。

该函数应检查**firstName**是否是实际联系人的**firstName** ，并且给定属性（ **prop** ）是该联系人的属性。

如果两者都为真，则返回该属性的_值_ 。

如果**firstName**与任何联系人不对应，则返回`No such contact` 。

如果**prop**不对应任何有效属性，则返回`No such property` 。

*   更改下面的代码`// Only change code below this line` ，最多为`// Only change code above this line` 。
*   确保您正在编辑`lookUpProfile()`函数的内部。
    *   该函数包括两个参数， **firstName**和**prop** 。
*   该函数应查看给定**firstName**参数的**联系人**列表。
    *   如果找到匹配项，则该函数应查找给定的**prop**参数。
    *   如果找到**firstName**和关联的**prop** ，则应返回**prop**的值。
    *   如果找到**firstName**且未找到任何关联的**prop** ，则应返回`No such property` 。
*   如果在任何地方都找不到**firstName** ，则应返回`No such contact` 。

#### 相关链接

*   [挑战：使用括号表示法访问对象属性](http://www.freecodecamp.com/challenges/accessing-objects-properties-with-bracket-notation)
*   [挑战：使用JavaScript迭代循环](http://www.freecodecamp.com/challenges/iterate-with-javascript-for-loops)

## ![:speech_balloon:](https://forum.freecodecamp.com/images/emoji/emoji_one/speech_balloon.png?v=3 "：speech_balloon：")提示：1

使用`for`循环在**联系人**列表中循环。

> _现在尝试解决问题_

## ![:speech_balloon:](https://forum.freecodecamp.com/images/emoji/emoji_one/speech_balloon.png?v=3 "：speech_balloon：")提示：2

使用嵌套的`if`首先检查语句是否匹配**的firstName，**然后检查`if` **道具**匹配。

> _现在尝试解决问题_

## ![:speech_balloon:](https://forum.freecodecamp.com/images/emoji/emoji_one/speech_balloon.png?v=3 "：speech_balloon：")提示：3

将你的`return "No such contact"`留在`for`循环中作为最后的全部。

> _现在尝试解决问题_

## 扰流警报！

![警告牌](//discourse-user-assets.s3.amazonaws.com/original/2X/2/2d6c412a50797771301e7ceabd554cef4edcd74d.gif)

**提前解决！**

## ![:beginner:](https://forum.freecodecamp.com/images/emoji/emoji_one/beginner.png?v=3 "：初学者：")基本代码解决方案
```
for (var x = 0; x < contacts.length; x++){ 
    if (contacts[x].firstName === name) { 
        if (contacts[x].hasOwnProperty(prop)) { 
            return contacts[x][prop]; 
        } else { 
            return "No such property"; 
        } 
    } 
 } 
 return "No such contact"; 
```

### 代码说明：

*   `for`循环运行，从**联系人**列表中的第一个对象开始。
*   如果传递给函数的**firstName**参数与第一个对象中的`"firstName"`键的值匹配，则`if`语句将传递。
*   然后，我们使用`.hasOwnProperty()`方法（检查是否存在给定属性并返回布尔值），并将**prop**作为参数。如果是，则返回**prop**的值。
    *   如果第二个`if`语句失败， `No such property`返回`No such property` 。
*   如果第一个`if`语句失败， `for`循环将继续到**联系人**列表中的下一个对象。
*   如果**firstName**参数与最终**联系人**对象不匹配，则`for`循环退出并且`No such contact`返回`No such contact` 。

**示例运行**

*   `lookUpProfile("Akira","likes");`运行。
*   `"Akira"`与第一个对象中的`"firstName"`键匹配，因此`if`语句返回true。
*   在第一个对象中找到`"likes"` ，因此第二个`if`语句返回true。
*   值`"likes"`返回- `"Pizza", "Coding", "Brownie Points"` 。

## ![:clipboard:](https://forum.freecodecamp.com/images/emoji/emoji_one/clipboard.png?v=3 "：剪贴板：")捐款说明：

*   ![:warning:](https://forum.freecodecamp.com/images/emoji/emoji_one/warning.png?v=3 "：警告：") **请勿**添加与任何现有解决方案类似的解决方案。如果您认为它**_相似但更好_** ，那么尝试合并（或替换）现有的类似解决方案。
*   添加解决方案的说明。
*   将解决方案分为以下类别之一 - **基本** ， **中级**和**高级** 。 ![:traffic_light:](https://forum.freecodecamp.com/images/emoji/emoji_one/traffic_light.png?v=3 "：红绿灯：")
*   如果您添加了任何**相关的主要内容，**请仅添加您的用户名。 （ ![:warning:](https://forum.freecodecamp.com/images/emoji/emoji_one/warning.png?v=3 "：警告：") **_不要_** _删除任何现有的用户名_ ）

> 看到![:point_right:](https://forum.freecodecamp.com/images/emoji/emoji_one/point_right.png?v=3 "：point_right：") **`Wiki Challenge Solution Template`**供参考。