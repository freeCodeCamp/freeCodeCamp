---
id: bad87fee1348bd9aedf08833
title: Rellena el espacio en blanco con texto provisional
challengeType: 0
videoUrl: 'https://scrimba.com/p/pVMPUv/cgR7Dc7'
forumTopicId: 18178
dashedName: fill-in-the-blank-with-placeholder-text
---

# --description--

Los desarrolladores web tradicionalmente usan <dfn>texto lorem ipsum</dfn> como texto provisional. El texto lorem ipsum se extrajo aleatoriamente de un famoso pasaje de Cicerón de la Antigua Roma.

El texto lorem ipsum ha sido utilizado como texto provisional por los tipógrafos desde el siglo XVI, y esta tradición continúa en la web.

Pues bien, 5 siglos es suficiente. Puesto que estamos construyendo una aplicación de fotos de gatos, utilicemos algo llamado "kitty ipsum text".

# --instructions--

Reemplaza el texto dentro de tu elemento `p` con las primeras palabras de este kitty ipsum text: `Kitty ipsum dolor sit amet, shed everywhere shed everywhere stretching attack your ankles chase the red dot, hairball run catnip eat the grass sniff.`

# --hints--

Tu elemento `p` debe contener las primeras palabras del "kitty ipsum text" que te proporcionamos aquí.

```js
assert.isTrue(/Kitty(\s)+ipsum/gi.test($('p').text()));
```

# --seed--

## --seed-contents--

```html
<h1>Hello World</h1>

<h2>CatPhotoApp</h2>

<p>Hello Paragraph</p>
```

# --solutions--

```html
<h1>Hello World</h1>

<h2>CatPhotoApp</h2>

<p>Kitty ipsum dolor sit amet, shed everywhere shed everywhere stretching attack your ankles chase the red dot, hairball run catnip eat the grass sniff</p>
```
