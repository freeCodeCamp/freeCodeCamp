---
id: 587d7fa9367417b2b2512bcf
title: Dynamically Change the Height of Each Bar
challengeType: 6
videoUrl: ''
localeTitle: Cambiar dinámicamente la altura de cada barra
---

## Description
<section id="description"> La altura de cada barra se puede establecer en el valor del punto de datos en la matriz, de manera similar a cómo se estableció dinámicamente el valor de <code>x</code> . <blockquote> selection.attr (&quot;propiedad&quot;, (d, i) =&gt; { <br> / * <br> * d es el valor del punto de datos <br> * i es el índice del punto de datos en la matriz <br> * / <br> }) </blockquote></section>

## Instructions
<section id="instructions"> Cambie la función de devolución de llamada para que el atributo de <code>height</code> devuelva el valor de los datos por 3. <strong>Nota</strong> <br> Recuerde que al multiplicar todos los puntos de datos por la misma constante, se escalan los datos (como hacer zoom). Ayuda a ver las diferencias entre los valores de barras en este ejemplo. </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: El primer <code>rect</code> debe tener una <code>height</code> de 36.
    testString: 'assert($("rect").eq(0).attr("height") == "36", "The first <code>rect</code> should have a <code>height</code> of 36.");'
  - text: El segundo <code>rect</code> debe tener una <code>height</code> de 93.
    testString: 'assert($("rect").eq(1).attr("height") == "93", "The second <code>rect</code> should have a <code>height</code> of 93.");'
  - text: El tercer <code>rect</code> debe tener una <code>height</code> de 66.
    testString: 'assert($("rect").eq(2).attr("height") == "66", "The third <code>rect</code> should have a <code>height</code> of 66.");'
  - text: El cuarto <code>rect</code> debe tener una <code>height</code> de 51.
    testString: 'assert($("rect").eq(3).attr("height") == "51", "The fourth <code>rect</code> should have a <code>height</code> of 51.");'
  - text: El quinto <code>rect</code> debe tener una <code>height</code> de 75.
    testString: 'assert($("rect").eq(4).attr("height") == "75", "The fifth <code>rect</code> should have a <code>height</code> of 75.");'
  - text: El sexto <code>rect</code> debe tener una <code>height</code> de 54.
    testString: 'assert($("rect").eq(5).attr("height") == "54", "The sixth <code>rect</code> should have a <code>height</code> of 54.");'
  - text: El séptimo <code>rect</code> debe tener una <code>height</code> de 87.
    testString: 'assert($("rect").eq(6).attr("height") == "87", "The seventh <code>rect</code> should have a <code>height</code> of 87.");'
  - text: El octavo <code>rect</code> debe tener una <code>height</code> de 42.
    testString: 'assert($("rect").eq(7).attr("height") == "42", "The eighth <code>rect</code> should have a <code>height</code> of 42.");'
  - text: El noveno <code>rect</code> debe tener una <code>height</code> de 27.
    testString: 'assert($("rect").eq(8).attr("height") == "27", "The ninth <code>rect</code> should have a <code>height</code> of 27.");'

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
       .attr("y", 0)
       .attr("width", 25)
       .attr("height", (d, i) => {
         // Add your code below this line



         // Add your code above this line
       });
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
