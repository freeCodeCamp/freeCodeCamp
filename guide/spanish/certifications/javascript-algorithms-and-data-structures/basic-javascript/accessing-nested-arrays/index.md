---
title: Accessing Nested Arrays
localeTitle: Acceso a matrices anidadas
---
## Acceso a matrices anidadas

### Accediendo a elementos dentro de una matriz usando notación de corchete `[]`

```js
var fruitBasket = ['apple', 'banana' 'orange', 'melon']; 
 var favoriteFruit = fruitBasket[2]; 
 
 console.log(favoriteFruit) // 'orange' 
```

En este ejemplo, nuestra fruta favorita es 'naranja', que está en el índice `2` en la matriz `fruitBasket` . Usando la notación de braket, asignamos el índice `2` de la matriz `fruitBasket` a `favoriteFruit` . Esto hace que `favoriteFruit` sea ​​igual a 'naranja'.

### Accediendo a objetos dentro de arreglos usando braket `[]` y dot `.` notación

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

## Solución:

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