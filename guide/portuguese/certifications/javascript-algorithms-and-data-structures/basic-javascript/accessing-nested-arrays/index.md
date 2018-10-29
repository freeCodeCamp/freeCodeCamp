---
title: Accessing Nested Arrays
localeTitle: Acessando matrizes aninhadas
---
## Acessando matrizes aninhadas

### Acessando elementos em uma matriz usando a notação de colchetes `[]`

```js
var fruitBasket = ['apple', 'banana' 'orange', 'melon']; 
 var favoriteFruit = fruitBasket[2]; 
 
 console.log(favoriteFruit) // 'orange' 
```

Neste exemplo, nossa fruta favorita é 'laranja', que está no índice `2` na matriz `fruitBasket` . Usando a notação do braket, atribuímos o índice `2` da matriz `fruitBasket` ao `favoriteFruit` . Isso faz com que `favoriteFruit` igual a "laranja".

### Acessando objetos dentro de matrizes usando braket `[]` e dot `.` notação

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

## Solução:

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