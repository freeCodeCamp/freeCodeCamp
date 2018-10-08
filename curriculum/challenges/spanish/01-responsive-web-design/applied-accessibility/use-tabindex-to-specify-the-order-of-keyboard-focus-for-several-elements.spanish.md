---
id: 587d7790367417b2b2512ab1
title: Use tabindex to Specify the Order of Keyboard Focus for Several Elements
localeTitle: Use tabindex para especificar el orden de enfoque del teclado para varios elementos
challengeType: 0
videoUrl: ''
---

## Description
<section id='description'> 
El atributo <code>tabindex</code> también especifica el orden de tabulación exacto de los elementos. Esto se logra cuando el valor del atributo se establece en un número positivo de 1 o superior. 
Establecer un tabindex = &quot;1&quot; traerá el foco del teclado a ese elemento primero. Luego pasa por la secuencia de valores de <code>tabindex</code> especificados (2, 3, etc.), antes de pasar a los elementos predeterminados y <code>tabindex=&quot;0&quot;</code> . 
Es importante tener en cuenta que cuando el orden de tabulación se establece de esta manera, anula el orden predeterminado (que utiliza la fuente HTML). Esto puede confundir a los usuarios que esperan comenzar la navegación desde la parte superior de la página. Esta técnica puede ser necesaria en algunas circunstancias, pero en términos de accesibilidad, tenga cuidado antes de aplicarla. 
Aquí hay un ejemplo: 
<code>&lt;div tabindex=&quot;1&quot;&gt;I get keyboard focus, and I get it first!&lt;/div&gt;</code> 
<code>&lt;div tabindex=&quot;2&quot;&gt;I get keyboard focus, and I get it second!&lt;/div&gt;</code> 
</section>

## Instructions
<section id='instructions'> 
Camper Cat tiene un campo de búsqueda en su página de citas inspiradoras que planea posicionar en la esquina superior derecha con CSS. Quiere que la <code>input</code> búsqueda y <code>input</code> controles de formulario de <code>input</code> sean los dos primeros elementos en el orden de tabulación. Agregue un <code>tabindex</code> atributos de <code>tabindex</code> a &quot;1&quot; a la <code>input</code> búsqueda, y un atributo de <code>tabindex</code> establecido a &quot;2&quot; a la <code>input</code> envío. 
</section>

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
    <h1>Even Deeper Thoughts with Master Camper Cat</h1>
    <nav>
      <ul>
        <li><a href="">Home</a></li>
        <li><a href="">Blog</a></li>
        <li><a href="">Training</a></li>
      </ul>
    </nav>
  </header>
  <form>
    <label for="search">Search:</label>


    <input type="search" name="search" id="search">
    <input type="submit" name="submit" value="Submit" id="submit">


  </form>
  <h2>Inspirational Quotes</h2>
  <blockquote>
    <p>&ldquo;There's no Theory of Evolution, just a list of creatures I've allowed to live.&rdquo;<br>
    - Chuck Norris</p>
  </blockquote>
  <blockquote>
    <p>&ldquo;Wise men say forgiveness is divine, but never pay full price for late pizza.&rdquo;<br>
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
// solution required
```
</section>
