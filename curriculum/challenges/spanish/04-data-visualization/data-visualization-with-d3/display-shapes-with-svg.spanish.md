---
id: 587d7fa8367417b2b2512bcc
title: Display Shapes with SVG
challengeType: 6
videoUrl: ''
localeTitle: Mostrar formas con SVG
---

## Description
<section id="description"> El último desafío creó un elemento <code>svg</code> con un ancho y alto dado, que era visible porque tenía un <code>background-color</code> aplicado en la etiqueta de <code>style</code> . El código hizo espacio para el ancho y alto dado. El siguiente paso es crear una forma para colocar en el área de <code>svg</code> . Hay una serie de formas compatibles en SVG, como rectángulos y círculos. Se utilizan para mostrar datos. Por ejemplo, una forma SVG rectangular ( <code>&lt;rect&gt;</code> ) podría crear una barra en un gráfico de barras. Cuando coloca una forma en el área de <code>svg</code> , puede especificar a dónde va con las coordenadas <code>x</code> e <code>y</code> . El punto de origen de (0, 0) está en la esquina superior izquierda. Los valores positivos para <code>x</code> empujan la forma hacia la derecha, y los valores positivos para <code>y</code> empujan la forma hacia abajo desde el punto de origen. Para colocar una forma en el medio del <code>svg</code> 500 (ancho) x 100 (altura) del último desafío, la coordenada <code>x</code> sería 250 y la coordenada <code>y</code> sería 50. Un <code>rect</code> SVG tiene cuatro atributos. Existen las coordenadas <code>x</code> e <code>y</code> donde se coloca en el área de <code>svg</code> . También tiene una <code>height</code> y <code>width</code> para especificar el tamaño. </section>

## Instructions
<section id="instructions"> Agregue una forma <code>rect</code> a la <code>svg</code> usando <code>append()</code> , y asigne un atributo de <code>width</code> de 25 y un atributo de <code>height</code> de 100. Además, <code>rect</code> atributos <code>rect</code> <code>x</code> e <code>y</code> cada conjunto a 0. </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: Su documento debe tener 1 elemento <code>rect</code> .
    testString: 'assert($("rect").length == 1, "Your document should have 1 <code>rect</code> element.");'
  - text: El elemento <code>rect</code> debe tener un atributo de <code>width</code> establecido en 25.
    testString: 'assert($("rect").attr("width") == "25", "The <code>rect</code> element should have a <code>width</code> attribute set to 25.");'
  - text: El elemento <code>rect</code> debe tener un atributo de <code>height</code> establecido en 100.
    testString: 'assert($("rect").attr("height") == "100", "The <code>rect</code> element should have a <code>height</code> attribute set to 100.");'
  - text: El elemento <code>rect</code> debe tener un atributo <code>x</code> establecido en 0.
    testString: 'assert($("rect").attr("x") == "0", "The <code>rect</code> element should have an <code>x</code> attribute set to 0.");'
  - text: El elemento <code>rect</code> debe tener un atributo <code>y</code> establecido en 0.
    testString: 'assert($("rect").attr("y") == "0", "The <code>rect</code> element should have a <code>y</code> attribute set to 0.");'

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
                  .attr("height", h)
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
