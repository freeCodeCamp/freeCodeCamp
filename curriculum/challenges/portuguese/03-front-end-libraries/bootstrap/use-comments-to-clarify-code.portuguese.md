---
id: bad87fee1348bd9aec908857
title: Use Comments to Clarify Code
challengeType: 0
videoUrl: ''
localeTitle: Use comentários para esclarecer o código
---

## Description
<section id="description"> Quando começarmos a usar o jQuery, modificaremos os elementos HTML sem precisar alterá-los em HTML. Vamos nos certificar de que todos saibam que não devem modificar nada desse código diretamente. Lembre-se de que você pode começar um comentário com <code>&lt;!--</code> e terminar um comentário com <code>--&gt;</code> Adicionar um comentário na parte superior do seu HTML que diz <code>Only change code above this line.</code> </section>

## Instructions
<section id="instructions">
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: Comece um comentário com <code>&lt;!--</code> no topo do seu HTML.
    testString: 'assert(code.match(/^\s*<!--/), "Start a comment with <code>&#60;!--</code> at the top of your HTML.");'
  - text: Seu comentário deve ter o texto <code>Only change code above this line</code> .
    testString: 'assert(code.match(/<!--(?!(>|->|.*-->.*this line))\s*.*this line.*\s*-->/gi), "Your comment should have the text <code>Only change code above this line</code>.");'
  - text: Certifique-se de fechar o seu comentário com <code>--&gt;</code> .
    testString: 'assert(code.match(/-->.*\n+.+/g), "Be sure to close your comment with <code>--&#62;</code>.");'
  - text: Você deve ter o mesmo número de abridores e fechadores de comentários.
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
