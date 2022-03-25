---
id: bd7123c9c450eddfaeb5bdef
title: Utiliza la notación de corchetes para encontrar el enésimo carácter en una cadena
challengeType: 1
videoUrl: 'https://scrimba.com/c/cWPVJua'
forumTopicId: 18343
dashedName: use-bracket-notation-to-find-the-nth-character-in-a-string
---

# --description--

También puedes usar <dfn>notación de corchetes</dfn> para obtener el carácter en otras posiciones dentro de una cadena.

Recuerda que las computadoras empiezan a contar desde `0`, así que el primer carácter es en realidad el carácter cero.

Ejemplo:

```js
const firstName = "Ada";
const secondLetterOfFirstName = firstName[1];
```

`secondLetterOfFirstName` tendrá una cadena con valor `d`.

# --instructions--

Intentemos establecer `thirdLetterOfLastName` (tercera letra del apellido) para que sea igual a la tercera letra de la variable `lastName` usando notación de corchetes.

**Sugerencia:** Intenta mirar el ejemplo de arriba si te quedas atascado.

# --hints--

La variable `thirdLetterOfLastName` debe tener el valor de `v`.

```js
assert(thirdLetterOfLastName === 'v');
```

Debes usar la notación de corchetes.

```js
assert(code.match(/thirdLetterOfLastName\s*=\s*lastName\s*\[\s*\d\s*\]/));
```

# --seed--

## --after-user-code--

```js
(function(v){return v;})(thirdLetterOfLastName);
```

## --seed-contents--

```js
// Setup
const lastName = "Lovelace";

// Only change code below this line
const thirdLetterOfLastName = lastName; // Change this line
```

# --solutions--

```js
const lastName = "Lovelace";
const thirdLetterOfLastName = lastName[2];
```
