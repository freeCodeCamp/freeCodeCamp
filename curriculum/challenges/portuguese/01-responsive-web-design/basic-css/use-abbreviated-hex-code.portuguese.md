---
id: bad87fee1348bd9aedf08719
title: Use Abbreviated Hex Code
challengeType: 0
videoUrl: ''
localeTitle: Use o código hexadecimal abreviado
---

## Description
<section id="description"> Muitas pessoas se sentem oprimidas pelas possibilidades de mais de 16 milhões de cores. E é difícil lembrar o código hexadecimal. Felizmente, você pode encurtá-lo. Por exemplo, o código hexadecimal vermelho <code>#FF0000</code> pode ser encurtado para <code>#F00</code> . Essa forma abreviada fornece um dígito para vermelho, um dígito para verde e um dígito para azul. Isso reduz o número total de cores possíveis para cerca de 4.000. Mas os navegadores interpretarão <code>#FF0000</code> e <code>#F00</code> exatamente como a mesma cor. </section>

## Instructions
<section id="instructions"> Vá em frente, tente usar os códigos hexadecimais abreviados para colorir os elementos corretos. <table class="table table-striped"><tbody><tr><th> Cor </th><th> Código hexadecimal curto </th></tr><tr><td> Ciano </td><td> <code>#0FF</code> </td> </tr><tr><td> Verde </td><td> <code>#0F0</code> </td> </tr><tr><td> Vermelho </td><td> <code>#F00</code> </td> </tr><tr><td> Fúcsia </td><td> <code>#F0F</code> </td> </tr></tbody></table></section>

## Tests
<section id='tests'>

```yml
tests:
  - text: Dê seu elemento <code>h1</code> com o texto <code>I am red!</code> a <code>color</code> vermelha.
    testString: 'assert($(".red-text").css("color") === "rgb(255, 0, 0)", "Give your <code>h1</code> element with the text <code>I am red!</code> the <code>color</code> red.");'
  - text: 'Use o <code>hex code</code> abreviado para a cor vermelha em vez do código hexadecimal <code>#FF0000</code> .'
    testString: 'assert(code.match(/\.red-text\s*?{\s*?color:\s*?#F00\s*?;\s*?}/gi), "Use the abbreviate <code>hex code</code> for the color red instead of the hex code <code>#FF0000</code>.");'
  - text: Dê seu elemento <code>h1</code> com o texto que <code>I am green!</code> a <code>color</code> verde.
    testString: 'assert($(".green-text").css("color") === "rgb(0, 255, 0)", "Give your <code>h1</code> element with the text <code>I am green!</code> the <code>color</code> green.");'
  - text: 'Use o <code>hex code</code> abreviado para a cor verde em vez do código hexadecimal <code>#00FF00</code> .'
    testString: 'assert(code.match(/\.green-text\s*?{\s*?color:\s*?#0F0\s*?;\s*?}/gi), "Use the abbreviated <code>hex code</code> for the color green instead of the hex code <code>#00FF00</code>.");'
  - text: Dê seu elemento <code>h1</code> com o texto que <code>I am cyan!</code> a <code>color</code> ciano.
    testString: 'assert($(".cyan-text").css("color") === "rgb(0, 255, 255)", "Give your <code>h1</code> element with the text <code>I am cyan!</code> the <code>color</code> cyan.");'
  - text: 'Use o <code>hex code</code> abreviado para o ciano da cor em vez do código hexadecimal <code>#00FFFF</code> .'
    testString: 'assert(code.match(/\.cyan-text\s*?{\s*?color:\s*?#0FF\s*?;\s*?}/gi), "Use the abbreviated <code>hex code</code> for the color cyan instead of the hex code <code>#00FFFF</code>.");'
  - text: Dê seu elemento <code>h1</code> com o texto que <code>I am fuchsia!</code> a <code>color</code> fúcsia.
    testString: 'assert($(".fuchsia-text").css("color") === "rgb(255, 0, 255)", "Give your <code>h1</code> element with the text <code>I am fuchsia!</code> the <code>color</code> fuchsia.");'
  - text: 'Use o <code>hex code</code> abreviado para a cor fúcsia em vez do código hexadecimal <code>#FF00FF</code> .'
    testString: 'assert(code.match(/\.fuchsia-text\s*?{\s*?color:\s*?#F0F\s*?;\s*?}/gi), "Use the abbreviated <code>hex code</code> for the color fuchsia instead of the hex code <code>#FF00FF</code>.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='html-seed'>

```html
<style>
  .red-text {
    color: #000000;
  }
  .fuchsia-text {
    color: #000000;
  }
  .cyan-text {
    color: #000000;
  }
  .green-text {
    color: #000000;
  }
</style>

<h1 class="red-text">I am red!</h1>

<h1 class="fuchsia-text">I am fuchsia!</h1>

<h1 class="cyan-text">I am cyan!</h1>

<h1 class="green-text">I am green!</h1>

```

</div>



</section>

## Solution
<section id='solution'>

```html
<style>
  .red-text {
    color: #F00;
  }
  .fuchsia-text {
    color: #F0F;
  }
  .cyan-text {
    color: #0FF;
  }
  .green-text {
    color: #0F0;
  }
</style>

<h1 class="red-text">I am red!</h1>

<h1 class="fuchsia-text">I am fuchsia!</h1>

<h1 class="cyan-text">I am cyan!</h1>

<h1 class="green-text">I am green!</h1>
```
</section>
