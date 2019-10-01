---
id: bad87fee1348bd9aedf08824
title: Add Different Padding to Each Side of an Element
challengeType: 0
videoUrl: ''
localeTitle: Adicionar preenchimento diferente a cada lado de um elemento
---

## Description
<section id="description"> Às vezes, você desejará personalizar um elemento para que ele tenha diferentes quantidades de <code>padding</code> em cada um dos seus lados. O CSS permite controlar o <code>padding</code> de todos os quatro lados individuais de um elemento com as propriedades <code>padding-top</code> , <code>padding-right</code> , <code>padding-bottom</code> e <code>padding-left</code> . </section>

## Instructions
<section id="instructions"> Dê à caixa azul um <code>padding</code> de <code>40px</code> no lado superior e esquerdo, mas apenas <code>20px</code> no lado inferior e direito. </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: Sua classe de <code>blue-box</code> deve dar ao topo dos elementos <code>40px</code> de <code>padding</code> .
    testString: 'assert($(".blue-box").css("padding-top") === "40px", "Your <code>blue-box</code> class should give the top of the elements <code>40px</code> of <code>padding</code>.");'
  - text: Sua classe de <code>blue-box</code> deve dar o direito dos elementos <code>20px</code> de <code>padding</code> .
    testString: 'assert($(".blue-box").css("padding-right") === "20px", "Your <code>blue-box</code> class should give the right of the elements <code>20px</code> of <code>padding</code>.");'
  - text: Sua classe de <code>blue-box</code> deve dar ao fundo dos elementos <code>20px</code> de <code>padding</code> .
    testString: 'assert($(".blue-box").css("padding-bottom") === "20px", "Your <code>blue-box</code> class should give the bottom of the elements <code>20px</code> of <code>padding</code>.");'
  - text: Sua classe de <code>blue-box</code> deve dar a esquerda dos elementos <code>40px</code> de <code>padding</code> .
    testString: 'assert($(".blue-box").css("padding-left") === "40px", "Your <code>blue-box</code> class should give the left of the elements <code>40px</code> of <code>padding</code>.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='html-seed'>

```html
<style>
  .injected-text {
    margin-bottom: -25px;
    text-align: center;
  }

  .box {
    border-style: solid;
    border-color: black;
    border-width: 5px;
    text-align: center;
  }

  .yellow-box {
    background-color: yellow;
    padding: 10px;
  }

  .red-box {
    background-color: crimson;
    color: #fff;
    padding-top: 40px;
    padding-right: 20px;
    padding-bottom: 20px;
    padding-left: 40px;
  }

  .blue-box {
    background-color: blue;
    color: #fff;
  }
</style>
<h5 class="injected-text">margin</h5>

<div class="box yellow-box">
  <h5 class="box red-box">padding</h5>
  <h5 class="box blue-box">padding</h5>
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
