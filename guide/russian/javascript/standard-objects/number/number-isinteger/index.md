---
title: Number isInteger
localeTitle: Номер isInteger
---
# Номер isInteger

## Описание

Метод `Number.isInteger()` определяет, является ли переданное значение целым числом. Этот метод был введен в ES6

## Синтаксис

`Number.isInteger(val)`

### параметры

**val** - значение для проверки того, что оно является целым числом

## Возвращаемое значение

[Логическое значение](https://guide.freecodecamp.org/javascript/booleans) указывает, является ли значение целым числом или нет.

## Описание

Метод возвращает `true` если переданное значение является целым числом, иначе оно возвращает `false` . Величины Infinite и `NaN` возвращают `false` .

## Примеры
```
Number.isInteger(0);         // true 
 Number.isInteger(-0);        // true 
 Number.isInteger(1);         // true 
 Number.isInteger(2);         // true 
 Number.isInteger(-100001);   // true 
 Number.isInteger(999999999999999999999999); // true 
 
 Number.isInteger(0.1);       // false 
 Number.isInteger(0.3);       // false 
 Number.isInteger(Math.PI);   // false 
 
 Number.isInteger(NaN);       // false 
 Number.isInteger(Infinity);  // false 
 Number.isInteger(-Infinity); // false 
 Number.isInteger('10');      // false 
 Number.isInteger(true);      // false 
 Number.isInteger(false);     // false 
 Number.isInteger([1]);       // false 
```

#### Дополнительная информация:

[Документы ECMA 2015](https://www.ecma-international.org/ecma-262/6.0/#sec-number.isinteger) [Number.isInteger () MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/isInteger)