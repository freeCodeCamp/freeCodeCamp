---
id: 5a94fe0569fb03452672e45c
title: Divide la cuadrícula en una plantilla de área
challengeType: 0
videoUrl: 'https://scrimba.com/p/pByETK/cLLpGAy'
forumTopicId: 301130
dashedName: divide-the-grid-into-an-area-template
---

# --description--

Puedes agrupar las celdas de tu grid en una <dfn>área</dfn> y darle a esa área un nombre personalizado. Haz esto usando `grid-template-areas` en el contenedor de la siguiente manera:

```css
grid-template-areas:
  "header header header"
  "advert content content"
  "footer footer footer";
```

El código anterior fusiona las tres celdas superiores en una área llamada `header`, las tres celdas inferiores en una área `footer` y hace dos áreas en la fila del medio; `advert` y `content`. **Nota:** cada palabra en el código representa una celda y cada par de comillas representa una fila. Además de los nombres personalizados, puedes usar un punto (`.`) para designar una celda vacía en la grid.

# --instructions--

Acomoda la plantilla de área de manera que la celda llamada `advert` se convierta en una celda vacía.

# --hints--

La clase `container` debe tener una propiedad `grid-template-areas` similar al anterior, pero que tenga `.` en vez del área `advert`.

```js
assert(
  __helpers
    .removeCssComments(code)
    .match(
      /.container\s*?{[\s\S]*grid-template-areas\s*?:\s*?"\s*?header\s*?header\s*?header\s*?"\s*?"\s*?.\s*?content\s*?content\s*?"\s*?"\s*?footer\s*?footer\s*?footer\s*?"\s*?;[\s\S]*}/gi
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
    min-height: 300px;
    width: 100%;
    background: LightGray;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: 1fr 1fr 1fr;
    grid-gap: 10px;
    grid-template-areas:
    /* Only change code below this line */
      "header header header"
      "advert content content"
      "footer footer footer";
    /* Only change code above this line */
  }
</style>

<div class="container">
  <div class="item1">1</div>
  <div class="item2">2</div>
  <div class="item3">3</div>
  <div class="item4">4</div>
  <div class="item5">5</div>
</div>
```

# --solutions--

```html
<style>
  .item1{background:LightSkyBlue;}
  .item2{background:LightSalmon;}
  .item3{background:PaleTurquoise;}
  .item4{background:LightPink;}
  .item5{background:PaleGreen;}

  .container {
    font-size: 40px;
    min-height: 300px;
    width: 100%;
    background: LightGray;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: 1fr 1fr 1fr;
    grid-gap: 10px;

    grid-template-areas:
      "header header header"
      ". content content"
      "footer footer footer";
  }
</style>

<div class="container">
  <div class="item1">1</div>
  <div class="item2">2</div>
  <div class="item3">3</div>
  <div class="item4">4</div>
  <div class="item5">5</div>
</div>
```
