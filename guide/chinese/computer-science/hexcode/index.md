---
title: Hexadecimal Numbers
localeTitle: 十六进制数
---
## 十六进制数字系统

十六进制数，通常缩写为“十六进制数”或“十六进制”， 是基数16中表示的数字，而不是我们用于日常算术和计数的基数10。

实际上，这意味着以十六进制编写的数字的每列最多可以表示16个值。

十六进制数字使用标准符号0,1,2,3,4,5,6,7,8和9来表示相应的值， 并使用字母表的前六个字母来表示值10到15（EG：A，B，C，D，E，F）。

在编程中，我们使用`0x`十六进制常量的前缀，但有一些例外。

### 例子和解释
```
0x1        ==        1 
 0xF        ==        15 
 0xFF       ==        255 
 0xFFF      ==        4095 
 0x1000     ==        4096 
```

在标准基础10系统中，每列代表10的增加功率， 而在基数16中，每列代表16的增加的幂。

如上面的表格示例所示，使用一个十六进制数字，我们可以表示最多包括15的数字。添加另一列，我们可以用另一列表示最多255,4095的数字，依此类推。

## 低级编程中十六进制的使用

Hexadecimal首先在计算机科学中发现它作为一种便利功能。

我们计算机中的数据具有最低的公共存储单元Byte。 每个字节包含8位，并且能够存储0到255之间的数字。

十六进制具有简洁和边界清晰的优点。

单个字节始终由两个十六进制数字表示 从0x00到0xFF，后者是最大的每字节值255。

十六进制数字的简洁性和字节对齐特性使它们成为从事低级代码库或嵌入式软件工作的软件工程师的热门选择。

## JavaScript中十六进制数的使用

JavaScript支持使用十六进制表示法代替任何整数，但不支持小数。

例如，十六进制的数字2514是0x9D2，但是没有语言支持的方式将25.14表示为十六进制数。

在代码中使用十六进制是个人和风格的选择，并且对代码实现的底层逻辑没有影响。

## CSS中十六进制数的使用

CSS很长一段时间使用十六进制表示法来表示颜色值。考虑以下选择器：

```css
.my-container { 
    background-color: #112233; 
    color: #FFFFFF; 
 } 
```

`background-color`的值实际上是三个十六进制字节。

CSS处理器将这些字节视为三个单独的字节，分别代表红色，绿色和蓝色。

在我们的示例中，11对应于红色分量，22对应于绿色分量，33对应于蓝色分量。

目前没有任何方法可以使用hex来定义带有alpha分量的颜色。 建议的CSS4草案1包括允许额外字节指定alpha值的提议。

目前，使用标准的`rgba()`函数是为颜色添加alpha值的推荐方法。

#### 更多信息：

*   [维基百科上的十六进制数字系统](https://wikipedia.org/wiki/Hexadecimal_numeral_system)
*   [MDN Web文档上的CSS颜色](https://developer.mozilla.org/en-US/docs/Web/CSS/color)

#### 参考文献：

*   1 [CSS颜色模块等级4 - 4.2。 RGB十六进制表示法：#RRGGBB](https://www.w3.org/TR/css-color-4/#hex-notation)

#### 更多信息：

*   [HEX颜色代码如何工作？ （在60秒内）](https://www.youtube.com/watch?v=c56x1aj2CPA) - 好视频，它也解释了一点关于十六进制数字。
*   [十六进制代码和颜色理论](https://www.youtube.com/watch?v=xlRiLSDdqcY) - 一个更长的视频，深入研究颜色理论（例如什么是加色和什么是减色等），它还指向其他资源深入研究主题。
*   [Web颜色](https://en.wikipedia.org/wiki/Web_colors) - 维基百科关于如何在网络上使用颜色的文章。
*   [关于十六进制代码的维基百科文章](https://en.wikipedia.org/wiki/Hexadecimal)
*   [关于网页颜色的维基百科文章](https://en.wikipedia.org/wiki/Web_colors)
*   [六角颜色](http://www.color-hex.com/)
*   [十六进制颜色代码的中篇文章](https://medium.com/webkul-dev/hex-color-codes-27cd0a37c3ce)
*   [有关CSS中颜色的更多信息](https://developer.mozilla.org/en-US/docs/Web/CSS/color_value)
*   [探索不同的六角颜色](http://www.colorhexa.com/)