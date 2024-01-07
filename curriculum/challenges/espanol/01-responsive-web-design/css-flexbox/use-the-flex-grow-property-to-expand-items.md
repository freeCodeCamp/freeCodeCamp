---
id: 587d78ae367417b2b2512afc
title: Usa la propiedad flex-grow para expandir elementos
challengeType: 0
videoUrl: 'https://scrimba.com/p/pVaDAv/c2p78cg'
forumTopicId: 301111
dashedName: use-the-flex-grow-property-to-expand-items
---

# --description--

Lo contrario de `flex-shrink` es la propiedad `flex-grow`. Recuerda que `flex-shrink` controla el tamaño de los elementos cuando el contenedor se encoge. La propiedad `flex-grow` controla el tamaño de los elementos cuando el contenedor primario se expande.

Utilizando un ejemplo similar al del último desafío, si un elemento tiene un `flex-grow` con valor de `1` y el otro tiene un `flex-grow` con valor de `3`, el que tiene el valor de `3` crecerá tres veces más que el otro.

# --instructions--

Agrega la propiedad CSS `flex-grow` tanto a `#box-1` como a `#box-2`. Da a `#box-1` un valor de `1` y a `#box-2` un valor de `2`.

# --hints--

El elemento `#box-1` debe tener la propiedad `flex-grow` establecida en un valor de `1`.

```js
assert($('#box-1').css('flex-grow') == '1');
```

El elemento `#box-2` debe tener la propiedad `flex-grow` establecida en un valor de `2`.

```js
assert($('#box-2').css('flex-grow') == '2');
```

# --seed--

## --seed-contents--

```html
<style>
  #box-container {
    display: flex;
    height: 500px;
  }

  #box-1 {
    background-color: dodgerblue;
    height: 200px;

  }

  #box-2 {
    background-color: orangered;
    height: 200px;

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
    display: flex;
    height: 500px;
  }

  #box-1 {
    background-color: dodgerblue;
    height: 200px;
    flex-grow: 1;
  }

  #box-2 {
    background-color: orangered;
    height: 200px;
    flex-grow: 2;
  }
</style>

<div id="box-container">
  <div id="box-1"></div>
  <div id="box-2"></div>
</div>
```
