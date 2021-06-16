---
id: 56533eb9ac21ba0edf2244b3
title: Convertire i gradi Celsius in Fahrenheit
challengeType: 1
forumTopicId: 16806
dashedName: convert-celsius-to-fahrenheit
---

# --description--

L'algoritmo per convertire i gradi da Celsius a Fahrenheit è la temperatura in Celsius moltiplicata per `9/5`, più `32`.

Ti viene data una variabile `celsius` che rappresenta una temperatura in Celsius. Usa la variabile `fahrenheit` già definita e assegnale la temperatura Fahrenheit equivalente alla temperatura Celsius specificata. Usa l'algoritmo definito sopra per aiutarti a convertire la temperatura da Celsius a Fahrenheit.

# --hints--

`convertToF(0)` dovrebbe restituire un numero

```js
assert(typeof convertToF(0) === 'number');
```

`convertToF(-30)` dovrebbe restituire un valore di `-22`

```js
assert(convertToF(-30) === -22);
```

`convertToF(-10)` dovrebbe restituire un valore di `14`

```js
assert(convertToF(-10) === 14);
```

`convertToF(0)` dovrebbe restituire un valore di `32`

```js
assert(convertToF(0) === 32);
```

`convertToF(20)` dovrebbe restituire un valore di `68`

```js
assert(convertToF(20) === 68);
```

`convertToF(30)` dovrebbe restituire un valore di `86`

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
