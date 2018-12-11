---
title: String.prototype.lastIndexOf
localeTitle: String.prototype.lastIndexOf
---
Метод `lastIndexOf()` возвращает индекс в вызывающем объекте String последнего вхождения указанного значения или -1, если не найден. Вызывающую строку искать назад, начиная `fromIndex` .

## Синтаксис
```
str.lastIndexOf(searchValue<a href='https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/lastIndexOf' target='_blank' rel='nofollow'>, fromIndex]) 
```

## параметры

**searchValue**

Строка, представляющая значение для поиска.

**fromIndex**

Необязательный. Местоположение в вызывающей строке, чтобы начать поиск, проиндексированный слева направо. Это может быть любое целое число. Значение по умолчанию - `str.length` . Если он отрицательный, он обрабатывается как 0. Если `fromIndex > str.length` , `fromIndex` рассматривается как `str.length` .

\[Ссылка MDN | [Ссылка MSDN](https://msdn.microsoft.com/en-us/LIBRary/6d20k718%28v=vs.94%29.aspx)

## Возвращает

Возвращает последнее вхождение подстроки в строке.

## Описание

Символы в строке индексируются слева направо. Индекс первого символа равен 0, а индекс последнего символа - `stringName.length - 1` .

Метод `lastIndexOf()` чувствителен к регистру. Например, следующее выражение возвращает `-1` :

## Примеры
```
'canal'.lastIndexOf('a');     // returns 3 
 'canal'.lastIndexOf('a', 2);  // returns 1 
 'canal'.lastIndexOf('a', 0);  // returns -1 
 'canal'.lastIndexOf('x');     // returns -1 
 'Blue Whale, Killer Whale'.lastIndexOf('blue'); // returns -1 
 
 var anyString = 'Brave new world'; 
 
 console.log('The index of the first w from the beginning is ' + anyString.indexOf('w')); 
 // logs 8 
 console.log('The index of the first w from the end is ' + anyString.lastIndexOf('w')); 
 // logs 10 
 console.log('The index of "new" from the beginning is ' + anyString.indexOf('new')); 
 // logs 6 
 console.log('The index of "new" from the end is ' + anyString.lastIndexOf('new')); 
 // logs 6 
 
 var str = "time, time"; 
 
 var s = ""; 
 s += "time is at position " + str.lastIndexOf("time"); 
 s += "<br />"; 
 s += "abc is at position " + str.lastIndexOf("abc"); 
 
 document.write(s); 
 
 // Output: 
 // time is at position 6 
 // abc is at position -1 

```