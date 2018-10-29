---
title: Array.prototype.toString
localeTitle: Array.prototype.toString
---
Метод массива JavaScript `.toString()` используется для преобразования массива в одну строку, причем каждый элемент соединен запятой. Для этого метода нет параметров.

**Синтаксис**

```javascript
  var arr = [1, 2, 3, 4]; 
  arr.toString(); 
```

## использование

```javascript
  var str1 = [1, 2, 3, 4, 5].toString();  // str1 = '1,2,3,4,5'; 
  var str2 = ['1', '2', '3', '4'].toString();  // str2 = '1,2,3,4'; 
  var str3 = ['Free', 'Code', 'Camp'].toString();  // str3 = 'Free,Code,Camp'; 
  var str4 = ['phone', '555-6726'].toString();   // str4 = 'phone,555-6726'; 
  var str5 = ['August', 'September', 'October'].toString();  // str5 = 'August,September,October'; 
  var str6 = ['Words', 'and', 3, 4].toString();  // str6 = 'Words,and,3,4'; 
```

Источник: [MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/toString)