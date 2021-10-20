---
id: 587d7db5367417b2b2512b96
title: Haz coincidir las letras del alfabeto
challengeType: 1
forumTopicId: 301354
dashedName: match-letters-of-the-alphabet
---

# --description--

Has visto cómo puedes usar los <dfn>conjuntos de caracteres</dfn> para especificar un grupo de caracteres a coincidir, pero eso requiere escribir mucho cuando necesitas coincidir con un amplio rango de caracteres (por ejemplo, cada letra en el alfabeto). Afortunadamente, hay una funcionalidad incorporada que hace esto corto y sencillo.

Dentro de un conjunto de caracteres, puedes definir un rango de caracteres a coincidir usando un carácter de guion: `-`.

Por ejemplo, para hacer coincidir las letras minúsculas desde la `a` a la `e` usarías `[a-e]`.

```js
let catStr = "cat";
let batStr = "bat";
let matStr = "mat";
let bgRegex = /[a-e]at/;
catStr.match(bgRegex);
batStr.match(bgRegex);
matStr.match(bgRegex);
```

En orden, las tres llamadas a `match` devolverán los valores `["cat"]`, `["bat"]` y `null`.

# --instructions--

Haz coincidir todas las letras en la cadena `quoteSample`.

**Nota:** Asegúrate de hacer coincidir tanto las letras mayúsculas como minúsculas.

# --hints--

Tu expresión regular `alphabetRegex` debe coincidir con 35 elementos.

```js
assert(result.length == 35);
```

Tu expresión regular `alphabetRegex` debe utilizar la bandera global.

```js
assert(alphabetRegex.flags.match(/g/).length == 1);
```

Tu expresión regular `alphabetRegex` debe utilizar la bandera que no distingue entre mayúsculas y minúsculas.

```js
assert(alphabetRegex.flags.match(/i/).length == 1);
```

# --seed--

## --seed-contents--

```js
let quoteSample = "The quick brown fox jumps over the lazy dog.";
let alphabetRegex = /change/; // Change this line
let result = alphabetRegex; // Change this line
```

# --solutions--

```js
let quoteSample = "The quick brown fox jumps over the lazy dog.";
let alphabetRegex = /[a-z]/gi; // Change this line
let result = quoteSample.match(alphabetRegex); // Change this line
```
