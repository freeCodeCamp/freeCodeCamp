---
id: bad87fee1348bd9aed108826
title: Ein bestimmtes Kindelement eines Elements mit jQuery auswählen
challengeType: 6
forumTopicId: 18315
required:
  - 
    link: 'https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.2.0/animate.css'
dashedName: target-a-specific-child-of-an-element-using-jquery
---

# --description--

Du hast gesehen, warum id-Attribute so praktisch für das Auswählen mit jQuery-Selektoren sind. Aber du wirst nicht immer saubere ids haben, mit denen du arbeiten kannst.

Zum Glück gibt es in jQuery noch ein paar andere Tricks, um die richtigen Elemente zu finden.

jQuery verwendet CSS-Selektoren, um Elemente auszuwählen. Der CSS-Selektor `target:nth-child(n)` ermöglicht es dir, alle n-ten Elemente mit der Zielklasse oder dem Elementtyp auszuwählen.

So würdest du dem dritten Element in jedem "well" die Bounce-Klasse geben:

```js
$(".target:nth-child(3)").addClass("animated bounce");
```

Lass das zweite Kindelement in jedem deiner "well"-Elemente hüpfen. Du musst die Kindelemente der Elemente mit der Klasse `target` auswählen.

# --hints--

Das zweite Element im Element `target` sollte einen Bounce-Animationseffekt haben.

```js
assert(
  $('.target:nth-child(2)').hasClass('animated') &&
    $('.target:nth-child(2)').hasClass('bounce')
);
```

Nur zwei Elemente sollten hüpfen (bounce).

```js
assert($('.animated.bounce').length === 2);
```

Du solltest den Selektor `:nth-child()` verwenden, um diese Elemente zu ändern.

```js
assert(code.match(/\:nth-child\(/g));
```

Du solltest nur jQuery verwenden, um diese Klassen zu dem Element hinzuzufügen.

```js
assert(
  code.match(/\$\(".target:nth-child\(2\)"\)/g) ||
    code.match(/\$\('.target:nth-child\(2\)'\)/g) ||
    code.match(/\$\(".target"\).filter\(":nth-child\(2\)"\)/g) ||
    code.match(/\$\('.target'\).filter\(':nth-child\(2\)'\)/g)
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
