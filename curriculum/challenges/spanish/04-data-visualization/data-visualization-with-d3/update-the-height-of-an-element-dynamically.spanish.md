---
id: 587d7fa8367417b2b2512bc9
title: Update the Height of an Element Dynamically
challengeType: 6
videoUrl: ''
localeTitle: Actualizar la altura de un elemento dinámicamente
---

## Description
<section id="description"> Los desafíos anteriores cubrían cómo mostrar los datos de una matriz y cómo agregar clases de CSS. Puedes combinar estas lecciones para crear un gráfico de barras simple. Hay dos pasos para esto: 1) Crear un <code>div</code> para cada punto de datos en la matriz 2) Dar a cada <code>div</code> una altura dinámica, utilizando una función de devolución de llamada en el método <code>style()</code> que establece la altura igual al valor de los datos. establecer un estilo usando una función de devolución de llamada: <code>selection.style(&quot;cssProperty&quot;, (d) =&gt; d)</code> </section>

## Instructions
<section id="instructions"> Agregue el método <code>style()</code> al código en el editor para establecer la propiedad de <code>height</code> para cada elemento. Use una función de devolución de llamada para devolver el valor del punto de datos con la cadena &quot;px&quot; agregada. </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: El primer <code>div</code> debe tener una <code>height</code> de 12 píxeles.
    testString: 'assert($("div").eq(0).css("height") == "12px", "The first <code>div</code> should have a <code>height</code> of 12 pixels.");'
  - text: El segundo <code>div</code> debe tener una <code>height</code> de 31 píxeles.
    testString: 'assert($("div").eq(1).css("height") == "31px", "The second <code>div</code> should have a <code>height</code> of 31 pixels.");'
  - text: El tercer <code>div</code> debe tener una <code>height</code> de 22 píxeles.
    testString: 'assert($("div").eq(2).css("height") == "22px", "The third <code>div</code> should have a <code>height</code> of 22 pixels.");'
  - text: El cuarto <code>div</code> debe tener una <code>height</code> de 17 píxeles.
    testString: 'assert($("div").eq(3).css("height") == "17px", "The fourth <code>div</code> should have a <code>height</code> of 17 pixels.");'
  - text: El quinto <code>div</code> debe tener una <code>height</code> de 25 píxeles.
    testString: 'assert($("div").eq(4).css("height") == "25px", "The fifth <code>div</code> should have a <code>height</code> of 25 pixels.");'
  - text: El sexto <code>div</code> debe tener una <code>height</code> de 18 píxeles.
    testString: 'assert($("div").eq(5).css("height") == "18px", "The sixth <code>div</code> should have a <code>height</code> of 18 pixels.");'
  - text: El séptimo <code>div</code> debe tener una <code>height</code> de 29 píxeles.
    testString: 'assert($("div").eq(6).css("height") == "29px", "The seventh <code>div</code> should have a <code>height</code> of 29 pixels.");'
  - text: El octavo <code>div</code> debe tener una <code>height</code> de 14 píxeles.
    testString: 'assert($("div").eq(7).css("height") == "14px", "The eighth <code>div</code> should have a <code>height</code> of 14 pixels.");'
  - text: El noveno <code>div</code> debe tener una <code>height</code> de 9 píxeles.
    testString: 'assert($("div").eq(8).css("height") == "9px", "The ninth <code>div</code> should have a <code>height</code> of 9 pixels.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='html-seed'>

```html
<style>
  .bar {
    width: 25px;
    height: 100px;
    display: inline-block;
    background-color: blue;
  }
</style>
<body>
  <script>
    const dataset = [12, 31, 22, 17, 25, 18, 29, 14, 9];

    d3.select("body").selectAll("div")
      .data(dataset)
      .enter()
      .append("div")
      .attr("class", "bar")
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
