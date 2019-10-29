---
id: 587d7faa367417b2b2512bd4
title: Add a Hover Effect to a D3 Element
challengeType: 6
videoUrl: ''
localeTitle: Añadir un efecto de desplazamiento sobre un elemento D3
---

## Description
<section id="description"> Es posible agregar efectos que resalten una barra cuando el usuario se desplaza sobre ella con el mouse. Hasta ahora, el estilo de los rectángulos se aplica con los métodos D3 y SVG incorporados, pero también se puede usar CSS. Establece la clase CSS en los elementos SVG con el método <code>attr()</code> . Luego, la pseudo-clase <code>:hover</code> para su nueva clase contiene las reglas de estilo para cualquier efecto de hover. </section>

## Instructions
<section id="instructions"> Use el método <code>attr()</code> para agregar una clase de <code>bar</code> a todos los elementos <code>rect</code> . Esto cambia el color de <code>fill</code> de la barra a marrón cuando pasas el mouse sobre ella. </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: Tus elementos <code>rect</code> deben tener una clase de <code>bar</code> .
    testString: 'assert($("rect").attr("class") == "bar", "Your <code>rect</code> elements should have a class of <code>bar</code>.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='html-seed'>

```html
<style>
  .bar:hover {
    fill: brown;
  }
</style>
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
       .attr("fill", "navy")
       // Add your code below this line



       // Add your code above this line

    svg.selectAll("text")
       .data(dataset)
       .enter()
       .append("text")
       .text((d) => d)
       .attr("x", (d, i) => i * 30)
       .attr("y", (d, i) => h - (3 * d) - 3);

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
