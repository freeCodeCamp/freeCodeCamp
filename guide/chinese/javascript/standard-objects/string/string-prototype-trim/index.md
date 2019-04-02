---
title: String.prototype.trim
localeTitle: String.prototype.trim
---
## String.prototype.trim

`trim()`函数从给定字符串的开头和结尾删除任何空格字符。它不会修改原始字符串;它输出一个新的。

例子：

```js
"  Hello, campers. I have spaces on both ends!  ".trim(); 
 // output is "Hello, campers. I have spaces on both ends!" 
```

`trim()`不仅删除空格字符;它会删除任何空白字符，例如制表符，换行符，不间断空格等。

这很有用，例如，当您想要处理来自用户的文本输入时，他们可能已经提交了一个字符串，其中包含您可能不想要的末尾空格。

#### 更多信息：

*   [MDN上的String.prototype.trim（）](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/Trim)