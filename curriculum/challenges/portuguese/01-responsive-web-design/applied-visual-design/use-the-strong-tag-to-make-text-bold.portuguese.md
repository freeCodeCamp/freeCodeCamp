---
id: 587d781a367417b2b2512ab7
title: Use the strong Tag to Make Text Bold
challengeType: 0
videoUrl: ''
localeTitle: Use a tag forte para tornar o texto em negrito
---

## Description
<section id="description"> Para tornar o texto em negrito, você pode usar a tag <code>strong</code> . Isso costuma ser usado para chamar a atenção para o texto e simbolizar que é importante. Com a tag <code>strong</code> , o navegador aplica o CSS de <code>font-weight: bold;</code> para o elemento. </section>

## Instructions
<section id="instructions"> Embrulhe uma tag <code>strong</code> torno da &quot;Universidade de Stanford&quot; dentro da tag <code>p</code> . </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: Seu código deve adicionar uma tag <code>strong</code> à marcação.
    testString: 'assert($("strong").length == 1, "Your code should add one <code>strong</code> tag to the markup.");'
  - text: A tag <code>strong</code> deve estar dentro da tag <code>p</code> .
    testString: 'assert($("p").children("strong").length == 1, "The <code>strong</code> tag should be inside the <code>p</code> tag.");'
  - text: A etiqueta <code>strong</code> deve envolver as palavras &quot;Universidade de Stanford&quot;.
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
