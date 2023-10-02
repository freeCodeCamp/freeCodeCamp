---
id: 587d7b8a367417b2b2512b4d
title: Utiliza sintaxis de desestructuración para pasar un objeto como parámetro de función
challengeType: 1
forumTopicId: 301217
dashedName: use-destructuring-assignment-to-pass-an-object-as-a-functions-parameters
---

# --description--

En algunos casos, se puede desestructurar el objeto en un propio argumento de función.

Considera el siguiente código:

```js
const profileUpdate = (profileData) => {
  const { name, age, nationality, location } = profileData;

}
```

Esto desestructura efectivamente el objeto enviado a la función. Esto también se puede hacer en el lugar:

```js
const profileUpdate = ({ name, age, nationality, location }) => {

}
```

Cuando `profileData` es pasado a la función anterior, los valores son desestructurados desde el parámetro de función para su uso dentro de la función.

# --instructions--

Utiliza la sintaxis de desestructuración dentro del argumento de la función `half` para enviar solo `max` y `min` dentro de la función.

# --hints--

`stats` debe ser un objeto (`object`).

```js
assert(typeof stats === 'object');
```

`half(stats)` debe ser `28.015`

```js
assert(half(stats) === 28.015);
```

Se debe utilizar desestructuración.

```js
assert(__helpers.removeWhiteSpace(code).match(/half=\({\w+,\w+}\)/));
```

Se debe usar un parámetro desestructurado.

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
