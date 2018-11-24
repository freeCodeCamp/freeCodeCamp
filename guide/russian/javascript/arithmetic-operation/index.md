---
title: Arithmetic Operation
localeTitle: Арифметическая операция
---
JavaScript предоставляет пользователю пять арифметических операторов: `+` , `-` , `*` , `/` и `%` . Операторы для сложения, вычитания, умножения, деления и остатка соответственно.

## прибавление

**Синтаксис**

`a + b`

**использование**
```
2 + 3          // returns 5 
 true + 2       // interprets true as 1 and returns 3 
 false + 5      // interprets false as 0 and returns 5 
 true + "bar"   // concatenates the boolean value and returns "truebar" 
 5 + "foo"      // concatenates the string and the number and returns "5foo" 
 "foo" + "bar"  // concatenates the strings and returns "foobar" 
```

_Подсказка:_ есть удобный [приращение](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Arithmetic_Operators#Increment_() ), который является отличным ярлыком при добавлении чисел на 1.

## Вычитание

**Синтаксис**

`a - b`

**использование**
```
2 - 3      // returns -1 
 3 - 2      // returns 1 
 false - 5  // interprets false as 0 and returns -5 
 true + 3   // interprets true as 1 and returns 4 
 5 + "foo"  // returns NaN (Not a Number) 
```

_Подсказка:_ есть удобный [декремент](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Arithmetic_Operators#Decrement_(--) ), который является отличным ярлыком, когда вы вычитаете числа на 1.

## умножение

**Синтаксис**

`a * b`

**использование**
```
2 * 3                // returns 6 
 3 * -2               // returns -6 
 false * 5            // interprets false as 0 and returns 0 
 true * 3             // interprets true as 1 and returns 3 
 5 * "foo"            // returns NaN (Not a Number) 
 Infinity * 0         // returns NaN 
 Infinity * Infinity  // returns Infinity 
```

## разделение

**Синтаксис**

`a / b`

**использование**
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

## остаток

**Синтаксис**

`a % b`

**использование**
```
3 % 2          // returns 1 
 true % 5       // interprets true as 1 and returns 1 
 false % 4      // interprets false as 0 and returns 0 
 3 % "bar"      // returns NaN 
```

## инкремент

**Синтаксис**

`a++ or ++a`

**использование**
```
// Postfix 
 x = 3;  // declare a variable 
 y = x++;        // y = 4, x = 3 
 
 // Prefix 
 var a = 2; 
 b = ++a; // a = 3, b = 3 
```

## декремент

**Синтаксис**

`a-- or --a`

**использование**
```
// Postfix 
 x = 3;  // declare a variable 
 y = x--;        // y = 3, x = 3 
 
 // Prefix 
 var a = 2; 
 b = --a; // a = 1, b = 1 
```

_!Важный!_ Как вы можете видеть, вы **не можете** выполнять какие-либо операции с `Infinity` .

Источник: удивительный [MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Arithmetic_Operators) .