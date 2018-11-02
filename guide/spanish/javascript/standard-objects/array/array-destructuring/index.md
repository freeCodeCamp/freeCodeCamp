---
title: Array Destructuring
localeTitle: Desestructuración de matrices
---
# Desestructuración de matrices

La destrucción es una forma conveniente de extraer múltiples valores de los datos almacenados en Arrays. Se puede usar en ubicaciones que reciben datos (como el lado izquierdo de una asignación). Esta característica se introduce en `ECMAScript 6` .

La forma de extraer los valores se especifica a través de patrones (lea los ejemplos).

### Asignación básica de variables
```
var names = ['neel', 'meet', 'darshan']; 
 var [nameOne, nameTwo, nameThree] = names; 
 console.log(nameOne); // "neel" 
 console.log(nameTwo); // "meet" 
 console.log(nameThree); // "darshan" 
```

### Asignación separada de la declaración

A una variable se le puede asignar su valor a través de la desestructuración separada de la declaración de la variable.
```
var a, b; 
 
 [a, b] = [1, 2]; 
 console.log(a); // 1 
 console.log(b); // 2 
```

### Valores predeterminados

A una variable se le puede asignar un valor predeterminado, en el caso de que el valor desempaquetado de la matriz `undefined` esté `undefined` .
```
var a, b; 
 
 [a=5, b=7] = [1]; 
 console.log(a); // 1 
 console.log(b); // 7 
```

### Analizar una matriz devuelta desde una función

Siempre ha sido posible devolver una matriz desde una función. La destrucción puede hacer que trabajar con un valor de retorno de matriz sea más conciso.

En este ejemplo, `getNames()` devuelve los valores `['neel', 'meet']` como su salida, que se pueden analizar en una sola línea con la desestructuración.
```
function getNames() { 
  return ['neel', 'meet']; 
 } 
 
 var neel, meet; 
 [nameOne, nameTwo] = getNames(); 
 console.log(nameOne); // neel 
 console.log(nameTwo); // meet 
```

### Ignorando algunos valores devueltos

Puedes ignorar los valores de retorno que no te interesan:
```
function getNames() { 
  return ['neel', 'meet', 'darshan']; 
 } 
 
 var [nameOne, , nameThree] = getNames(); 
 console.log(nameOne); // neel 
 console.log(nameThree); // darshan 
```

También puede ignorar todos los valores devueltos:
```
[,,] = getNames(); 
```

### Asignando el resto de una matriz a una variable

Al desestructurar una matriz, puede descomprimir y asignar la parte restante a una variable usando el patrón de descanso:
```
var [a, ...b] = [1, 2, 3]; 
 console.log(a); // 1 
 console.log(b); // [2, 3] 
```

Tenga en cuenta que se `SyntaxError` un `SyntaxError` si se usa una coma al final del lado izquierdo con un elemento de descanso:
```
var [a, ...b,] = [1, 2, 3]; 
 // SyntaxError: rest element may not have a trailing comma 
```

Vea también: **Array Destructurando** | [MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment#Array_destructuring)