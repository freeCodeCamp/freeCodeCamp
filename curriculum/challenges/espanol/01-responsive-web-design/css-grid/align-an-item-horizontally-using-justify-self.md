---
id: 5a90374338fddaf9a66b5d3a
title: Alinea un elemento horizontalmente usando justify-self
challengeType: 0
videoUrl: 'https://scrimba.com/p/pByETK/cJbpKHq'
forumTopicId: 301122
dashedName: align-an-item-horizontally-using-justify-self
---

# --description--

En CSS Grid, el contenido de cada elemento está ubicado en una caja, la cual se refiere como <dfn>celda</dfn>. Puedes alinear la posición del contenido dentro de la celda horizontalmente usando la propiedad `justify-self` en un elemento grid. Por defecto, esta propiedad tiene valor de `stretch`, lo que hace que el contenido cubra todo el ancho de la celda. Esta propiedad de CSS Grid acepta otros valores también:

`start`: alinea el contenido hacia la izquierda de la celda,

`center`: alinea el contenido en el centro de la celda,

`end`: alinea el contenido hacia la derecha de la celda.

# --instructions--

Usa la propiedad `justify-self` para centrar el elemento con la clase `item2`.

# --hints--

La clase `item2` debe tener una propiedad `justify-self` que tenga como valor `center`.

```js
assert(
  code.match(/.item2\s*?{[\s\S]*justify-self\s*?:\s*?center\s*?;[\s\S]*}/gi)
);
```

# --seed--

## --seed-contents--

```html
<style>
  .item1{background: LightSkyBlue;}

  .item2 {
    background: LightSalmon;
    /* Only change code below this line */


    /* Only change code above this line */
  }

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
<style>.item2 {justify-self: center;}</style>
```
