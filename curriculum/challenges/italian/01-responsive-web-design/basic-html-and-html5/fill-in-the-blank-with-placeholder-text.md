---
id: bad87fee1348bd9aedf08833
title: Riempire il vuoto con il testo segnaposto
challengeType: 0
videoUrl: 'https://scrimba.com/p/pVMPUv/cgR7Dc7'
forumTopicId: 18178
dashedName: fill-in-the-blank-with-placeholder-text
---

# --description--

Gli sviluppatori Web tradizionalmente usano <dfn>lorem ipsum text</dfn> come testo segnaposto. Il testo del lorem ipsum è tratto a caso da un famoso passaggio di Cicerone dell'antica Roma.

Il testo lorem ipsum è stato utilizzato come testo segnaposto dai tipografi sin dal XVI secolo e questa tradizione continua sul web.

Bene, 5 secoli sono abbastanza lunghi. Dato che stiamo costruendo una CatPhotoApp, usiamo qualcosa chiamato testo "kitty ipsum".

# --instructions--

Sostituisci il testo all'interno del tuo elemento `p` con le prime parole di questo testo kitty ipsum: `Kitty ipsum dolor sit amet, shed everywhere shed everywhere stretching attack your ankles chase the red dot, hairball run catnip eat the grass sniff.`

# --hints--

Il tuo elemento `p` dovrebbe contenere le prime parole del testo "kitty ipsum" fornito.

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
