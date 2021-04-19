---
id: bd7123c8c441eddfaeb5bdef
title: Di hola a los elementos HTML
challengeType: 0
videoUrl: 'https://scrimba.com/p/pVMPUv/cE8Gpt2'
forumTopicId: 18276
dashedName: say-hello-to-html-elements
---

# --description--

Bienvenido a los desafíos de programación HTML de freeCodeCamp. Estos te guiarán paso a paso a través del mundo del desarrollo web.

Primero, comenzarás construyendo una página web simple usando HTML. Puedes editar el código desde tu editor de código, el cual está insertado en esta página web.

¿Ves el código en tu editor de código que dice `<h1>Hello</h1>`? Ese es un elemento HTML.

La mayoría de elementos HTML tienen una etiqueta de apertura y una etiqueta de cierre.

Las etiquetas de apertura se ven así:

```html
<h1>
```

Las etiquetas de cierre se ven así:

```html
</h1>
```

La única diferencia entre las etiquetas de apertura y cierre es la barra frontal después del corchete de ángulo abierto.

Cada desafío tiene pruebas que puedes ejecutar en cualquier momento haciendo clic en el botón "Ejecutar pruebas". Cuando pases todas las pruebas, te pedirán que envíes tu solución e ir al siguiente desafío de programación.

# --instructions--

Para pasar la prueba en este desafío, cambia el texto de tu elemento `h1` para que diga `Hello World`.

# --hints--

Tu elemento `h1` debe contener el texto `Hello World`.

```js
assert.isTrue(/hello(\s)+world/gi.test($('h1').text()));
```

# --seed--

## --seed-contents--

```html
<h1>Hello</h1>
```

# --solutions--

```html
<h1>Hello World</h1>
```
