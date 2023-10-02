---
id: bad87fed1348bd9aedf08833
title: Excluir elementos HTML
challengeType: 0
videoUrl: 'https://scrimba.com/p/pVMPUv/ckK73C9'
forumTopicId: 17559
dashedName: delete-html-elements
---

# --description--

A tela do nosso telefone não possui muito espaço vertical.

Vamos remover os elementos desnecessários para podermos começar a construir nosso CatPhotoApp.

# --instructions--

Exclua o elemento `h1` para poder simplificar a visualização.

# --hints--

O elemento `h1` deve ser excluído.

```js
assert(!code.match(/<h1>/gi) && !code.match(/<\/h1>/gi));
```

O elemento `h2` deve estar na página.

```js
assert(code.match(/<h2>[\w\W]*<\/h2>/gi));
```

O elemento `p` deve estar na página.

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
