---
id: 6612d9905f3d25033c09e869
title: Temperature Converter
challengeType: 1
dashedName: temp-converter
---

# --description--

 **Introduction**

Need to convert Celsius temperatures to Fahrenheit quickly? Look no further! In this challenge, you'll write a JavaScript program to handle this conversion using a provided formula.


```js
C/5 = (F-32)/9
```

<h2>Hinglish</h2>

**Introduction**

Celsius temperatures to Fahrenheit mein tezi se convert karna chahte hain? Toh yahan dekhein! Is challenge mein, aapko ek JavaScript program likhna hoga jo ek di gayi formula ka istemal karke ye conversion handle karega.

```js
C/5 = (F-32)/9
```

# --instructions--

Write a program to convert the temperature from Celsius to Fahrenheit using the formula C/5 = (F-32)/9.

Ek program likho jo temperature ko Celsius se Fahrenheit mein convert kare, formula istemal karke C/5 = (F-32)/9.


`C` means Celsius and `F` means Fahrenheit.

# --hints--

# --hints--
Variable `fahrenheit` should return `86`

```js
assert(fahrenheit===86)
```

# --seed--
## --seed-contents--

```js
var celsius = 30;
// Only change code below this line

```

# --solutions--

```js

var celsius = 30;

// Convert Celsius to Fahrenheit using the provided formula
var fahrenheit = (celsius * 9 / 5) + 32;

```
