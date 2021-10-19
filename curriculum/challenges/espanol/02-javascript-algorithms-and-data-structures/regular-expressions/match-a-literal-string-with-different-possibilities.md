---
id: 587d7db4367417b2b2512b90
title: Coincide una cadena literal con diferentes posibilidades
challengeType: 1
forumTopicId: 301345
dashedName: match-a-literal-string-with-different-possibilities
---

# --description--

Al utilizar expresiones regulares como `/coding/`, puedes buscar el patrón `coding` en otra cadena.

Esto es muy potente al buscar cadenas individuales, pero está limitado a un solo patrón. Puedes buscar múltiples patrones usando el operador `alternation` o `OR`: `|`.

Este operador coincide con los patrones antes o después de él. Por ejemplo, si deseas coincidir con las cadenas `yes` o `no`, la expresión regular que quieres es `/yes|no/`.

También puedes buscar más de dos patrones. Puedes hacer esto añadiendo más patrones con más operadores `OR` separándolos, como `/yes|no|maybe/`.

# --instructions--

Completa la expresión regular `petRegex` para que coincida con las mascotas `dog`, `cat`, `bird`, o `fish`.

# --hints--

Tu expresión regular `petRegex` debe devolver `true` para la cadena `John has a pet dog.`

```js
petRegex.lastIndex = 0;
assert(petRegex.test('John has a pet dog.'));
```

Tu expresión regular `petRegex` debe devolver `false` para la cadena `Emma has a pet rock.`

```js
petRegex.lastIndex = 0;
assert(!petRegex.test('Emma has a pet rock.'));
```

Tu expresión regular `petRegex` debe devolver `true` para la cadena `Emma has a pet bird.`

```js
petRegex.lastIndex = 0;
assert(petRegex.test('Emma has a pet bird.'));
```

Tu expresión regular `petRegex` debe devolver `true` para la cadena `Liz has a pet cat.`

```js
petRegex.lastIndex = 0;
assert(petRegex.test('Liz has a pet cat.'));
```

Tu expresión regular `petRegex` debe devolver `false` para la cadena `Kara has a pet dolphin.`

```js
petRegex.lastIndex = 0;
assert(!petRegex.test('Kara has a pet dolphin.'));
```

Tu expresión regular `petRegex` debe devolver `true` para la cadena `Alice has a pet fish.`

```js
petRegex.lastIndex = 0;
assert(petRegex.test('Alice has a pet fish.'));
```

Tu expresión regular `petRegex` debe devolver `false` para la cadena `Jimmy has a pet computer.`

```js
petRegex.lastIndex = 0;
assert(!petRegex.test('Jimmy has a pet computer.'));
```

# --seed--

## --seed-contents--

```js
let petString = "James has a pet cat.";
let petRegex = /change/; // Change this line
let result = petRegex.test(petString);
```

# --solutions--

```js
let petString = "James has a pet cat.";
let petRegex = /dog|cat|bird|fish/; // Change this line
let result = petRegex.test(petString);
```
