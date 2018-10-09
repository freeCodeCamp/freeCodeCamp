---
id: bad87fee1348bd9aed208826
title: Target the Children of an Element Using jQuery
localeTitle: Apunta a los hijos de un elemento usando jQuery
challengeType: 6
---

## Description
<section id='description'>
Cuando los elementos HTML se colocan un nivel debajo de otro, se denominan <code>children</code> de ese elemento. Por ejemplo, los elementos de los botones en este desafío con el texto &quot;# destino1&quot;, &quot;# destino2&quot;, y &quot;# destino3&quot; son todos <code>children</code> de la <code>&lt;div class=&quot;well&quot; id=&quot;left-well&quot;&gt;</code> elemento.
jQuery tiene una función llamada <code>children()</code> que le permite acceder a los hijos de cualquier elemento que haya seleccionado.
Este es un ejemplo de cómo usaría la función <code>children()</code> para dar a los niños de su elemento de <code>left-well</code> el color <code>blue</code> :
<code>$(&quot;#left-well&quot;).children().css(&quot;color&quot;, &quot;blue&quot;)</code>
</section>

## Instructions
<section id='instructions'>
Dale a todos los niños de tu elemento de <code>right-well</code> el color naranja.
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: 'Todos los niños de <code>#right-well</code> deben tener texto naranja'
    testString: 'assert($("#right-well").children().css("color") === "rgb(255, 165, 0)", "All children of <code>#right-well</code> should have orange text.");'
  - text: 'Deberías usar la función <code>children()</code> para modificar estos elementos.'
    testString: 'assert(code.match(/\.children\(\)\.css/g), "You should use the <code>children&#40&#41</code> function to modify these elements.");'
  - text: Solo use jQuery para agregar estas clases al elemento.
    testString: 'assert(code.match(/<div class="well" id="right-well">/g), "Only use jQuery to add these classes to the element.");'

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
    $("#target5").clone().appendTo("#left-well");
    $("#target1").parent().css("background-color", "red");

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
