---
title: Arrow Functions
localeTitle: Funciones de flecha
---
Las funciones de flecha son una nueva sintaxis de ES6 para escribir expresiones de funciones de JavaScript. La sintaxis más corta ahorra tiempo y simplifica el alcance de la función.

## ¿Qué son las funciones de flecha?

Una expresión de función de flecha es una sintaxis más concisa para escribir expresiones de función utilizando un token de "flecha gruesa" ( `=>` ).

### La sintaxis básica.

A continuación se muestra un ejemplo básico de una función de flecha:

```javascript
// ES5 syntax 
 var multiply = function(x, y) { 
  return x * y; 
 }; 
 
 // ES6 arrow function 
 var multiply = (x, y) => { return x * y; }; 
 
 // Or even simpler 
 var multiply = (x, y) => x * y; 
```

Como se puede ver en el ejemplo, **si la lógica de la función se escribe en una línea** se pueden evitar usar los corchetes y esto implicitamente significa que la función esta devolviendo ese resultado. Por lo tanto, tampoco hace falta escribir la palabra `return`. 

Si se incluyen corchetes (cuando el contenido de la función se escribe en varias líneas), es necesario declarar el `return`.

### Un simplificado `this`

Antes de funciones de dirección, nuevas funciones definen su propio `this` valor. Para usar `this` dentro de una expresión de función tradicional, tenemos que escribir una solución como esta:

```javascript
// ES5 syntax 
 function Person() { 
  // we assign `this` to `self` so we can use it later 
  var self = this; 
  self.age = 0; 
 
  setInterval(function growUp() { 
    // `self` refers to the expected object 
    self.age++; 
  }, 1000); 
 } 
```

Una función de la flecha no define su propio `this` valor, se hereda `this` de la función de cerramiento:

```javascript
// ES6 syntax 
 function Person(){ 
  this.age = 0; 
 
  setInterval(() => { 
    // `this` now refers to the Person object, brilliant! 
    this.age++; 
  }, 1000); 
 } 
 
 var p = new Person(); 
```

#### Otras lecturas

[Enlace MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions)
