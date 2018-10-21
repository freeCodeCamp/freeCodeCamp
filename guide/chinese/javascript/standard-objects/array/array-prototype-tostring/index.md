---
title: Array.prototype.toString
localeTitle: Array.prototype.toString
---
JavaScript数组方法`.toString()`用于将数组转换为单个字符串，每个元素用逗号连接。该方法没有参数。

**句法**

```javascript
  var arr = [1, 2, 3, 4]; 
  arr.toString(); 
```

## 用法

```javascript
  var str1 = [1, 2, 3, 4, 5].toString();  // str1 = '1,2,3,4,5'; 
  var str2 = ['1', '2', '3', '4'].toString();  // str2 = '1,2,3,4'; 
  var str3 = ['Free', 'Code', 'Camp'].toString();  // str3 = 'Free,Code,Camp'; 
  var str4 = ['phone', '555-6726'].toString();   // str4 = 'phone,555-6726'; 
  var str5 = ['August', 'September', 'October'].toString();  // str5 = 'August,September,October'; 
  var str6 = ['Words', 'and', 3, 4].toString();  // str6 = 'Words,and,3,4'; 
```

资料来源： [MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/toString)