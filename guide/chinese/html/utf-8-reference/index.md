---
title: UTF 8 Reference
localeTitle: UTF 8参考
---
## UTF 8参考

UTF 8是一种编码方案，用于将我们在屏幕上看到的字符转换为计算机可以存储的数字。指定像UTF8这样的字符编码将允许浏览器正确显示高级字符，如重音字母和表情符号。

在HTML文档中，您可以通过将此元标记放在HTML页面的`head`标记中来指定页面上的字符编码： `<meta charset="UTF-8">` 。 UTF 8是标准编码。

开发[Unicode](https://www.unicode.org/)标准是为了适应世界各地语言中使用的字符。

可是等等！ Unicode与UTF 8有什么关系？ UTF 8是编码方案，但了解Unicode是字符集定义很重要。简单来说，这意味着Unicode定义了一个唯一的数字 - 称为代码点 - 用于世界各地的语言中使用的许多主要字符，UTF 8将字符翻译（也称为编码）为计算机友好的二进制格式。 1这是一个例子：

1.  你想在你的网页的某个地方提到freeCodeCamp（因为，你知道，freeCodeCamp是🔥🔥🔥）。
    
2.  Unicode中定义的拼写freeCodeCamp的字符代码是：
    
    | f | r | e | e | C | o | d | e | C |一个| m | p | | ：---：| ：---：| ：---：| ：---：| ：---：| ：---：| ：---：| ：---：| ：---：| ：---：| ：---：| ：---：| | 102 | 114 | 101 | 101 | 67 | 111 | 100 | 101 | 67 | 97 | 109 | 112 |
    
3.  UTF 8将代码点转换为二进制：1100110 1110010 1100101 1100101 1000011 1101111 1100100 1100101 1000011 1100001 1101101 1110000
    

### 如何在您的网页中使用UTF-8

在头标记中指定一个带有UTF 8字符集的元标记。

```html

<head> 
  <meta charset="utf-8"> 
 </head> 
```

#### 更多信息：

*   [Unicode字符代码图表](https://www.unicode.org/charts/index.html)
*   [HTML Unicode参考](https://www.w3schools.com/charsets/ref_html_utf8.asp)