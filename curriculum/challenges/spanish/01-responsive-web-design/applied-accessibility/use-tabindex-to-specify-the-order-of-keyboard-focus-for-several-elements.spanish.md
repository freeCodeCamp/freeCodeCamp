---
id: 587d7790367417b2b2512ab1
title: Use tabindex to Specify the Order of Keyboard Focus for Several Elements
challengeType: 0
videoUrl: ''
localeTitle: Use tabindex para especificar el orden de enfoque del teclado para varios elementos
---

## Description
<section id="description"> El atributo <code>tabindex</code> también especifica el orden de tabulación exacto de los elementos. Esto se logra cuando el valor del atributo se establece en un número positivo de 1 o superior. Establecer un tabindex = &quot;1&quot; traerá el foco del teclado a ese elemento primero. Luego pasa por la secuencia de valores de <code>tabindex</code> especificados (2, 3, etc.), antes de pasar a los elementos predeterminados y <code>tabindex=&quot;0&quot;</code> . Es importante tener en cuenta que cuando el orden de tabulación se establece de esta manera, anula el orden predeterminado (que utiliza la fuente HTML). Esto puede confundir a los usuarios que esperan comenzar la navegación desde la parte superior de la página. Esta técnica puede ser necesaria en algunas circunstancias, pero en términos de accesibilidad, tenga cuidado antes de aplicarla. Aquí hay un ejemplo: <code>&lt;div tabindex=&quot;1&quot;&gt;¡Tengo enfoque de teclado, y lo tengo primero!&lt;/div&gt;</code> <code>&lt;div tabindex=&quot;2&quot;&gt;¡Tengo enfoque de teclado, y lo tengo segundo!&lt;/div&gt;</code> </section>

## Instructions
<section id="instructions"> Camper Cat tiene un campo de búsqueda en su página de citas inspiradoras que planea posicionar en la esquina superior derecha con CSS. Quiere que el campo <code>input</code> de búsqueda y los campos <code>input</code> de controles de formulario sean los dos primeros elementos en el orden de tabulación. Agregue el atributo <code>tabindex</code> establecido a &quot;1&quot; al campo <code>input</code> de búsqueda, y un atributo de <code>tabindex</code> establecido a &quot;2&quot; al campo <code>input</code> de formulario.</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: Su código debe agregar un atributo <code>tabindex</code> a la etiqueta de <code>input</code> búsqueda.
    testString: 'assert($("#search").attr("tabindex"), "Your code should add a <code>tabindex</code> attribute to the search <code>input</code> tag.");'
  - text: Su código debe agregar un atributo <code>tabindex</code> a la etiqueta de <code>input</code> envío.
    testString: 'assert($("#submit").attr("tabindex"), "Your code should add a <code>tabindex</code> attribute to the submit <code>input</code> tag.");'
  - text: Su código debe establecer el atributo <code>tabindex</code> en la etiqueta de <code>input</code> búsqueda a un valor de 1.
    testString: 'assert($("#search").attr("tabindex") == "1", "Your code should set the <code>tabindex</code> attribute on the search <code>input</code> tag to a value of 1.");'
  - text: Su código debe establecer el atributo <code>tabindex</code> en la etiqueta de <code>input</code> envío a un valor de 2.
    testString: 'assert($("#submit").attr("tabindex") == "2", "Your code should set the <code>tabindex</code> attribute on the submit <code>input</code> tag to a value of 2.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='html-seed'>

```html
<body>
  <header>
    <h1>Pensamientos aun más profundos con el Maestro Camper Cat</h1>
    <nav>
      <ul>
        <li><a href="">Inicio</a></li>
        <li><a href="">Blog</a></li>
        <li><a href="">Entrenamiento</a></li>
      </ul>
    </nav>
  </header>
  <form>
    <label for="search">Búsqueda:</label>


    <input type="search" name="search" id="search">
    <input type="submit" name="submit" value="Submit" id="submit">


  </form>
  <h2>Frases Inspiracionales</h2>
  <blockquote>
    <p>&ldquo;No hay Teoría de la Evolución, sólo una lista de criaturas a las que he dejado vivir.&rdquo;<br>
    - Chuck Norris</p>
  </blockquote>
  <blockquote>
    <p>&ldquo;Los hombres sabios dicen que el perdón es divino, pero nunca pagan el precio completo de una pizza que llega tarde.&rdquo;<br>
    - TMNT</p>
  </blockquote>
  <footer>&copy; 2018 Camper Cat</footer>
</body>

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solución requerida
```

</section>
