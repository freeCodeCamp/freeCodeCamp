---
id: bad87fee1348bd9aed108826
title: jQuery を使用して要素の特定の子要素をターゲットにする
challengeType: 6
forumTopicId: 18315
required:
  - 
    link: 'https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.2.0/animate.css'
dashedName: target-a-specific-child-of-an-element-using-jquery
---

# --description--

id 属性は jQuery のセレクターのターゲットを指定するのにとても便利です。 しかし、そうした整理された id をいつでも利用できるように用意しているとは限りません。

幸い、jQuery には他にも正しい要素をターゲットとして指定する方法があります。

jQuery では、ターゲット要素を指定するのに CSS セレクターを使用します。 `target:nth-child(n)` という CSS セレクターを使用すると、ターゲットのクラスまたは要素タイプを持つすべての nth (n 番目の) 要素を選択できます。

それぞれのウェルの 3 番目の要素にバウンスクラスを付ける方法を次に示します。

```js
$(".target:nth-child(3)").addClass("animated bounce");
```

それぞれのウェル要素の 2 番目の子要素をバウンスさせてください。 要素の子要素のうち `target` クラスを持つものを選択する必要があります。

# --hints--

`target` 要素内の 2 番目の要素をバウンスさせます。

```js
assert(
  $('.target:nth-child(2)').hasClass('animated') &&
    $('.target:nth-child(2)').hasClass('bounce')
);
```

2 つの要素のみをバウンスさせます。

```js
assert($('.animated.bounce').length === 2);
```

`:nth-child()` セレクターを使用して、これらの要素を変更します。

```js
assert(code.match(/\:nth-child\(/g));
```

jQuery のみを使用して、これらのクラスを要素に追加してください。

```js
assert(
  code.match(/\$\(".target:nth-child\(2\)"\)/g) ||
    code.match(/\$\('.target:nth-child\(2\)'\)/g) ||
    code.match(/\$\(".target"\).filter\(":nth-child\(2\)"\)/g) ||
    code.match(/\$\('.target'\).filter\(':nth-child\(2\)'\)/g)
);
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
    $(".target:nth-child(2)").addClass("animated bounce");
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
