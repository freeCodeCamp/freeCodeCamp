---
id: bad87fee1348bd9acdd08826
title: スクリプトタグと Document Ready の仕組みを学ぶ
challengeType: 6
forumTopicId: 18224
dashedName: learn-how-script-tags-and-document-ready-work
---

# --description--

これで jQuery について学ぶ用意ができました。jQuery は今までで最も人気を得た JavaScript ツールです。

jQuery を使い始める前に、HTML にいくつか追加する必要があります。

まず、`script` 要素をページの先頭に追加してください。 必ず次の行でタグを終了してください。

ブラウザーは `script` 要素の中で、jQuery を含む任意の JavaScript を実行します。

`script` 要素の中で、コード `$(document).ready(function() {` を `script` に追加してください。 そして、次の行で `});` を使用してスクリプトを終了してください (まだ `script` 要素の内側です)。

`function` についてはあとで詳しく説明します。 ここで重要なのは、この `function` の中に入れたコードは、ブラウザーがページの読み込みを完了するとすぐに実行されるということです。

これが重要である理由は、`document ready function` がなければ、HTML がレンダーされる前にコードが実行され、その結果バグを引き起こす可能性があるからです。

# --hints--

`script` 要素を作成して、それが有効であり終了タグがあることを確認します。

```js
assert(
  code.match(/<\/script\s*>/g) &&
    code.match(
      /<script(\sasync|\sdefer)*(\s(charset|src|type)\s*=\s*["\"]+[^"\"]*["\"]+)*(\sasync|\sdefer)*\s*>/g
    ) &&
    code.match(/<\/script\s*>/g).length ===
      code.match(
        /<script(\sasync|\sdefer)*(\s(charset|src|type)\s*=\s*["\"]+[^"\"]*["\"]+)*(\sasync|\sdefer)*\s*>/g
      ).length
);
```

`$(document).ready(function() {` を `script` 要素の先頭に追加します。

```js
assert(
  code.match(
    /\$\s*?\(\s*?document\s*?\)\.ready\s*?\(\s*?function\s*?\(\s*?\)\s*?\{/g
  )
);
```

`});` を使用して `$(document).ready(function() {` 関数を終了します。

```js
assert(code.match(/\n*?\s*?\}\s*?\);/g));
```

# --seed--

## --seed-contents--

```html
<!-- Only change code above this line -->

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

# --solutions--

```html
<script>
  $(document).ready(function() {
  });
</script>
<!-- Only change code above this line -->

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
