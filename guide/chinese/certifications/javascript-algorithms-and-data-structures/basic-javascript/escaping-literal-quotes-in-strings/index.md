---
title: Escaping Literal Quotes in Strings
localeTitle: 逃避字符串中的字面引用
---
## 逃避字符串中的字面引用

*   当你需要使用特殊字符，例如`"`在字符串内部时，你需要使用`\`来转义它。
*   如果使用双引号`"`的字符串，单引号`'`字符串中不需要进行转义。
*   如果使用单引号`'`的字符串，双引号`"`字符串中不需要进行转义。

## 解

```javascript
var myStr = "I am a \"double quoted\" string inside \"double quotes\"."; 
 var otherStr = 'I am a \'single quoted\' string inside \'single quotes\'.'; 
 var noEscapeSingle = "There is no need to 'escape' the single quotes."; 
 var noEscapeDouble = 'There is no need to "escape" the double quotes.'; 

```