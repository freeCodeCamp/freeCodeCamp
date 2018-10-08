---
id: bad87fee1348bd9aed008826
title: Target Even Elements Using jQuery
localeTitle: Destinar los elementos pares usando jQuery
required:
  - link: 'https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.2.0/animate.css'
challengeType: 6
---

## Description
<section id='description'> 
También puede apuntar elementos según sus posiciones usando <code>:odd</code> o <code>:even</code> selectores <code>:even</code> . 
Tenga en cuenta que jQuery tiene un índice de cero, lo que significa que el primer elemento de una selección tiene una posición de 0. Esto puede ser un poco confuso, ya que, en contra de la intuición,: <code>:odd</code> selecciona el segundo elemento (posición 1), cuarto elemento (posición 3). ), y así. 
Así es como se enfocaría en todos los elementos impares con la clase <code>target</code> y les daría clases: 
<code>$(&quot;.target:odd&quot;).addClass(&quot;animated shake&quot;);</code> 
Intenta seleccionar todos los elementos <code>target</code> uniformes y dales las clases de <code>animated</code> y <code>shake</code> . Recuerde que <strong>incluso se</strong> refiere a la posición de los elementos con un sistema basado en cero en mente. 
</section>

## Instructions
<section id='instructions'> 

</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: Todos los elementos de <code>target</code> que jQuery considera que están parejos deben sacudirse.
    testString: 'assert($(".target:even").hasClass("animated") && $(".target:even").hasClass("shake"), "All of the <code>target</code> elements that jQuery considers to be even should shake.");'
  - text: &#39;Deberías usar el selector <code>:even</code> para modificar estos elementos&#39;.
    testString: 'assert(code.match(/\:even/g), "You should use the <code>&#58;even</code> selector to modify these elements.");'
  - text: Solo use jQuery para agregar estas clases al elemento.
    testString: 'assert(code.match(/\$\(".target:even"\)/g) || code.match(/\$\(".target:even"\)/g) || code.match(/\$\(".target"\).filter\(":even"\)/g) || code.match(/\$\(".target"\).filter\(":even"\)/g), "Only use jQuery to add these classes to the element.");'

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
    $("#right-well").children().css("color", "orange");
    $("#left-well").children().css("color", "green");
    $(".target:nth-child(2)").addClass("animated bounce");

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
