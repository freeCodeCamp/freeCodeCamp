---
id: bad88fee1348bd9aedf08825
title: Ajusta el padding (relleno) de un elemento
challengeType: 0
videoUrl: 'https://scrimba.com/c/cED8ZC2'
forumTopicId: 301083
dashedName: adjust-the-padding-of-an-element
---

# --description--

Dejaremos de lado por un momento nuestra Cat Photo App y aprenderemos un poco más sobre como aplicar estilos al HTML.

Quizás ya te hayas dado cuenta, pero todos los elementos HTML son, esencialmente, pequeños rectángulos.

Hay tres propiedades importantes que controlan el espacio que rodea cada elemento HTML: `padding` (relleno), `border` (borde) y `margin` (margen).

El `padding` o relleno de un elemento controla la cantidad de espacio entre su contenido y su `border`.

Aquí podemos ver que la caja azul y la caja roja están anidadas dentro de la caja amarilla. Fíjate que la caja roja tiene más `padding` (relleno) que la caja azul.

Cuando aumentas el `padding` de la caja azul, esto aumenta la distancia (`padding`) entre el texto y el borde que lo rodea.

# --instructions--

Cambia el `padding` de la caja azul para que coincida con el de la caja roja.

# --hints--

Tu clase `blue-box` debe asignar a los elementos `20px` de `padding`.

```js
assert($('.blue-box').css('padding-top') === '20px');
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
  }

  .blue-box {
    background-color: blue;
    color: #fff;
    padding: 10px;
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
  }

  .blue-box {
    background-color: blue;
    color: #fff;
    padding: 20px;
  }
</style>
<h5 class="injected-text">margin</h5>

<div class="box yellow-box">
  <h5 class="box red-box">padding</h5>
  <h5 class="box blue-box">padding</h5>
</div>
```
