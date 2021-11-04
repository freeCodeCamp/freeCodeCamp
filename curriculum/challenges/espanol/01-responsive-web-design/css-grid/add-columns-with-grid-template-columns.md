---
id: 5a9036d038fddaf9a66b5d32
title: Agrega columnas con grid-template-columns
challengeType: 0
videoUrl: 'https://scrimba.com/p/pByETK/c7NzDHv'
forumTopicId: 301117
dashedName: add-columns-with-grid-template-columns
---

# --description--

Crear un simple elemento cuadrícula (grid) no te llevará muy lejos. Necesitas también definir su estructura. Para agregar columnas a la cuadrícula, usa la propiedad `grid-template-columns` en el contenedor de la cuadrícula como se demuestra a continuación:

```css
.container {
  display: grid;
  grid-template-columns: 50px 50px;
}
```

Esto le dará a tu cuadrícula dos columnas que tienen 50px de ancho cada una. El número de parámetros que se le da a la propiedad `grid-template-columns` indica el número de columnas en la cuadrícula y el valor de cada parámetro indica el ancho de cada columna.

# --instructions--

Haz que el contenedor de la cuadrícula tenga tres columnas con un ancho de `100px` cada una.

# --hints--

La clase `container` debe tener la propiedad `grid-template-columns` con tres unidades de `100px`.

```js
assert(new __helpers.CSSHelp(document).getStyle('.container')?.gridTemplateColumns === '100px 100px 100px');
```

# --seed--

## --seed-contents--

```html
<style>
  .d1{background:LightSkyBlue;}
  .d2{background:LightSalmon;}
  .d3{background:PaleTurquoise;}
  .d4{background:LightPink;}
  .d5{background:PaleGreen;}

  .container {
    font-size: 40px;
    width: 100%;
    background: LightGray;
    display: grid;
    /* Only change code below this line */


    /* Only change code above this line */
  }
</style>

<div class="container">
  <div class="d1">1</div>
  <div class="d2">2</div>
  <div class="d3">3</div>
  <div class="d4">4</div>
  <div class="d5">5</div>
</div>
```

# --solutions--

```html
<style>.container {grid-template-columns: 100px 100px 100px;}</style>
```
