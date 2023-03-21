---
id: 587d7fab367417b2b2512bd7
title: Crea un diagrama de dispersión con círculos SVG
challengeType: 6
forumTopicId: 301484
dashedName: create-a-scatterplot-with-svg-circles
---

# --description--

Un diagrama de dispersión es otro tipo de gráfico. Usualmente utiliza círculos para trazar los datos, los cuales tienen dos valores cada uno. Estos valores están vinculados a los ejes `x` asimismo `y`, son usados para posicionar el circulo en el gráfico.

SVG tiene una etiqueta `circle` para crear la forma de un circulo. Se parece mucho en funcionamiento al elemento `rect` que has utilizado para el gráfico de barras.

# --instructions--

Use the `data()`, `enter()`, and `append()` methods to bind `dataset` to new `circle` elements that are appended to the SVG.

**Nota:** Los círculos no serán visibles porque aún no establecimos sus atributos. Haremos esto en el siguiente desafío.

# --hints--

Tu código debe tener 10 elementos `circle`.

```js
assert($('circle').length == 10);
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

  </script>
</body>
```
