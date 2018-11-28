---
id: 587d7fab367417b2b2512bda
title: Create a Linear Scale with D3
challengeType: 6
videoUrl: ''
localeTitle: Crea una escala lineal con D3
---

## Description
<section id="description"> El gráfico de barras y dispersión traza los datos trazados directamente en el lienzo de SVG. Sin embargo, si la altura de una barra o uno de los puntos de datos fuera mayor que los valores de altura o anchura de SVG, saldría del área de SVG. En D3, hay escalas para ayudar a trazar datos. <code>Scales</code> son funciones que le indican al programa cómo asignar un conjunto de puntos de datos sin procesar en los píxeles del lienzo SVG. Por ejemplo, supongamos que tiene un lienzo SVG de tamaño 100x500 y desea trazar el Producto Interno Bruto (PIB) para varios países. El conjunto de números estaría en el rango de mil millones o trillón de dólares. Le proporciona a D3 un tipo de escala para decirle cómo colocar los valores de PIB grandes en esa área de tamaño 100x500. Es poco probable que grafiques los datos en bruto como están. Antes de trazarlo, establezca la escala para todo su conjunto de datos, de modo que los valores de <code>x</code> e <code>y</code> se ajusten a su ancho y altura de lienzo. D3 tiene varios tipos de escala. Para una escala lineal (generalmente utilizada con datos cuantitativos), existe el método D3 <code>scaleLinear()</code> : <code>const scale = d3.scaleLinear()</code> Por defecto, una escala usa la relación de identidad. El valor de la entrada es el mismo que el valor de la salida. Un desafío separado cubre cómo cambiar esto. </section>

## Instructions
<section id="instructions"> Cambia la variable de <code>scale</code> para crear una escala lineal. A continuación, establezca la variable de <code>output</code> en la escala llamada con un argumento de entrada de 50. </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: El texto en el <code>h2</code> debe ser 50.
    testString: 'assert($("h2").text() == "50", "The text in the <code>h2</code> should be 50.");'
  - text: Su código debe utilizar el método <code>scaleLinear()</code> .
    testString: 'assert(code.match(/\.scaleLinear/g), "Your code should use the <code>scaleLinear()</code> method.");'
  - text: La variable de <code>output</code> debe llamar <code>scale</code> con un argumento de 50.
    testString: 'assert(output == 50 && code.match(/scale\(\s*?50\s*?\)/g), "The <code>output</code> variable should call <code>scale</code> with an argument of 50.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='html-seed'>

```html
<body>
  <script>
    // Add your code below this line

    const scale = undefined; // Create the scale here
    const output = scale(); // Call the scale with an argument here

    // Add your code above this line

    d3.select("body")
      .append("h2")
      .text(output);

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
