---
id: 5a9036ee38fddaf9a66b5d34
title: Usa unidades CSS Grid para cambiar el tamaño de las columnas y filas
challengeType: 0
videoUrl: 'https://scrimba.com/p/pByETK/cvE8phd'
forumTopicId: 301134
dashedName: use-css-grid-units-to-change-the-size-of-columns-and-rows
---

# --description--

Puedes usar unidades absolutas y relativas como `px` y `em` en CSS Grid para definir el tamaño de filas y columnas. Puedes usar estas también:

`fr`: fija la columna o fila a una fracción del espacio disponible,

`auto`: fija la columna o fila al ancho o alto de su contenido automáticamente,

`%`: ajusta la columna o fila al porcentaje de ancho de su contenedor.

A continuación el código que genera el resultado de la vista previa:

```css
grid-template-columns: auto 50px 10% 2fr 1fr;
```

Esta línea de código genera cinco columnas. La primera columna es tan ancha como su contenido, la segunda tiene 50px de ancho, la tercera es el 10% de su contenedor y para las últimas dos columnas; el espacio restante es dividido en tres secciones: dos son asignadas a la cuarta columna y una a la quinta columna.

# --instructions--

Haz una cuadrícula con tres columnas que tengan las siguientes dimensiones de ancho: 1fr, 100px y 2fr.

# --hints--

Tu clase `container` debe tener una propiedad `grid-template-columns` que tenga tres columnas con los siguientes anchos: `1fr`, `100px`, y `2fr`.

```js
assert(
  code.match(
    /.container\s*?{[\s\S]*grid-template-columns\s*?:\s*?1fr\s*?100px\s*?2fr\s*?;[\s\S]*}/gi
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
    width: 100%;
    background: LightGray;
    display: grid;
    /* Only change code below this line */

    grid-template-columns: auto 50px 10% 2fr 1fr;

    /* Only change code above this line */
    grid-template-rows: 50px 50px;
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
<style>.container {grid-template-columns: 1fr 100px 2fr;}</style>
```
