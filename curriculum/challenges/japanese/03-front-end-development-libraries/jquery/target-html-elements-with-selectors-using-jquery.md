---
id: bad87fee1348bd9bedc08826
title: jQuery でセレクターを使用して HTML 要素をターゲットにする
challengeType: 6
forumTopicId: 18319
required:
  - 
    link: 'https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.2.0/animate.css'
dashedName: target-html-elements-with-selectors-using-jquery
---

# --description--

ここには `document ready` 関数があります。

最初の jQuery ステートメントを記述してみましょう。 すべての jQuery 関数は `$` で始まります。通常、これはドル記号演算子またはブリングと呼ばれます。

多くの場合、jQuery では<dfn>セレクター</dfn>を使用して HTML 要素を選択した後、その要素に対して何かを実行します。

たとえば、すべての `button` 要素をバウンスさせてみましょう。 それには次のコードを document ready function の中に追加するだけです。

```js
$("button").addClass("animated bounce");
```

すでに jQuery ライブラリと Animate.css ライブラリの両方を追加してあるので、エディターでそれらを使用できます。 つまり、jQuery を使用して Animate.css の `bounce` クラスを `button` 要素に適用しています。

# --hints--

jQuery の `addClass()` 関数を使用して、クラス `animated` と `bounce` を `button` 要素に付けます。

```js
assert($('button').hasClass('animated') && $('button').hasClass('bounce'));
```

jQuery のみを使用して、これらのクラスを要素に追加してください。

```js
assert(!code.match(/class.*animated/g));
```

jQuery のコードは `$(document).ready();` 関数の中に記述します。

```js
assert(
  code.replace(/\s/g, '').match(/\$\(document\)\.ready\(function\(\)\{\$/g)
);
```

# --seed--

## --seed-contents--

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

# --solutions--

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
