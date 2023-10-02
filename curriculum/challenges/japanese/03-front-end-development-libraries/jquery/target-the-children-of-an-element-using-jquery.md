---
id: bad87fee1348bd9aed208826
title: jQuery を使用して要素の子要素をターゲットにする
challengeType: 6
forumTopicId: 18320
dashedName: target-the-children-of-an-element-using-jquery
---

# --description--

HTML 要素が別の要素の 1 つ下のレベルに配置されたとき、それをその要素の<dfn>子要素</dfn>と呼びます。 たとえば、このチャレンジにあるボタン要素のうちテキスト `#target1`、`#target2`、および `#target3` を持つものはすべて、`<div class="well" id="left-well">` 要素の子要素です。

jQuery には `children()` という関数があり、選択した要素の子要素にアクセスすることができます。

`children()` 関数を使用して、`left-well` 要素の子要素に `blue` の色を付ける例を次に示します。

```js
$("#left-well").children().css("color", "blue")
```

# --instructions--

`right-well` 要素のすべての子要素に、オレンジ色を付けてください。

# --hints--

`#right-well` のすべての子要素のテキストをオレンジ色にします。

```js
assert($('#right-well').children().css('color') === 'rgb(255, 165, 0)');
```

`children()` 関数を使用して、これらの要素を変更します。

```js
assert(code.match(/\.children\(\)\.css/g));
```

jQuery のみを使用して、これらのクラスを要素に追加してください。

```js
assert(code.match(/<div class="well" id="right-well">/g));
```

# --seed--

## --seed-contents--

```html
<script>
  $(document).ready(function() {
    $("#target1").css("color", "red");
    $("#target1").prop("disabled", true);
    $("#target4").remove();
    $("#target2").appendTo("#right-well");
    $("#target5").clone().appendTo("#left-well");
    $("#target1").parent().css("background-color", "red");

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
    $("#target1").css("color", "red");
    $("#target1").prop("disabled", true);
    $("#target4").remove();
    $("#target2").appendTo("#right-well");
    $("#target5").clone().appendTo("#left-well");
    $("#target1").parent().css("background-color", "red");
    $("#right-well").children().css("color", "orange");
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
