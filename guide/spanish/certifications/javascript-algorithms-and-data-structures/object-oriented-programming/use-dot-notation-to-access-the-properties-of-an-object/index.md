---
title: Use Dot Notation to Access the Properties of an Object
localeTitle: Usar la notación de puntos para acceder a las propiedades de un objeto
---
## Usar la notación de puntos para acceder a las propiedades de un objeto

### Método:

El siguiente código simplemente imprimirá `property1` del objeto `obj` .

```javascript
let obj = { 
  property1 = 1, 
  property2 = 2 
 }; 
 
 console.log(obj.property1); 
```

Siguiendo esta lógica, use la operación `console.log` para imprimir tanto la `property1` como la `property2` en la pantalla.

### Solución:

```javascript
let dog = { 
  name: "Spot", 
  numLegs: 4 
 }; 
 // Add your code below this line 
 console.log(dog.name); 
 console.log(dog.numLegs); 

```