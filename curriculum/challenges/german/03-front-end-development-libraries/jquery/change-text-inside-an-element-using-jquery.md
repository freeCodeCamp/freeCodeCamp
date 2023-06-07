---
id: 564944c91be2204b269d51e3
title: Text innerhalb eines Elements mit jQuery ändern
challengeType: 6
forumTopicId: 16773
dashedName: change-text-inside-an-element-using-jquery
---

# --description--

Mit jQuery kannst du den Text zwischen den Start- und End-Tags eines Elements ändern. Du kannst sogar das HTML-Markup ändern.

jQuery hat eine Funktion namens `.html()`, mit der du HTML-Tags und Text innerhalb eines Elements hinzufügen kannst. Alle Inhalte, die sich zuvor in dem Element befanden, werden vollständig durch die Inhalte ersetzt, die du mit dieser Funktion bereitstellst.

So würdest du den Text unserer Überschrift umformulieren und hervorheben:

```js
$("h3").html("<em>jQuery Playground</em>");
```

jQuery hat auch eine ähnliche Funktion namens `.text()`, die nur den Text ändert, ohne Tags hinzuzufügen. Das heißt, diese Funktion wertet keine übergebenen HTML-Tags aus, sondern behandelt sie als den Text, durch den du den vorhandenen Inhalt ersetzen willst.

Ändere den Button mit der id `target4`, indem du seinen Text hervorhebst.

<a href="https://www.freecodecamp.org/news/html-elements-explained-what-are-html-tags/#em-element" target="_blank" rel="noopener noreferrer nofollow">Sieh dir unseren News-Artikel zu &lt;em&gt;</a> an, um den Unterschied zwischen `<i>` und `<em>` und deren Verwendung zu erfahren.

Beachte, dass der `<i>`-Tag zwar traditionell zur Hervorhebung von Text verwendet wurde, aber inzwischen auch als Tag für Icons eingesetzt wird. Der `<em>`-Tag ist heute allgemein als Tag für die Hervorhebung akzeptiert. Für diese Aufgabe ist beides geeignet.

# --hints--

Du solltest den Text in deinem Button `target4` hervorheben, indem du HTML-Tags hinzufügst.

```js
assert.isTrue(
  /<em>|<i>\s*#target4\s*<\/em>|<\/i>/gi.test($('#target4').html())
);
```

Der Text sollte ansonsten unverändert bleiben.

```js
assert($('#target4') && $('#target4').text().trim() === '#target4');
```

Du solltest keinen anderen Text ändern.

```js
assert.isFalse(/<em>|<i>/gi.test($('h3').html()));
```

Du solltest `.html()` und nicht `.text()` verwenden.

```js
assert(code.match(/\.html\(/g));
```

Du solltest `button id="target4"` mit jQuery auswählen.

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
