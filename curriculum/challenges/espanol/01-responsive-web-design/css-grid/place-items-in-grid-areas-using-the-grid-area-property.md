---
id: 5a94fe1369fb03452672e45d
title: Ubica elementos en áreas de cuadrícula usando la propiedad grid-area
challengeType: 0
videoUrl: 'https://scrimba.com/p/pByETK/cRrqmtV'
forumTopicId: 301132
dashedName: place-items-in-grid-areas-using-the-grid-area-property
---

# --description--

Después de crear una plantilla de área para tu contenedor de cuadrícula (grid), cómo se muestra en el desafío anterior, puedes ubicar un elemento en tu área personalizada referenciando el nombre que le diste. Para hacer esto, usa la propiedad `grid-area` sobre un elemento así:

```css
.item1 {
  grid-area: header;
}
```

Esto le dice a la cuadrícula que quieres que la clase `item1` se ubique en el área llamada `header`. En este caso, el item usará la totalidad de la fila superior debido a que esa área es nombrada como el área `header`.

# --instructions--

Ubica un elemento con clase `item5` en el área `footer` usando la propiedad `grid-area`.

# --hints--

La clase `item5` debe tener una propiedad `grid-area` que tenga como valor `footer`.

```js
assert(
  __helpers
    .removeCssComments(code)
    .match(/.item5\s*?{[\s\S]*grid-area\s*?:\s*?footer\s*?;[\s\S]*}/gi)
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

  .item5 {
    background: PaleGreen;
    /* Only change code below this line */


    /* Only change code above this line */
  }

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

# --solutions--

```html
<style>.item5 {grid-area: footer;}</style>
```
