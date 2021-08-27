---
id: 5a858944d96184f06fd60d61
title: Crea tu primera CSS Grid
challengeType: 0
videoUrl: 'https://scrimba.com/p/pByETK/cqwREC4'
forumTopicId: 301129
dashedName: create-your-first-css-grid
---

# --description--

Convierte cualquier elemento HTML en una cuadrícula al establecer la propiedad `display` a `grid`. Esto te da la habilidad de usar todas las demás propiedades asociadas con CSS Grid.

**Nota:** en CSS Grid, el elemento padre se refiere como el <dfn>contenedor</dfn> y sus hijos se llaman <dfn>elementos</dfn>.

# --instructions--

Cambia la propiedad display del div que tiene la clase `container` a `grid`.

# --hints--

La clase `container` debe tener una propiedad `display` con valor `grid`.

```js
assert(code.match(/.container\s*?{[\s\S]*display\s*?:\s*?grid\s*?;[\s\S]*}/gi));
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
<style>.container {display: grid;}</style>
```
