---
title: Catch Use of Assignment Operator Instead of Equality Operator
localeTitle: Поймать использование оператора присваивания вместо оператора равенства
---
## Поймать использование оператора присваивания вместо оператора равенства

*   В этом вызове должно быть отредактировано только утверждение if.
*   Оператор `=` по себе используется только для назначения значений, а не для их сравнения.

## Решение

```javascript
let x = 7; 
 let y = 9; 
 let result = "to come"; 
 
 if(x == y) { 
  result = "Equal!"; 
 } else { 
  result = "Not equal!"; 
 } 
 
 console.log(result); 

```