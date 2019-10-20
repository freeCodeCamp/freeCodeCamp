---
id: 587d7fac367417b2b2512bdd
title: Use Dynamic Scales
challengeType: 6
videoUrl: ''
localeTitle: Usa escalas dinámicas
---

## Description
<section id="description"> Los métodos D3 <code>min()</code> y <code>max()</code> son útiles para ayudar a establecer la escala. Dado un conjunto de datos complejos, una prioridad es establecer la escala para que la visualización se ajuste al ancho y al alto del contenedor SVG. Desea que todos los datos se representen en el lienzo de SVG para que estén visibles en la página web. El siguiente ejemplo establece la escala del eje x para los datos del diagrama de dispersión. El método <code>domain()</code> pasa información a la escala sobre los valores de datos sin procesar para el gráfico. El método <code>range()</code> le proporciona información sobre el espacio real en la página web para la visualización. En el ejemplo, el dominio va de 0 al máximo en el conjunto. Utiliza el método <code>max()</code> con una función de devolución de llamada basada en los valores de x en las matrices. El rango utiliza el ancho del lienzo de SVG ( <code>w</code> ), pero también incluye algunos rellenos. Esto pone espacio entre los puntos del diagrama de dispersión y el borde del lienzo SVG. <blockquote> conjunto de datos const = [ <br> [34, 78], <br> [109, 280], <br> [310, 120], <br> [79, 411], <br> [420, 220], <br> [233, 145], <br> [333, 96], <br> [222, 333], <br> [78, 320], <br> [21, 123] <br> ]; <br> const w = 500; <br> const h = 500; <br><br> // Relleno entre el límite del lienzo SVG y la trama <br> relleno de const = 30; <br> const xScale = d3.scaleLinear () <br> .dominio ([0, d3.max (conjunto de datos, (d) =&gt; d [0])]) <br> .range ([relleno, w - relleno]); </blockquote> El relleno puede ser confuso al principio. Represente el eje x como una línea horizontal de 0 a 500 (el valor de ancho para el lienzo SVG). La inclusión del relleno en el método <code>range()</code> obliga a la trama a comenzar en 30 a lo largo de esa línea (en lugar de 0), y termina en 470 (en lugar de 500). </section>

## Instructions
<section id="instructions"> Use la variable <code>yScale</code> para crear una escala lineal del eje y. El dominio debe comenzar en cero e ir al valor máximo de y en el conjunto. El rango debe usar la altura SVG ( <code>h</code> ) e incluir el relleno. <strong>Nota</strong> <br> Recuerda mantener la trama al revés. Cuando establece el rango para las coordenadas y, el valor más alto (altura menos relleno) es el primer argumento, y el valor más bajo es el segundo argumento. </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: El texto en el <code>h2</code> debe ser 30.
    testString: 'assert(output == 30 && $("h2").text() == "30", "The text in the <code>h2</code> should be 30.");'
  - text: 'El <code>domain()</code> de yScale debe ser equivalente a <code>[0, 411]</code> .'
    testString: 'assert(JSON.stringify(yScale.domain()) == JSON.stringify([0, 411]), "The <code>domain()</code> of yScale should be equivalent to <code>[0, 411]</code>.");'
  - text: 'El <code>range()</code> de yScale debe ser equivalente a <code>[470, 30]</code> .'
    testString: 'assert(JSON.stringify(yScale.range()) == JSON.stringify([470, 30]), "The <code>range()</code> of yScale should be equivalent to <code>[470, 30]</code>.");'

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

    // Padding between the SVG canvas boundary and the plot
    const padding = 30;

    // Create an x and y scale

    const xScale = d3.scaleLinear()
                    .domain([0, d3.max(dataset, (d) => d[0])])
                    .range([padding, w - padding]);

    // Add your code below this line

    const yScale = undefined;


    // Add your code above this line

    const output = yScale(411); // Returns 30
    d3.select("body")
      .append("h2")
      .text(output)
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
