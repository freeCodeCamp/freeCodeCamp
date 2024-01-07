---
id: 587d78af367417b2b2512b00
title: Usa la propiedad align-self
challengeType: 0
videoUrl: 'https://scrimba.com/p/pVaDAv/cMbvzfv'
forumTopicId: 301107
dashedName: use-the-align-self-property
---

# --description--

La última propiedad para elementos flexibles es `align-self`. Esta propiedad te permite ajustar la alineación de cada elemento individualmente, en lugar de ajustarlos todos a la vez. Esto es útil ya que otras técnicas comunes de ajuste usan las propiedades CSS `float`, `clear`, y `vertical-align`, las cuales no funcionan en elementos flexibles.

`align-self` acepta los mismos valores que `align-items` y reemplazará cualquier valor establecido por la propiedad `align-items`.

# --instructions--

Agrega la propiedad CSS `align-self` tanto a `#box-1` como a `#box-2`. Da a `#box-1` un valor de `center` y a `#box-2` un valor de `flex-end`.

# --hints--

El elemento `#box-1` debe tener la propiedad `align-self` establecida en un valor de `center`.

```js
assert($('#box-1').css('align-self') == 'center');
```

El elemento `#box-2` debe tener la propiedad `align-self` establecida en un valor de `flex-end`.

```js
assert($('#box-2').css('align-self') == 'flex-end');
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
    align-self: center;
    height: 200px;
    width: 200px;
  }

  #box-2 {
    background-color: orangered;
    align-self: flex-end;
    height: 200px;
    width: 200px;
  }
</style>

<div id="box-container">
  <div id="box-1"></div>
  <div id="box-2"></div>
</div>
```
