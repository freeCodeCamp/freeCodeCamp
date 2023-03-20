---
id: 587d7fac367417b2b2512bde
title: Usa una escala predefinida para colocar elementos
challengeType: 6
forumTopicId: 301494
dashedName: use-a-pre-defined-scale-to-place-elements
---

# --description--

Con las escalas configuradas, es tiempo de trazar el diagrama de dispersión nuevamente. The scales are like processing functions that turn the `x` and `y` raw data into values that fit and render correctly on the SVG. Mantienen los datos dentro del área de trazado de la pantalla.

Establece los valores de los atributos de coordenada para una forma SVG con la función escaladora. Esto incluye los atributos `x` e `y` para `rect` o elementos `text`, o `cx` y `cy` para `circles`. He aquí un ejemplo:

```js
shape
  .attr("x", (d) => xScale(d[0]))
```

Scales set shape coordinate attributes to place the data points onto the SVG. No necesitas aplicar escalas cuando muestras el valor del dato real, por ejemplo, en el método `text()` para una descripción o una etiqueta.

# --instructions--

Use `xScale` and `yScale` to position both the `circle` and `text` shapes onto the SVG. Para los `circles`, aplica las escalas para establecer los atributos `cx` y `cy`. También, dales un radio de `5` unidades.

Para los elementos `text`, aplica las escalas para establecer los atributos `x` e `y`. Las etiquetas deben ser desplazadas a la derecha de los puntos. Para ello, agrega `10` unidades al valor de datos `x` antes de pasarlo a `xScale`.

# --hints--

Tu código debe tener 10 elementos `circle`.

```js
assert($('circle').length == 10);
```

El primer elemento `circle` debe tener un valor `cx` de aproximadamente `91` y un valor `cy` de aproximadamente `368` luego de aplicar las escalas. También debe tener un valor `r` de `5`.

```js
assert(
  Math.round($('circle').eq(0).attr('cx')) == '91' &&
    Math.round($('circle').eq(0).attr('cy')) == '368' &&
    $('circle').eq(0).attr('r') == '5'
);
```

El segundo elemento `circle` debe tener un valor `cx` de aproximadamente `159` y un valor `cy` de aproximadamente `181` luego de aplicar las escalas. También debe tener un valor `r` de `5`.

```js
assert(
  Math.round($('circle').eq(1).attr('cx')) == '159' &&
    Math.round($('circle').eq(1).attr('cy')) == '181' &&
    $('circle').eq(1).attr('r') == '5'
);
```

El tercer elemento `circle` debe tener un valor `cx` de aproximadamente `340` y un valor `cy` de aproximadamente `329` luego de aplicar las escalas. También debe tener un valor `r` de `5`.

```js
assert(
  Math.round($('circle').eq(2).attr('cx')) == '340' &&
    Math.round($('circle').eq(2).attr('cy')) == '329' &&
    $('circle').eq(2).attr('r') == '5'
);
```

El cuarto elemento `circle` debe tener un valor `cx` de aproximadamente `131` y un valor `cy` de aproximadamente `60` luego de aplicar las escalas. También debe tener un valor `r` de `5`.

```js
assert(
  Math.round($('circle').eq(3).attr('cx')) == '131' &&
    Math.round($('circle').eq(3).attr('cy')) == '60' &&
    $('circle').eq(3).attr('r') == '5'
);
```

El quinto elemento `circle` debe tener un valor `cx` de aproximadamente `440` y un valor `cy` de aproximadamente `237` luego de aplicar las escalas. También debe tener un valor `r` de `5`.

```js
assert(
  Math.round($('circle').eq(4).attr('cx')) == '440' &&
    Math.round($('circle').eq(4).attr('cy')) == '237' &&
    $('circle').eq(4).attr('r') == '5'
);
```

El sexto elemento `circle` debe tener un valor `cx` de aproximadamente `271` y un valor `cy` de aproximadamente `306` luego de aplicar las escalas. También debe tener un valor `r` de `5`.

