---
title: String.prototype.charAt
localeTitle: String.prototype.charAt
---
Метод `charAt()` возвращает указанный символ из строки.

## Синтаксис
```
str.charAt(index) 
```

## параметры

**индекс**

Целое число от 0 до 1 меньше, чем длина строки.

[Ссылка MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/charAt) | [Ссылка MSDN](https://msdn.microsoft.com/en-us/LIBRary/65zt5h10%28v=vs.94%29.aspx)

## Описание

Символы в строке индексируются слева направо. Индекс первого символа равен 0, а индекс последнего символа в строке с именем `stringName` - `stringName.length - 1` . Если индекс, который вы поставляете, находится вне допустимого диапазона, JavaScript возвращает пустую строку.

## Примеры
```
var anyString = 'Brave new world'; 
 
 console.log("The character at index 0   is '" + anyString.charAt(0)   + "'"); // 'B' 
 console.log("The character at index 1   is '" + anyString.charAt(1)   + "'"); // 'r' 
 console.log("The character at index 2   is '" + anyString.charAt(2)   + "'"); // 'a' 
 console.log("The character at index 3   is '" + anyString.charAt(3)   + "'"); // 'v' 
 console.log("The character at index 4   is '" + anyString.charAt(4)   + "'"); // 'e' 
 console.log("The character at index 999 is '" + anyString.charAt(999) + "'"); // '' 
 
 var str = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"; 
 document.write(str.charAt(str.length - 1)); 
 
 // Output: Z 

```