---
id: bad87fee1348bd9aede08830
title: Create a Form Element
challengeType: 0
videoUrl: ''
localeTitle: Crear un elemento de formulario
---

## Description
<section id="description"> Puede crear formularios web que envíen datos reales a un servidor usando nada más que HTML. Puedes hacerlo especificando un action en tu elemento <code>form</code> . Por ejemplo: <code>&lt;form action=&quot;/url-where-you-want-to-submit-form-data&quot;&gt;&lt;/form&gt;</code> </section>

## Instructions
<section id="instructions"> Anida el campo de texto dentro de un elemento <code>form</code> y agrega el atributo <code>action=&quot;https://freecatphotoapp.com/submit-cat-photo&quot;</code> al elemento formulario. </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: Anida el elemento de entrada de texto dentro de un elemento de <code>form</code> .
    testString: 'assert($("form") && $("form").children("input") && $("form").children("input").length > 0, "Nest your text input element within a <code>form</code> element.");'
  - text: Asegúrese de que su <code>form</code> tenga un atributo <code>action</code> y cuyo valor sea <code>https://freecatphotoapp.com/submit-cat-photo</code>
    testString: 'assert($("form").attr("action") === "https://freecatphotoapp.com/submit-cat-photo", "Make sure your <code>form</code> has an <code>action</code> attribute which is set to <code>https://freecatphotoapp.com/submit-cat-photo</code>");'
  - text: Asegúrese de que su elemento <code>form</code> tenga las etiquetas de apertura y cierre bien formadas.
    testString: 'assert(code.match(/<\/form>/g) && code.match(/<form [^<]*>/g) && code.match(/<\/form>/g).length === code.match(/<form [^<]*>/g).length, "Make sure your <code>form</code> element has well-formed open and close tags.");'

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
  <input type="text" placeholder="cat photo URL">
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
