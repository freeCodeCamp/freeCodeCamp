---
id: bad87fee1348bd9aed908626
title: 複数の jQuery セレクターを使用して同じ要素をターゲットにする
challengeType: 6
forumTopicId: 18322
required:
  - 
    link: 'https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.2.0/animate.css'
dashedName: target-the-same-element-with-multiple-jquery-selectors
---

# --description--

ターゲットの要素を指定する 3 つの方法 (タイプで指定: `$("button")`、クラスで指定: `$(".btn")`、id で指定: `$("#target1")`) について説明しました。

1 つの `.addClass()` 呼び出しで複数のクラスを追加することもできますが、*3 つの別々の方法*で同じ要素に追加してみましょう。

`.addClass()` を使用し、3 つの異なる方法で、同じ要素に一度に 1 つのクラスのみを追加してください。

タイプ `button` を持つすべての要素に `animated` クラスを追加します。

クラス `.btn` を持つすべてのボタンに `shake` クラスを追加します。

id `#target1` を持つボタンに `btn-primary` クラスを追加します。

**注:** 1 つの要素のみをターゲットにし、一度に 1 つのクラスのみを追加してください。 最終的に、3 つの個々のセレクターによって `shake`、`animated`、`btn-primary` の 3 つのクラスが `#target1` に追加されます。

# --hints--

コードで `$("button")` セレクターを使用します。

```js
assert(code.match(/\$\s*?\(\s*?(?:'|")\s*?button\s*?(?:'|")/gi));
```

コードで `$(".btn")` セレクターを使用します。

```js
assert(code.match(/\$\s*?\(\s*?(?:'|")\s*?\.btn\s*?(?:'|")/gi));
```

コードで `$("#target1")` セレクターを使用します。

```js
assert(code.match(/\$\s*?\(\s*?(?:'|")\s*?#target1\s*?(?:'|")/gi));
```

3 つそれぞれのセレクターで 1 つのクラスのみを追加してください。

```js
assert(
  code.match(/addClass/g) &&
    code.match(/addClass\s*?\(\s*?('|")\s*?[\w-]+\s*?\1\s*?\)/g).length > 2
);
```

`#target1` 要素がクラス `animated`、`shake`、`btn-primary` を持ちます。

```js
assert(
  $('#target1').hasClass('animated') &&
    $('#target1').hasClass('shake') &&
    $('#target1').hasClass('btn-primary')
);
```

jQuery のみを使用して、これらのクラスを要素に追加してください。

```js
assert(!code.match(/class.*animated/g));
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
    $("button").addClass("animated");
    $(".btn").addClass("shake");
    $("#target1").addClass("btn-primary");
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
