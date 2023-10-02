---
id: bad87fee1348bd9aedf08804
title: Comenta HTML
challengeType: 0
videoUrl: 'https://scrimba.com/p/pVMPUv/cGyGbca'
forumTopicId: 16782
dashedName: comment-out-html
---

# --description--

Recuerda que para iniciar un comentario, necesitas usar `<!--` y para terminar un comentario, necesitas usar `-->`

Aquí tendrás que terminar el comentario antes de que tu elemento `h2` comience.

# --instructions--

Comenta tu elemento `h1` y tu elemento `p`, pero no tu elemento `h2`.

# --hints--

Tu elemento `h1` debe ser comentado para que no sea visible en la página.

```js
assert($('h1').length === 0);
```

Tu elemento `h2` no debe ser comentado para que sea visible en la página.

```js
assert($('h2').length > 0);
```

Tu elemento `p` debe ser comentado para que no sea visible en la página.

```js
assert($('p').length === 0);
```

Cada uno de tus comentarios debe cerrarse con `-->`.

```js
assert(code.match(/[^fc]-->/g).length > 1);
```

No debes cambiar el orden de los elementos `h1`, `h2` o `p` en el código.

```js
assert(
  code.match(/<([a-z0-9]){1,2}>/g)[0] === '<h1>' &&
    code.match(/<([a-z0-9]){1,2}>/g)[1] === '<h2>' &&
    code.match(/<([a-z0-9]){1,2}>/g)[2] === '<p>'
);
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
<!--<h1>Hello World</h1>-->
<h2>CatPhotoApp</h2> 
<!--<p>Kitty ipsum dolor sit amet, shed everywhere shed everywhere stretching attack your ankles chase the red dot, hairball run catnip eat the grass sniff.</p> -->
```
