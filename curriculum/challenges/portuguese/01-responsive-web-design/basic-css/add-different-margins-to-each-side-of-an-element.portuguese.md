---
id: bad87fee1248bd9aedf08824
title: Add Different Margins to Each Side of an Element
challengeType: 0
videoUrl: ''
localeTitle: Adicione margens diferentes a cada lado de um elemento
---

## Description
<section id="description"> Às vezes você vai querer personalizar um elemento para que ele tenha uma margem diferente em cada um dos seus lados. O CSS permite controlar a margem de todos os quatro lados individuais de um elemento com as propriedades <code>margin-top</code>, <code>margin-right</code>, <code>margin-bottom</code> e <code>margin-left</code>. </section>

## Instructions
<section id="instructions"> Dê à caixa azul <code>40px</code> de <code>margin</code> no lado superior e esquerdo, mas apenas <code>20px</code> no lado inferior e direito. </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: Sua classe de <code>blue-box</code> deve dar ao topo dos elementos <code>40px</code> de <code>margin</code> .
    testString: 'assert($(".blue-box").css("margin-top") === "40px", "Your <code>blue-box</code> class should give the top of elements <code>40px</code> of <code>margin</code>.");'
  - text: Sua turma de <code>blue-box</code> deve dar o direito de elementos de <code>20px</code> de <code>margin</code> .
    testString: 'assert($(".blue-box").css("margin-right") === "20px", "Your <code>blue-box</code> class should give the right of elements <code>20px</code> of <code>margin</code>.");'
  - text: Sua classe de <code>blue-box</code> deve dar ao fundo dos elementos 20 <code>20px</code> de <code>margin</code> .
    testString: 'assert($(".blue-box").css("margin-bottom") === "20px", "Your <code>blue-box</code> class should give the bottom of elements <code>20px</code> of <code>margin</code>.");'
  - text: Sua classe de <code>blue-box</code> deve dar a esquerda dos elementos <code>40px</code> de <code>margin</code> .
    testString: 'assert($(".blue-box").css("margin-left") === "40px", "Your <code>blue-box</code> class should give the left of elements <code>40px</code> of <code>margin</code>.");'

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
    margin-top: 40px;
    margin-right: 20px;
    margin-bottom: 20px;
    margin-left: 40px;
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
