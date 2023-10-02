---
id: 587d7fa9367417b2b2512bcf
title: Cambia dinámicamente la altura de cada barra
challengeType: 6
forumTopicId: 301486
dashedName: dynamically-change-the-height-of-each-bar
---

# --description--

La altura de cada barra puede ser asignada al valor de cada elemento en el arreglo, similar a como el valor de `x` fue asignado dinámicamente.

```js
selection.attr("property", (d, i) => {

})
```

Aquí `d` debe ser el valor del dato asignado, y `i` debe ser el índice del dato en el arreglo.

# --instructions--

Cambiar la función callback para el atributo `height` para devolver el valor multiplicado 3 veces.

**Nota:** Recuerda que multiplicar todos los datos por la misma constante, escala el componente (similar a hacerle zoom). Ayuda a ver las diferencias entre los valores de las barras en este ejemplo.

# --hints--

El primer `rect` debe tener un `height` de `36`.

```js
assert($('rect').eq(0).attr('height') == '36');
```

El segundo `rect` debe tener un `height` de `93`.

```js
assert($('rect').eq(1).attr('height') == '93');
```

El tercer `rect` debe tener un `height` de `66`.

```js
assert($('rect').eq(2).attr('height') == '66');
```

El cuarto `rect` debe tener un `height` de `51`.

```js
assert($('rect').eq(3).attr('height') == '51');
```

El quinto `rect` debe tener un `height` de `75`.

```js
assert($('rect').eq(4).attr('height') == '75');
```

El sexto `rect` debe tener un `height` de `54`.

```js
assert($('rect').eq(5).attr('height') == '54');
```

El séptimo `rect` deber tener un `height` de `87`.

```js
assert($('rect').eq(6).attr('height') == '87');
```

El octavo `rect` debe tener un `height` de `42`.

```js
assert($('rect').eq(7).attr('height') == '42');
```

El noveno `rect` debe tener un `height` de `27`.

```js
assert($('rect').eq(8).attr('height') == '27');
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
       .attr("y", 0)
       .attr("width", 25)
       .attr("height", (d, i) => {
         // Add your code below this line



         // Add your code above this line
       });
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
       .attr("y", 0)
       .attr("width", 25)
       .attr("height", (d, i) => {
         return d * 3
       });
  </script>
</body>
```
