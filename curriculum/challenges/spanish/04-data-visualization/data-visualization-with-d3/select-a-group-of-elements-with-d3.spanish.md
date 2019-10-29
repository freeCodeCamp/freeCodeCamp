---
id: 587d7fa6367417b2b2512bc3
title: Select a Group of Elements with D3
challengeType: 6
videoUrl: ''
localeTitle: Seleccione un grupo de elementos con D3
---

## Description
<section id="description"> D3 también tiene el método <code>selectAll()</code> para seleccionar un grupo de elementos. Devuelve una matriz de nodos HTML para todos los elementos del documento que coinciden con la cadena de entrada. Aquí hay un ejemplo para seleccionar todas las etiquetas de anclaje en un documento: <code>const anchors = d3.selectAll(&quot;a&quot;);</code> Al igual que el método <code>select()</code> , <code>selectAll()</code> admite el encadenamiento de métodos, y puede usarlo con otros métodos. </section>

## Instructions
<section id="instructions"> Seleccione todas las etiquetas <code>li</code> en el documento y cambie su texto a &quot;elemento de lista&quot; encadenando el método <code>.text()</code> . </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: 'Debe haber 3 elementos <code>li</code> en la página, y el texto de cada uno debe decir &quot;elemento de la lista&quot;. La capitalización y el espaciado deben coincidir exactamente.'
    testString: 'assert($("li").text().match(/list item/g).length == 3, "There should be 3 <code>li</code> elements on the page, and the text in each one should say "list item". Capitalization and spacing should match exactly.");'
  - text: Su código debe acceder al objeto <code>d3</code> .
    testString: 'assert(code.match(/d3/g), "Your code should access the <code>d3</code> object.");'
  - text: Su código debe utilizar el método <code>selectAll</code> .
    testString: 'assert(code.match(/\.selectAll/g), "Your code should use the <code>selectAll</code> method.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='html-seed'>

```html
<body>
  <ul>
    <li>Example</li>
    <li>Example</li>
    <li>Example</li>
  </ul>
  <script>
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
