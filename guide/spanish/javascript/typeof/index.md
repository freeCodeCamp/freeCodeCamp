---
title: Typeof
localeTitle: Tipo de
---
## Tipo de

`typeof` es una palabra clave de JavaScript que devolverá el tipo de variable cuando la llame. Puede usar esto para validar los parámetros de la función o verificar si las variables están definidas. Hay otros usos también.

El operador `typeof` es útil porque es una forma fácil de verificar el tipo de variable en su código. Esto es importante porque JavaScript es un [lenguaje de tipo dinámico](https://stackoverflow.com/questions/2690544/what-is-the-difference-between-a-strongly-typed-language-and-a-statically-typed) . Esto significa que no es necesario que asigne tipos a las variables cuando las cree. Debido a que una variable no está restringida de esta manera, su tipo puede cambiar durante el tiempo de ejecución de un programa.

Por ejemplo:

```javascript
var x = 12345; // number 
 x = 'string'; // string 
 x = { key: 'value' }; // object 
```

Como puede ver en el ejemplo anterior, una variable en JavaScript puede cambiar los tipos durante la ejecución de un programa. Esto puede ser difícil de seguir como programador, y aquí es donde el operador de `typeof` es útil.

El operador `typeof` devuelve una cadena que representa el tipo actual de una variable. Lo usas escribiendo `typeof(variable)` o `typeof variable` . Volviendo al ejemplo anterior, puede usarlo para verificar el tipo de la variable `x` en cada etapa:

```javascript
var x = 12345; 
 console.log(typeof x) // number 
 x = 'string'; 
 console.log(typeof x) // string 
 x = { key: 'value' }; 
 console.log(typeof x) // object 
```

Esto puede ser útil para verificar el tipo de una variable en una función y continuar según sea apropiado.

Aquí hay un ejemplo de una función que puede tomar una variable que es una cadena o un número:

```javascript
function doSomething(x) { 
  if(typeof(x) === 'string') { 
    alert('x is a string') 
  } else if(typeof(x) === 'number') { 
    alert('x is a number') 
  } 
 } 
```

Otra forma en que el operador de `typeof` puede ser útil es asegurarse de que se defina una variable antes de intentar acceder a ella en su código. Esto puede ayudar a prevenir errores en un programa que pueden ocurrir si intenta acceder a una variable que no está definida.

```javascript
function(x){ 
  if (typeof(x) === 'undefined') { 
    console.log('variable x is not defined'); 
    return; 
  } 
  // continue with function here... 
 } 
```

Es posible que la salida del operador `typeof` no sea siempre lo que espera cuando comprueba un número.  
Los números pueden convertirse en el valor [NaN (no es un número)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/NaN) por varias razones.

```javascript
console.log(typeof NaN); //"number" 
```

Tal vez trató de multiplicar un número con un objeto porque olvidó acceder al número dentro del objeto.

```javascript
var x = 1; 
 var y = { number: 2 }; 
 console.log(x * y); // NaN 
 console.log(typeof (x * y)); // number 
```

Al verificar un número, no es suficiente verificar la salida de `typeof` para un número, ya que `NaN` también  
pasa esta prueba  
Esta función comprueba los números y tampoco permite que pase el valor de `NaN` .

```javascript
function isNumber(data) { 
  return (typeof data === 'number' && !isNan(data)); 
 } 
```

Aun cuando este es un método de validación útil, debemos tener cuidado porque javascript tiene algunas partes extrañas y una de ellas es el resultado de una `typeof` sobre instrucciones particulares. Por ejemplo, en javascript muchas cosas son solo `objects` así que encontrarás.

```javascript
var x = [1,2,3,4]; 
 console.log(typeof x)  // object 
 
 console.log(typeof null)  // object 
```

### Más información:

[Documentación MDN para typeof](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/typeof)