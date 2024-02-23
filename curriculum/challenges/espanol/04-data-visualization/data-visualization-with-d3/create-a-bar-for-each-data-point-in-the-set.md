---
id: 587d7fa8367417b2b2512bcd
title: Crea una barra para cada punto de dato en el conjunto
challengeType: 6
forumTopicId: 301482
dashedName: create-a-bar-for-each-data-point-in-the-set
---

# --description--

El anterior desafío agrega solo un rectángulo al elemento `svg` para representar una barra. Ahora, combinarás lo que has aprendido hasta ahora sobre `data()`, `enter()`, y formas SVG para crear y añadir un rectángulo para cada punto de dato en `dataset`.

Uno de los desafíos anteriores mostró el formato para cómo crear y añadir un `div` para cada elemento en `dataset`:

```js
d3.select("body").selectAll("div")
  .data(dataset)
  .enter()
  .append("div")
```

Hay algunas diferencias cuando trabajamos con elementos `rect` en lugar de elementos `div`. Los elementos `rect` deben ser añadidos a un elemento `svg`, no directamente al `body`. Además, necesitas decirle a D3 donde colocar cada `rect` dentro del área `svg`. El posicionamiento de la barra lo veremos en el siguiente desafío.

# --instructions--

Usa los métodos `data()`, `enter()`, y `append()` para crear y agregar un `rect` por cada elemento en `dataset`. Las barras deben mostrarse una arriba de la otra, esto será arreglado en el siguiente desafío.

# --hints--

Tu documento debe tener 9 elementos `rect`.

```js
assert($('rect').length == 9);
```

Tu código debe usar el método `data()`.

```js
assert(code.match(/\.data/g));
```

Tu código debe usar el método `enter()`.

```js
assert(code.match(/\.enter/g));
```

Tu código debe usar el método `append()`.

```js
assert(code.match(/\.append/g));
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
       // Add your code below this line



       // Add your code above this line
       .attr("x", 0)
       .attr("y", 0)
       .attr("width", 25)
       .attr("height", 100);
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
       .attr("x", 0)
       .attr("y", 0)
       .attr("width", 25)
       .attr("height", 100);
  </script>
</body>
```
