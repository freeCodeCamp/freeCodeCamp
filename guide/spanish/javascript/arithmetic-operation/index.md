---
title: Arithmetic Operation
localeTitle: Operación aritmética
---
JavaScript proporciona al usuario cinco operadores aritméticos: `+` , `-` , `*` , `/` y `%` . Los operadores son para suma, resta, multiplicación, división y resto respectivamente.

## Adición

**Sintaxis**

`a + b`

**Uso**
```
2 + 3          // returns 5 
 true + 2       // interprets true as 1 and returns 3 
 false + 5      // interprets false as 0 and returns 5 
 true + "bar"   // concatenates the boolean value and returns "truebar" 
 5 + "foo"      // concatenates the string and the number and returns "5foo" 
 "foo" + "bar"  // concatenates the strings and returns "foobar" 
```

_Consejo:_ Hay un operador de [incremento](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Arithmetic_Operators#Increment_() práctico que es un gran atajo cuando agregas números en 1.

## Sustracción

**Sintaxis**

`a - b`

**Uso**
```
2 - 3      // returns -1 
 3 - 2      // returns 1 
 false - 5  // interprets false as 0 and returns -5 
 true + 3   // interprets true as 1 and returns 4 
 5 + "foo"  // returns NaN (Not a Number) 
```

_Sugerencia:_ hay un operador de [reducción](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Arithmetic_Operators#Decrement_(--) útil que es un gran atajo cuando estás restando números a 1.

## Multiplicación

**Sintaxis**

`a * b`

**Uso**
```
2 * 3                // returns 6 
 3 * -2               // returns -6 
 false * 5            // interprets false as 0 and returns 0 
 true * 3             // interprets true as 1 and returns 3 
 5 * "foo"            // returns NaN (Not a Number) 
 Infinity * 0         // returns NaN 
 Infinity * Infinity  // returns Infinity 
```

## División

**Sintaxis**

`a / b`

**Uso**
```
3 / 2                // returns 1.5 
 3.0 / 2/0            // returns 1.5 
 3 / 0                // returns Infinity 
 3.0 / 0.0            // returns Infinity 
 -3 / 0               // returns -Infinity 
 false / 5            // interprets false as 0 and returns 0 
 true / 2             // interprets true a 1 and returns 0.5 
 5 + "foo"            // returns NaN (Not a Number) 
 Infinity / Infinity  // returns NaN 
```

## Recordatorio

**Sintaxis**

`a % b`

**Uso**
```
3 % 2          // returns 1 
 true % 5       // interprets true as 1 and returns 1 
 false % 4      // interprets false as 0 and returns 0 
 3 % "bar"      // returns NaN 
```

## Incremento

**Sintaxis**

`a++ or ++a`

**Uso**
```
// Postfix 
 x = 3;  // declare a variable 
 y = x++;        // y = 4, x = 3 
 
 // Prefix 
 var a = 2; 
 b = ++a; // a = 3, b = 3 
```

## Decremento

**Sintaxis**

`a-- or --a`

**Uso**
```
// Postfix 
 x = 3;  // declare a variable 
 y = x--;        // y = 3, x = 3 
 
 // Prefix 
 var a = 2; 
 b = --a; // a = 1, b = 1 
```

_!¡Importante!_ Como puede ver, no **puede** realizar ningún tipo de operaciones en `Infinity` .

Fuente: El increíble [MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Arithmetic_Operators) .