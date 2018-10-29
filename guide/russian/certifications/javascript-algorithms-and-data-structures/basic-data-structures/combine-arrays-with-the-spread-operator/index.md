---
title: Combine Arrays with the Spread Operator
localeTitle: Объединить массивы с оператором распространения
---
## Объединить массивы с оператором распространения

*   Решение в точности соответствует приведенному примеру. Просто вставьте массив `fragment[]` массив `sentence[]` в нужном индексе.

## Решение:

```javascript
function spreadOut() { 
  let fragment = ['to', 'code']; 
  let sentence = ["learning", ...fragment, "is", "fun"]; // change this line 
  return sentence; 
 } 
 
 // do not change code below this line 
 console.log(spreadOut()); 

```