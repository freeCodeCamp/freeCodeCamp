---
id: 587d778c367417b2b2512aa9
title: Standardize Times with the HTML5 datetime Attribute
challengeType: 0
videoUrl: ''
localeTitle: Estandarizar los tiempos con el atributo datetime HTML5
---

## Description
<section id='description'>
Continuando con el tema de la fecha, HTML5 también introdujo el elemento <code>time</code> junto con un atributo <code>datetime</code> para estandarizar el tiempo. <code>time</code> es un elemento <code>inline</code> que puede contener una fecha o una hora en la página web. El atributo <code>datetime</code> contiene un formato válido de fecha. Este es el valor al que se accede a través de dispositivos de asistencia. Ayuda a evitar cualquier confusión al mantener una versión estandarizada del tiempo, incluso si en el texto está escrito de manera informal o coloquial. Aquí hay un ejemplo:
<code>&lt;p&gt;El Maestro Camper Cat presentó la pelea en la jaula entre Goro y Scorpion &lt;time datetime=&quot;2013-02-13&quot;&gt;el miércoles pasado&lt;/time&gt;, que terminó en un empate.&lt;/p&gt;</code>
</section>

## Instructions
<section id="instructions"> ¡Los resultados de la encuesta de Mortal Kombat realizada por Camper Cat están aquí! Envuelve con una etiqueta de <code>time</code> el texto &quot;Jueves, 15 de septiembre &lt;sup&gt; th &lt;/sup&gt;&quot; y agrega un atributo de <code>datetime</code> con el valor &quot;2016-09-15&quot;. </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: Sus etiquetas de <code>time</code> deben rodear el texto &quot;Jueves 15 de septiembre &lt;sup&gt; th &lt;/sup&gt;&quot;.
    testString: 'assert($("time").text().match(/Thursday, September 15th/g), "Your <code>time</code> tags should wrap around the text "Thursday, September 15&lt;sup&gt;th&lt;/sup&gt;".");'
  - text: Su etiqueta de <code>time</code> debe tener un atributo de <code>datetime</code> y <code>datetime</code> que no esté vacío.
    testString: 'assert($("time").attr("datetime"), "Your <code>time</code> tag should have a <code>datetime</code> attribute that is not empty.");'
  - text: Su atributo de <code>datetime</code> y <code>datetime</code> debe establecerse en un valor de 2016-09-15.
    testString: 'assert($("time").attr("datetime") === "2016-09-15", "Your <code>datetime</code> attribute should be set to a value of 2016-09-15.");'
  - text: Asegúrese de que su elemento de <code>time</code> tenga una etiqueta de cierre.
    testString: 'assert(code.match(/<\/time>/g) && code.match(/<\/time>/g).length === 4, "Make sure your <code>time</code> element has a closing tag.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='html-seed'>

```html
<body>
  <header>
    <h1>Torneos</h1>
  </header>
  <article>
    <h2>Resultados de la Encuestra del Torneo de Mortal Kombat</h2>

    <!-- Agrega tu código debajo de esta línea -->

    <p>Gracias a todos por participar de la encuesta del Maestro Camper Cat. El mejor día para llevar a cabo el tan espero torneo de Mortal Kombat es el jueves 15 de septiembre. ¡Qué gane el mejor ninja! </p>

    <!-- Agrega tu código por encima de esta línea -->

    <section>
      <h3>Comentarios:</h3>
      <article>
        <p>Posteado por: Sub-Zero el <time datetime="2016-08-13T20:01Z">13 de agosto</time></p>
        <p>Johnny Cage más te vale que estés allí, lo destruiré!</p>
      </article>
      <article>
        <p>Posteado por: Doge el <time datetime="2016-08-15T08:12Z">15 de agosto</time></p>
        <p>Wow, much combate, so mortal.</p>
      </article>
      <article>
        <p>Posteado por: la Parca el <time datetime="2016-08-16T00:00Z">16 de agosto</time></p>
        <p>Parece que estaré bastante ocupada ese día.</p>
      </article>
    </section>
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
