---
id: 587d781a367417b2b2512ab9
title: Use the em Tag to Italicize Text
challengeType: 0
videoUrl: ''
localeTitle: Use o tag em para colocar em itálico
---

## Description
<section id="description"> Para enfatizar o texto, você pode usar a tag <code>em</code> . Isso exibe o texto em itálico, pois o navegador aplica o CSS de <code>font-style: italic;</code> de <code>font-style: italic;</code> para o elemento. </section>

## Instructions
<section id="instructions"> Enrole uma tag <code>em</code> torno do conteúdo da tag de parágrafo para dar ênfase. </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: Seu código deve adicionar uma tag <code>em</code> para a marcação.
    testString: 'assert($("em").length == 1, "Your code should add an <code>em</code> tag to the markup.");'
  - text: A tag <code>em</code> deve envolver o conteúdo da tag <code>p</code> mas não a tag <code>p</code> si.
    testString: 'assert($("p").children().length == 1 && $("em").children().length == 2, "The <code>em</code> tag should wrap around the contents of the <code>p</code> tag but not the <code>p</code> tag itself.");'

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
      <p>Google was founded by Larry Page and Sergey Brin while they were <u>Ph.D. students</u> at <strong>Stanford University</strong>.</p>
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
