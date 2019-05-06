---
id: 587d7fab367417b2b2512bd9
title: Add Labels to Scatter Plot Circles
challengeType: 6
videoUrl: ''
localeTitle: Añadir etiquetas a los círculos de la parcela de dispersión
---

## Description
<section id="description"> Puede agregar texto para crear etiquetas para los puntos en un diagrama de dispersión. El objetivo es mostrar los valores separados por comas para los campos primero ( <code>x</code> ) y segundo ( <code>y</code> ) de cada elemento en el <code>dataset</code> de <code>dataset</code> . Los nodos de <code>text</code> necesitan los atributos <code>x</code> e <code>y</code> para colocarlos en el lienzo de SVG. En este desafío, el valor <code>y</code> (que determina la altura) puede usar el mismo valor que el <code>circle</code> usa para su atributo <code>cy</code> . El valor <code>x</code> puede ser ligeramente mayor que el valor <code>cx</code> del <code>circle</code> , por lo que la etiqueta es visible. Esto empujará la etiqueta a la derecha del punto trazado. </section>

## Instructions
<section id="instructions"> Etiqueta cada punto en el diagrama de dispersión utilizando los elementos de <code>text</code> . El texto de la etiqueta debe ser los dos valores separados por una coma y un espacio. Por ejemplo, la etiqueta para el primer punto es &quot;34, 78&quot;. Establezca el atributo <code>x</code> para que sea 5 unidades más que el valor que usó para el atributo <code>cx</code> en el <code>circle</code> . Establezca el atributo <code>y</code> la misma manera que se usa para el valor <code>cy</code> en el <code>circle</code> . </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: Su código debe tener 10 elementos de <code>text</code> .
    testString: 'assert($("text").length == 10, "Your code should have 10 <code>text</code> elements.");'
  - text: 'La primera etiqueta debe tener texto de &quot;34, 78&quot;, un valor de <code>x</code> de 39 y un valor de <code>y</code> de 422.'
    testString: 'assert($("text").eq(0).text() == "34, 78" && $("text").eq(0).attr("x") == "39" && $("text").eq(0).attr("y") == "422", "The first label should have text of "34, 78", an <code>x</code> value of 39, and a <code>y</code> value of 422.");'
  - text: 'La segunda etiqueta debe tener texto de &quot;109, 280&quot;, un valor de <code>x</code> de 114 y un valor de <code>y</code> de 220.'
    testString: 'assert($("text").eq(1).text() == "109, 280" && $("text").eq(1).attr("x") == "114" && $("text").eq(1).attr("y") == "220", "The second label should have text of "109, 280", an <code>x</code> value of 114, and a <code>y</code> value of 220.");'
  - text: 'La tercera etiqueta debe tener texto de &quot;310, 120&quot;, un valor de <code>x</code> de 315 y un valor de <code>y</code> de 380.'
    testString: 'assert($("text").eq(2).text() == "310, 120" && $("text").eq(2).attr("x") == "315" && $("text").eq(2).attr("y") == "380", "The third label should have text of "310, 120", an <code>x</code> value of 315, and a <code>y</code> value of 380.");'
  - text: 'La cuarta etiqueta debe tener texto de &quot;79, 411&quot;, un valor de <code>x</code> de 84 y un valor de <code>y</code> de 89.'
    testString: 'assert($("text").eq(3).text() == "79, 411" && $("text").eq(3).attr("x") == "84" && $("text").eq(3).attr("y") == "89", "The fourth label should have text of "79, 411", an <code>x</code> value of 84, and a <code>y</code> value of 89.");'
  - text: 'La quinta etiqueta debe tener texto de &quot;420, 220&quot;, un valor de <code>x</code> de 425 y un valor de <code>y</code> de 280.'
    testString: 'assert($("text").eq(4).text() == "420, 220" && $("text").eq(4).attr("x") == "425" && $("text").eq(4).attr("y") == "280", "The fifth label should have text of "420, 220", an <code>x</code> value of 425, and a <code>y</code> value of 280.");'
  - text: 'La sexta etiqueta debe tener texto de &quot;233, 145&quot;, un valor de <code>x</code> de 238 y un valor de <code>y</code> de 355.'
    testString: 'assert($("text").eq(5).text() == "233, 145" && $("text").eq(5).attr("x") == "238" && $("text").eq(5).attr("y") == "355", "The sixth label should have text of "233, 145", an <code>x</code> value of 238, and a <code>y</code> value of 355.");'
  - text: 'La séptima etiqueta debe tener texto de &quot;333, 96&quot;, un valor de <code>x</code> de 338 y un valor de <code>y</code> de 404.'
    testString: 'assert($("text").eq(6).text() == "333, 96" && $("text").eq(6).attr("x") == "338" && $("text").eq(6).attr("y") == "404", "The seventh label should have text of "333, 96", an <code>x</code> value of 338, and a <code>y</code> value of 404.");'
  - text: 'La octava etiqueta debe tener texto de &quot;222, 333&quot;, un valor de <code>x</code> de 227 y un valor de <code>y</code> de 167.'
    testString: 'assert($("text").eq(7).text() == "222, 333" && $("text").eq(7).attr("x") == "227" && $("text").eq(7).attr("y") == "167", "The eighth label should have text of "222, 333", an <code>x</code> value of 227, and a <code>y</code> value of 167.");'
  - text: 'La novena etiqueta debe tener texto de &quot;78, 320&quot;, un valor de <code>x</code> de 83 y un valor de <code>y</code> de 180.'
    testString: 'assert($("text").eq(8).text() == "78, 320" && $("text").eq(8).attr("x") == "83" && $("text").eq(8).attr("y") == "180", "The ninth label should have text of "78, 320", an <code>x</code> value of 83, and a <code>y</code> value of 180.");'
  - text: 'La décima etiqueta debe tener texto de &quot;21, 123&quot;, un valor de <code>x</code> de 26 y un valor de <code>y</code> de 377.'
    testString: 'assert($("text").eq(9).text() == "21, 123" && $("text").eq(9).attr("x") == "26" && $("text").eq(9).attr("y") == "377", "The tenth label should have text of "21, 123", an <code>x</code> value of 26, and a <code>y</code> value of 377.");'

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
       .data(dataset)
       .enter()
       .append("circle")
       .attr("cx", (d, i) => d[0])
       .attr("cy", (d, i) => h - d[1])
       .attr("r", 5);

    svg.selectAll("text")
       .data(dataset)
       .enter()
       .append("text")
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
