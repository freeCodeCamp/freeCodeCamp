---
id: bad87fee1348bd9aec908854
title: Label Bootstrap Wells
challengeType: 0
videoUrl: ''
localeTitle: Etiqueta Bootstrap Wells
---

## Description
<section id="description"> Para mayor claridad, etiquetemos nuestras cajas con sus identificadores. Por encima de la caja-izquierda (left-well), dentro de su elemento <code>div</code> <code>col-xs-6</code> , agregue un elemento <code>h4</code> con el texto <code>#left-well</code> . Por encima de su caja-derecha(right-well), dentro de su elemento <code>div</code> <code>col-xs-6</code> , agregue un elemento <code>h4</code> con el texto <code>#right-well</code> . </section>

## Instructions
<section id="instructions">
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: Agregue un elemento <code>h4</code> a cada uno de sus elementos <code>&lt;div class=&quot;col-xs-6&quot;&gt;</code> .
    testString: 'assert($(".col-xs-6").children("h4") && $(".col-xs-6").children("h4").length > 1, "Add an <code>h4</code> element to each of your <code>&#60;div class="col-xs-6"&#62;</code> elements.");'
  - text: 'Un elemento <code>h4</code> debe tener el texto <code>#left-well</code> .'
    testString: 'assert(new RegExp("#left-well","gi").test($("h4").text()), "One <code>h4</code> element should have the text <code>#left-well</code>.");'
  - text: 'Un elemento <code>h4</code> debe tener el texto <code>#right-well</code> .'
    testString: 'assert(new RegExp("#right-well","gi").test($("h4").text()), "One <code>h4</code> element should have the text <code>#right-well</code>.");'
  - text: Asegúrate de que todos tus elementos <code>h4</code> tengan etiquetas de cierre.
    testString: 'assert(code.match(/<\/h4>/g) && code.match(/<h4/g) && code.match(/<\/h4>/g).length === code.match(/<h4/g).length, "Make sure all your <code>h4</code> elements have closing tags.");'

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

      <div class="well" id="left-well">
        <button class="btn btn-default target"></button>
        <button class="btn btn-default target"></button>
        <button class="btn btn-default target"></button>
      </div>
    </div>
    <div class="col-xs-6">

      <div class="well" id="right-well">
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
