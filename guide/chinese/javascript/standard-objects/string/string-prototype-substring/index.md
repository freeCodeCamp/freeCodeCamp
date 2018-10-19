---
title: String.prototype.substring
localeTitle: String.prototype.substring
---
## String.prototype.substring

`substring()`函数从另一个给定的字符串中_提取_一系列字符。它不会改变原始字符串。

您可以使用_开始和结束字符索引_定义要提取的序列。这些索引作为参数传递给`substring()`函数。子字符串由起始索引的字符一直到结束索引的字符形成。两个索引都从字符串的开头开始计算，从`0`开始计算。

例子：

```js
"Hello, campers".substring(7, 14); 
 // output is "campers" 
 
 "Hello, world".substring(0, 5); 
 // output is "Hello" 
```

您还可以省略最后一个字符索引参数，子字符串序列将从开始索引中提取，直到字符串结束。例：

```js
"Hello, campers!".substring(7); 
 // output is "campers!" 
```

#### 更多信息：

*   [MDN上的String.prototype.substring（）](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/substring)