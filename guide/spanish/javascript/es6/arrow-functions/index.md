---
title: Arrow Functions
localeTitle: Funciones de flecha
---
## Funciones de flecha

Las funciones en ES6 han cambiado un poco. Me refiero a la sintaxis.

```javascript
// Old Syntax 
 function oldOne() { 
 console.log("Hello World..!"); 
 } 
 
 // New Syntax 
 var newOne = () => { 
 console.log("Hello World..!"); 
 } 
```

La nueva sintaxis puede ser un poco confusa. Pero voy a tratar de explicar la sintaxis. Hay dos partes de la sintaxis.

1.  var newOne = ()
2.  \=> {}

La primera parte es simplemente declarar una variable y asignarle la función (es decir,) (). Simplemente dice que la variable es en realidad una función.

Entonces la segunda parte es declarar la parte del cuerpo de la función. La parte de la flecha con los tirantes rizados define la parte del cuerpo.

Otro ejemplo con parámetros:

```javascript
let NewOneWithParameters = (a, b) => { 
 console.log(a+b); // 30 
 } 
 NewOneWithParameters(10, 20); 
```

Los paréntesis son opcionales cuando solo hay un nombre de parámetro:

```javascript
let newOneWithOneParam = a => { 
 console.log(a); 
 } 
```

Una ventaja increíble de la función de flechas es que no se puede volver a enlazar una función de flecha. Siempre será llamado con el contexto en el cual fue definido. Sólo tiene que utilizar una función normal.

```javascript
// Old Syntax 
 axios.get(url).then(function(response) { 
  this.data = response.data; 
 }).bind(this); 
 
 // New Syntax 
 axios.get(url).then(response => { 
  this.data = response.data; 
 }); 
```

No creo que tenga que dar una explicación para esto. Es sencillo