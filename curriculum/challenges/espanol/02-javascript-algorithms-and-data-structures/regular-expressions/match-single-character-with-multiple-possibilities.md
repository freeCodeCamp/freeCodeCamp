---
id: 587d7db5367417b2b2512b95
title: Haz coincidir un solo carácter con múltiples posibilidades
challengeType: 1
forumTopicId: 301357
dashedName: match-single-character-with-multiple-possibilities
---

# --description--

Aprendiste cómo hacer coincidir los patrones literales (`/literal/`) y el carácter de comodín (`/./`). Estos son los extremos de las expresiones regulares, donde uno encuentra coincidencias exactas y el otro coincide de todo. Hay opciones que representan un equilibrio entre los dos extremos.

Puedes buscar un patrón literal con cierta flexibilidad utilizando las <dfn>clases de caracteres</dfn>. Las clases de caracteres te permiten definir un grupo de caracteres que deseas coincidir colocándolos dentro de corchetes (`[` y `]`).

Por ejemplo, si quieres hacer coincidir `bag`, `big`, y `bug` pero no `bog`. Puedes crear la expresión regular `/b[aiu]g/` para hacer esto. `[aiu]` es la clase de caracteres que solo coincidirá con los caracteres `a`, `i`, o `u`.

```js
let bigStr = "big";
let bagStr = "bag";
let bugStr = "bug";
let bogStr = "bog";
let bgRegex = /b[aiu]g/;
bigStr.match(bgRegex);
bagStr.match(bgRegex);
bugStr.match(bgRegex);
bogStr.match(bgRegex);
```

En orden, las cuatro llamadas de `match` devolverán los valores `["big"]`, `["bag"]`, `["bug"]`, and `null`.

# --instructions--

Usa una clase de caracteres con las vocales (`a`, `e`, `i`, `o` `u`) en tu expresión regular `vowelRegex` para encontrar todas las vocales en la cadena `quoteSample`.

**Nota:** Asegúrate de hacer coincidir tanto las vocales mayúsculas como minúsculas.

# --hints--

Debes encontrar las 25 vocales.

```js
assert(result.length == 25);
```

Tu expresión regular `vowelRegex` debe usar una clase de caracteres.

```js
assert(/\[.*\]/.test(vowelRegex.source));
```

Tu expresión regular `vowelRegex` debe utilizar la bandera global.

```js
assert(vowelRegex.flags.match(/g/).length == 1);
```

Tu expresión regular `vowelRegex` debe utilizar la bandera que no distingue entre mayúsculas y minúsculas.

```js
assert(vowelRegex.flags.match(/i/).length == 1);
```

Tu expresión regular no debe coincidir con ninguna consonante.

```js
assert(!/[b-df-hj-np-tv-z]/gi.test(result.join()));
```

# --seed--

## --seed-contents--

```js
let quoteSample = "Beware of bugs in the above code; I have only proved it correct, not tried it.";
let vowelRegex = /change/; // Change this line
let result = vowelRegex; // Change this line
```

# --solutions--

```js
let quoteSample = "Beware of bugs in the above code; I have only proved it correct, not tried it.";
let vowelRegex = /[aeiou]/gi; // Change this line
let result = quoteSample.match(vowelRegex); // Change this line
```
