---
title: Converting Strings to Numbers
localeTitle: 将字符串转换为数字
---
## 将字符串转换为数字

`parseInt()`函数解析字符串参数并返回指定基数的整数（数学系统中的基数）。

```js
    parseInt(string, radix); 
```

### 参数
```
string 
```

要解析的值。如果`string`参数不是字符串，则将其转换为字符串（使用`ToString`抽象操作）。字符串参数中的前导空格被忽略。'= 基数 2到36之间的整数，表示上述字符串的基数（数学数字系统中的基数）。为人类常用的十进制数字系统指定`10` 。始终指定此参数以消除读者混淆并保证可预测的行为。当未指定基数时，不同的实现会产生不同的结果，通常将值默认为10。 返回值 从给定字符串解析的整数。如果第一个字符无法转换为数字，则返回`NaN` 。

### 描述

`parseInt`函数将其第一个参数转换为字符串，对其进行解析，并返回一个整数或`NaN` 。如果不是`NaN` ，则返回的值将是作为指定基数（基数）中的数字的第一个参数的整数。例如，10的基数表示从十进制数，8八进制，16十六进制等转换。对于大于`10`的基数，字母表中的字母表示大于9的数字。例如，对于十六进制数字（基数16），使用`A`到`F`

如果`parseInt`遇到的字符不是指定基数中的数字，它会忽略它和所有后续字符，并返回解析到该点的整数值。 `parseInt`将数字截断为整数值。允许前导和尾随空格。

由于某些数字在其字符串表示中包含`e`字符（例如`6.022e23` ），因此使用`parseInt`截断数值会在非常大或非常小的数字上使用时产生意外结果。 `parseInt`不应该用作`Math.floor()`的替代品。

如果radix `undefined`或0（或不存在），则JavaScript假定以下内容：

*   如果输入`string`以“0x”或“0X”开头，则基数为16（十六进制），并解析字符串的其余部分。
*   如果输入`string`以“0”开头，则基数为八（八进制）或10（十进制）。究竟选择哪个基数是依赖于实现的。 ECMAScript 5指定使用10（十进制），但并非所有浏览器都支持此功能。因此，在使用parseInt时始终指定基数。
*   如果输入`string`以任何其他值开头，则基数为10（十进制）。
*   如果第一个字符无法转换为数字，则parseInt返回NaN。

出于算术目的，NaN值不是任何基数中的数字。您可以调用isNaN函数来确定parseInt的结果是否为NaN。如果将NaN传递给算术运算，则运算结果也将是NaN。

要将数字转换为特定基数中的字符串文字，请使用intValue.toString（radix）。

### 例子

使用`parseInt` 以下示例均返回`15` ：

```js
    parseInt(' 0xF', 16); 
    parseInt(' F', 16); 
    parseInt('17', 8); 
    parseInt(021, 8); 
    parseInt('015', 10);   // parseInt(015, 10); will return 15 
    parseInt(15.99, 10); 
    parseInt('15,123', 10); 
    parseInt('FXX123', 16); 
    parseInt('1111', 2); 
    parseInt('15 * 3', 10); 
    parseInt('15e2', 10); 
    parseInt('15px', 10); 
    parseInt('12', 13); 
```

以下示例均返回`NaN` ：

```js
    parseInt('Hello', 8); // Not a number at all 
    parseInt('546', 2);   // Digits are not valid for binary representations 
```

以下示例都返回`-15` ：

```js
    parseInt('-F', 16); 
    parseInt('-0F', 16); 
    parseInt('-0XF', 16); 
    parseInt(-15.1, 10) 
    parseInt(' -17', 8); 
    parseInt(' -15', 10); 
    parseInt('-1111', 2); 
    parseInt('-15e1', 10); 
    parseInt('-12', 13); 
```

以下示例均返回`4` ：

```js
    parseInt(4.7, 10); 
    parseInt(4.7 * 1e22, 10); // Very large number becomes 4 
    parseInt(0.00000000000434, 10); // Very small number becomes 4 
```

以下示例返回`224` ：

```js
    parseInt('0e0', 16); 
```

#### 更多信息：

[MDN上的parseInt](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Comparison_Operators)

*   [parseInt（）](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/parseInt)和[parseFloat（）](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/parseFloat)尝试将字符串转换为数字（如果可能）。例如， `var x = parseInt("100"); // x = 100`
*   [Number（）](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/number)将转换为值可以表示的数字。这包括自UTC时间1970年1月1日午夜以来的毫秒数，布尔值为1或0的日期，以及无法转换为可识别数字的值将变为NaN。这代表Not a Number，在技术上也是一个数字！