---
id: 587d78ac367417b2b2512af4
title: Utiliza la propiedad flex-direction para hacer una columna
challengeType: 0
videoUrl: 'https://scrimba.com/p/pVaDAv/cZmWeA4'
forumTopicId: 301109
dashedName: use-the-flex-direction-property-to-make-a-column
---

# --description--

Los dos últimos desafíos usaron la propiedad `flex-direction` establecida en `row`. Esta propiedad también puede crear una columna apilando verticalmente los hijos de un contenedor flex.

# --instructions--

Agrega la propiedad CSS `flex-direction` al elemento `#box-container` y asígnale un valor de `column`.

# --hints--

El elemento `#box-container` debe tener una propiedad `flex-direction` establecida en `column`.

```js
assert($('#box-container').css('flex-direction') == 'column');
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
    display: flex;
    height: 500px;
    flex-direction: column;
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
