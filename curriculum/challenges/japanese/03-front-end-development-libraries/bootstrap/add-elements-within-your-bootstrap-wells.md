---
id: bad87fee1348bd9aec908849
title: Bootstrap のウェルに要素を追加する
challengeType: 0
forumTopicId: 16636
dashedName: add-elements-within-your-bootstrap-wells
---

# --description--

行の列ごとにいくつかの `div` 要素がネストになっていて、 必要な深さになっています。 ここで `button` 要素を追加できます。

クラス名 `well` を持つ各 `div` 要素の中に 3 つの `button` 要素を入れてください。

# --hints--

クラス `well` を持つ各 `div` 要素の中に 3 つの `button` 要素を入れます。

```js
assert(
  $('div.well:eq(0)').children('button').length === 3 &&
    $('div.well:eq(1)').children('button').length === 3
);
```

全部で 6 つの `button` 要素を作成します。

```js
assert($('button') && $('button').length > 5);
```

`button` 要素にはすべて終了タグが必要です。

```js
assert(
  code.match(/<\/button>/g) &&
    code.match(/<button/g) &&
    code.match(/<\/button>/g).length === code.match(/<button/g).length
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



      </div>
    </div>
    <div class="col-xs-6">
      <div class="well">



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
      <div class="well">
        <button></button>
        <button></button>
        <button></button>
      </div>
    </div>
    <div class="col-xs-6">
      <div class="well">
        <button></button>
        <button></button>
        <button></button>
      </div>
    </div>
  </div>
</div>
```
