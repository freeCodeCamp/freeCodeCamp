---
title: Comparisons with the && (logical AND) operator
localeTitle: Сравнение с оператором && (логический AND)
---
## Сравнение с оператором && (логический AND)

### Объяснение проблемы:

· _Объедините два оператора if в один оператор, который вернет `"Yes"` если значение `val` меньше или равно `50` и больше или равно `25` . В противном случае вернется `"No"` ._

#### Подсказка 1

Логический оператор AND ( `&&` ) сравнивает оба оператора и возвращает `true` только если оба они являются истинными или могут быть преобразованы в true (правдивый).

> _попытаться решить проблему сейчас_

#### Подсказка 2

Помните, что этот эффект может быть также достигнут посредством вложенных операторов `if` .

> _попытаться решить проблему сейчас_

## Осторожно, спойлеры!

**Решение впереди!**

## Базовое решение:

```javascript
function testLogicalAnd(val) { 
  // Only change code below this line 
 
  if (val <= 50 && val >= 25) { 
      return "Yes"; 
  } 
 
  // Only change code above this line 
  return "No"; 
 } 
 
 // Change this value to test 
 testLogicalAnd(10); 
```

· [Запустить код в repl.it](https://repl.it/@AdrianSkar/Basic-JS-Comparison-with-the-and-operator)

### Обозначение кода

Функция сначала оценивает, `if` условие `val <= 50` оценивает `true` преобразование `val` в число, если необходимо, то делает то же самое с `val >=25` из-за логического оператора AND ( `&&` ); если оба возвращают true, `return "Yes"` оператор `return "Yes"` .

### Ресурсы

*   [«Логические операторы» - _ссылка MDN JavaScript_](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Logical_Operators)