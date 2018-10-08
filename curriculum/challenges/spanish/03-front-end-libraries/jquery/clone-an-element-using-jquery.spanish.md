---
id: bad87fee1348bd9aed508826
title: Clone an Element Using jQuery
localeTitle: Clonar un elemento usando jQuery
challengeType: 6
---

## Description
<section id='description'> 
Además de mover elementos, también puede copiarlos de un lugar a otro. 
jQuery tiene una función llamada <code>clone()</code> que hace una copia de un elemento. 
Por ejemplo, si quisiéramos copiar <code>target2</code> de nuestro <code>left-well</code> a nuestro <code>left-well</code> <code>right-well</code> , <code>$(&quot;#target2&quot;).clone().appendTo(&quot;#right-well&quot;);</code> : 
<code>$(&quot;#target2&quot;).clone().appendTo(&quot;#right-well&quot;);</code> 
¿Notaste que esto involucra pegar dos funciones de jQuery? Esto se denomina <code>function chaining</code> y es una forma conveniente de hacer las cosas con jQuery. 
Clone su elemento <code>target5</code> y <code>target5</code> a su <code>left-well</code> . 
</section>

## Instructions
<section id='instructions'> 

</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: Tu elemento <code>target5</code> debería estar dentro de tu <code>right-well</code> .
    testString: 'assert($("#right-well").children("#target5").length > 0, "Your <code>target5</code> element should be inside your <code>right-well</code>.");'
  - text: Una copia de su elemento <code>target5</code> también debe estar dentro de su <code>left-well</code> .
    testString: 'assert($("#left-well").children("#target5").length > 0, "A copy of your <code>target5</code> element should also be inside your <code>left-well</code>.");'
  - text: Solo usa jQuery para mover estos elementos.
    testString: 'assert(!code.match(/class.*animated/g), "Only use jQuery to move these elements.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='html-seed'>

```html
<script>
  $(document).ready(function() {
    $("#target1").css("color", "red");
    $("#target1").prop("disabled", true);
    $("#target4").remove();
    $("#target2").appendTo("#right-well");

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
