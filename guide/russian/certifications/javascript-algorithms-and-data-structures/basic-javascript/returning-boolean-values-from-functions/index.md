---
title: Returning Boolean Values from Functions
localeTitle: Возврат булевых значений из функций
---
## Возврат булевых значений из функций

Вместо использования блока if / else для сравнения переменной мы можем сделать это прямо внутри оператора return с помощью оператора сравнения и кода minmal.

### Объяснение проблемы

_Исправить функцию `isLess` чтобы удалить инструкции `if...else` ._

```js
// Fix this code 
  if (a < b) { 
    return true; 
  } else { 
    return false; 
  } 
```

#### Подсказка 1

Как и в [предыдущем упражнении,](https://learn.freecodecamp.org/javascript-algorithms-and-data-structures/basic-javascript/replacing-if-else-chains-with-switch) вы собираетесь изменить, как функция возвращает правильное значение, то есть вам не нужно повторно использовать или модифицировать этот код, а заменять его.

> _попытаться решить проблему сейчас_

#### Подсказка 2

Для того , чтобы вернуть `true` или `false` вам не нужно два заявления и не использовать , `if` из них. Правильный [оператор сравнения](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Comparison_Operators) - это все, что вам нужно.

> _попытаться решить проблему сейчас_

## Осторожно, спойлеры!

**Решение впереди!**

## Код решения:

```javascript
function isLess(a, b) { 
  // Fix this code 
  return a <= b; 
 } 
 // Change these values to test 
 isLess(10, 15); 
```

Выполнить код на [repl.it.](https://repl.it/@AdrianSkar/Basic-Js-Returning-boolean-from-function)

### Ресурсы

*   [«Меньше или равный оператор (<=)» - _MDN Справочник по JavaScript_](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Comparison_Operators#Less_than_or_equal_operator_(%3C))