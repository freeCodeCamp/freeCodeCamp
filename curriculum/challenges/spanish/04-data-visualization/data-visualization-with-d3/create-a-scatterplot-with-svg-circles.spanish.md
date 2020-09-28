---
id: 587d7fab367417b2b2512bd7
title: Create a Scatterplot with SVG Circles
challengeType: 6
videoUrl: ''
localeTitle: Crear un diagrama de dispersión con círculos SVG
---

## Description
<section id="description"> Un diagrama de dispersión es otro tipo de visualización. Por lo general, utiliza círculos para asignar puntos de datos, que tienen dos valores cada uno. Estos valores se vinculan con los ejes <code>x</code> e <code>y</code> , y se utilizan para colocar el círculo en la visualización. SVG tiene una etiqueta <code>circle</code> para crear la forma del círculo. Funciona mucho como los elementos <code>rect</code> que <code>rect</code> para el gráfico de barras. </section>

## Instructions
<section id="instructions"> Use los métodos <code>data()</code> , <code>enter()</code> y <code>append()</code> para vincular el <code>dataset</code> de <code>dataset</code> a los nuevos elementos del <code>circle</code> que se agregan al lienzo de SVG. <strong>Nota</strong> <br> Los círculos no serán visibles porque todavía no hemos establecido sus atributos. Lo haremos en el próximo reto. </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: Tu código debe tener 10 elementos <code>circle</code> .
    testString: 'assert($("circle").length == 10, "Your code should have 10 <code>circle</code> elements.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='html-seed'>

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

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
