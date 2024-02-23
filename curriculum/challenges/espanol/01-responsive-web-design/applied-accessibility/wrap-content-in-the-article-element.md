---
id: 587d774e367417b2b2512aa0
title: Envuelve el contenido en el elemento article
challengeType: 0
videoUrl: 'https://scrimba.com/c/cPp79S3'
forumTopicId: 301029
dashedName: wrap-content-in-the-article-element
---

# --description--

`article` es otro de los nuevos elementos de HTML5 que añaden significado semántico a su marcado. `article` es un elemento seccionador y se utiliza para envolver contenido independiente y autónomo. La etiqueta funciona bien con entradas de blog, publicaciones en el foro o artículos de noticias.

Determinar si el contenido puede ser independiente suele ser una cuestión de criterio, pero puedes hacer un par de pruebas simples. Pregúntate, si elimino todo el contexto circundante, ¿ese contenido aún tendría sentido? Del mismo modo, para el texto, ¿se mantendría el contenido si estuviera en una fuente RSS?

Recuerda que las personas que usan tecnologías de asistencia dependen de un lenguaje de marcado organizado y semánticamente significativo para comprender mejor su trabajo.

**Nota:** El elemento `section` también es nuevo HTML5, y tiene significado semántico ligeramente diferente al de `article`. Un `article` es para contenido independiente, y una `section` es para agrupar contenido relacionado temáticamente. Se pueden usar uno dentro del otro, según sea necesario. Por ejemplo, si un libro es el `article`, entonces cada capítulo es una `section`. Cuando no haya relación entre grupos de contenido, usa un `div`.

`<div>` - grupos de contenido `<section>` - grupos de contenido relacionado `<article>` - grupos independientes, contenido autónomo

# --instructions--

Camper Cat usó etiquetas `article` para envolver las publicaciones en la página de su blog, pero olvido usarlas en la parte superior. Cambia la etiqueta `div` para usar una etiqueta `article`.

# --hints--

Tu código debe tener tres etiquetas `article`.

```js
assert($('article').length == 3);
```

Tu código no debe tener ninguna etiqueta `div`.

```js
assert($('div').length == 0);
```

# --seed--

## --seed-contents--

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
    <p>Felines the world over have been waging war on the most persistent of foes. This red nemesis combines both cunning stealth and lightning speed. But chin up, fellow fighters, our time for victory may soon be near...</p>
  </article>

  <img src="samuraiSwords.jpeg" alt="">

  <article>
    <h2>Is Chuck Norris a Cat Person?</h2>
    <p>Chuck Norris is widely regarded as the premier martial artist on the planet, and it's a complete coincidence that anyone who disagrees with this fact mysteriously disappears soon after. But the real question is, is he a cat person?...</p>
  </article>
</main>
```

# --solutions--

```html
<h1>Deep Thoughts with Master Camper Cat</h1>
<main>
  <article>
    <h2>The Garfield Files: Lasagna as Training Fuel?</h2>
    <p>The internet is littered with varying opinions on nutritional paradigms, from catnip paleo to hairball cleanses. But let's turn our attention to an often overlooked fitness fuel, and examine the protein-carb-NOM trifecta that is lasagna...</p>
  </article>

  <img src="samuraiSwords.jpeg" alt="">

  <article>
    <h2>Defeating your Foe: the Red Dot is Ours!</h2>
    <p>Felines the world over have been waging war on the most persistent of foes. This red nemesis combines both cunning stealth and lightning speed. But chin up, fellow fighters, our time for victory may soon be near...</p>
  </article>

  <img src="samuraiSwords.jpeg" alt="">

  <article>
    <h2>Is Chuck Norris a Cat Person?</h2>
    <p>Chuck Norris is widely regarded as the premier martial artist on the planet, and it's a complete coincidence that anyone who disagrees with this fact mysteriously disappears soon after. But the real question is, is he a cat person?...</p>
  </article>
</main>
```
