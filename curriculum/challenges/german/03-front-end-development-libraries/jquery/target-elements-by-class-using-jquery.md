---
id: bad87fee1348bd9aedc08826
title: Elemente nach Klasse mit jQuery auswählen
challengeType: 6
forumTopicId: 18316
required:
  - 
    link: 'https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.2.0/animate.css'
dashedName: target-elements-by-class-using-jquery
---

# --description--

Siehst du, wie wir alle deine `button`-Elemente hüpfen lassen? Wir haben sie mit `$("button")` ausgewählt und ihnen dann mit `.addClass("animated bounce");` einige CSS-Klassen hinzugefügt.

Du hast gerade die Funktion `.addClass()` von jQuery verwendet, mit der du Klassen zu Elementen hinzufügen kannst.

Zuerst wollen wir deine `div`-Elemente mit der Klasse `well` ausstatten, indem wir den Selektor `$(".well")` verwenden.

Beachte, dass du, genau wie bei CSS-Deklarationen, ein `.` vor dem Namen der Klasse schreibst.

Dann benutze die Funktion `.addClass()` von jQuery, um die Klassen `animated` und `shake` hinzuzufügen.

Du könntest zum Beispiel alle Elemente mit der Klasse `text-primary` zum Wackeln bringen, indem du die folgende Zeile in deine `document ready function` einfügst:

```js
$(".text-primary").addClass("animated shake");
```

# --hints--

Du solltest die jQuery-Funktion `addClass()` verwenden, um allen deinen Elementen mit der Klasse `well` die Klassen `animated` und `shake` zu übergeben.

```js
assert($('.well').hasClass('animated') && $('.well').hasClass('shake'));
```

Du solltest nur jQuery verwenden, um diese Klassen zu dem Element hinzuzufügen.

```js
assert(!code.match(/class\.\*animated/g));
```

# --seed--

## --seed-contents--

```html
<script>
  $(document).ready(function() {
    $("button").addClass("animated bounce");
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
