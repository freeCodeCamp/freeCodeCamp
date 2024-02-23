---
id: bad87fee1348bd9aec908856
title: Bootstrap-Buttons beschriften
challengeType: 0
forumTopicId: 18222
dashedName: label-bootstrap-buttons
---

# --description--

So wie wir unsere Wells beschriftet haben, soltlen wir auch unsere Buttons beschriften.

Gib jedem deiner `button`-Elemente den Text, der seinem Id-Selektor entspricht.

# --hints--

Dein `button`-Element mit der Id `target1` sollte den Text `#target1` beinhalten.

```js
assert(new RegExp('#target1', 'gi').test($('#target1').text()));
```

Dein `button`-Element mit der Id `target2` sollte den Text `#target2` beinhalten.

```js
assert(new RegExp('#target2', 'gi').test($('#target2').text()));
```

Dein `button`-Element mit der Id `target3` sollte den Text `#target3` beinhalten.

```js
assert(new RegExp('#target3', 'gi').test($('#target3').text()));
```

Dein `button`-Element mit der Id `target4` sollte den Text `#target4` beinhalten.

```js
assert(new RegExp('#target4', 'gi').test($('#target4').text()));
```

Dein `button`-Element mit der Id `target5` sollte den Text `#target5` beinhalten.

```js
assert(new RegExp('#target5', 'gi').test($('#target5').text()));
```

Dein `button`-Element mit der Id `target6` sollte den Text `#target6` beinhalten.

```js
assert(new RegExp('#target6', 'gi').test($('#target6').text()));
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
        <button class="btn btn-default target" id="target1"></button>
        <button class="btn btn-default target" id="target2"></button>
        <button class="btn btn-default target" id="target3"></button>
      </div>
    </div>
    <div class="col-xs-6">
      <h4>#right-well</h4>
      <div class="well" id="right-well">
        <button class="btn btn-default target" id="target4"></button>
        <button class="btn btn-default target" id="target5"></button>
        <button class="btn btn-default target" id="target6"></button>
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
