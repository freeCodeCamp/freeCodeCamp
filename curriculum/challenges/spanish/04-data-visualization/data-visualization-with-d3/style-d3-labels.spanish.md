---
id: 587d7faa367417b2b2512bd3
title: Style D3 Labels
challengeType: 6
videoUrl: ''
localeTitle: Etiquetas de estilo D3
---

## Description
<section id="description"> Los métodos D3 pueden agregar estilos a las etiquetas de barra. El atributo de <code>fill</code> establece el color del texto para un nodo de <code>text</code> . El método <code>style()</code> establece reglas CSS para otros estilos, como &quot;font-family&quot; o &quot;font-size&quot;. </section>

## Instructions
<section id="instructions"> Establezca el <code>font-size</code> de <code>font-size</code> de los elementos de <code>text</code> en 25px, y el color del texto en rojo. </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: Todas las etiquetas deben tener un color de <code>fill</code> rojo.
    testString: 'assert($("text").css("fill") == "rgb(255, 0, 0)", "The labels should all have a <code>fill</code> color of red.");'
  - text: Todas las etiquetas deben tener un <code>font-size</code> de <code>font-size</code> de 25 píxeles.
    testString: 'assert($("text").css("font-size") == "25px", "The labels should all have a <code>font-size</code> of 25 pixels.");'

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

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
