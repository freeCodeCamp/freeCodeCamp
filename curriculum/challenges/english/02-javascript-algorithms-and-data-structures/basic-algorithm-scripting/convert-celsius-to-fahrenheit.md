---
id: 56533eb9ac21ba0edf2244b3
title: Convert Celsius to Fahrenheit
challengeType: 1
forumTopicId: 16806
dashedName: convert-celsius-to-fahrenheit
---

# --description--

The algorithm to convert from Celsius to Fahrenheit is the temperature in Celsius times `9/5`, plus `32`.

You are given a variable `celsius` representing a temperature in Celsius. Use the variable `fahrenheit` already defined and assign it the Fahrenheit temperature equivalent to the given Celsius temperature. Use the algorithm mentioned above to help convert the Celsius temperature to Fahrenheit.

# --hints--

`convertToF(0)` should return a number

```js
assert(typeof convertToF(0) === 'number');
```

`convertToF(-30)` should return a value of `-22`

```js
assert(convertToF(-30) === -22);
```

`convertToF(-10)` should return a value of `14`

```js
assert(convertToF(-10) === 14);
```

`convertToF(0)` should return a value of `32`

```js
assert(convertToF(0) === 32);
```

`convertToF(20)` should return a value of `68`

```js
assert(convertToF(20) === 68);
```

`convertToF(30)` should return a value of `86`

```js
assert(convertToF(30) === 86);
```

# --seed--

## --seed-contents--

```js
function convertToF(celsius) {
  let fahrenheit;
  return fahrenheit;
}

convertToF(30);
```

# --solutions--

```js
function convertToF(celsius) {
  let fahrenheit = celsius * 9/5 + 32;

  return fahrenheit;
}

convertToF(30);
```
