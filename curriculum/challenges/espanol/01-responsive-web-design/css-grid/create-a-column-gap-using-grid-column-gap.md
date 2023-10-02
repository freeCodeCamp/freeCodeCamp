---
id: 5a9036ee38fddaf9a66b5d35
title: Crea un espacio entre columnas usando grid-column-gap
challengeType: 0
videoUrl: 'https://scrimba.com/p/pByETK/cVZ8vfD'
forumTopicId: 301124
dashedName: create-a-column-gap-using-grid-column-gap
---

# --description--

Hasta ahora en las grids que has creado, las columnas han estado todas juntas. Algunas veces querrás un espacio entre las columnas. Para agregar un espacio entre las columnas, usa la propiedad`grid-column-gap` de la siguiente manera:

```css
grid-column-gap: 10px;
```

Esto crea espacios vacíos de 10px entre todas las columnas.

# --instructions--

Haz que las columnas en la cuadrícula (grid) tengan `20px` de espacio.

# --hints--

La clase `container` debe tener una propiedad `grid-column-gap` que tenga como valor `20px`.

```js
assert(
  code.match(
    /.container\s*?{[\s\S]*grid-column-gap\s*?:\s*?20px\s*?;[\s\S]*}/gi
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
<style>.container {grid-column-gap: 20px;}</style>
```
