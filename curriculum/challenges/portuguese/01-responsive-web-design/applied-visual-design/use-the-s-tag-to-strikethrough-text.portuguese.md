---
id: 587d781b367417b2b2512aba
title: Use the s Tag to Strikethrough Text
challengeType: 0
videoUrl: ''
localeTitle: Use a tag s para rasurar texto
---

## Description
<section id="description"> Para raspar o texto, que é quando uma linha horizontal corta os caracteres, você pode usar a tag <code>s</code> . Isso mostra que uma seção do texto não é mais válida. Com a tag <code>s</code> , o navegador aplica o CSS da <code>text-decoration: line-through;</code> de <code>text-decoration: line-through;</code> para o elemento. </section>

## Instructions
<section id="instructions"> Envolva a tag <code>s</code> torno de &quot;Google&quot; dentro da tag <code>h4</code> e, em seguida, adicione a palavra Alphabet ao lado dela, que não deve ter a formatação strikethrough. </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: Seu código deve adicionar uma tag <code>s</code> à marcação.
    testString: 'assert($("s").length == 1, "Your code should add one <code>s</code> tag to the markup.");'
  - text: A tag <code>s</code> deve envolver o texto do Google na tag <code>h4</code> . Não deve conter a palavra Alfabeto.
    testString: 'assert($("s").text().match(/Google/gi) && !$("s").text().match(/Alphabet/gi), "A <code>s</code> tag should wrap around the Google text in the <code>h4</code> tag. It should not contain the word Alphabet.");'
  - text: 'Inclua a palavra Alfabeto na tag <code>h4</code> , sem formatação tachada.'
    testString: 'assert($("h4").html().match(/Alphabet/gi), "Include the word Alphabet in the <code>h4</code> tag, without strikethrough formatting.");'

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
      <p><em>Google was founded by Larry Page and Sergey Brin while they were <u>Ph.D. students</u> at <strong>Stanford University</strong>.</em></p>
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
