---
title: Do...While Loop
localeTitle: Do ... While Loop
---
`do...while` в [`while`](http://forum.freecodecamp.com/t/javascript-while-loop/14668) `do...while` цикл тесно связан с в [`while`](http://forum.freecodecamp.com/t/javascript-while-loop/14668) цикл. В цикле do while условие проверяется в конце цикла.

Вот **синтаксис** `do...while` loop:

## Синтаксис:
```
 do { 
 
   *Statement(s);* 
 
 } while (*condition*); 
```

**statement (s):** оператор, который выполняется **хотя бы один раз** до того, как условие или логическое выражение оценивается и повторно выполняется каждый раз, когда условие принимает значение true.

**condition:** Здесь условие является булевым выражением . Если выражение Boolean имеет значение true, оператор выполняется снова. Когда выражение Boolean принимает значение false, циклы заканчиваются.

## Пример:
```
var i = 0; 
 do { 
  i = i + 1; 
  console.log(i); 
 } while (i < 5); 
 
 Output: 
 1 
 2 
 3 
 4 
 5 
```

источник: [**do ... while**](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/do…while)