---
id: 587d7791367417b2b2512ab3
title: Create Visual Balance Using the text-align Property
challengeType: 0
videoUrl: ''
localeTitle: Criar equilíbrio visual usando a propriedade text-align
---

## Description
<section id="description"> Esta seção do currículo se concentra no design visual aplicado. O primeiro grupo de desafios baseia-se no layout do cartão para mostrar vários princípios fundamentais. O texto geralmente é uma grande parte do conteúdo da web. CSS tem várias opções de como alinhá-lo com a propriedade <code>text-align</code> . <code>text-align: justify;</code> faz com que todas as linhas de texto, exceto a última linha, atendam às bordas esquerda e direita da caixa de linha. <code>text-align: center;</code> centraliza o texto <code>text-align: right;</code> alinhar à direita o texto E <code>text-align: left;</code> (o padrão) alinha à esquerda o texto. </section>

## Instructions
<section id="instructions"> Alinhe o texto da tag <code>h4</code> , que diz &quot;Google&quot;, ao centro. Em seguida, justifique a tag de parágrafo que contém informações sobre como o Google foi fundado. </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: Seu código deve usar a propriedade text-align na tag <code>h4</code> para configurá-lo para o centro.
    testString: 'assert($("h4").css("text-align") == "center", "Your code should use the text-align property on the <code>h4</code> tag to set it to center.");'
  - text: Seu código deve usar a propriedade text-align na tag <code>p</code> para configurá-lo para justificar.
    testString: 'assert($("p").css("text-align") == "justify", "Your code should use the text-align property on the <code>p</code> tag to set it to justify.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='html-seed'>

```html
<style>
  h4 {

  }
  p {

  }
  .links {
    margin-right: 20px;

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
