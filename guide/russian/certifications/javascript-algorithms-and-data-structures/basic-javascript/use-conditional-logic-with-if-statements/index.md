---
title: Use conditional logic with If statements
localeTitle: Использовать условную логику с операторами If
---
## Использовать условную логику с операторами If

### Объяснение проблемы:

_Создайте оператор `if` внутри функции, чтобы вернуть `"Yes, that was true"` если параметр `wasThatTrue` является `true` и возвращает `"No, that was false"` противном случае._

#### Подсказка 1

Ваш оператор `if` будет оценивать, является ли ваше `(condition)` `true` или `false` и выполняется (если оно оценивается как `true` ), `{statement}` объявленный сразу после него.

> _попытаться решить проблему сейчас_

#### Подсказка 2

В случае, если ваше `(condition)` оценивает значение `false` `{statement}` не будет выполнено, и функция вернет следующий оператор `return` .

> _попытаться решить проблему сейчас_

## Осторожно, спойлеры!

**Решение впереди!**

## Базовое решение:

```javascript
// Setup 
 function trueOrFalse(wasThatTrue) { 
 
  // Only change code below this line. 
 
  if (wasThatTrue) 
   { 
    return "Yes, that was true"; 
    } 
  return "No, that was false"; 
 
  // Only change code above this line. 
 } 
```

### Обозначение кода

Функция сначала оценивает, соответствует `if` условие `(wasThatTrue)` `true` . Если да, то ir возвращает выражение между фигурными фигурными скобками. Если это не так, он возвращает следующий оператор `return` вне их.

### Ресурсы

*   [«Boolean» - глоссарий MDN](https://developer.mozilla.org/en-US/docs/Glossary/Boolean)
    
*   ["if ... else" - ссылка MDN JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/if…else)