---
id: bad87fee1348bd9aec908857
title: コメントを使用してコードをわかりやすくする
challengeType: 0
forumTopicId: 18347
dashedName: use-comments-to-clarify-code
---

# --description--

jQuery を使い始めると、HTML で実際に要素を変更しなくても HTML の要素が変更されます。

このコードを直接変更してはならないことを全員に知らせましょう。

コメントは、`<!--` で始まり、`-->` で終わります。

HTML の先頭に、`Code below this line should not be changed` というコメントを追加して、この行より下のコードは変更してはならないことを知らせてください。

# --hints--

HTML の先頭で、`<!--` を使用してコメントの開始を示します。

```js
assert(code.match(/^\s*<!--/));
```

コメントのテキストを `Code below this line should not be changed` にします。

```js
assert(code.match(/<!--(?!(>|->|.*-->.*this line))\s*.*this line.*\s*-->/gi));
```

`-->` を使用してコメントの終了を示します。

```js
assert(code.match(/-->.*\n+.+/g));
```

コメントの開始と終了の数は同じにする必要があります。

```js
assert(code.match(/<!--/g).length === code.match(/-->/g).length);
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
<!-- Code below this line should not be changed -->
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
