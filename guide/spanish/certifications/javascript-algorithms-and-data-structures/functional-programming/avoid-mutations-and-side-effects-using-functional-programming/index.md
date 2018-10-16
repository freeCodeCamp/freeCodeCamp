---
title: Avoid Mutations and Side Effects Using Functional Programming
localeTitle: Evite las mutaciones y los efectos secundarios utilizando la programación funcional
---
## Evite las mutaciones y los efectos secundarios utilizando la programación funcional

### Explicación del problema

Rellene el código del `incrementer` función para que devuelva el valor de la variable global `fixedValue` incrementado en uno. `fixedValue` no debe cambiar, sin importar cuántas veces se `incrememter` la función `incrememter` .

### Sugerencia 1

Usar el operador de incremento ( `++` ) en el valor `fixedValue` cambiará el valor `fixedValue` , lo que significa que ya no hará referencia al mismo valor con el que fue asignado.

### Solución:

```javascript
// the global variable 
 var fixedValue = 4; 
 
 function incrementer () { 
  // Add your code below this line 
  return fixedValue + 1; 
 
  // Add your code above this line 
 } 
 
 var newValue = incrementer(); // Should equal 5 
 console.log(fixedValue); // Should print 4 

```