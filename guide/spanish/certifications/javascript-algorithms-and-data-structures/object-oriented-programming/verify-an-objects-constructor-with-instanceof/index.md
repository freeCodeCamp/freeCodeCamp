---
title: Verify an Object's Constructor with instanceof
localeTitle: Verifique el constructor de un objeto con instanceof
---
## Verifique el constructor de un objeto con instanceof

### Método:

Al igual que en el último desafío, crea un nuevo objeto, `myHouse` , usando el constructor dado.

#### Ejemplo:

```javascript
let hound = new Dog(); 
```

Recuerde darle a la función `House` un parámetro para inicializar el número de habitaciones. Luego simplemente llame al operador de `instanceof` para devolver verdadero en su nueva casa.

### Solución:

```javascript
/* jshint expr: true */ 
 
 function House(numBedrooms) { 
  this.numBedrooms = numBedrooms; 
 } 
 
 // Add your code below this line 
 let myHouse = new House(5); 
 myHouse instanceof House; 

```