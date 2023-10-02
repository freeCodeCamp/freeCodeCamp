---
id: bad87fee1348bd9aedf08756
title: Priorizar um estilo em detrimento de outro
challengeType: 0
videoUrl: 'https://scrimba.com/c/cZ8wnHv'
forumTopicId: 18258
dashedName: prioritize-one-style-over-another
---

# --description--

Às vezes, seus elementos HTML receberão vários estilos que conflitam entre si.

Por exemplo, o elemento `h1` não pode ser verde e rosa ao mesmo tempo.

Vamos ver o que acontece quando criamos uma classe que torna o texto rosa e, em seguida, aplicamos ela a um elemento. Nossa classe *substituirá* a propriedade CSS `color: green;` do elemento `body`?

# --instructions--

Crie uma classe CSS chamada `pink-text` que fornece a cor rosa a um elemento.

Dê ao elemento `h1` a classe `pink-text`.

# --hints--

O elemento `h1` deve ter a classe `pink-text`.

```js
assert($('h1').hasClass('pink-text'));
```

A tag `<style>` deve ter uma classe CSS de nome `pink-text` que altera a propriedade `color`.

```js
assert(code.match(/\.pink-text\s*\{\s*color\s*:\s*.+\s*;?\s*\}/g));
```

O elemento `h1` deve ser rosa.

```js
assert($('h1').css('color') === 'rgb(255, 192, 203)');
```

# --seed--

## --seed-contents--

```html
<style>
  body {
    background-color: black;
    font-family: monospace;
    color: green;
  }
</style>
<h1>Hello World!</h1>
```

# --solutions--

```html
<style>
  body {
    background-color: black;
    font-family: monospace;
    color: green;
  }
  .pink-text {
    color: pink;
  }
</style>
<h1 class="pink-text">Hello World!</h1>
```
