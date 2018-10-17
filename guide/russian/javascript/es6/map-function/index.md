---
title: Map Function
localeTitle: Функция карты
---## Функция карты

Функция `map()` используется для создания нового массива из существующего, применяя функцию к каждому из элементов первого массива.

Исходный синтаксис функции карты:

```javascript
  let new_arr = arr.map(function callback(currentValue, index, array) { 
                  // Do some stuff with currentValue (index and array are optionals) 
                }) 
```

### Пример (ES6):

```javascript
const myArray_1 = [1, 2, 3, 4]; 
 const myArray_2 = myArray_1.map(el => el * 2); 
```

`myArray_2` будет содержать элементы: `[2, 4, 6, 8]`

`map()` - это метод объекта `Array` , поэтому для передачи этой функции в итерируемый объект необходимо сделать объект Array.