```js
assert(
  Math.round($('circle').eq(5).attr('cx')) == '271' &&
    Math.round($('circle').eq(5).attr('cy')) == '306' &&
    $('circle').eq(5).attr('r') == '5'
);
```

El séptimo elemento `circle` debe tener un valor `cx` de aproximadamente `361` y un valor `cy` de aproximadamente `351` luego de aplicar las escalas. También debe tener un valor `r` de `5`.

```js
assert(
  Math.round($('circle').eq(6).attr('cx')) == '361' &&
    Math.round($('circle').eq(6).attr('cy')) == '351' &&
    $('circle').eq(6).attr('r') == '5'
);
```

El octavo elemento `circle` debe tener un valor `cx` de aproximadamente `261` y un valor `cy` de aproximadamente `132` luego de aplicar las escalas. También debe tener un valor `r` de `5`.

```js
assert(
  Math.round($('circle').eq(7).attr('cx')) == '261' &&
    Math.round($('circle').eq(7).attr('cy')) == '132' &&
    $('circle').eq(7).attr('r') == '5'
);
```

El noveno elemento `circle` debe tener un valor `cx` de aproximadamente `131` y un valor `cy` de aproximadamente `144` luego de aplicar las escalas. También debe tener un valor `r` de `5`.

```js
assert(
  Math.round($('circle').eq(8).attr('cx')) == '131' &&
    Math.round($('circle').eq(8).attr('cy')) == '144' &&
    $('circle').eq(8).attr('r') == '5'
);
```

El décimo elemento `circle` debe tener un valor `cx` de aproximadamente `79` y un valor `cy` de aproximadamente `326` luego de aplicar las escalas. También debe tener un valor `r` de `5`.

```js
assert(
  Math.round($('circle').eq(9).attr('cx')) == '79' &&
    Math.round($('circle').eq(9).attr('cy')) == '326' &&
    $('circle').eq(9).attr('r') == '5'
);
```

Tu código debe tener 10 elementos `text`.

```js
assert($('text').length == 10);
```

La primer etiqueta debe tener un valor `x` de aproximadamente `100` y un valor `y` de aproximadamente `368` luego de aplicar las escalas.

```js
assert(
  Math.round($('text').eq(0).attr('x')) == '100' &&
    Math.round($('text').eq(0).attr('y')) == '368'
);
```

La segunda etiqueta debe tener un valor `x` de aproximadamente `168` y un valor `y` de aproximadamente `181` luego de aplicar las escalas.

```js
assert(
  Math.round($('text').eq(1).attr('x')) == '168' &&
    Math.round($('text').eq(1).attr('y')) == '181'
);
```

La tercer etiqueta debe tener un valor `x` de aproximadamente `350` y un valor `y` de aproximadamente `329` luego de aplicar las escalas.

```js
assert(
  Math.round($('text').eq(2).attr('x')) == '350' &&
    Math.round($('text').eq(2).attr('y')) == '329'
);
```

La cuarta etiqueta debe tener un valor `x` de aproximadamente `141` y un valor `y` de aproximadamente `60` luego de aplicar las escalas.

```js
assert(
  Math.round($('text').eq(3).attr('x')) == '141' &&
    Math.round($('text').eq(3).attr('y')) == '60'
);
```

La quinta etiqueta debe tener un valor `x` de aproximadamente `449` y un valor `y` de aproximadamente `237` luego de aplicar las escalas.

```js
assert(
  Math.round($('text').eq(4).attr('x')) == '449' &&
    Math.round($('text').eq(4).attr('y')) == '237'
);
```

La sexta etiqueta debe tener un valor `x` de aproximadamente `280` y un valor `y` de aproximadamente `306` luego de aplicar las escalas.

```js
assert(
  Math.round($('text').eq(5).attr('x')) == '280' &&
    Math.round($('text').eq(5).attr('y')) == '306'
);
```

