---
id: 5a94fe3669fb03452672e45f
title: Reduce repeticiones usando la función repeat
challengeType: 0
videoUrl: 'https://scrimba.com/p/pByETK/cQvqyHR'
forumTopicId: 301133
dashedName: reduce-repetition-using-the-repeat-function
---

# --description--

Cuando usaste `grid-template-columns` y `grid-template-rows` para definir la estructura de una cuadrícula (grid), ingresaste un valor para cada fila o columna que creaste.

Digamos que quieres una cuadrícula con 100 filas del mismo tamaño. No es muy práctico insertar 100 valores manualmente. Afortunadamente, hay una mejor manera - usando la función `repeat` para especificar el número de veces que quieres que tu columna o fila se repita, seguido de una coma y el valor que quieres repetir.

A continuación un ejemplo que crea una cuadrícula de 100 filas, cada fila con 50px de alto.

```css
grid-template-rows: repeat(100, 50px);
```

También puedes repetir múltiples valores con la función repeat e insertar la función entre otros valores al definir una estructura de cuadrícula. Así se ve:

```css
grid-template-columns: repeat(2, 1fr 50px) 20px;
```

Esto traduce a:

```css
grid-template-columns: 1fr 50px 1fr 50px 20px;
```

**Nota:** el `1fr 50px` es repetido dos veces, seguido de 20px.

# --instructions--

Usa `repeat` para eliminar repetición de la propiedad `grid-template-columns`.

# --hints--

La clase `container` debe tener una propiedad `grid-template-columns` que repita 3 columnas con ancho de `1fr`.

```js
assert(
  code.match(
    /.container\s*?{[\s\S]*grid-template-columns\s*?:\s*?repeat\s*?\(\s*?3\s*?,\s*?1fr\s*?\)\s*?;[\s\S]*}/gi
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

    grid-template-columns: 1fr 1fr 1fr;

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
<style>.container {grid-template-columns: repeat(3, 1fr);}</style>
```
