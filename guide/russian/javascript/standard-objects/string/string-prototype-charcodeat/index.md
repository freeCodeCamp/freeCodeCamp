---
title: String.prototype.charCodeAt
localeTitle: String.prototype.charCodeAt
---
Метод `charCodeAt()` возвращает числовое значение Unicode символа в указанном индексе (за исключением кодовых точек unicode> 0x10000).

## Синтаксис
```
str.charCodeAt(index) 
```

### параметры

**индекс**

Целое число больше или равно 0 и меньше длины строки; если он не является числом, он по умолчанию равен 0.

[Ссылка MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/charCodeAt) | [Ссылка MSDN](https://msdn.microsoft.com/en-us/LIBRary/hza4d04f%28v=vs.94%29.aspx)

## Описание

Обратите внимание, что `charCodeAt()` всегда возвращает значение, которое меньше 65536. Это связано с тем, что более высокие кодовые точки представлены парой (более низкооцененными) «суррогатными» псевдосимволами, которые используются для обозначения реального символа. Из-за этого для того, чтобы исследовать или воспроизводить полный символ для отдельных символов с величиной 65536 и выше, для таких символов необходимо получить не только `charCodeAt(i)` , но также `charCodeAt(i+1)` (как бы рассматривая / воспроизведение строки с двумя буквами). См. Примеры 2 и 3 ниже.

`charCodeAt()` возвращает `NaN` если данный `index` меньше 0 или равен или больше длины строки.

## Примеры
```
'ABC'.charCodeAt(0); // returns 65 
 
 var str = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"; 
 document.write(str.charCodeAt(str.length - 1)); 
 
 // Output: 90 

```