---
id: bad87fee1348bd9aedf08824
title: Añade un "padding" o relleno diferente a cada lado de un elemento
challengeType: 0
videoUrl: 'https://scrimba.com/c/cB7mwUw'
forumTopicId: 16634
dashedName: add-different-padding-to-each-side-of-an-element
---

# --description--

En ocasiones, querrás personalizar un elemento para que tenga un `padding` o relleno diferente en cada uno de sus lados.

CSS te permite controlar por separado el `padding` de los cuatro lados individuales de un elemento por medio de las propiedades `padding-top`, `padding-right`, `padding-bottom` y `padding-left`.

# --instructions--

Asigna a la caja azul un `padding` de `40px` en sus lados superior e izquierdo, pero sólo de `20px` en sus lados inferior y derecho.

# --hints--

Tu clase `blue-box` debe asignar al lado superior (top) de los elementos `40px` de `padding`.

```js
assert($('.blue-box').css('padding-top') === '40px');
```

Tu clase `blue-box` debe asignar al lado derecho (right) de los elementos `20px` de `padding`.

```js
assert($('.blue-box').css('padding-right') === '20px');
```

Tu clase `blue-box` debe asignar al lado inferior (bottom) de los elementos `20px` de `padding`.

```js
assert($('.blue-box').css('padding-bottom') === '20px');
```

Tu clase `blue-box` debe asignar al lado izquierlo (left) de los elementos `40px` de `padding`.

```js
assert($('.blue-box').css('padding-left') === '40px');
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
    padding-top: 40px;
    padding-right: 20px;
    padding-bottom: 20px;
    padding-left: 40px;
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
    padding-top: 40px;
    padding-right: 20px;
    padding-bottom: 20px;
    padding-left: 40px;
  }

  .blue-box {
    background-color: blue;
    color: #fff;
    padding-top: 40px;
    padding-right: 20px;
    padding-bottom: 20px;
    padding-left: 40px;
  }
</style>
<h5 class="injected-text">margin</h5>

<div class="box yellow-box">
  <h5 class="box red-box">padding</h5>
  <h5 class="box blue-box">padding</h5>
</div>
```
