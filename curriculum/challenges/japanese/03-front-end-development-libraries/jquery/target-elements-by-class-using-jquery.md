---
id: bad87fee1348bd9aedc08826
title: jQuery を使用してターゲットの要素をクラスで指定する
challengeType: 6
forumTopicId: 18316
required:
  - 
    link: 'https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.2.0/animate.css'
dashedName: target-elements-by-class-using-jquery
---

# --description--

すべての `button` 要素をバウンスさせる方法がわかったでしょうか？ `$("button")` を使用してそれらのボタンを選択し、`.addClass("animated bounce");` を使用していくつかの CSS クラスを追加しました。

要素にクラスを追加できる jQuery の `.addClass()` 関数はすでに使用しました。

まず、`$(".well")` セレクターを使用して、クラス `well` を持つ `div` 要素をターゲットとして選択しましょう。

CSS 宣言と同様に、クラス名の前に `.` を入力することに注意してください。

次に、jQuery の `.addClass()` 関数を使用して、クラス `animated` と `shake` を追加してください。

たとえば、次のコードを `document ready function` に追加すると、クラス `text-primary` を持つすべての要素を揺らすことができます。

```js
$(".text-primary").addClass("animated shake");
```

# --hints--

jQuery の `addClass()` 関数を使用して、クラス `well` を持つすべての要素にクラス `animated` と `shake` を付けます。

```js
assert($('.well').hasClass('animated') && $('.well').hasClass('shake'));
```

jQuery のみを使用して、これらのクラスを要素に追加してください。

```js
assert(!code.match(/class\.\*animated/g));
```

# --seed--

## --seed-contents--

```html
<script>
  $(document).ready(function() {
    $("button").addClass("animated bounce");
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
    $("button").addClass("animated bounce");
    $(".well").addClass("animated shake");
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
