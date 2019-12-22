---
id: 587d774e367417b2b2512aa0
title: Wrap Content in the article Element
challengeType: 0
videoUrl: ''
localeTitle: Envolver contenido en el elemento article.
---

## Description
<section id="description"> <code>article</code> es otro de los nuevos elementos HTML5 que agrega un significado semántico a su marca. <code>Article</code> es un elemento de sección y se utiliza para envolver contenido independiente y autónomo. La etiqueta funciona bien con entradas de blog, publicaciones en foros o artículos de noticias. Determinar si el contenido puede ser independiente es generalmente un cuestión de juicio personal, pero hay un par de pruebas simples que puede usar. Pregúntese si eliminó todo el contexto circundante, ¿ese contenido aún tendría sentido? De manera similar, para el texto, ¿se mantendría el contenido si estuviera en una fuente RSS? Recuerde que las personas que usan tecnologías de asistencia confían en un marcado organizado y semánticamente significativo para comprender mejor su trabajo. <strong>Nota sobre la <code>section</code> y <code>div</code></strong> <br> El elemento de <code>section</code> también es nuevo con HTML5 y tiene un significado semántico ligeramente diferente al <code>article</code> . Un <code>article</code> es para contenido independiente, y una <code>section</code> es para agrupar contenido relacionado temáticamente. Se pueden usar uno dentro del otro, según sea necesario. Por ejemplo, si un libro es el <code>article</code> , entonces cada capítulo es una <code>section</code> . Cuando no haya una relación entre grupos de contenido, use un <code>div</code> . <blockquote> &lt;div&gt; - agrupa contenido <br> &lt;sección&gt; - agrupa contenido relacionado <br> &lt;article&gt; - agrupa contenido independiente, contenido en sí mismo <br></blockquote></section>

## Instructions
<section id="instructions"> Camper Cat usó etiquetas de <code>article</code> para envolver las publicaciones en su página de blog, pero se olvidó de usarlas en la parte superior. Cambie la etiqueta <code>div</code> para usar una etiqueta de <code>article</code> lugar. </section>

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
<h1>Pensamientos Profundos con el Maestro Camper Cat</h1>
<main>
  <div>
    <h2>Los Archivos Garfield: ¿Lasagna como Combustible de Entrenamiento?</h2>
    <p>Internet está repleto de diversas opiniones sobre los paradigmas nutricionales, desde catnip paleo hasta limpieza de bolas de pelos. Pero pongamos ahora nuestra atención en un combustible del bienestar físico muchas veces olvidado, y examinemos la trifecta proteína-carbohidrato-NOM que es la lasagna... </p>
  </div>

  <img src="samuraiSwords.jpeg" alt="">

  <article>
    <h2>Venciendo a tu Rival: el Punto Rojo es Nuestro!</h2>
    <p>Felinos de todo el mundo vienen dándole batalla a uno de los rivales más persistentes. Este némesis colorado combina un sigilo ingenioso con la velocidad del rayo. Pero anímense, compañeros luchadores, nuestra victoria está cerca...</p>
  </article>
  
  <img src="samuraiSwords.jpeg" alt="">

  <article>
    <h2>Es Chuck Norris un Hombre Gato?</h2>
    <p>Chuck Norris es ampliamente reconocido como el primer artista marcial del planeta, y es una completa coincidencia que todo aquel que no opina lo mismo desaparece misteriosamente poco tiempo después. Pero la verdadera pregunta es: es un hombre gato?...</p>
  </article>
</main>

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solución requerida
```

</section>
