---
title: Combine Two Arrays Using the concat Method
localeTitle: Объединить два массива с помощью метода concat
---
## Объединить два массива с помощью метода concat

*   Метод concat используется для объединения двух или более массивов или строк.
*   Этот метод не мутирует существующие массивы, а возвращает новый массив.

## Решение

```javascript
function nonMutatingConcat(original, attach) { 
  // Add your code below this line 
 
  return original.concat(attach); 
 
  // Add your code above this line 
 } 
 var first = [1, 2, 3]; 
 var second = [4, 5]; 
 nonMutatingConcat(first, second); 

```