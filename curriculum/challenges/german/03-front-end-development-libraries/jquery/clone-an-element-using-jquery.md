---
id: bad87fee1348bd9aed508826
title: Ein Element mit jQuery klonen
challengeType: 6
forumTopicId: 16780
dashedName: clone-an-element-using-jquery
---

# --description--

Du kannst Elemente nicht nur verschieben, sondern auch von einem Ort zum anderen kopieren.

jQuery hat eine Funktion namens `clone()`, die eine Kopie eines Elements erstellt.

Wenn wir zum Beispiel `target2` von unserem `left-well` zu unserem `right-well` kopieren wollen, würden wir Folgendes verwenden:

```js
$("#target2").clone().appendTo("#right-well");
```

Hast du bemerkt, dass dazu zwei jQuery-Funktionen miteinander verbunden werden müssen? Das nennt man <dfn>Funktionsverkettung (function chaining)</dfn> und es ist ein bequemer Weg, um Dinge mit jQuery zu erledigen.

Klone dein Element `target5` und füge es in dein `left-well` ein.

# --hints--

Dein Element `target5` sollte sich innerhalb deines `right-well` befinden.

```js
assert($('#right-well').children('#target5').length > 0);
```

Eine Kopie deines Elements `target5` sollte auch in deinem `left-well` vorhanden sein.

```js
assert($('#left-well').children('#target5').length > 0);
```

Du solltest nur jQuery verwenden, um diese Elemente zu verschieben.

```js
assert(!code.match(/class.*animated/g));
```

# --seed--

## --seed-contents--

```html
<script>
  $(document).ready(function() {
    $("#target1").css("color", "red");
    $("#target1").prop("disabled", true);
    $("#target4").remove();
    $("#target2").appendTo("#right-well");

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
    $("#target1").prop("disabled", true);
    $("#target4").remove();
    $("#target2").appendTo("#right-well");
    $("#target5").clone().appendTo("#left-well");
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
