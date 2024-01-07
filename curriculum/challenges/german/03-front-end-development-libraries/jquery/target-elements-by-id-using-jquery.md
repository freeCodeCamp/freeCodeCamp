---
id: bad87fee1348bd9aeda08826
title: Elemente mithilfe von id mit jQuery anvisieren
challengeType: 6
forumTopicId: 18317
required:
  - 
    link: 'https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.2.0/animate.css'
dashedName: target-elements-by-id-using-jquery
---

# --description--

Du kannst Elemente auch über ihre id-Attribute auswählen.

Verwende zunächst den Selektor `$("#target3")` für dein `button`-Element mit der id `target3`.

Beachte, dass du, genau wie bei CSS-Deklarationen, ein `#` vor dem Namen der id schreibst.

Dann benutze die Funktion `.addClass()` von jQuery, um die Klassen `animated` und `fadeOut` hinzuzufügen.

Hier siehst du, wie du das `button`-Element mit der id `target6` ausblendest:

```js
$("#target6").addClass("animated fadeOut");
```

# --hints--

Du solltest das `button`-Element mit der `id` von `target3` auswählen und die jQuery Funktion `addClass()` verwenden, um ihm die Klasse `animated` zu geben.

```js
assert($('#target3').hasClass('animated'));
```

Du solltest das Element mit der id `target3` auswählen und die jQuery-Funktion `addClass()` verwenden, um ihm die Klasse `fadeOut` zu geben.

```js
assert(
  ($('#target3').hasClass('fadeOut') || $('#target3').hasClass('fadeout')) &&
    code.match(/\$\(\s*.#target3.\s*\)/g)
);
```

Du solltest nur jQuery verwenden, um diese Klassen zu dem Element hinzuzufügen.

```js
assert(!code.match(/class.*animated/g));
```

# --seed--

## --seed-contents--

```html
<script>
  $(document).ready(function() {
    $("button").addClass("animated bounce");
    $(".well").addClass("animated shake");

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
    $("button").addClass("animated bounce");
    $(".well").addClass("animated shake");
    $("#target3").addClass("animated fadeOut");
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
