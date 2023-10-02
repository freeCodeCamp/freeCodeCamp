---
id: bad87fee1348bd9aec908852
title: jQuery セレクターのターゲットとなるクラスを作成する
challengeType: 0
forumTopicId: 16815
dashedName: create-a-class-to-target-with-jquery-selectors
---

# --description--

すべてのクラスが対応する CSS を必要とするわけではありません。 jQuery を使用してもっと簡単に要素を選択するためだけの目的で、クラスを作成することもあります。

各 `button` 要素にクラス `target` を付けてください。

# --hints--

各 `button` 要素に `target` クラスを適用します。

```js
assert($('.target').length > 5);
```

# --seed--

## --seed-contents--

```html
<div class="container-fluid">
  <h3 class="text-primary text-center">jQuery Playground</h3>
  <div class="row">
    <div class="col-xs-6">
      <div class="well">
        <button class="btn btn-default"></button>
        <button class="btn btn-default"></button>
        <button class="btn btn-default"></button>
      </div>
    </div>
    <div class="col-xs-6">
      <div class="well">
        <button class="btn btn-default"></button>
        <button class="btn btn-default"></button>
        <button class="btn btn-default"></button>
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
        <button class="target btn btn-default"></button>
        <button class="target btn btn-default"></button>
        <button class="target btn btn-default"></button>
      </div>
    </div>
    <div class="col-xs-6">
      <div class="well">
        <button class="target btn btn-default"></button>
        <button class="target btn btn-default"></button>
        <button class="target btn btn-default"></button>
      </div>
    </div>
  </div>
</div>
```
