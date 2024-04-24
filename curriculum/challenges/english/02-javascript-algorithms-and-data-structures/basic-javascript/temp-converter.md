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

`C` means Celsius and `F` means Fahrenheit.

# --hints--

`30` should return `86`

```js
assert(celsiusToFahrenheit(30)===86)
```

# --seed--
## --seed-contents--

```js
function celsiusToFahrenheit(celsius) {
    // Only change code below this line
}

celsiusToFahrenheit(30)

```

# --solutions--

```js
function celsiusToFahrenheit(celsius) {
    return (celsius * 9/5) + 32;
}

celsiusToFahrenheit(30)
```
