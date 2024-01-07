---
id: 56533eb9ac21ba0edf2244b3
title: Umrechnung von Celsius in Fahrenheit
challengeType: 1
forumTopicId: 16806
dashedName: convert-celsius-to-fahrenheit
---

# --description--

Die Formel zur Umrechnung von Celsius in Fahrenheit lautet: Celsius mal `9/5`, plus `32`.

Du erhältst eine vorgegebene Variable namens `celsius`, die für den Temperaturwert in Celsius steht. Verwende die vordefinierte Variable `fahrenheit` und weise ihr die Temperatur in Fahrenheit äquivalent zum gegebenen Temperaturwert in Celsius zu. Verwende die oben angegebene Formel um die Temperatur von Celsius in Fahrenheit umzurechnen.

# --hints--

`convertCtoF(0)` sollte eine Zahl zurückgeben

```js
assert(typeof convertCtoF(0) === 'number');
```

`convertCtoF(-30)` sollte den Wert `-22` zurückgeben

```js
assert(convertCtoF(-30) === -22);
```

`convertCtoF(-10)` sollte den Wert `14` zurückgeben

```js
assert(convertCtoF(-10) === 14);
```

`convertCtoF(0)` sollte den Wert `32` zurückgeben

```js
assert(convertCtoF(0) === 32);
```

`convertCtoF(20)` sollte den Wert `68` zurückgeben

```js
assert(convertCtoF(20) === 68);
```

`convertCtoF(30)` sollte den Wert `86` zurückgeben

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
