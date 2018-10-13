---
title: Introducing Else statements
localeTitle: Представляем инструкции Else
---
## Представляем инструкции Else

### Объяснение проблемы:

_Объединение операторов `if` в один оператор `if/else` ._

#### Подсказка 1

Когда первый оператор `if` возвращает `false` выполняется и обрабатывается следующий фрагмент кода (например, `return` , `if` или `else` ).

> _попытаться решить проблему сейчас_

#### Подсказка 2

Иногда, `if` ( `condition` ) операторы могут быть заменены операциями `else {code to execute instead}` (по сути, вы говорите своей функции _«y»,_ если она не может выполнить _«x»,_ а не указывать _«x»_ несколько раз).

> _попытаться решить проблему сейчас_

## Осторожно, спойлеры!

**Решение впереди!**

## Базовое решение:

```javascript
function testElse(val) { 
  var result = ""; 
  // Only change code below this line 
 
  if (val > 5) { 
    result = "Bigger than 5"; 
  } 
 
  else { 
    result = "5 or smaller"; 
  } 
 
  // Only change code above this line 
  return result; 
 } 
 
 // Change this value to test 
 testElse(4); 
```

· [Запустить код в repl.it](https://repl.it/@AdrianSkar/Introducing-else-statements)

### Обозначение кода

Функция сначала оценивает, `if` условие `val > 5` значение `true` . Если это не так, выполняется следующий оператор ( `else { return "5 or smaller";})` .

### Ресурсы

*   ["if ... else" - _ссылка MDN JavaScript_](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/if…else)