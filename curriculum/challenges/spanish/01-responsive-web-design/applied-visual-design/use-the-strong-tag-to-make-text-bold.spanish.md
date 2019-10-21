---
id: 587d781a367417b2b2512ab7
title: Use the strong Tag to Make Text Bold
challengeType: 0
videoUrl: ''
localeTitle: Utilice la etiqueta strong para hacer el texto en negrita
---

## Description
<section id="description"> Para poner el texto en negrita, puede utilizar la etiqueta <code>strong</code> . Esto se usa a menudo para llamar la atención sobre el texto y simbolizar que es importante. Con la etiqueta <code>strong</code> , el navegador aplica el CSS de <code>font-weight: bold;</code> al elemento. </section>

## Instructions
<section id="instructions"> Envuelva una etiqueta <code>strong</code> alrededor de &quot;Stanford University&quot; dentro de la etiqueta <code>p</code> . </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: Su código debe agregar una etiqueta <code>strong</code> a la marca.
    testString: 'assert($("strong").length == 1, "Your code should add one <code>strong</code> tag to the markup.");'
  - text: La etiqueta <code>strong</code> debe estar dentro de la etiqueta <code>p</code> .
    testString: 'assert($("p").children("strong").length == 1, "The <code>strong</code> tag should be inside the <code>p</code> tag.");'
  - text: La etiqueta <code>strong</code> debe envolver alrededor de las palabras &quot;Universidad de Stanford&quot;.
    testString: 'assert($("strong").text().match(/^Stanford University$/gi), "The <code>strong</code> tag should wrap around the words "Stanford University".");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='html-seed'>

```html
<style>
  h4 {
    text-align: center;
    height: 25px;
  }
  p {
    text-align: justify;
  }
  .links {
    text-align: left;
    color: black;
  }
  .fullCard {
    width: 245px;
    border: 1px solid #ccc;
    border-radius: 5px;
    margin: 10px 5px;
    padding: 4px;
  }
  .cardContent {
    padding: 10px;
  }
  .cardText {
    margin-bottom: 30px;
  }
</style>
<div class="fullCard">
  <div class="cardContent">
    <div class="cardText">
      <h4>Google</h4>
      <p>Google was founded by Larry Page and Sergey Brin while they were Ph.D. students at Stanford University.</p>
    </div>
    <div class="cardLinks">
      <a href="https://en.wikipedia.org/wiki/Larry_Page" target="_blank" class="links">Larry Page</a><br><br>
      <a href="https://en.wikipedia.org/wiki/Sergey_Brin" target="_blank" class="links">Sergey Brin</a>
    </div>
  </div>
</div>

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
