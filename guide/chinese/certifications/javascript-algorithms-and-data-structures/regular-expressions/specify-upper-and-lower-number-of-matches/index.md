---
title: Specify Upper and Lower Number of Matches
localeTitle: 指定上下匹配数
---
## 指定上下匹配数

记住`/a{2,4}/`返回`true` ，只要有间两到四个A的一起。对于任何超过四个a的字符串，它将返回`true` 。

所有这些字符串都将返回`true` ：

```javascript
let threeAs = "aaa"; 
 let fourAs = "aaaa"; 
 let sevenAs = "aaaaaaa"; 
 
 let myRegex = /a{2,4}/; 
 myRegex.test(threeAs) ; // true 
 myRegex.test(fourAs) ; // true 
 myRegex.test(sevenAs) ; // true 
```

## Spolier Alert！

请记住在`Oh{3,6}`之后使用`\s`来包含空格，然后使用`no`来通过所有测试用例。所有测试用例都是使用大写字母O编写的，但是也可以使用`ignore-case`传递测试用例： `/oh{3,6}\sno/i`

## 解：

```javascript
let ohStr = "Ohhh no"; 
 let ohRegex = /Oh{3,6}\sno/; // Change this line 
 let result = ohRegex.test(ohStr); 

```