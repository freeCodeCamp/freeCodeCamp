---
id: 587d7db7367417b2b2512b9e
title: Haz coincidir patrones de cadena final
challengeType: 1
forumTopicId: 301352
dashedName: match-ending-string-patterns
---

# --description--

En el último desafío, aprendiste a usar el carácter de intercalación para buscar patrones al inicio de las cadenas. También hay una manera de buscar patrones al final de las cadenas.

Puedes buscar el final de las cadenas usando el carácter del signo de dólar `$` al final de la expresión regular.

```js
let theEnding = "This is a never ending story";
let storyRegex = /story$/;
storyRegex.test(theEnding);
let noEnding = "Sometimes a story will have to end";
storyRegex.test(noEnding);
```

La primera llamada a `test` devuelve `true`, mientras que la segunda retorna `false`.

# --instructions--

Usa el carácter de ancla (`$`) para coincidir la cadena `caboose` al final de la cadena `caboose`.

# --hints--

Debes buscar `caboose` con el ancla de signo de dólar `$` en tu expresión regular.

```js
assert(lastRegex.source == 'caboose$');
```

Tu expresión regular no debe usar ninguna bandera.

```js
assert(lastRegex.flags == '');
```

Debes coincidir `caboose` al final de la cadena `The last car on a train is the caboose`

```js
lastRegex.lastIndex = 0;
assert(lastRegex.test('The last car on a train is the caboose'));
```

# --seed--

## --seed-contents--

```js
let caboose = "The last car on a train is the caboose";
let lastRegex = /change/; // Change this line
let result = lastRegex.test(caboose);
```

# --solutions--

```js
let caboose = "The last car on a train is the caboose";
let lastRegex = /caboose$/; // Change this line
let result = lastRegex.test(caboose);
```
