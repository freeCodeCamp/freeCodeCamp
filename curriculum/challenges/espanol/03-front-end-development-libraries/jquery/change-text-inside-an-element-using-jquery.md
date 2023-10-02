---
id: 564944c91be2204b269d51e3
title: Cambia el texto dentro de un elemento usando jQuery
challengeType: 6
forumTopicId: 16773
dashedName: change-text-inside-an-element-using-jquery
---

# --description--

Con jQuery, puedes cambiar el texto entre las etiquetas de abertura y cierre de un elemento. Puedes incluso cambiar el código HTML.

jQuery tiene una función llamada `.html()` que te permite agregar etiquetas HTML y texto dentro de un elemento. Cualquier contenido anterior dentro del elemento será completamente reemplazado con el contenido que proporciones usando esta función.

Así es como reescribirías y enfatizarías el texto de nuestro título:

```js
$("h3").html("<em>jQuery Playground</em>");
```

jQuery también tiene una función similar llamada `.text()` que solamente altera el texto sin agregar etiquetas. En otras palabras, esta función no evaluará ninguna etiqueta HTML que le pasemos, pero en cambio, la tratará como el texto por el que quieres reemplazar el contenido existente.

Cambia el botón con id `target4` enfatizando su texto.

<a href="https://www.freecodecamp.org/news/html-elements-explained-what-are-html-tags/#em-element" target="_blank" rel="noopener noreferrer nofollow">Vea nuestro artículo de noticias para &lt;em&gt;</a> aprender la diferencia entre `<i>` y `<em>` y sus usos.

Ten en cuenta que mientras la etiqueta `<i>` tradicionalmente se usaba para enfatizar texto, fue adaptada para ser usada como etiqueta para iconos. La etiqueta `<em>` ahora es ampliamente aceptada como la etiqueta de énfasis. Cualquiera de las dos servirá para este desafío.

# --hints--

Debes enfatizar el texto en tu botón `target4` añadiendo etiquetas HTML.

```js
assert.isTrue(
  /<em>|<i>\s*#target4\s*<\/em>|<\/i>/gi.test($('#target4').html())
);
```

De lo contrario, el texto no debe modificarse.

```js
assert($('#target4') && $('#target4').text().trim() === '#target4');
```

No debes modificar ningún otro texto.

```js
assert.isFalse(/<em>|<i>/gi.test($('h3').html()));
```

Debes usar `.html()` y no `.text()`.

```js
assert(code.match(/\.html\(/g));
```

Debes seleccionar `button id="target4"` con jQuery.

```js
assert(code.match(/\$\(\s*?(\"|\')#target4(\"|\')\s*?\)\.html\(/));
```

# --seed--

## --seed-contents--

```html
<script>
  $(document).ready(function() {
    $("#target1").css("color", "red");

  });
</script>

<!-- Only change code above this line -->

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

# --solutions--

```html
<script>
  $(document).ready(function() {
    $("#target1").css("color", "red");
    $("#target4").html('<em>#target4</em>');
  });
</script>

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
