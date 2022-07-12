---
id: bad87fee1248bd9aedf08824
title: Adicionar diferentes margens a cada lado de um elemento
challengeType: 0
videoUrl: 'https://scrimba.com/c/cg4RWh4'
forumTopicId: 16633
dashedName: add-different-margins-to-each-side-of-an-element
---

# --description--

Às vezes, você pode querer personalizar um elemento para que ele tenha a propriedade `margin` diferente em cada um de seus lados.

O CSS permite que você controle a propriedade `margin` de todos os quatro lados de um elemento com as seguintes propriedades: `margin-top`, `margin-right`, `margin-left` e `margin-bottom`.

# --instructions--

No elemento de classe "blue-box", adicione a propriedade `margin` com um valor de `40px` em cima e no lado esquerdo. E apenas `20px` em baixo e no lado direito.

# --hints--

A classe `blue-box` deve dar aos elementos uma margem (`margin`) superior de `40px`.

```js
assert($('.blue-box').css('margin-top') === '40px');
```

A classe `blue-box` deve dar aos elementos uma margem (`margin`) à direita de `20px`.

```js
assert($('.blue-box').css('margin-right') === '20px');
```

A classe `blue-box` deve dar aos elementos uma margem (`margin`) inferior de `20px`.

```js
assert($('.blue-box').css('margin-bottom') === '20px');
```

A classe `blue-box` deve dar aos elementos uma margem (`margin`) à esquerda de `40px`.

```js
assert($('.blue-box').css('margin-left') === '40px');
```

# --seed--

## --seed-contents--

```html
<style>
  .injected-text {
    margin-bottom: -25px;
    text-align: center;
  }

  .box {
    border-style: solid;
    border-color: black;
    border-width: 5px;
    text-align: center;
  }

  .yellow-box {
    background-color: yellow;
    padding: 10px;
  }

  .red-box {
    background-color: crimson;
    color: #fff;
    margin-top: 40px;
    margin-right: 20px;
    margin-bottom: 20px;
    margin-left: 40px;
  }

  .blue-box {
    background-color: blue;
    color: #fff;
  }
</style>
<h5 class="injected-text">margin</h5>

<div class="box yellow-box">
  <h5 class="box red-box">padding</h5>
  <h5 class="box blue-box">padding</h5>
</div>
```

# --solutions--

```html
<style>
  .injected-text {
    margin-bottom: -25px;
    text-align: center;
  }

  .box {
    border-style: solid;
    border-color: black;
    border-width: 5px;
    text-align: center;
  }

  .yellow-box {
    background-color: yellow;
    padding: 10px;
  }

  .red-box {
    background-color: crimson;
    color: #fff;
    margin-top: 40px;
    margin-right: 20px;
    margin-bottom: 20px;
    margin-left: 40px;
  }

  .blue-box {
    background-color: blue;
    color: #fff;
    margin-top: 40px;
    margin-right: 20px;
    margin-bottom: 20px;
    margin-left: 40px;
  }
</style>
<h5 class="injected-text">margin</h5>

<div class="box yellow-box">
  <h5 class="box red-box">padding</h5>
  <h5 class="box blue-box">padding</h5>
</div>
```
