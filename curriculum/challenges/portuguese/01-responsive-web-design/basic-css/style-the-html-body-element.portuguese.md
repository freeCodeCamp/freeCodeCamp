---
id: bad87fee1348bd9aedf08736
title: Style the HTML Body Element
challengeType: 0
videoUrl: ''
localeTitle: Estilize o elemento do corpo do HTML
---

## Description
<section id="description"> Agora vamos começar de novo e falar sobre herança de CSS. Toda página HTML possui um elemento <code>body</code> . </section>

## Instructions
<section id="instructions"> Podemos provar que o elemento do <code>body</code> existe aqui, dando-lhe uma <code>background-color</code> de <code>background-color</code> de preto. Podemos fazer isso adicionando o seguinte ao nosso elemento de <code>style</code> : <blockquote> body { <br> cor de fundo: preto; <br> } </blockquote></section>

## Tests
<section id='tests'>

```yml
tests:
  - text: Dê ao seu <code>body</code> a <code>background-color</code> de <code>background-color</code> do preto.
    testString: 'assert($("body").css("background-color") === "rgb(0, 0, 0)", "Give your <code>body</code> element the <code>background-color</code> of black.");'
  - text: Verifique se sua regra de CSS está formatada corretamente com as chaves de abertura e fechamento.
    testString: 'assert(code.match(/<style>\s*body\s*\{\s*background.*\s*:\s*.*;\s*\}\s*<\/style>/i), "Make sure your CSS rule is properly formatted with both opening and closing curly brackets.");'
  - text: Verifique se sua regra de CSS termina com um ponto e vírgula.
    testString: 'assert(code.match(/<style>\s*body\s*\{\s*background.*\s*:\s*.*;\s*\}\s*<\/style>/i), "Make sure your CSS rule ends with a semi-colon.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='html-seed'>

```html
<style>

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
