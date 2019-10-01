---
id: 587d7fa8367417b2b2512bcd
title: Create a Bar for Each Data Point in the Set
challengeType: 6
videoUrl: ''
localeTitle: Crear una barra para cada punto de datos en el conjunto
---

## Description
<section id="description"> El último desafío agregó solo un rectángulo al elemento <code>svg</code> para representar una barra. Aquí, combinará lo que ha aprendido hasta ahora acerca de las formas de <code>data()</code> , <code>enter()</code> y SVG para crear y anexar un rectángulo para cada punto de <code>dataset</code> en el <code>dataset</code> de <code>dataset</code> . Un desafío anterior mostró el formato de cómo crear y anexar un <code>div</code> para cada elemento en el <code>dataset</code> de <code>dataset</code> : <blockquote> d3.select (&quot;body&quot;). selectAll (&quot;div&quot;) <br> .data (conjunto de datos) <br> .entrar() <br> .append (&quot;div&quot;) </blockquote> Hay algunas diferencias que trabajan con elementos <code>rect</code> lugar de <code>divs</code> . Los <code>rects</code> deben adjuntarse a un elemento <code>svg</code> , no directamente al <code>body</code> . Además, debe indicar a D3 dónde colocar cada <code>rect</code> dentro del área de <code>svg</code> . La colocación de la barra será cubierta en el próximo desafío. </section>

## Instructions
<section id="instructions"> Use los métodos <code>data()</code> , <code>enter()</code> y <code>append()</code> para crear y adjuntar un <code>rect</code> para cada elemento en el <code>dataset</code> de <code>dataset</code> . Las barras deben mostrar todas una encima de la otra, esto se solucionará en el próximo desafío. </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: Su documento debe tener 9 elementos <code>rect</code> .
    testString: 'assert($("rect").length == 9, "Your document should have 9 <code>rect</code> elements.");'
  - text: Su código debe utilizar el método <code>data()</code> .
    testString: 'assert(code.match(/\.data/g), "Your code should use the <code>data()</code> method.");'
  - text: Su código debe utilizar el método <code>enter()</code> .
    testString: 'assert(code.match(/\.enter/g), "Your code should use the <code>enter()</code> method.");'
  - text: Su código debe utilizar el método <code>append()</code> .
    testString: 'assert(code.match(/\.append/g), "Your code should use the <code>append()</code> method.");'

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
       // Add your code below this line



       // Add your code above this line
       .attr("x", 0)
       .attr("y", 0)
       .attr("width", 25)
       .attr("height", 100);
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
