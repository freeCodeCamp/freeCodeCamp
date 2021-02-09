---
id: bad87fee1348bd9aedf08822
title: Ajusta el margen de un elemento
challengeType: 0
videoUrl: 'https://scrimba.com/c/cVJarHW'
forumTopicId: 16654
dashedName: adjust-the-margin-of-an-element
---

# --description--

El `margin` (margen) de un elemento controla la cantidad de espacio entre su `border` y los elementos que lo rodean.

Aquí podemos ver que la caja azul y la caja roja están anidadas dentro de la caja amarilla. Ten en cuenta que la caja roja tiene un `margin` más grande que el de la caja azul, lo que hace que aparezca más pequeña.

Cuando aumentas el `margin` de la caja azul, esto aumenta la distancia entre su borde y los elementos que la rodean.

# --instructions--

Cambia el `margin` de la caja azul para que coincida con el de la caja roja.

# --hints--

Tu clase `blue-box` debe asignar a los elementos `20px` de `margin`.

```js
assert($('.blue-box').css('margin-top') === '20px');
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
    padding: 20px;
    margin: 20px;
  }

  .blue-box {
    background-color: blue;
    color: #fff;
    padding: 20px;
    margin: 10px;
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
    padding: 20px;
    margin: 20px;
  }

  .blue-box {
    background-color: blue;
    color: #fff;
    padding: 20px;
    margin: 20px;
  }
</style>
<h5 class="injected-text">margin</h5>

<div class="box yellow-box">
  <h5 class="box red-box">padding</h5>
  <h5 class="box blue-box">padding</h5>
</div>
```
