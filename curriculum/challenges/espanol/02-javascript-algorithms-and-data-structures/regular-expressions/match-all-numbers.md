---
id: 5d712346c441eddfaeb5bdef
title: Coincide con todos los números
challengeType: 1
forumTopicId: 18181
dashedName: match-all-numbers
---

# --description--

Has aprendido atajos para patrones de cadenas comunes como los alfanuméricos. Otro patrón común es buscar solo dígitos o números.

El atajo para buscar caracteres de dígitos es `\d`, con una `d` minúscula. Esto es igual a la clase de caracteres `[0-9]`, la cual busca un solo carácter de cualquier número entre cero y nueve.

# --instructions--

Usa la clase de caracteres abreviada `\d` para contar cuántos dígitos hay en los títulos de las películas. Los números escritos ("seis" en lugar de 6) no cuentan.

# --hints--

Tu expresión regular debe usar el carácter de atajo que coincida con caracteres de dígitos

```js
assert(/\\d/.test(numRegex.source));
```

Tu expresión regular debe usar la bandera global.

```js
assert(numRegex.global);
```

Tu expresión regular debe encontrar 1 dígito en la cadena `9`.

```js
assert('9'.match(numRegex).length == 1);
```

Tu expresión regular debe encontrar 2 dígitos en la cadena `Catch 22`.

```js
assert('Catch 22'.match(numRegex).length == 2);
```

Tu expresión regular debe encontrar 3 dígitos en la cadena `101 Dalmatians`.

```js
assert('101 Dalmatians'.match(numRegex).length == 3);
```

Tu expresión regular no debe encontrar dígitos en la cadena `One, Two, Three`.

```js
assert('One, Two, Three'.match(numRegex) == null);
```

Tu expresión regular debe encontrar 2 dígitos en la cadena `21 Jump Street`.

```js
assert('21 Jump Street'.match(numRegex).length == 2);
```

Tu expresión regular debe encontrar 4 dígitos en la cadena `2001: A Space Odyssey`.

```js
assert('2001: A Space Odyssey'.match(numRegex).length == 4);
```

# --seed--

## --seed-contents--

```js
let movieName = "2001: A Space Odyssey";
let numRegex = /change/; // Change this line
let result = movieName.match(numRegex).length;
```

# --solutions--

```js
let movieName = "2001: A Space Odyssey";
let numRegex = /\d/g; // Change this line
let result = movieName.match(numRegex).length;
```
