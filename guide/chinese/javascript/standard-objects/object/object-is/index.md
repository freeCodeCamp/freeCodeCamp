---
title: Object Is
localeTitle: 对象是
---
# 对象是

## 描述

`object.is()`方法用于确定两个值是否相同。这种方法是在ES6中引入的。

## 句法

`Object.is(val1, val2)`

### 参数

**val1** - 要比较的第一个值

**val2** - 要比较的第二个值

## 返回值

一个[布尔值，](https://guide.freecodecamp.org/javascript/booleans)指示两个参数是否具有相同的值

## 描述

`Object.is()`比较两个相同的值，如果两个值满足以下条件之一，则返回`true` ：

*   `undefined`
*   `null`
*   无论是`true`还是`false`
*   具有相同长度和相同字符的字符串
*   相同的对象
*   这两个数字和：
*   `+0`或两者都是`-0`
*   两个`NaN`
*   或两者都不是零而不是`NaN`

## 例子

\`\`\`

Object.is（'string'，'string'）; //真的 Object.is（undefined，undefined）; //真的 Object.is（null，null）; //真的

Object.is（'string，'word'）; //假 Object.is（true，false）; //假 Object.is（\[\]，\[\]）; //假

var obj = {name：Jane}; Object.is（obj，obj）; //真的

Object.is（NaN，NaN）; //真的

Object.is（+ 0，-0）; //假 Object.is（-0，-0）; //真的

\`\`\`

#### 更多信息：

[Object.is（）MDN Web文档](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is) [严格的相等运算符`===`](https://guide.freecodecamp.org/certificates/comparison-with-the-strict-equality-operator)