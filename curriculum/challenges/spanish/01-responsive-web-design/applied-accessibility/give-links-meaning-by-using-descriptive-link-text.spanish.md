---
id: 587d778f367417b2b2512aae
title: Give Links Meaning by Using Descriptive Link Text
challengeType: 0
videoUrl: ''
localeTitle: Darle Significado a los Enlaces Usando Texto Descriptivo
---

## Descripción
<section id="description"> Los usuarios de lectores de pantalla tienen diferentes opciones para el tipo de contenido que lee su dispositivo. Esto incluye saltar a (o sobre) elementos de hito, saltar al contenido principal u obtener un resumen de la página de los encabezados. Otra opción es solo escuchar los enlaces disponibles en una página. Los lectores de pantalla hacen esto leyendo el texto del enlace, o lo que hay entre las etiquetas ancla ( <code>a</code> ). Tener una lista de enlaces de &quot;haga clic aquí&quot; o &quot;leer más&quot; no es útil. En su lugar, debemos utilizar un texto breve pero descriptivo dentro de las etiquetas <code>a</code> para proporcionar más contexto a estos usuarios. </section>

## Instrucciones
<section id="instructions"> El texto del enlace que está utilizando Camper Cat no es muy descriptivo sin el contexto que lo rodea. Mueve las etiquetas de anclaje ( <code>a</code> ) para que envuelvan el texto &quot;información sobre baterías&quot; en lugar de &quot;Haga clic aquí&quot;. </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: Tu código debe mover las etiquetas ancla <code>a</code> de las palabras &quot;Clic Aquí&quot; para envolver las palabras &quot;para información sobre baterías&quot;.
    testString: 'assert($("a").text().match(/^(information about batteries)$/g), "Your code should move the anchor <code>a</code> tags from around the words "Click here" to wrap around the words "information about batteries".");'
  - text: Asegúrate de que el elemento <code>a</code> tenga una etiqueta de cierre.
    testString: 'assert(code.match(/<\/a>/g) && code.match(/<\/a>/g).length === code.match(/<a href=(""|"")>/g).length, "Make sure your <code>a</code> element has a closing tag.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='html-seed'>

```html
<body>
  <header>
    <h1>Pensamientos Profundos con Master Camper Cat</h1>
  </header>
  <article>
    <h2>Derrotando a tu Enemigo: el Punto Rojo es Nuestro!</h2>
    <p>Felinos en todo el mundo han estado librando una guerra con el más persistente de los enemigos. Este nemesis rojo combina su astuto sigilo y su velocidad de rayo. Pero animos, compañeros de bbatalla, nuestro tiempo de vistoria está cerca. <a href="">Clic Aquí</a> para información sobre baterías</p>
  </article>
</body>

```

</div>



</section>

## Solución
<section id='solution'>

```js
// solución requerida
```

</section>
