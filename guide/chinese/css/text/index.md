---
title: Text
localeTitle: 文本
---
## 文本

CSS提供了几个属性来更改文本的外观。下面解释各种文本属性。

#### 文字颜色

\`\`\`html

这是CSS文本属性的一个示例。
```
``` css 
 p { 
    color:red; 
 } 
```

在上面的示例中， `<p>`元素的文本`color`更改为红色。您还可以将颜色指定为RGB值，HLS值和十六进制代码（有关颜色的更多信息，请单击[此处](https://guide.freecodecamp.org/css/colors) ）。

#### 文字对齐

`text-align`属性用于设置文本的水平对齐方式。它可以采用`left` ， `right` ， `center`和`justify` 。 \`\`\`css p { text-align：center; }
```
Here the text is aligned to the `center` ([example](https://www.w3schools.com/css/tryit.asp?filename=trycss_text-align)).When `text-align` is set to `justify`,each line is stretched so that every line has equal width, and the left and right margins are straight ([example](https://www.w3schools.com/css/tryit.asp?filename=trycss_text-align_all)). 
 
 #### Text Decoration 
```

CSS p { 文字装饰：下划线; }
```
The `text-decoration` property is used to set or remove decorations from text. The value `text-decoration: none;` is often used to remove underlines from links. Other `text-decorations` include `overline`,`line-through`,and `underline` ([example](https://www.w3schools.com/css/tryit.asp?filename=trycss_text-decoration)). 
 
 #### Text Tranformation 
```

CSS p { text-transform：capitalize; }
```
The `text-transform` property is used to convert the entire text to `uppercase`,`lowercase` or to `capitilize` each word([example](https://www.w3schools.com/css/tryit.asp?filename=trycss_text-transform)). 
 
 #### Letter Spacing 
 
 The `letter-spacing` property sets the space between characters in a text. 
```

CSS p { 字母间距：5px; }
```
#### Line Height 
 
 The `line-height` property sets the space between two lines of text. 
```

CSS p { line-height：5px; }
```
#### Word Spacing 
 
 The `word-spacing` sets the space between words in a text. 
```

CSS p { 字间距：5px; } \`\`\`

#### 更多信息：

[W3Schools CSS文本](https://w3schools.com/css/css_text.asp)