La séptima etiqueta debe tener un valor `x` de aproximadamente `370` y un valor `y` de aproximadamente `351` luego de aplicar las escalas.

```js
assert(
  Math.round($('text').eq(6).attr('x')) == '370' &&
    Math.round($('text').eq(6).attr('y')) == '351'
);
```

La octava etiqueta debe tener un valor `x` de aproximadamente `270` y un valor `y` de aproximadamente `132` luego de aplicar las escalas.

```js
assert(
  Math.round($('text').eq(7).attr('x')) == '270' &&
    Math.round($('text').eq(7).attr('y')) == '132'
);
```

La novena etiqueta debe tener un valor `x` de aproximadamente `140` y un valor `y` de aproximadamente `144` luego de aplicar las escalas.

```js
assert(
  Math.round($('text').eq(8).attr('x')) == '140' &&
    Math.round($('text').eq(8).attr('y')) == '144'
);
```

La décima etiqueta debe tener un valor `x` de aproximadamente `88` y un valor `y` de aproximadamente `326` luego de aplicar las escalas.

```js
assert(
  Math.round($('text').eq(9).attr('x')) == '88' &&
    Math.round($('text').eq(9).attr('y')) == '326'
);
```

# --seed--

## --seed-contents--

```html
<body>
  <script>
    const dataset = [
                  [ 34,     78 ],
                  [ 109,   280 ],
                  [ 310,   120 ],
                  [ 79,   411 ],
                  [ 420,   220 ],
                  [ 233,   145 ],
                  [ 333,   96 ],
                  [ 222,    333 ],
                  [ 78,    320 ],
                  [ 21,   123 ]
                ];

    const w = 500;
    const h = 500;
    const padding = 60;

    const xScale = d3.scaleLinear()
                     .domain([0, d3.max(dataset, (d) => d[0])])
                     .range([padding, w - padding]);

    const yScale = d3.scaleLinear()
                     .domain([0, d3.max(dataset, (d) => d[1])])
                     .range([h - padding, padding]);

    const svg = d3.select("body")
                  .append("svg")
                  .attr("width", w)
                  .attr("height", h);

    svg.selectAll("circle")
       .data(dataset)
       .enter()
       .append("circle")
       // Add your code below this line



       // Add your code above this line

    svg.selectAll("text")
       .data(dataset)
       .enter()
       .append("text")
       .text((d) =>  (d[0] + ", "
 + d[1]))
       // Add your code below this line



       // Add your code above this line
  </script>
</body>
```

# --solutions--

```html
<body>
  <script>
    const dataset = [
                  [ 34,     78 ],
                  [ 109,   280 ],
                  [ 310,   120 ],
                  [ 79,   411 ],
                  [ 420,   220 ],
                  [ 233,   145 ],
                  [ 333,   96 ],
                  [ 222,    333 ],
                  [ 78,    320 ],
                  [ 21,   123 ]
                ];

    const w = 500;
    const h = 500;
    const padding = 60;

    const xScale = d3.scaleLinear()
                     .domain([0, d3.max(dataset, (d) => d[0])])
                     .range([padding, w - padding]);

    const yScale = d3.scaleLinear()
                     .domain([0, d3.max(dataset, (d) => d[1])])
                     .range([h - padding, padding]);

    const svg = d3.select("body")
                  .append("svg")
                  .attr("width", w)
                  .attr("height", h);

    svg.selectAll("circle")
       .data(dataset)
       .enter()
       .append("circle")
       .attr("cx", (d) => xScale(d[0]))
       .attr("cy", (d) => yScale(d[1]))
       .attr("r", 5)

    svg.selectAll("text")
       .data(dataset)
       .enter()
       .append("text")
       .text((d) =>  (d[0] + ", "
 + d[1]))
       .attr("x", (d) => xScale(d[0] + 10))
       .attr("y", (d) => yScale(d[1]))
  </script>
</body>
```
