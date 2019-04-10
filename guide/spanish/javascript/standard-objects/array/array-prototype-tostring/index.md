---
title: Array.prototype.toString
localeTitle: Array.prototype.toString
---
El método de matriz de JavaScript `.toString()` se utiliza para convertir una matriz en una sola cadena, con cada elemento unido por una coma. No hay parámetros para el método.

**Sintaxis**

```javascript
  var arr = [1, 2, 3, 4]; 
  arr.toString(); 
```

## Uso

```javascript
  var str1 = [1, 2, 3, 4, 5].toString();  // str1 = '1,2,3,4,5'; 
  var str2 = ['1', '2', '3', '4'].toString();  // str2 = '1,2,3,4'; 
  var str3 = ['Free', 'Code', 'Camp'].toString();  // str3 = 'Free,Code,Camp'; 
  var str4 = ['phone', '555-6726'].toString();   // str4 = 'phone,555-6726'; 
  var str5 = ['August', 'September', 'October'].toString();  // str5 = 'August,September,October'; 
  var str6 = ['Words', 'and', 3, 4].toString();  // str6 = 'Words,and,3,4'; 
```

Fuente: [MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/toString)