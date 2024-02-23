---
id: 587d7db4367417b2b2512b93
title: Encuentra más que la primera coincidencia
challengeType: 1
forumTopicId: 301342
dashedName: find-more-than-the-first-match
---

# --description--

Hasta ahora, sólo has podido extraer o buscar un patrón una vez.

```js
let testStr = "Repeat, Repeat, Repeat";
let ourRegex = /Repeat/;
testStr.match(ourRegex);
```

Aquí `match` devolverá `["Repeat"]`.

Para buscar o extraer un patrón más de una vez, puedes utilizar la bandera `g`.

```js
let repeatRegex = /Repeat/g;
testStr.match(repeatRegex);
```

Y aquí `match` devuelve el valor `["Repeat", "Repeat", "Repeat"]`

# --instructions--

Utilizando la expresión regular `starRegex`, encuentra y extrae ambas palabras `Twinkle` de la cadena `twinkleStar`.

**Nota**  
En tu expresión regular puedes utilizar múltiples banderas, como `/search/gi`

# --hints--

La expresión regular `starRegex` debe utilizar la bandera global `g`

```js
assert(starRegex.flags.match(/g/).length == 1);
```

Tu expresión regular `starRegex` debe utilizar la bandera que no distingue entre mayúsculas y minúsculas `i`

```js
assert(starRegex.flags.match(/i/).length == 1);
```

Tu coincidencia (match) debe coincidir con ambas apariciones de la palabra `Twinkle`

```js
assert(
  result.sort().join() ==
    twinkleStar
      .match(/twinkle/gi)
      .sort()
      .join()
);
```

Tu coincidencia `result` debe tener dos elementos en él.

```js
assert(result.length == 2);
```

# --seed--

## --seed-contents--

```js
let twinkleStar = "Twinkle, twinkle, little star";
let starRegex = /change/; // Change this line
let result = twinkleStar; // Change this line
```

# --solutions--

```js
let twinkleStar = "Twinkle, twinkle, little star";
let starRegex = /twinkle/gi;
let result = twinkleStar.match(starRegex);
```
