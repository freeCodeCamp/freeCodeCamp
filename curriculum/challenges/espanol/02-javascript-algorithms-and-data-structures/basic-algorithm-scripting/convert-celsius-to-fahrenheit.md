---
id: 56533eb9ac21ba0edf2244b3
title: Convierte Celsius a Fahrenheit
challengeType: 1
forumTopicId: 16806
dashedName: convert-celsius-to-fahrenheit
---

# --description--

La fórmula para convertir de Celsius a Fahrenheit es la temperatura en Celsius multiplicado por `9/5`, más `32`.

Se te da una variable `celsius` que representa una temperatura en Celsius. Utiliza la variable `fahrenheit` ya definida y asígnale la temperatura Fahrenheit equivalente a la temperatura Celsius dada. Utiliza la fórmula mencionada anteriormente para ayudarte a convertir la temperatura Celsius a Fahrenheit.

# --hints--

`convertToF(0)` debe devolver un número

```js
assert(typeof convertToF(0) === 'number');
```

`convertToF(-30)` debe devolver un valor de `-22`

```js
assert(convertToF(-30) === -22);
```

`convertToF(-10)` debe devolver un valor de `14`

```js
assert(convertToF(-10) === 14);
```

`convertToF(0)` debe devolver un valor de `32`

```js
assert(convertToF(0) === 32);
```

`convertToF(20)` debe devolver un valor de `68`

```js
assert(convertToF(20) === 68);
```

`convertToF(30)` debe devolver un valor de `86`

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
