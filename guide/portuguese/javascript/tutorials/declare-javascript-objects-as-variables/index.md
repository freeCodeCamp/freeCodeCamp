---
title: Declare JavaScript Objects as Variables
localeTitle: Declare objetos JavaScript como variáveis
---
Isto tem um formato simples. Você declara sua variável e a iguala a um objeto no formato `{ key: value}`
```
var car = { 
  "wheels":4, 
  "engines":1, 
  "seats":5 
 }; 
```

Você pode acessar as propriedades do objeto usando notação de ponto ou notação de colchetes.

Usando notação de ponto:

```javascript
console.log(car.wheels); // 4 
```

Usando a notação de colchetes:

```javascript
console.log(car["wheels"]); // 1 
```

Usando a notação de colchetes dinâmicos:

```javascript
var seatsProperty = "seats"; 
 console.log(car[seatsProperty]); // 5 

```