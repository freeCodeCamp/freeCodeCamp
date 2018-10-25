---
title: Convert Celsius to Fahrenheit
localeTitle: 将摄氏温度转换为华氏温度
---
![:triangular_flag_on_post:](https://forum.freecodecamp.com/images/emoji/emoji_one/triangular_flag_on_post.png?v=3 "：triangular_flag_on_post：")如果卡住，请记得使用**`Read-Search-Ask`** 。尝试配对程序![:busts_in_silhouette:](https://forum.freecodecamp.com/images/emoji/emoji_one/busts_in_silhouette.png?v=3 "：busts_in_silhouette：")并编写自己的代码![:pencil:](https://forum.freecodecamp.com/images/emoji/emoji_one/pencil.png?v=3 "：铅笔：")

### ![:checkered_flag:](https://forum.freecodecamp.com/images/emoji/emoji_one/checkered_flag.png?v=3 "：checkered_flag：")问题说明：

从摄氏温度转换为华氏温度的算法是以摄氏度乘以`9/5`的温度加上`32` 。

您将获得一个可变**摄氏度，**表示摄氏温度。使用已定义的变量**fahrenheit**并应用算法为其分配相应的华氏温度。

#### 相关链接

*   [运营秩序：PEMDAS](http://www.purplemath.com/modules/orderops.htm)
*   [操作顺序：视频](https://www.khanacademy.org/math/pre-algebra/order-of-operations/order_of_operations/v/order-of-operations)

## ![:speech_balloon:](https://forum.freecodecamp.com/images/emoji/emoji_one/speech_balloon.png?v=3 "：speech_balloon：")提示：1

看看代码。有一个区域你不应该编辑。从那里开始，问问自己 - 我以前从未见过的那里使用了什么？

> _现在尝试解决问题_

## ![:speech_balloon:](https://forum.freecodecamp.com/images/emoji/emoji_one/speech_balloon.png?v=3 "：speech_balloon：")提示：2

请记住**操作顺序，**请查看_链接_部分中的_链接_以获取更多信息。

> _现在尝试解决问题_

## 扰流警报！

![警告牌](//discourse-user-assets.s3.amazonaws.com/original/2X/2/2d6c412a50797771301e7ceabd554cef4edcd74d.gif)

**提前解决！**

## ![:beginner:](https://forum.freecodecamp.com/images/emoji/emoji_one/beginner.png?v=3 "：初学者：")基本代码解决方案

```javascript
    function convertToF(celsius) { 
      // Only change code below this line 
      var fahrenheit = (celsius * (9/5)) + 32; 
 
      // Only change code above this line 
      if ( typeof fahrenheit !== 'undefined' ) { 
      return fahrenheit; 
      } else { 
        return 'fahrenheit not defined'; 
      } 
    } 
 
    // Change the inputs below to test your code 
    convertToF(30); 
```

### 代码说明：

*   声明**fahrenheit**变量。
*   在需要时，确保使用括号（ `()` ）遵循正确的算术运算顺序。

## ![:clipboard:](https://forum.freecodecamp.com/images/emoji/emoji_one/clipboard.png?v=3 "：剪贴板：")捐款说明：

*   ![:warning:](https://forum.freecodecamp.com/images/emoji/emoji_one/warning.png?v=3 "：警告：") **请勿**添加与任何现有解决方案类似的解决方案。如果您认为它**_相似但更好_** ，那么尝试合并（或替换）现有的类似解决方案。
*   添加解决方案的说明。
*   将解决方案分为以下类别之一 - **基本** ， **中级**和**高级** 。 ![:traffic_light:](https://forum.freecodecamp.com/images/emoji/emoji_one/traffic_light.png?v=3 "：红绿灯：")
*   如果您添加了任何**相关的主要内容，**请仅添加您的用户名。 （ ![:warning:](https://forum.freecodecamp.com/images/emoji/emoji_one/warning.png?v=3 "：警告：") **_不要_** _删除任何现有的用户名_ ）

> 看到![:point_right:](https://forum.freecodecamp.com/images/emoji/emoji_one/point_right.png?v=3 "：point_right：") [**`Wiki Challenge Solution Template`**](http://forum.freecodecamp.com/t/algorithm-article-template/14272)供参考。