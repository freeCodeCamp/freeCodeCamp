---
id: 587d7fad367417b2b2512bdf
title: Agrega ejes a una visualización
challengeType: 6
forumTopicId: 301472
dashedName: add-axes-to-a-visualization
---

# --description--

Otra forma de mejorar el diagrama de dispersión es agregar un eje "x" y un eje "y".

D3 tiene dos métodos, `axisLeft()` y `axisBottom()`, para representar el eje "y" y el eje "x", respectivamente. Aquí hay un ejemplo para crear el eje "x" basado en `xScale` en los desafíos anteriores:

```js
const xAxis = d3.axisBottom(xScale);
```

El siguiente paso es renderizar el eje en el lienzo SVG. Para hacerlo, puedes utilizar un componente SVG general, el elemento `g`. El `g` significa grupo. A diferencia de `rect`, `circle` y `text`, un eje es solo una línea recta cuando se representa. Debido a que es una forma simple, el uso de `g` funciona. El último paso es aplicar un atributo `transform` para colocar el eje en el lienzo SVG en el lugar correcto. De lo contrario, la línea se representaría a lo largo del borde del lienzo SVG y no sería visible. SVG admite diferentes tipos de `transforms`, pero el posicionamiento de un eje necesita `translate`. Cuando se aplica al elemento `g`, mueve todo el grupo hacia arriba y hacia abajo en las cantidades dadas. He aquí un ejemplo:

```js
const xAxis = d3.axisBottom(xScale);

svg.append("g")
   .attr("transform", "translate(0, " + (h - padding) + ")")
   .call(xAxis);
```

El código anterior coloca el eje "x" en la parte inferior del lienzo SVG. Luego se pasa como argumento al método `call()`. El eje "y" funciona de la misma manera, excepto que el argumento `translate` tiene el formato `(x, 0)`. Debido a que `translate` es una cadena en el método `attr()` anterior, puedes usar la concatenación para incluir valores de variable para sus argumentos.

# --instructions--

El diagrama de dispersión ahora tiene un eje x. Crea un eje y en una variable denominada `yAxis` utilizando el método `axisLeft()`. Luego renderiza el eje usando un elemento `g`. Asegúrete de utilizar un atributo `transform` para trasladar el eje por la cantidad de unidades de relleno a la derecha y `0` unidades hacia abajo. Recuerda de llamar (`call()`) al eje.

# --hints--

Tu código debe usar el método `axisLeft()` con `yScale` pasado como argumento.

```js
assert(code.match(/\.axisLeft\(yScale\)/g));
```

El elemento `g` del eje "y" debe tener un atributo `transform` para traducir el eje por `(60, 0)`.

```js
assert(
  $('g')
    .eq(10)
    .attr('transform')
    .match(/translate\(60\s*?,\s*?0\)/g)
);
```

Tu código debe llamar al `yAxis`.

```js
assert(code.match(/\.call\(\s*yAxis\s*\)/g));
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
       .attr("cx", (d) => xScale(d[0]))
       .attr("cy",(d) => yScale(d[1]))
       .attr("r", (d) => 5);

    svg.selectAll("text")
       .data(dataset)
       .enter()
       .append("text")
       .text((d) =>  (d[0] + "," + d[1]))
       .attr("x", (d) => xScale(d[0] + 10))
       .attr("y", (d) => yScale(d[1]))

    const xAxis = d3.axisBottom(xScale);
    // Add your code below this line
    const yAxis = undefined;
    // Add your code above this line

    svg.append("g")
       .attr("transform", "translate(0," + (h - padding) + ")")
       .call(xAxis);

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
       .attr("cy",(d) => yScale(d[1]))
       .attr("r", (d) => 5);

    svg.selectAll("text")
       .data(dataset)
       .enter()
       .append("text")
       .text((d) =>  (d[0] + "," + d[1]))
       .attr("x", (d) => xScale(d[0] + 10))
       .attr("y", (d) => yScale(d[1]))

    const xAxis = d3.axisBottom(xScale);

    const yAxis = d3.axisLeft(yScale);


    svg.append("g")
       .attr("transform", "translate(0," + (h - padding) + ")")
       .call(xAxis);

    svg.append("g")
       .attr("transform", "translate(" + padding + ",0)")
       .call(yAxis)

  </script>
</body>
```
