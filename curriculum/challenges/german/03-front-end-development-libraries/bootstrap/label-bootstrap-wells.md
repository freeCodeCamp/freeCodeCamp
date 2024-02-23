---
id: bad87fee1348bd9aec908854
title: Beschrifte Bootstrap Wells
challengeType: 0
forumTopicId: 18223
dashedName: label-bootstrap-wells
---

# --description--

Um der Klarheit willen, werden wir unsere beiden Wells mit ihren Ids beschriften.

Füge über deinem left-well, innerhalb des `col-xs-6` `div`-Elements, ein `h4`-Element mit dem Text `#left-well` hinzu.

Füge über deinem right-well, innerhalb des `col-xs-6` `div`- Elements, ein `h4`-Element mit dem Text `#right-well` hinzu.

# --hints--

Du solltest ein `h4`-Element zu jedem deiner `<div class="col-xs-6">`-Elemente hinzufügen.

```js
assert(
  $('.col-xs-6').children('h4') && $('.col-xs-6').children('h4').length > 1
);
```

Dein `h4`-Element sollte den Text `#left-well` beinhalten.

```js
assert(new RegExp('#left-well', 'gi').test($('h4').text()));
```

Ein `h4`-Element sollte den Text `#right-well` beinhalten.

```js
assert(new RegExp('#right-well', 'gi').test($('h4').text()));
```

Alle deine `h4`-Elemente sollten abschließende Tags haben.

```js
assert(
  code.match(/<\/h4>/g) &&
    code.match(/<h4/g) &&
    code.match(/<\/h4>/g).length === code.match(/<h4/g).length
);
```

# --seed--

## --seed-contents--

```html
<div class="container-fluid">
  <h3 class="text-primary text-center">jQuery Playground</h3>
  <div class="row">
    <div class="col-xs-6">

      <div class="well" id="left-well">
        <button class="btn btn-default target"></button>
        <button class="btn btn-default target"></button>
        <button class="btn btn-default target"></button>
      </div>
    </div>
    <div class="col-xs-6">

      <div class="well" id="right-well">
        <button class="btn btn-default target"></button>
        <button class="btn btn-default target"></button>
        <button class="btn btn-default target"></button>
      </div>
    </div>
  </div>
</div>
```

# --solutions--

```html
<div class="container-fluid">
  <h3 class="text-primary text-center">jQuery Playground</h3>
  <div class="row">
    <div class="col-xs-6">
      <h4>#left-well</h4>
      <div class="well" id="left-well">
        <button class="btn btn-default target"></button>
        <button class="btn btn-default target"></button>
        <button class="btn btn-default target"></button>
      </div>
    </div>
    <div class="col-xs-6">
      <h4>#right-well</h4>
      <div class="well" id="right-well">
        <button class="btn btn-default target"></button>
        <button class="btn btn-default target"></button>
        <button class="btn btn-default target"></button>
      </div>
    </div>
  </div>
</div>
```
