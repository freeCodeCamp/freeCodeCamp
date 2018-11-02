---
title: Function Invocation
localeTitle: Invocación de funciones
---
## Invocación de funciones

El código dentro de una función se ejecuta cuando se invoca la función. Es común usar el término "llamar a una función" en lugar de "invocar una función".

Las funciones deben estar dentro del alcance cuando son llamadas. El alcance de una función es la función en la que se declara, o el programa completo si se declara en el nivel superior.

```javascript
function myFunction(a, b) { 
  return a * b; 
 } 
 myFunction(10, 2);           // Function invocation, will return 20 
 
 //optional parameters (es6 only) 
 //allow to set optional parameters 
 
 function myFunction(a, b = 10) { 
  return a * b; 
 } 
 myFunction(1);           // Function invocation, will return 10 
 myFunction(1,5);           // Function invocation, will return 5 
```

En el código de ejemplo, ayb son los parámetros de la función que contienen los valores 10 y 2, que son los argumentos utilizados en la llamada a la función.

### Invocando una función como método

En JavaScript, puede definir funciones como métodos de objeto.

El siguiente ejemplo crea un objeto ( `myObject` ), con dos propiedades ( `firstName` y `lastName` ) y un método ( `fullName` ):

```javascript
var myObject = { 
  firstName:"John", 
  lastName: "Doe", 
  fullName: function () { 
    return this.firstName + " " + this.lastName; 
  } 
 } 
 myObject.fullName();         // Function invoked as a method, will return "John Doe" 
```

### Funciones de flecha

En la versión más reciente de Javascript, también puede acortar la sintaxis utilizando las funciones de flecha. Lo siguiente demuestra dos funciones. Uno está escrito en la forma estándar, uno está escrito como una función de flecha. Tenga en cuenta que las funciones de flecha no tienen sus propios argumentos, super, super o new.target.

```javascript
//regular function 
 
 function addStuff(args) { 
   return args + 2; 
 } 
 
 addStuff(2); 
 //returns 4 
 
 //arrow function 
 
 var addStuff = (args) => args + 2; 
 addStuff(2); 
 //returns 4 
```

Esta versión abreviada de la función de flecha tiene un retorno implícito, por lo que no especifica una declaración de retorno.

### Más información:

*   Documentación de la función: [MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Functions)