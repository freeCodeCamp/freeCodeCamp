---
title: Boolean
localeTitle: 布尔
---
## 布尔

Boolean对象是布尔值（true或false）的对象包装器。您可以将布尔值显式定义为`new Boolean([value])` 。可选的`value`参数将转换为布尔值。如果未指定value， `0` ， `-0` ， `null` ， `false` ， `NaN` ， `undefined`或空字符串（ `""` ），则将对象设置为false。所有其他值（包括任何对象或字符串“false”）都会创建值为true的对象。一个有趣的例外是当DOM的`document.all`作为参数传递给`Boolean`构造函数时，它被评估为`false` 1 。

布尔基元值（ `true`和`false` ）与`Boolean`对象值（ `true`和`false` ）不同。

#### 更多信息：

[JavaScript中布尔对象与布尔基元的区别 - 一滴JavaScript](http://adripofjavascript.com/blog/drips/the-difference-between-boolean-objects-and-boolean-primitives-in-javascript.html)

### 来源

1.  [你不知道JavaScript，第4章，第](https://github.com/getify/You-Dont-Know-JS/blob/master/types%20&%20grammar/ch4.md) 364行。 2017年10月31日访问。