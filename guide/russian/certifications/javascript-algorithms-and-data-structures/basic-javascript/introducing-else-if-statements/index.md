---
title: Introducing Else If statements
localeTitle: Представляем инструкции Else If
---
## Представляем инструкции Else If

Не забудьте использовать Read-Search-Ask, если вы застряли. Попробуйте подключить программу и написать собственный код.

\### Объяснение проблемы:

```javascript
function testElseIf(val) { 
  if (val > 10) { 
    return "Greater than 10"; 
  } 
 
  if (val < 5) { 
    return "Smaller than 5"; 
  } 
 
  return "Between 5 and 10"; 
 } 
 
 // Change this value to test 
 testElseIf(7); 
```

Мы будем модифицировать существующий код выше, чтобы он следовал потоку логики, который имеет оператор **else-if** .

\### Совет: 1 `javascript if (val > 10) { return "Greater than 10"; }` Все утверждения `if` и их варианты начинаются с утверждения `if` .

> _попытаться решить проблему сейчас_

\### Подсказка: 2 `javascript else if (val < 5) { return "Smaller than 5"; }` Заявления между , `if` заявление и `else` заявление в **еще, если** поток находится в другой, если формат

> _попытаться решить проблему сейчас_

\### Подсказка: 3 `javascript else { return "Between 5 and 10"; }` Последний оператор в потоке **else-if** находится в `else` формате ### Осторожно, спойлеры! ![спойлер](http://discourse-user-assets.s3.amazonaws.com/original/2X/2/2d6c412a50797771301e7ceabd554cef4edcd74d.gif) Решение впереди! ## Базовое решение:

```javascript
function testElseIf(val) { 
  if (val > 10) { 
    return "Greater than 10"; 
  } 
 
  else if (val < 5) { 
    return "Smaller than 5"; 
  } 
 
  else { 
  return "Between 5 and 10"; 
  } 
 } 
 
 // Change this value to test 
 testElseIf(7); 
```

: ракета: [код запуска](https://repl.it/@RyanPisuena/GoldenWorriedRuntime) ## Обозначение кода Структура **логического потока else-if** является исходным оператором `if` , еще одним оператором `if-else` и одним заключительным заявлением `else` .

### Ресурсы

*   ["if ... else" - _ссылка MDN JavaScript_](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/if…else)