---
title: Use Bracket Notation to Find the Nth-to-Last Character in a String
localeTitle: 使用括号表示法查找字符串中的第N个到最后一个字符
---
## 使用括号表示法查找字符串中的第N个到最后一个字符

请记住，任何字符的位置，是**字符串**的**长度减去1，减去后面的字符数** 。例如，如果您要查找以下字符串的倒数第三个字符：
```
var str = "Programming"; 
 var secondToLastChar = str[str.length - 2]; // This is 'i' 
```

如你所见，'n'之后还有一个额外的字符（即'g'）。