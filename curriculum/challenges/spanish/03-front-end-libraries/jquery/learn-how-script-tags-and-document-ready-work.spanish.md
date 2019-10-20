---
id: bad87fee1348bd9acdd08826
title: Learn How Script Tags and Document Ready Work
challengeType: 6
videoUrl: ''
localeTitle: Aprenda cómo funcionan las etiquetas de script y el documento listo
---

## Description
<section id="description"> Ahora estamos listos para aprender jQuery, la herramienta de JavaScript más popular de todos los tiempos. Antes de que podamos comenzar a usar jQuery, necesitamos agregar algunas cosas a nuestro HTML. Primero, agregue un elemento de <code>script</code> en la parte superior de su página. Asegúrate de cerrarla en la siguiente línea. Su navegador ejecutará cualquier JavaScript dentro de un elemento de <code>script</code> , incluido jQuery. Dentro de su elemento de <code>script</code> , agregue este código: <code>$(document).ready(function() {</code> a su <code>script</code> . Luego ciérrelo en la siguiente línea (aún dentro de su elemento de <code>script</code> ) con: <code>});</code> Aprenderemos más sobre las <code>functions</code> más adelante. Lo importante que debe saber es que el código que ingrese dentro de esta <code>function</code> se ejecutará tan pronto como su navegador haya cargado su página. Esto es importante porque sin su <code>document ready function</code> , su código puede ejecutarse antes de que se genere su HTML, lo que causaría errores. </section>

## Instructions
<section id="instructions">
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: Cree un elemento de <code>script</code> asegurándose de que sea válido y tenga una etiqueta de cierre.
    testString: 'assert(code.match(/<\/script\s*>/g) && code.match(/<script(\sasync|\sdefer)*(\s(charset|src|type)\s*=\s*["\"]+[^"\"]*["\"]+)*(\sasync|\sdefer)*\s*>/g) && code.match(/<\/script\s*>/g).length === code.match(/<script(\sasync|\sdefer)*(\s(charset|src|type)\s*=\s*["\"]+[^"\"]*["\"]+)*(\sasync|\sdefer)*\s*>/g).length, "Create a <code>script</code> element making sure it is valid and has a closing tag.");'
  - text: 'Debe agregar <code>$(document).ready (function() {</code> al principio de su elemento de <code>script</code> .'
    testString: 'assert(code.match(/\$\s*?\(\s*?document\s*?\)\.ready\s*?\(\s*?function\s*?\(\s*?\)\s*?\{/g), "You should add <code>$&#40;document&#41;.ready<wbr>&#40;function&#40;&#41; {</code> to the beginning of your <code>script</code> element.");'
  - text: 'Cierre su <code>$(document).ready (function() {</code> function with <code>});</code>'
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
