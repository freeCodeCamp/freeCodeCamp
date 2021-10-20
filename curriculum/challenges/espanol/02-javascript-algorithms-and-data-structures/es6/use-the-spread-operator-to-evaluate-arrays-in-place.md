---
id: 587d7b89367417b2b2512b48
title: Utiliza el operador de propagación para evaluar los arreglos en el lugar
challengeType: 1
forumTopicId: 301222
dashedName: use-the-spread-operator-to-evaluate-arrays-in-place
---

# --description--

ES6 introduce el <dfn>operador de propagación</dfn>, que nos permite expandir arreglos y otras expresiones en lugares donde se esperan múltiples parámetros o elementos.

El siguiente código ES5 usa `apply()` para calcular el valor máximo en un arreglo:

```js
var arr = [6, 89, 3, 45];
var maximus = Math.max.apply(null, arr);
```

`maximus` tendrá un valor de `89`.

Tuvimos que usar `Math.max.apply(null, arr)` porque `Math.max(arr)` devuelve `NaN`. `Math.max()` espera argumentos separados por comas, pero no un arreglo. El operador de propagación hace que esta sintaxis sea más fácil de leer y mantener.

```js
const arr = [6, 89, 3, 45];
const maximus = Math.max(...arr);
```

`maximus` tendría un valor de `89`.

`...arr` devuelve un arreglo desempacado. En otras palabras, *propaga* el arreglo. Sin embargo, el operador de propagación sólo funciona en el lugar, como en un argumento de función o en un arreglo literal. El siguiente código no funcionará:

```js
const spreaded = ...arr;
```

# --instructions--

Copia todo el contenido de `arr1` en otro arreglo `arr2` usando el operador de propagación.

# --hints--

`arr2` debe ser una copia correcta de `arr1`.

```js
assert(arr2.every((v, i) => v === arr1[i]) && arr2.length);
```

El operador de propagación `...` debe utilizarse para duplicar `arr1`.

```js
assert(code.match(/Array\(\s*\.\.\.arr1\s*\)|\[\s*\.\.\.arr1\s*\]/));
```

`arr2` debe permanecer sin cambios cuando `arr1` cambie.

```js
assert((arr1, arr2) => {
  arr1.push('JUN');
  return arr2.length < arr1.length;
});
```

# --seed--

## --seed-contents--

```js
const arr1 = ['JAN', 'FEB', 'MAR', 'APR', 'MAY'];
let arr2;

arr2 = [];  // Change this line

console.log(arr2);
```

# --solutions--

```js
const arr1 = ['JAN', 'FEB', 'MAR', 'APR', 'MAY'];
let arr2;

arr2 = [...arr1];
```
