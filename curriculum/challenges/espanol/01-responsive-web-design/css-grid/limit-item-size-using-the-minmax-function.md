---
id: 5a94fe4469fb03452672e460
title: Limita el tamaño del elemento usando la función minmax
challengeType: 0
videoUrl: 'https://scrimba.com/p/pByETK/cD97RTv'
forumTopicId: 301131
dashedName: limit-item-size-using-the-minmax-function
---

# --description--

Hay otra función integrada para usar con `grid-template-columns` y `grid-template-rows` llamada `minmax`. Se usa para limitar el tamaño de los elementos cuando el contenedor de la cuadrícula (grid) cambia de tamaño. Para hacer esto, necesitas especificar el rango de tamaño aceptable para tu elemento. A continuación un ejemplo:

```css
grid-template-columns: 100px minmax(50px, 200px);
```

En el código anterior, `grid-template-columns` se configuró para crear dos columnas; la primera tiene 100px de ancho y la segunda tiene un ancho mínimo de 50px y máximo de 200px.

# --instructions--

Usando la función `minmax`, reemplaza `1fr` en la función `repeat` con un tamaño de columna que tenga como mínimo de ancho `90px` y máximo de `1fr`, y cambia el tamaño del panel de la vista previa para ver el efecto.

# --hints--

La clase `container` debe tener una propiedad `grid-template-columns` que repita 3 columnas con un mínimo de ancho de `90px` y máximo de `1fr`.

```js
assert(
  code.match(
    /.container\s*?{[\s\S]*grid-template-columns\s*?:\s*?repeat\s*?\(\s*?3\s*?,\s*?minmax\s*?\(\s*?90px\s*?,\s*?1fr\s*?\)\s*?\)\s*?;[\s\S]*}/gi
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
    /* Only change code below this line */

    grid-template-columns: repeat(3, 1fr);

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
```

# --solutions--

```html
<style>.container {grid-template-columns: repeat(3, minmax(90px, 1fr));}</style>
```
