---
id: bad87fee1348bd9afdf08726
title: Use Clockwise Notation to Specify the Margin of an Element
challengeType: 0
videoUrl: ''
localeTitle: Use a notação no sentido horário para especificar a margem de um elemento
---

## Description
<section id="description"> Vamos tentar de novo, mas com <code>margin</code> dessa vez. Em vez de especificar as propriedades <code>margin-top</code> , <code>margin-right</code> , <code>margin-bottom</code> e <code>margin-left</code> individualmente, você pode especificá-las todas em uma linha, assim: <code>margin: 10px 20px 10px 20px;</code> Esses quatro valores funcionam como um relógio: superior, direita, inferior, esquerda e produzirão exatamente o mesmo resultado que o uso das instruções de margem específicas do lado. </section>

## Instructions
<section id="instructions"> Use <code>Clockwise Notation</code> para dar ao elemento com a classe <code>blue-box</code> uma margem de <code>40px</code> no lado superior e esquerdo, mas apenas <code>20px</code> no lado inferior e direito. </section>

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
    padding: 20px 40px 20px 40px;
  }

  .red-box {
    background-color: crimson;
    color: #fff;
    margin: 20px 40px 20px 40px;
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
