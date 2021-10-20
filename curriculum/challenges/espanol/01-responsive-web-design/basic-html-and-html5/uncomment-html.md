---
id: bad87fee1348bd9aedf08802
title: Descomenta código HTML
challengeType: 0
videoUrl: 'https://scrimba.com/p/pVMPUv/cBmG9T7'
forumTopicId: 18329
dashedName: uncomment-html
---

# --description--

Comentar es una forma en la que puedes dejar comentarios dentro de tu código para otros desarrolladores, sin que eso afecte el resultado que se muestra al usuario final.

Comentar es también una forma conveniente de desactivar código sin tener que borrarlo por completo.

Los comentarios en HTML comienzan con `<!--` y terminan con `-->`

# --instructions--

Descomenta tus elementos `h1`, `h2` y `p`.

# --hints--

Tu elemento `h1` debe ser visible en la página al descomentarlo.

```js
assert($('h1').length > 0);
```

Tu elemento `h2` debe ser visible en la página al descomentarlo.

```js
assert($('h2').length > 0);
```

Tu elemento `p` debe ser visible en la página al descomentarlo.

```js
assert($('p').length > 0);
```

Ninguna etiqueta de cierre de comentario debe ser visible en la página (por ejemplo, `-->`).

```js
assert(!$('*:contains("-->")')[1]);
```

# --seed--

## --seed-contents--

```html
<!--
<h1>Hello World</h1>

<h2>CatPhotoApp</h2>

<p>Kitty ipsum dolor sit amet, shed everywhere shed everywhere stretching attack your ankles chase the red dot, hairball run catnip eat the grass sniff.</p>
-->
```

# --solutions--

```html
<h1>Hello World</h1>

<h2>CatPhotoApp</h2>

<p>Kitty ipsum dolor sit amet, shed everywhere shed everywhere stretching attack your ankles chase the red dot, hairball run catnip eat the grass sniff.</p>
```
