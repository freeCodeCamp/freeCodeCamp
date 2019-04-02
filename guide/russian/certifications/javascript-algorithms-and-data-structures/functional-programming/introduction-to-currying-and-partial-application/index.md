---
title: Introduction to Currying and Partial Application
localeTitle: Введение в каррирование и частичное применение
---
## Введение в каррирование и частичное применение

### Решение

```javascript
function add(x) { 
  // Add your code below this line 
  return function(y) { 
    return function(z) { 
      return x + y + z; 
    } 
  } 
  // Add your code above this line 
 } 
 add(10)(20)(30); 

```