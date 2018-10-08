---
id: bad87fee1348bd9aed108826
title: Target a Specific Child of an Element Using jQuery
localeTitle: Apunta a un niño específico de un elemento usando jQuery
required:
  - link: 'https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.2.0/animate.css'
challengeType: 6
---

## Description
<section id='description'> 
Ha visto por qué los atributos de identificación son tan convenientes para la selección de objetivos con los selectores jQuery. Pero no siempre tendrás tan buenos identificadores con los que trabajar. 
Afortunadamente, jQuery tiene algunos otros trucos para apuntar a los elementos correctos. 
jQuery usa los selectores de CSS para apuntar a los elementos. El selector de CSS <code>target:nth-child(n)</code> permite seleccionar todos los elementos nth con la clase de destino o el tipo de elemento. 
Así es como le darías al tercer elemento en cada pozo la clase de rebote: 
<code>$(&quot;.target:nth-child(3)&quot;).addClass(&quot;animated bounce&quot;);</code> 
Haz que el segundo niño en cada uno de tus elementos de pozo rebote. Debes seleccionar los elementos de los hijos con la clase <code>target</code> . 
</section>

## Instructions
<section id='instructions'> 

</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: El segundo elemento en sus elementos <code>target</code> debe rebotar.
    testString: 'assert($(".target:nth-child(2)").hasClass("animated") && $(".target:nth-child(2)").hasClass("bounce"), "The second element in your <code>target</code> elements should bounce.");'
  - text: Solo dos elementos deben rebotar.
    testString: 'assert($(".animated.bounce").length === 2, "Only two elements should bounce.");'
  - text: &#39;Debería usar el selector <code>:nth-child()</code> para modificar estos elementos.&#39;
    testString: 'assert(code.match(/\:nth-child\(/g), "You should use the <code>&#58;nth-child&#40&#41</code> selector to modify these elements.");'
  - text: Solo use jQuery para agregar estas clases al elemento.
    testString: 'assert(code.match(/\$\(".target:nth-child\(2\)"\)/g) || code.match(/\$\(".target:nth-child\(2\)"\)/g) || code.match(/\$\(".target"\).filter\(":nth-child\(2\)"\)/g) || code.match(/\$\(".target"\).filter\(":nth-child\(2\)"\)/g), "Only use jQuery to add these classes to the element.");'

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
