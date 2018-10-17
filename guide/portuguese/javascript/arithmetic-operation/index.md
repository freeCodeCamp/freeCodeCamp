---
title: Arithmetic Operation
localeTitle: Operação aritmética
---
JavaScript fornece ao usuário cinco operadores aritméticos: `+` , `-` , `*` , `/` e `%` . Os operadores são para adição, subtração, multiplicação, divisão e resto, respectivamente.

## Adição

**Sintaxe**

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

_Dica:_ Há um [incremento](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Arithmetic_Operators#Increment_() útil) operador que é um ótimo atalho quando você está adicionando números por 1.

## Subtração

**Sintaxe**

`a - b`

**Uso**
```
2 - 3      // returns -1 
 3 - 2      // returns 1 
 false - 5  // interprets false as 0 and returns -5 
 true + 3   // interprets true as 1 and returns 4 
 5 + "foo"  // returns NaN (Not a Number) 
```

_Dica:_ Há um [decremento](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Arithmetic_Operators#Decrement_(--) útil) operador que é um ótimo atalho quando você está subtraindo números por 1.

## Multiplicação

**Sintaxe**

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

## Divisão

**Sintaxe**

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

## Restante

**Sintaxe**

`a % b`

**Uso**
```
3 % 2          // returns 1 
 true % 5       // interprets true as 1 and returns 1 
 false % 4      // interprets false as 0 and returns 0 
 3 % "bar"      // returns NaN 
```

## Incremento

**Sintaxe**

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

**Sintaxe**

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

_!Importante!_ Como você pode ver, **não** é **possível** executar qualquer tipo de operação no `Infinity` .

Fonte: O incrível [MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Arithmetic_Operators) .