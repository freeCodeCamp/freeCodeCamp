---
id: 587d7faa367417b2b2512bd2
title: Agrega etiquetas a elementos D3
challengeType: 6
forumTopicId: 301476
dashedName: add-labels-to-d3-elements
---

# --description--

D3 te permite etiquetar un elemento gráfico, como una barra, usando el elemento SVG `text`.

Like the `rect` element, a `text` element needs to have `x` and `y` attributes, to place it on the SVG. También necesita acceso a los datos para mostrar los valores.

D3 te da un nivel de control alto sobre cómo etiquetas tus barras.

# --instructions--

El código en el editor ya vincula los datos a cada nuevo elemento `text`. Primero, añade nodos `text` a el `svg`. Luego, agrega atributos para las coordenadas `x` e `y`. Deben ser calculadas de la misma forma que las de `rect`, excepto el valor `y` para el `text`. Este debe hacer que la etiqueta se ubique 3 unidades más alto que la barra. Finalmente, usa el método de D3 `text()` para establecer la etiqueta igual al valor del punto de datos.

**Nota:** Para que la etiqueta se ubique arriba de la barra, decide si el valor `y` para el `text` debe ser 3 más o 3 menos que el valor `y` de la barra.

# --hints--

El primer elemento `text` debe tener una etiqueta de `12` y un valor `y` de `61`.

```js
assert($('text').eq(0).text() == '12' && $('text').eq(0).attr('y') == '61');
```

El segundo elemento `text` debe tener una etiqueta de `31` y un valor `y` de `4`.

```js
assert($('text').eq(1).text() == '31' && $('text').eq(1).attr('y') == '4');
```

El tercer elemento `text` debe tener una etiqueta de `22` y un valor `y` de `31`.

```js
assert($('text').eq(2).text() == '22' && $('text').eq(2).attr('y') == '31');
```

El cuarto elemento `text` debe tener una etiqueta de `17` y un valor `y` de `46`.

```js
assert($('text').eq(3).text() == '17' && $('text').eq(3).attr('y') == '46');
```

El quinto elemento `text` debe tener una etiqueta de `25` y un valor `y` de `22`.

```js
assert($('text').eq(4).text() == '25' && $('text').eq(4).attr('y') == '22');
```

El sexto elemento `text` debe tener una etiqueta de `18` y un valor `y` de `43`.

```js
assert($('text').eq(5).text() == '18' && $('text').eq(5).attr('y') == '43');
```

El séptimo elemento `text` debe tener una etiqueta de `29` y un valor `y` de `10`.

```js
assert($('text').eq(6).text() == '29' && $('text').eq(6).attr('y') == '10');
```

El octavo elemento `text` debe tener una etiqueta de `14` y un valor `y` de `55`.

```js
assert($('text').eq(7).text() == '14' && $('text').eq(7).attr('y') == '55');
```

El noveno elemento `text` debe tener una etiqueta de `9` y un valor `y` de `70`.

```js
assert($('text').eq(8).text() == '9' && $('text').eq(8).attr('y') == '70');
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
       .attr("y", (d, i) => h - 3 * d)
       .attr("width", 25)
       .attr("height", (d, i) => 3 * d)
       .attr("fill", "navy");

    svg.selectAll("text")
       .data(dataset)
       .enter()
       // Add your code below this line




       // Add your code above this line
  </script>
<body>
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
       .attr("height", (d, i) => 3 * d)
       .attr("fill", "navy");

    svg.selectAll("text")
       .data(dataset)
       .enter()
       .append("text")
       .attr("x", (d, i) => i * 30)
       .attr("y", (d, i) => h - (3 * d) - 3)
       .text((d) => d)
  </script>
<body>
```
