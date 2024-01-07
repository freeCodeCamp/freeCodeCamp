---
id: 587d78ab367417b2b2512af2
title: Utiliza la propiedad flex-direction para hacer una fila
challengeType: 0
videoUrl: 'https://scrimba.com/p/pVaDAv/cBEkbfJ'
forumTopicId: 301110
dashedName: use-the-flex-direction-property-to-make-a-row
---

# --description--

Agregando `display: flex` a un elemento lo convierte en un contenedor flexible. Esto permite alinear cualquier elemento secundario de ese elemento en filas o columnas. Para ello, agrega la propiedad `flex-direction` al elemento principal y configúralo en fila o columna. La creación de una fila alineara los elementos secundarios horizontalmente, y la creación de una columna alineara los elementos secundarios verticalmente.

Otras opciones para `flex-direction` son `row-reverse` y `column-reverse`.

**Nota:** El valor predeterminado para la propiedad `flex-direction` es `row`.

# --instructions--

Agrega la propiedad CSS `flex-direction` al elemento `#box-container` y asígnale un valor de `row-reverse`.

# --hints--

El elemento `#box-container` debe tener una propiedad `flex-direction` establecida en `row-reverse`.

```js
assert($('#box-container').css('flex-direction') == 'row-reverse');
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
    flex-direction: row-reverse;
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
