---
id: 587d78ad367417b2b2512afb
title: Utiliza la propiedad flex-shrink para reducir elementos
challengeType: 0
videoUrl: 'https://scrimba.com/p/pVaDAv/cd3PBfr'
forumTopicId: 301113
dashedName: use-the-flex-shrink-property-to-shrink-items
---

# --description--

Hasta ahora, todas las propiedades en los desafíos se aplican al contenedor flexible (el padre de los elementos flex). Sin embargo, hay varias propiedades útiles para los elementos flex.

La primera es la propiedad `flex-shrink`. Cuando se usa, permite que un elemento se contraiga si el contenedor flex es demasiado pequeño. Los elementos se reducen cuando el ancho del contenedor principal es menor que el ancho combinado de todos los elementos flex dentro del él.

La propiedad `flex-shrink` toma números como valores. Cuando mayor sea el número, más se reducirá en comparación con los otros elementos en el contenedor. Por ejemplo, si un elemento tiene un `flex-shrink` con valor de `1` y el otro tiene un `flex-shrink` con valor de `3`, el que tiene el valor de `3` se reducirá tres veces más que el otro.

# --instructions--

Agrega la propiedad CSS `flex-shrink` tanto a `#box-1` como a `#box-2`. Da a `#box-1` un valor de `1` y a `#box-2` un valor de `2`.

# --hints--

El elemento `#box-1` debe tener la propiedad `flex-shrink` establecida en un valor de `1`.

```js
assert($('#box-1').css('flex-shrink') == '1');
```

El elemento `#box-2` debe tener la propiedad `flex-shrink` establecida en un valor de `2`.

```js
assert($('#box-2').css('flex-shrink') == '2');
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
    width: 100%;
    height: 200px;

  }

  #box-2 {
    background-color: orangered;
    width: 100%;
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
    width: 100%;
    height: 200px;
    flex-shrink: 1;
  }

  #box-2 {
    background-color: orangered;
    width: 100%;
    height: 200px;
    flex-shrink: 2;
  }
</style>

<div id="box-container">
  <div id="box-1"></div>
  <div id="box-2"></div>
</div>
```
