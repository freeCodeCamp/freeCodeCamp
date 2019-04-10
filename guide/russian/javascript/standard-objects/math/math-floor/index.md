---
title: Math Floor
localeTitle: Математический пол
---
## Математический пол

`Math.floor()` - это метод стандартного объекта Math, который округляет заданное число вниз до следующего целого числа. Обратите внимание, что для отрицательных чисел это означает, что число будет округлено «от 0» вместо числа меньшего абсолютного значения, так как `Math.floor()` возвращает наибольшее целое число, меньшее или равное заданному числу.

### Примеры

```javascript
Math.floor(0.9)  //  0 
 Math.floor(1.3)  //  1 
 Math.floor(0.5)  //  0 
 Math.floor(-0.9) // -1 
 Math.floor(-1.3) // -2 
```

### Дополнительная информация:

*   [MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/floor)
*   [w3schools](https://www.w3schools.com/jsref/jsref_floor.asp)
*   [Википедия](https://en.wikipedia.org/wiki/Floor_and_ceiling_functions)