---
title: Catch Mixed Usage of Single and Double Quotes
localeTitle: 抓住单引号和双引号的混合使用
---
## 抓住单引号和双引号的混合使用

*   请记住，您是选择使用单引号还是双引号，只需在字符前添加`\`即可使字符适合字符串而不关闭单引号或双引号。
*   测试用例只能使用双引号传递。

## 解：

```javascript
//Solution1: 
 let innerHtml = "<p>Click here to <a href=\"#Home\">return home</a></p>"; 
 console.log(innerHtml); 

```