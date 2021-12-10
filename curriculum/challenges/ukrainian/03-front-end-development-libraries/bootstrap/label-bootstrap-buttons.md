---
id: bad87fee1348bd9aec908856
title: Позначення кнопок Bootstrap
challengeType: 0
forumTopicId: 18222
dashedName: label-bootstrap-buttons
---

# --description--

Як і елементи well, так слід позначати і кнопки.

Надайте кожному із елементів `button` текст, який відповідає його селектору id.

# --hints--

Елемент `button` з id `target1` повинен містити текст `#target1`.

```js
assert(new RegExp('#target1', 'gi').test($('#target1').text()));
```

Елемент `button` з id `target2` повинен містити текст `#target2`.

```js
assert(new RegExp('#target2', 'gi').test($('#target2').text()));
```

Елемент `button` з id `target3` повинен містити текст `#target3`.

```js
assert(new RegExp('#target3', 'gi').test($('#target3').text()));
```

Елемент `button` з id `target4` повинен містити текст `#target4`.

```js
assert(new RegExp('#target4', 'gi').test($('#target4').text()));
```

Елемент `button` з id `target5` повинен містити текст `#target5`.

```js
assert(new RegExp('#target5', 'gi').test($('#target5').text()));
```

Елемент `button` з id `target6` повинен містити текст `#target6`.

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
