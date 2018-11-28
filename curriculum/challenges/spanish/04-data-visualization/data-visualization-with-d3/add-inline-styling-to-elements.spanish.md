---
id: 587d7fa7367417b2b2512bc6
title: Add Inline Styling to Elements
challengeType: 6
videoUrl: ''
localeTitle: Añadir estilo en línea a los elementos
---

## Description
<section id="description"> D3 le permite agregar estilos CSS en línea en elementos dinámicos con el método <code>style()</code> . El método <code>style()</code> toma un par clave-valor separado por comas como argumento. Aquí hay un ejemplo para establecer el color del texto de la selección en azul: <code>selection.style(&quot;color&quot;,&quot;blue&quot;);</code> </section>

## Instructions
<section id="instructions"> Agregue el método <code>style()</code> al código en el editor para hacer que todo el texto mostrado tenga una <code>font-family</code> de <code>verdana</code> . </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: Tus elementos <code>h2</code> deben tener una <code>font-family</code> de verdana.
    testString: 'assert($("h2").css("font-family") == "verdana", "Your <code>h2</code> elements should have a <code>font-family</code> of verdana.");'
  - text: Su código debe utilizar el método <code>style()</code> .
    testString: 'assert(code.match(/\.style/g), "Your code should use the <code>style()</code> method.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='html-seed'>

```html
<body>
  <script>
    const dataset = [12, 31, 22, 17, 25, 18, 29, 14, 9];

    d3.select("body").selectAll("h2")
      .data(dataset)
      .enter()
      .append("h2")
      .text((d) => (d + " USD"))
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
