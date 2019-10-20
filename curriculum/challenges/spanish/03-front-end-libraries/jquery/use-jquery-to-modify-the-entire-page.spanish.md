---
id: bad87fee1348bd9aecb08826
title: Use jQuery to Modify the Entire Page
required:
  - link: 'https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.2.0/animate.css'
challengeType: 6
videoUrl: ''
localeTitle: Usa jQuery para modificar la página completa
---

## Description
<section id="description"> Hemos terminado de jugar con nuestro patio de juegos jQuery. ¡Vamos a derribarlo! jQuery también puede apuntar al elemento del <code>body</code> . Así es como haríamos que todo el cuerpo se desvanezca: <code>$(&quot;body&quot;).addClass(&quot;animated fadeOut&quot;);</code> Pero hagamos algo más dramático. Agrega las clases <code>animated</code> y <code>hinge</code> a tu <code>body</code> . </section>

## Instructions
<section id="instructions">
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: Agrega las clases <code>animated</code> y <code>hinge</code> a tu <code>body</code> .
    testString: 'assert($("body").hasClass("animated") && $("body").hasClass("hinge"), "Add the classes <code>animated</code> and <code>hinge</code> to your <code>body</code> element.");'

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
    $(".target:even").addClass("animated shake");

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
