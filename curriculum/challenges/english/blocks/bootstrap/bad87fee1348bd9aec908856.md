---
id: bad87fee1348bd9aec908856
title: Label Bootstrap Buttons
challengeType: 0
forumTopicId: 18222
dashedName: label-bootstrap-buttons
---

# --description--

Just like we labeled our wells, we want to label our buttons.

Give each of your `button` elements text that corresponds to its id selector.

# --hints--

Your `button` element with the id `target1` should have the text `#target1`.

```js
assert.match(document.querySelector('#target1')?.textContent,/#target1/gi)
```

Your `button` element with the id `target2` should have the text `#target2`.

```js
assert.match(document.querySelector('#target2')?.textContent,/#target2/gi)
```

Your `button` element with the id `target3` should have the text `#target3`.

```js
assert.match(document.querySelector('#target3')?.textContent,/#target3/gi)
```

Your `button` element with the id `target4` should have the text `#target4`.

```js
assert.match(document.querySelector('#target4')?.textContent,/#target4/gi)
```

Your `button` element with the id `target5` should have the text `#target5`.

```js
assert.match(document.querySelector('#target5')?.textContent,/#target5/gi)
```

Your `button` element with the id `target6` should have the text `#target6`.

```js
assert.match(document.querySelector('#target6')?.textContent,/#target6/gi)
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
