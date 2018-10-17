---
title: Find Characters with Lazy Matching
localeTitle: 查找具有延迟匹配的字符
---
## 查找具有延迟匹配的字符

#### Challange：

修复regex `/<.*>/`以返回HTML标记`<h1>`而不是文本`<h1>Winter is coming</h1>` 。记住通配符。在正则表达式中匹配任何字符。

#### 解：

```js
let text = "<h1>Winter is coming</h1>"; 
 let myRegex = /<h1>?/; // it's the answer! 
 let result = text.match(myRegex); 

```