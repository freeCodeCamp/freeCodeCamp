---
id: 5a94fe6269fb03452672e462
title: Crea diseños flexibles usando auto-fit
challengeType: 0
videoUrl: 'https://scrimba.com/p/pByETK/c3dPph8'
forumTopicId: 301127
dashedName: create-flexible-layouts-using-auto-fit
---

# --description--

`auto-fit` funciona casi igual que `auto-fill`. La única diferencia es que cuando el tamaño del contenedor excede el tamaño de todos sus elementos combinados, `auto-fill` sigue insertando filas o columnas vacías y empuja los elementos hacia un lado, mientras que `auto-fit` colapsa esas filas o columnas y estira los elementos para que cubran el tamaño del contenedor.

**Nota:** si a tu contenedor no le caben todos los elementos en una fila, los moverá hacia abajo a una nueva fila.

# --instructions--

En la segunda cuadrícula (grid), usa `auto-fit` con `repeat` para rellenar la cuadrícula con columnas que tengan un ancho mínimo de `60px` y máximo de `1fr`. Luego cambia el tamaño de la vista previa para ver la diferencia.

# --hints--

La clase `container2` debe tener una propiedad `grid-template-columns` con `repeat` y `auto-fit` que cubra la cuadrícula con columnas que tengan un ancho mínimo de `60px` y un máximo de `1fr`.

```js
assert(
  code.match(
    /.container2\s*?{[\s\S]*grid-template-columns\s*?:\s*?repeat\s*?\(\s*?auto-fit\s*?,\s*?minmax\s*?\(\s*?60px\s*?,\s*?1fr\s*?\)\s*?\)\s*?;[\s\S]*}/gi
  )
);
```

# --seed--

## --seed-contents--

```html
<style>
  .item1{background:LightSkyBlue;}
  .item2{background:LightSalmon;}
  .item3{background:PaleTurquoise;}
  .item4{background:LightPink;}
  .item5{background:PaleGreen;}

  .container {
    font-size: 40px;
    min-height: 100px;
    width: 100%;
    background: LightGray;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(60px, 1fr));
    grid-template-rows: 1fr 1fr 1fr;
    grid-gap: 10px;
  }

  .container2 {
    font-size: 40px;
    min-height: 100px;
    width: 100%;
    background: Silver;
    display: grid;
    /* Only change code below this line */

    grid-template-columns: repeat(3, minmax(60px, 1fr));

    /* Only change code above this line */
    grid-template-rows: 1fr 1fr 1fr;
    grid-gap: 10px;
  }
</style>

<div class="container">
  <div class="item1">1</div>
  <div class="item2">2</div>
  <div class="item3">3</div>
  <div class="item4">4</div>
  <div class="item5">5</div>
</div>
<div class="container2">
  <div class="item1">1</div>
  <div class="item2">2</div>
  <div class="item3">3</div>
  <div class="item4">4</div>
  <div class="item5">5</div>
</div>
```

# --solutions--

```html
<style>.container {grid-template-columns: repeat( auto-fill, minmax(60px, 1fr));} .container2 {grid-template-columns: repeat(auto-fit, minmax(60px, 1fr));}</style>
```
