---
id: 587d781b367417b2b2512abc
title: Adjust the background-color Property of Text
challengeType: 0
videoUrl: ''
localeTitle: Ajustar a propriedade de cor de fundo do texto
---

## Description
<section id="description"> Em vez de ajustar o fundo geral ou a cor do texto para tornar o primeiro plano facilmente legível, você pode adicionar uma <code>background-color</code> ao elemento que contém o texto que deseja enfatizar. Este desafio usa <code>rgba()</code> vez de códigos <code>hex</code> ou <code>rgb()</code> normal <code>rgb()</code> . <blockquote> rgba significa: <br> r = vermelho <br> g = verde <br> b = azul <br> a = alfa / nível de opacidade </blockquote> Os valores RGB podem variar de 0 a 255. O valor alfa pode variar de 1, que é totalmente opaco ou cor sólida, a 0, que é totalmente transparente ou claro. <code>rgba()</code> é ótimo para usar neste caso, pois permite ajustar a opacidade. Isso significa que você não precisa bloquear completamente o plano de fundo. Você usará <code>background-color: rgba(45, 45, 45, 0.1)</code> para este desafio. Ele produz uma cor cinza escura que é quase transparente, dado o baixo valor de opacidade de 0,1. </section>

## Instructions
<section id="instructions"> Para tornar o texto mais destacado, ajuste a <code>background-color</code> de fundo do elemento <code>h4</code> ao valor <code>rgba()</code> fornecido. Também para o <code>h4</code> , remova a propriedade <code>height</code> e adicione <code>padding</code> de 10px. </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: 'Seu código deve adicionar uma propriedade de <code>background-color</code> ao elemento <code>h4</code> definido como <code>rgba(45, 45, 45, 0.1)</code> .'
    testString: 'assert(code.match(/background-color:\s*?rgba\(\s*?45\s*?,\s*?45\s*?,\s*?45\s*?,\s*?0?\.1\s*?\)/gi), "Your code should add a <code>background-color</code> property to the <code>h4</code> element set to <code>rgba(45, 45, 45, 0.1)</code>.");'
  - text: Seu código deve adicionar uma propriedade de <code>padding</code> ao elemento <code>h4</code> e configurá-lo para 10 pixels.
    testString: 'assert($("h4").css("padding-top") == "10px" && $("h4").css("padding-right") == "10px" && $("h4").css("padding-bottom") == "10px" && $("h4").css("padding-left") == "10px", "Your code should add a <code>padding</code> property to the <code>h4</code> element and set it to 10 pixels.");'
  - text: A propriedade <code>height</code> no elemento <code>h4</code> deve ser removida.
    testString: 'assert(!($("h4").css("height") == "25px"), "The <code>height</code> property on the <code>h4</code> element should be removed.");'

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
