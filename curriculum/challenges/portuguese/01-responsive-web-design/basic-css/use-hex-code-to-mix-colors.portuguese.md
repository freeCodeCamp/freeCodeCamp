---
id: bad87fee1348bd9aedf08721
title: Use Hex Code to Mix Colors
challengeType: 0
videoUrl: ''
localeTitle: Use o código hexadecimal para misturar cores
---

## Description
<section id="description"> Para revisar, os códigos hexadecimais usam 6 dígitos hexadecimais para representar as cores, dois para os componentes vermelho (R), verde (G) e azul (B). Destas três cores puras (vermelho, verde e azul), podemos variar as quantidades de cada uma para criar mais de 16 milhões de outras cores! Por exemplo, laranja é vermelho puro, misturado com verde e não azul. Em código hexadecimal, isso se traduz em ser <code>#FFA500</code> . O dígito <code>0</code> é o menor número no código hexadecimal e representa uma completa ausência de cor. O dígito <code>F</code> é o número mais alto no código hexadecimal e representa o brilho máximo possível. </section>

## Instructions
<section id="instructions"> Substitua as palavras de cor em nosso elemento de <code>style</code> com seus códigos hexadecimais corretos. <table class="table table-striped"><tbody><tr><th> Cor </th><th> Código hexadecimal </th></tr><tr><td> Trapaceiro azul </td><td> <code>#1E90FF</code> </td> </tr><tr><td> Verde </td><td> <code>#00FF00</code> </td> </tr><tr><td> laranja </td><td> <code>#FFA500</code> </td> </tr><tr><td> Vermelho </td><td> <code>#FF0000</code> </td> </tr></tbody></table></section>

## Tests
<section id='tests'>

```yml
tests:
  - text: Dê seu elemento <code>h1</code> com o texto <code>I am red!</code> a <code>color</code> vermelha.
    testString: 'assert($(".red-text").css("color") === "rgb(255, 0, 0)", "Give your <code>h1</code> element with the text <code>I am red!</code> the <code>color</code> red.");'
  - text: Use o <code>hex code</code> para a cor vermelha em vez da palavra <code>red</code> .
    testString: 'assert(code.match(/\.red-text\s*?{\s*?color:\s*?#FF0000\s*?;\s*?}/gi), "Use the <code>hex code</code> for the color red instead of the word <code>red</code>.");'
  - text: Dê seu elemento <code>h1</code> com o texto que <code>I am green!</code> a <code>color</code> verde.
    testString: 'assert($(".green-text").css("color") === "rgb(0, 255, 0)", "Give your <code>h1</code> element with the text <code>I am green!</code> the <code>color</code> green.");'
  - text: Use o <code>hex code</code> para a cor verde em vez da palavra <code>green</code> .
    testString: 'assert(code.match(/\.green-text\s*?{\s*?color:\s*?#00FF00\s*?;\s*?}/gi), "Use the <code>hex code</code> for the color green instead of the word <code>green</code>.");'
  - text: Dê seu elemento <code>h1</code> com o texto <code>I am dodger blue!</code> o <code>color</code> dodger azul.
    testString: 'assert($(".dodger-blue-text").css("color") === "rgb(30, 144, 255)", "Give your <code>h1</code> element with the text <code>I am dodger blue!</code> the <code>color</code> dodger blue.");'
  - text: Use o <code>hex code</code> para o cor dodger blue em vez da palavra <code>dodgerblue</code> .
    testString: 'assert(code.match(/\.dodger-blue-text\s*?{\s*?color:\s*?#1E90FF\s*?;\s*?}/gi), "Use the <code>hex code</code> for the color dodger blue instead of the word <code>dodgerblue</code>.");'
  - text: Dê seu elemento <code>h1</code> com o texto <code>I am orange!</code> a <code>color</code> laranja.
    testString: 'assert($(".orange-text").css("color") === "rgb(255, 165, 0)", "Give your <code>h1</code> element with the text <code>I am orange!</code> the <code>color</code> orange.");'
  - text: Use o <code>hex code</code> da cor laranja em vez da palavra <code>orange</code> .
    testString: 'assert(code.match(/\.orange-text\s*?{\s*?color:\s*?#FFA500\s*?;\s*?}/gi), "Use the <code>hex code</code> for the color orange instead of the word <code>orange</code>.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='html-seed'>

```html
<style>
  .red-text {
    color: black;
  }
  .green-text {
    color: black;
  }
  .dodger-blue-text {
    color: black;
  }
  .orange-text {
    color: black;
  }
</style>

<h1 class="red-text">I am red!</h1>

<h1 class="green-text">I am green!</h1>

<h1 class="dodger-blue-text">I am dodger blue!</h1>

<h1 class="orange-text">I am orange!</h1>

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
