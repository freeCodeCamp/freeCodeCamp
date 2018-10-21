---
title: Array.prototype.slice
localeTitle: Array.prototype.slice
---
Метод массива JavaScript `.slice()` вернет новый объект массива, который будет сегментом (срезом) исходного массива. Исходный массив не изменяется.

**Синтаксис**

```javascript
  array.slice() 
  arr.slice(startIndex) 
  arr.slice(startIndex, endIndex) 
```

## параметры

*   **startIndex** Индекс, основанный на нулевом **значении,** где должен начинаться срез. Если значение опущено, оно начнется с 0.
    
*   **endIndex.** Этот срез закончится **до** этого индекса на основе нуля. Отрицательный индекс используется для смещения от конца массива. Если значение опущено, сегмент будет срезать до конца массива.
    

## Примеры

```javascript
  var array = ['books', 'games', 'cup', 'sandwich', 'bag', 'phone', 'cactus'] 
 
  var everything = array.slice() 
  // everything = ['books', 'games', 'cup', 'sandwich', 'bag', 'phone', 'cactus'] 
 
  var kitchen = array.slice(2, 4) 
  // kitchen = ['cup', 'sandwich'] 
 
  var random = array.slice(4) 
  // random = ['bag', 'phone', 'cactus'] 
 
  var noPlants = array.slice(0, -1) 
  // noPlats = ['books', 'games', 'cup', 'sandwich', 'bag', 'phone'] 
 
  // array will still equal ['books', 'games', 'cup', 'sandwich', 'bag', 'phone', 'cactus'] 
```

#### Дополнительная информация:

Источник: [MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice)