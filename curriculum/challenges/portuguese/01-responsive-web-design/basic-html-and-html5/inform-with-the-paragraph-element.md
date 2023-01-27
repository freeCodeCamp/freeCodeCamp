---
id: bad87fee1348bd9aedf08801
title: Informar com o elemento de parágrafo
challengeType: 0
videoUrl: 'https://scrimba.com/p/pVMPUv/ceZ7DtN'
forumTopicId: 18202
dashedName: inform-with-the-paragraph-element
---

# --description--

O elemento `p` é o preferido para textos de parágrafos em sites. `p` é a abreviação de "parágrafo".

Você pode criar um elemento de parágrafo da seguinte forma:

```html
<p>I'm a p tag!</p>
```

# --instructions--

Crie um elemento `p` abaixo do elemento `h2` e dê a ele o texto `Hello Paragraph`.

**Observação:** é uma convenção que todas as tags HTML sejam escritas em letras minúsculas (por exemplo, `<p></p>` em vez de `<P></P>`).

# --hints--

Seu código deve ter um elemento `p` válido.

```js
assert($('p').length > 0);
```

O elemento `p` deve conter o texto `Hello Paragraph`.

```js
assert.isTrue(/hello(\s)+paragraph/gi.test($('p').text()));
```

O elemento `p` deve ter uma tag de fechamento.

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
