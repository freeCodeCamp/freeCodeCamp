---
title: String Length
localeTitle: Длина строки
---
Свойство `length` представляет длину строки.

## Синтаксис
```
str.length 
```

[Ссылка MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/length) | [Ссылка MSDN](https://msdn.microsoft.com/en-us/LIBRary/3d616214%28v=vs.94%29.aspx)

## Описание

Это свойство возвращает количество единиц кода в строке. UTF-16, формат строки, используемый JavaScript, использует один 16-разрядный блок кода для представления наиболее распространенных символов, но для использования менее часто используемых символов необходимо использовать два блока кода, поэтому возможно, что значение, возвращаемое длиной, равно не соответствуют фактическому количеству символов в строке.

Для пустой строки длина равна 0.

Статическое свойство `String.length` возвращает значение 1.

## Примеры
```
var x = 'Mozilla'; 
 var empty = ''; 
 
 console.log('Mozilla is ' + x.length + ' code units long'); 
 /* "Mozilla is 7 code units long" */ 
 
 console.log('The empty string has a length of ' + empty.length); 
 /* "The empty string has a length of 0" */ 
 
 var str = "every good boy does fine"; 
        var start = 0; 
        var end = str.length - 1; 
        var tmp = ""; 
        var arr = new Array(end); 
 
        while (end >= 0) { 
            arr[start++] = str.charAt(end--); 
        } 
 
 // Join the elements of the array with a 
        var str2 = arr.join(''); 
        document.write(str2); 
 
 // Output: enif seod yob doog yreve 

```