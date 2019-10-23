---
id: bad87fee1348bd9acdd08826
title: Learn How Script Tags and Document Ready Work
challengeType: 6
videoUrl: ''
localeTitle: Aprenda como as tags de script e o trabalho pronto para documentos
---

## Description
<section id="description"> Agora estamos prontos para aprender o jQuery, a ferramenta JavaScript mais popular de todos os tempos. Antes de começarmos a usar o jQuery, precisamos adicionar algumas coisas ao nosso HTML. Primeiro, adicione um elemento de <code>script</code> no topo da sua página. Certifique-se de fechá-lo na linha seguinte. Seu navegador executará qualquer JavaScript dentro de um elemento de <code>script</code> , incluindo jQuery. Dentro do seu elemento de <code>script</code> , adicione este código: <code>$(document).ready(function() {</code> ao seu <code>script</code> . Em seguida, feche-o na seguinte linha (ainda dentro do seu elemento de <code>script</code> ) com: <code>});</code> Aprenderemos mais sobre <code>functions</code> mais tarde. O importante é saber que o código inserido nessa <code>function</code> será executado assim que o navegador carregar sua página. Isso é importante porque, sem a <code>document ready function</code> , seu código pode ser executado antes de seu HTML ser renderizado, o que causaria bugs. </section>

## Instructions
<section id="instructions">
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: 'Crie um elemento de <code>script</code> , certificando-se de que seja válido e tenha uma tag de fechamento.'
    testString: 'assert(code.match(/<\/script\s*>/g) && code.match(/<script(\sasync|\sdefer)*(\s(charset|src|type)\s*=\s*["\"]+[^"\"]*["\"]+)*(\sasync|\sdefer)*\s*>/g) && code.match(/<\/script\s*>/g).length === code.match(/<script(\sasync|\sdefer)*(\s(charset|src|type)\s*=\s*["\"]+[^"\"]*["\"]+)*(\sasync|\sdefer)*\s*>/g).length, "Create a <code>script</code> element making sure it is valid and has a closing tag.");'
  - text: 'Você deve adicionar <code>$(document).ready (function() {</code> ao início do seu elemento de <code>script</code> .'
    testString: 'assert(code.match(/\$\s*?\(\s*?document\s*?\)\.ready\s*?\(\s*?function\s*?\(\s*?\)\s*?\{/g), "You should add <code>$&#40;document&#41;.ready<wbr>&#40;function&#40;&#41; {</code> to the beginning of your <code>script</code> element.");'
  - text: 'Feche sua função <code>$(document).ready (function() {</code> function with <code>});</code>'
    testString: 'assert(code.match(/\n*?\s*?\}\s*?\);/g), "Close your <code>$&#40;document&#41;.ready<wbr>&#40;function&#40;&#41; {</code> function with <code>}&#41;;</code>");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='html-seed'>

```html
<!-- Only change code above this line. -->

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
