---
title: Capitalize the First Letter of a String
localeTitle: Использовать первое письмо строки
---
Чтобы загладить первую букву случайной строки, вы должны выполнить следующие шаги:

1.  Получить первую букву строки;
2.  Преобразовать первую букву в верхний регистр;
3.  Получить оставшуюся часть строки;
4.  Сконцентрируйте первую букву, заглавную с остальной частью строки, и верните результат;

## 1\. Получите первое письмо строки

Вы должны использовать метод [charAt ()](http://forum.freecodecamp.com/t/javascript-string-prototype-charat/15932) в _индексе 0_ , чтобы выбрать первый символ строки.

```javascript
var string = "freeCodecamp"; 
 
 string.charAt(0); // Returns "f" 
```

> ПРИМЕЧАНИЕ: `charAt` предпочтительнее, чем использование `[ ]` ( [обозначение скобки](http://forum.freecodecamp.com/t/javascript-string-prototype-touppercase/15950) ) как `str.charAt(0)` возвращает пустую строку ( _`''`_ ) для `str = ''` вместо `undefined` в случае `''[0]` .

## 2\. Преобразовать первое письмо в верхний регистр.

Вы можете использовать метод [toUpperCase ()](http://forum.freecodecamp.com/t/javascript-string-prototype-touppercase/15950) и преобразовать вызывающую строку в верхний регистр.

```javascript
var string = "freeCodecamp"; 
 
 string.charAt(0).toUpperCase(); // Returns "F" 
```

## 3\. Получите оставшуюся часть строки

Вы можете использовать метод [slice ()](https://github.com/freecodecamp/freecodecamp/wiki/js-array-prototype-slice) и получить остаток от строки (от второго символа, _индекс 1_ , до конца строки).

```javascript
var string = "freeCodecamp"; 
 
 string.slice(1); // Returns "reeCodecamp" 
```

## 4\. Верните результат, добавив первую букву и оставшуюся часть строки

Вы должны создать функцию, которая принимает строку как только аргумент и возвращает конкатенацию первой буквы capitalized `string.charAt(0).toUpperCase()` и остаток строки `string.slice(1)` .

```javascript
var string = "freeCodecamp"; 
 
 function capitalizeFirstLetter(str) { 
  return str.charAt(0).toUpperCase() + str.slice(1); 
 } 
 
 capitalizeFirstLetter(string); // Returns "FreeCodecamp" 
```

Или вы можете добавить эту функцию в `String.prototype` для использования ее непосредственно в строке, используя следующий код ( _так что метод не перечислим, но могут быть перезаписаны или удалены позже_ ):

```javascript
var string = "freeCodecamp"; 
 
 /* this is how methods are defined in prototype of any built-in Object */ 
 Object.defineProperty(String.prototype, 'capitalizeFirstLetter', { 
    value: function () { 
        return this.charAt(0).toUpperCase() + this.slice(1); 
    }, 
    writable: true, // so that one can overwrite it later 
    configurable: true // so that it can be deleted later 
 }); 
 
 string.capitalizeFirstLetter(); // Returns "FreeCodecamp" 
```

### Источник

[stackoverflow - использовать первую букву строки в JavaScript](http://stackoverflow.com/questions/1026069/capitalize-the-first-letter-of-string-in-javascript/1026087#1026087)