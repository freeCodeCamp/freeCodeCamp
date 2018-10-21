---
title: Construct JavaScript Objects with Functions
localeTitle: Construir objetos de JavaScript con funciones
---
Usando constructores es fácil crear nuevos objetos usando un plano o constructor. La sintaxis de la declaración es un poco diferente pero aún así fácil de recordar.
```
// Let's add the properties engines and seats to the car in the same way that the property wheels has been added below. They should both be numbers. 
 var Car = function() { 
  this.wheels = 4; 
  this.engines = 1; 
  this.seats = 1; 
 }; 
 
 var myCar = new Car(); 
```

El nombre de una función constructora generalmente comienza con una letra mayúscula (a diferencia de otras funciones, que tienden a comenzar con un carácter en minúscula). Se supone que la letra mayúscula ayuda a recordar a los desarrolladores que utilicen la nueva palabra clave cuando crean un objeto con esa función.