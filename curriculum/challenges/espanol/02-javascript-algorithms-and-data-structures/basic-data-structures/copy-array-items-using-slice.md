---
id: 587d7b7a367417b2b2512b12
title: Copia elementos de un arreglo usando slice()
challengeType: 1
forumTopicId: 301158
dashedName: copy-array-items-using-slice
---

# --description--

El siguiente método que cubriremos es `slice()`. En lugar de modificar un arreglo, `slice()` copia o *extrae* un número determinado de elementos a un nuevo arreglo, dejando intacto el arreglo al que se llama. `slice()` toma sólo 2 parámetros: el primero es el índice en el que se inicia la extracción, y el segundo es el índice en el que se detiene la extracción (la extracción se producirá hasta el índice, pero sin incluir el elemento en este índice). Considera esto:

```js
let weatherConditions = ['rain', 'snow', 'sleet', 'hail', 'clear'];

let todaysWeather = weatherConditions.slice(1, 3);
```

`todaysWeather` tendrá el valor `['snow', 'sleet']`, mientras que `weatherConditions` todavía tendrá `['rain', 'snow', 'sleet', 'hail', 'clear']`.

En efecto, hemos creado un nuevo arreglo extrayendo elementos de un arreglo existente.

# --instructions--

Hemos definido una función, `forecast`, que toma un arreglo como argumento. Modifica la función usando `slice()` para extraer información del arreglo de argumentos y devuelve un nuevo arreglo que contenga los elementos `warm` y `sunny`.

# --hints--

`forecast` debe devolver `["warm", "sunny"]`

```js
assert.deepEqual(
  forecast(['cold', 'rainy', 'warm', 'sunny', 'cool', 'thunderstorms']),
  ['warm', 'sunny']
);
```

La función `forecast` debe utilizar el método `slice()`

```js
assert(/\.slice\(/.test(code));
```

# --seed--

## --seed-contents--

```js
function forecast(arr) {
  // Only change code below this line

  return arr;
}

// Only change code above this line
console.log(forecast(['cold', 'rainy', 'warm', 'sunny', 'cool', 'thunderstorms']));
```

# --solutions--

```js
function forecast(arr) {
  return arr.slice(2,4);
}
```
