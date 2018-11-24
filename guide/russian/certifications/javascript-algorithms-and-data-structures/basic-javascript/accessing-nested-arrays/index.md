---
title: Accessing Nested Arrays
localeTitle: Доступ к вложенным массивам
---
## Доступ к вложенным массивам

### Доступ к элементам в массиве с использованием нотной записи в виде скобок `[]`

```js
var fruitBasket = ['apple', 'banana' 'orange', 'melon']; 
 var favoriteFruit = fruitBasket[2]; 
 
 console.log(favoriteFruit) // 'orange' 
```

В этом примере наш любимый фрукт - «оранжевый», который находится в индексе `2` в массиве `fruitBasket` . Используя Braket обозначения, мы относим индекс `2` из `fruitBasket` массива `favoriteFruit` . Это делает `favoriteFruit` равным «оранжевому».

### Доступ к объектам в массивах с использованием скобки `[]` и точки `.` обозначение

```js
var garage = [ 
  { 
    type: 'car', 
    color: 'red', 
    make: 'Ford' 
  }, 
  { 
    type: 'motorbike', 
    color: 'black', 
    make: 'Yamaha' 
  }, 
  { 
    type: 'bus', 
    color: 'yellow', 
    make: 'Blue Bird' 
  } 
 ]; 
 
 var busColor = garage[2].color; // 'yellow' 
```

## Решение:

```js
// Setup 
 var myPlants = [ 
  { 
    type: "flowers", 
    list: [ 
      "rose", 
      "tulip", 
      "dandelion" 
    ] 
  }, 
  { 
    type: "trees", 
    list: [ 
      "fir", 
      "pine", 
      "birch" 
    ] 
  } 
 ]; 
 
 // Only change code below this line 
 
 var secondTree = myPlants[1].list[1]; 

```