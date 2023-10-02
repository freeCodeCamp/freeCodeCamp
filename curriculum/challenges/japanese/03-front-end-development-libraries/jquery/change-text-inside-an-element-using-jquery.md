---
id: 564944c91be2204b269d51e3
title: jQuery を使用して要素の内側のテキストを変更する
challengeType: 6
forumTopicId: 16773
dashedName: change-text-inside-an-element-using-jquery
---

# --description--

jQuery を使用して、要素の開始タグと終了タグの間にあるテキストを変更できます。 HTML のマークアップを変更することもできます。

jQuery には `.html()` という関数があり、要素内に HTML タグとテキストを追加できます。 すでに要素内にある内容はすべて、この関数を使用して提供する内容に完全に置き換えられます。

見出しのテキストを書き換えて強調表示する方法を次に示します。

```js
$("h3").html("<em>jQuery Playground</em>");
```

jQuery には `.text()` という同様の関数もあります。この関数は、タグを追加せずにテキストのみを変更します。 つまり、この関数は渡された HTML タグを評価せず、既存の内容を置き換える対象のテキストとして扱います。

id が `target4` のボタンを変更して、テキストを強調表示してください。

`<i>` と `<em>` の違いと用例については、<a href="https://www.freecodecamp.org/news/html-elements-explained-what-are-html-tags/#em-element" target="_blank" rel="noopener noreferrer nofollow">freeCodeCamp ニュースブログの &lt;em&gt; に関する記事</a>を参照してください。

`<i>` タグは従来からテキストの強調に使用されていますが、最近ではアイコンのタグとして採用されています。 `<em>` タグは現在、強調用のタグとして広く使用されています。 このチャレンジではどちらも正しく機能します。

# --hints--

HTML タグを追加して、`target4` ボタンのテキストを強調表示します。

```js
assert.isTrue(
  /<em>|<i>\s*#target4\s*<\/em>|<\/i>/gi.test($('#target4').html())
);
```

それ以外はテキストに変更を加えません。

```js
assert($('#target4') && $('#target4').text().trim() === '#target4');
```

他のテキストは変更しません。

```js
assert.isFalse(/<em>|<i>/gi.test($('h3').html()));
```

`.text()` ではなく `.html()` を使用してください。

```js
assert(code.match(/\.html\(/g));
```

jQuery を使用して `button id="target4"` を選択します。

```js
assert(code.match(/\$\(\s*?(\"|\')#target4(\"|\')\s*?\)\.html\(/));
```

# --seed--

## --seed-contents--

```html
<script>
  $(document).ready(function() {
    $("#target1").css("color", "red");

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
    $("#target4").html('<em>#target4</em>');
  });
</script>

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
