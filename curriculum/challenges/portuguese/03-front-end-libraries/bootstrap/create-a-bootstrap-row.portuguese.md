---
id: bad87fee1348bd9bec908846
title: Create a Bootstrap Row
challengeType: 0
videoUrl: ''
localeTitle: Criar uma linha de bootstrap
---

## Description
<section id="description"> Agora vamos criar uma linha do Bootstrap para nossos elementos in-line. Crie um elemento <code>div</code> abaixo da tag <code>h3</code> , com uma classe de <code>row</code> . </section>

## Instructions
<section id="instructions">
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: Adicione um elemento <code>div</code> abaixo do seu elemento <code>h3</code> .
    testString: 'assert(($("div").length > 1) && ($("div.row h3.text-primary").length == 0) && ($("div.row + h3.text-primary").length == 0) && ($("h3.text-primary + div.row").length > 0), "Add a <code>div</code> element below your <code>h3</code> element.");'
  - text: Seu elemento <code>div</code> deve ter a <code>row</code> classe
    testString: 'assert($("div").hasClass("row"), "Your <code>div</code> element should have the class <code>row</code>");'
  - text: Seu <code>row div</code> deve ser aninhado dentro do <code>container-fluid div</code>
    testString: 'assert($("div.container-fluid div.row").length > 0, "Your <code>row div</code> should be nested inside the <code>container-fluid div</code>");'
  - text: Certifique-se de que seu elemento <code>div</code> tenha uma tag de fechamento.
    testString: 'assert(code.match(/<\/div>/g) && code.match(/<div/g) && code.match(/<\/div>/g).length === code.match(/<div/g).length, "Make sure your <code>div</code> element has a closing tag.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='html-seed'>

```html
<div class="container-fluid">
  <h3 class="text-primary text-center">jQuery Playground</h3>

</div>

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
