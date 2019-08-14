---
title: Arrow Functions
localeTitle: Funciones Flecha
---
Las funciones flecha son una nueva sintaxis de ES6 para escribir expresiones de funciones en JavaScript. Esta corta sintaxis ahorra tiempo y simplifica el alcance de la función.

## ¿Qué son las funciones flecha?

La función flecha es una sintaxis más concisa para escribir expresiones de función utilizando un token de "flecha gruesa" ( `=>` ).

### La sintaxis básica.

A continuación se muestra un ejemplo básico de una función flecha:

```javascript
// Sintaxis de ES5 
 var multiply = function(x, y) { 
  return x * y; 
 }; 
 
 // Función flecha de ES6
 var multiply = (x, y) => { return x * y; }; 
 
 // O más simple aún
 var multiply = (x, y) => x * y; 
```

Como se puede ver en el ejemplo, **si la lógica de la función se escribe en una línea** se pueden evitar usar los corchetes y esto implicitamente significa que la función esta devolviendo ese resultado. Por lo tanto, tampoco hace falta escribir la palabra `return`. 

Si se incluyen corchetes (cuando el contenido de la función se escribe en varias líneas), es necesario declarar el `return`.

### Un `this` simplificado

Antes de las funciones flecha, las nuevas funciones defininían su propio valor `this`. Para usar `this` dentro de una expresión de función tradicional, teníamos que escribir una solución como esta:

```javascript
// Sintaxis de ES5 
 function Person() { 
  // Asignamos `this` a la variable `self` y asi podemos usarla luego.
  var self = this; 
  self.age = 0; 
 
  setInterval(function growUp() { 
    // La variable `self` se refiere al objeto esperado
    self.age++; 
  }, 1000); 
 } 
```

Una función flecha no define su propio valor `this`, hereda `this` de la función de cierre:

```javascript
// Sintaxis de ES6
 function Person(){ 
  this.age = 0; 
 
  setInterval(() => { 
    // `this` ahora se refiere al objeto Person, genial! 
    this.age++; 
  }, 1000); 
 } 
 
 var p = new Person(); 
```

#### Otras lecturas

[Enlace MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions)
