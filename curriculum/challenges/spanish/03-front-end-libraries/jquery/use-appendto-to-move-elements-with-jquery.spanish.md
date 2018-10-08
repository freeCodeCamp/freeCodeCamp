---
id: bad87fee1348bd9aed608826
title: Use appendTo to Move Elements with jQuery
localeTitle: Usa appendTo para mover elementos con jQuery
challengeType: 6
---

## Description
<section id='description'> 
Ahora intentemos mover elementos de un <code>div</code> a otro. 
jQuery tiene una función llamada <code>appendTo()</code> que le permite seleccionar elementos HTML y agregarlos a otro elemento. 
Por ejemplo, si quisiéramos mover <code>target4</code> de nuestro pozo derecho a nuestro pozo izquierdo, <code>$(&quot;#target4&quot;).appendTo(&quot;#left-well&quot;);</code> : 
<code>$(&quot;#target4&quot;).appendTo(&quot;#left-well&quot;);</code> 
Mueva su elemento <code>target2</code> de su <code>left-well</code> a su <code>right-well</code> . 
</section>

## Instructions
<section id='instructions'> 

</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: Tu elemento <code>target2</code> no debe estar dentro de tu <code>left-well</code> .
    testString: 'assert($("#left-well").children("#target2").length === 0, "Your <code>target2</code> element should not be inside your <code>left-well</code>.");'
  - text: Tu elemento <code>target2</code> debe estar dentro de tu <code>right-well</code> .
    testString: 'assert($("#right-well").children("#target2").length > 0, "Your <code>target2</code> element should be inside your <code>right-well</code>.");'
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
