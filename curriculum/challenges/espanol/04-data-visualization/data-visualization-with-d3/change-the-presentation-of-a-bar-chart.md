---
id: 587d7fa8367417b2b2512bca
title: Cambia la presentación de un gráfico de barras
challengeType: 6
forumTopicId: 301481
dashedName: change-the-presentation-of-a-bar-chart
---

# --description--

El último desafío creó un gráfico de barras, pero hay algunos cambios en el formateo que podrían mejorarlo:

1) Agrega espacio entre cada barra para separarlas visualmente, lo cual se hace agregando un margen al CSS de la clase `bar`

2) Aumenta la altura de las barras para visualizar mejor la diferencia de valores, lo cual se realiza multiplicando cada valor por un número para escalar la altura

# --instructions--

Primero, agrega un `margin` de `2px` a la clase `bar` en la etiqueta `style`. A continuación, cambia la función callback en el método `style()` para que retorne un valor `10` veces más grande que el valor del dato original (mas el `px`).

**Nota:** Multiplicar cada punto de dato por la *misma* constante solo altera la escala. Es como acercarnos, y no cambia el significado de los datos subyacentes.

# --hints--

El primer `div` debe tener un `height` de `120` pixeles y un `margin` de `2` pixeles.

```js
assert(
  $('div').eq(0).css('height') == '120px' &&
    $('div').eq(0).css('margin-right') == '2px'
);
```

El segundo `div` debe tener un `height` de `310` pixeles y un `margin` de `2` pixeles.

```js
assert(
  $('div').eq(1).css('height') == '310px' &&
    $('div').eq(1).css('margin-right') == '2px'
);
```

El tercer `div` debe tener un `height` de `220` pixeles y un `margin` de `2` pixeles.

```js
assert(
  $('div').eq(2).css('height') == '220px' &&
    $('div').eq(2).css('margin-right') == '2px'
);
```

El cuarto `div` debe tener un `height` de `170` pixeles y un `margin` de `2` pixeles.

```js
assert(
  $('div').eq(3).css('height') == '170px' &&
    $('div').eq(3).css('margin-right') == '2px'
);
```

El quinto `div` debe tener un `height` de `250` pixeles y un `margin` de `2` pixeles.

```js
assert(
  $('div').eq(4).css('height') == '250px' &&
    $('div').eq(4).css('margin-right') == '2px'
);
```

El sexto `div` debe tener un `height` de `180` pixeles y un `margin` de `2` pixeles.

```js
assert(
  $('div').eq(5).css('height') == '180px' &&
    $('div').eq(5).css('margin-right') == '2px'
);
```

El séptimo `div` debe tener un `height` de `290` pixeles y un `margin` de `2` pixeles.

```js
assert(
  $('div').eq(6).css('height') == '290px' &&
    $('div').eq(6).css('margin-right') == '2px'
);
```

El octavo `div` debe tener un `height` de `140` pixeles y un `margin` de `2` pixeles.

```js
assert(
  $('div').eq(7).css('height') == '140px' &&
    $('div').eq(7).css('margin-right') == '2px'
);
```

El noveno `div` debe tener un `height` de `90` pixeles y un `margin` de `2` pixeles.

```js
assert(
  $('div').eq(8).css('height') == '90px' &&
    $('div').eq(8).css('margin-right') == '2px'
);
```

# --seed--

## --seed-contents--

```html
<style>
  .bar {
    width: 25px;
    height: 100px;
    /* Add your code below this line */


    /* Add your code above this line */
    display: inline-block;
    background-color: blue;
  }
</style>
<body>
  <script>
    const dataset = [12, 31, 22, 17, 25, 18, 29, 14, 9];

    d3.select("body").selectAll("div")
      .data(dataset)
      .enter()
      .append("div")
      .attr("class", "bar")
      .style("height", (d) => (d + "px")) // Change this line
  </script>
</body>
```

# --solutions--

```html
<style>
  .bar {
    width: 25px;
    height: 100px;
    margin: 2px;
    display: inline-block;
    background-color: blue;
  }
</style>
<body>
  <script>
    const dataset = [12, 31, 22, 17, 25, 18, 29, 14, 9];

    d3.select("body").selectAll("div")
      .data(dataset)
      .enter()
      .append("div")
      .attr("class", "bar")
      .style("height", (d) => (d * 10 + "px"))
  </script>
</body>
```
