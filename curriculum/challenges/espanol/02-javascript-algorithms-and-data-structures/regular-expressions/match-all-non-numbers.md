---
id: 587d7db8367417b2b2512ba1
title: Coincide con todos los caracteres no numéricos
challengeType: 1
forumTopicId: 301347
dashedName: match-all-non-numbers
---

# --description--

El último desafío mostró cómo buscar dígitos usando el atajo `\d` con una `d` minúscula. También puedes buscar caracteres que no sean dígitos usando un atajo similar que utilice una `D` mayúscula en su lugar.

El atajo para buscar caracteres que no sean dígitos es `\D`. Esto es igual a la clase de caracteres `[^0-9]`, el cual busca un único carácter que no sea un número entre cero y nueve.

# --instructions--

Usa la clase de caracteres abreviada `\D` para contar cuántos caracteres que no sean dígitos hay en los títulos de las películas.

# --hints--

Tu expresión regular debe usar el carácter de atajo que coincida con caracteres que no sean dígitos

```js
assert(/\\D/.test(noNumRegex.source));
```

Tu expresión regular debe usar la bandera global.

```js
assert(noNumRegex.global);
```

Tu expresión regular no debe encontrar caracteres que no sean dígitos en la cadena `9`.

```js
assert('9'.match(noNumRegex) == null);
```

Tu expresión regular debe encontrar 6 caracteres que no sean dígitos en la cadena `Catch 22`.

```js
assert('Catch 22'.match(noNumRegex).length == 6);
```

Tu expresión regular debe encontrar 11 caracteres que no sean dígitos en la cadena `101 Dalmatians`.

```js
assert('101 Dalmatians'.match(noNumRegex).length == 11);
```

Tu expresión regular debe encontrar 15 caracteres que no sean dígitos en la cadena `One, Two, Three`.

```js
assert('One, Two, Three'.match(noNumRegex).length == 15);
```

Tu expresión regular debe encontrar 12 caracteres que no sean dígitos en la cadena `21 Jump Street`.

```js
assert('21 Jump Street'.match(noNumRegex).length == 12);
```

Tu expresión regular debe encontrar 17 caracteres que no sean dígitos en la cadena `2001: A Space Odyssey`.

```js
assert('2001: A Space Odyssey'.match(noNumRegex).length == 17);
```

# --seed--

## --seed-contents--

```js
let movieName = "2001: A Space Odyssey";
let noNumRegex = /change/; // Change this line
let result = movieName.match(noNumRegex).length;
```

# --solutions--

```js
let movieName = "2001: A Space Odyssey";
let noNumRegex = /\D/g; // Change this line
let result = movieName.match(noNumRegex).length;
```
