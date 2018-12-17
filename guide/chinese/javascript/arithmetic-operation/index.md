---
title: Arithmetic Operation
localeTitle: 算术运算
---
JavaScript为用户提供了五个算术运算符： `+` ， `-` ， `*` ， `/`和`%` 。运算符分别用于加法，减法，乘法，除法和余数。

## 加成

**句法**

`a + b`

**用法**
```
2 + 3          // returns 5 
 true + 2       // interprets true as 1 and returns 3 
 false + 5      // interprets false as 0 and returns 5 
 true + "bar"   // concatenates the boolean value and returns "truebar" 
 5 + "foo"      // concatenates the string and the number and returns "5foo" 
 "foo" + "bar"  // concatenates the strings and returns "foobar" 
```

_提示：_有一个方便的 <a href='https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Arithmetic_Operators#Increment' target='_blank' rel='nofollow'>[增量]</a>(++)运算符，当你将数字加1时，这是一个很好的快捷方式。

## 减法

**句法**

`a - b`

**用法**
```
2 - 3      // returns -1 
 3 - 2      // returns 1 
 false - 5  // interprets false as 0 and returns -5 
 true + 3   // interprets true as 1 and returns 4 
 5 + "foo"  // returns NaN (Not a Number) 
```

_提示：_有一个方便的 <a href='https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Arithmetic_Operators#Decrement' target='_blank' rel='nofollow'>[减量]</a>(--)运算符，当你用1减去数字时，这是一个很好的捷径。

## 乘法

**句法**

`a * b`

**用法**
```
2 * 3                // returns 6 
 3 * -2               // returns -6 
 false * 5            // interprets false as 0 and returns 0 
 true * 3             // interprets true as 1 and returns 3 
 5 * "foo"            // returns NaN (Not a Number) 
 Infinity * 0         // returns NaN 
 Infinity * Infinity  // returns Infinity 
```

## 师

**句法**

`a / b`

**用法**
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

## 剩余

**句法**

`a % b`

**用法**
```
3 % 2          // returns 1 
 true % 5       // interprets true as 1 and returns 1 
 false % 4      // interprets false as 0 and returns 0 
 3 % "bar"      // returns NaN 
```

## 增量

**句法**

`a++ or ++a`

**用法**
```
// Postfix 
 x = 3;  // declare a variable 
 y = x++;        // y = 4, x = 3 
 
 // Prefix 
 var a = 2; 
 b = ++a; // a = 3, b = 3 
```

## 递减

**句法**

`a-- or --a`

**用法**
```
// Postfix 
 x = 3;  // declare a variable 
 y = x--;        // y = 3, x = 3 
 
 // Prefix 
 var a = 2; 
 b = --a; // a = 1, b = 1 
```

_！重要！_如您所见，您**无法**对`Infinity`执行任何操作。

资料来源：令人惊叹的<a href='https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Arithmetic_Operators' target='_blank' rel='nofollow'>[MDN]</a>。
