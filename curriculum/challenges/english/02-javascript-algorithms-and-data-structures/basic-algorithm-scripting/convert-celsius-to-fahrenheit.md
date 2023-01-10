---
id: 56533eb9ac21ba0edf2244b3
title: Convert Celsius to Fahrenheit
challengeType: 1
forumTopicId: 16806
dashedName: convert-celsius-to-fahrenheit
---

# --description--

The formula to convert from Celsius to Fahrenheit is the temperature in Celsius times `9/5`, plus `32`.

You are given a variable `celsius` representing a temperature in Celsius. Use the variable `fahrenheit` already defined and assign it the Fahrenheit temperature equivalent to the given Celsius temperature. Use the formula mentioned above to help convert the Celsius temperature to Fahrenheit.

# --hints--

`convertCtoF(0)` should return a number

```js
assert(typeof convertCtoF(0) === 'number');
```

`convertCtoF(-30)` should return a value of `-22`

```js
assert(convertCtoF(-30) === -22);
```

`convertCtoF(-10)` should return a value of `14`

```js
assert(convertCtoF(-10) === 14);
```

`convertCtoF(0)` should return a value of `32`

```js
assert(convertCtoF(0) === 32);
```

`convertCtoF(20)` should return a value of `68`

```js
assert(convertCtoF(20) === 68);
```

`convertCtoF(30)` should return a value of `86`

```js
assert(convertCtoF(30) === 86);
```

# --seed--

## --seed-contents--

```js
function convertCtoF(celsius) {
  let fahrenheit;
  return fahrenheit;
}

convertCtoF(30);
```

# --solutions--

```js
function convertCtoF(celsius) {
  let fahrenheit = celsius * 9/5 + 32;
  return fahrenheit;
}

convertCtoF(30);
```
