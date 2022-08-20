---
id: bad87fee1348bd9aedf08746
title: Herdar estilos do elemento body
challengeType: 0
videoUrl: 'https://scrimba.com/c/c9bmdtR'
forumTopicId: 18204
dashedName: inherit-styles-from-the-body-element
---

# --description--

No desafio anterior, provamos que cada página HTML tem um elemento `body`, e que o elemento `body` também pode ser estilizado com CSS.

Lembre-se de que você pode definir o estilo do elemento `body` como qualquer outro elemento HTML, e todos os outros elementos herdarão os estilos do elemento `body`.

# --instructions--

Primeiro, crie um elemento `h1` com o texto `Hello World`

Então, vamos dar a todos os elementos da página a cor `green` adicionando `color: green;` à declaração de estilo do elemento `body`.

Por fim, dê ao elemento `body` a tipografia `monospace` adicionando `font-family: monospace;` à declaração de estilo do elemento `body`.

# --hints--

Você deve criar um elemento `h1`.

```js
assert($('h1').length > 0);
```

O elemento `h1` deve conter o texto `Hello World`.

```js
assert(
  $('h1').length > 0 &&
    $('h1')
      .text()
      .match(/hello world/i)
);
```

O elemento `h1` deve ter uma tag de fechamento.

```js
assert(
  code.match(/<\/h1>/g) &&
    code.match(/<h1/g) &&
    code.match(/<\/h1>/g).length === code.match(/<h1/g).length
);
```

O elemento `body` deve ter a propriedade `color` com o valor `green`.

```js
assert($('body').css('color') === 'rgb(0, 128, 0)');
```

O elemento `body` deve ter a propriedade `font-family` com o valor `monospace`.

```js
assert(
  $('body')
    .css('font-family')
    .match(/monospace/i)
);
```

O elemento `h1` deve herdar a fonte `monospace` do elemento `body`.

```js
assert(
  $('h1').length > 0 &&
    $('h1')
      .css('font-family')
      .match(/monospace/i)
);
```

O elemento `h1` deve herdar a cor `green` do elemento `body`.

```js
assert($('h1').length > 0 && $('h1').css('color') === 'rgb(0, 128, 0)');
```

# --seed--

## --seed-contents--

```html
<style>
  body {
    background-color: black;
  }

</style>
```

# --solutions--

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
