---
id: 587d7fa9367417b2b2512bd0
title: Invert SVG Elements
challengeType: 6
videoUrl: ''
localeTitle: Invertir elementos SVG
---

## Description
<section id="description"> Es posible que haya notado que el gráfico de barras parecía invertido o al revés. Esto se debe a cómo SVG utiliza las coordenadas (x, y). En SVG, el punto de origen para las coordenadas se encuentra en la esquina superior izquierda. Una coordenada <code>x</code> de 0 coloca una forma en el borde izquierdo del área SVG. Una coordenada <code>y</code> de 0 coloca una forma en el borde superior del área SVG. Los valores más altos de <code>x</code> empujan el rectángulo hacia la derecha. Los valores más altos de <code>y</code> empujan el rectángulo hacia abajo. Para hacer que las barras queden hacia arriba, debe cambiar la forma en que se calcula la coordenada <code>y</code> . Debe tener en cuenta tanto la altura de la barra como la altura total del área SVG. La altura del área de SVG es 100. Si tiene un punto de datos de 0 en el conjunto, desearía que la barra comience en la parte inferior del área de SVG (no en la parte superior). Para hacer esto, la coordenada <code>y</code> necesita un valor de 100. Si el valor del punto de datos fuera 1, comenzaría con una coordenada <code>y</code> de 100 para establecer la barra en la parte inferior. Luego, debe tener en cuenta la altura de la barra de 1, por lo que la coordenada <code>y</code> final sería 99. La coordenada <code>y</code> que es <code>y = heightOfSVG - heightOfBar</code> colocaría las barras del lado derecho hacia arriba. </section>

## Instructions
<section id="instructions"> Cambie la función de devolución de llamada para el atributo <code>y</code> para establecer las barras del lado derecho hacia arriba. Recuerde que la <code>height</code> de la barra es 3 veces el valor de los datos <code>d</code> . <strong>Nota</strong> <br> En general, la relación es <code>y = h - m * d</code> , donde <code>m</code> es la constante que escala los puntos de datos. </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: El primer <code>rect</code> debe tener un valor de <code>y</code> de 64.
    testString: 'assert($("rect").eq(0).attr("y") == h - (dataset[0] * 3), "The first <code>rect</code> should have a <code>y</code> value of 64.");'
  - text: El segundo <code>rect</code> debe tener un valor de <code>y</code> de 7.
    testString: 'assert($("rect").eq(1).attr("y") == h - (dataset[1] * 3), "The second <code>rect</code> should have a <code>y</code> value of 7.");'
  - text: El tercer <code>rect</code> debe tener un valor de <code>y</code> de 34.
    testString: 'assert($("rect").eq(2).attr("y") == h - (dataset[2] * 3), "The third <code>rect</code> should have a <code>y</code> value of 34.");'
  - text: El cuarto <code>rect</code> debe tener un valor de <code>y</code> de 49.
    testString: 'assert($("rect").eq(3).attr("y") == h - (dataset[3] * 3), "The fourth <code>rect</code> should have a <code>y</code> value of 49.");'
  - text: El quinto <code>rect</code> debe tener un valor de <code>y</code> de 25.
    testString: 'assert($("rect").eq(4).attr("y") == h - (dataset[4] * 3), "The fifth <code>rect</code> should have a <code>y</code> value of 25.");'
  - text: El sexto <code>rect</code> debe tener un valor de <code>y</code> de 46.
    testString: 'assert($("rect").eq(5).attr("y") == h - (dataset[5] * 3), "The sixth <code>rect</code> should have a <code>y</code> value of 46.");'
  - text: El séptimo <code>rect</code> debe tener un valor de <code>y</code> de 13.
    testString: 'assert($("rect").eq(6).attr("y") == h - (dataset[6] * 3), "The seventh <code>rect</code> should have a <code>y</code> value of 13.");'
  - text: El octavo <code>rect</code> debe tener un valor de <code>y</code> de 58.
    testString: 'assert($("rect").eq(7).attr("y") == h - (dataset[7] * 3), "The eighth <code>rect</code> should have a <code>y</code> value of 58.");'
  - text: El noveno <code>rect</code> debe tener un valor de <code>y</code> de 73.
    testString: 'assert($("rect").eq(8).attr("y") == h - (dataset[8] * 3), "The ninth <code>rect</code> should have a <code>y</code> value of 73.");'

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
       .attr("y", (d, i) => {
         // Add your code below this line



         // Add your code above this line
       })
       .attr("width", 25)
       .attr("height", (d, i) => 3 * d);
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
