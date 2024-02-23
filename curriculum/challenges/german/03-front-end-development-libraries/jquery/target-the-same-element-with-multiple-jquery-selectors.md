---
id: bad87fee1348bd9aed908626
title: Mit mehreren jQuery-Selektoren dasselbe Element auswählen
challengeType: 6
forumTopicId: 18322
required:
  - 
    link: 'https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.2.0/animate.css'
dashedName: target-the-same-element-with-multiple-jquery-selectors
---

# --description--

Du kennst jetzt drei Möglichkeiten, Elemente anzusprechen: nach Typ: `$("button")`, nach Klasse: `$(".btn")`, und nach der id `$("#target1")`.

Obwohl es möglich ist, mehrere Klassen in einem einzigen `.addClass()`-Aufruf hinzuzufügen, wollen wir sie demselben Element auf *drei verschiedene Arten* hinzufügen.

Füge mit `.addClass()` jeweils nur eine Klasse auf drei verschiedene Arten zum selben Element hinzu:

Füge die Klasse `animated` zu allen Elementen mit dem Typ `button` hinzu.

Füge die Klasse `shake` zu allen Buttons mit der Klasse `.btn` hinzu.

Füge die Klasse `btn-primary` zu dem Button mit der id `#target1` hinzu.

**Hinweis:** Du solltest immer nur ein Element auswählen und nur eine Klasse auf einmal hinzufügen. Insgesamt fügen deine drei einzelnen Selektoren am Ende die drei Klassen `shake`, `animated` und `btn-primary` zu `#target1` hinzu.

# --hints--

Dein Code sollte den Selektor `$("button")` verwenden.

```js
assert(code.match(/\$\s*?\(\s*?(?:'|")\s*?button\s*?(?:'|")/gi));
```

Dein Code sollte den Selektor `$(".btn")` verwenden.

```js
assert(code.match(/\$\s*?\(\s*?(?:'|")\s*?\.btn\s*?(?:'|")/gi));
```

Dein Code sollte den Selektor `$("#target1")` verwenden.

```js
assert(code.match(/\$\s*?\(\s*?(?:'|")\s*?#target1\s*?(?:'|")/gi));
```

Du solltest nur eine Klasse mit jedem deiner drei Selektoren hinzufügen.

```js
assert(
  code.match(/addClass/g) &&
    code.match(/addClass\s*?\(\s*?('|")\s*?[\w-]+\s*?\1\s*?\)/g).length > 2
);
```

Dein Element `#target1` sollte die Klassen `animated`' `shake` und `btn-primary` besitzen.

```js
assert(
  $('#target1').hasClass('animated') &&
    $('#target1').hasClass('shake') &&
    $('#target1').hasClass('btn-primary')
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
    $("button").addClass("animated");
    $(".btn").addClass("shake");
    $("#target1").addClass("btn-primary");
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
