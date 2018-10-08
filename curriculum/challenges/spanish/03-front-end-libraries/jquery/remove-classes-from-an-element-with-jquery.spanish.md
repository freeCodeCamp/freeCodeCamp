---
id: bad87fee1348bd9aed918626
title: Remove Classes from an Element with jQuery
localeTitle: Eliminar clases de un elemento con jQuery
required:
  - link: 'https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.2.0/animate.css'
challengeType: 6
---

## Description
<section id='description'> 
De la misma manera que puede agregar clases a un elemento con la función <code>addClass()</code> jQuery, puede eliminarlas con la función <code>removeClass()</code> jQuery. 
Así es como haría esto para un botón específico: 
<code>$(&quot;#target2&quot;).removeClass(&quot;btn-default&quot;);</code> 
<code>btn-default</code> clase <code>btn-default</code> de todos nuestros elementos de <code>button</code> . 
</section>

## Instructions
<section id='instructions'> 

</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: Elimine la clase <code>btn-default</code> de todos sus elementos de <code>button</code> .
    testString: 'assert($(".btn-default").length === 0, "Remove the <code>btn-default</code> class from all of your <code>button</code> elements.");'
  - text: Utilice solo jQuery para eliminar esta clase del elemento.
    testString: 'assert(code.match(/btn btn-default/g), "Only use jQuery to remove this class from the element.");'
  - text: Sólo elimine la clase <code>btn-default</code> .
    testString: 'assert(code.match(/\.[\v\s]*removeClass[\s\v]*\([\s\v]*("|")\s*btn-default\s*("|")[\s\v]*\)/gm), "Only remove the <code>btn-default</code> class.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='html-seed'>

```html
<script>
  $(document).ready(function() {
    $("button").addClass("animated bounce");
    $(".well").addClass("animated shake");
    $("#target3").addClass("animated fadeOut");

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
