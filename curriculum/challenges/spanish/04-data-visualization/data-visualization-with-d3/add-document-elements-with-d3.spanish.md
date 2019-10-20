---
id: 587d7fa6367417b2b2512bc2
title: Add Document Elements with D3
challengeType: 6
videoUrl: ''
localeTitle: Añadir elementos de documento con D3
---

## Description
<section id="description"> D3 tiene varios métodos que le permiten agregar y cambiar elementos en su documento. El método <code>select()</code> selecciona un elemento del documento. Toma un argumento para el nombre del elemento que desea y devuelve un nodo HTML para el primer elemento del documento que coincide con el nombre. Aquí hay un ejemplo: <code>const anchor = d3.select(&quot;a&quot;);</code> El ejemplo anterior encuentra la primera etiqueta de anclaje en la página y guarda un nodo HTML para ella en el <code>anchor</code> la variable. Puede utilizar la selección con otros métodos. La parte &quot;d3&quot; del ejemplo es una referencia al objeto D3, que es cómo acceder a los métodos D3. Otros dos métodos útiles son <code>append()</code> y <code>text()</code> . El método <code>append()</code> toma un argumento para el elemento que desea agregar al documento. Agrega un nodo HTML a un elemento seleccionado y devuelve un identificador a ese nodo. El método <code>text()</code> establece el texto del nodo seleccionado o obtiene el texto actual. Para establecer el valor, se pasa una cadena como un argumento dentro de los paréntesis del método. Aquí hay un ejemplo que selecciona una lista desordenada, agrega un elemento de lista y agrega texto: <blockquote> d3.seleccionar (&quot;ul&quot;) <br> .append (&quot;li&quot;) <br> .text (&quot;Elemento muy importante&quot;); </blockquote> D3 le permite encadenar varios métodos junto con puntos para realizar varias acciones seguidas. </section>

## Instructions
<section id="instructions"> Utilice el <code>select</code> método para seleccionar el <code>body</code> la etiqueta en el documento. Luego, <code>append</code> una etiqueta <code>h1</code> y agregue el texto &quot;Aprendizaje D3&quot; en el elemento <code>h1</code> . </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: El <code>body</code> debe tener un elemento <code>h1</code> .
    testString: 'assert($("body").children("h1").length == 1, "The <code>body</code> should have one <code>h1</code> element.");'
  - text: El elemento <code>h1</code> debe tener el texto &quot;Aprendizaje D3&quot; en él.
    testString: 'assert($("h1").text() == "Learning D3", "The <code>h1</code> element should have the text "Learning D3" in it.");'
  - text: Su código debe acceder al objeto <code>d3</code> .
    testString: 'assert(code.match(/d3/g), "Your code should access the <code>d3</code> object.");'
  - text: Su código debe utilizar el método de <code>select</code> .
    testString: 'assert(code.match(/\.select/g), "Your code should use the <code>select</code> method.");'
  - text: Su código debe utilizar el método de <code>append</code> .
    testString: 'assert(code.match(/\.append/g), "Your code should use the <code>append</code> method.");'
  - text: Su código debe utilizar el método de <code>text</code> .
    testString: 'assert(code.match(/\.text/g), "Your code should use the <code>text</code> method.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='html-seed'>

```html
<body>
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
