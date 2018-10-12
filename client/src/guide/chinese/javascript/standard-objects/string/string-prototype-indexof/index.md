---
title: String.prototype.indexOf
localeTitle: String.prototype.indexOf
---
## String.prototype.indexOf

`indexOf()`方法返回可在数组中找到给定元素的第一个索引。如果该元素不存在，则返回-1。

**句法**

```javascript
str.indexOf(searchValue[, fromIndex]) 
```

### 参数

*   您正在查找的**searchValue**子字符串。如果这是空的（ `''` ）并且没有`fromIndex`参数，则返回0。
    
*   **fromIndex**可选。要开始搜索的索引。如果`fromIndex`值大于或等于字符串的长度，则不搜索该字符串，并且该方法返回-1。如果`searchValue`是一个空字符串（ `''` ）并且`fromIndex`小于字符串的长度，它将返回`fromIndex` ;否则，它将返回字符串的长度。 （负数将被视为没有参数。）
    

### 描述

`indexOf()`方法从左到右检查字符串。第一个字符的索引是0;最后一个字符的索引是`string.length - 1` 。该方法使用严格相等（ `===` ）针对`searchValue`检查每个子字符串，这意味着此方法区分大小写。一旦找到返回`true`的子字符串，它就会返回其第一个字符的索引。

### 例子

```javascript
'Blue Whale'.indexOf('Blue');     // returns  0 
 'Blue Whale'.indexOf('Blute');    // returns -1 
 'Blue Whale'.indexOf('Whale', 0); // returns  5 
 'Blue Whale'.indexOf('Whale', 5); // returns  5 
 'Blue Whale'.indexOf('Whale', 7); // returns -1 
 'Blue Whale'.indexOf('');         // returns  0 
 'Blue Whale'.indexOf('', 9);      // returns  9 
 'Blue Whale'.indexOf('', 10);     // returns 10 
 'Blue Whale'.indexOf('', 11);     // returns 10 
 'Blue Whale'.indexOf('blue');     // returns -1 
```

### 更多信息：

*   MDN文档： [MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/indexOf)
*   MSDN文档： [MSDN](https://docs.microsoft.com/en-us/scripting/javascript/reference/indexof-method-string-javascript)