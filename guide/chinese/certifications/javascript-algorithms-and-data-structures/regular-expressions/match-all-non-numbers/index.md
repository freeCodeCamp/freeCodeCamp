---
title: Match All Non-Numbers
localeTitle: 匹配所有非数字
---
## 匹配所有非数字

## 提示1

*   您应该尝试使用全局标志。

## 提示2

*   尝试使用非数字字符的速记字符。

# 扰流警报!!提前解决！

## 解

```javascript
let noNumRegex = /\D/g; 
```

## 说明

*   `\D`速记字符用于匹配非数字字符，它与使用`[^0-9]`具有相同的结果;