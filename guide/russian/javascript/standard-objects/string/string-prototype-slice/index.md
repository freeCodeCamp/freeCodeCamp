---
title: String.prototype.slice
localeTitle: String.prototype.slice
---
Строковый метод JavaScript `.slice()` извлекает часть строки и возвращает новую строку.

## Синтаксис
```
str.slice(beginSliceIndex [, endSliceIndex]); 
```

## параметры

**beginSliceIndex**

Индекс, основанный на нуле, где должен начинаться срез. Если beginSliceIndex является отрицательным числом, `.slice()` отсчитывает назад от конца строки, чтобы определить, где начать срез.

**endSliceIndex**

Необязательный. Индекс, основанный на нуле, где должен заканчиваться срез. Если опущено, `.slice()` извлекает в конец строки.

[Ссылка MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/slice)

## Описание

`.slice()` текст из одной строки и возвращает новую строку.

## Примеры

**Использование `.slice()` для создания новой строки**
```
var string1 = "Hello World!"; 
 var string2 = string1.slice(3); 
 console.log(string2);                           // Will log "lo World!" 
 
 var string3 = string1.slice(3, 7); 
 console.log(string3);                           // Will log "lo W" 
```

**Использование `.slice()` с отрицательными индексами**
```
var string = "Hello World!" 
 str.slice(-3);                                  // Returns "ld!" 
 str.slice(-3, -1);                              // Returns "ld" 
 str.slice(0, -1);                               // Returns "Hello World" 

```