---
id: bad87fee1348bd9aedf06756
title: Sobrescrever estilos de classe com estilos inline
challengeType: 0
videoUrl: 'https://scrimba.com/c/cGJDRha'
forumTopicId: 18252
dashedName: override-class-declarations-with-inline-styles
---

# --description--

No desafio anterior, vimos que os estilos declarados com id sobrescrevem as declarações feitas com classes, independente de onde as classes foram declaradas no elemento `style`.

Existem outras maneiras de sobrescrever o CSS. Você se lembra dos estilos inline?

# --instructions--

Use um estilo inline para tentar tornar o elemento `h1` branco. Lembre-se, estilos inline são declarados dessa forma:

```html
<h1 style="color: green;">
```

Não apague as classes `blue-text` e `pink-text` do elemento `h1`.

# --hints--

O elemento `h1` deve ter a classe `pink-text`.

```js
assert($('h1').hasClass('pink-text'));
```

O elemento `h1` deve ter a classe `blue-text`.

```js
assert($('h1').hasClass('blue-text'));
```

O elemento `h1` deve ter o id `orange-text`.

```js
assert($('h1').attr('id') === 'orange-text');
```

O elemento `h1` deve ter um estilo inline.

```js
assert(document.querySelector('h1[style]'));
```

O elemento `h1` deve ser branco.

```js
assert($('h1').css('color') === 'rgb(255, 255, 255)');
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
  #orange-text {
    color: orange;
  }
  .pink-text {
    color: pink;
  }
  .blue-text {
    color: blue;
  }
</style>
<h1 id="orange-text" class="pink-text blue-text">Hello World!</h1>
```

# --solutions--

```html
<style>
  body {
    background-color: black;
    font-family: monospace;
    color: green;
  }
  #orange-text {
    color: orange;
  }
  .pink-text {
    color: pink;
  }
  .blue-text {
    color: blue;
  }
</style>
<h1 id="orange-text" class="pink-text blue-text" style="color: white">Hello World!</h1>
```
