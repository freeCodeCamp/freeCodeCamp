---
title: Immediately Invoked Functions Expressions(IIFEs)
localeTitle: Expresiones de funciones inmediatamente invocadas (IIFE)
---
## Declaración de función

Una función creada con una declaración de función es un objeto de función y tiene todas las propiedades, métodos y comportamiento de los objetos de función. Ejemplo:

```javascript
  function statement(item){ 
    console.log('Function statement example '+ item); 
  } 
```

## Expresión de la función

Una expresión de función es similar a la declaración de función, excepto que se puede omitir el nombre de la función para crear funciones anónimas. Ejemplo:

```javascript
  var expression = function (item){ 
    console.log('Function expression example '+ item); 
  } 
```

## Expresiones de funciones inmediatamente invocadas

Tan pronto como se crea la función, se invoca a sí misma, no necesita invocar explícitamente. En la siguiente variable de ejemplo, iife almacenará una cadena que es devuelta por la ejecución de la función.

```javascript
  var iife = function (){ 
    return 'Immediately Invoked Function Expressions(IIFEs) example '; 
  }(); 
  console.log(iife); // 'Immediately Invoked Function Expressions(IIFEs) example ' 
```

La declaración antes de IIFE siempre debe terminar con una; o lanzará un error.

**Mal ejemplo**

```javascript
var x = 2 //no semicolon, will throw error 
 (function(y){ 
  return x; 
 })(x); //Uncaught TypeError: 2 is not a function 
```

## ¿Por qué usar las expresiones de funciones invocadas inmediatamente?

```javascript
  (function(value){ 
    var greet = 'Hello'; 
    console.log(greet+ ' ' + value); 
  })('IIFEs'); 
```

En el ejemplo anterior, cuando el motor javascript ejecuta el código anterior, creará un contexto de ejecución global cuando vea el código y creará un objeto de función en la memoria para IIFE. Y cuando llega a la línea `46` debido a la función que se invoca, se crea un nuevo contexto de ejecución sobre la marcha y, por lo tanto, la variable greet entra en ese contexto de ejecución de la función y no en el global. Esto es lo que lo hace único. `This ensures that code inside IIFE does not interfere with other code or be interfered by another code` por lo que el código es seguro.

#### Más información

[Expresión de función inmediatamente invocada en Wikipedia](https://en.wikipedia.org/wiki/Immediately-invoked_function_expression) [¿Qué hace el punto y coma principal en las bibliotecas de JavaScript?](https://stackoverflow.com/questions/1873983/what-does-the-leading-semicolon-in-javascript-libraries-do)