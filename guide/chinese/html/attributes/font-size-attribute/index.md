---
title: Font Size Attribute
localeTitle: 字体大小属性
---
## 字体大小属性

此属性将字体大小指定为数字或相对值。数值范围从`1`到`7`其中`1`表示最小值， `3`表示默认值。它也可以使用相对值定义，例如`+2`或`-3` ，它相对于`<basefont>`元素的size属性的值设置它，或相对于`3` ，默认值（如果不存在）。

句法：

`<font size="number">`

例：

```html

<html> 
  <body> 
    <font size="6">This is some text!</font> 
  </body> 
 </html> 
```

注意： `The size attribute of <font> is not supported in HTML5. Use CSS instead.`