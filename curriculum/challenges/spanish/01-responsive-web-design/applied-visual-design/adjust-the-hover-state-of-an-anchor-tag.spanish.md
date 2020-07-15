---
id: 587d781d367417b2b2512ac8
title: Adjust the Hover State of an Anchor Tag
challengeType: 0
videoUrl: ''
localeTitle: Ajustar el estado de desplazamiento de una etiqueta de anclaje
---

## Description
<section id="description"> Este desafío tocará el uso de las pseudo-clases. Una pseudo-clase es una palabra clave que se puede agregar a los selectores para seleccionar un estado específico de dicho elemento. Por ejemplo, el estilo de una etiqueta de enlace (anchor tag) se puede cambiar cuando el elemento interactúa con un cursor (hover) mediante el selector de pseudo-clase <code>:hover</code> . Aquí está el CSS para cambiar el <code>color</code> de la etiqueta de enlace (anchor tag) a rojo cada vez que pase el cursor por encima: <blockquote> a:hover { <br> color: red; <br> } </blockquote></section>

## Instructions
<section id="instructions"> El editor de código tiene una regla CSS para dar color nego a todas las etiquetas <code>a</code>. Añade una regla de modo que cuando el usuario desplace el cursor sobre la etiqueta <code>a</code> , el <code>color</code> sea azul. </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: 'El <code>color</code> etiqueta de anclaje debe permanecer en negro, solo agregue reglas CSS para el estado <code>:hover</code> .'
    testString: 'assert($("a").css("color") == "rgb(0, 0, 0)", "The anchor tag <code>color</code> should remain black, only add CSS rules for the <code>:hover</code> state.");'
  - text: La etiqueta de anclaje debe tener un <code>color</code> azul en el hover.
    testString: 'assert(code.match(/a:hover\s*?{\s*?color:\s*?blue;\s*?}/gi), "The anchor tag should have a <code>color</code> of blue on hover.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='html-seed'>

```html
<style>
  a {
    color: #000;
  }



</style>
<a href="https://freecatphotoapp.com/" target="_blank">CatPhotoApp</a>

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
