---
title: Dot Product
localeTitle: Скалярное произведение
---
## Скалярное произведение

Точечный продукт является способом умножения двух векторов вместе, чтобы получить одно число. Точечные продукты распространены в физике и линейной алгебре.

Вы можете написать произведение точек двух векторов **a** и **b** как **a** · **b** .

Два вектора должны иметь одинаковую длину, чтобы иметь точечный продукт.

Чтобы найти точечный продукт, умножьте `nth` элемент в первом векторе на `nth` элемент во втором векторе. Сделайте это для всех элементов. Затем найдите сумму всех этих продуктов. Эта сумма является точечным продуктом!

### Свойства точечных продуктов

Точечное произведение двух векторов также может быть выражено как `a · b = ||a|| * ||b|| * cos(theta)` . В этой формуле `||a||` - величина вектора **a** , а `theta` - угол между двумя векторами.

Два ортогональных (ака перпендикулярных) вектора всегда будут иметь точечное произведение 0.

### Рабочий пример

Например, скажем, у вас есть векторы **a** и **b** . Пусть `a = (1 2 3 4)` и `b = (-1 0 1 2)` .

Точечным продуктом будет `(1)(-1) + (2)(0) + (3)(1) + (4)(2) = -1 + 0 + 3 + 8 = 12` . Итак, в этом случае вы бы сказали, что **a** · **b** = 12.

### Пример кода

Вот пример функции в JavaScript. Он возвращает произведение точек двух векторных аргументов:

```javascript
/** 
 * @param {array} a - A vector/array of numbers 
 * @param {array} b - A vector/array of numbers with the same length as a 
 * @returns {number} - The dot product of a and b 
 */ 
 function dotProduct(a, b) { 
  // Check if the lengths are the same - if not, there can't be a dot product 
  if (a.length !== b.length) { 
    throw "vector lengths must be equal"; 
  } 
 
  // Create a variable to store the sum as we calculate it 
  let product = 0; 
 
  // Loop through the vectors, calculate products, and add them to the total 
  for (let i = 0; i < a.length; i++) { 
    // You may want to ensure that a[i] and b[i] are both finite numbers 
    product += a[i] * b[i]; 
  } 
 
  return product; 
 } 
```

### Дополнительная информация:

[векторы](../vectors/index.md)