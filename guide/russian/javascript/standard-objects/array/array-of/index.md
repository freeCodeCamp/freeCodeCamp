---
title: Array of
localeTitle: Массив
---
## Массив

Метод Array.of () создает новый экземпляр Array с переменным числом аргументов, независимо от числа или типа аргументов.

Синтаксис:

```javascript
Array.of(element0[, element1[, ...[, elementN]]]) 
```

## пример

```javascript
Array.of(7);       // [7] - creates an array with a single element 
 Array.of(1, 2, 3); // [1, 2, 3] 
 
 Array(7);          // [ , , , , , , ] - creates an empty array with a length property of 7 
 Array(1, 2, 3);    // [1, 2, 3] 
```

#### Дополнительная информация:

Для получения дополнительной информации посетите [MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/of)