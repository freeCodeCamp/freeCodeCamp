---
id: 587d7fac367417b2b2512bdb
title: Set a Domain and a Range on a Scale
challengeType: 6
videoUrl: ''
localeTitle: Establecer un dominio y un rango en una escala
---

## Description
<section id="description"> De forma predeterminada, las escalas utilizan la relación de identidad: el valor de entrada se asigna al valor de salida. Pero las escalas pueden ser mucho más flexibles e interesantes. Supongamos que un conjunto de datos tiene valores que oscilan entre 50 y 480. Esta es la información de entrada para una escala y también se conoce como dominio. Desea asignar esos puntos a lo largo del eje <code>x</code> en el lienzo de SVG, entre 10 unidades y 500 unidades. Esta es la información de salida, que también se conoce como el rango. Los métodos <code>domain()</code> y <code>range()</code> establecen estos valores para la escala. Ambos métodos toman una matriz de al menos dos elementos como un argumento. Aquí hay un ejemplo: <blockquote> // Establecer un dominio <br> // El dominio cubre el conjunto de valores de entrada. <br> dominio de escala ([50, 480]); <br> // establecer un rango <br> // El rango cubre el conjunto de valores de salida. <br> scale.range ([10, 500]); <br> escala (50) // Devoluciones 10 <br> escala (480) // Devoluciones 500 <br> escala (325) // Devoluciones 323.37 <br> escala (750) // Devoluciones 807.67 <br> d3.scaleLinear () </blockquote> Observe que la escala utiliza la relación lineal entre el dominio y los valores de rango para determinar cuál debe ser la salida para un número dado. El valor mínimo en el dominio (50) se asigna al valor mínimo (10) en el rango. </section>

## Instructions
<section id="instructions"> Cree una escala y establezca su dominio en <code>[250, 500]</code> y alcance en <code>[10, 150]</code> . <strong>Nota</strong> <br> Puede encadenar los métodos de <code>domain()</code> y <code>range()</code> a la variable de <code>scale</code> . </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: Su código debe utilizar el método <code>domain()</code> .
    testString: 'assert(code.match(/\.domain/g), "Your code should use the <code>domain()</code> method.");'
  - text: 'El <code>domain()</code> de la escala se debe establecer en <code>[250, 500]</code> .'
    testString: 'assert(JSON.stringify(scale.domain()) == JSON.stringify([250, 500]), "The <code>domain()</code> of the scale should be set to <code>[250, 500]</code>.");'
  - text: Su código debe utilizar el método <code>range()</code> .
    testString: 'assert(code.match(/\.range/g), "Your code should use the <code>range()</code> method.");'
  - text: 'El <code>range()</code> de la escala se debe establecer en <code>[10, 150]</code> .'
    testString: 'assert(JSON.stringify(scale.range()) == JSON.stringify([10, 150]), "The <code>range()</code> of the scale should be set to <code>[10, 150]</code>.");'
  - text: El texto en el <code>h2</code> debe ser -102.
    testString: 'assert($("h2").text() == "-102", "The text in the <code>h2</code> should be -102.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='html-seed'>

```html
<body>
  <script>
    // Add your code below this line
    const scale = d3.scaleLinear();



    // Add your code above this line
    const output = scale(50);
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
