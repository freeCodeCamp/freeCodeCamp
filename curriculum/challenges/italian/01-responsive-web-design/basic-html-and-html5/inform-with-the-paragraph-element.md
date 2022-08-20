---
id: bad87fee1348bd9aedf08801
title: Informare con l'elemento Paragrafo
challengeType: 0
videoUrl: 'https://scrimba.com/p/pVMPUv/ceZ7DtN'
forumTopicId: 18202
dashedName: inform-with-the-paragraph-element
---

# --description--

L'elemento `p` è preferibile per i paragrafi di testo nei siti web. `p` è l'abbreviazione per "paragrafo".

Puoi creare un elemento paragrafo in questo modo:

```html
<p>I'm a p tag!</p>
```

# --instructions--

Crea un elemento `p` sotto il tuo elemento `h2`, e dagli il testo `Hello Paragraph`.

**Nota:** Come convenzione, tutti i tag HTML sono scritti in minuscolo, ad esempio `<p></p>` e non `<P></P>`.

# --hints--

Il tuo codice dovrebbe avere un elemento `p` valido.

```js
assert($('p').length > 0);
```

Il tuo elemento `p` dovrebbe contenere il testo `Hello Paragraph`.

```js
assert.isTrue(/hello(\s)+paragraph/gi.test($('p').text()));
```

Il tuo elemento `p` dovrebbe avere un tag di chiusura.

```js
assert(
  code.match(/<\/p>/g) &&
    code.match(/<\/p>/g).length === code.match(/<p/g).length
);
```

# --seed--

## --seed-contents--

```html
<h1>Hello World</h1>
<h2>CatPhotoApp</h2>
```

# --solutions--

```html
<h1>Hello World</h1>
<h2>CatPhotoApp</h2>
<p>Hello Paragraph</p>
```
