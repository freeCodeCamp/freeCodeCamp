---
id: 587d7fa8367417b2b2512bca
title: Change the Presentation of a Bar Chart
challengeType: 6
videoUrl: ''
localeTitle: Cambiar la presentación de un gráfico de barras
---

## Description
<section id="description"> El último desafío creó un gráfico de barras, pero hay un par de cambios de formato que podrían mejorarlo: 1) Agregue espacio entre cada barra para separarlos visualmente, lo que se hace agregando un margen al CSS para la clase de <code>bar</code> 2) Aumentar la altura de las barras para mostrar mejor la diferencia en los valores, lo cual se hace multiplicando el valor por un número para escalar la altura </section>

## Instructions
<section id="instructions"> Primero, agregue un <code>margin</code> de 2px a la clase de <code>bar</code> en la etiqueta de <code>style</code> . A continuación, cambie la función de devolución de llamada en el método <code>style()</code> para que devuelva un valor 10 veces el valor de los datos originales (más el &quot;px&quot;). <strong>Nota</strong> <br> Multiplicar cada punto de datos por la <em>misma</em> constante solo altera la escala. Es como acercarse y no cambia el significado de los datos subyacentes. </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: El primer <code>div</code> debe tener una <code>height</code> de 120 píxeles y un <code>margin</code> de 2 píxeles.
    testString: 'assert($("div").eq(0).css("height") == "120px" && $("div").eq(0).css("margin-right") == "2px", "The first <code>div</code> should have a <code>height</code> of 120 pixels and a <code>margin</code> of 2 pixels.");'
  - text: El segundo <code>div</code> debe tener una <code>height</code> de 310 píxeles y un <code>margin</code> de 2 píxeles.
    testString: 'assert($("div").eq(1).css("height") == "310px" && $("div").eq(1).css("margin-right") == "2px", "The second <code>div</code> should have a <code>height</code> of 310 pixels and a <code>margin</code> of 2 pixels.");'
  - text: El tercer <code>div</code> debe tener una <code>height</code> de 220 píxeles y un <code>margin</code> de 2 píxeles.
    testString: 'assert($("div").eq(2).css("height") == "220px" && $("div").eq(2).css("margin-right") == "2px", "The third <code>div</code> should have a <code>height</code> of 220 pixels and a <code>margin</code> of 2 pixels.");'
  - text: El cuarto <code>div</code> debe tener una <code>height</code> de 170 píxeles y un <code>margin</code> de 2 píxeles.
    testString: 'assert($("div").eq(3).css("height") == "170px" && $("div").eq(3).css("margin-right") == "2px", "The fourth <code>div</code> should have a <code>height</code> of 170 pixels and a <code>margin</code> of 2 pixels.");'
  - text: El quinto <code>div</code> debe tener una <code>height</code> de 250 píxeles y un <code>margin</code> de 2 píxeles.
    testString: 'assert($("div").eq(4).css("height") == "250px" && $("div").eq(4).css("margin-right") == "2px", "The fifth <code>div</code> should have a <code>height</code> of 250 pixels and a <code>margin</code> of 2 pixels.");'
  - text: El sexto <code>div</code> debe tener una <code>height</code> de 180 píxeles y un <code>margin</code> de 2 píxeles.
    testString: 'assert($("div").eq(5).css("height") == "180px" && $("div").eq(5).css("margin-right") == "2px", "The sixth <code>div</code> should have a <code>height</code> of 180 pixels and a <code>margin</code> of 2 pixels.");'
  - text: El séptimo <code>div</code> debe tener una <code>height</code> de 290 píxeles y un <code>margin</code> de 2 píxeles.
    testString: 'assert($("div").eq(6).css("height") == "290px" && $("div").eq(6).css("margin-right") == "2px", "The seventh <code>div</code> should have a <code>height</code> of 290 pixels and a <code>margin</code> of 2 pixels.");'
  - text: El octavo <code>div</code> debe tener una <code>height</code> de 140 píxeles y un <code>margin</code> de 2 píxeles.
    testString: 'assert($("div").eq(7).css("height") == "140px" && $("div").eq(7).css("margin-right") == "2px", "The eighth <code>div</code> should have a <code>height</code> of 140 pixels and a <code>margin</code> of 2 pixels.");'
  - text: El noveno <code>div</code> debe tener una <code>height</code> de 90 píxeles y un <code>margin</code> de 2 píxeles.
    testString: 'assert($("div").eq(8).css("height") == "90px" && $("div").eq(8).css("margin-right") == "2px", "The ninth <code>div</code> should have a <code>height</code> of 90 pixels and a <code>margin</code> of 2 pixels.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='html-seed'>

```html
<style>
  .bar {
    width: 25px;
    height: 100px;
    /* Add your code below this line */

    /* Add your code above this line */
    display: inline-block;
    background-color: blue;
  }
</style>
<body>
  <script>
    const dataset = [12, 31, 22, 17, 25, 18, 29, 14, 9];

    d3.select("body").selectAll("div")
      .data(dataset)
      .enter()
      .append("div")
      .attr("class", "bar")
      // Add your code below this line
      .style("height", (d) => (d + "px"))

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
