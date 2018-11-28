---
id: 587d7fa8367417b2b2512bcb
title: Learn About SVG in D3
challengeType: 6
videoUrl: ''
localeTitle: Aprende sobre SVG en D3
---

## Description
<section id="description"> SVG significa <code>Scalable Vector Graphics</code> . Aquí &quot;escalable&quot; significa que, si acerca o aleja un objeto, no aparecerá pixelado. Escala con el sistema de pantalla, ya sea en una pequeña pantalla móvil o en un gran monitor de TV. SVG se utiliza para hacer formas geométricas comunes. Dado que D3 mapea los datos en una representación visual, utiliza SVG para crear las formas para la visualización. Las formas SVG para una página web deben ir dentro de una etiqueta <code>svg</code> HTML. CSS puede ser escalable cuando los estilos usan unidades relativas (como <code>vh</code> , <code>vw</code> o porcentajes), pero usar SVG es más flexible para crear visualizaciones de datos. </section>

## Instructions
<section id="instructions"> Agregue un nodo <code>svg</code> al <code>body</code> usando <code>append()</code> . Asígnele un atributo de <code>width</code> establecido en la constante <code>w</code> proporcionada y un atributo de <code>height</code> establecido en la constante <code>h</code> proporcionada utilizando el método <code>attr()</code> para cada uno. Lo verás en la salida porque hay un <code>background-color</code> de <code>background-color</code> rosa aplicado en la etiqueta de <code>style</code> . <strong>Nota</strong> <br> Los atributos de ancho y alto no tienen unidades. Este es el componente básico de la escala: el elemento siempre tendrá una relación de ancho a altura de 5: 1, independientemente del nivel de zoom. </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: Su documento debe tener 1 elemento <code>svg</code> .
    testString: 'assert($("svg").length == 1, "Your document should have 1 <code>svg</code> element.");'
  - text: El elemento <code>svg</code> debe tener un atributo de <code>width</code> establecido en 500.
    testString: 'assert($("svg").attr("width") == "500", "The <code>svg</code> element should have a <code>width</code> attribute set to 500.");'
  - text: El elemento <code>svg</code> debe tener un atributo de <code>height</code> establecido en 100.
    testString: 'assert($("svg").attr("height") == "100", "The <code>svg</code> element should have a <code>height</code> attribute set to 100.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='html-seed'>

```html
<style>
  svg {
    background-color: pink;
  }
</style>
<body>
  <script>
    const dataset = [12, 31, 22, 17, 25, 18, 29, 14, 9];

    const w = 500;
    const h = 100;

    const svg = d3.select("body")
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
