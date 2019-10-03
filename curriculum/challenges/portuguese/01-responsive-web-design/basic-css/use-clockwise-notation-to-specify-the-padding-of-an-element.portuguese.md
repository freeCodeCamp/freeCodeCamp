---
id: bad87fee1348bd9aedf08826
title: Use Clockwise Notation to Specify the Padding of an Element
challengeType: 0
videoUrl: ''
localeTitle: Use a notação no sentido horário para especificar o preenchimento de um elemento
---

## Description
<section id="description"> Em vez de especificar as propriedades <code>padding-top</code> , <code>padding-right</code> , <code>padding-bottom</code> e <code>padding-left</code> individualmente, você pode especificá-las todas em uma linha, como: <code>padding: 10px 20px 10px 20px;</code> Esses quatro valores funcionam como um relógio: superior, direita, inferior, esquerda e produzirão exatamente o mesmo resultado que o uso das instruções de preenchimento específicas do lado. </section>

## Instructions
<section id="instructions"> Use Notação no sentido horário para dar à classe &quot;.blue-box&quot; um <code>padding</code> de <code>40px</code> no lado superior e esquerdo, mas apenas <code>20px</code> no lado inferior e direito. </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: Sua classe de <code>blue-box</code> deve dar ao topo dos elementos <code>40px</code> de <code>padding</code> .
    testString: 'assert($(".blue-box").css("padding-top") === "40px", "Your <code>blue-box</code> class should give the top of elements <code>40px</code> of <code>padding</code>.");'
  - text: Sua classe de <code>blue-box</code> deve dar o direito de elementos de <code>20px</code> de <code>padding</code> .
    testString: 'assert($(".blue-box").css("padding-right") === "20px", "Your <code>blue-box</code> class should give the right of elements <code>20px</code> of <code>padding</code>.");'
  - text: Sua classe de <code>blue-box</code> deve dar ao fundo dos elementos <code>20px</code> de <code>padding</code> .
    testString: 'assert($(".blue-box").css("padding-bottom") === "20px", "Your <code>blue-box</code> class should give the bottom of elements <code>20px</code> of <code>padding</code>.");'
  - text: Sua classe de <code>blue-box</code> deve dar a esquerda dos elementos <code>40px</code> de <code>padding</code> .
    testString: 'assert($(".blue-box").css("padding-left") === "40px", "Your <code>blue-box</code> class should give the left of elements <code>40px</code> of <code>padding</code>.");'
  - text: Você deve usar a notação no sentido horário para definir o preenchimento da classe de <code>blue-box</code> .
    testString: 'assert(!/padding-top|padding-right|padding-bottom|padding-left/.test(code), "You should use the clockwise notation to set the padding of <code>blue-box</code> class.");'

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
    padding: 20px 40px 20px 40px;
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
    padding: 20px 40px 20px 40px;
  }

  .blue-box {
    background-color: blue;
    color: #fff;
    padding: 40px 20px 20px 40px;
  }
</style>
<h5 class="injected-text">margin</h5>

<div class="box yellow-box">
  <h5 class="box red-box">padding</h5>
  <h5 class="box blue-box">padding</h5>
</div>
```
</section>
