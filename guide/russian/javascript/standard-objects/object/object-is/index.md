---
title: Object Is
localeTitle: Объект
---
# Объект

## Описание

Метод `object.is()` используется для определения того, являются ли два значения одинаковыми. Этот метод был введен в ES6.

## Синтаксис

`Object.is(val1, val2)`

### параметры

**val1** - первое значение для сравнения

**val2** - второе значение для сравнения

## Возвращаемое значение

[Логическое значение](https://guide.freecodecamp.org/javascript/booleans) указывает, имеют ли два аргумента одинаковое значение

## Описание

`Object.is()` сравнивает два значения для однообразия, возвращая `true` если оба значения соответствуют одному из следующих условий:

*   `undefined`
*   `null`
*   И `true` и оба `false`
*   Строка с одинаковой длиной и одинаковыми символами
*   Тот же объект
*   Оба номера и:
*   Оба `+0` или оба `-0`
*   Оба `NaN`
*   или оба числа, которые не равны нулю, а не `NaN`

## Примеры

\`\` \`

Object.is ('string', 'string'); // правда Object.is (undefined, undefined); // правда Object.is (null, null); // правда

Object.is ('string,' word '); // ложный Object.is (true, false); // ложный Object.is (\[\], \[\]); //ложный

var obj = {name: Jane}; Object.is (obj, obj); // правда

Object.is (NaN, NaN); // правда

Object.is (+0, -0); // ложный Object.is (-0, -0); // правда

\`\` \`

#### Дополнительная информация:

[Object.is () MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is) [Строгий оператор равенства `===`](https://guide.freecodecamp.org/certificates/comparison-with-the-strict-equality-operator)