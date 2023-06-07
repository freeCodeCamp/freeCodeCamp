---
id: 587d78ab367417b2b2512af0
title: 'Utiliza display: flex para posicionar dos cajas'
challengeType: 0
videoUrl: 'https://scrimba.com/p/pVaDAv/cgz3QS7'
forumTopicId: 301105
dashedName: use-display-flex-to-position-two-boxes
---

# --description--

Esta sección utiliza estilos de desafío alternos para mostrar cómo usar CSS para posicionar elementos de una manera flexible. En primer lugar, un desafío explicará la teoría, luego un desafío práctico utilizando un simple componente de tweet aplicará el concepto de flexbox.

Colocar la propiedad CSS `display: flex;` en un elemento te permite usar otras propiedades flex para construir una página adaptable.

# --instructions--

Agrega la propiedad CSS `display` a `#box-container` y establece su valor como `flex`.

# --hints--

`#box-container` debería tener la propiedad `display` establecida en un valor de `flex`.

```js
assert($('#box-container').css('display') == 'flex');
```

# --seed--

## --seed-contents--

```html
<style>
  #box-container {
    height: 500px;

  }

  #box-1 {
    background-color: dodgerblue;
    width: 50%;
    height: 50%;
  }

  #box-2 {
    background-color: orangered;
    width: 50%;
    height: 50%;
  }
</style>
<div id="box-container">
  <div id="box-1"></div>
  <div id="box-2"></div>
</div>
```

# --solutions--

```html
<style>
  #box-container {
    height: 500px;
    display: flex;
  }

  #box-1 {
    background-color: dodgerblue;
    width: 50%;
    height: 50%;
  }

  #box-2 {
    background-color: orangered;
    width: 50%;
    height: 50%;
  }
</style>
<div id="box-container">
  <div id="box-1"></div>
  <div id="box-2"></div>
</div>
```
