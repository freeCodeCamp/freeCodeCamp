---
id: bad87fee1348bd9aeda08726
title: jQuery の関数を削除する
challengeType: 6
forumTopicId: 17561
required:
  - 
    link: 'https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.2.0/animate.css'
dashedName: delete-your-jquery-functions
---

# --description--

こうしたアニメーションは当初は素敵でしたが、今では少し飽きられています。

これら 3 つの jQuery 関数のすべてを `document ready function` から削除してください。ただし、`document ready function` 自体はそのままにしておいてください。

# --hints--

3つの jQuery 関数のすべてを `document ready function` から削除します。

```js
assert(code.match(/\{\s*\}\);/g));
```

`script` 要素をそのまま残しておきます。

```js
assert(code.match(/<script>/g));
```

`$(document).ready(function() {` を `script` 要素の先頭に残しておきます。

```js
assert(code.match(/\$\(document\)\.ready\(function\(\)\s?\{/g));
```

`document.ready` 関数の終了を示す `})` をそのまま残しておきます。

```js
assert(code.match(/.*\s*\}\);/g));
```

`script` 要素の終了タグをそのまま残しておきます。

```js
assert(
  code.match(/<\/script>/g) &&
    code.match(/<script/g) &&
    code.match(/<\/script>/g).length === code.match(/<script/g).length
);
```

# --seed--

## --seed-contents--

```html
<script>
  $(document).ready(function() {
    $("button").addClass("animated bounce");
    $(".well").addClass("animated shake");
    $("#target3").addClass("animated fadeOut");

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
