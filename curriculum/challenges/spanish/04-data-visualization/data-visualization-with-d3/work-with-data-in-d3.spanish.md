---
id: 587d7fa7367417b2b2512bc4
title: Work with Data in D3
challengeType: 6
videoUrl: ''
localeTitle: Trabajar con datos en D3
---

## Description
<section id="description"> La biblioteca D3 se centra en un enfoque basado en datos. Cuando tiene un conjunto de datos, puede aplicar los métodos D3 para mostrarlos en la página. Los datos vienen en muchos formatos, pero este desafío utiliza una simple variedad de números. El primer paso es hacer que D3 esté al tanto de los datos. El método <code>data()</code> se usa en una selección de elementos DOM para adjuntar los datos a esos elementos. El conjunto de datos se pasa como un argumento al método. Un patrón de flujo de trabajo común es crear un nuevo elemento en el documento para cada dato del conjunto. D3 tiene el método <code>enter()</code> para este propósito. Cuando <code>enter()</code> se combina con el método <code>data()</code> , observa los elementos seleccionados de la página y los compara con la cantidad de elementos de datos en el conjunto. Si hay menos elementos que elementos de datos, crea los elementos que faltan. Aquí hay un ejemplo que selecciona un elemento <code>ul</code> y crea un nuevo elemento de lista basado en el número de entradas en la matriz: <blockquote> &lt;body&gt; <br> &lt;ul&gt; &lt;/ul&gt; <br> &lt;script&gt; <br> conjunto de datos const = [&quot;a&quot;, &quot;b&quot;, &quot;c&quot;]; <br> d3.select (&quot;ul&quot;). selectAll (&quot;li&quot;) <br> .data (conjunto de datos) <br> .entrar() <br> .append (&quot;li&quot;) <br> .text (&quot;Nuevo elemento&quot;); <br> &lt;/script&gt; <br> &lt;/body&gt; </blockquote> Puede parecer confuso seleccionar elementos que aún no existen. Este código le dice a D3 que primero seleccione la <code>ul</code> en la página. A continuación, seleccione todos los elementos de la lista, lo que devuelve una selección vacía. Luego, el método <code>data()</code> revisa el conjunto de datos y ejecuta el siguiente código tres veces, una para cada elemento de la matriz. El método <code>enter()</code> ve que no hay elementos <code>li</code> en la página, pero necesita 3 (uno para cada dato en el <code>dataset</code> de <code>dataset</code> ). Los nuevos elementos de <code>li</code> se agregan a la <code>ul</code> y tienen el texto &quot;Nuevo elemento&quot;. </section>

## Instructions
<section id="instructions"> Seleccione el nodo del <code>body</code> , luego seleccione todos los elementos <code>h2</code> . Haga que D3 cree y agregue una etiqueta <code>h2</code> para cada elemento en la matriz del <code>dataset</code> . El texto en el <code>h2</code> debe decir &quot;Nuevo título&quot;. Su código debe usar los métodos <code>data()</code> y <code>enter()</code> . </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: Su documento debe tener 9 elementos <code>h2</code> .
    testString: 'assert($("h2").length == 9, "Your document should have 9 <code>h2</code> elements.");'
  - text: El texto en los elementos <code>h2</code> debe decir &quot;Nuevo título&quot;. La capitalización y el espaciado deben coincidir exactamente.
    testString: 'assert($("h2").text().match(/New Title/g).length == 9, "The text in the <code>h2</code> elements should say "New Title". The capitalization and spacing should match exactly.");'
  - text: Su código debe utilizar el método <code>data()</code> .
    testString: 'assert(code.match(/\.data/g), "Your code should use the <code>data()</code> method.");'
  - text: Su código debe utilizar el método <code>enter()</code> .
    testString: 'assert(code.match(/\.enter/g), "Your code should use the <code>enter()</code> method.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='html-seed'>

```html
<body>
  <script>
    const dataset = [12, 31, 22, 17, 25, 18, 29, 14, 9];

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
