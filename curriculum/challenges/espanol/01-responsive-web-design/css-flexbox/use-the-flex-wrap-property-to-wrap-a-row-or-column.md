---
id: 587d78ad367417b2b2512afa
title: Usa la propiedad flex-wrap para envolver una fila o columna
challengeType: 0
videoUrl: 'https://scrimba.com/p/pVaDAv/cQv9ZtG'
forumTopicId: 301114
dashedName: use-the-flex-wrap-property-to-wrap-a-row-or-column
---

# --description--

CSS flexbox tiene una característica para dividir un flex container en varias filas (o columnas). De forma predeterminada, un contenedor flexible encajará todos los elementos flexibles juntos. Por ejemplo, una fila estará completa en una sola línea.

Sin embargo, usar la propiedad `flex-wrap` le indica al CSS que envuelva los elementos. Esto significa que los elementos extra se mueven hacia una nueva fila o columna. El punto de ruptura donde ocurre la envoltura depende del tamaño de los elementos y del tamaño del contenedor.

CSS también tiene opciones para la dirección de la envoltura:

<ul><li><code>nowrap</code>: esta es la configuración predeterminada, y no envuelve elementos.</li><li><code>wrap</code>: envuelve elementos en múltiples líneas de arriba a abajo si están en filas y de izquierda a derecha si están en columnas.</li><li><code>wrap-reverse</code>: envuelve elementos en múltiples líneas de abajo hacia arriba si están en filas y de derecha a izquierda si están en columnas.</li></ul>

# --instructions--

La disposición actual tiene demasiadas cajas para una sola fila. Agrega la propiedad CSS `flex-wrap` al elemento `#box-container` y asígnale un valor de `wrap`.

# --hints--

El elemento `#box-container` debe tener la propiedad `flex-wrap` establecida en un valor de `wrap`.

```js
assert($('#box-container').css('flex-wrap') == 'wrap');
```

# --seed--

## --seed-contents--

```html
<style>
  #box-container {
    background: gray;
    display: flex;
    height: 100%;

  }
  #box-1 {
    background-color: dodgerblue;
    width: 25%;
    height: 50%;
  }

  #box-2 {
    background-color: orangered;
    width: 25%;
    height: 50%;
  }
  #box-3 {
    background-color: violet;
    width: 25%;
    height: 50%;
  }
  #box-4 {
    background-color: yellow;
    width: 25%;
    height: 50%;
  }
  #box-5 {
    background-color: green;
    width: 25%;
    height: 50%;
  }
  #box-6 {
    background-color: black;
    width: 25%;
    height: 50%;
  }
</style>

<div id="box-container">
  <div id="box-1"></div>
  <div id="box-2"></div>
  <div id="box-3"></div>
  <div id="box-4"></div>
  <div id="box-5"></div>
  <div id="box-6"></div>
</div>
```

# --solutions--

```html
<style>
  #box-container {
    background: gray;
    display: flex;
    height: 100%;
    flex-wrap: wrap;
  }
  #box-1 {
    background-color: dodgerblue;
    width: 25%;
    height: 50%;
  }

  #box-2 {
    background-color: orangered;
    width: 25%;
    height: 50%;
  }
  #box-3 {
    background-color: violet;
    width: 25%;
    height: 50%;
  }
  #box-4 {
    background-color: yellow;
    width: 25%;
    height: 50%;
  }
  #box-5 {
    background-color: green;
    width: 25%;
    height: 50%;
  }
  #box-6 {
    background-color: black;
    width: 25%;
    height: 50%;
  }
</style>

<div id="box-container">
  <div id="box-1"></div>
  <div id="box-2"></div>
  <div id="box-3"></div>
  <div id="box-4"></div>
  <div id="box-5"></div>
  <div id="box-6"></div>
</div>
```
