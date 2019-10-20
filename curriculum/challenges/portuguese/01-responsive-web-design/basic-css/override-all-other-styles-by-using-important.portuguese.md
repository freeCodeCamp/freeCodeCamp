---
id: bad87fee1348bd9aedf07756
title: Override All Other Styles by using Important
challengeType: 0
videoUrl: ''
localeTitle: Substituir todos os outros estilos usando Importante
---

## Description
<section id="description"> Yay! Acabamos de provar que os estilos inline irão substituir todas as declarações CSS no seu elemento <code>style</code> . Mas espere. Há uma última maneira de substituir o CSS. Este é o método mais poderoso de todos. Mas antes de fazermos isso, vamos falar sobre o motivo pelo qual você deseja substituir o CSS. Em muitas situações, você usará bibliotecas CSS. Estes podem substituir acidentalmente o seu próprio CSS. Então, quando você absolutamente precisa ter certeza de que um elemento tem CSS específico, você pode usar <code>!important</code> Vamos voltar à nossa declaração de classe de <code>pink-text</code> . Lembre-se de que nossa classe de <code>pink-text</code> foi substituída por declarações de classe, declarações de id e estilos inline subsequentes. </section>

## Instructions
<section id="instructions"> Vamos adicionar a palavra-chave <code>!important</code> para a declaração de cor do elemento de texto rosa para ter 100% de certeza de que o elemento <code>h1</code> será rosa. Um exemplo de como fazer isso é: <code>color: red !important;</code> </section>

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
  - text: 'Seu elemento <code>h1</code> deve ter o estilo de <code>color: white</code> inline <code>color: white</code> .'
    testString: 'assert(code.match(/<h1.*style/gi) && code.match(/<h1.*style.*color\s*?:/gi), "Your <code>h1</code> element should have the inline style of <code>color&#58; white</code>.");'
  - text: Sua declaração de classe de <code>pink-text</code> deve ter a palavra-chave <code>!important</code> para substituir todas as outras declarações.
    testString: 'assert(code.match(/\.pink-text\s*?\{[\s\S]*?color:.*pink.*!important\s*;?[^\.]*\}/g), "Your <code>pink-text</code> class declaration should have the <code>!important</code> keyword to override all other declarations.");'
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
<h1 id="orange-text" class="pink-text blue-text" style="color: white">Hello World!</h1>

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
