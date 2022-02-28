---
id: bad87fee1348bd9aec908853
title: Bootstrap の要素に id 属性を追加する
challengeType: 0
forumTopicId: 16639
dashedName: add-id-attributes-to-bootstrap-elements
---

# --description--

要素には class 属性に加えて `id` 属性を付けることもできます。

id はそれぞれ、特定の要素に固有にする必要があり、ページごとに 1 回だけ使用する必要があります。

クラス `well` の各 `div` 要素に固有の id を付けてみましょう。

次のようにして要素に id を付けることができます。

```html
<div class="well" id="center-well">
```

左側のウェルに `left-well` という id を付けてください。 右側のウェルに `right-well` という id を付けてください。

# --hints--

左の `well` に `left-well` という id を付けます。

```js
assert(
  $('.col-xs-6').children('#left-well') &&
    $('.col-xs-6').children('#left-well').length > 0
);
```

右の `well` に `right-well` という id を付けます。

```js
assert(
  $('.col-xs-6').children('#right-well') &&
    $('.col-xs-6').children('#right-well').length > 0
);
```

# --seed--

## --seed-contents--

```html
<div class="container-fluid">
  <h3 class="text-primary text-center">jQuery Playground</h3>
  <div class="row">
    <div class="col-xs-6">
      <div class="well">
        <button class="btn btn-default target"></button>
        <button class="btn btn-default target"></button>
        <button class="btn btn-default target"></button>
      </div>
    </div>
    <div class="col-xs-6">
      <div class="well">
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
