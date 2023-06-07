---
id: bad87fee1348bd9aec908857
title: Verwende Kommentare zur Verdeutlichung der Codes
challengeType: 0
forumTopicId: 18347
dashedName: use-comments-to-clarify-code
---

# --description--

Wenn wir mit der Benutzung von jQuery anfangen, werden wir HTML-Elemente modifizieren, ohne diese tatsächlich im HTML abzuändern.

Stellen wir sicher, dass jeder weiß, dass er diesen Code nicht direkt ändern sollte.

Denk daran, dass du einen Kommentar mit `<!--` beginnst und mit `-->` schließt

Füge den Kommentar `Code below this line should not be changed` am Anfang deiner HTML-Datei ein

# --hints--

Du solltest einen Kommentar mit `<!--` am Anfang deiner HTML-Datei beginnen.

```js
assert(code.match(/^\s*<!--/));
```

Dein Kommentar sollte den Text `Code below this line should not be changed` enthalten.

```js
assert(code.match(/<!--(?!(>|->|.*-->.*this line))\s*.*this line.*\s*-->/gi));
```

Du solltest deinen Kommentar mit `-->` schließen.

```js
assert(code.match(/-->.*\n+.+/g));
```

Du solltest gleich viele Kommentar-Öffner und -Schließer haben.

```js
assert(code.match(/<!--/g).length === code.match(/-->/g).length);
```

# --seed--

## --seed-contents--

```html
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
<!-- Code below this line should not be changed -->
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
