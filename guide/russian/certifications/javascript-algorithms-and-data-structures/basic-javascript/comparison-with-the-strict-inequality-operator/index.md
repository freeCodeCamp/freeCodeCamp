---
title: Comparison with the Strict Inequality Operator
localeTitle: Сравнение с оператором строгого неравенства
---
## Сравнение с оператором строгого неравенства

### Объяснение проблемы:

· _Добавьте `strict inequality operator` `if` чтобы функция вернула «Не равно», когда `val` не строго равно `17` ._

#### Подсказка 1

Оператор строгого неравенства ( `!==` ) вернет `true` если первое значение не равно второму, учитывающему тип значения.

> _попытаться решить проблему сейчас_

## Осторожно, спойлеры!

**Решение впереди!**

## Базовое решение:

```javascript
function testStrictNotEqual(val) { 
  if (val !== 17) { 
    return "Not equal"; 
  } 
  return "Equal"; 
 } 
 
 // Change this value to test 
 testStrictNotEqual(10); 
```

### Обозначение кода

Функция сначала оценивает, `if` условие `(val !== 17)` оценивается как `true` учитывая как значение, так и тип значения. Если это так, оно возвращает выражение между фигурными фигурными скобками («Не равно»). Если это не так, он возвращает следующий оператор `return` вне их («Равно»).

### Ресурсы

*   [«Нетождественное / строгое неравенство (! ==)» - _ссылка MDN JavaScript_](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Comparison_Operators#Non-identity_strict_inequality_(!))