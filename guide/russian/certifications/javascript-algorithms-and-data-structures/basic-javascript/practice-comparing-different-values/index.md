---
title: Practice comparing different values
localeTitle: Практика сравнения разных значений
---
## Практика сравнения разных значений

### Объяснение проблемы:

· _Измените функцию так, чтобы она возвращала «Равно» только тогда, когда значения **строго** равны._

#### Подсказка 1

Помните из последних упражнений, которые в _отличие от оператора равенства, который пытается преобразовать оба значения, сравниваемых с общим типом, оператор строгого равенства не выполняет преобразование типа._ [1](#cite1)

> _попытаться решить проблему сейчас_

## Осторожно, спойлеры!

**Решение впереди!**

## Базовое решение:

```javascript
// Setup 
 function compareEquality(a, b) { 
    if (a === b) { // Change this line 
        return  "Equal"; 
    } 
    return  "Not Equal"; 
 } 
 
 // Change this value to test 
 compareEquality(10, "10"); 
```

### Обозначение кода

Функция сначала оценивает, соответствует `if` условие `(a === b)` `true` учитывая как тип, так и значение. Если это так, оно возвращает выражение между фигурными фигурными скобками («Равно»). Если это не так, оно возвращает следующий оператор `return` вне их («Не равно»).

### источники

1 . [«Базовый JavaScript: сравнение с оператором строгого равенства», урок fCC в _Javascript Algorithms and Data Structures Certification_](https://learn.freecodecamp.org/javascript-algorithms-and-data-structures/basic-javascript/comparison-with-the-strict-equality-operator)

### Ресурсы

*   [«Использование операторов равенства» - _ссылка MDN JavaScript_](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Comparison_Operators#Using_the_Equality_Operators)