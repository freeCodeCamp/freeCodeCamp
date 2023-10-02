---
id: 587d78ae367417b2b2512aff
title: Usa la propiedad order para reorganizar los elementos
challengeType: 0
videoUrl: 'https://scrimba.com/p/pVaDAv/cMbvNAG'
forumTopicId: 301116
dashedName: use-the-order-property-to-rearrange-items
---

# --description--

La propiedad `order` se utiliza para indicarle a CSS el orden en que aparecen los elementos flexibles en el contenedor flex. Por defecto, los elementos aparecerán en el mismo orden que vienen en el HTML de origen. La propiedad toma números como valores, y se pueden usar números negativos.

# --instructions--

Agrega la propiedad CSS `order` tanto a `#box-1` como a `#box-2`. Da a `#box-1` un valor de `2` y a `#box-2` un valor de `1`.

# --hints--

El elemento `#box-1` debe tener la propiedad `order` establecida en un valor de `2`.

```js
assert($('#box-1').css('order') == '2');
```

El elemento `#box-2` debe tener la propiedad `order` establecida en un valor de `1`.

```js
assert($('#box-2').css('order') == '1');
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
    width: 200px;
  }

  #box-2 {
    background-color: orangered;

    height: 200px;
    width: 200px;
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
    order: 2;
    height: 200px;
    width: 200px;
  }

  #box-2 {
    background-color: orangered;
    order: 1;
    height: 200px;
    width: 200px;
  }
</style>

<div id="box-container">
  <div id="box-1"></div>
  <div id="box-2"></div>
</div>
```
