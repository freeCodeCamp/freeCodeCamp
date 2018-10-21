---
title: Ternary Operator
localeTitle: Operador ternario
---
El operador ternario reemplaza un bloque `if` / `else` en un formato condensado. El siguiente es el formato general del operador ternario.
```
condition ? expr1 : expr2 
```

## Descripción

Si la condición es verdadera, el operador resuelve el valor de expr1; De lo contrario, resuelve el valor de expr2.

Por ejemplo, para mostrar un mensaje diferente basado en el valor de la variable isMember, podría usar esta declaración:

```javascript
let isMember = true; 
 
 let message = isMember ? 'Welcome Back!' : 'You need to login'; // 'Welcome Back' 
```

Otro método útil para usar un operador ternario sería envolverlo para ejecutar condicionalmente una función o método.

```javascript
    function memberOpen(){ 
        console.log("open"); 
    } 
 
    function memberClose(){ 
        console.log("close"); 
    } 
 
    let isMember = true; 
 
    (isMember) ? memberOpen() : memberClose(); 
```

![:rocket:](//forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=2 ":cohete:") [Ejecutar código](https://repl.it/M8Ge/1)

## Ejecución de funciones con operador ternario.

También es posible ejecutar funciones utilizando el operador ternario, que a veces puede ser útil y más legible. Sin embargo, úselo con cuidado, porque entonces el código es más difícil de depurar.

```javascript
    const runFirst = true; 
    runFirst ? first() : second(); 
```

## Encadenamiento mediante el operador ternario.

También puede encadenar un operador ternario indefinidamente, de manera similar a usar `else if's` antes del final de un bloque `if` / `else` . Cada vez que se usan los dos puntos para indicar la otra parte del operador ternario, se puede establecer una nueva condición hasta que se use la condición de terminación final.

```javascript
    function displayNum(num) { 
     return  num === 3 ? 'number is 3' : num === 2 ? 'number is 2' : num === 1 ? 'number is 1 ' : 'number is not in range'; 
    } 
```

Sin embargo, este método debe usarse con moderación en los lugares correctos, como en el caso de varias `else if's` pero a veces puede dar lugar a un código más legible mediante una instrucción switch.

**Leer más:** [MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Conditional_Operator)