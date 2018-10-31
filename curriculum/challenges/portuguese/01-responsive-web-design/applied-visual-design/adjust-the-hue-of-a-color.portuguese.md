---
id: 587d78a4367417b2b2512ad4
title: Adjust the Hue of a Color
challengeType: 0
videoUrl: ''
localeTitle: Ajustar o tom de uma cor
---

## Description
<section id="description"> As cores têm várias características, incluindo tonalidade, saturação e luminosidade. O CSS3 introduziu a propriedade <code>hsl()</code> como uma maneira alternativa de escolher uma cor, declarando diretamente essas características. <b>O tom</b> é o que as pessoas geralmente pensam como &quot;cor&quot;. Se você imaginar um espectro de cores começando com vermelho à esquerda, passando pelo verde no meio e azul à direita, o matiz é onde uma cor se encaixa nessa linha. Em <code>hsl()</code> , o matiz usa um conceito de roda de cores em vez do espectro, onde o ângulo da cor no círculo é dado como um valor entre 0 e 360. A <b>saturação</b> é a quantidade de cinza em uma cor. Uma cor totalmente saturada não tem cinza, e uma cor minimamente saturada é quase completamente cinza. Isso é dado como uma porcentagem com 100% sendo totalmente saturado. <b>Leveza</b> é a quantidade de branco ou preto em uma cor. É dada uma porcentagem variando de 0% (preto) a 100% (branco), onde 50% é a cor normal. Aqui estão alguns exemplos do uso de <code>hsl()</code> com cores de saturação normais e totalmente saturadas: <table class="table table-striped"><thead><tr><th> Cor </th><th> HSL </th></tr></thead><tbody><tr><td> vermelho </td><td> hsl (0, 100%, 50%) </td></tr><tr><td> amarelo </td><td> hsl (60, 100%, 50%) </td></tr><tr><td> verde </td><td> hsl (120, 100%, 50%) </td></tr><tr><td> ciano </td><td> hsl (180, 100%, 50%) </td></tr><tr><td> azul </td><td> hsl (240, 100%, 50%) </td></tr><tr><td> magenta </td><td> hsl (300, 100%, 50%) </td></tr></tbody></table></section>

## Instructions
<section id="instructions"> Altere a <code>background-color</code> de <code>background-color</code> de cada elemento <code>div</code> base nos nomes de classe ( <code>green</code> , <code>cyan</code> ou <code>blue</code> ) usando <code>hsl()</code> . Todos os três devem ter saturação completa e leveza normal. </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: Seu código deve usar a propriedade <code>hsl()</code> para declarar a cor verde.
    testString: 'assert(code.match(/\.green\s*?{\s*?background-color:\s*?hsl/gi), "Your code should use the <code>hsl()</code> property to declare the color green.");'
  - text: Seu código deve usar a propriedade <code>hsl()</code> para declarar a cor ciano.
    testString: 'assert(code.match(/\.cyan\s*?{\s*?background-color:\s*?hsl/gi), "Your code should use the <code>hsl()</code> property to declare the color cyan.");'
  - text: Seu código deve usar a propriedade <code>hsl()</code> para declarar a cor azul.
    testString: 'assert(code.match(/\.blue\s*?{\s*?background-color:\s*?hsl/gi), "Your code should use the <code>hsl()</code> property to declare the color blue.");'
  - text: O elemento <code>div</code> com a classe <code>green</code> deve ter uma <code>background-color</code> de fundo verde.
    testString: 'assert($(".green").css("background-color") == "rgb(0, 255, 0)", "The <code>div</code> element with class <code>green</code> should have a <code>background-color</code> of green.");'
  - text: O elemento <code>div</code> com classe <code>cyan</code> deve ter uma <code>background-color</code> de <code>background-color</code> de ciano.
    testString: 'assert($(".cyan").css("background-color") == "rgb(0, 255, 255)", "The <code>div</code> element with class <code>cyan</code> should have a <code>background-color</code> of cyan.");'
  - text: O elemento <code>div</code> com a classe <code>blue</code> deve ter uma <code>background-color</code> de fundo azul.
    testString: 'assert($(".blue").css("background-color") == "rgb(0, 0, 255)", "The <code>div</code> element with class <code>blue</code> should have a <code>background-color</code> of blue.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='html-seed'>

```html
<style>
  body {
    background-color: #FFFFFF;
  }

  .green {
    background-color: #000000;
  }

  .cyan {
    background-color: #000000;
  }

  .blue {
    background-color: #000000;
  }

  div {
    display: inline-block;
    height: 100px;
    width: 100px;
  }
</style>

<div class="green"></div>
<div class="cyan"></div>
<div class="blue"></div>

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
