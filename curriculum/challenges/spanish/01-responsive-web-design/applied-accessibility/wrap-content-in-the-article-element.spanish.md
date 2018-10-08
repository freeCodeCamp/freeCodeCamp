---
id: 587d774e367417b2b2512aa0
title: Wrap Content in the article Element
localeTitle: Envolver contenido en el artículo Elemento.
challengeType: 0
videoUrl: ''
---

## Description
<section id='description'> 
<code>article</code> es otro de los nuevos elementos HTML5 que agrega un significado semántico a su marca. <code>Article</code> es un elemento de sección y se utiliza para envolver contenido independiente y autónomo. La etiqueta funciona bien con entradas de blog, publicaciones en foros o artículos de noticias. 
Determinar si el contenido puede ser independiente por lo general es una decisión de juicio, pero hay un par de pruebas simples que puede usar. Pregúntese si eliminó todo el contexto circundante, ¿ese contenido aún tendría sentido? De manera similar, para el texto, ¿se mantendría el contenido si estuviera en una fuente RSS? 
Recuerde que las personas que usan tecnologías de asistencia confían en un marcado organizado semánticamente significativo para comprender mejor su trabajo. 
<strong>Nota sobre la <code>section</code> y <code>div</code></strong> <br> El elemento de <code>section</code> también es nuevo con HTML5 y tiene un significado semántico ligeramente diferente al <code>article</code> . Un <code>article</code> es para contenido independiente, y una <code>section</code> es para agrupar contenido relacionado temáticamente. Se pueden usar uno dentro del otro, según sea necesario. Por ejemplo, si un libro es el <code>article</code> , entonces cada capítulo es una <code>section</code> . Cuando no haya una relación entre grupos de contenido, use un <code>div</code> . 
<blockquote>&lt;div&gt; - groups content<br>&lt;section&gt; - groups related content<br>&lt;article&gt; - groups independent, self-contained content<br></blockquote> 
</section>

## Instructions
<section id='instructions'> 
Camper Cat usó etiquetas de <code>article</code> para envolver las publicaciones en su página de blog, pero se olvidó de usarlas en la parte superior. Cambie la etiqueta <code>div</code> para usar una etiqueta de <code>article</code> lugar. 
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: Su código debe tener tres etiquetas de <code>article</code> .
    testString: 'assert($("article").length == 3, "Your code should have three <code>article</code> tags.");'
  - text: Su código no debe tener ninguna etiqueta <code>div</code> .
    testString: 'assert($("div").length == 0, "Your code should not have any <code>div</code> tags.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='html-seed'>

```html
<h1>Deep Thoughts with Master Camper Cat</h1>
<main>
  <div>
    <h2>The Garfield Files: Lasagna as Training Fuel?</h2>
    <p>The internet is littered with varying opinions on nutritional paradigms, from catnip paleo to hairball cleanses. But let's turn our attention to an often overlooked fitness fuel, and examine the protein-carb-NOM trifecta that is lasagna...</p>
  </div>

  <img src="samuraiSwords.jpeg" alt="">

  <article>
    <h2>Defeating your Foe: the Red Dot is Ours!</h2>
    <p>Felines the world over have been waging war on the most persistent of foes. This red nemesis combines both cunning stealth and lightening speed. But chin up, fellow fighters, our time for victory may soon be near...</p>
  </article>

  <img src="samuraiSwords.jpeg" alt="">

  <article>
    <h2>Is Chuck Norris a Cat Person?</h2>
    <p>Chuck Norris is widely regarded as the premier martial artist on the planet, and it's a complete coincidence anyone who disagrees with this fact mysteriously disappears soon after. But the real question is, is he a cat person?...</p>
  </article>
</main>
```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
