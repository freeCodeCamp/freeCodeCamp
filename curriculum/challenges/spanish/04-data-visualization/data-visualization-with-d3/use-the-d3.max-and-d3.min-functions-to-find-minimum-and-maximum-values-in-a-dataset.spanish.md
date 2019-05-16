---
id: 587d7fac367417b2b2512bdc
title: Use the d3.max and d3.min Functions to Find Minimum and Maximum Values in a Dataset
challengeType: 6
videoUrl: ''
localeTitle: Utilice las funciones d3.max y d3.min para buscar valores mínimos y máximos en un conjunto de datos
---

## Description
<section id="description"> Los métodos D3 <code>domain()</code> y <code>range()</code> configuran esa información para su escala basándose en los datos. Hay un par de métodos para hacer eso más fácil. A menudo, cuando configura el dominio, querrá usar los valores mínimo y máximo dentro del conjunto de datos. Intentar encontrar estos valores manualmente, especialmente en un conjunto de datos de gran tamaño, puede causar errores. D3 tiene dos métodos: <code>min()</code> y <code>max()</code> para devolver esta información. Aquí hay un ejemplo: <blockquote> const exampleData = [34, 234, 73, 90, 6, 52]; <br> d3.min (exampleData) // Devuelve 6 <br> d3.max (exampleData) // Devuelve 234 </blockquote> Un conjunto de datos puede tener matrices anidadas, como los pares de coordenadas [x, y] que estaban en el ejemplo de diagrama de dispersión. En ese caso, debe indicar a D3 cómo calcular el máximo y el mínimo. Afortunadamente, los métodos <code>min()</code> y <code>max()</code> toman una función de devolución de llamada. En este ejemplo, el argumento <code>d</code> la función de devolución de llamada es para la matriz interna actual. La devolución de llamada debe devolver el elemento de la matriz interna (el valor de x o y) sobre el que desea calcular el máximo o el mínimo. Aquí hay un ejemplo de cómo encontrar los valores mínimo y máximo con una matriz de matrices: <blockquote> const locationData = [[1, 7], [6, 3], [8, 3]]; <br> // Devuelve el número más pequeño de los primeros elementos <br> const minX = d3.min (locationData, (d) =&gt; d [0]); <br> // minX comparó 1, 6 y 8 y se establece en 1 </blockquote></section>

## Instructions
<section id="instructions"> La variable <code>positionData</code> contiene una matriz tridimensional (3D). Utilice un método D3 para encontrar el valor máximo de la coordenada z (el tercer valor) de las matrices y guárdelo en la variable de <code>output</code> . <strong>Nota</strong> <br> Dato curioso: D3 puede trazar arrays 3D. </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: El texto en el <code>h2</code> debe ser 8.
    testString: 'assert(output == 8 && $("h2").text() == "8", "The text in the <code>h2</code> should be 8.");'
  - text: Su código debe utilizar el método <code>max()</code> .
    testString: 'assert(code.match(/\.max/g), "Your code should use the <code>max()</code> method.")'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='html-seed'>

```html
<body>
  <script>
    const positionData = [[1, 7, -4],[6, 3, 8],[2, 8, 3]]
    // Add your code below this line

    const output = undefined; // Change this line

    // Add your code above this line

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
