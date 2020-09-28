---
id: 587d7790367417b2b2512aaf
title: Make Links Navigatable with HTML Access Keys
challengeType: 0
videoUrl: ''
localeTitle: Haga que los enlaces sean navegables con claves de acceso HTML
---

## Description
<section id="description"> HTML ofrece el atributo <code>accesskey</code> para especificar una tecla de acceso directo para activar o traer el foco a un elemento. Esto puede hacer que la navegación sea más eficiente para usuarios que solo usan el teclado. HTML5 permite que este atributo se use en cualquier elemento, pero es particularmente útil cuando se usa con los interactivos. Esto incluye enlaces, botones y controles de formulario. Aquí hay un ejemplo: <code>&lt;button accesskey=&quot;b&quot;&gt;Important Button&lt;/button&gt;</code> </section>

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


    <h2><a id="first" href="">Los Archivos Garfield: ¿Lasagna como Combustible de Entrenamiento?</a></h2>


    <p>Internet está repleto de diversas opiniones sobre los paradigmas nutricionales, desde catnip paleo hasta limpieza de bolas de pelos. Pero pongamos ahora nuestra atención en un combustible del bienestar físico muchas veces olvidado, y examinemos la trifecta proteína-carbohidrato-NOM que es la lasagna...</p>
  </article>
  <article>


    <h2><a id="second" href="">Es Chuck Norris un Hombre Gato?</a></h2>


    <p>Chuck Norris es ampliamente reconocido como el primer artista marcial del planeta, y es una completa coincidencia que todo aquel que no opina lo mismo desaparece misteriosamente poco tiempo después. Pero la verdadera pregunta es: es un hombre gato?...</p>
  </article>
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
