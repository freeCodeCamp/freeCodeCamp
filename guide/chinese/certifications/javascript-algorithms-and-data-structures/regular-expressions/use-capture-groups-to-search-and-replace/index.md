---
title: Use Capture Groups to Search and Replace
localeTitle: 使用捕获组进行搜索和替换
---
## 使用捕获组进行搜索和替换

使用带有第一个参数集的`.replace()`来查找要替换的原始字符串的一部分，第二个参数应该是替换。

## 提示1：

修改正则表达式，以便`fixRegex`检测要替换的字符串部分，并将变量`replaceText`修改为将替换`fixRegex`的字符串。

## 剧透警报 - 提前解决！

## 解

```javascript
let huhText = "This sandwich is good."; 
 let fixRegex = /good/; // Change this line 
 let replaceText = "okey-dokey"; // Change this line 
 let result = huhText.replace(fixRegex, replaceText); 

```