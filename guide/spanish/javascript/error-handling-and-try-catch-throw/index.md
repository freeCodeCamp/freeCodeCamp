---
title: Error Handling and Try Catch Throw
localeTitle: Manejo de errores y prueba de lanzamiento de captura
---
## Manejo de errores y prueba de lanzamiento de captura

La sentencia `try...catch..finally` marca un bloque de sentencias para intentar, y especifica una respuesta, en caso de que se lance una excepción. La declaración de `try` contiene una o más declaraciones, y al menos una cláusula `catch` o una cláusula `finally` , o ambas.

#### `try...catch`

```javascript
try { 
   throw new Error('my error'); 
 } 
 catch (e) { 
  console.error(e.message); 
 } 
 
 // Output: 
 // my error 
```

#### `try...finally` :

```javascript
try { 
   throw new Error('my error'); 
 } 
 finally { 
  console.error('finally'); 
 } 
 
 // Output: 
 // finally 
```

_Nota:_ cuando no se `catch` el error, en realidad no está "atrapado", aunque se ejecute el bloque `finally` . Eso significa que el error continuará hasta el bloque de `try` superior (o bloque principal).

#### `try...catch...finally`

```javascript
try { 
   throw new Error('my error'); 
 } 
 catch (e) { 
  console.error(e.message); 
 } 
 finally { 
  console.error('finally'); 
 } 
 
 // Output: 
 // my error 
 // finally 
```

Uso típico:

```javascript
try { 
   openFile(file); 
   readFile(file) 
 } 
 catch (e) { 
  console.error(e.message); 
 } 
 finally { 
  closeFile(file); 
 } 
```

#### Prueba anidada `try...catch`

Tú también puedes:

*   Anida una declaración `try-catch` dentro de un bloque `try` .
*   Lanzar el error hacia arriba.

```javascript
try { 
  try { 
    throw new Error('my error'); 
  } 
  catch (e) { 
    console.error('inner', e.message); 
    throw e; 
  } 
  finally { 
    console.log('finally'); 
  } 
 } 
 catch (e) { 
  console.error('outer', e.message); 
 } 
 
 // Output: 
 // inner my error 
 // finally 
 // outer my error 
```

#### Tipos de error

##### Error de referencia

```javascript
var x; 
 try { 
  x = y + 1;   // y cannot be referenced (used) 
 } 
 catch(err) { 
  console.log(err.name, err.message); 
 } 
 // ReferenceError y is not defined 
```

##### Error de sintaxis

```javascript
try { 
    eval("alert('Hello)");   // Missing ' will produce an error 
 } 
 catch(err) { 
    console.log(err.name,err.message); 
 } 
 // SyntaxError Invalid or unexpected token 
```

##### Error de tecleado

```javascript
var num = 1; 
 try { 
    num.toUpperCase();   // You cannot convert a number to upper case 
 } 
 catch(err) { 
    console.log(err.name, err.message); 
 } 
 // TypeError num.toUpperCase is not a function 
```

##### Error de URI

```javascript
try { 
    decodeURI("%%%");   // You cannot URI decode these percent signs 
 } 
 catch(err) { 
    console.log(err.name, err.message); 
 } 
 // URIError URI malformed 
```

#### Más información:

[MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/try…catch) [W3S](https://www.w3schools.com/js/js_errors.asp)