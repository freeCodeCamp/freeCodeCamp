---
id: 587d7fa9367417b2b2512bd1
title: Change the Color of an SVG Element
challengeType: 6
videoUrl: ''
localeTitle: Cambiar el color de un elemento SVG
---

## Description
<section id="description"> Las barras están en la posición correcta, pero todas son del mismo color negro. SVG tiene una manera de cambiar el color de las barras. En SVG, una forma <code>rect</code> se colorea con el atributo de <code>fill</code> . Admite códigos hexadecimales, nombres de colores y valores rgb, así como opciones más complejas como gradientes y transparencias. </section>

## Instructions
<section id="instructions"> Agregue un método <code>attr()</code> para establecer el &quot;relleno&quot; de todas las barras con el color &quot;azul marino&quot;. </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: Las barras deben tener un color de <code>fill</code> de azul marino.
    testString: 'assert($("rect").css("fill") == "rgb(0, 0, 128)", "The bars should all have a <code>fill</code> color of navy.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='html-seed'>

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
