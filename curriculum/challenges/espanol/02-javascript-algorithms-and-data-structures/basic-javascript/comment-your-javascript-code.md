---
id: bd7123c9c441eddfaeb4bdef
title: Comenta tu código de JavaScript
challengeType: 1
removeComments: false
videoUrl: 'https://scrimba.com/c/c7ynnTp'
forumTopicId: 16783
dashedName: comment-your-javascript-code
---

# --description--

Los comentarios son líneas de código que JavaScript ignorará intencionalmente. Los comentarios son una gran manera de dejar notas para ti mismo y a otras personas que más tarde tengan que averiguar qué hace ese código.

Hay dos maneras de escribir comentarios en JavaScript:

Usar `//` le dirá a JavaScript que ignore el resto del texto en la línea actual. Este es un comentario en línea:

```js
// This is an in-line comment.
```

Puedes hacer un comentario multilínea comenzando con `/*` y terminando con `*/`. Este es un comentario multilínea:

```js
/* This is a
multi-line comment */
```

**Nota: ** A medida que programas, deberías añadir comentarios regularmente para aclarar el funcionamiento de las partes de tu código. Un buen comentario puede ayudar a comunicar la intención de tu código, tanto para otros *como* para tu yo futuro.

# --instructions--

Intenta crear un comentario de cada tipo.

# --hints--

Debes crear un comentario de estilo `//` que contenga al menos cinco letras.

```js
assert(code.match(/(\/\/)...../g));
```

Debes crear un comentario de estilo `/* */` que contenga al menos cinco letras.

```js
assert(code.match(/(\/\*)([^\/]{5,})(?=\*\/)/gm));
```

# --seed--

## --seed-contents--

```js

```

# --solutions--

```js
// Fake Comment
/* Another Comment */
```
