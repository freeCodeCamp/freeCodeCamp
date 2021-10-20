---
id: 587d7db4367417b2b2512b92
title: Extrae coincidencias
challengeType: 1
forumTopicId: 301340
dashedName: extract-matches
---

# --description--

Hasta ahora, sólo has estado comprobando si un patrón existe o no dentro de una cadena. También puedes extraer las coincidencias encontradas con el método `.match()`.

Para utilizar el método `.match()`, aplica el método a una cadena y pasa la expresión regular dentro de los paréntesis.

Este es un ejemplo:

```js
"Hello, World!".match(/Hello/);
let ourStr = "Regular expressions";
let ourRegex = /expressions/;
ourStr.match(ourRegex);
```

Aquí el primer `match` devolverá `["Hello"]` y el segundo devolverá `["expressions"]`.

Ten en cuenta que la sintaxis `.match` es lo "opuesto" al método `.test` que has estado utilizando hasta ahora:

```js
'string'.match(/regex/);
/regex/.test('string');
```

# --instructions--

Aplica el método `.match()` para extraer la cadena `coding`.

# --hints--

`result` debe contener la cadena `coding`

```js
assert(result.join() === 'coding');
```

Tu expresión regular `codingRegex` debe buscar la cadena `coding`

```js
assert(codingRegex.source === 'coding');
```

Debes utilizar el método `.match()`.

```js
assert(code.match(/\.match\(.*\)/));
```

# --seed--

## --seed-contents--

```js
let extractStr = "Extract the word 'coding' from this string.";
let codingRegex = /change/; // Change this line
let result = extractStr; // Change this line
```

# --solutions--

```js
let extractStr = "Extract the word 'coding' from this string.";
let codingRegex = /coding/; // Change this line
let result = extractStr.match(codingRegex); // Change this line
```
