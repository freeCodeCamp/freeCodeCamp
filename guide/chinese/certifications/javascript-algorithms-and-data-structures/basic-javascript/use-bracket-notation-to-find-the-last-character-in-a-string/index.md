---
title: Use Bracket Notation to Find the Last Character in a String
localeTitle: 使用括号表示法查找字符串中的最后一个字符
---
## 使用括号表示法查找字符串中的最后一个字符

请考虑以下字符串：
```
var str = "Coding"; 
```

这个字符串的长度为6个字符，所以如果你在字符串上使用.length，它会给你6.但请记住第一个字符位于第零个位置。第二个角色位于第一个位置。第三个角色位于第二个位置。

继续前进，你最终得到第六个字符（基于上面的字符串，是'g'）位于第五个位置。这就是你获得字符串的最后一个字符的原因：
```
var lastChar = str[str.length - 1]; // This is 6 - 1, which is 5 
```

这将是'g'。