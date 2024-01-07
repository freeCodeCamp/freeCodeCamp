---
id: bad87fee1348bd9aed208826
title: Mit jQuery die Kindelemente eines Elements auswählen
challengeType: 6
forumTopicId: 18320
dashedName: target-the-children-of-an-element-using-jquery
---

# --description--

Wenn HTML-Elemente eine Ebene unter einem anderen platziert werden, nennt man sie <dfn>Kinder</dfn> dieses Elements. Zum Beispiel sind die Button-Elemente in dieser Aufgabe mit dem Text `#target1`, `#target2` und `#target3` alle Kinder des Elements `<div class="well" id="left-well">`.

jQuery hat eine Funktion namens `children()`, mit der du auf die Kinder des von dir ausgewählten Elements zugreifen kannst.

Hier ist ein Beispiel dafür, wie du die Funktion `children()` verwendest, um den Kindern deines Elements `left-well` die Farbe `blue` zu geben:

```js
$("#left-well").children().css("color", "blue")
```

# --instructions--

Gib allen Kindelementen deines Elements `right-well` die Farbe Orange.

# --hints--

Alle Kindelemente von `#right-well` sollten orangefarbenen Text enthalten.

```js
assert($('#right-well').children().css('color') === 'rgb(255, 165, 0)');
```

Du solltest die Funktion `children()` verwenden, um diese Elemente zu ändern.

```js
assert(code.match(/\.children\(\)\.css/g));
```

Du solltest nur jQuery verwenden, um diese Klassen zu dem Element hinzuzufügen.

```js
assert(code.match(/<div class="well" id="right-well">/g));
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
