---
id: bad87fee1348bd9aec908856
title: Bootstrap のボタンにラベルを付ける
challengeType: 0
forumTopicId: 18222
dashedName: label-bootstrap-buttons
---

# --description--

ウェルにラベルを付けたのとまったく同様に、ボタンにもラベルを付けてみましょう。

各 `button` 要素に、その id セレクターに対応するテキストを付けてください。

# --hints--

id が `target1` の `button` 要素にテキスト `#target1` を付けます。

```js
assert(new RegExp('#target1', 'gi').test($('#target1').text()));
```

id が `target2` の `button` 要素にテキスト `#target2` を付けます。

```js
assert(new RegExp('#target2', 'gi').test($('#target2').text()));
```

id が `target3` の `button` 要素にテキスト `#target3` を付けます。

```js
assert(new RegExp('#target3', 'gi').test($('#target3').text()));
```

id が `target4` の `button` 要素にテキスト `#target4` を付けます。

```js
assert(new RegExp('#target4', 'gi').test($('#target4').text()));
```

id が `target5` の `button` 要素にテキスト `#target5` を付けます。

```js
assert(new RegExp('#target5', 'gi').test($('#target5').text()));
```

id が `target6` の `button` 要素にテキスト `#target6` を付けます。

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
