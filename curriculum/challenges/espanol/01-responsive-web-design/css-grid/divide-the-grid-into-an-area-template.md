---
id: 5a94fe0569fb03452672e45c
title: Divide la cuadrícula en una plantilla de área
challengeType: 0
forumTopicId: 301130
dashedName: divide-the-grid-into-an-area-template
---

# --description--

Puedes agrupar las celdas de tu cuadrícula en una <dfn>área</dfn> y darle a esa área un nombre personalizado. Haz esto usando `grid-template-areas` en el contenedor de la siguiente manera:

```css
grid-template-areas:
  "header header header"
  "advert content content"
  "advert footer footer";
```

El código anterior agrupa las celdas de la cuadrícula en cuatro áreas; `header`, `advert`, `content` y `footer`. Cada palabra representa una celda y cada par de comillas representa una fila.

# --instructions--

Cambia la plantilla para que el área de `footer` abarque toda la fila de abajo. La definición de las áreas no tendrá ningún efecto visual en este momento. Después, usarás un elemento para ver cómo funciona.

# --hints--

La clase `container` debe tener una propiedad `grid-template-areas` similar al ejemplo, pero con el área `footer` abarcando toda la fila de abajo.

```js
assert(
  __helpers
    .removeCssComments(code)
    .match(
      /.container\s*?{[\s\S]*grid-template-areas\s*?:\s*?"\s*?header\s*?header\s*?header\s*?"\s*?"\s*?advert\s*?content\s*?content\s*?"\s*?"\s*?footer\s*?footer\s*?footer\s*?"\s*?;[\s\S]*}/gi
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
      "advert footer footer";
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
      "advert content content"
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
