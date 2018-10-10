---
id: bad87fee1348bd9aedf08746
title: Inherit Styles from the Body Element
challengeType: 0
videoUrl: ''
localeTitle: Herdar estilos do elemento do corpo
---

## Description
<section id="description"> Agora provamos que toda página HTML tem um elemento <code>body</code> , e que seu elemento <code>body</code> também pode ser estilizado com CSS. Lembre-se, você pode estilizar seu elemento <code>body</code> como qualquer outro elemento HTML, e todos os seus outros elementos herdarão os estilos de seu <code>body</code> . </section>

## Instructions
<section id="instructions"> Primeiro, crie um elemento <code>h1</code> com o texto <code>Hello World</code> Então, vamos dar a todos os elementos da sua página a cor <code>green</code> adicionando <code>color: green;</code> à declaração de estilo do elemento do seu <code>body</code> . Finalmente, dê ao seu <code>body</code> elemento font-family of <code>monospace</code> adicionando <code>font-family: monospace;</code> à declaração de estilo do elemento do seu <code>body</code> . </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: Crie um elemento <code>h1</code> .
    testString: 'assert(($("h1").length > 0), "Create an <code>h1</code> element.");'
  - text: Seu elemento <code>h1</code> deve ter o texto <code>Hello World</code> .
    testString: 'assert(($("h1").length > 0 && $("h1").text().match(/hello world/i)), "Your <code>h1</code> element should have the text <code>Hello World</code>.");'
  - text: Certifique-se de que seu elemento <code>h1</code> tenha uma tag de fechamento.
    testString: 'assert(code.match(/<\/h1>/g) && code.match(/<h1/g) && code.match(/<\/h1>/g).length === code.match(/<h1/g).length, "Make sure your <code>h1</code> element has a closing tag.");'
  - text: Dê ao seu elemento de <code>body</code> a propriedade de <code>color</code> <code>green</code> .
    testString: 'assert(($("body").css("color") === "rgb(0, 128, 0)"), "Give your <code>body</code> element the <code>color</code> property of <code>green</code>.");'
  - text: Dê ao seu elemento de <code>body</code> a propriedade <code>font-family</code> de <code>monospace</code> .
    testString: 'assert(($("body").css("font-family").match(/monospace/i)), "Give your <code>body</code> element the <code>font-family</code> property of <code>monospace</code>.");'
  - text: Seu elemento <code>h1</code> deve herdar a fonte <code>monospace</code> de seu elemento <code>body</code> .
    testString: 'assert(($("h1").length > 0 && $("h1").css("font-family").match(/monospace/i)), "Your <code>h1</code> element should inherit the font <code>monospace</code> from your <code>body</code> element.");'
  - text: Seu elemento <code>h1</code> deve herdar a cor verde do elemento do <code>body</code> .
    testString: 'assert(($("h1").length > 0 && $("h1").css("color") === "rgb(0, 128, 0)"), "Your <code>h1</code> element should inherit the color green from your <code>body</code> element.");'

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
