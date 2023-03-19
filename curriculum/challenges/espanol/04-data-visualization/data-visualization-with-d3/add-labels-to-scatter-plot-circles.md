---
id: 587d7fab367417b2b2512bd9
title: Añade etiquetas a un diagrama de dispersión
challengeType: 6
forumTopicId: 301477
dashedName: add-labels-to-scatter-plot-circles
---

# --description--

Puedes agregar texto para crear etiquetas para los puntos en un diagrama de dispersión.

El objetivo es mostrar los valores separados por coma del primer (`x`) y segundo (`y`) campo de cada elemento en `dataset`.

The `text` nodes need `x` and `y` attributes to position it on the SVG. En este desafío, el valor `y` (que determina la altura) puede usar el mismo valor que el `circle` usa para su atributo `cy`. El valor `x` puede ser ligeramente mayor que el valor `cx` del `circle` para que la etiqueta sea visible. Esto empujará la etiqueta a la derecha del punto trazado.

# --instructions--

Etiqueta cada punto en el diagrama de dispersión usando los elementos `text`. El texto de la etiqueta debe ser los valores separados por una coma y un espacio. Por ejemplo, la etiqueta para el primer punto es `34, 78`. Establece el atributo `x` para que sea `5` unidades mayor que el valor que utilizaste para el atributo `cx` en el `circle`. Establece el atributo `y` de la misma manera que se usa para el valor `cy` en el `circle`.

# --hints--

Tu código debe tener 10 elementos `text`.

```js
assert($('text').length == 10);
```

La primera etiqueta debe tener como texto `34, 78`, un valor de `x` de `39`, y un valor de `y` de `422`.

```js
assert(
  $('text').eq(0).text() == '34, 78' &&
    $('text').eq(0).attr('x') == '39' &&
    $('text').eq(0).attr('y') == '422'
);
```

La segunda etiqueta debe tener como texto `109, 280`, un valor de `x` de `114`, y un valor de `y` de `220`.

```js
assert(
  $('text').eq(1).text() == '109, 280' &&
    $('text').eq(1).attr('x') == '114' &&
    $('text').eq(1).attr('y') == '220'
);
```

La tercera etiqueta debe tener como texto `310, 120`, un valor de `x` de `315`, y un valor de `y` de `380`.

```js
assert(
  $('text').eq(2).text() == '310, 120' &&
    $('text').eq(2).attr('x') == '315' &&
    $('text').eq(2).attr('y') == '380'
);
```

La cuarta etiqueta debe tener como texto `79, 411`, un valor de `x` de `84`, y un valor de `y` de `89`.

```js
assert(
  $('text').eq(3).text() == '79, 411' &&
    $('text').eq(3).attr('x') == '84' &&
    $('text').eq(3).attr('y') == '89'
);
```

La quinta etiqueta debe tener como texto `420, 220`, un valor de `x` de `425`, y un valor de `y` de `280`.

```js
assert(
  $('text').eq(4).text() == '420, 220' &&
    $('text').eq(4).attr('x') == '425' &&
    $('text').eq(4).attr('y') == '280'
);
```

La sexta etiqueta debe tener como texto `233, 145`, un valor de `x` de `238`, y un valor de `y` de `355`.

```js
assert(
  $('text').eq(5).text() == '233, 145' &&
    $('text').eq(5).attr('x') == '238' &&
    $('text').eq(5).attr('y') == '355'
);
```

La séptima etiqueta debe tener como texto `333, 96`, un valor de `x` de `338`, y un valor de `y` de `404`.

```js
assert(
  $('text').eq(6).text() == '333, 96' &&
    $('text').eq(6).attr('x') == '338' &&
    $('text').eq(6).attr('y') == '404'
);
```

La octava etiqueta debe tener como texto `222, 333`, un valor de `x` de `227`, y un valor de `y` de `167`.

```js
assert(
  $('text').eq(7).text() == '222, 333' &&
    $('text').eq(7).attr('x') == '227' &&
    $('text').eq(7).attr('y') == '167'
);
```

La novena etiqueta debe tener como texto `78, 320`, un valor de `x` de `83`, y un valor de `y` de `180`.

```js
assert(
  $('text').eq(8).text() == '78, 320' &&
    $('text').eq(8).attr('x') == '83' &&
    $('text').eq(8).attr('y') == '180'
);
```

La décima etiqueta debe tener como texto `21, 123`, un valor de `x` de `26`, y un valor de `y` de `377`.

```js
assert(
  $('text').eq(9).text() == '21, 123' &&
    $('text').eq(9).attr('x') == '26' &&
    $('text').eq(9).attr('y') == '377'
);
```

# --seed--

## --seed-contents--

```html
<body>
  <script>
    const dataset = [
                  [ 34,    78 ],
                  [ 109,   280 ],
                  [ 310,   120 ],
                  [ 79,    411 ],
                  [ 420,   220 ],
                  [ 233,   145 ],
                  [ 333,   96 ],
                  [ 222,   333 ],
                  [ 78,    320 ],
                  [ 21,    123 ]
                ];


    const w = 500;
    const h = 500;

    const svg = d3.select("body")
                  .append("svg")
                  .attr("width", w)
                  .attr("height", h);

    svg.selectAll("circle")
       .data(dataset)
       .enter()
       .append("circle")
       .attr("cx", (d, i) => d[0])
       .attr("cy", (d, i) => h - d[1])
       .attr("r", 5);

    svg.selectAll("text")
       .data(dataset)
       .enter()
       .append("text")
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
                  [ 34,    78 ],
                  [ 109,   280 ],
                  [ 310,   120 ],
                  [ 79,    411 ],
                  [ 420,   220 ],
                  [ 233,   145 ],
                  [ 333,   96 ],
                  [ 222,   333 ],
                  [ 78,    320 ],
                  [ 21,    123 ]
                ];


    const w = 500;
    const h = 500;

    const svg = d3.select("body")
                  .append("svg")
                  .attr("width", w)
                  .attr("height", h);

    svg.selectAll("circle")
       .data(dataset)
       .enter()
       .append("circle")
       .attr("cx", (d, i) => d[0])
       .attr("cy", (d, i) => h - d[1])
       .attr("r", 5);

    svg.selectAll("text")
       .data(dataset)
       .enter()
       .append("text")
       .attr("x", (d) => d[0] + 5)
       .attr("y", (d) => h - d[1])
       .text((d) => (d[0] + ", " + d[1]))

  </script>
</body>
```
