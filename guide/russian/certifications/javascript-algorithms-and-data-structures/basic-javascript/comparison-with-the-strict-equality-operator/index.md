---
title: Comparison with the strict equality operator
localeTitle: Сравнение со строгим оператором равенства
---
## Сравнение со строгим оператором равенства

### Объяснение проблемы:

· _Используйте оператор строгого равенства в выражении `if` чтобы функция вернула «Равно», когда `val` строго равно `7` ._

#### Подсказка 1

Помните из последнего упражнения, что _равенство отличается от присваивания ( `=` ), которое присваивает значение справа от оператора переменной в левой части._ [1](#cite1)

> _попытаться решить проблему сейчас_
> 
> #### Подсказка 2
> 
> _В отличие от оператора равенства, который пытается преобразовать оба значения в общий тип, строгий оператор равенства не выполняет преобразование типа._ [2](#cite2) _попытаться решить проблему сейчас_

## Осторожно, спойлеры!

**Решение впереди!**

## Базовое решение:

```javascript
// Setup 
 function testStrict(val) { 
  if (val === 7) { // Change this line 
    return "Equal"; 
  } 
  return "Not equal"; 
 } 
 
 // Change this value to test 
 testStrict(10); 
```

### Обозначение кода

Функция сначала оценивает, соответствует `if` условие `(val === 7)` `true` . Если это так, оно возвращает выражение между фигурными фигурными скобками («Равно»). Если это не так, оно возвращает следующий оператор `return` вне их («Не равно»).

### источники

1 . [«Базовый JavaScript: сравнение с оператором равенства», урок fCC в _Javascript Algorithms and Data Structures Certification_](https://learn.freecodecamp.org/javascript-algorithms-and-data-structures/basic-javascript/comparison-with-the-equality-operator)

2 . [«Базовый JavaScript: сравнение с оператором строгого равенства», урок fCC в _Javascript Algorithms and Data Structures Certification_](https://learn.freecodecamp.org/javascript-algorithms-and-data-structures/basic-javascript/comparison-with-the-strict-equality-operator)

### Ресурсы

*   ["if ... else" - _ссылка MDN JavaScript_](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/if…else)
    
*   [Кондов, Александр. «Понимание JS: Принуждение». _Хакернун_](https://hackernoon.com/understanding-js-coercion-ff5684475bfc) , [_доступный_](https://hackernoon.com/understanding-js-coercion-ff5684475bfc) 15 сентября 2018 года
    
*   [«Операторы сравнения» - _ссылка на MDN JavaScript_](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Comparison_Operators)