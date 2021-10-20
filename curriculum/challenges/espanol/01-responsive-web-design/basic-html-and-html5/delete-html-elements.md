---
id: bad87fed1348bd9aedf08833
title: Elimina elementos HTML
challengeType: 0
videoUrl: 'https://scrimba.com/p/pVMPUv/ckK73C9'
forumTopicId: 17559
dashedName: delete-html-elements
---

# --description--

Nuestro teléfono no tiene mucho espacio vertical.

Eliminemos los elementos innecesarios para que podamos empezar a construir nuestra CatPhotoApp.

# --instructions--

Elimina tu elemento `h1` para que podamos simplificar nuestra vista.

# --hints--

Tu elemento `h1` debe ser eliminado.

```js
assert(!code.match(/<h1>/gi) && !code.match(/<\/h1>/gi));
```

Tu elemento `h2` debe estar en la página.

```js
assert(code.match(/<h2>[\w\W]*<\/h2>/gi));
```

Tu elemento `p` debe estar en la página.

```js
assert(code.match(/<p>[\w\W]*<\/p>/gi));
```

# --seed--

## --seed-contents--

```html
<h1>Hello World</h1>

<h2>CatPhotoApp</h2>

<p>Kitty ipsum dolor sit amet, shed everywhere shed everywhere stretching attack your ankles chase the red dot, hairball run catnip eat the grass sniff.</p>
```

# --solutions--

```html
<h2>CatPhotoApp</h2><p>Kitty ipsum dolor sit amet, shed everywhere shed everywhere stretching attack your ankles chase the red dot, hairball run catnip eat the grass sniff.</p>
```
