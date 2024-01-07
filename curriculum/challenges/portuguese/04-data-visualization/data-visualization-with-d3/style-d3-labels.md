---
id: 587d7faa367417b2b2512bd3
title: Estilizar as etiquetas do D3
challengeType: 6
forumTopicId: 301492
dashedName: style-d3-labels
---

# --description--

Os métodos do D3 podem adicionar estilos às etiquetas das barras. O atributo `fill` define a cor do texto para um nó `text`. O método `style()` define as regras do CSS para outros estilos, como `font-family` ou `font-size`.

# --instructions--

Defina o `font-size` dos elementos `text` para `25px` e a cor do texto para "red" (vermelho).

# --hints--

As etiquetas devem ter a propriedade `fill` com a cor "red".

```js
assert($('text').css('fill') == 'rgb(255, 0, 0)');
```

As etiquetas devem ter um `font-size` de `25` pixels.

```js
assert($('text').css('font-size') == '25px');
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
       .attr("height", (d, i) => d * 3)
       .attr("fill", "navy");

    svg.selectAll("text")
       .data(dataset)
       .enter()
       .append("text")
       .text((d) => d)
       .attr("x", (d, i) => i * 30)
       .attr("y", (d, i) => h - (3 * d) - 3)
       // Add your code below this line



       // Add your code above this line
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
       .attr("height", (d, i) => d * 3)
       .attr("fill", "navy");

    svg.selectAll("text")
       .data(dataset)
       .enter()
       .append("text")
       .text((d) => d)
       .attr("x", (d, i) => i * 30)
       .attr("y", (d, i) => h - (3 * d) - 3)
       .style("font-size", 25)
       .attr("fill", "red")
  </script>
</body>
```
