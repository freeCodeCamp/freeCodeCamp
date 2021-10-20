---
id: bad87fee1248bd9aedf08824
title: Añade márgenes diferentes a cada lado de un elemento
challengeType: 0
videoUrl: 'https://scrimba.com/c/cg4RWh4'
forumTopicId: 16633
dashedName: add-different-margins-to-each-side-of-an-element
---

# --description--

En ocasiones, querrás personalizar un elemento para que tenga un `margin` diferente en cada uno de sus lados.

CSS te permite controlar por separado el `margin` de los cuatro lados individuales de un elemento por medio de las propiedades `margin-top`, `margin-right`, `margin-bottom` y `margin-left`.

# --instructions--

Asigna a la caja azul un `margin` de `40px` en sus lados superior e izquierdo, pero sólo de `20px` en sus lados inferior y derecho.

# --hints--

Tu clase `blue-box` debe asignar al lado superior (top) de los elementos `40px` de `margin`.

```js
assert($('.blue-box').css('margin-top') === '40px');
```

Tu clase `blue-box` debe asignar al lado derecho (right) de los elementos `20px` de `margin`.

```js
assert($('.blue-box').css('margin-right') === '20px');
```

Tu clase `blue-box` debe asignar al lado inferior (bottom) de los elementos `20px` de `margin`.

```js
assert($('.blue-box').css('margin-bottom') === '20px');
```

Tu clase `blue-box` debe asignar al lado izquierdo (left) de los elementos `40px` de `margin`.

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
