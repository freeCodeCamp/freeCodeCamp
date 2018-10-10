---
id: 587d781c367417b2b2512ac0
title: Use the text-transform Property to Make Text Uppercase
challengeType: 0
videoUrl: ''
localeTitle: Use a propriedade text-transform para tornar o texto maiúsculo
---

## Description
<section id="description"> A propriedade <code>text-transform</code> em CSS é usada para alterar a aparência do texto. É uma maneira conveniente de garantir que o texto em uma página da Web seja exibido de forma consistente, sem a necessidade de alterar o conteúdo de texto dos elementos HTML reais. A tabela a seguir mostra como os diferentes valores de <code>text-transform</code> alteram o texto de exemplo &quot;Transform me&quot;. <table class="table table-striped"><thead><tr><th> Valor </th><th> Resultado </th></tr></thead><tbody><tr><td> <code>lowercase</code> </td> <td> &quot;me transformar&quot; </td></tr><tr><td> <code>uppercase</code> </td> <td> &quot;TRANSFORME-ME&quot; </td></tr><tr><td> <code>capitalize</code> </td> <td> &quot;Transforme-me&quot; </td></tr><tr><td> <code>initial</code> </td> <td> Use o valor padrão </td></tr><tr><td> <code>inherit</code> </td> <td> Use o valor de <code>text-transform</code> do elemento pai </td></tr><tr><td> <code>none</code> </td> <td> <strong>Padrão:</strong> use o texto original </td></tr></tbody></table></section>

## Instructions
<section id="instructions"> Transforme o texto do <code>h4</code> em maiúsculo usando a propriedade <code>text-transform</code> . </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: O texto <code>h4</code> deve estar em maiúsculas.
    testString: 'assert($("h4").css("text-transform") === "uppercase", "The <code>h4</code> text should be uppercase.");'
  - text: O texto original do h4 não deve ser alterado.
    testString: 'assert(($("h4").text() !== $("h4").text().toUpperCase()), "The original text of the h4 should not be changed.");'

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
    opacity: 0.7;
  }
  #thumbnail {
    box-shadow: 0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23);
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
