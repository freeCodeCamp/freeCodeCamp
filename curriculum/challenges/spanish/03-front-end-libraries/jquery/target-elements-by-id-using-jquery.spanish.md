---
id: bad87fee1348bd9aeda08826
title: Target Elements by id Using jQuery
localeTitle: Elementos de destino por id usando jQuery
required:
  - link: 'https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.2.0/animate.css'
challengeType: 6
---

## Description
<section id='description'>
También puede apuntar elementos por sus atributos de identificación.
Primero apunte el elemento de su <code>button</code> con el id <code>target3</code> usando el selector <code>$(&quot;#target3&quot;)</code> .
Tenga en cuenta que, al igual que con las declaraciones de CSS, escribe un <code>#</code> antes del nombre del ID.
Luego use la función <code>.addClass()</code> jQuery para agregar las clases <code>animated</code> y <code>fadeOut</code> .
Así es como harías que el elemento del <code>button</code> con el id <code>target6</code> desvanezca:
<code>$(&quot;#target6&quot;).addClass(&quot;animated fadeOut&quot;)</code> .
</section>

## Instructions
<section id='instructions'>

</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: 'Seleccione el elemento del <code>button</code> con el <code>id</code> de <code>target3</code> y use la función jQuery <code>addClass()</code> para darle la clase de <code>animated</code> .'
    testString: 'assert($("#target3").hasClass("animated"), "Select the <code>button</code> element with the <code>id</code> of <code>target3</code> and use the jQuery <code>addClass&#40&#41</code> function to give it the class of <code>animated</code>.");'
  - text: ' <code>target3</code> al elemento con el id <code>target3</code> y usa la función jQuery <code>addClass()</code> para darle a la clase <code>fadeOut</code> .'
    testString: 'assert(($("#target3").hasClass("fadeOut") || $("#target3").hasClass("fadeout"))  && code.match(/\$\(\s*.#target3.\s*\)/g), "Target the element with the id <code>target3</code> and use the jQuery <code>addClass&#40&#41</code> function to give it the class <code>fadeOut</code>.");'
  - text: Solo use jQuery para agregar estas clases al elemento.
    testString: 'assert(!code.match(/class.*animated/g), "Only use jQuery to add these classes to the element.");'

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
