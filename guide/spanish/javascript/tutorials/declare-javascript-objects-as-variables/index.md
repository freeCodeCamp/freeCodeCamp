---
title: Declare JavaScript Objects as Variables
localeTitle: Declarar objetos de JavaScript como variables
---
Esto tiene un formato simple. Usted declara su variable y la tiene igual a un objeto en la forma `{ key: value}`
```
var car = { 
  "wheels":4, 
  "engines":1, 
  "seats":5 
 }; 
```

Puede acceder a las propiedades del objeto utilizando la notación de puntos o la notación de corchetes.

Usando la notación de puntos:

```javascript
console.log(car.wheels); // 4 
```

Usando la notación de corchete:

```javascript
console.log(car["wheels"]); // 1 
```

Usando la notación del soporte dinámico:

```javascript
var seatsProperty = "seats"; 
 console.log(car[seatsProperty]); // 5 

```