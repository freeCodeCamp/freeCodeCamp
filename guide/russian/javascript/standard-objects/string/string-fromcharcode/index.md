---
title: String fromCharCode
localeTitle: Строка изCharCode
---
Статический `String.fromCharCode()` возвращает строку, созданную с использованием указанной последовательности значений Unicode.

## Синтаксис
```
String.fromCharCode(num1[, ...[, numN]]) 
```

### параметры

**num1, ..., numN**

Последовательность чисел, которые являются значениями Unicode.

[Ссылка MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/fromCharCode) | [Ссылка MSDN](https://msdn.microsoft.com/en-us/LIBRary/wb4w0k66%28v=vs.94%29.aspx)

## Описание

Этот метод возвращает строку, а не объект String.

Поскольку `fromCharCode()` является статическим методом String, вы всегда используете его как `String.fromCharCode()` , а не как метод созданного объекта String.

## Примеры
```
String.fromCharCode(65, 66, 67);  // "ABC" 
 
 var test = String.fromCharCode(112, 108, 97, 105, 110); 
 document.write(test); 
 
 // Output: plain 

```