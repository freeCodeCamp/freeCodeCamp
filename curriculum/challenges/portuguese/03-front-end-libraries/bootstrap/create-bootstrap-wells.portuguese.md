---
id: bad87fee1348bd9aec908848
title: Create Bootstrap Wells
challengeType: 0
videoUrl: ''
localeTitle: Criar poços de bootstrap
---

## Description
<section id="description"> Bootstrap tem uma classe chamada <code>well</code> que pode criar uma sensação visual de profundidade para suas colunas. Aninhe um elemento <code>div</code> com a classe <code>well</code> dentro de cada um dos seus elementos <code>col-xs-6</code> <code>div</code> . </section>

## Instructions
<section id="instructions">
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: Adicione um elemento <code>div</code> com a classe <code>well</code> dentro de cada um dos seus elementos <code>div</code> com a classe <code>&quot;col-xs-6&quot;</code>
    testString: 'assert($("div.col-xs-6").not(":has(>div.well)").length < 1, "Add a <code>div</code> element with the class <code>well</code> inside each of your <code>div</code> elements with the class <code>"col-xs-6"</code>");'
  - text: Aninhe ambos os elementos <code>div</code> com a classe <code>&quot;col-xs-6&quot;</code> no seu elemento <code>div</code> com a classe <code>&quot;row&quot;</code> .
    testString: 'assert($("div.row > div.col-xs-6").length > 1, "Nest both of your <code>div</code> elements with the class <code>"col-xs-6"</code> within your <code>div</code> element with the class <code>"row"</code>.");'
  - text: Certifique-se de que todos os seus elementos <code>div</code> tenham tags de fechamento.
    testString: 'assert(code.match(/<\/div>/g) && code.match(/<div/g) && code.match(/<\/div>/g).length === code.match(/<div/g).length, "Make sure all your <code>div</code> elements have closing tags.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='html-seed'>

```html
<div class="container-fluid">
  <h3 class="text-primary text-center">jQuery Playground</h3>
  <div class="row">
    <div class="col-xs-6">

    </div>
    <div class="col-xs-6">

    </div>
  </div>
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
