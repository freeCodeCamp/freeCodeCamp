---
id: bad87fee1348bd9aedf08756
title: Prioritize One Style Over Another
challengeType: 0
videoUrl: ''
localeTitle: Priorize um estilo sobre outro
---

## Description
<section id="description"> Às vezes, seus elementos HTML receberão vários estilos que entram em conflito entre si. Por exemplo, seu elemento <code>h1</code> não pode ser verde e rosa ao mesmo tempo. Vamos ver o que acontece quando criamos uma classe que torna o texto rosa e depois aplicamos a um elemento. Nossa classe irá <em>sobrepor</em> a <code>color: green;</code> do elemento <code>body</code> <code>color: green;</code> Propriedade CSS? </section>

## Instructions
<section id="instructions"> Crie uma classe CSS chamada <code>pink-text</code> que forneça um elemento cor-de-rosa. Dê ao seu elemento <code>h1</code> a classe de <code>pink-text</code> . </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: Seu elemento <code>h1</code> deve ter a classe <code>pink-text</code> .
    testString: 'assert($("h1").hasClass("pink-text"), "Your <code>h1</code> element should have the class <code>pink-text</code>.");'
  - text: Seu <code>&lt;style&gt;</code> deve ter uma classe CSS de <code>pink-text</code> que altere a <code>color</code> .
    testString: 'assert(code.match(/\.pink-text\s*\{\s*color\s*:\s*.+\s*;\s*\}/g), "Your <code>&#60;style&#62;</code> should have a <code>pink-text</code> CSS class that changes the <code>color</code>.");'
  - text: Seu elemento <code>h1</code> deve ser rosa.
    testString: 'assert($("h1").css("color") === "rgb(255, 192, 203)", "Your <code>h1</code> element should be pink.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='html-seed'>

```html
<style>
  body {
    background-color: black;
    font-family: monospace;
    color: green;
  }
</style>
<h1>Hello World!</h1>

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
