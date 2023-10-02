---
id: bad87fee1348bd9acdd08826
title: Lerne, wie Script Tags und Document Ready funktionieren
challengeType: 6
forumTopicId: 18224
dashedName: learn-how-script-tags-and-document-ready-work
---

# --description--

Jetzt sind wir bereit, jQuery zu lernen, das beliebteste JavaScript-Tool aller Zeiten.

Bevor wir mit jQuery arbeiten können, müssen wir einige Dinge zu unserem HTML hinzufügen.

Als erstes fügst du ein `script`-Element oben auf deiner Seite ein. Achte darauf, dass du es in der folgenden Zeile schließt.

Dein Browser führt jedes JavaScript innerhalb eines `script`-Elements aus, auch jQuery.

Im `script`-Element fügst du den Code `$(document).ready(function() {` zum `script` hinzu. Dann schließe es in der folgenden Zeile (immer noch innerhalb deines `script`-Elements) mit: `});`

Wir werden später mehr über Funktionen (`functions`) lernen. Das Wichtige das du wissen musst ist, dass der Code, den du innerhalb dieser `function` einfügst, ausgeführt wird, sobald dein Browser deine Seite geladen hat.

Das ist wichtig, denn ohne deine `document ready function` könnte dein Code laufen, bevor dein HTML gerendert wird, was zu Fehlern führen würde.

# --hints--

Du solltest ein `script`-Element erstellen und sicherstellen, dass es gültig ist und einen schließenden Tag hat.

```js
assert(
  code.match(/<\/script\s*>/g) &&
    code.match(
      /<script(\sasync|\sdefer)*(\s(charset|src|type)\s*=\s*["\"]+[^"\"]*["\"]+)*(\sasync|\sdefer)*\s*>/g
    ) &&
    code.match(/<\/script\s*>/g).length ===
      code.match(
        /<script(\sasync|\sdefer)*(\s(charset|src|type)\s*=\s*["\"]+[^"\"]*["\"]+)*(\sasync|\sdefer)*\s*>/g
      ).length
);
```

Du solltest `$(document).ready(function() {` an den Anfang deines `script`-Elements setzen.

```js
assert(
  code.match(
    /\$\s*?\(\s*?document\s*?\)\.ready\s*?\(\s*?function\s*?\(\s*?\)\s*?\{/g
  )
);
```

Du solltest deine `$(document).ready(function() {` mit `})` schließen.

```js
assert(code.match(/\n*?\s*?\}\s*?\);/g));
```

# --seed--

## --seed-contents--

```html
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
