---
id: 587d781b367417b2b2512abd
title: Adjust the Size of a Header Versus a Paragraph Tag
challengeType: 0
videoUrl: ''
localeTitle: Ajustar o tamanho de um cabeçalho versus uma tag de parágrafo
---

## Description
<section id="description"> O tamanho da fonte das tags de cabeçalho ( <code>h1</code> a <code>h6</code> ) geralmente deve ser maior que o tamanho da fonte das tags de parágrafo. Isso torna mais fácil para o usuário entender visualmente o layout e o nível de importância de tudo na página. Você usa a propriedade <code>font-size</code> para ajustar o tamanho do texto em um elemento. </section>

## Instructions
<section id="instructions"> Para tornar o título significativamente maior que o parágrafo, altere o <code>font-size</code> da <code>font-size</code> da marca <code>h4</code> para 27 pixels. </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: Seu código deve adicionar uma propriedade de <code>font-size</code> ao elemento <code>h4</code> definido como 27 pixels.
    testString: 'assert($("h4").css("font-size") == "27px", "Your code should add a <code>font-size</code> property to the <code>h4</code> element set to 27 pixels.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='html-seed'>

```html
<style>
  h4 {
    text-align: center;
    background-color: rgba(45, 45, 45, 0.1);
    padding: 10px;

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
      <h4>Alphabet</h4>
      <hr>
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
