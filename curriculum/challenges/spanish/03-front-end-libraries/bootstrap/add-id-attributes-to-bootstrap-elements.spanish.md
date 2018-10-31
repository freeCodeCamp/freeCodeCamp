---
id: bad87fee1348bd9aec908853
title: Add id Attributes to Bootstrap Elements
challengeType: 0
videoUrl: ''
localeTitle: Añadir atributos de ID a los elementos Bootstrap
---

## Description
<section id="description"> Recuerde que además de los atributos de clase, puede asignar a cada uno de sus elementos un atributo <code>id</code> . Cada id debe ser único para un elemento específico y se debe utilizar solo una vez por página. Demos una identificación única a cada uno de nuestros elementos <code>div</code> de clase <code>well</code> . Recuerde que puede asignar a un elemento una identificación como esta: <code>&lt;div class=&quot;well&quot; id=&quot;center-well&quot;&gt;</code> Déle a la caja de la izquierda el id del <code>left-well</code> . Dale a la caja de la derecha la identificación del <code>right-well</code> . </section>

## Instructions
<section id="instructions">
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: Darle a su izquierda <code>well</code> el id de <code>left-well</code> .
    testString: 'assert($(".col-xs-6").children("#left-well") && $(".col-xs-6").children("#left-well").length > 0, "Give your left <code>well</code> the id of <code>left-well</code>.");'
  - text: Dar a su derecha <code>well</code> el id de <code>right-well</code> .
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
