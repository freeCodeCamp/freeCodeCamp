---
id: 5a94fe2669fb03452672e45e
title: Usa grid-area sin crear plantillas de área
challengeType: 0
videoUrl: 'https://scrimba.com/p/pByETK/c6N7VhK'
forumTopicId: 301135
dashedName: use-grid-area-without-creating-an-areas-template
---

# --description--

La propiedad `grid-area` que aprendiste en el último desafío puede ser usada de otra manera. Si tu cuadrícula (grid) no tiene plantillas de área de referencia, puedes crear un área para un elemento sobre la marcha para ubicar los elementos de la siguiente manera:

```css
item1 { grid-area: 1/1/2/4; }
```

Esto usa los números de líneas aprendidos anteriormente para definir cuál será el área de ese elemento. Los números en el ejemplo anterior representan estos valores:

```css
grid-area: horizontal line to start at / vertical line to start at / horizontal line to end at / vertical line to end at;
```

Entonces, el elemento en el ejemplo ocupará las filas entre las líneas 1 y 2, y las columnas entre las líneas 1 y 4.

# --instructions--

Usa la propiedad `grid-area` para ubicar el elemento con clase `item5` entre la tercera y cuarta línea horizontal y entre la primera y cuarta línea vertical.

# --hints--

La clase `item5` debe tener una propiedad `grid-area` para rellenar toda el área entre la tercera y cuarta línea horizontal, y la primera y cuarta línea vertical.

```js
assert(
  code.match(
    /.item5\s*?{[\s\S]*grid-area\s*?:\s*?3\s*?\/\s*?1\s*?\/\s*?4\s*?\/\s*?4\s*?;[\s\S]*}/gi
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
<style>.item5 {grid-area: 3/1/4/4;}</style>
```
