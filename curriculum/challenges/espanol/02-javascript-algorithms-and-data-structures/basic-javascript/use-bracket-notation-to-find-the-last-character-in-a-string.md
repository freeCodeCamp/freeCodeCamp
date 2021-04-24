---
id: bd7123c9c451eddfaeb5bdef
title: Utiliza la notación de corchetes para encontrar el último carácter en una cadena
challengeType: 1
videoUrl: 'https://scrimba.com/c/cBZQGcv'
forumTopicId: 18342
dashedName: use-bracket-notation-to-find-the-last-character-in-a-string
---

# --description--

Con el fin de obtener la última letra de una cadena, puedes restar uno a la longitud del texto.

Por ejemplo, si `var firstName = "Charles"`, puedes obtener el valor de la última letra de la cadena usando `firstName[firstName.length - 1]`.

Ejemplo:

```js
var firstName = "Charles";
var lastLetter = firstName[firstName.length - 1];
```

`lastLetter` tendrá una cadena con valor `s`.

# --instructions--

Usa <dfn>notación de corchetes</dfn> para encontrar el último carácter en la variable `lastName`.

**Sugerencia:** Intenta mirar el ejemplo de arriba si te quedas atascado.

# --hints--

`lastLetterOfLastName` debe ser la letra `e`.

```js
assert(lastLetterOfLastName === 'e');
```

Debes usar `.length` para obtener la última letra.

```js
assert(code.match(/\.length/g).length > 0);
```

# --seed--

## --after-user-code--

```js
(function(v){return v;})(lastLetterOfLastName);
```

## --seed-contents--

```js
// Setup
var lastName = "Lovelace";

// Only change code below this line
var lastLetterOfLastName = lastName; // Change this line
```

# --solutions--

```js
var lastName = "Lovelace";
var lastLetterOfLastName = lastName[lastName.length - 1];
```
