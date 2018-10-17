---
title: Array.prototype.includes
localeTitle: Array.prototype.includes
---
## Array.prototype.includes

Метод `includes()` определяет, содержит ли массив значение. Он возвращает true или false.

Это два аргумента:

1.  `searchValue` - элемент для поиска в массиве.
2.  `fromIndex` - позиция в массиве, чтобы начать поиск созданного `searchValue` . Если подано отрицательное значение, оно начинается с длины массива минус отрицательное значение.

### пример

```js
const a = [1, 2, 3]; 
 a.includes(2); // true 
 a.includes(4); // false 
```

#### Дополнительная информация:

[MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/includes)