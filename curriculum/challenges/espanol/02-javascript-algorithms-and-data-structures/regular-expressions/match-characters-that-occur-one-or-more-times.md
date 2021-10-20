---
id: 587d7db6367417b2b2512b99
title: Haz coincidir caracteres que aparecen una o más veces
challengeType: 1
forumTopicId: 301350
dashedName: match-characters-that-occur-one-or-more-times
---

# --description--

A veces, es necesario coincidir con un carácter (o grupo de caracteres) que aparezca una o más veces seguidas. Esto significa que aparece al menos una vez, y puede repetirse.

Puedes usar el carácter `+` para comprobar si es así. Recuerda, el carácter o patrón debe estar presente consecutivamente. Es decir, el carácter tiene que repetirse uno tras otro.

Por ejemplo, `/a+/g` encontraría una coincidencia en `abc` y regresaría `["a"]`. Debido al `+`, también encontraría una sola coincidencia en `aabc` y regresaría `["aa"]`.

Si en su lugar estuvieras comprobando la cadena `abab`, se encontrarían dos coincidencias y regresaría `["a", "a"]` porque los caracteres `a` no están en fila; hay una `b` entre ellos. Finalmente, dado que no hay una `a` en la cadena `bcd`, no se encontraría una coincidencia.

# --instructions--

Quieres encontrar coincidencias cuando la letra `s` ocurre una o más veces en `Mississippi`. Escribe una expresión regular que utilice el signo `+`.

# --hints--

Tu expresión regular `myRegex` debe utilizar el signo `+` para coincidir con uno o más caracteres de `s`.

```js
assert(/\+/.test(myRegex.source));
```

Tu expresión regular `myRegex` debe coincidir con 2 elementos.

```js
assert(result.length == 2);
```

La variable `result` debe ser un arreglo con dos coincidencias de `ss`

```js
assert(result[0] == 'ss' && result[1] == 'ss');
```

# --seed--

## --seed-contents--

```js
let difficultSpelling = "Mississippi";
let myRegex = /change/; // Change this line
let result = difficultSpelling.match(myRegex);
```

# --solutions--

```js
let difficultSpelling = "Mississippi";
let myRegex = /s+/g; // Change this line
let result = difficultSpelling.match(myRegex);
```
