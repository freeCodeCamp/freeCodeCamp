---
id: bad87fee1348bd9aede08718
title: Use RGB values to Color Elements
challengeType: 0
videoUrl: ''
localeTitle: Use valores RGB para elementos de cor
---

## Description
<section id="description"> Outra maneira de representar cores em CSS é usando valores <code>RGB</code> . O valor RGB para preto tem esta aparência: <code>rgb(0, 0, 0)</code> O valor RGB para branco é semelhante ao seguinte: <code>rgb(255, 255, 255)</code> Em vez de usar seis dígitos hexadecimais como você faz com o código hexadecimal, com <code>RGB</code> especifique o brilho de cada cor com um número entre 0 e 255. Se fizer as contas, os dois dígitos de uma cor são iguais a 16 vezes 16, o que nos dá 256 valores totais. Então <code>RGB</code> , que começa contando a partir de zero, tem exatamente o mesmo número de valores possíveis que o código hexadecimal. Veja um exemplo de como você alteraria o plano de fundo do corpo para laranja usando seu código RGB. <blockquote> body { <br> background-color: rgb (255, 165, 0); <br> } </blockquote></section>

## Instructions
<section id="instructions"> Vamos substituir o código hexadecimal na cor de fundo do nosso elemento <code>body</code> pelo valor RGB para black: <code>rgb(0, 0, 0)</code> </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: Seu elemento <code>body</code> deve ter um fundo preto.
    testString: 'assert($("body").css("background-color") === "rgb(0, 0, 0)", "Your <code>body</code> element should have a black background.");'
  - text: Use <code>rgb</code> para dar ao seu <code>body</code> uma cor preta.
    testString: 'assert(code.match(/rgb\s*\(\s*0\s*,\s*0\s*,\s*0\s*\)/ig), "Use <code>rgb</code> to give your <code>body</code> element a color of black.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='html-seed'>

```html
<style>
  body {
    background-color: #F00;
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
