---
id: bad87fee1348bd9aede08835
title: Nest Many Elements within a Single div Element
challengeType: 0
videoUrl: ''
localeTitle: Anidar muchos elementos dentro de un único elemento div
---

## Description
<section id="description"> El elemento <code>div</code> , también conocido como elemento de división, es un contenedor de propósito general para otros elementos. El elemento <code>div</code> es probablemente el elemento HTML más utilizado de todos. Al igual que cualquier otro elemento que no se cierre automáticamente, puede abrir un elemento <code>div</code> con <code>&lt;div&gt;</code> y cerrarlo en otra línea con <code>&lt;/div&gt;</code> . </section>

## Instructions
<section id="instructions"> Anida las listas de &quot;Cosas que los gatos aman&quot; y &quot;Cosas que los gatos odian&quot;, todo dentro de un único elemento <code>div</code> . Sugerencia: intente colocar la etiqueta <code>div</code> apertura sobre el elemento <code>p</code> &quot;Things cats love&quot; y la etiqueta <code>div</code> cierre después de la etiqueta <code>ol</code> cierre para que ambas listas estén dentro de una <code>div</code> . </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: Anida tus elementos <code>p</code> dentro de tu elemento <code>div</code> .
    testString: 'assert($("div").children("p").length > 1, "Nest your <code>p</code> elements inside your <code>div</code> element.");'
  - text: Anida tu elemento <code>ul</code> dentro de tu elemento <code>div</code> .
    testString: 'assert($("div").children("ul").length > 0, "Nest your <code>ul</code> element inside your <code>div</code> element.");'
  - text: Anida tu elemento <code>ol</code> dentro de tu elemento <code>div</code> .
    testString: 'assert($("div").children("ol").length > 0, "Nest your <code>ol</code> element inside your <code>div</code> element.");'
  - text: Asegúrese de que su elemento <code>div</code> tiene una etiqueta de cierre.
    testString: 'assert(code.match(/<\/div>/g) && code.match(/<\/div>/g).length === code.match(/<div>/g).length, "Make sure your <code>div</code> element has a closing tag.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='html-seed'>

```html
<h2>CatPhotoApp</h2>
<main>
  <p>Click here to view more <a href="#">cat photos</a>.</p>

  <a href="#"><img src="https://bit.ly/fcc-relaxing-cat" alt="A cute orange cat lying on its back."></a>

  <p>Things cats love:</p>
  <ul>
    <li>cat nip</li>
    <li>laser pointers</li>
    <li>lasagna</li>
  </ul>
  <p>Top 3 things cats hate:</p>
  <ol>
    <li>flea treatment</li>
    <li>thunder</li>
    <li>other cats</li>
  </ol>

  <form action="https://freecatphotoapp.com/submit-cat-photo">
    <label><input type="radio" name="indoor-outdoor" checked> Indoor</label>
    <label><input type="radio" name="indoor-outdoor"> Outdoor</label><br>
    <label><input type="checkbox" name="personality" checked> Loving</label>
    <label><input type="checkbox" name="personality"> Lazy</label>
    <label><input type="checkbox" name="personality"> Energetic</label><br>
    <input type="text" placeholder="cat photo URL" required>
    <button type="submit">Submit</button>
  </form>
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
