---
title: Input Tag
localeTitle: 输入标签
---
## 输入

HTML输入标记可以包含在HTML文档中，如下所示：

```html

<input type="text"> 
```

这创建了一个用户可以轻松输入信息的区域。然后将该信息发送到后端数据库，并在网站或应用程序中进一步存储或使用。

带有“type ='text'”的输入将生成一个单行字段，可以输入任何信息。其他常见类型的输入包括但不限于：按钮，复选框，颜色，电子邮件和密码。

### 最常用的类型

*   `text` ：单行文本字段。
    
*   `button` ：没有默认行为的按钮。
    
*   `submit` ：提交表单的按钮。
    
*   `checkbox` ：允许选择/取消选择值的`checkbox` 。
    
*   `date` ：用于输入日期（年，月和日）。
    
*   `email` ：用于编辑电子邮件地址。
    
*   `file` ：允许用户选择文件。
    
*   `hidden` ：未显示但其值已提交给服务器。
    
*   `number` ：输入号码。
    
*   `password` ：单行文本字段，其值被遮盖。
    
*   `radio` ：一个单选按钮，允许从多个选项中选择单个值。
    
*   `range` ：输入数字的控件。
    
*   `url` ：用于输入URL。
    

例：

```html

<input type="button"> 
 <input type="checkbox"> 
 <input type="color"> 
 <input type="email"> 
 <input type="password"> 
```

输入带有许多预定属性。

一些常见的属性包括自动完成，检查和占位符。

```html

<input type="text" placeholder="This is a placeholder"> 
```

在上面的例子中，呈现了可以输入输入的区域，占位符表示“这是占位符”。单击输入行并按下某个键后，占位符将消失，并由您自己的输入替换。

```html

<input type="checkbox" checked> 
```

在这种情况下，会出现一个复选框，默认情况下会由于属性“已检查”而进行检查。

有许多不同类型的输入和相关属性都可以在下面的链接中找到。

#### 更多信息：

https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input

https://www.w3schools.com/tags/tag\_input.asp