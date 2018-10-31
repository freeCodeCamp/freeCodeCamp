---
id: 587d778f367417b2b2512aae
title: Give Links Meaning by Using Descriptive Link Text
challengeType: 0
videoUrl: ''
localeTitle: Dar el significado de enlaces mediante el uso de texto de enlace descriptivo
---

## Description
<section id="description"> Los usuarios de lectores de pantalla tienen diferentes opciones para el tipo de contenido que lee su dispositivo. Esto incluye saltar a (o sobre) elementos de hito, saltar al contenido principal u obtener un resumen de la página de los encabezados. Otra opción es escuchar solo los enlaces disponibles en una página. Los lectores de pantalla hacen esto leyendo el texto del enlace, o lo que hay entre las etiquetas ancla ( <code>a</code> ). Tener una lista de enlaces &quot;haga clic aquí&quot; o &quot;leer más&quot; no es útil. En su lugar, debe utilizar el texto breve pero descriptiva dentro de las <code>a</code> etiquetas para proporcionar más significado para estos usuarios. </section>

## Instructions
<section id="instructions"> El texto del enlace que está utilizando Camper Cat no es muy descriptivo sin el contexto que lo rodea. Mueva las etiquetas de anclaje ( <code>a</code> ) para que envuelvan el texto &quot;información sobre baterías&quot; en lugar de &quot;Haga clic aquí&quot;. </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: El código debe mover el ancla <code>a</code> las etiquetas de todo las palabras &quot;Haga clic aquí&quot; para envolver alrededor de las palabras &quot;información sobre las baterías&quot;.
    testString: 'assert($("a").text().match(/^(information about batteries)$/g), "Your code should move the anchor <code>a</code> tags from around the words "Click here" to wrap around the words "information about batteries".");'
  - text: Asegúrese de que su <code>a</code> elemento tiene una etiqueta de cierre.
    testString: 'assert(code.match(/<\/a>/g) && code.match(/<\/a>/g).length === code.match(/<a href=(""|"")>/g).length, "Make sure your <code>a</code> element has a closing tag.");'

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
    <h2>Defeating your Foe: the Red Dot is Ours!</h2>
    <p>Felines the world over have been waging war on the most persistent of foes. This red nemesis combines both cunning stealth and lightening speed. But chin up, fellow fighters, our time for victory may soon be near. <a href="">Click here</a> for information about batteries</p>
  </article>
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
