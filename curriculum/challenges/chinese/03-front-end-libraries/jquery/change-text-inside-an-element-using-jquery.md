---
id: 564944c91be2204b269d51e3
title: 使用 jQuery 更改元素内部的文本
challengeType: 6
forumTopicId: 16773
dashedName: change-text-inside-an-element-using-jquery
---

# --description--

你能用 jQuery 改变起始标签和结束标签之间的文本，甚至改变 HTML 标签。

jQuery 有一个`.html()`函数，你能用其在标签里添加 HTML 标签和文本，函数提供的内容将完全替换之前标签的内容。

下面的代码效果是重写并强调标题文本：

`$("h3").html("<em>jQuery Playground</em>");`

类似的，jQuery 有一个`.text()`函数，其改变文本而不增加标签。换而言之，该函数会忽略所有传递过来的 HTML 标签，并将其视为用来替换原文本的文本。

请强调 id 为`target4`的按钮的文本。

请查看此[链接](https://www.freecodecamp.org/news/html-elements-explained-what-are-html-tags/#em-elemen)来了解更多`<i>`和`<em>`的区别和用法。

注意，`<i>`标签虽然传统上用来强调文本，但此后常用作图标的标签；`<em>`标签作为强调标签现在已被广泛接受。两者都可以应对本次挑战。

# --hints--

通过添加 HTML 标签强调`target4`按钮中的文本。

```js
assert.isTrue(
  /<em>|<i>\s*#target4\s*<\/em>|<\/i>/gi.test($('#target4').html())
);
```

确保文本不乱。

```js
assert($('#target4') && $('#target4').text().trim() === '#target4');
```

不改变其他任何文本内容。

```js
assert.isFalse(/<em>|<i>/gi.test($('h3').html()));
```

确保使用`.html()`方法而不是`.text()`方法。

```js
assert(code.match(/\.html\(/g));
```

确保用 jQuery 选取`button id='target4'`。

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
