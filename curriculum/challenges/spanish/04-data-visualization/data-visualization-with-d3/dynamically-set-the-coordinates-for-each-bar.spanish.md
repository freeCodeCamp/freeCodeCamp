---
id: 587d7fa9367417b2b2512bce
title: Dynamically Set the Coordinates for Each Bar
challengeType: 6
videoUrl: ''
localeTitle: Establecer dinámicamente las coordenadas para cada barra
---

## Description
<section id="description"> El último desafío creó y agregó un rectángulo al elemento <code>svg</code> para que cada punto en el <code>dataset</code> de <code>dataset</code> represente una barra. Desafortunadamente, todos estaban apilados uno encima del otro. La colocación de un rectángulo es manejada por los atributos <code>x</code> e <code>y</code> . Le dicen a D3 dónde comenzar a dibujar la forma en el área de <code>svg</code> . El último desafío los puso a 0, por lo que cada barra se colocó en la esquina superior izquierda. Para un gráfico de barras, todas las barras deben estar en el mismo nivel vertical, lo que significa que el valor de <code>y</code> permanece igual (en 0) para todas las barras. El valor <code>x</code> , sin embargo, debe cambiar a medida que agrega nuevas barras. Recuerde que los valores de <code>x</code> más grandes empujan los elementos más hacia la derecha. A medida que recorre los elementos de la matriz en el <code>dataset</code> de <code>dataset</code> , el valor de x debería aumentar. El método <code>attr()</code> en D3 acepta una función de devolución de llamada para establecer dinámicamente ese atributo. La función de devolución de llamada toma dos argumentos, uno para el punto de datos en sí (generalmente <code>d</code> ) y otro para el índice del punto de datos en la matriz. El segundo argumento para el índice es opcional. Aquí está el formato: <blockquote> selection.attr (&quot;propiedad&quot;, (d, i) =&gt; { <br> / * <br> * d es el valor del punto de datos <br> * i es el índice del punto de datos en la matriz <br> * / <br> }) </blockquote> Es importante tener en cuenta que NO es necesario escribir un bucle <code>for</code> o usar <code>forEach()</code> para iterar sobre los elementos del conjunto de datos. Recuerde que el método <code>data()</code> analiza el conjunto de datos, y cualquier método que se encadene después de que <code>data()</code> se ejecute una vez para cada elemento en el conjunto de datos. </section>

## Instructions
<section id="instructions"> Cambie la función de devolución de llamada del atributo <code>x</code> para que devuelva el índice por 30. <strong>Nota</strong> <br> Cada barra tiene un ancho de 25, por lo que al aumentar cada valor <code>x</code> en 30 se agrega algo de espacio entre las barras. Cualquier valor mayor que 25 funcionaría en este ejemplo. </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: El primer <code>rect</code> debe tener un valor <code>x</code> de 0.
    testString: 'assert($("rect").eq(0).attr("x") == "0", "The first <code>rect</code> should have an <code>x</code> value of 0.");'
  - text: El segundo <code>rect</code> debe tener un valor de <code>x</code> de 30.
    testString: 'assert($("rect").eq(1).attr("x") == "30", "The second <code>rect</code> should have an <code>x</code> value of 30.");'
  - text: El tercer <code>rect</code> debe tener un valor de <code>x</code> de 60.
    testString: 'assert($("rect").eq(2).attr("x") == "60", "The third <code>rect</code> should have an <code>x</code> value of 60.");'
  - text: El cuarto <code>rect</code> debe tener un valor de <code>x</code> de 90.
    testString: 'assert($("rect").eq(3).attr("x") == "90", "The fourth <code>rect</code> should have an <code>x</code> value of 90.");'
  - text: El quinto <code>rect</code> debe tener un valor de <code>x</code> de 120.
    testString: 'assert($("rect").eq(4).attr("x") == "120", "The fifth <code>rect</code> should have an <code>x</code> value of 120.");'
  - text: El sexto <code>rect</code> debe tener un valor de <code>x</code> de 150.
    testString: 'assert($("rect").eq(5).attr("x") == "150", "The sixth <code>rect</code> should have an <code>x</code> value of 150.");'
  - text: El séptimo <code>rect</code> debe tener un valor de <code>x</code> de 180.
    testString: 'assert($("rect").eq(6).attr("x") == "180", "The seventh <code>rect</code> should have an <code>x</code> value of 180.");'
  - text: El octavo <code>rect</code> debe tener un valor de <code>x</code> de 210.
    testString: 'assert($("rect").eq(7).attr("x") == "210", "The eighth <code>rect</code> should have an <code>x</code> value of 210.");'
  - text: El noveno <code>rect</code> debe tener un valor de <code>x</code> de 240.
    testString: 'assert($("rect").eq(8).attr("x") == "240", "The ninth <code>rect</code> should have an <code>x</code> value of 240.");'

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
       .attr("x", (d, i) => {
         // Add your code below this line



         // Add your code above this line
       })
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
