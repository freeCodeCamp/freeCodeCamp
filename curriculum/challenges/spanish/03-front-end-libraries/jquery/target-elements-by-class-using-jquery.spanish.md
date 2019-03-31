---
id: bad87fee1348bd9aedc08826
title: Target Elements by Class Using jQuery
required:
  - link: 'https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.2.0/animate.css'
challengeType: 6
videoUrl: ''
localeTitle: Elementos de destino por clase usando jQuery
---

## Description
<section id="description"> ¿Ves cómo hicimos rebotar todos los elementos de tus <code>button</code> ? Los seleccionamos con <code>$(&quot;button&quot;)</code> , luego les agregamos algunas clases de CSS con <code>.addClass(&quot;animated bounce&quot;);</code> . Acabas de usar la función <code>.addClass()</code> de jQuery, que permite agregar clases a los elementos. En primer lugar, vamos a orientar los <code>div</code> elementos con la clase <code>well</code> mediante el uso de el <code>$(&quot;.well&quot;)</code> selector. Ten en cuenta que, al igual que con las declaraciones de CSS, se escribe un <code>.</code> antes del nombre de la clase. Luego usa la función <code>.addClass()</code> de jQuery para agregar las clases <code>animated</code> y <code>shake</code> . Por ejemplo, puedes hacer que todos los elementos con la clase <code>text-primary</code> se sacudan agregando lo siguiente a su <code>document ready function</code> : <code>$(&quot;.text-primary&quot;).addClass(&quot;animated shake&quot;);</code> </section>

## Instructions
<section id="instructions">
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: Utilice el jQuery <code>addClass()</code> la función de dar las clases <code>animated</code> y <code>shake</code> a todos sus elementos con la clase <code>well</code> .
    testString: 'assert($(".well").hasClass("animated") && $(".well").hasClass("shake"), "Use the jQuery <code>addClass&#40&#41</code> function to give the classes <code>animated</code> and <code>shake</code> to all your elements with the class <code>well</code>.");'
  - text: Solo use jQuery para agregar estas clases al elemento.
    testString: 'assert(!code.match(/class\.\*animated/g), "Only use jQuery to add these classes to the element.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='html-seed'>

```html
<script>
  $(document).ready(function() {
    $("button").addClass("animated bounce");
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
