---
title: Adding a Default Option in Switch Statements
localeTitle: Добавление опции по умолчанию в операторы switch
---
# Добавление опции по умолчанию в операторы switch

*   Добавление опции по умолчанию гарантирует, что в случае, если ваша переменная не соответствует ни одному из параметров, будет использоваться значение по умолчанию.

## Решение:

```javascript
function switchOfStuff(val) { 
  var answer = ""; 
 
  switch(val){ 
    case 'a': answer = 'apple'; 
    break; 
    case 'b': answer = 'bird'; 
    break; 
    case 'c': answer = 'cat'; 
    break; 
    default: answer = 'stuff'; 
  } 
 
  return answer; 
 } 

```