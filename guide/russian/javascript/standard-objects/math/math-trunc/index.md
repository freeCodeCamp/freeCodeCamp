---
title: Math Trunc
localeTitle: Math Trunc
---
## Math Trunc

`Math.trunc()` - метод стандартного объекта Math, который возвращает только целую часть заданного числа, просто удаляя дробные единицы. Это приводит к общему округлению к нулю. Любой ввод, который не является числом, приведет к выходу NaN.

Осторожно: этот метод является функцией ECMAScript 2015 (ES6) и, следовательно, не поддерживается старыми браузерами.

### Примеры

```javascript
Math.trunc(0.1)   //  0 
 Math.trunc(1.3)   //  1 
 Math.trunc(-0.9)  // -0 
 Math.trunc(-1.5)  // -1 
 Math.trunc('foo') // NaN 
```

### Дополнительная информация:

*   [MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/trunc)