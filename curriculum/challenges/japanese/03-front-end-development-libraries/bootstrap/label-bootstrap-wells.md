---
id: bad87fee1348bd9aec908854
title: Bootstrap のウェルにラベルを付ける
challengeType: 0
forumTopicId: 18223
dashedName: label-bootstrap-wells
---

# --description--

両方のウェルに、対応する id のラベルを付けて、わかりやすくしましょう。

左側のウェルの上で、その `col-xs-6` `div` 要素の内側に、テキスト `#left-well` を持つ `h4` 要素を追加してください。

右側のウェルの上で、その `col-xs-6` `div` 要素の内側に、テキスト `#right-well` を持つ `h4` 要素を追加してください。

# --hints--

各 `<div class="col-xs-6">` 要素に `h4` 要素を追加します。

```js
assert(
  $('.col-xs-6').children('h4') && $('.col-xs-6').children('h4').length > 1
);
```

一方の `h4` 要素にテキスト `#left-well` を付けます。

```js
assert(new RegExp('#left-well', 'gi').test($('h4').text()));
```

もう一方の `h4` 要素にテキスト `#right-well` を付けます。

```js
assert(new RegExp('#right-well', 'gi').test($('h4').text()));
```

`h4` 要素にはすべて終了タグが必要です。

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
