---
id: bad87fee1348bd9aec908848
title: Bootstrap のウェルを作成する
challengeType: 0
forumTopicId: 16825
dashedName: create-bootstrap-wells
---

# --description--

Bootstrap には `well` と呼ばれるクラスがあり、列を立体的な見栄えにすることができます。

クラス `well` を持つ `div` 要素を各 `col-xs-6` `div` 要素の中に 1 つずつ入れてください。

# --hints--

クラス `col-xs-6` を持つ各 `div` 要素の中に、クラス `well` を持つ `div` 要素を追加します。

```js
assert($('div.col-xs-6').not(':has(>div.well)').length < 1);
```

クラス `col-xs-6` を持つ `div` 要素はどちらも、クラス `row` を持つ `div` 要素の中にネストする必要があります。

```js
assert($('div.row > div.col-xs-6').length > 1);
```

`div` 要素にはすべて終了タグが必要です。

```js
assert(
  code.match(/<\/div>/g) &&
    code.match(/<div/g) &&
    code.match(/<\/div>/g).length === code.match(/<div/g).length
);
```

# --seed--

## --seed-contents--

```html
<div class="container-fluid">
  <h3 class="text-primary text-center">jQuery Playground</h3>
  <div class="row">
    <div class="col-xs-6">

    </div>
    <div class="col-xs-6">

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
      <div class="well"></div>
    </div>
    <div class="col-xs-6">
      <div class="well"></div>
    </div>
  </div>
</div>
```
