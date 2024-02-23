---
id: bad87fee1348bd9aed008826
title: Wähle gerade Elemente mit jQuery aus
challengeType: 6
forumTopicId: 18318
required:
  - 
    link: 'https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.2.0/animate.css'
dashedName: target-even-elements-using-jquery
---

# --description--

Mit den Selektoren `:odd` (ungerade) und `:even` (gerade) kannst du auch Elemente anhand ihrer Position auswählen.

Beachte, dass jQuery einen Null-Index hat, was bedeutet, dass das erste Element in einer Auswahl die Position 0 hat. Das kann etwas verwirrend sein, da `:odd` entgegen der Intuition das zweite Element (Position 1), das vierte Element (Position 3) und so weiter auswählt.

So würdest du alle ungeraden Elemente mit der Klasse `target` anvisieren und ihnen Klassen zuweisen:

```js
$(".target:odd").addClass("animated shake");
```

Versuche, alle geraden `target`-Elemente auszuwählen und ihnen die Klassen `animated` und `shake` zu geben. Denke daran, dass **even** sich auf die Position der Elemente bezieht, wenn du ein nullbasiertes System im Kopf hast.

# --hints--

Alle `target`-Elemente, die jQuery als gerade betrachtet, sollten wackeln.

```js
assert(
  $('.target:even').hasClass('animated') && $('.target:even').hasClass('shake')
);
```

Du solltest den Selektor `:even` verwenden, um diese Elemente zu ändern.

```js
assert(code.match(/\:even/g));
```

Du solltest nur jQuery verwenden, um diese Klassen zu dem Element hinzuzufügen.

```js
assert(
  code.match(/\$\(".target:even"\)/g) ||
    code.match(/\$\('.target:even'\)/g) ||
    code.match(/\$\(".target"\).filter\(":even"\)/g) ||
    code.match(/\$\('.target'\).filter\(':even'\)/g)
);
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
    $("#target5").clone().appendTo("#left-well");
    $("#target1").parent().css("background-color", "red");
    $("#right-well").children().css("color", "orange");
    $("#left-well").children().css("color", "green");
    $(".target:nth-child(2)").addClass("animated bounce");

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
    $("#target1").parent().css("background-color", "red");
    $("#right-well").children().css("color", "orange");
    $("#left-well").children().css("color", "green");
    $(".target:nth-child(2)").addClass("animated bounce");
    $(".target:even").addClass("animated shake");
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
