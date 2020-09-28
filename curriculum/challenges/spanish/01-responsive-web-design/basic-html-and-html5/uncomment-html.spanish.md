---
id: bad87fee1348bd9aedf08802
title: Uncomment HTML
challengeType: 0
videoUrl: ''
localeTitle: Descomentar HTML
---

## Description
<section id="description"> Comentar es una forma en que puede dejar comentarios para otros desarrolladores dentro de su código sin afectar el resultado resultante que se muestra al usuario final. Comentar también es una forma conveniente de desactivar el código sin tener que eliminarlo por completo. Los comentarios en HTML comienzan con <code>&lt;!--</code> , y terminan con <code>--&gt;</code> </section>

## Instructions
<section id="instructions"> Descomenta tus elementos <code>h1</code> , <code>h2</code> <code>p</code> . </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: Haga visible su elemento <code>h1</code> borrando las etiquetas de comentario.
    testString: 'assert($("h1").length > 0, "Make your <code>h1</code> element visible on your page by uncommenting it.");'
  - text: Haga visible su elemento <code>h2</code> borrando las etiquetas de comentario.
    testString: 'assert($("h2").length > 0, "Make your <code>h2</code> element visible on your page by uncommenting it.");'
  - text: Haga visible su elemento <code>p</code> borrando las etiquetas de comentario.
    testString: 'assert($("p").length > 0, "Make your <code>p</code> element visible on your page by uncommenting it.");'
  - text: 'Asegúrese de eliminar todas las etiquetas de comentarios finales, es decir, <code>--&gt;</code> .'
    testString: 'assert(!/[^fc]-->/gi.test(code.replace(/ *<!--[^fc]*\n/g,"")), "Be sure to delete all trailing comment tags&#44; i.e. <code>--&#62;</code>.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='html-seed'>

```html
<!--
<h1>Hello World</h1>

<h2>CatPhotoApp</h2>

<p>Kitty ipsum dolor sit amet, shed everywhere shed everywhere stretching attack your ankles chase the red dot, hairball run catnip eat the grass sniff.</p>
-->

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
