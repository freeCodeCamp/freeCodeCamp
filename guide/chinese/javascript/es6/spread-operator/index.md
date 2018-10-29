---
title: Spread Operator
localeTitle: 传播运营商
---## 传播运营商

扩展运算符（ `...` ）允许获取集合的元素。

最常见的用途之一是`Node` Objects，当在浏览器中使用查询选择器时，为了使它们成为可迭代的数组对象：

```javascript
const paragraphs = document.querySelectorAll('p.paragraph'); 
 const arr = [...paragraphs]; 
```

扩展运算符的另一个用途是用于数组连接：

```javascript
const arr_1 = [1, 2, 3, 4] 
 const arr_2 = [5, 6, 7, 8] 
 const arr_final = [...arr_1, ...arr_2] 
 // arr_final = [1, 2, 3, 4, 5, 6, 7, 8] 

```