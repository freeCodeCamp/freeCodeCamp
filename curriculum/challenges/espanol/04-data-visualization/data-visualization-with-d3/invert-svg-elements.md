---
id: 587d7fa9367417b2b2512bd0
title: Invierte elementos SVG
challengeType: 6
forumTopicId: 301488
dashedName: invert-svg-elements
---

# --description--

Habrás notado que el gráfico de barras parecía estar al revés, o invertido. Esto se debe a cómo SVG utiliza las coordenadas (x, y).

En SVG, el punto de origen de coordenadas está en la esquina superior izquierda. Una coordenada `x` de 0 coloca la forma en el borde izquierdo del área SVG. Una coordenada `y` de 0 coloca la forma en el borde superior del área SVG. Valores más altos de `x` empujan el rectángulo a la derecha. Valores más altos de `y` empujan el rectángulo hacia abajo.

Para poner las barras hacia arriba, necesitas cambiar la forma en la que la coordenada `y` es calculada. Necesita tener en cuenta tanto la altura de la barra como el alto total del área SVG.

La altura del área SVG es 100. Si tienes un punto de dato de 0 en el conjunto, querrías que la barra comience en la parte inferior del área SVG (no en la superior). Para hacer esto, la coordenada `y` necesita un valor de 100. Si el punto de dato fuese 1, comenzarías con una coordenada `y` de 100 para colocar la barra en la parte inferior. Aparte, debes tener en consideración la altura de la barra de 1, así que la coordenada final de `y` sería 99.

La coordenada `y` que es `y = heightOfSVG - heightOfBar` (y = alturaDeSVG - alturaDeBarra) colocaría las barras hacia arriba.

# --instructions--

Cambia la función callback para el atributo `y` para colocar las barras hacia arriba. Recuerda que la `height` (altura) de la barra es 3 veces el valor del dato `d`.

**Nota:** En general, la relación es `y = h - m * d`, donde `m` es la constante que escala los puntos de datos.

# --hints--

El primer `rect` debe tener un valor `y` de `64`.

```js
assert($('rect').eq(0).attr('y') == h - dataset[0] * 3);
```

El segundo `rect` debe tener un valor `y` de `7`.

```js
assert($('rect').eq(1).attr('y') == h - dataset[1] * 3);
```

El tercer `rect` debe tener un valor `y` de `34`.

```js
assert($('rect').eq(2).attr('y') == h - dataset[2] * 3);
```

El cuarto `rect` debe tener un valor `y` de `49`.

```js
assert($('rect').eq(3).attr('y') == h - dataset[3] * 3);
```

El quinto `rect` debe tener un valor `y` de `25`.

```js
assert($('rect').eq(4).attr('y') == h - dataset[4] * 3);
```

El sexto `rect` debe tener un valor `y` de `46`.

```js
assert($('rect').eq(5).attr('y') == h - dataset[5] * 3);
```

El séptimo `rect` debe tener un valor `y` de `13`.

```js
assert($('rect').eq(6).attr('y') == h - dataset[6] * 3);
```

El octavo `rect` debe tener un valor `y` de `58`.

```js
assert($('rect').eq(7).attr('y') == h - dataset[7] * 3);
```

El noveno `rect` debe tener un valor `y` de `73`.

```js
assert($('rect').eq(8).attr('y') == h - dataset[8] * 3);
```

# --seed--

## --seed-contents--

```html
<body>
  <script>
    const dataset = [12, 31, 22, 17, 25, 18, 29, 14, 9];

    const w = 500;
    const h = 100;

    const svg = d3.select("body")
                  .append("svg")
                  .attr("width", w)
                  .attr("height", h);

    svg.selectAll("rect")
       .data(dataset)
       .enter()
       .append("rect")
       .attr("x", (d, i) => i * 30)
       .attr("y", (d, i) => {
         // Add your code below this line



         // Add your code above this line
       })
       .attr("width", 25)
       .attr("height", (d, i) => 3 * d);
  </script>
</body>
```

# --solutions--

```html
<body>
  <script>
    const dataset = [12, 31, 22, 17, 25, 18, 29, 14, 9];

    const w = 500;
    const h = 100;

    const svg = d3.select("body")
                  .append("svg")
                  .attr("width", w)
                  .attr("height", h);

    svg.selectAll("rect")
       .data(dataset)
       .enter()
       .append("rect")
       .attr("x", (d, i) => i * 30)
       .attr("y", (d, i) => h - 3 * d)
       .attr("width", 25)
       .attr("height", (d, i) => 3 * d);
  </script>
</body>
```
