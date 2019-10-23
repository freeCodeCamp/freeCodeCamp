---
id: 587d7faa367417b2b2512bd2
title: Add Labels to D3 Elements
challengeType: 6
videoUrl: ''
localeTitle: Añadir etiquetas a elementos D3
---

## Description
<section id="description"> D3 le permite etiquetar un elemento gráfico, como una barra, usando el elemento de <code>text</code> SVG. Al igual que el elemento <code>rect</code> , un elemento de <code>text</code> debe tener los atributos <code>x</code> e <code>y</code> , para colocarlo en el lienzo SVG. También necesita acceder a los datos para mostrar esos valores. D3 le da un alto nivel de control sobre cómo etiquetar sus barras. </section>

## Instructions
<section id="instructions"> El código en el editor ya vincula los datos a cada nuevo elemento de <code>text</code> . Primero, agregue nodos de <code>text</code> al <code>svg</code> . A continuación, agregue atributos para las coordenadas <code>x</code> e <code>y</code> . Deben calcularse de la misma manera que los <code>rect</code> , excepto que el valor <code>y</code> para el <code>text</code> debe hacer que la etiqueta se sitúe 3 unidades por encima de la barra. Finalmente, use el método D3 <code>text()</code> para establecer la etiqueta igual al valor del punto de datos. <strong>Nota</strong> <br> Para que la etiqueta quede más alta que la barra, decida si el valor <code>y</code> para el <code>text</code> debe ser 3 mayor o 3 menos que el valor <code>y</code> para la barra. </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: El primer elemento de <code>text</code> debe tener una etiqueta de 12 y un valor de <code>y</code> de 61.
    testString: 'assert($("text").eq(0).text() == "12" && $("text").eq(0).attr("y") == "61", "The first <code>text</code> element should have a label of 12 and a <code>y</code> value of 61.");'
  - text: El segundo elemento de <code>text</code> debe tener una etiqueta de 31 y un valor de <code>y</code> de 4.
    testString: 'assert($("text").eq(1).text() == "31" && $("text").eq(1).attr("y") == "4", "The second <code>text</code> element should have a label of 31 and a <code>y</code> value of 4.");'
  - text: El tercer elemento de <code>text</code> debe tener una etiqueta de 22 y un valor de <code>y</code> de 31.
    testString: 'assert($("text").eq(2).text() == "22" && $("text").eq(2).attr("y") == "31", "The third <code>text</code> element should have a label of 22 and a <code>y</code> value of 31.");'
  - text: El cuarto elemento de <code>text</code> debe tener una etiqueta de 17 y un valor de <code>y</code> de 46.
    testString: 'assert($("text").eq(3).text() == "17" && $("text").eq(3).attr("y") == "46", "The fourth <code>text</code> element should have a label of 17 and a <code>y</code> value of 46.");'
  - text: El quinto elemento de <code>text</code> debe tener una etiqueta de 25 y un valor de <code>y</code> de 22.
    testString: 'assert($("text").eq(4).text() == "25" && $("text").eq(4).attr("y") == "22", "The fifth <code>text</code> element should have a label of 25 and a <code>y</code> value of 22.");'
  - text: El sexto elemento de <code>text</code> debe tener una etiqueta de 18 y un valor de <code>y</code> de 43.
    testString: 'assert($("text").eq(5).text() == "18" && $("text").eq(5).attr("y") == "43", "The sixth <code>text</code> element should have a label of 18 and a <code>y</code> value of 43.");'
  - text: El séptimo elemento de <code>text</code> debe tener una etiqueta de 29 y un valor de <code>y</code> de 10.
    testString: 'assert($("text").eq(6).text() == "29" && $("text").eq(6).attr("y") == "10", "The seventh <code>text</code> element should have a label of 29 and a <code>y</code> value of 10.");'
  - text: El octavo elemento de <code>text</code> debe tener una etiqueta de 14 y un valor de <code>y</code> de 55.
    testString: 'assert($("text").eq(7).text() == "14" && $("text").eq(7).attr("y") == "55", "The eighth <code>text</code> element should have a label of 14 and a <code>y</code> value of 55.");'
  - text: El noveno elemento de <code>text</code> debe tener una etiqueta de 9 y un valor de <code>y</code> de 70.
    testString: 'assert($("text").eq(8).text() == "9" && $("text").eq(8).attr("y") == "70", "The ninth <code>text</code> element should have a label of 9 and a <code>y</code> value of 70.");'

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
       .attr("fill", "navy");

    svg.selectAll("text")
       .data(dataset)
       .enter()
       // Add your code below this line




       // Add your code above this line
  </script>
<body>

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
