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

`convertCtoF(0)` debe devolver un número

```js
assert(typeof convertCtoF(0) === 'number');
```

`convertCtoF(-30)` debe devolver un valor de `-22`

```js
assert(convertCtoF(-30) === -22);
```

`convertCtoF(-10)` debe devolver un valor de `14`

```js
assert(convertCtoF(-10) === 14);
```

`convertCtoF(0)` debe devolver un valor de `32`

```js
assert(convertCtoF(0) === 32);
```

`convertCtoF(20)` debe devolver un valor de `68`

```js
assert(convertCtoF(20) === 68);
```

`convertCtoF(30)` debe devolver un valor de `86`

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
