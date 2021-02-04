---
id: 587d774e367417b2b2512aa0
title: Envuelve el contenido en el elemento article
challengeType: 0
videoUrl: 'https://scrimba.com/c/cPp79S3'
forumTopicId: 301029
dashedName: wrap-content-in-the-article-element
---

# --description--

`article` es otro de los nuevos elementos HTML5 que agrega significado semántico a tu lenguaje de marcado. `article` es un elemento de seccionamiento, y se utiliza para envolver contenido independiente y autónomo. La etiqueta funciona bien con entradas de blog, publicaciones en el foro o artículos de noticias.

Determinar si el contenido puede estar solo suele ser una decisión complicada, pero hay un par de pruebas simples que puedes usar. Pregúntate, si elimino todo el contexto circundante, ¿ese contenido aún tendría sentido? Del mismo modo para el texto, ¿el contenido se mantendría si estuviera en una fuente RSS?

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
<h1>Pensamientos profundos con el Master Camper Cat</h1>
<main>
  <div>
    <h2>Los archivos de Garfield: ¿Lasaña como combustible de entrenamiento?</h2>
    <p>La Internet está plagada de opiniones variadas sobre paradigmas nutricionales, desde catnip paleo hasta limpiezas con bolas de pelo. Pero vamos a dirigir nuestra atención a un combustible de fitness a menudo pasado por alto, y examinar la proteina-carbohidratos-NOM trifecta que es la lasaña...</p>
  </div>

  <img src="samuraiSwords.jpeg" alt="">

  <article>
    <h2>Derrotando a tu enemigo: ¡el punto rojo es nuestro!</h2>
    <p>Los felinos de todo el mundo han estado librando una guerra contra los enemigos más persistentes. Este némesis rojo combina el sigilo astuto y la velocidad del rayo. Pero levanta la quijada, compañeros luchadores, nuestro tiempo para la victoria pronto estará cerca...</p>
  </article>

  <img src="samuraiSwords.jpeg" alt="">

  <article>
    <h2>¿A Chuck Norris le gustan los gatos?</h2>
    <p>Chuck Norris es ampliamente considerado como el principal artista marcial en el planeta, y es una completa coincidencia que cualquiera que no este de acuerdo con este hecho desaparece misteriosamente poco después. Pero la verdadera pregunta es, ¿le gustan los gatos?</p>
  </article>
</main>
```

# --solutions--

```html
<h1>Pensamientos profundos con el Master Camper Cat</h1>
<main>
  <article>
    <h2>Los archivos de Garfield: ¿Lasaña como combustible de entrenamiento?</h2>
    <p>La Internet está plagada de opiniones variadas sobre paradigmas nutricionales, desde catnip paleo hasta limpiezas con bolas de pelo. Pero vamos a dirigir nuestra atención a un combustible de fitness a menudo pasado por alto, y examinar la proteina-carbohidratos-NOM trifecta que es la lasaña...</p>
  </article>

  <img src="samuraiSwords.jpeg" alt="">

  <article>
    <h2>Derrotando a tu enemigo: ¡el punto rojo es nuestro!</h2>
    <p>Los felinos de todo el mundo han estado librando una guerra contra los enemigos más persistentes. This red nemesis combines both cunning stealth and lightning speed. But chin up, fellow fighters, our time for victory may soon be near...</p>
  </article>

  <img src="samuraiSwords.jpeg" alt="">

  <article>
    <h2>Is Chuck Norris a Cat Person?</h2>
    <p>Chuck Norris is widely regarded as the premier martial artist on the planet, and it's a complete coincidence anyone who disagrees with this fact mysteriously disappears soon after. But the real question is, is he a cat person?...</p>
  </article>
</main>
```
