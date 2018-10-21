---
id: 587d778c367417b2b2512aa9
title: Standardize Times with the HTML5 datetime Attribute
challengeType: 0
videoUrl: ''
localeTitle: Estandarizar los tiempos con el atributo datetime HTML5
---

## Description
undefined

## Instructions
<section id="instructions"> ¡Los resultados de la encuesta de Mortal Kombat de Camper Cat están aquí! Envuelva una etiqueta de <code>time</code> alrededor del texto &quot;Jueves, 15 de septiembre &lt;sup&gt; th &lt;/sup&gt;&quot; y agregue un atributo de <code>datetime</code> con el valor &quot;2016-09-15&quot;. </section>

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
    <h1>Tournaments</h1>
  </header>
  <article>
    <h2>Mortal Kombat Tournament Survey Results</h2>

    <!-- Add your code below this line -->

    <p>Thank you to everyone for responding to Master Camper Cat's survey. The best day to host the vaunted Mortal Kombat tournament is Thursday, September 15<sup>th</sup>. May the best ninja win!</p>

    <!-- Add your code above this line -->

    <section>
      <h3>Comments:</h3>
      <article>
        <p>Posted by: Sub-Zero on <time datetime="2016-08-13T20:01Z">August 13<sup>th</sup></time></p>
        <p>Johnny Cage better be there, I'll finish him!</p>
      </article>
      <article>
        <p>Posted by: Doge on <time datetime="2016-08-15T08:12Z">August 15<sup>th</sup></time></p>
        <p>Wow, much combat, so mortal.</p>
      </article>
      <article>
        <p>Posted by: The Grim Reaper on <time datetime="2016-08-16T00:00Z">August 16<sup>th</sup></time></p>
        <p>Looks like I'll be busy that day.</p>
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
// solution required
```
</section>
