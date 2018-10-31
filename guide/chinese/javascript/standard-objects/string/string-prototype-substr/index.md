---
title: String.prototype.substr
localeTitle: String.prototype.substr
---
## String.prototype.substr

substr（）方法从指定位置的字符开始提取字符串的一部分，并返回指定数量的字符。

#### 句法

```JavaScript
  string.substr(start, length); 
```

#### 参数值

|参数|说明| | ：------------- | ：------------- | |开始| **需要。**开始提取的位置。第一个字符位于索引0处。 如果_start_为正且大于或等于字符串的长度，则substr（）返回一个空字符串。 如果_start_为负数，则substr（）将其用作字符串末尾的字符索引。 如果_start_为负或大于字符串的长度，则start设置为0 | |长度| **可选** 。要提取的字符数。如果省略，则提取字符串的其余部分

#### 例子：

```JavaScript
let str = "Hello world!"; 
 let res = str.substr(1, 4); 
```

res的结果将是：
```
ello 
```

#### 更多信息：

[JavaScript String substr（）方法](https://www.w3schools.com/jsref/jsref_substr.asp) 。