---
id: 587d7fad367417b2b2512bdf
title: Add Axes to a Visualization
challengeType: 6
videoUrl: ''
localeTitle: Añadir ejes a una visualización
---

## Description
<section id="description"> Otra forma de mejorar el diagrama de dispersión es agregar un eje x y un eje y. D3 tiene dos métodos <code>axisLeft()</code> y <code>axisBottom()</code> para representar los ejes y y x, respectivamente. (Ejes es la forma plural de eje). Aquí hay un ejemplo para crear el eje x basado en <code>xScale</code> en los desafíos anteriores: <code>const xAxis = d3.axisBottom(xScale);</code> El siguiente paso es representar el eje en el lienzo de SVG. Para hacerlo, puedes usar un componente general SVG, el elemento <code>g</code> . La <code>g</code> significa grupo. A diferencia de <code>rect</code> , <code>circle</code> y <code>text</code> , un eje es solo una línea recta cuando se procesa. Porque es una forma simple, usando <code>g</code> funciona. El último paso es aplicar un atributo de <code>transform</code> para colocar el eje en el lienzo SVG en el lugar correcto. De lo contrario, la línea se representaría a lo largo del borde del lienzo SVG y no sería visible. SVG admite diferentes tipos de <code>transforms</code> , pero es necesario <code>translate</code> posicionamiento de un eje. Cuando se aplica al elemento <code>g</code> , mueve todo el grupo hacia arriba y hacia abajo según las cantidades dadas. Aquí hay un ejemplo: <blockquote> const xAxis = d3.axisBottom (xScale); <br><br> svg.append (&quot;g&quot;) <br> .attr (&quot;transformar&quot;, &quot;traducir (0,&quot; + (h - relleno) + &quot;)&quot;) <br> .call (xAxis); </blockquote> El código anterior coloca el eje x en la parte inferior del lienzo de SVG. Luego se pasa como un argumento al método <code>call()</code> . El eje y funciona de la misma manera, excepto que el argumento de <code>translate</code> está en la forma (x, 0). Debido a que <code>translate</code> es una cadena en el método <code>attr()</code> anterior, puede usar la concatenación para incluir valores variables para sus argumentos. </section>

## Instructions
<section id="instructions"> El diagrama de dispersión ahora tiene un eje x. Cree un eje y en una variable llamada <code>yAxis</code> usando el método <code>axisLeft()</code> . Luego renderiza el eje usando un elemento <code>g</code> . Asegúrese de usar un atributo de <code>transform</code> para traducir el eje por la cantidad de unidades de relleno a la derecha y 0 unidades hacia abajo. Recuerda <code>call()</code> al eje. </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: Su código debe usar el método <code>axisLeft()</code> con <code>yScale</code> pasado como argumento.
    testString: 'assert(code.match(/\.axisLeft\(yScale\)/g), "Your code should use the <code>axisLeft()</code> method with <code>yScale</code> passed as the argument.");'
  - text: 'El elemento <code>g</code> eje y debe tener un atributo de <code>transform</code> para traducir el eje en (60, 0).'
    testString: 'assert($("g").eq(1).attr("transform").match(/translate\(60\s*?,\s*?0\)/g), "The y-axis <code>g</code> element should have a <code>transform</code> attribute to translate the axis by (60, 0).");'
  - text: Su código debe llamar al <code>yAxis</code> .
    testString: 'assert(code.match(/\.call\(yAxis\)/g), "Your code should call the <code>yAxis</code>.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='html-seed'>

```html
<body>
  <script>
    const dataset = [
                  [ 34,     78 ],
                  [ 109,   280 ],
                  [ 310,   120 ],
                  [ 79,   411 ],
                  [ 420,   220 ],
                  [ 233,   145 ],
                  [ 333,   96 ],
                  [ 222,    333 ],
                  [ 78,    320 ],
                  [ 21,   123 ]
                ];

    const w = 500;
    const h = 500;
    const padding = 60;

    const xScale = d3.scaleLinear()
                     .domain([0, d3.max(dataset, (d) => d[0])])
                     .range([padding, w - padding]);

    const yScale = d3.scaleLinear()
                     .domain([0, d3.max(dataset, (d) => d[1])])
                     .range([h - padding, padding]);

    const svg = d3.select("body")
                  .append("svg")
                  .attr("width", w)
                  .attr("height", h);

    svg.selectAll("circle")
       .data(dataset)
       .enter()
       .append("circle")
       .attr("cx", (d) => xScale(d[0]))
       .attr("cy",(d) => yScale(d[1]))
       .attr("r", (d) => 5);

    svg.selectAll("text")
       .data(dataset)
       .enter()
       .append("text")
       .text((d) =>  (d[0] + "," + d[1]))
       .attr("x", (d) => xScale(d[0] + 10))
       .attr("y", (d) => yScale(d[1]))

    const xAxis = d3.axisBottom(xScale);
    // Add your code below this line
    const yAxis = undefined;
    // Add your code above this line

    svg.append("g")
       .attr("transform", "translate(0," + (h - padding) + ")")
       .call(xAxis);

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
