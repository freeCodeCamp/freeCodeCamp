---
id: bad87fee1348bd9aedf08726
title: Use Hex Code for Specific Colors
challengeType: 0
videoUrl: ''
localeTitle: Use o código hexadecimal para cores específicas
---

## Description
<section id="description"> Você sabia que existem outras maneiras de representar cores no CSS? Uma dessas formas é chamada de código hexadecimal ou <code>hex code</code> . Geralmente usamos números <code>decimals</code> ou base 10, que usam os símbolos de 0 a 9 para cada dígito. <code>Hexadecimals</code> (ou <code>hex</code> ) são números de base 16. Isso significa que ele usa dezesseis símbolos distintos. Como decimais, os símbolos 0-9 representam os valores de zero a nove. Então A, B, C, D, E e F representam os valores de dez a quinze. No total, 0 a F pode representar um dígito em <code>hexadecimal</code> , dando-nos 16 valores possíveis totais. Você pode encontrar mais informações sobre <a target="_blank" href="https://en.wikipedia.org/wiki/Hexadecimal">números hexadecimais aqui</a> . Em CSS, podemos usar 6 dígitos hexadecimais para representar cores, dois para os componentes vermelho (R), verde (G) e azul (B). Por exemplo, <code>#000000</code> é preto e também é o menor valor possível. Você pode encontrar mais informações sobre o <a target="_blank" href="https://en.wikipedia.org/wiki/RGB_color_model">sistema de cores RGB aqui</a> . <blockquote> body { <br> cor: # 000000; <br> } </blockquote></section>

## Instructions
<section id="instructions"> Substitua a palavra <code>black</code> na cor de fundo do nosso <code>body</code> com a representação do <code>hex code</code> , <code>#000000</code> . </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: Dê ao seu <code>body</code> a cor de fundo do preto.
    testString: 'assert($("body").css("background-color") === "rgb(0, 0, 0)", "Give your <code>body</code> element the background-color of black.");'
  - text: Use o <code>hex code</code> para a cor preta em vez da palavra <code>black</code> .
    testString: 'assert(code.match(/body\s*{(([\s\S]*;\s*?)|\s*?)background.*\s*:\s*?#000(000)?((\s*})|(;[\s\S]*?}))/gi), "Use the <code>hex code</code> for the color black instead of the word <code>black</code>.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='html-seed'>

```html
<style>
  body {
    background-color: black;
  }
</style>

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
