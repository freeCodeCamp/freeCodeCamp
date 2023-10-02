---
id: 5a94fe8569fb03452672e464
title: Crea cuadrículas (grids) dentro de cuadrículas
challengeType: 0
forumTopicId: 301128
dashedName: create-grids-within-grids
---

# --description--

Convertir un elemento a una cuadrícula solo afecta el comportamiento de sus descendientes directos. Entonces, al convertir un descendiente directo a una cuadrícula, obtienes una cuadrícula dentro de una cuadrícula.

Por ejemplo, al establecer las propiedades `display` and `grid-template-columns` del elemento con clase `item3`, creas una cuadrícula dentro de tu cuadrícula.

# --instructions--

Convierte el elemento con clase `item3` en una cuadrícula con dos columnas de ancho `auto` y `1fr` usando `display` y `grid-template-columns`.

# --hints--

La clase `item3` debe tener una propiedad `grid-template-columns` con los valores `auto` y `1fr`.

```js
assert(
  code.match(
    /.item3\s*?{[\s\S]*grid-template-columns\s*?:\s*?auto\s*?1fr\s*?;[\s\S]*}/gi
  )
);
```

La clase `item3` debe tener una propiedad `display` con valor `grid`.

```js
assert(code.match(/.item3\s*?{[\s\S]*display\s*?:\s*?grid\s*?;[\s\S]*}/gi));
```

# --seed--

## --seed-contents--

```html
<style>
  .container {
    font-size: 1.5em;
    min-height: 300px;
    width: 100%;
    background: LightGray;
    display: grid;
    grid-template-columns: auto 1fr;
    grid-template-rows: auto 1fr auto;
    grid-gap: 10px;
    grid-template-areas:
      "advert header"
      "advert content"
      "advert footer";
  }
  .item1 {
    background: LightSkyBlue;
    grid-area: header;
  }

  .item2 {
    background: LightSalmon;
    grid-area: advert;
  }

  .item3 {
    background: PaleTurquoise;
    grid-area: content;
    /* Only change code below this line */


    /* Only change code above this line */
  }

  .item4 {
    background: lightpink;
    grid-area: footer;
  }

  .itemOne {
    background: PaleGreen;
  }

  .itemTwo {
    background: BlanchedAlmond;
  }

</style>

<div class="container">
  <div class="item1">header</div>
  <div class="item2">advert</div>
  <div class="item3">
    <div class="itemOne">paragraph1</div>
    <div class="itemTwo">paragraph2</div>
  </div>
  <div class="item4">footer</div>
</div>
```

# --solutions--

```html
<style>.item3 {grid-template-columns: auto 1fr; display: grid;}</style>
```
