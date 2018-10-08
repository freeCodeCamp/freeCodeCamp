---
id: bad87fee1348bd9aed808826
title: Disable an Element Using jQuery
localeTitle: Deshabilitar un elemento usando jQuery
challengeType: 6
---

## Description
<section id='description'> 
También puede cambiar las propiedades no CSS de elementos HTML con jQuery. Por ejemplo, puede deshabilitar botones. 
Cuando desactiva un botón, se vuelve de color gris y ya no se puede hacer clic en él. 
jQuery tiene una función llamada <code>.prop()</code> que le permite ajustar las propiedades de los elementos. 
Así es como deshabilitaría todos los botones: 
<code>$(&quot;button&quot;).prop(&quot;disabled&quot;, true);</code> 
Deshabilita solo el botón <code>target1</code> . 
</section>

## Instructions
<section id='instructions'> 

</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: Desactiva tu botón <code>target1</code> .
    testString: 'assert($("#target1") && $("#target1").prop("disabled") && code.match(/[""]disabled[""],( true|true)/g), "Disable your <code>target1</code> button.");'
  - text: No deshabilite ningún otro botón.
    testString: 'assert($("#target2") && !$("#target2").prop("disabled"), "Do not disable any other buttons.");'
  - text: Solo use jQuery para agregar estas clases al elemento.
    testString: 'assert(!code.match(/disabled[^<]*>/g), "Only use jQuery to add these classes to the element.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='html-seed'>

```html
<script>
  $(document).ready(function() {
    $("#target1").css("color", "red");

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
