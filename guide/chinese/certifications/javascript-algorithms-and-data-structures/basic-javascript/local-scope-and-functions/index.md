---
title: Local Scope and Functions
localeTitle: 本地范围和功能
---
## 本地范围和功能

局部范围意味着变量在某个区域内可用。在本练习中， `myVar`仅在函数内可用，而不在外部。

以下是创建本地`myVar`变量的基本代码解决方案。

```javascript
function myLocalScope() { 
  var myVar; 
  console.log(myVar); 
 } 
 myLocalScope(); 
```

该变量仅存在于函数中。在函数之外，它是不存在的。