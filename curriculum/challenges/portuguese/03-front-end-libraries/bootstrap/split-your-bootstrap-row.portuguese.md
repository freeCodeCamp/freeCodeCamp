---
id: bad87fee1348bd9aec908847
title: Split Your Bootstrap Row
challengeType: 0
videoUrl: ''
localeTitle: Dividir sua linha de bootstrap
---

## Description
<section id="description"> Agora que temos um Bootstrap Row, vamos dividi-lo em duas colunas para abrigar nossos elementos. Crie dois elementos <code>div</code> na sua linha, ambos com a classe <code>col-xs-6</code> . </section>

## Instructions
<section id="instructions">
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: Coloque dois elementos <code>div class=&quot;col-xs-6&quot;</code> dentro do elemento <code>div class=&quot;row&quot;</code> .
    testString: 'assert($("div.row > div.col-xs-6").length > 1, "Nest two <code>div class="col-xs-6"</code> elements within your <code>div class="row"</code> element.");'
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
