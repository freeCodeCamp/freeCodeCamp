---
id: bad87fee1348bd9aec908856
title: Dar um label a botões do Bootstrap
challengeType: 0
forumTopicId: 18222
dashedName: label-bootstrap-buttons
---

# --description--

Assim como fizemos com nossos poços, queremos também dar um label aos nossos botões.

Dê a cada um de seus elementos `button` o texto que corresponde ao seu seletor id.

# --hints--

O elemento `button` com o id `target1` deve ter o texto `#target1`.

```js
assert(new RegExp('#target1', 'gi').test($('#target1').text()));
```

O elemento `button` com o id `target2` deve ter o texto `#target2`.

```js
assert(new RegExp('#target2', 'gi').test($('#target2').text()));
```

O elemento `button` com o id `target3` deve ter o texto `#target3`.

```js
assert(new RegExp('#target3', 'gi').test($('#target3').text()));
```

O elemento `button` com o id `target4` deve ter o texto `#target4`.

```js
assert(new RegExp('#target4', 'gi').test($('#target4').text()));
```

Seu elemento `button` com o id `target5` deve ter o texto `#target5`.

```js
assert(new RegExp('#target5', 'gi').test($('#target5').text()));
```

Seu elemento `button` com o id `target6` deve ter o texto `#target6`.

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
