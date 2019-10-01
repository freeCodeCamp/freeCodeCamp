---
id: bad87fee1348bd9aec908853
title: Add id Attributes to Bootstrap Elements
challengeType: 0
videoUrl: ''
localeTitle: Adicionar atributos de identificação a elementos do bootstrap
---

## Description
<section id="description"> Lembre-se de que, além dos atributos de classe, você pode atribuir a cada um dos seus elementos um atributo <code>id</code> . Cada ID deve ser exclusivo para um elemento específico e usado apenas uma vez por página. Vamos dar um id único para cada um dos nossos elementos <code>div</code> da classe <code>well</code> . Lembre-se que você pode dar a um elemento um id como este: <code>&lt;div class=&quot;well&quot; id=&quot;center-well&quot;&gt;</code> Dê ao well à esquerda o id <code>left-well</code> . Dê ao well bem à direita, o id <code>right-well</code> . </section>

## Instructions
<section id="instructions">
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: Dê ao <code>well</code> à sua esquerda o id <code>left-well</code> .
    testString: 'assert($(".col-xs-6").children("#left-well") && $(".col-xs-6").children("#left-well").length > 0, "Give your left <code>well</code> the id of <code>left-well</code>.");'
  - text: Dê ao <code>well</code> à sua direita o id <code>right-well</code> .
    testString: 'assert($(".col-xs-6").children("#right-well") && $(".col-xs-6").children("#right-well").length > 0, "Give your right <code>well</code> the id of <code>right-well</code>.");'

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
      <div class="well">
        <button class="btn btn-default target"></button>
        <button class="btn btn-default target"></button>
        <button class="btn btn-default target"></button>
      </div>
    </div>
    <div class="col-xs-6">
      <div class="well">
        <button class="btn btn-default target"></button>
        <button class="btn btn-default target"></button>
        <button class="btn btn-default target"></button>
      </div>
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
