---
title: Match Characters that Occur One or More Times
localeTitle: 匹配出现一次或多次的字符
---
## 匹配出现一次或多次的字符

＃＃ 问题： 您希望在“密西西比”中字母s出现一次或多次时找到匹配项。写一个使用+符号的正则表达式。 ＃＃ 解决方案

let difficultSpelling =“Mississippi”; 让myRegex = / s + / g; //这是解决方案 let result = difficultSpelling.match（myRegex）;