---
id: 587d7791367417b2b2512ab4
title: Adjust the Width of an Element Using the width Property
challengeType: 0
videoUrl: ''
localeTitle: Ajustar a largura de um elemento usando a propriedade width
---

## Description
<section id="description"> Você pode especificar a largura de um elemento usando a propriedade <code>width</code> em CSS. Os valores podem ser dados em unidades de tamanho relativo (como em), unidades de tamanho absoluto (como px) ou como uma porcentagem de seu elemento pai contendo. Veja um exemplo que altera a largura de uma imagem para 220px: <blockquote> img { <br> width: 220px; <br> } </blockquote></section>

## Instructions
<section id="instructions"> Adicione uma propriedade <code>width</code> ao cartão inteiro e defina-o para um valor absoluto de 245px. Use a classe <code>fullCard</code> para selecionar o elemento. </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: Seu código deve alterar a propriedade <code>width</code> do cartão para 245 pixels usando o seletor de classe <code>fullCard</code> .
    testString: 'assert(code.match(/.fullCard\s*{[\s\S][^}]*\n*^\s*width\s*:\s*245px\s*;/gm), "Your code should change the <code>width</code> property of the card to 245 pixels by using the <code>fullCard</code> class selector.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='html-seed'>

```html
<style>
  h4 {
    text-align: center;
  }
  p {
    text-align: justify;
  }
  .links {
    margin-right: 20px;
    text-align: left;
  }
  .fullCard {

    border: 1px solid #ccc;
    border-radius: 5px;
    margin: 10px 5px;
    padding: 4px;
  }
  .cardContent {
    padding: 10px;
  }
</style>
<div class="fullCard">
  <div class="cardContent">
    <div class="cardText">
      <h4>Google</h4>
      <p>Google was founded by Larry Page and Sergey Brin while they were Ph.D. students at Stanford University.</p>
    </div>
    <div class="cardLinks">
      <a href="https://en.wikipedia.org/wiki/Larry_Page" target="_blank" class="links">Larry Page</a>
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
