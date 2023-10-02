---
id: bd7123c9c549eddfaeb5bdef
title: Utiliza la notación de corchetes para encontrar el primer carácter en una cadena
challengeType: 1
videoUrl: 'https://scrimba.com/c/ca8JwhW'
forumTopicId: 18341
dashedName: use-bracket-notation-to-find-the-first-character-in-a-string
---

# --description--

La <dfn>notación de corchetes</dfn> es una forma de obtener un carácter en un índice (index) específico dentro de una cadena.

La mayoría de lenguajes de programación modernos, como JavaScript, no empiezan a contar desde 1 como lo hacen los humanos. Empiezan desde 0. Esto se conoce como indexación <dfn>basada en cero</dfn>.

Por ejemplo, el carácter en el índice 0 de la palabra `Charles` es `C`. Así que si declaramos `const firstName = "Charles"`, puedes obtener el valor de la primera letra de la cadena usando `firstName[0]`.

Ejemplo:

```js
const firstName = "Charles";
const firstLetter = firstName[0];
```

`firstLetter` tendrá una cadena con valor `C`.

# --instructions--

Utiliza notación de corchetes para encontrar el primer carácter en la variable `lastName` y asígnalo a `firstLetterOfLastName`.

**Sugerencia:** Intenta mirar el ejemplo de arriba si te quedas atascado.

# --hints--

La variable `firstLetterOfLastName` debe tener el valor de `L`.

```js
assert(firstLetterOfLastName === 'L');
```

Debes usar la notación de corchetes.

```js
assert(code.match(/firstLetterOfLastName\s*=\s*lastName\s*\[\s*\d\s*\]/));
```

# --seed--

## --after-user-code--

```js
(function(v){return v;})(firstLetterOfLastName);
```

## --seed-contents--

```js
// Setup
let firstLetterOfLastName = "";
const lastName = "Lovelace";

// Only change code below this line
firstLetterOfLastName = lastName; // Change this line
```

# --solutions--

```js
let firstLetterOfLastName = "";
const lastName = "Lovelace";

// Only change code below this line
firstLetterOfLastName = lastName[0];
```
