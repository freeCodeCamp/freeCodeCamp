---
id: bad87fee1348bd9aedf06756
title: Override Class Declarations with Inline Styles
challengeType: 0
videoUrl: ''
localeTitle: Substituir declarações de classe com estilos in-line
---

## Description
<section id="description"> Por isso, provamos que as declarações de ID substituem as declarações de classe, independentemente de onde elas são declaradas no CSS do elemento de <code>style</code> . Existem outras maneiras de substituir o CSS. Você se lembra de estilos inline? </section>

## Instructions
<section id="instructions"> Use um <code>inline style</code> para tentar tornar nosso elemento <code>h1</code> branco. Lembre-se de que os estilos de linha se parecem com isso: <code>&lt;h1 style=&quot;color: green;&quot;&gt;</code> Deixe as classes de <code>pink-text</code> <code>blue-text</code> <code>pink-text</code> em seu elemento <code>h1</code> . </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: Seu elemento <code>h1</code> deve ter a classe <code>pink-text</code> .
    testString: 'assert($("h1").hasClass("pink-text"), "Your <code>h1</code> element should have the class <code>pink-text</code>.");'
  - text: Seu elemento <code>h1</code> deve ter a classe <code>blue-text</code> .
    testString: 'assert($("h1").hasClass("blue-text"), "Your <code>h1</code> element should have the class <code>blue-text</code>.");'
  - text: Seu elemento <code>h1</code> deve ter o id de <code>orange-text</code> .
    testString: 'assert($("h1").attr("id") === "orange-text", "Your <code>h1</code> element should have the id of <code>orange-text</code>.");'
  - text: Dê ao seu elemento <code>h1</code> um estilo inline.
    testString: 'assert(document.querySelector("h1[style]"), "Give your <code>h1</code> element an inline style.");'
  - text: Seu elemento <code>h1</code> deve ser branco.
    testString: 'assert($("h1").css("color") === "rgb(255, 255, 255)", "Your <code>h1</code> element should be white.");'

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
  #orange-text {
    color: orange;
  }
  .pink-text {
    color: pink;
  }
  .blue-text {
    color: blue;
  }
</style>
<h1 id="orange-text" class="pink-text blue-text">Hello World!</h1>

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
