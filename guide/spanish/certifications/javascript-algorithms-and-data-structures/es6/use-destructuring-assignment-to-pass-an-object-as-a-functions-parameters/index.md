---
title: Use Destructuring Assignment to Pass an Object as a Function's Parameters
localeTitle: Utilice la asignación de destrucción para pasar un objeto como parámetros de una función
---
## Utilice la asignación de destrucción para pasar un objeto como parámetros de una función

Podría pasar todo el objeto y luego elegir los atributos específicos que desea mediante el uso de `.` operador. ¡Pero ES6 ofrece una opción más elegante!

## Sugerencia 1:

Deshazte de las `stats` y ve si puedes destruirlas. Necesitamos el `max` y `min` de `stats` .

## Advertencia de Spoiler - Soluciones por delante!

## Solución 1:

```javascript
const half = (function() { 
  "use strict"; // do not change this line 
 
  // change code below this line 
  return function half({max, min}) { 
    // use function argument destructuring 
    return (max + min) / 2.0; 
  }; 
  // change code above this line 
 
 })(); 
```

Observe que estamos desestructurando `stats` para pasar dos de sus atributos, `max` y `min` , a la función. No te olvides de modificar la segunda declaración de retorno. Cambie `stats.max` a solo `max` , y cambie `stats.min` a solo `min` .

## Solución 2:

Aquí hay otra solución que funciona. No hay mucha diferencia, aparte del hecho de que la función no tiene un nombre.

```javascript
const half = (function() { 
  "use strict"; // do not change this line 
 
  // change code below this line 
  return (({max, min}) => { 
    // use function argument destructuring 
    return (max + min) / 2.0; 
  }); 
  // change code above this line 
 
 })(); 

```