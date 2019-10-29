---
id: 587d7fa7367417b2b2512bc8
title: Add Classes with D3
challengeType: 6
videoUrl: ''
localeTitle: Añadir clases con D3
---

## Description
<section id="description"> Usar una gran cantidad de estilos en línea en elementos HTML es difícil de administrar, incluso para aplicaciones más pequeñas. Es más fácil agregar una clase a los elementos y diseñar esa clase una vez utilizando las reglas CSS. D3 tiene el método <code>attr()</code> para agregar cualquier atributo HTML a un elemento, incluido un nombre de clase. El método <code>attr()</code> funciona de la misma manera que el <code>style()</code> . Toma valores separados por comas y puede usar una función de devolución de llamada. Aquí hay un ejemplo para agregar una clase de &quot;contenedor&quot; a una selección: <code>selection.attr(&quot;class&quot;, &quot;container&quot;);</code> </section>

## Instructions
<section id="instructions"> Agregue el método <code>attr()</code> al código en el editor y coloque una clase de <code>bar</code> en los elementos <code>div</code> . </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: Tus elementos <code>div</code> deben tener una clase de <code>bar</code> .
    testString: 'assert($("div").attr("class") == "bar", "Your <code>div</code> elements should have a class of <code>bar</code>.");'
  - text: Su código debe utilizar el método <code>attr()</code> .
    testString: 'assert(code.match(/\.attr/g), "Your code should use the <code>attr()</code> method.");'

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
