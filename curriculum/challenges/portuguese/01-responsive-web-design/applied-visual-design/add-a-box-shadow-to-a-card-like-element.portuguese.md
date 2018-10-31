---
id: 587d781b367417b2b2512abe
title: Add a box-shadow to a Card-like Element
challengeType: 0
videoUrl: ''
localeTitle: Adicionar uma sombra de caixa a um elemento semelhante ao cartão
---

## Description
<section id="description"> A propriedade <code>box-shadow</code> aplica uma ou mais sombras a um elemento. A propriedade <code>box-shadow</code> toma valores para <code>offset-x</code> (até onde empurrar a sombra horizontalmente a partir do elemento), <code>offset-y</code> (até onde empurrar a sombra verticalmente a partir do elemento), <code>blur-radius</code> , <code>spread-radius</code> e uma cor valor, nessa ordem. Os valores de <code>spread-radius</code> e <code>blur-radius</code> <code>spread-radius</code> são opcionais. Aqui está um exemplo do CSS para criar várias sombras com algum desfoque, em cores pretas quase transparentes: <blockquote> box-shadow: 0 10px 20px rgba (0,0,0,0.19), 0 6px 6px rgba (0,0,0,0.23); </blockquote></section>

## Instructions
<section id="instructions"> O elemento agora tem um id de <code>thumbnail</code> . Com esse seletor, use os valores CSS acima para colocar uma <code>box-shadow</code> no cartão. </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: Seu código deve adicionar uma propriedade de <code>box-shadow</code> para o ID da <code>thumbnail</code> .
    testString: 'assert(code.match(/#thumbnail\s*?{\s*?box-shadow/g), "Your code should add a <code>box-shadow</code> property for the <code>thumbnail</code> id.");'
  - text: Você deve usar o CSS fornecido para o valor de <code>box-shadow</code> da <code>box-shadow</code> .
    testString: 'assert(code.match(/box-shadow:\s*?0\s+?10px\s+?20px\s+?rgba\(\s*?0\s*?,\s*?0\s*?,\s*?0\s*?,\s*?0?\.19\),\s*?0\s+?6px\s+?6px\s+?rgba\(\s*?0\s*?,\s*?0\s*?,\s*?0\s*?,\s*?0?\.23\)/gi), "You should use the given CSS for the <code>box-shadow</code> value.");'

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
    font-size: 27px;
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
<div class="fullCard" id="thumbnail">
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
