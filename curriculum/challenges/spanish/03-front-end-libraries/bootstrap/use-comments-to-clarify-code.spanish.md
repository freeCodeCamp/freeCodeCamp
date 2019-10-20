---
id: bad87fee1348bd9aec908857
title: Use Comments to Clarify Code
challengeType: 0
videoUrl: ''
localeTitle: Utilizar comentarios para clarificar el código
---

## Description
<section id="description"> Cuando comencemos a usar jQuery, modificaremos los elementos HTML sin necesidad de cambiarlos realmente en HTML. Asegurémonos de que todos sepan que no deberían modificar directamente ninguno de estos códigos. Recuerda que se puede comenzar un comentario con <code>&lt;!--</code> y terminar el mismo con <code>--&gt;</code> Agrega un comentario en la parte superior de su código HTML que diga <code>Only change code above this line.</code> </section>

## Instructions
<section id="instructions">
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: Comienza un comentario con <code>&lt;!--</code> en la parte superior de tu HTML.
    testString: 'assert(code.match(/^\s*<!--/), "Start a comment with <code>&#60;!--</code> at the top of your HTML.");'
  - text: Su comentario debe tener el texto <code>Only change code above this line</code> .
    testString: 'assert(code.match(/<!--(?!(>|->|.*-->.*this line))\s*.*this line.*\s*-->/gi), "Your comment should have the text <code>Only change code above this line</code>.");'
  - text: Asegúrese de cerrar su comentario con <code>--&gt;</code> .
    testString: 'assert(code.match(/-->.*\n+.+/g), "Be sure to close your comment with <code>--&#62;</code>.");'
  - text: Debes tener el mismo número de abridores y cerradores de comentarios.
    testString: 'assert(code.match(/<!--/g).length === code.match(/-->/g).length, "You should have the same number of comment openers and closers.");'

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
      <h4>#left-well</h4>
      <div class="well" id="left-well">
        <button class="btn btn-default target" id="target1">#target1</button>
        <button class="btn btn-default target" id="target2">#target2</button>
        <button class="btn btn-default target" id="target3">#target3</button>
      </div>
    </div>
    <div class="col-xs-6">
      <h4>#right-well</h4>
      <div class="well" id="right-well">
        <button class="btn btn-default target" id="target4">#target4</button>
        <button class="btn btn-default target" id="target5">#target5</button>
        <button class="btn btn-default target" id="target6">#target6</button>
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
