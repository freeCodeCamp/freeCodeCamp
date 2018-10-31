---
id: 587d7790367417b2b2512aaf
title: Make Links Navigatable with HTML Access Keys
challengeType: 0
videoUrl: ''
localeTitle: Haga que los enlaces sean navegables con claves de acceso HTML
---

## Description
<section id="description"> HTML ofrece la <code>accesskey</code> atributo para especificar una tecla de acceso directo para activar o traer el foco a un elemento. Esto puede hacer que la navegación sea más eficiente para usuarios que solo usan el teclado. HTML5 permite que este atributo se use en cualquier elemento, pero es particularmente útil cuando se usa con los interactivos. Esto incluye enlaces, botones y controles de formulario. Aquí hay un ejemplo: <code>&lt;button accesskey=&quot;b&quot;&gt;Important Button&lt;/button&gt;</code> </section>

## Instructions
<section id="instructions"> Camper Cat desea que los enlaces que se encuentran alrededor de los dos títulos de los artículos del blog tengan atajos de teclado para que los usuarios de su sitio puedan navegar rápidamente a la historia completa. Agregue un atributo de <code>accesskey</code> a ambos enlaces y establezca el primero en &quot;g&quot; (para Garfield) y el segundo en &quot;c&quot; (para Chuck Norris). </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: El código debería añadir una <code>accesskey</code> atributo a la <code>a</code> etiqueta con el <code>id</code> de &quot;primera&quot;.
    testString: 'assert($("#first").attr("accesskey"), "Your code should add an <code>accesskey</code> attribute to the <code>a</code> tag with the <code>id</code> of "first".");'
  - text: El código debería añadir una <code>accesskey</code> atributo a la <code>a</code> etiqueta con el <code>id</code> de &quot;segunda&quot;.
    testString: 'assert($("#second").attr("accesskey"), "Your code should add an <code>accesskey</code> attribute to the <code>a</code> tag with the <code>id</code> of "second".");'
  - text: El código debe establecer la <code>accesskey</code> atributo en el <code>a</code> etiqueta con el <code>id</code> de &quot;primera&quot; a &quot;g&quot;. Tenga en cuenta que el caso importa.
    testString: 'assert($("#first").attr("accesskey") == "g", "Your code should set the <code>accesskey</code> attribute on the <code>a</code> tag with the <code>id</code> of "first" to "g". Note that case matters.");'
  - text: El código debe establecer la <code>accesskey</code> atributo en el <code>a</code> etiqueta con el <code>id</code> de &quot;segunda&quot; a &quot;c&quot;. Tenga en cuenta que el caso importa.
    testString: 'assert($("#second").attr("accesskey") == "c", "Your code should set the <code>accesskey</code> attribute on the <code>a</code> tag with the <code>id</code> of "second" to "c". Note that case matters.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='html-seed'>

```html
<body>
  <header>
    <h1>Deep Thoughts with Master Camper Cat</h1>
  </header>
  <article>


    <h2><a id="first" href="">The Garfield Files: Lasagna as Training Fuel?</a></h2>


    <p>The internet is littered with varying opinions on nutritional paradigms, from catnip paleo to hairball cleanses. But let's turn our attention to an often overlooked fitness fuel, and examine the protein-carb-NOM trifecta that is lasagna...</p>
  </article>
  <article>


    <h2><a id="second" href="">Is Chuck Norris a Cat Person?</a></h2>


    <p>Chuck Norris is widely regarded as the premier martial artist on the planet, and it's a complete coincidence anyone who disagrees with this fact mysteriously disappears soon after. But the real question is, is he a cat person?...</p>
  </article>
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
