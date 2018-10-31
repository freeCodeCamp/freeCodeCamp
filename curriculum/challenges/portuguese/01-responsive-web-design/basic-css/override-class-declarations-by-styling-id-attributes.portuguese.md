---
id: bad87fee1348bd8aedf06756
title: Override Class Declarations by Styling ID Attributes
challengeType: 0
videoUrl: ''
localeTitle: Substituir Declarações de Classe por Atributos de ID de Estilo
---

## Description
<section id="description"> Acabamos de provar que os navegadores lêem CSS de cima para baixo. Isso significa que, no caso de um conflito, o navegador usará a última declaração CSS. Mas ainda não terminamos. Existem outras maneiras de substituir o CSS. Você se lembra de atributos id? Vamos substituir suas classes de <code>blue-text</code> <code>pink-text</code> <code>blue-text</code> e tornar seu elemento <code>h1</code> laranja, dando um id ao elemento <code>h1</code> e, em seguida, estilizando esse id. </section>

## Instructions
<section id="instructions"> Dê ao seu elemento <code>h1</code> o atributo <code>id</code> do <code>orange-text</code> . Lembre-se, os estilos de id são assim: <code>&lt;h1 id=&quot;orange-text&quot;&gt;</code> Deixe as classes de <code>pink-text</code> <code>blue-text</code> <code>pink-text</code> em seu elemento <code>h1</code> . Crie uma declaração CSS para o seu ID de <code>orange-text</code> em seu elemento de <code>style</code> . Aqui está um exemplo do que isso parece: <blockquote> # brown-text { <br> cor marrom; <br> } </blockquote> Nota: Não importa se você declara este CSS acima ou abaixo da classe pink-text, já que o atributo id sempre terá precedência. </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: Seu elemento <code>h1</code> deve ter a classe <code>pink-text</code> .
    testString: 'assert($("h1").hasClass("pink-text"), "Your <code>h1</code> element should have the class <code>pink-text</code>.");'
  - text: Seu elemento <code>h1</code> deve ter a classe <code>blue-text</code> .
    testString: 'assert($("h1").hasClass("blue-text"), "Your <code>h1</code> element should have the class <code>blue-text</code>.");'
  - text: Dê ao seu elemento <code>h1</code> o id do <code>orange-text</code> .
    testString: 'assert($("h1").attr("id") === "orange-text", "Give your <code>h1</code> element the id of <code>orange-text</code>.");'
  - text: Deve haver apenas um elemento <code>h1</code> .
    testString: 'assert(($("h1").length === 1), "There should be only one <code>h1</code> element.");'
  - text: Crie uma declaração CSS para o seu ID de <code>orange-text</code>
    testString: 'assert(code.match(/#orange-text\s*{/gi), "Create a CSS declaration for your <code>orange-text</code> id");'
  - text: Não dê ao seu <code>h1</code> nenhum atributo de <code>style</code> .
    testString: 'assert(!code.match(/<h1.*style.*>/gi), "Do not give your <code>h1</code> any <code>style</code> attributes.");'
  - text: Seu elemento <code>h1</code> deve ser laranja.
    testString: 'assert($("h1").css("color") === "rgb(255, 165, 0)", "Your <code>h1</code> element should be orange.");'

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
  .pink-text {
    color: pink;
  }
  .blue-text {
    color: blue;
  }
</style>
<h1 class="pink-text blue-text">Hello World!</h1>

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
