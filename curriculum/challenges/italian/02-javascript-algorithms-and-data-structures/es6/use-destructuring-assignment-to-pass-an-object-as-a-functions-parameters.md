---
id: 587d7b8a367417b2b2512b4d
title: Usare l'assegnazione destrutturante per passare un oggetto come parametro a una funzione
challengeType: 1
forumTopicId: 301217
dashedName: use-destructuring-assignment-to-pass-an-object-as-a-functions-parameters
---

# --description--

In alcuni casi, è possibile destrutturare l'oggetto in un argomento di una funzione.

Considera il codice qui sotto:

```js
const profileUpdate = (profileData) => {
  const { name, age, nationality, location } = profileData;

}
```

Questo codice destruttura efficacemente l'oggetto passato alla funzione. Può anche essere fatto sul posto:

```js
const profileUpdate = ({ name, age, nationality, location }) => {

}
```

Quando `profileData` viene passato alla funzione qui sopra, i valori del parametro vengono destrutturati per l'utilizzo all'interno della funzione.

# --instructions--

Usa l'assegnazione destrutturante all'interno dell'argomento della funzione `half` per inviare solo `max` e `min` all'interno della funzione.

# --hints--

`stats` dovrebbe essere un `object`.

```js
assert(typeof stats === 'object');
```

`half(stats)` dovrebbe essere `28.015`

```js
assert(half(stats) === 28.015);
```

Dovresti ricorrere alla destrutturazione.

```js
assert(__helpers.removeWhiteSpace(code).match(/half=\({\w+,\w+}\)/));
```

Dovresti utilizzare il parametro destrutturato.

```js
assert(!code.match(/stats\.max|stats\.min/));
```

# --seed--

## --seed-contents--

```js
const stats = {
  max: 56.78,
  standard_deviation: 4.34,
  median: 34.54,
  mode: 23.87,
  min: -0.75,
  average: 35.85
};

// Only change code below this line
const half = (stats) => (stats.max + stats.min) / 2.0; 
// Only change code above this line
```

# --solutions--

```js
const stats = {
  max: 56.78,
  standard_deviation: 4.34,
  median: 34.54,
  mode: 23.87,
  min: -0.75,
  average: 35.85
};

const half = ( {max, min} ) => (max + min) / 2.0;
```
