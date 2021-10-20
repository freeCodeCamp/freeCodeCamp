---
id: bad87fee1348bd9aedf0887a
title: Título con el elemento h2
challengeType: 0
videoUrl: 'https://scrimba.com/p/pVMPUv/cE8Gqf3'
forumTopicId: 18196
dashedName: headline-with-the-h2-element
---

# --description--

Durante las próximas lecciones, construiremos pieza a pieza una aplicación web en HTML5 de fotos de gatos.

El elemento `h2` que añadirás en este paso agregará un título nivel dos a la página web.

Este elemento le informa al navegador sobre la estructura de tu sitio web. Los elementos `h1` se utilizan a menudo para títulos principales, mientras que los elementos `h2` se utilizan generalmente para subtítulos. También hay elementos `h3`, `h4`, `h5` y `h6` para indicar diferentes niveles de subtítulos.

# --instructions--

Añade una etiqueta `h2` que diga "CatPhotoApp" para crear un segundo elemento HTML debajo de tu elemento `h1` "Hello World".

# --hints--

Debes crear un elemento `h2`.

```js
assert($('h2').length > 0);
```

Tu elemento `h2` debe tener una etiqueta de cierre.

```js
assert(
  code.match(/<\/h2>/g) &&
    code.match(/<\/h2>/g).length === code.match(/<h2>/g).length
);
```

Tu elemento `h2` debe contener el texto `CatPhotoApp`.

```js
assert.isTrue(/cat(\s)?photo(\s)?app/gi.test($('h2').text()));
```

Tu elemento `h1` debe contener el texto `Hello World`.

```js
assert.isTrue(/hello(\s)+world/gi.test($('h1').text()));
```

Tu elemento `h1` debe estar antes que tu elemento `h2`.

```js
assert(code.match(/<h1>\s*?.*?\s*?<\/h1>\s*<h2>\s*?.*?\s*?<\/h2>/gi));
```

# --seed--

## --seed-contents--

```html
<h1>Hello World</h1>
```

# --solutions--

```html
<h1>Hello World</h1>
<h2>CatPhotoApp</h2>
```
