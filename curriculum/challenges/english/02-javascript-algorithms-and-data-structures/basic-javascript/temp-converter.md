---
id: 6612d9905f3d25033c09e869
title: Temperature Converter
challengeType: 1
dashedName: temp-converter
---

# --description--

 Write a program to convert a temperature from Celsius to Fahrenheit using the formula 

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
