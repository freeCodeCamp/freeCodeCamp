---
title: String.prototype.split
localeTitle: String.prototype.split
---
## String.prototype.split

`split()`函数根据您作为输入传递的_分隔符字符串_将原始字符串分隔为子_字符串_ 。

`split()`函数的输出是一个字符串`Array` ，表示原始字符串中的分隔子字符串。

`split()`函数不会更改原始字符串。

例子：

```js
// We have a regular string 
 "Hello. I am a string. You can separate me." 
 
 // Let's use the split function to separate the string by the period character: 
 "Hello. I am a string. You can separate me.".split("."); 
 // output is [ "Hello", " I am a string", " You can separate me", "" ] 
```

由于我们使用句点（ `.` ）作为_分隔符字符串_ ，因此输出数组中的字符串不包含句点;输出分隔的字符串_不包括输入分隔符字符串本身_ 。

_字符串分隔符_不必是单个字符，它可以是任何其他字符串：

```js
"Hello... I am another string... keep on learning!".split("..."); 
 // output is [ "Hello", " I am another string", " keep on learning!" ] 
 
 const names = "Kratos- Atreus- Freya- Hela- Thor- Odin"; 
 // notice separator is a dash and a space 
 names.split("- "); 
 // output is [ "Kratos", "Atreus", "Freya", "Hela", "Thor", "Odin" ] 
```

#### 更多信息：

*   [MDN上的String.prototype.split](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/split)