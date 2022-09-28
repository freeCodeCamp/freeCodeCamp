---
id: 56533eb9ac21ba0edf2244b5
title: Escapa comillas literales en cadenas
challengeType: 1
videoUrl: 'https://scrimba.com/c/c2QvgSr'
forumTopicId: 17568
dashedName: escaping-literal-quotes-in-strings
---

# --description--

Cuando estás definiendo una cadena debes comenzar y terminar con una comilla simple o doble. ¿Qué pasa cuando necesitas una comilla literal: `"` o `'` dentro de tu cadena?

En JavaScript, puedes <dfn>escapar</dfn> una comilla de considerarse un final de cadena colocando una <dfn>barra invertida</dfn> (`\`) delante de la comilla.

```js
const sampleStr = "Alan said, \"Peter is learning JavaScript\".";
```

Esto indica a JavaScript que la siguiente comilla no es el final de la cadena, sino que debería aparecer dentro de la cadena. Así que si imprimieras esto en la consola, obtendrías:

```js
Alan said, "Peter is learning JavaScript".
```

# --instructions--

Usa <dfn>barras invertidas</dfn> para asignar una cadena a la variable `myStr` de modo que si lo imprimieras en la consola, verías:

```js
I am a "double quoted" string inside "double quotes".
```

# --hints--

Debes usar dos comillas dobles (`"`) y cuatro comillas dobles escapadas (`\"`).

```js
assert(code.match(/\\"/g).length === 4 && code.match(/[^\\]"/g).length === 2);
```

La variable `myStr` debe contener la cadena: `I am a "double quoted" string inside "double quotes".`

```js
assert(/I am a "double quoted" string inside "double quotes(\."|"\.)$/.test(myStr));
```

# --seed--

## --after-user-code--

```js
(function(){
  if(typeof myStr === 'string') {
    console.log("myStr = \"" + myStr + "\"");
  } else {
    console.log("myStr is undefined");
  }
})();
```

## --seed-contents--

```js
const myStr = ""; // Change this line
```

# --solutions--

```js
const myStr = "I am a \"double quoted\" string inside \"double quotes\".";
```
