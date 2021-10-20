---
id: 587d7db6367417b2b2512b9b
title: Encuentra caracteres con una coincidencia perezosa
challengeType: 1
forumTopicId: 301341
dashedName: find-characters-with-lazy-matching
---

# --description--

En las expresiones regulares, una coincidencia <dfn>codiciosa</dfn> encuentra la parte más larga posible de una cadena que se ajusta al patrón de la expresión regular y la devuelve como una coincidencia. La alternativa es llamada coincidencia <dfn>perezosa</dfn>, la cual encuentra la parte más pequeña posible de la cadena que satisface el patrón de la expresión regular.

Puedes aplicar la expresión regular `/t[a-z]*i/` a la cadena `"titanic"`. Esta expresión regular es básicamente un patrón que comienza con `t`, termina con `i`, y tiene algunas letras intermedias.

Las expresiones regulares son por defecto codiciosas, por lo que la coincidencia devolvería `["titani"]`. Encuentra la sub-cadena más grande posible que se ajusta al patrón.

Sin embargo, puedes usar el carácter `?` para cambiarla a una coincidencia perezosa. `"titanic"` al coincidir con la expresión regular ajustada de `/t[a-z]*?i/` devuelve `["ti"]`.

**Nota:** Se debe evitar analizar HTML con expresiones regulares, pero coincidir patrones con una cadena HTML utilizando expresiones regulares está completamente bien.

# --instructions--

Corrige la expresión regular `/<.*>/` para que devuelva la etiqueta HTML `<h1>` y no el texto `"<h1>Winter is coming</h1>"`. Recuerda que el comodín `.` en una expresión regular coincide con cualquier carácter.

# --hints--

La variable `result` debe ser un arreglo con `<h1>` en él

```js
assert(result[0] == '<h1>');
```

`myRegex` debe usar una coincidencia perezosa

```js
assert(/[^\\][\*\+\?]\?/.test(myRegex));
```

`myRegex` no debe incluir la cadena `h1`

```js
assert(!myRegex.source.match('h1'));
```

# --seed--

## --seed-contents--

```js
let text = "<h1>Winter is coming</h1>";
let myRegex = /<.*>/; // Change this line
let result = text.match(myRegex);
```

# --solutions--

```js
let text = "<h1>Winter is coming</h1>";
let myRegex = /<.*?>/; // Change this line
let result = text.match(myRegex);
```
