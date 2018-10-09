---
id: bad87fee1348bd9bedc08826
title: Target HTML Elements with Selectors Using jQuery
localeTitle: Destinar elementos HTML con selectores utilizando jQuery
required:
  - link: 'https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.2.0/animate.css'
challengeType: 6
---

## Description
<section id='description'>
Ahora tenemos una <code>document ready function</code> .
Ahora vamos a escribir nuestra primera declaración jQuery. Todas las funciones de jQuery comienzan con un <code>$</code> , generalmente conocido como <code>dollar sign operator</code> , o como <code>bling</code> .
jQuery a menudo selecciona un elemento HTML con un <code>selector</code> , luego le hace algo a ese elemento.
Por ejemplo, hagamos que todos los elementos de tus <code>button</code> reboten. Solo agregue este código dentro de su función de documento listo:
<code>$(&quot;button&quot;).addClass(&quot;animated bounce&quot;);</code>
Tenga en cuenta que ya hemos incluido la biblioteca jQuery y la biblioteca Animate.css en segundo plano para que pueda usarlas en el editor. Así que estás utilizando jQuery para aplicar la clase de <code>bounce</code> Animate.css a los elementos de tu <code>button</code> .
</section>

## Instructions
<section id='instructions'>

</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: 'Use el jQuery <code>addClass()</code> la función de dar las clases <code>animated</code> y <code>bounce</code> a sus <code>button</code> elementos.'
    testString: 'assert($("button").hasClass("animated") && $("button").hasClass("bounce"), "Use the jQuery <code>addClass&#40&#41</code> function to give the classes <code>animated</code> and <code>bounce</code> to your <code>button</code> elements.");'
  - text: Solo use jQuery para agregar estos colores al elemento.
    testString: 'assert(!code.match(/class.*animated/g), "Only use jQuery to add these colors to the element.");'
  - text: Su código jQuery debe estar dentro de <code>$(document).ready();</code> función.
    testString: 'assert(code.match(/\$\(document\)\.ready\(function.*(\s|\n)*.*button.*.addClass.*\);/g), "Your jQuery code should be within the <code>$(document).ready();</code> function.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='html-seed'>

```html
<script>
  $(document).ready(function() {

  });
</script>

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
