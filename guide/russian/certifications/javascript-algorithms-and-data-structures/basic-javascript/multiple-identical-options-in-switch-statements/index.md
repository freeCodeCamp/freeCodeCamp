---
title: Multiple Identical Options in Switch Statements
localeTitle: Несколько идентичных параметров в операторах переключателей
---
## Несколько идентичных параметров в операторах переключателей

### Проблема Объяснение

_Если оператор break не указывается в случае оператора switch, следующий оператор (ы) case выполняются до тех пор, пока не будет обнаружен разрыв. Если у вас несколько входов с одним и тем же выходом, вы можете представить их в инструкции switch следующим образом:_

```javascript
switch(val) { 
  case 1: 
  case 2: 
  case 3: 
    result = "1, 2, or 3"; 
    break; 
  case 4: 
    result = "4 alone"; 
 } 
```

_Случаи для 1, 2 и 3 будут давать одинаковый результат._

_Напишите оператор switch, чтобы задать ответ для следующих диапазонов:_ `1-3` - «Низкий»  
`4-6` - «Середина»  
`7-9` - «Высокий»

_Заметка: Вам нужно будет иметь оператор case для каждого числа в диапазоне._

## Осторожно, спойлеры!

**Решение впереди!**

## Код решения:

```javascript
function sequentialSizes(val) { 
  var answer = ""; 
  // Only change code below this line 
  switch(val) { 
    case 1: 
    case 2: 
    case 3: 
      return "Low"; 
      break; 
    case 4: 
    case 5: 
    case 6: 
      return "Mid"; 
      break; 
    case 7: 
    case 8: 
    case 9: 
      return "High"; 
      break; 
  } 
  // Only change code above this line 
  return answer; 
 } 
 // Change this value to test 
 sequentialSizes(1); 
```

## Альтернативное решение для кода:

```javascript
function sequentialSizes(val) { 
  var answer = ""; 
  // Only change code below this line 
  switch(val){ 
    case 1: case 2: case 3: 
      answer = "Low"; 
      break; 
    case 4: case 5: case 6: 
      answer = "Mid"; 
      break; 
    case 7: case 8: case 9: 
      answer = "High"; 
  } 
  // Only change code above this line 
  return answer; 
 } 
 // Change this value to test 
 sequentialSizes(1); 
```

· Запустить код в [repl.it.](https://repl.it/@AdrianSkar/Basic-JS-Multiple-opts-in-switch)

### Обозначение кода

Поскольку у вас уже есть переменная с именем `answer` и функция возвращает ее, вы можете просто изменить ее значение для каждой группы операторов case, чтобы они соответствовали требованиям упражнения.

### Ресурсы

*   [«Переключатель: методы для многокритериального случая» - _Справочник по Javascript MDN_](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/switch)