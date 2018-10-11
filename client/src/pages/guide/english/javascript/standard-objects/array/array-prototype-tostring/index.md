---
title: Array.prototype.toString
---
The JavaScript array method `.toString()` is used to convert an array into a single string, with each element joined by a comma. There are no parameters for the method.

**Syntax**
```javascript
  var arr = [1, 2, 3, 4];
  arr.toString();
```

## Usage
```javascript
  var str1 = [1, 2, 3, 4, 5].toString();  // str1 = '1,2,3,4,5';
  var str2 = ['1', '2', '3', '4'].toString();  // str2 = '1,2,3,4';
  var str3 = ['Free', 'Code', 'Camp'].toString();  // str3 = 'Free,Code,Camp';
  var str4 = ['phone', '555-6726'].toString();   // str4 = 'phone,555-6726';
  var str5 = ['August', 'September', 'October'].toString();  // str5 = 'August,September,October';
  var str6 = ['Words', 'and', 3, 4].toString();  // str6 = 'Words,and,3,4';
```
Source : <a href='https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/toString' target='_blank' rel='nofollow'>MDN</a>
