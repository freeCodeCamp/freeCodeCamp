---
id: bad87fee1348bd9aed308826
title: Target the Parent of an Element Using jQuery
challengeType: 6
videoUrl: ''
localeTitle: Apunta al padre de un elemento usando jQuery
---

## Description
<section id="description"> Cada elemento HTML tiene un elemento <code>parent</code> del cual <code>inherits</code> propiedades. Por ejemplo, su elemento <code>jQuery Playground</code> <code>h3</code> tiene el elemento principal de <code>&lt;div class=&quot;container-fluid&quot;&gt;</code> , que a su vez tiene el <code>body</code> principal. jQuery tiene una función llamada <code>parent()</code> que le permite acceder al padre de cualquier elemento que haya seleccionado. Este es un ejemplo de cómo usaría la función <code>parent()</code> si quisiera darle al elemento padre del elemento del <code>left-well</code> un color de fondo azul: <code>$(&quot;#left-well&quot;).parent().css(&quot;background-color&quot;, &quot;blue&quot;)</code> <code>#target1</code> al padre del elemento <code>#target1</code> un color de fondo rojo. </section>

## Instructions
<section id="instructions">
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: Su elemento de <code>left-well</code> debe tener un fondo rojo.
    testString: 'assert($("#left-well").css("background-color") === "red" || $("#left-well").css("background-color") === "rgb(255, 0, 0)" || $("#left-well").css("background-color").toLowerCase() === "#ff0000" || $("#left-well").css("background-color").toLowerCase() === "#f00", "Your <code>left-well</code> element should have a red background.");'
  - text: Debe usar la función <code>.parent()</code> para modificar este elemento.
    testString: 'assert(code.match(/\.parent\s*\(\s*\)\s*\.css/g), "You should use the <code>&#46;parent&#40;&#41;</code> function to modify this element.");'
  - text: 'El método <code>.parent()</code> debe llamarse en el elemento <code>#target1</code> .'
    testString: 'assert(code.match(/\$\s*?\(\s*?(?:"|")\s*?#target1\s*?(?:"|")\s*?\)\s*?\.parent/gi), "The <code>&#46;parent&#40;&#41;</code> method should be called on the <code>&#35;target1</code> element.");'
  - text: Solo use jQuery para agregar estas clases al elemento.
    testString: 'assert(code.match(/<div class="well" id="left-well">/g), "Only use jQuery to add these classes to the element.");'

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

  });
</script>

<!-- Only change code above this line. -->

<body>
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
</body>

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
