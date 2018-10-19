---
title: Comparison with the Equality Operator
localeTitle: Сравнение с оператором равенства
---
## Сравнение с оператором равенства

### Объяснение проблемы:

_Добавьте оператор равенства в указанную строку, чтобы функция вернула «Равно», когда `val` эквивалентно 12._

#### Подсказка 1

Помните, что _равенство отличается от присваивания ( `=` ), которое присваивает значение справа от оператора переменной в левой части._ [1](#cite1)

> _попытаться решить проблему сейчас_

## Осторожно, спойлеры!

**Решение впереди!**

## Базовое решение:

```javascript
function testEqual(val) { 
  if (val == 12) { // Change this line 
    return "Equal"; 
  } 
  return "Not equal"; 
 } 
 // Change this value to test 
 testEqual(10); 
```

· [Запустить код в repl.it](https://repl.it/@AdrianSkar/Basic-JS-Equality-operator)

### Обозначение кода

Сначала функция оценивает, является `if` условие `(val == 12)` равным `true` . Если это так, оно возвращает выражение между фигурными фигурными скобками («Равно»). Если это не так, оно возвращает следующий оператор `return` вне их («Не равно»).

### источники

1 . [«Базовый JavaScript: сравнение с оператором равенства», урок fCC в _Javascript Algorithms and Data Structures Certification_](https://learn.freecodecamp.org/javascript-algorithms-and-data-structures/basic-javascript/comparison-with-the-equality-operator)

### Ресурсы

*   [«Оператор равенства» - _ссылка MDN JavaScript_](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Comparison_Operators#Equality_())