---
id: 564944c91be2204b269d51e3
title: Change Text Inside an Element Using jQuery
challengeType: 6
videoUrl: ''
localeTitle: Cambiar texto dentro de un elemento usando jQuery
---

## Description
<section id="description"> Con jQuery, puede cambiar el texto entre las etiquetas de inicio y fin de un elemento. Incluso puede cambiar el formato HTML. jQuery tiene una función llamada <code>.html()</code> que le permite agregar etiquetas HTML y texto dentro de un elemento. Cualquier contenido previamente dentro del elemento será reemplazado completamente con el contenido que proporcione utilizando esta función. Así es como reescribiría y enfatizaría el texto de nuestro encabezado: <code>$(&quot;h3&quot;).html(&quot;&lt;em&gt;jQuery Playground&lt;/em&gt;&quot;);</code> jQuery también tiene una función similar llamada <code>.text()</code> que solo altera el texto sin agregar etiquetas. En otras palabras, esta función no evaluará ninguna etiqueta HTML que se le pase, sino que la tratará como el texto con el que desea reemplazar el contenido existente. Cambia el botón con id <code>target4</code> enfatizando su texto. Consulte este <a href="https://developer.mozilla.org/en/docs/Web/HTML/Element/em" target="_blank">enlace</a> para saber más sobre la diferencia entre <code>&lt;i&gt;</code> y <code>&lt;em&gt;</code> y sus usos. Tenga en cuenta que si bien la etiqueta <code>&lt;i&gt;</code> se ha usado tradicionalmente para enfatizar el texto, desde entonces se ha utilizado como etiqueta para los iconos. La etiqueta <code>&lt;em&gt;</code> ahora es ampliamente aceptada como la etiqueta de énfasis. Por lo tanto, solamente el uso de <code>&lt;em&gt;</code> funcionará para este desafío. </section>

## Instructions
<section id="instructions">
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>target4</code> el texto en su botón <code>target4</code> agregando etiquetas HTML.
    testString: 'assert.isTrue((/<em>|<i>\s*#target4\s*<\/em>|<\/i>/gi).test($("#target4").html()), "Emphasize the text in your <code>target4</code> button by adding HTML tags.");'
  - text: Asegúrate de que el texto no haya cambiado.
    testString: 'assert($("#target4") && $("#target4").text().trim() === "#target4", "Make sure the text is otherwise unchanged.");'
  - text: No alteres ningún otro texto.
    testString: 'assert.isFalse((/<em>|<i>/gi).test($("h3").html()), "Do not alter any other text.");'
  - text: Asegúrese de que está utilizando <code>.html()</code> y no <code>.text()</code> .
    testString: 'assert(code.match(/\.html\(/g), "Make sure you are using <code>.html()</code> and not <code>.text()</code>.");'
  - text: Asegúrese de seleccionar <code>button id=&quot;target4&quot;</code> con jQuery.
    testString: 'assert(code.match(/\$\(\s*?(\"|\")#target4(\"|\")\s*?\)\.html\(/), "Make sure to select <code>button id="target4"</code> with jQuery.");'

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
