---
title: Number isFinite
localeTitle: Номер isFinite
---
# Номер isFinite

## Описание

Метод `Number.isFinite()` проверяет, является ли переданное в нем значение конечным числом. Этот метод был введен в ES6

## Синтаксис

`Number.isFinite(val)`

### параметры

**val** - значение для проверки на конечность

## Возвращаемое значение

[Логическое значение](https://guide.freecodecamp.org/javascript/booleans) указывает, является ли значение конечным числом или нет.

## Описание

`Number.isFinite` отличается от глобального [метода isFinite ()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/isFinite) , он не преобразовывает тестируемое значение в число. Это означает, что значение должно быть числом и конечным, чтобы вернуть true.

## Примеры
```
Number.isFinite(Infinity)     // false 
 Number.isFinite(-Infinity)    // false 
 
 Number.isFinite(1234)         // true 
 Number.isFinite(-1.11)        // true 
 Number.isFinite(0)            // true 
 Number.isFinite(3g55)         // true 
 
 Number.isFinite('1234')       // false 
 Number.isFinite('Hi')         // false 
 Number.isFinite('2005/12/12') // false 
 
 Number.isFinite('0');         // false, would've been true with 
                              // global isFinite('0') 
 
 Number.isFinite(null);        // false, would've been true with 
                              // global isFinite(null) 
```

#### Дополнительная информация:

[Документы ECMA 2015](https://www.ecma-international.org/ecma-262/6.0/#sec-number.isfinite) [Number.isFinite () MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/isFinite)