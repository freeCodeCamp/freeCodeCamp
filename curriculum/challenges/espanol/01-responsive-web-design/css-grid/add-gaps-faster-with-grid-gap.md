---
id: 5a9036ee38fddaf9a66b5d37
title: Agrega espacios más rápido con grid-gap
challengeType: 0
videoUrl: 'https://scrimba.com/p/pByETK/ca2qVtv'
forumTopicId: 301118
dashedName: add-gaps-faster-with-grid-gap
---

# --description--

`grid-gap` es una propiedad abreviada para `grid-row-gap` y `grid-column-gap` de los dos desafíos anteriores que es más conveniente usar. Si `grid-gap` tiene un valor, creará un espacio entre todas las filas y columnas. Sin embargo, si hay dos valores, usará el primero de estos para poner los espacios entre las filas y el segundo para los espacios entre las columnas.

# --instructions--

Usa `grid-gap` para introducir un espacio de `10px` entre las filas y un espacio de `20px` entre las columnas.

# --hints--

La clase `container` debe tener una propiedad `grid-gap` que introduzca un espacio de `10px` entre las filas y un espacio de `20px` entre las columnas.

```js
assert(
  code.match(
    /.container\s*?{[\s\S]*grid-gap\s*?:\s*?10px\s+?20px\s*?;[\s\S]*}/gi
  )
);
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
    min-height: 300px;
    width: 100%;
    background: LightGray;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: 1fr 1fr 1fr;
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
<style>.container {grid-gap: 10px 20px;}</style>
```
